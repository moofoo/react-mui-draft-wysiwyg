import createContext from "zustand/context";
import shallowCompare from 'zustand/shallow';
import { EditorState, Modifier, RichUtils } from 'draft-js';
import React from 'react';
import memoize from 'lodash.memoize';

const { Provider, useStore, useStoreApi } = createContext();

useStore.useApi = useStoreApi.bind(useStoreApi);

export { useStore, useStoreApi, Provider };

export const getOnChange = state => state.onChange;
export const editorStateSelect = state => state.editorState;
export const getEditorRef = state => state.ref;
export const getTranslate = state => state.translate;

export const useOnChange = () => useStore(getOnChange);
export const useEditorState = () => useStore(editorStateSelect);
export const useEditorRef = () => useStore(getEditorRef);
export const useTranslate = () => useStore(getTranslate);

export const getEditorState = () => {
    const api = useStore.useApi();
    const state = api.getState();
    return state.editorState;
}

export const useTransientState = (selector = function (state) { return state }, shallow = false) => {
    const api = useStore.useApi();

    const stateRef = React.useRef(selector(api.getState()) || null);

    useEffect(() => api.subscribe(
        selected => (stateRef.current = selected),
        (state) => selector(state),
        shallow ? shallowCompare : undefined
    ), []);

    return stateRef;
}


export const useTransientStateLayout = (selector = function (state) { return state }, shallow = false) => {
    const api = useStore.useApi();
    const stateRef = React.useRef(selector(api.getState()) || null);

    React.useLayoutEffect(() => api.subscribe(
        selected => (stateRef.current = selected),
        (state) => selector(state),
        shallow ? shallowCompare : undefined
    ), []);

    return stateRef;
}

export function useCallbackOnFrame(callback, selector = function (state) { return state }, shallow = false, timeout = 10) {
    const api = useStore.useApi();

    const timer = React.useRef({ timeout: null, selected: null });

    React.useLayoutEffect(() => api.subscribe(
        (selected) => {
            if (!timer.timeout) {
                timer.count = 1;
            } else {
                timer.count++;
            }

            timer.selected = selected;
            clearTimeout(timer.timeout);

            if (timer.count >= 3) {
                timer.timeout = null;
                callback(timer.selected);
                return;
            } else {
                timer.timeout = setTimeout(() => {
                    callback(timer.selected);
                    timer.timeout = null;
                }, timeout);
            }
        },
        (state) => selector(state),
        shallow ? shallowCompare : undefined
    ));
}


const stateOr = (state) => state?.editorState ? state.editorState : state;

export const getEditorStateSelection = memoize((state) => {
    const editorState = stateOr(state);
    return editorState.getSelection();
}, (state) => state?.editorState ? state.editorState : state);

const getSelectionCollapsed = state => state.editorState.getSelection().isCollaped();
export const useSelectionCollapsed = () => useStore(getSelectionCollapsed);

let selectors = {
    editorState: (state) => stateOr(state),
    blockType: (state) => RichUtils.getCurrentBlockType(stateOr(state)),
    currentContent: (state) => stateOr(state).getCurrentContent(),
    startKey: (state) => { const selection = getEditorStateSelection(stateOr(state)); return selection ? selection.getStartKey() : null; },
    startOffset: (state) => { const selection = getEditorStateSelection(stateOr(state)); return selection ? selection.getStartOffset() : null; },
    endKey: (state) => { const selection = getEditorStateSelection(stateOr(state)); return selection ? selection.getEndKey() : null; },
    endOffset: (state) => { const selection = getEditorStateSelection(stateOr(state)); return selection ? selection.getEndOffset() : null; },
    currentInlineStyle: (state) => stateOr(state).getCurrentInlineStyle(),
    keysAndBlock: (state) => {
        const editorState = stateOr(state);

        const selection = selectors.selection(editorState);
        const startKey = selection.getStartKey();
        const startOffset = selection.getStartOffset();
        const endKey = selection.getEndKey();
        const endOffset = selection.getEndOffset();

        const currentContent = editorState.getCurrentContent();

        let block = currentContent.getBlockForKey(startKey);

        return {
            startKey,
            startOffset,
            endKey,
            endOffset,
            currentContent,
            block
        }
    }
}

for (const [name, selector] of Object.entries(selectors)) {
    selectors[name] = memoize(selector, (state) => stateOr(state))
}

selectors.selection = getEditorStateSelection;

export { selectors };

export const getToggleLink = (selection) => {
    const api = useStore.useApi();

    const state = api.getState();
    selection = selection || selectors.selection(state);
    return RichUtils.toggleLink(state.editorState, selection, null);
}

export const useCurrentBlockType = (availableBlockTypes) => {
    return useStore(useCallback(state => {
        const blockType = RichUtils.getCurrentBlockType(editorState);
        if (availableBlockTypes.find((avBlockType) => avBlockType === blockType)) return blockType;
        return 'default';
    }, [availableBlockTypes.toString()]));
}

export const getBlockTypeToggle = memoize((newValue = 'normal') => {
    const api = useStore.useApi();


    const state = api.getState();
    return RichUtils.toggleBlockType(
        state.editorState,
        newValue === 'normal' ? '' : newValue
    );
}, (newValue) => newValue);


export const hasSelectionStyle = (inlineStyle) => {
    const api = useStore.useApi();


    const state = api.getState();

    const { startKey, startOffset, endKey, endOffset, currentContent, block } = selectors.keysAndBlock(state);

    const styleRangesCallback = (block) => (start, end) => {
        const expectedStart = block.getKey() === startKey ? startOffset : 0;
        const expectedEnd = block.getKey() === endKey ? endOffset : block.getLength() - 1;
        allHasTheInlineStyle = start <= expectedStart && end >= expectedEnd;
    };

    while (block && allHasTheInlineStyle) {
        allHasTheInlineStyle = false;
        block.findStyleRanges(
            (character) => character.hasStyle(inlineStyle),
            styleRangesCallback(block)
        );
        if (block.getKey() !== endKey) break;
        block = currentContent.getBlockAfter(block.getKey());
    }

    return allHasTheInlineStyle;
};



export const toggleMappedStyle = memoize((styleKeys, newInlineStyle) => {
    const api = useStore.useApi();

    const state = api.getState();
    const { editorState } = state;

    const selection = selectors.selection(state);


    // Turn off the other mapped inline styled in selection
    const newContentState = styleKeys.reduce(
        (contentState, inlineStyle) =>
            Modifier.removeInlineStyle(contentState, selection, inlineStyle),
        selectors.currentContent(state)
    );



    let newEditorState = EditorState.push(editorState, newContentState, 'change-inline-style');

    const currentStyle = editorState.getCurrentInlineStyle();

    if (selection.isCollapsed()) {
        newEditorState = currentStyle.reduce((state, inlineStyle) => {
            return RichUtils.toggleInlineStyle(state, inlineStyle);
        }, newEditorState);
    }
    // If the inline style is being toggled on, apply it.
    if (!currentStyle.has(newInlineStyle)) {
        newEditorState = RichUtils.toggleInlineStyle(newEditorState, newInlineStyle);
    }

    return newEditorState;
}, (styleKeys, inlineStyle) => styleKeys.toString() + inlineStyle);

export const getCurrentMappedStyle = (styleKeys, defaultInlineStyle = null) => {
    const api = useStore.useApi();

    const state = api.getState();

    const currentStyle = selectors.currentInlineStyle(state);

    return (
        currentStyle.find((inlineStyle) => styleKeys.includes(inlineStyle)) || defaultInlineStyle
    );
};


export const applyEntityToSelection = (entityType, mutability, entityData) => {
    const api = useStore.useApi();


    const state = api.getState();
    const content = selectors.currentContent(state);
    const contentWithEntity = content.createEntity(entityType, mutability, entityData);
    const entityKey = contentWithEntity.getLastCreatedEntityKey();
    const selection = selectors.selection(state);
    const contentStateWithEntity = Modifier.applyEntity(contentWithEntity, selection, entityKey);
    console.log("EDITOR STATE", EditorState);
    return EditorState.push(state.editorState, contentStateWithEntity, 'apply-entity');
};


