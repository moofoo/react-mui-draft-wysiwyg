function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var draftJs = require('draft-js');
var draftJs__default = _interopDefault(draftJs);
var PropTypes = _interopDefault(require('prop-types'));
var Grid = _interopDefault(require('@mui/material/Grid'));
var Paper$1 = _interopDefault(require('@mui/material/Paper'));
var Divider = _interopDefault(require('@mui/material/Divider'));
var IconButton = _interopDefault(require('@mui/material/IconButton'));
var Tooltip = _interopDefault(require('@mui/material/Tooltip'));
var Badge = _interopDefault(require('@mui/material/Badge'));
var makeStyles = _interopDefault(require('@mui/styles/makeStyles'));
var UndoIcon = _interopDefault(require('@mui/icons-material/Undo'));
require('zustand/shallow');
var memoize = _interopDefault(require('lodash.memoize'));
var RedoIcon = _interopDefault(require('@mui/icons-material/Redo'));
var FormatBoldIcon = _interopDefault(require('@mui/icons-material/FormatBold'));
var FormatItalicIcon = _interopDefault(require('@mui/icons-material/FormatItalic'));
var FormatUnderlinedIcon = _interopDefault(require('@mui/icons-material/FormatUnderlined'));
var FormatStrikethroughIcon = _interopDefault(require('@mui/icons-material/FormatStrikethrough'));
var LinkIcon = _interopDefault(require('@mui/icons-material/Link'));
var Dialog = _interopDefault(require('@mui/material/Dialog'));
var DialogContent = _interopDefault(require('@mui/material/DialogContent'));
var TextField = _interopDefault(require('@mui/material/TextField'));
var DialogActions = _interopDefault(require('@mui/material/DialogActions'));
var Button = _interopDefault(require('@mui/material/Button'));
var Link = _interopDefault(require('@mui/material/Link'));
var Popover = _interopDefault(require('@mui/material/Popover'));
var ButtonGroup = _interopDefault(require('@mui/material/ButtonGroup'));
var LaunchIcon = _interopDefault(require('@mui/icons-material/Launch'));
var LinkOffIcon = _interopDefault(require('@mui/icons-material/LinkOff'));
var Select = _interopDefault(require('@mui/material/Select'));
var MenuItem = _interopDefault(require('@mui/material/MenuItem'));
var FormatListBulletedIcon = _interopDefault(require('@mui/icons-material/FormatListBulleted'));
var FormatListNumberedIcon = _interopDefault(require('@mui/icons-material/FormatListNumbered'));
var FormatAlignLeftIcon = _interopDefault(require('@mui/icons-material/FormatAlignLeft'));
var FormatAlignCenterIcon = _interopDefault(require('@mui/icons-material/FormatAlignCenter'));
var FormatAlignRightIcon = _interopDefault(require('@mui/icons-material/FormatAlignRight'));
var FormatAlignJustifyIcon = _interopDefault(require('@mui/icons-material/FormatAlignJustify'));
var FormatColorTextIcon = _interopDefault(require('@mui/icons-material/FormatColorText'));
var FormatColorResetIcon = _interopDefault(require('@mui/icons-material/FormatColorReset'));
var CheckIcon = _interopDefault(require('@mui/icons-material/Check'));
var BorderColorIcon = _interopDefault(require('@mui/icons-material/BorderColor'));
var ImageIcon = _interopDefault(require('@mui/icons-material/Image'));
var List = _interopDefault(require('@mui/material/List'));
var ListItem = _interopDefault(require('@mui/material/ListItem'));
var ListItemIcon = _interopDefault(require('@mui/material/ListItemIcon'));
var ListItemText = _interopDefault(require('@mui/material/ListItemText'));
var PublishIcon = _interopDefault(require('@mui/icons-material/Publish'));
var CircularProgress = _interopDefault(require('@mui/material/CircularProgress'));
var Typography = _interopDefault(require('@mui/material/Typography'));
var LockOpenIcon = _interopDefault(require('@mui/icons-material/LockOpen'));
var LockIcon = _interopDefault(require('@mui/icons-material/Lock'));
var ArrowLeftIcon = _interopDefault(require('@mui/icons-material/ArrowLeft'));
var ArrowRightIcon = _interopDefault(require('@mui/icons-material/ArrowRight'));
var PhotoSizeSelectLargeIcon = _interopDefault(require('@mui/icons-material/PhotoSizeSelectLarge'));
var DeleteIcon = _interopDefault(require('@mui/icons-material/Delete'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _excluded = ["children", "visible"];

function EditorToolbar(_ref) {
  var children = _ref.children,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? true : _ref$visible,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Paper$1, _extends({
    hidden: !visible
  }, rest), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    alignItems: "center"
  }, children));
}

EditorToolbar.propTypes = {
  children: PropTypes.any,
  visible: PropTypes.bool
};

function DividerControl() {
  return /*#__PURE__*/React.createElement(Divider, {
    orientation: "vertical",
    flexItem: true
  });
}

var _excluded$1 = ["children", "onClick", "disabled", "active", "text", "badgeColor"];
var useStyles = makeStyles({
  badge: function badge(props) {
    return {
      background: props.badgeColor
    };
  }
});

function ButtonControl(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      _ref$badgeColor = _ref.badgeColor,
      badgeColor = _ref$badgeColor === void 0 ? null : _ref$badgeColor,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var classes = useStyles({
    badgeColor: badgeColor
  });
  return /*#__PURE__*/React.createElement(Tooltip, {
    title: text,
    "aria-disabled": disabled
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(IconButton, _extends({
    onClick: onClick,
    disabled: disabled,
    color: active ? 'primary' : 'default'
  }, rest, {
    size: "large"
  }), /*#__PURE__*/React.createElement(Badge, {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    classes: {
      badge: classes.badge
    },
    overlap: "circular",
    badgeContent: " ",
    invisible: badgeColor === null,
    variant: "dot"
  }, children))));
}

ButtonControl.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.any,
  badgeColor: PropTypes.any,
  active: PropTypes.bool
};

var getStoreState = function getStoreState(config) {
  var _ref;

  config = config || {
    lang: 'en',
    translations: {},
    draftEditor: {},
    editor: {
      wrapperElement: Paper,
      className: '',
      style: {}
    },
    toolbar: {
      className: '',
      style: {},
      visible: true,
      position: 'top',
      controls: [toolbarControlTypes.divider, toolbarControlTypes.undo]
    }
  };
  return _ref = {
    editorState: createWithContent(config, convertFromRaw({
      blocks: [{
        data: {},
        depth: 0,
        entityRanges: [],
        inlineStyleRanges: [],
        key: '1aa1a',
        text: ''
      }],
      entityMap: {}
    })),
    init: true,
    ref: null,
    onChange: null
  }, _ref["init"] = false, _ref.translate = function translate() {}, _ref.setEditorState = function setEditorState(newState) {
    return set(function () {
      return {
        editorState: newState
      };
    });
  }, _ref.setEditorRef = function setEditorRef(ref) {
    return set(function () {
      return {
        ref: ref
      };
    });
  }, _ref.setOnChange = function setOnChange(onChange) {
    return set(function () {
      return {
        onChange: onChange
      };
    });
  }, _ref.setTranslate = function setTranslate(translate) {
    return set(function () {
      return {
        translate: translate
      };
    });
  }, _ref.setStuff = function setStuff(ref, onChange, translate) {
    return set(function () {
      return {
        ref: ref,
        onChange: onChange,
        translate: translate
      };
    });
  }, _ref;
};

var useStore = create(function (set) {
  return {
    editorState: null,
    init: false,
    ref: null,
    onChange: null,
    translate: function translate() {},
    setEditorState: function setEditorState(newState) {
      return set(function () {
        return {
          editorState: newState
        };
      });
    },
    setEditorRef: function setEditorRef(ref) {
      return set(function () {
        return {
          ref: ref
        };
      });
    },
    setOnChange: function setOnChange(onChange) {
      return set(function () {
        return {
          onChange: onChange
        };
      });
    },
    setTranslate: function setTranslate(translate) {
      return set(function () {
        return {
          translate: translate
        };
      });
    },
    setStuff: function setStuff(ref, onChange, translate) {
      return set(function () {
        return {
          ref: ref,
          onChange: onChange,
          translate: translate
        };
      });
    }
  };
});
var getOnChange = function getOnChange(state) {
  return state.onChange;
};
var editorStateSelect = function editorStateSelect(state) {
  return state.editorState;
};
var getEditorRef = function getEditorRef(state) {
  return state.ref;
};
var getTranslate = function getTranslate(state) {
  return state.translate;
};
var useOnChange = function useOnChange() {
  return useStore(getOnChange);
};
var useEditorState = function useEditorState() {
  return useStore(editorStateSelect);
};
var useEditorRef = function useEditorRef() {
  return useStore(getEditorRef);
};
var useTranslate = function useTranslate() {
  return useStore(getTranslate);
};
var getEditorState$1 = function getEditorState() {
  var state = useStore.getState();
  return state.editorState;
};

var stateOr = function stateOr(state) {
  return state !== null && state !== void 0 && state.editorState ? state.editorState : state;
};

var getEditorStateSelection = memoize(function (state) {
  var editorState = stateOr(state);
  return editorState.getSelection();
}, function (state) {
  return state !== null && state !== void 0 && state.editorState ? state.editorState : state;
});

var getSelectionCollapsed = function getSelectionCollapsed(state) {
  return state.editorState.getSelection().isCollaped();
};

var useSelectionCollapsed = function useSelectionCollapsed() {
  return useStore(getSelectionCollapsed);
};
var selectors = {
  editorState: function editorState(state) {
    return stateOr(state);
  },
  blockType: function blockType(state) {
    return draftJs.RichUtils.getCurrentBlockType(stateOr(state));
  },
  currentContent: function currentContent(state) {
    return stateOr(state).getCurrentContent();
  },
  startKey: function startKey(state) {
    var selection = getEditorStateSelection(stateOr(state));
    return selection ? selection.getStartKey() : null;
  },
  startOffset: function startOffset(state) {
    var selection = getEditorStateSelection(stateOr(state));
    return selection ? selection.getStartOffset() : null;
  },
  endKey: function endKey(state) {
    var selection = getEditorStateSelection(stateOr(state));
    return selection ? selection.getEndKey() : null;
  },
  endOffset: function endOffset(state) {
    var selection = getEditorStateSelection(stateOr(state));
    return selection ? selection.getEndOffset() : null;
  },
  currentInlineStyle: function currentInlineStyle(state) {
    return stateOr(state).getCurrentInlineStyle();
  },
  keysAndBlock: function keysAndBlock(state) {
    var editorState = stateOr(state);
    var selection = selectors.selection(editorState);
    var startKey = selection.getStartKey();
    var startOffset = selection.getStartOffset();
    var endKey = selection.getEndKey();
    var endOffset = selection.getEndOffset();
    var currentContent = editorState.getCurrentContent();
    var block = currentContent.getBlockForKey(startKey);
    return {
      startKey: startKey,
      startOffset: startOffset,
      endKey: endKey,
      endOffset: endOffset,
      currentContent: currentContent,
      block: block
    };
  }
};

for (var _i = 0, _Object$entries = Object.entries(selectors); _i < _Object$entries.length; _i++) {
  var _Object$entries$_i = _Object$entries[_i],
      name = _Object$entries$_i[0],
      selector = _Object$entries$_i[1];
  selectors[name] = memoize(selector, function (state) {
    return stateOr(state);
  });
}

selectors.selection = getEditorStateSelection;
var getToggleLink = function getToggleLink(selection) {
  var state = useStore.getState();
  selection = selection || selectors.selection(state);
  return draftJs.RichUtils.toggleLink(state.editorState, selection, null);
};
var useCurrentBlockType = function useCurrentBlockType(availableBlockTypes) {
  return useStore(useCallback(function (state) {
    var blockType = draftJs.RichUtils.getCurrentBlockType(editorState);
    if (availableBlockTypes.find(function (avBlockType) {
      return avBlockType === blockType;
    })) return blockType;
    return 'default';
  }, [availableBlockTypes.toString()]));
};
var getBlockTypeToggle = memoize(function (newValue) {
  if (newValue === void 0) {
    newValue = 'normal';
  }

  var state = useStore.getState();
  return draftJs.RichUtils.toggleBlockType(state.editorState, newValue === 'normal' ? '' : newValue);
}, function (newValue) {
  return newValue;
});
var hasSelectionStyle = function hasSelectionStyle(inlineStyle) {
  var state = useStore.getState();

  var _selectors$keysAndBlo = selectors.keysAndBlock(state),
      startKey = _selectors$keysAndBlo.startKey,
      startOffset = _selectors$keysAndBlo.startOffset,
      endKey = _selectors$keysAndBlo.endKey,
      endOffset = _selectors$keysAndBlo.endOffset,
      currentContent = _selectors$keysAndBlo.currentContent,
      block = _selectors$keysAndBlo.block;

  var styleRangesCallback = function styleRangesCallback(block) {
    return function (start, end) {
      var expectedStart = block.getKey() === startKey ? startOffset : 0;
      var expectedEnd = block.getKey() === endKey ? endOffset : block.getLength() - 1;
      allHasTheInlineStyle = start <= expectedStart && end >= expectedEnd;
    };
  };

  while (block && allHasTheInlineStyle) {
    allHasTheInlineStyle = false;
    block.findStyleRanges(function (character) {
      return character.hasStyle(inlineStyle);
    }, styleRangesCallback(block));
    if (block.getKey() !== endKey) break;
    currentContent.getBlockAfter(block.getKey()), _readOnlyError("block");
  }

  return allHasTheInlineStyle;
};
var toggleMappedStyle = memoize(function (styleKeys, newInlineStyle) {
  var state = useStore.getState();
  var editorState = state.editorState;
  var selection = selectors.selection(state);
  var newContentState = styleKeys.reduce(function (contentState, inlineStyle) {
    return draftJs.Modifier.removeInlineStyle(contentState, selection, inlineStyle);
  }, selectors.currentContent(state));
  var newEditorState = draftJs.EditorState.push(editorState, newContentState, 'change-inline-style');
  var currentStyle = editorState.getCurrentInlineStyle();

  if (selection.isCollapsed()) {
    newEditorState = currentStyle.reduce(function (state, inlineStyle) {
      return draftJs.RichUtils.toggleInlineStyle(state, inlineStyle);
    }, newEditorState);
  }

  if (!currentStyle.has(newInlineStyle)) {
    newEditorState = draftJs.RichUtils.toggleInlineStyle(newEditorState, newInlineStyle);
  }

  return newEditorState;
}, function (styleKeys, inlineStyle) {
  return styleKeys.toString() + inlineStyle;
});
var getCurrentMappedStyle = function getCurrentMappedStyle(styleKeys, defaultInlineStyle) {
  if (defaultInlineStyle === void 0) {
    defaultInlineStyle = null;
  }

  var state = useStore.getState();
  var currentStyle = selectors.currentInlineStyle(state);
  return currentStyle.find(function (inlineStyle) {
    return styleKeys.includes(inlineStyle);
  }) || defaultInlineStyle;
};
var applyEntityToSelection = function applyEntityToSelection(entityType, mutability, entityData) {
  var state = useStore.getState();
  var content = selectors.currentContent(state);
  var contentWithEntity = content.createEntity(entityType, mutability, entityData);
  var entityKey = contentWithEntity.getLastCreatedEntityKey();
  var selection = selectors.selection(state);
  var contentStateWithEntity = draftJs.Modifier.applyEntity(contentWithEntity, selection, entityKey);
  console.log("EDITOR STATE", draftJs.EditorState);
  return draftJs.EditorState.push(state.editorState, contentStateWithEntity, 'apply-entity');
};

function UndoControl() {
  var state = useStore();
  console.log("STATE", state);

  var onClick = function onClick() {
    state.onChange(draftJs.EditorState.undo(state.editorState));
    state.editorRef.current.focus();
  };

  return /*#__PURE__*/React.createElement(ButtonControl, {
    onClick: onClick,
    text: state.translate('controls.undo.title')
  }, /*#__PURE__*/React.createElement(UndoIcon, null));
}

function RedoControl() {
  var onChange = useOnChange();
  var translate = useTranslate();
  var editorRef = useEditorRef();

  var onClick = function onClick() {
    onChange(draftJs.EditorState.redo(getEditorState$1()));
    editorRef.current.focus();
  };

  return /*#__PURE__*/React.createElement(ButtonControl, {
    onClick: onClick,
    text: translate('controls.redo.title')
  }, /*#__PURE__*/React.createElement(RedoIcon, null));
}

ToggleInlineStyleButtonControl.propTypes = {
  inlineStyle: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  text: PropTypes.any
};

function ToggleInlineStyleButtonControl(_ref) {
  var inlineStyle = _ref.inlineStyle,
      children = _ref.children,
      text = _ref.text;
  var editorRef = useEditorRef();
  var isCollapsed = useSelectionCollapsed();
  var onChange = useOnChange();

  var _React$useState = React.useState(false),
      isActive = _React$useState[0],
      setIsActive = _React$useState[1];

  React.useEffect(function () {
    setIsActive(hasSelectionStyle(inlineStyle));
  }, [inlineStyle]);

  var onClick = function onClick() {
    var newEditorState = draftJs.RichUtils.toggleInlineStyle(getEditorState$1(), inlineStyle);
    onChange(newEditorState);
    editorRef.current.focus();
  };

  return /*#__PURE__*/React.createElement(ButtonControl, {
    text: text,
    onClick: onClick,
    active: isActive,
    disabled: isCollapsed
  }, children);
}

var inlineStyles = {
  BOLD: 'BOLD',
  ITALIC: 'ITALIC',
  UNDERLINE: 'UNDERLINE',
  STRIKETHROUGH: 'STRIKETHROUGH',
  CODE: 'CODE',
  FONT_FAMILY: 'FONT_FAMILY',
  FONT_SIZE: 'FONT_SIZE',
  FONT_COLOR: 'FONT_COLOR',
  FONT_BACKGROUND: 'FONT_BACKGROUND'
};

function BoldControl() {
  var state = useStore();
  console.log("STATE", state);
  return /*#__PURE__*/React.createElement(ToggleInlineStyleButtonControl, {
    inlineStyle: inlineStyles.BOLD,
    text: state.translate('controls.bold.title')
  }, /*#__PURE__*/React.createElement(FormatBoldIcon, null));
}

function ItalicControl() {
  var translate = useTranslate();
  return /*#__PURE__*/React.createElement(ToggleInlineStyleButtonControl, {
    inlineStyle: inlineStyles.ITALIC,
    text: translate('controls.italic.title')
  }, /*#__PURE__*/React.createElement(FormatItalicIcon, null));
}

function UnderlineControl() {
  var translate = useTranslate();
  return /*#__PURE__*/React.createElement(ToggleInlineStyleButtonControl, {
    inlineStyle: inlineStyles.UNDERLINE,
    text: translate('controls.underline.title')
  }, /*#__PURE__*/React.createElement(FormatUnderlinedIcon, null));
}

function StrikethroughControl() {
  var translate = useTranslate();
  return /*#__PURE__*/React.createElement(ToggleInlineStyleButtonControl, {
    inlineStyle: inlineStyles.STRIKETHROUGH,
    text: translate('controls.strikethrough.title')
  }, /*#__PURE__*/React.createElement(FormatStrikethroughIcon, null));
}

var entities = {
  LINK: 'LINK',
  IMAGE: 'IMAGE'
};

function LinkAddControl() {
  var translate = useTranslate();
  var editorRef = useEditorRef();
  var onChange = useOnChange();
  var isCollapsed = useSelectionCollapsed();
  var editor = useEditor();
  var editorFocus = editorRef.current.focus.bind(editorRef.current);

  var _React$useState = React.useState(false),
      isDialogOpened = _React$useState[0],
      setIsDialogOpened = _React$useState[1];

  var _React$useState2 = React.useState(''),
      link = _React$useState2[0],
      setLink = _React$useState2[1];

  var formRef = React.createRef();
  var onClick = React.useCallback(function () {
    setLink('');
    setIsDialogOpened(true);
  }, []);
  var handleCloseDialog = React.useCallback(function () {
    setIsDialogOpened(false);
  }, []);
  var onChangeLink = React.useCallback(function (ev) {
    setLink(ev.currentTarget.value);
  }, []);
  var handleSubmit = React.useCallback(function (ev) {
    ev.preventDefault();
    if (link === '') return;
    handleCloseDialog();
    onChange(applyEntityToSelection(entities.LINK, 'MUTABLE', {
      url: link
    }));
    editorFocus();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonControl, {
    onClick: onClick,
    text: translate('controls.linkAdd.title'),
    disabled: isCollapsed
  }, /*#__PURE__*/React.createElement(LinkIcon, null)), isDialogOpened ? /*#__PURE__*/React.createElement(Dialog, {
    open: isDialogOpened,
    onClose: handleCloseDialog
  }, /*#__PURE__*/React.createElement("form", {
    ref: formRef,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(DialogContent, null, /*#__PURE__*/React.createElement(TextField, {
    autoFocus: true,
    label: translate('controls.linkAdd.labels.link'),
    value: link,
    onChange: onChangeLink,
    fullWidth: true
  })), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    onClick: handleCloseDialog,
    color: "primary"
  }, translate('controls.linkAdd.actions.cancel')), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    color: "primary",
    disabled: link === ''
  }, translate('controls.linkAdd.actions.add'))))) : null);
}

var linkStrategy = function linkStrategy(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === entities.LINK;
  }, callback);
};

var EditorLink = function EditorLink(_ref) {
  var contentState = _ref.contentState,
      entityKey = _ref.entityKey,
      blockKey = _ref.blockKey,
      start = _ref.start,
      end = _ref.end,
      children = _ref.children;
  var onChange = useOnChange();
  var editorRef = useEditorRef();

  var _React$useState = React.useState(null),
      anchorEl = _React$useState[0];

  var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
      url = _contentState$getEnti.url;

  var showOptions = React.useCallback(function (ev) {
    setEl(ev.currentTarget);
  }, []);
  var hideOptions = React.useCallback(function () {
    setEl(null);
  }, []);

  var openLink = function openLink(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    window.open(url, '_blank');
  };

  var removeLink = function removeLink(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    var linkSelection = draftJs.SelectionState.createEmpty(blockKey).merge({
      anchorKey: blockKey,
      anchorOffset: start,
      focusKey: blockKey,
      focusOffset: end
    });
    onChange(getToggleLink(linkSelection));
    editorRef.current.focus();
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    href: url,
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": url,
    onClick: showOptions
  }, children), /*#__PURE__*/React.createElement(Popover, {
    open: Boolean(anchorEl),
    onClose: hideOptions,
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    size: "small",
    "aria-label": "Link options"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: openLink,
    title: "Open " + url
  }, /*#__PURE__*/React.createElement(LaunchIcon, null)), /*#__PURE__*/React.createElement(Button, {
    onClick: removeLink,
    title: "Remove link"
  }, /*#__PURE__*/React.createElement(LinkOffIcon, null)))));
};

EditorLink.propTypes = {
  contentState: PropTypes.object.isRequired,
  entityKey: PropTypes.string.isRequired,
  blockKey: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  children: PropTypes.any
};

var linkAddPlugin = function linkAddPlugin() {
  return {
    decorators: [{
      strategy: linkStrategy,
      component: EditorLink
    }]
  };
};

function LinkRemoveControl() {
  var isCollapsed = useSelectionCollapsed();
  var translate = useTranslate();
  var onChange = useOnChange();
  var onClick = React.useCallback(function () {
    onChange(getToggleLink());
  }, []);
  return /*#__PURE__*/React.createElement(ButtonControl, {
    onClick: onClick,
    text: translate('controls.linkRemove.title'),
    disabled: isCollapsed
  }, /*#__PURE__*/React.createElement(LinkOffIcon, null));
}

var LANG_PREFIX = 'lang::';

var translateLiteralWithPrefix = function translateLiteralWithPrefix(literal, translateFn) {
  return (typeof literal === 'string' || literal instanceof String) && literal.substr(0, LANG_PREFIX.length) === LANG_PREFIX ? translateFn(literal.substr(LANG_PREFIX.length)) : literal;
};

var _excluded$2 = ["value", "onChange", "options", "minWidth"];
var useStyles$1 = makeStyles(function (theme) {
  return {
    selectControl: {
      margin: theme.spacing(1)
    }
  };
});

function DropdownControl(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      options = _ref.options,
      _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === void 0 ? 120 : _ref$minWidth,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  var classes = useStyles$1();
  var translate = useTranslate();
  return /*#__PURE__*/React.createElement(Select, _extends({
    value: value,
    onChange: function onChange(ev) {
      return _onChange(ev.target.value);
    },
    className: classes.selectControl,
    style: {
      minWidth: minWidth
    }
  }, rest), options.map(function (option) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: option.value || 'empty',
      value: option.value
    }, option.text ? translateLiteralWithPrefix(option.text, translate) : '');
  }));
}

DropdownControl.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  minWidth: PropTypes.number
};

function BlockTypeControl(_ref) {
  var configuration = _ref.configuration,
      defaultConfiguration = _ref.defaultConfiguration;
  var onChange = useOnChange();
  var editorRef = useEditorRef();
  var options = configuration.options || defaultConfiguration.options;

  var _React$useState = React.useState('default'),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var currentBlockType = useCurrentBlockType(options.map(function (option) {
    return option.value;
  }));
  React.useEffect(function () {
    setValue(currentBlockType);
  }, [currentBlockType]);
  var handleChange = React.useCallback(function (newValue) {
    setValue(newValue);
    onChange(getBlockTypeToggle(newValue));
    editorRef.current.focus();
  }, []);
  return /*#__PURE__*/React.createElement(DropdownControl, {
    options: options,
    onChange: handleChange,
    value: value
  });
}

BlockTypeControl.propTypes = {
  configuration: PropTypes.any,
  defaultConfiguration: PropTypes.any.isRequired
};

ToggleBlockTypeButtonControl.propTypes = {
  blockType: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  text: PropTypes.any
};

function ToggleBlockTypeButtonControl(_ref) {
  var blockType = _ref.blockType,
      children = _ref.children,
      text = _ref.text;
  var editorRef = useEditorRef();
  var onChange = useOnChange();

  var onClick = function onClick() {
    onChange(getBlockTypeToggle(blockType));
    editorRef.current.focus();
  };

  return /*#__PURE__*/React.createElement(ButtonControl, {
    text: text,
    onClick: onClick
  }, children);
}

function UnorderedListControl() {
  var translate = useTranslate();
  return /*#__PURE__*/React.createElement(ToggleBlockTypeButtonControl, {
    blockType: "unordered-list-item",
    text: translate('controls.unorderedList.title')
  }, /*#__PURE__*/React.createElement(FormatListBulletedIcon, null));
}

var blockStyles = {
  H1: 'header-one',
  H2: 'header-two',
  H3: 'header-three',
  H4: 'header-four',
  H5: 'header-five',
  H6: 'header-six',
  UL: 'unordered-list-item',
  OL: 'ordered-list-item',
  BLOCKQUOTE: 'blockquote',
  CODE_BLOCK: 'code-block',
  UNSTYLED: 'unstyled',
  ATOMIC: 'atomic'
};

function OrderedListControl() {
  var translate = useTranslate();
  return /*#__PURE__*/React.createElement(ToggleBlockTypeButtonControl, {
    blockType: blockStyles.OL,
    text: translate('controls.orderedList.title')
  }, /*#__PURE__*/React.createElement(FormatListNumberedIcon, null));
}

function FontFamilyControl(_ref) {
  var pluginData = _ref.pluginData;
  var onChange = useOnChange();
  var editorRef = useEditorRef();

  var _React$useState = React.useState(inlineStyles.FONT_FAMILY + "-default"),
      selectedFontFamilyStyle = _React$useState[0],
      setSelectedFontFamilyStyle = _React$useState[1];

  var styleKeys = Object.keys(pluginData.customStyleMap);
  React.useEffect(function () {
    setSelectedFontFamilyStyle(getCurrentMappedStyle(styleKeys, inlineStyles.FONT_FAMILY + "-default"));
  }, [styleKeys.toString()]);

  var handleChange = function handleChange(newInlineStyle) {
    setSelectedFontFamilyStyle(newInlineStyle);
    var newEditorState = toggleMappedStyle(styleKeys, newInlineStyle);
    onChange(newEditorState);
    editorRef.current.focus();
  };

  return /*#__PURE__*/React.createElement(DropdownControl, {
    options: styleKeys.map(function (inlineStyle) {
      return {
        value: inlineStyle,
        text: pluginData.customStyleMap[inlineStyle].fontFamily ? /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: pluginData.customStyleMap[inlineStyle].fontFamily
          }
        }, pluginData.customStyleMap[inlineStyle].fontFamily) : 'default'
      };
    }),
    onChange: handleChange,
    value: selectedFontFamilyStyle
  });
}

FontFamilyControl.propTypes = {
  pluginData: PropTypes.any.isRequired
};

var fontFamilyPlugin = function fontFamilyPlugin(configuration, defaultConfiguration) {
  var fontFamilies = configuration.options || defaultConfiguration.options;
  var customStyleMap = {};

  for (var _iterator = _createForOfIteratorHelperLoose(fontFamilies), _step; !(_step = _iterator()).done;) {
    var fontFamily = _step.value;
    customStyleMap[inlineStyles.FONT_FAMILY + "-" + fontFamily] = fontFamily === 'default' ? {} : {
      fontFamily: fontFamily
    };
  }

  return {
    customStyleMap: customStyleMap
  };
};

function TextAlignControl() {
  var editorState = useEditorState();
  var onChange = useOnChange();
  var editorRef = useEditorRef();

  var _React$useState = React.useState(null),
      selectedTextAlign = _React$useState[0],
      setSelectedTextAlign = _React$useState[1];

  React.useEffect(function () {
    var selection = editorState.getSelection();
    var currentBlock = editorState.getCurrentContent().getBlockForKey(selection.getStartKey());
    var blockData = currentBlock.getData();

    if (blockData && blockData.get('textAlign')) {
      setSelectedTextAlign(blockData.get('textAlign'));
    } else {
      setSelectedTextAlign(null);
    }
  }, [editorState]);

  var toggle = function toggle(textAlign) {
    setSelectedTextAlign(textAlign);
    var newContentState = draftJs.Modifier.mergeBlockData(editorState.getCurrentContent(), editorState.getSelection(), {
      textAlign: textAlign
    });
    onChange(draftJs.EditorState.push(editorState, newContentState, 'change-block-data'));
    editorRef.current.focus();
  };

  var toggleLeft = React.useCallback(function () {
    return toggle('left');
  }, []);
  var toggleCenter = React.useCallback(function () {
    return toggle('center');
  }, []);
  var toggleRight = React.useCallback(function () {
    return toggle('right');
  }, []);
  var toggleJustify = React.useCallback(function () {
    return toggle('justify');
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonControl, {
    active: selectedTextAlign === 'left',
    onClick: toggleLeft,
    text: translate('controls.textAlign.actions.alignLeft')
  }, /*#__PURE__*/React.createElement(FormatAlignLeftIcon, null)), /*#__PURE__*/React.createElement(ButtonControl, {
    active: selectedTextAlign === 'center',
    onClick: toggleCenter,
    text: translate('controls.textAlign.actions.alignCenter')
  }, /*#__PURE__*/React.createElement(FormatAlignCenterIcon, null)), /*#__PURE__*/React.createElement(ButtonControl, {
    active: selectedTextAlign === 'right',
    onClick: toggleRight,
    text: translate('controls.textAlign.actions.alignRight')
  }, /*#__PURE__*/React.createElement(FormatAlignRightIcon, null)), /*#__PURE__*/React.createElement(ButtonControl, {
    active: selectedTextAlign === 'justify',
    onClick: toggleJustify,
    text: translate('controls.textAlign.actions.justify')
  }, /*#__PURE__*/React.createElement(FormatAlignJustifyIcon, null)));
}

TextAlignControl.propTypes = {};

var textAlignPlugin = function textAlignPlugin() {
  return {
    blockStyleFn: function blockStyleFn(block) {
      var textAlign = block.getData() ? block.getData().get('textAlign') : null;

      if (textAlign) {
        return "mui-editor-" + textAlign + "-aligned-block";
      }

      return '';
    }
  };
};

FontSizeControl.propTypes = {
  pluginData: PropTypes.object.isRequired
};

function FontSizeControl(_ref) {
  var pluginData = _ref.pluginData;
  var translate = useTranslate();
  var editorState = useEditorState();
  var onChange = useOnChange();
  var editorRef = useEditorRef();

  var _React$useState = React.useState(inlineStyles.FONT_SIZE + "-default"),
      selectedFontSizeStyle = _React$useState[0],
      setSelectedFontSizeStyle = _React$useState[1];

  var styleKeys = Object.keys(pluginData.customStyleMap);
  React.useEffect(function () {
    setSelectedFontSizeStyle(getCurrentMappedStyle(styleKeys, inlineStyles.FONT_SIZE + "-default"));
  }, [editorState, styleKeys]);

  var handleChange = function handleChange(newInlineStyle) {
    setSelectedFontSizeStyle(newInlineStyle);
    var newEditorState = toggleMappedStyle(styleKeys, newInlineStyle);
    onChange(newEditorState);
    editorRef.current.focus();
  };

  return /*#__PURE__*/React.createElement(DropdownControl, {
    options: styleKeys.map(function (inlineStyle) {
      return {
        text: pluginData.customStyleMap[inlineStyle].fontSize ? /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: pluginData.customStyleMap[inlineStyle].fontSize
          }
        }, pluginData.customStyleMap[inlineStyle].fontSize) : 'default',
        value: inlineStyle
      };
    }),
    onChange: handleChange,
    renderValue: function renderValue(style) {
      return pluginData.customStyleMap[style].fontSize || translate('controls.fontSize.labels.default');
    },
    value: selectedFontSizeStyle,
    minWidth: 50
  });
}

var fontSizePlugin = function fontSizePlugin(configuration, defaultConfiguration) {
  var fontSizes = configuration.options || defaultConfiguration.options;
  var customStyleMap = {};

  for (var _iterator = _createForOfIteratorHelperLoose(fontSizes), _step; !(_step = _iterator()).done;) {
    var fontSize = _step.value;
    customStyleMap[inlineStyles.FONT_SIZE + "-" + fontSize] = fontSize === 'default' ? {} : {
      fontSize: fontSize
    };
  }

  return {
    customStyleMap: customStyleMap
  };
};

var isLightOrDark = function isLightOrDark(color) {
  var r, g, b;

  if (color.match(/^rgb/)) {
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
    r = color >> 16;
    g = color >> 8 & 255;
    b = color & 255;
  }

  var hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  if (hsp > 127.5) {
    return 'light';
  } else {
    return 'dark';
  }
};

var _excluded$3 = ["selectedColor", "onSelectColor", "colors", "colorsPerRow", "children"];
var useStyles$2 = makeStyles({
  colorRow: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  colorItem: {
    height: 25,
    width: 25,
    borderRadius: '50%',
    margin: 3,
    border: 'solid 1px #c4c4c4',
    cursor: 'pointer',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center'
  }
});

function ColorSelectorControl(_ref) {
  var selectedColor = _ref.selectedColor,
      onSelectColor = _ref.onSelectColor,
      colors = _ref.colors,
      _ref$colorsPerRow = _ref.colorsPerRow,
      colorsPerRow = _ref$colorsPerRow === void 0 ? 10 : _ref$colorsPerRow,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  var classes = useStyles$2();

  var _React$useState = React.useState(null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var menuId = Math.random().toString(36).substring(8);
  var colorRows = [[]];

  for (var i = 0, rowI = 0; i < colors.length; i++) {
    if (i % colorsPerRow === 0) {
      rowI++;
      colorRows[rowI] = [];
    }

    colorRows[rowI].push(colors[i]);
  }

  var handleOpen = function handleOpen(ev) {
    setAnchorEl(ev.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonControl, _extends({
    onClick: handleOpen,
    "aria-controls": menuId,
    "aria-haspopup": "true",
    badgeColor: selectedColor ? selectedColor.color : null
  }, rest), children), /*#__PURE__*/React.createElement(Popover, {
    id: menuId,
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    startIcon: /*#__PURE__*/React.createElement(FormatColorResetIcon, null),
    fullWidth: true,
    color: "secondary",
    onClick: function onClick() {
      handleClose();
      onSelectColor(null);
    }
  }, "None"), colorRows.map(function (colorRow, colorRowI) {
    return /*#__PURE__*/React.createElement("div", {
      key: "color-row-" + colorRowI,
      className: classes.colorRow
    }, colorRow.map(function (colorData) {
      return /*#__PURE__*/React.createElement(Tooltip, {
        key: colorData.value,
        title: colorData.text
      }, /*#__PURE__*/React.createElement("div", {
        onClick: function onClick() {
          handleClose();
          onSelectColor(colorData);
        },
        className: classes.colorItem,
        style: {
          backgroundColor: colorData.color
        }
      }, selectedColor && colorData.value === selectedColor.value ? /*#__PURE__*/React.createElement(CheckIcon, {
        style: {
          color: isLightOrDark(colorData.color) === 'dark' ? '#fff' : '#000'
        }
      }) : null));
    }));
  }))));
}

ColorSelectorControl.propTypes = {
  selectedColor: PropTypes.object,
  onSelectColor: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  colorsPerRow: PropTypes.number,
  children: PropTypes.any
};

function ToggleInlineStyleColorSelectorControl(_ref) {
  var configuration = _ref.configuration,
      defaultConfiguration = _ref.defaultConfiguration,
      pluginData = _ref.pluginData,
      colorCssProp = _ref.colorCssProp,
      inlineStyle = _ref.inlineStyle,
      text = _ref.text,
      children = _ref.children;
  var isCollapsed = useSelectionCollapsed();
  var onChange = useOnChange();
  var editorRef = useEditorRef();

  var _React$useState = React.useState(null),
      selectedColor = _React$useState[0],
      setSelectedColor = _React$useState[1];

  var options = configuration.options || defaultConfiguration.options;
  React.useEffect(function () {
    var selectededInlineStyle = getCurrentMappedStyle(Object.keys(pluginData.customStyleMap), null);
    setSelectedColor(selectededInlineStyle && pluginData.customStyleMap[selectededInlineStyle] ? {
      color: pluginData.customStyleMap[selectededInlineStyle][colorCssProp],
      value: selectededInlineStyle
    } : null);
  }, [editorState, pluginData.customStyleMap, colorCssProp]);

  var handleSelectColor = function handleSelectColor(selectedColorData) {
    setSelectedColor(selectedColorData);
    var newEditorState = toggleMappedStyle(Object.keys(pluginData.customStyleMap), selectedColorData ? selectedColorData.value : '');
    onChange(newEditorState);
    editorRef.current.focus();
  };

  return /*#__PURE__*/React.createElement(ColorSelectorControl, {
    text: text,
    onSelectColor: handleSelectColor,
    selectedColor: selectedColor,
    colorsPerRow: configuration.colorsPerRow || defaultConfiguration.colorsPerRow,
    disabled: isCollapsed,
    colors: options.map(function (option) {
      return {
        text: option.text,
        color: option.value,
        value: inlineStyle + "-" + option.value
      };
    })
  }, children);
}

ToggleInlineStyleColorSelectorControl.propTypes = {
  configuration: PropTypes.object,
  defaultConfiguration: PropTypes.object.isRequired,
  pluginData: PropTypes.object.isRequired,
  colorCssProp: PropTypes.string.isRequired,
  inlineStyle: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.any
};

function FontColorControl(_ref) {
  var configuration = _ref.configuration,
      defaultConfiguration = _ref.defaultConfiguration,
      pluginData = _ref.pluginData;
  var translate = useTranslate();
  return /*#__PURE__*/React.createElement(ToggleInlineStyleColorSelectorControl, {
    text: translate('controls.fontColor.title'),
    configuration: configuration,
    defaultConfiguration: defaultConfiguration,
    inlineStyle: inlineStyles.FONT_COLOR,
    pluginData: pluginData,
    colorCssProp: "color"
  }, /*#__PURE__*/React.createElement(FormatColorTextIcon, null));
}

FontColorControl.propTypes = {
  configuration: PropTypes.object,
  defaultConfiguration: PropTypes.object.isRequired,
  pluginData: PropTypes.object.isRequired
};

var fontColorPlugin = function fontColorPlugin(configuration, defaultConfiguration) {
  var fontColors = configuration.options || defaultConfiguration.options;
  var customStyleMap = {};

  for (var _iterator = _createForOfIteratorHelperLoose(fontColors), _step; !(_step = _iterator()).done;) {
    var fontColor = _step.value;
    customStyleMap[inlineStyles.FONT_COLOR + "-" + fontColor.value] = {
      color: fontColor.value
    };
  }

  return {
    customStyleMap: customStyleMap
  };
};

function FontBackgroundColorControl(_ref) {
  var configuration = _ref.configuration,
      defaultConfiguration = _ref.defaultConfiguration,
      pluginData = _ref.pluginData;
  var translate = useTranslate();
  return /*#__PURE__*/React.createElement(ToggleInlineStyleColorSelectorControl, {
    text: translate('controls.fontBackgroundColor.title'),
    configuration: configuration,
    defaultConfiguration: defaultConfiguration,
    inlineStyle: inlineStyles.FONT_BACKGROUND,
    pluginData: pluginData,
    colorCssProp: "backgroundColor"
  }, /*#__PURE__*/React.createElement(BorderColorIcon, null));
}

FontBackgroundColorControl.propTypes = {
  configuration: PropTypes.object,
  defaultConfiguration: PropTypes.object.isRequired,
  pluginData: PropTypes.object.isRequired
};

var fontBackgroundColorPlugin = function fontBackgroundColorPlugin(configuration, defaultConfiguration) {
  var fontBgs = configuration.options || defaultConfiguration.options;
  var customStyleMap = {};

  for (var _iterator = _createForOfIteratorHelperLoose(fontBgs), _step; !(_step = _iterator()).done;) {
    var fontBg = _step.value;
    customStyleMap[inlineStyles.FONT_BACKGROUND + "-" + fontBg.value] = {
      backgroundColor: fontBg.value
    };
  }

  return {
    customStyleMap: customStyleMap
  };
};

var useStyles$3 = makeStyles(function (theme) {
  return {
    imgWrapper: {
      maxWidth: '100%',
      maxHeight: 300,
      overflow: 'auto',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  };
});

function ImageToUpload(_ref) {
  var width = _ref.width,
      height = _ref.height,
      src = _ref.src;
  var classes = useStyles$3();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.imgWrapper
  }, /*#__PURE__*/React.createElement("img", {
    alt: "",
    width: width,
    height: height,
    src: src
  }));
}

ImageToUpload.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
};

function SizeInputs(_ref) {
  var originalWidth = _ref.originalWidth,
      originalHeight = _ref.originalHeight,
      width = _ref.width,
      height = _ref.height,
      onChangeWidth = _ref.onChangeWidth,
      onChangeHeight = _ref.onChangeHeight;
  var translate = useTranslate();

  var _React$useState = React.useState(true),
      maintainAspectRatio = _React$useState[0],
      setMaintainAspectRatio = _React$useState[1];

  var aspectRatio = originalWidth / originalHeight;

  var handleChangeWidth = function handleChangeWidth(ev) {
    ev.stopPropagation();
    var value = ev.currentTarget.value;
    var w = value === '' || isNaN(value) ? 0 : parseInt(value);
    onChangeWidth(w);

    if (maintainAspectRatio) {
      onChangeHeight(Math.round(w / aspectRatio));
    }
  };

  var handleChangeHeight = function handleChangeHeight(ev) {
    ev.stopPropagation();
    var value = ev.currentTarget.value;
    var h = value === '' || isNaN(value) ? 0 : parseInt(value);
    onChangeHeight(h);

    if (maintainAspectRatio) {
      onChangeWidth(Math.round(h * aspectRatio));
    }
  };

  var handleClickAspectRatio = function handleClickAspectRatio() {
    var newMaintainAspectRatio = !maintainAspectRatio;
    setMaintainAspectRatio(newMaintainAspectRatio);

    if (newMaintainAspectRatio) {
      onChangeHeight(Math.round(width / aspectRatio));
    }
  };

  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    spacing: 2
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(TextField, {
    type: "number",
    label: translate('controls.image.labels.width'),
    size: "small",
    value: width,
    onChange: handleChangeWidth,
    onClick: function onClick(ev) {
      return ev.stopPropagation();
    },
    style: {
      maxWidth: 90
    }
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: handleClickAspectRatio,
    size: "small"
  }, maintainAspectRatio ? /*#__PURE__*/React.createElement(LockIcon, null) : /*#__PURE__*/React.createElement(LockOpenIcon, null))), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(TextField, {
    type: "number",
    label: translate('controls.image.labels.height'),
    size: "small",
    value: height,
    onChange: handleChangeHeight,
    onClick: function onClick(ev) {
      return ev.stopPropagation();
    },
    style: {
      maxWidth: 90
    }
  })));
}

SizeInputs.propTypes = {
  originalWidth: PropTypes.number.isRequired,
  originalHeight: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onChangeWidth: PropTypes.func.isRequired,
  onChangeHeight: PropTypes.func.isRequired
};

function ByUrlDialog(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      onSubmit = _ref.onSubmit;
  var translate = useTranslate();

  var _React$useState = React.useState(''),
      imageURL = _React$useState[0],
      setImageURL = _React$useState[1];

  var _React$useState2 = React.useState(0),
      imageWidth = _React$useState2[0],
      setImageWidth = _React$useState2[1];

  var _React$useState3 = React.useState(0),
      imageOriginalWidth = _React$useState3[0],
      setImageOriginalWidth = _React$useState3[1];

  var _React$useState4 = React.useState(0),
      imageHeight = _React$useState4[0],
      setImageHeight = _React$useState4[1];

  var _React$useState5 = React.useState(0),
      imageOriginalHeight = _React$useState5[0],
      setImageOriginalHeight = _React$useState5[1];

  var _React$useState6 = React.useState(false),
      isUploading = _React$useState6[0],
      setIsUploading = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      isValidImage = _React$useState7[0],
      setIsValidImage = _React$useState7[1];

  var _React$useState8 = React.useState(false),
      hasError = _React$useState8[0],
      setHasError = _React$useState8[1];

  var _React$useState9 = React.useState(null),
      changeTimeout = _React$useState9[0],
      setChangeTimeout = _React$useState9[1];

  var handleSubmit = function handleSubmit(ev) {
    ev.preventDefault();
    onSubmit({
      imageURL: imageURL,
      imageWidth: imageWidth,
      imageHeight: imageHeight
    });
  };

  var resetForm = function resetForm() {
    setIsValidImage(false);
    setImageURL('');
  };

  var handleURLChange = function handleURLChange(url) {
    setImageURL(url);

    if (changeTimeout) {
      clearTimeout(changeTimeout);
      setChangeTimeout(null);
    }

    if (url === '') {
      setHasError(false);
      setIsValidImage(false);
      return;
    }

    var to = setTimeout(function () {
      setIsUploading(true);
      var image = new Image();

      image.onload = function () {
        setImageWidth(this.width);
        setImageOriginalWidth(this.width);
        setImageHeight(this.height);
        setImageOriginalHeight(this.height);
        setIsUploading(false);
        setIsValidImage(true);
        setHasError(false);
      };

      image.onerror = function () {
        setIsUploading(false);
        setIsValidImage(false);
        setHasError(true);
      };

      image.src = url;
      setChangeTimeout(null);
    }, 1000);
    setChangeTimeout(to);
  };

  var content = null;
  if (isUploading) content = /*#__PURE__*/React.createElement(CircularProgress, null);else if (isValidImage && imageURL) content = /*#__PURE__*/React.createElement(ImageToUpload, {
    src: imageURL,
    height: imageHeight,
    width: imageWidth
  });else if (hasError && !isValidImage && imageURL) content = /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    color: "error",
    gutterBottom: true
  }, translate('controls.image.errorMessages.notValidImage'));
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    TransitionProps: {
      onEnter: resetForm
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(DialogContent, null, isValidImage && imageURL !== '' && /*#__PURE__*/React.createElement(SizeInputs, {
    width: imageWidth,
    onChangeHeight: setImageHeight,
    height: imageHeight,
    originalWidth: imageOriginalWidth,
    originalHeight: imageOriginalHeight,
    onChangeWidth: setImageWidth
  }), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    alignItems: "center",
    justifyContent: "center"
  }, content), /*#__PURE__*/React.createElement(TextField, {
    autoFocus: true,
    label: translate('controls.image.labels.url'),
    value: imageURL,
    onChange: function onChange(ev) {
      return handleURLChange(ev.currentTarget.value);
    },
    fullWidth: true
  })), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    onClick: onClose,
    color: "primary"
  }, translate('controls.image.actions.cancel')), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    color: "primary",
    disabled: !isValidImage
  }, translate('controls.image.actions.add')))));
}

ByUrlDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var useStyles$4 = makeStyles(function (theme) {
  return {
    dropArea: function dropArea(_ref) {
      var highlightDropArea = _ref.highlightDropArea;
      return {
        width: 500,
        height: 300,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        borderRadius: theme.shape.borderRadius || 4,
        backgroundColor: highlightDropArea ? theme.palette.grey[400] || '#bdbdbd' : theme.palette.grey[200] || '#eeeeee',
        border: highlightDropArea ? "solid 3px " + (theme.palette.grey[600] || '#757575') : "dashed 3px " + (theme.palette.grey[400] || '#bdbdbd'),
        color: theme.palette.text.hint || 'rgba(0, 0, 0, 0.38)',
        cursor: 'pointer'
      };
    }
  };
});

function UploadDialog(_ref2) {
  var open = _ref2.open,
      onClose = _ref2.onClose,
      onSubmit = _ref2.onSubmit,
      uploadCallback = _ref2.uploadCallback;
  var translate = useTranslate();

  var _React$useState = React.useState(''),
      imageURL = _React$useState[0],
      setImageURL = _React$useState[1];

  var _React$useState2 = React.useState(0),
      imageWidth = _React$useState2[0],
      setImageWidth = _React$useState2[1];

  var _React$useState3 = React.useState(0),
      imageOriginalWidth = _React$useState3[0],
      setImageOriginalWidth = _React$useState3[1];

  var _React$useState4 = React.useState(0),
      imageHeight = _React$useState4[0],
      setImageHeight = _React$useState4[1];

  var _React$useState5 = React.useState(0),
      imageOriginalHeight = _React$useState5[0],
      setImageOriginalHeight = _React$useState5[1];

  var _React$useState6 = React.useState(false),
      isUploading = _React$useState6[0],
      setIsUploading = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      isValidImage = _React$useState7[0],
      setIsValidImage = _React$useState7[1];

  var _React$useState8 = React.useState(false),
      hasError = _React$useState8[0],
      setHasError = _React$useState8[1];

  var _React$useState9 = React.useState(null),
      errorMessage = _React$useState9[0],
      setErrorMessage = _React$useState9[1];

  var _React$useState10 = React.useState(false),
      highlightDropArea = _React$useState10[0],
      setHighlightDropArea = _React$useState10[1];

  var inputFileRef = React.createRef();
  var classes = useStyles$4({
    highlightDropArea: highlightDropArea
  });

  var handleSubmit = function handleSubmit(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    onSubmit({
      imageURL: imageURL,
      imageWidth: imageWidth,
      imageHeight: imageHeight
    });
  };

  var handleClickDropArea = function handleClickDropArea(ev) {
    ev.preventDefault();
    inputFileRef.current.click();
  };

  var handleDragEnter = function handleDragEnter(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    setHighlightDropArea(true);
  };

  var handleDragLeave = function handleDragLeave(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    setHighlightDropArea(false);
  };

  var handleDragOver = function handleDragOver(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    setHighlightDropArea(true);
  };

  var handleDrop = function handleDrop(ev) {
    try {
      ev.preventDefault();
      ev.stopPropagation();
      var files = ev.dataTransfer.files;

      var _temp2 = function () {
        if (files.length > 0) return Promise.resolve(onSelectFile(files[0])).then(function () {});
      }();

      return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var handleInputFileChange = function handleInputFileChange() {
    try {
      var files = inputFileRef.current.files;

      var _temp4 = function () {
        if (files.length > 0) return Promise.resolve(onSelectFile(files[0])).then(function () {});
      }();

      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var onSelectFile = function onSelectFile(file) {
    try {
      setHighlightDropArea(false);
      setIsUploading(true);

      var _temp6 = _catch(function () {
        return Promise.resolve(uploadCallback(file)).then(function (selectedImageUrl) {
          setImageURL(selectedImageUrl);
          var image = new Image();

          image.onload = function () {
            setImageWidth(this.width);
            setImageOriginalWidth(this.width);
            setImageHeight(this.height);
            setImageOriginalHeight(this.height);
            setIsUploading(false);
            setIsValidImage(true);
            setHasError(false);
          };

          image.onerror = function () {
            setIsUploading(false);
            setIsValidImage(false);
            setHasError(true);
            setErrorMessage(null);
          };

          image.src = selectedImageUrl;
        });
      }, function (e) {
        setIsUploading(false);
        setIsValidImage(false);
        setHasError(true);
        setErrorMessage(e);
      });

      return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var resetForm = function resetForm() {
    setImageURL('');
    setIsValidImage(false);
    setIsUploading(false);
    setHighlightDropArea(false);
  };

  var dropAreaContent = /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1"
  }, translate('controls.image.labels.dropImageHere'));

  if (isUploading) {
    dropAreaContent = /*#__PURE__*/React.createElement(CircularProgress, null);
  } else if (isValidImage && imageURL) {
    dropAreaContent = /*#__PURE__*/React.createElement(ImageToUpload, {
      src: imageURL,
      height: imageHeight,
      width: imageWidth
    });
  }

  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    TransitionProps: {
      onEnter: resetForm
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(DialogContent, null, /*#__PURE__*/React.createElement("input", {
    ref: inputFileRef,
    type: "file",
    accept: "image/*",
    onChange: handleInputFileChange,
    style: {
      display: 'none'
    }
  }), isValidImage && imageURL !== '' && /*#__PURE__*/React.createElement(SizeInputs, {
    originalWidth: imageOriginalWidth,
    originalHeight: imageOriginalHeight,
    width: imageWidth,
    height: imageHeight,
    onChangeWidth: setImageWidth,
    onChangeHeight: setImageHeight
  }), hasError && !isValidImage && /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    color: "error",
    align: "center",
    gutterBottom: true
  }, errorMessage !== null ? errorMessage : translate('controls.image.errorMessages.notValidImage')), /*#__PURE__*/React.createElement("div", {
    className: classes.dropArea,
    onClick: handleClickDropArea,
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDragOver: handleDragOver,
    onDrop: handleDrop
  }, dropAreaContent)), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    onClick: onClose,
    color: "primary"
  }, translate('controls.image.actions.cancel')), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    color: "primary",
    disabled: !isValidImage
  }, translate('controls.image.actions.add')))));
}

UploadDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  uploadCallback: PropTypes.func.isRequired
};

function ResizeImageDialog(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      src = _ref.src,
      originalWidth = _ref.originalWidth,
      originalHeight = _ref.originalHeight,
      onSave = _ref.onSave;
  var translate = useTranslate();

  var _React$useState = React.useState(0),
      width = _React$useState[0],
      setWidth = _React$useState[1];

  var _React$useState2 = React.useState(0),
      height = _React$useState2[0],
      setHeight = _React$useState2[1];

  React.useEffect(function () {
    setWidth(originalWidth);
    setHeight(originalHeight);
  }, [originalWidth, originalHeight]);

  var handleSubmit = function handleSubmit(ev) {
    ev.preventDefault();
    onSave(width, height);
  };

  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(DialogContent, null, /*#__PURE__*/React.createElement(SizeInputs, {
    width: width,
    height: height,
    onChangeWidth: setWidth,
    onChangeHeight: setHeight,
    originalWidth: originalWidth,
    originalHeight: originalHeight
  }), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(ImageToUpload, {
    src: src,
    width: width,
    height: height
  }))), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    onClick: onClose
  }, translate('controls.image.actions.cancel')), /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, translate('controls.image.actions.resize')))));
}

ResizeImageDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  originalWidth: PropTypes.number.isRequired,
  originalHeight: PropTypes.number.isRequired,
  onSave: PropTypes.func.isRequired
};

function ImageControl(_ref) {
  var configuration = _ref.configuration,
      defaultConfiguration = _ref.defaultConfiguration;
  var translate = useTranslate();
  var editorState = useEditorState();
  var onChange = useOnChange();
  var editorRef = useEditorRef();
  var menuId = Math.random().toString(36).substring(8);

  var _React$useState = React.useState(null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var _React$useState2 = React.useState(false),
      isUploadDialogOpened = _React$useState2[0],
      setIsUploadDialogOpened = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      isUrlDialogOpened = _React$useState3[0],
      setIsUrlDialogOpened = _React$useState3[1];

  var uploadCallback = configuration.uploadCallback || defaultConfiguration.uploadCallback;
  var setAnchorHandler = React.useCallback(function (ev) {
    setAnchorEl(ev.currentTarget);
  }, []);
  var unsetAnchorHandler = React.useCallback(function () {
    setAnchorEl(null);
  }, []);
  var imageEntityToResize = editor.resizeImageEntityKey ? editorState.getCurrentContent().getEntity(editor.resizeImageEntityKey) : null;

  var handleSubmitImage = function handleSubmitImage(_ref2) {
    var imageURL = _ref2.imageURL,
        imageWidth = _ref2.imageWidth,
        imageHeight = _ref2.imageHeight;
    if (imageURL === '') return;
    setIsUrlDialogOpened(false);
    setIsUploadDialogOpened(false);
    var contentState = editorState.getCurrentContent();
    var contentStateWithEntity = contentState.createEntity(entities.IMAGE, 'IMMUTABLE', {
      src: imageURL,
      width: imageWidth,
      height: imageHeight
    });
    var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    var newEditorState = draftJs.EditorState.push(editorState, contentStateWithEntity, 'apply-entity');
    editor.onChange(draftJs.AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '));
    editorFocus();
  };

  var handleResizeImage = function handleResizeImage(width, height) {
    editor.hideResizeImageDialog();
    var contentState = editorState.getCurrentContent();
    var newEditorState = draftJs.EditorState.push(editorState, contentState.mergeEntityData(editor.resizeImageEntityKey, {
      width: width,
      height: height
    }), 'apply-entity');
    onChange(newEditorState);
    editorRef.current.focus();
  };

  var clickItemHandler = React.useCallback(function () {
    setIsUploadDialogOpened(true);
    setAnchorEl(null);
  }, []);
  var onCloseHandler = React.useCallback(function () {
    setIsUrlDialogOpened(false);
  }, []);
  var resizeOnCloseHandler = React.useCallback(function () {}, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonControl, {
    onClick: setAnchorHandler,
    text: translate('controls.image.title'),
    "aria-controls": menuId,
    "aria-haspopup": "true"
  }, /*#__PURE__*/React.createElement(ImageIcon, null)), /*#__PURE__*/React.createElement(Popover, {
    id: menuId,
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: unsetAnchorHandler
  }, /*#__PURE__*/React.createElement(List, {
    component: "nav",
    "aria-label": translate('controls.image.labels.insertOptions')
  }, /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    onClick: clickItemHandler
  }, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(PublishIcon, null)), /*#__PURE__*/React.createElement(ListItemText, {
    primary: translate('controls.image.actions.upload')
  })), /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    onClick: clickItemHandler
  }, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(LinkIcon, null)), /*#__PURE__*/React.createElement(ListItemText, {
    primary: translate('controls.image.actions.url')
  })))), /*#__PURE__*/React.createElement(ByUrlDialog, {
    onSubmit: handleSubmitImage,
    onClose: onCloseHandler,
    open: isUrlDialogOpened
  }), /*#__PURE__*/React.createElement(UploadDialog, {
    onSubmit: handleSubmitImage,
    onClose: onCloseHandler,
    open: isUploadDialogOpened,
    uploadCallback: uploadCallback
  }), /*#__PURE__*/React.createElement(ResizeImageDialog, {
    open: editor.isResizeImageDialogVisible,
    onClose: resizeOnCloseHandler,
    src: imageEntityToResize ? imageEntityToResize.getData().src : '',
    originalWidth: imageEntityToResize ? imageEntityToResize.getData().width : 0,
    originalHeight: imageEntityToResize ? imageEntityToResize.getData().height : 0,
    onSave: handleResizeImage
  }));
}

ImageControl.propTypes = {
  configuration: PropTypes.object.isRequired,
  defaultConfiguration: PropTypes.object.isRequired
};

var EditorMedia = function EditorMedia(_ref) {
  var contentState = _ref.contentState,
      block = _ref.block;
  var entity = contentState.getEntity(block.getEntityAt(0));
  var type = entity.getType();

  if (type === entities.IMAGE) {
    var _entity$getData = entity.getData(),
        src = _entity$getData.src,
        _entity$getData$width = _entity$getData.width,
        width = _entity$getData$width === void 0 ? 'auto' : _entity$getData$width,
        _entity$getData$heigh = _entity$getData.height,
        height = _entity$getData$heigh === void 0 ? 'auto' : _entity$getData$heigh;

    return /*#__PURE__*/React.createElement(EditorImage, {
      src: src,
      width: width,
      height: height,
      block: block,
      contentState: contentState
    });
  }

  return null;
};

EditorMedia.propTypes = {
  contentState: PropTypes.object.isRequired,
  block: PropTypes.object.isRequired
};
var useStyles$5 = makeStyles(function (theme) {
  return {
    imgInfo: {
      padding: theme.spacing(0.6)
    }
  };
});

var EditorImage = function EditorImage(_ref2) {
  var src = _ref2.src,
      width = _ref2.width,
      height = _ref2.height,
      contentState = _ref2.contentState,
      block = _ref2.block;

  var _React$useState = React.useState(null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var _React$useState2 = React.useState(null),
      infoAnchorEl = _React$useState2[0],
      setInfoAnchorEl = _React$useState2[1];

  var translate = useTranslate();
  var editorRef = useEditorRef();
  var onChange = useOnChange();
  var classes = useStyles$5();

  var showOptions = function showOptions(ev) {
    setAnchorEl(ev.currentTarget);
    setInfoAnchorEl(ev.currentTarget);
  };

  var hideOptions = function hideOptions() {
    setAnchorEl(null);
    setInfoAnchorEl(null);
  };

  var imageAlign = function imageAlign(ev, align) {
    ev.preventDefault();
    ev.stopPropagation();
    var imageSelection = draftJs.SelectionState.createEmpty(block.getKey()).merge({
      anchorKey: block.getKey(),
      anchorOffset: 0,
      focusKey: block.getKey(),
      focusOffset: block.getLength()
    });
    var newContentState = draftJs.Modifier.setBlockData(contentState, imageSelection, {
      textAlign: align
    });
    onChange(draftJs.EditorState.push(getEditorState(), newContentState, 'change-block-data'));
    editorRef.current.focus();
  };

  var removeImage = function removeImage(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    var imageSelection = draftJs.SelectionState.createEmpty(block.getKey()).merge({
      anchorKey: block.getKey(),
      anchorOffset: 0,
      focusKey: block.getKey(),
      focusOffset: block.getLength()
    });
    var newContentState = draftJs.Modifier.removeRange(contentState, imageSelection, 'forward');
    var blockMap = newContentState.getBlockMap()["delete"](block.getKey());
    var firstBlock = newContentState.getFirstBlock();
    var selectionToStart = draftJs.SelectionState.createEmpty(firstBlock.getKey()).merge({
      anchorKey: firstBlock.getKey(),
      anchorOffset: 0,
      focusKey: firstBlock.getKey(),
      focusOffset: 0
    });
    newContentState = newContentState.merge({
      blockMap: blockMap,
      selectionAfter: selectionToStart
    });
    onChange(draftJs.EditorState.push(getEditorState(), newContentState, 'remove-range'));
    editorRef.current.focus();
  };

  if (!src) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    alt: src,
    src: src,
    width: width,
    height: height,
    onClick: showOptions
  }), /*#__PURE__*/React.createElement(Popover, {
    open: Boolean(infoAnchorEl),
    onClose: hideOptions,
    anchorEl: infoAnchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    }
  }, /*#__PURE__*/React.createElement(Typography, {
    color: "textSecondary",
    variant: "body1",
    className: classes.imgInfo
  }, width, "\xA0x\xA0", height)), /*#__PURE__*/React.createElement(Popover, {
    open: Boolean(anchorEl),
    onClose: hideOptions,
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    size: "small",
    "aria-label": translate('controls.image.labels.editOptions')
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick(ev) {
      return imageAlign(ev, 'left');
    },
    title: translate('controls.image.actions.alignLeft')
  }, /*#__PURE__*/React.createElement(ArrowLeftIcon, null), /*#__PURE__*/React.createElement(ImageIcon, null)), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick(ev) {
      return imageAlign(ev, 'center');
    },
    title: translate('controls.image.actions.alignCenter')
  }, /*#__PURE__*/React.createElement(ArrowLeftIcon, null), /*#__PURE__*/React.createElement(ImageIcon, null), /*#__PURE__*/React.createElement(ArrowRightIcon, null)), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick(ev) {
      return imageAlign(ev, 'right');
    },
    title: translate('controls.image.actions.alignRight')
  }, /*#__PURE__*/React.createElement(ImageIcon, null), /*#__PURE__*/React.createElement(ArrowRightIcon, null)), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      hideOptions();
    },
    title: translate('controls.image.actions.resize')
  }, /*#__PURE__*/React.createElement(PhotoSizeSelectLargeIcon, null)), /*#__PURE__*/React.createElement(Button, {
    onClick: removeImage,
    title: translate('controls.image.actions.remove')
  }, /*#__PURE__*/React.createElement(DeleteIcon, null)))));
};

EditorImage.propTypes = {
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  contentState: PropTypes.object.isRequired,
  block: PropTypes.object.isRequired
};

var imagePlugin = function imagePlugin() {
  return {
    blockRendererFn: function blockRendererFn(block) {
      if (block.getType() === blockStyles.ATOMIC) {
        return {
          component: EditorMedia,
          editable: false
        };
      }
    }
  };
};

var fileToBase64 = function fileToBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function () {
      return reject(reader.error);
    };

    reader.readAsDataURL(file);
  });
};

var toolbarControlTypes$1 = {
  divider: {
    name: 'divider',
    component: DividerControl
  },
  undo: {
    name: 'undo',
    component: UndoControl
  },
  redo: {
    name: 'undo',
    component: RedoControl
  },
  bold: {
    name: 'bold',
    component: BoldControl
  },
  italic: {
    name: 'italic',
    component: ItalicControl
  },
  underline: {
    name: 'underline',
    component: UnderlineControl
  },
  strikethrough: {
    name: 'strikethrough',
    component: StrikethroughControl
  },
  fontColor: {
    name: 'fontColor',
    component: FontColorControl,
    plugin: fontColorPlugin
  },
  fontBackgroundColor: {
    name: 'fontBackgroundColor',
    component: FontBackgroundColorControl,
    plugin: fontBackgroundColorPlugin
  },
  linkAdd: {
    name: 'linkAdd',
    component: LinkAddControl,
    plugin: linkAddPlugin
  },
  linkRemove: {
    name: 'linkRemove',
    component: LinkRemoveControl
  },
  image: {
    name: 'image',
    component: ImageControl,
    plugin: imagePlugin
  },
  blockType: {
    name: 'blockType',
    component: BlockTypeControl
  },
  fontSize: {
    name: 'fontSize',
    component: FontSizeControl,
    plugin: fontSizePlugin
  },
  fontFamily: {
    name: 'fontFamily',
    component: FontFamilyControl,
    plugin: fontFamilyPlugin
  },
  textAlign: {
    name: 'textAlign',
    component: TextAlignControl,
    plugin: textAlignPlugin
  },
  unorderedList: {
    name: 'unorderedList',
    component: UnorderedListControl
  },
  orderedList: {
    name: 'orderedList',
    component: OrderedListControl
  }
};
var defaultToolbarControls = [toolbarControlTypes$1.undo, toolbarControlTypes$1.redo, toolbarControlTypes$1.divider, toolbarControlTypes$1.bold, toolbarControlTypes$1.italic, toolbarControlTypes$1.underline, toolbarControlTypes$1.strikethrough, toolbarControlTypes$1.fontColor, toolbarControlTypes$1.fontBackgroundColor, toolbarControlTypes$1.divider, toolbarControlTypes$1.linkAdd, toolbarControlTypes$1.linkRemove, toolbarControlTypes$1.image, toolbarControlTypes$1.divider, toolbarControlTypes$1.blockType, toolbarControlTypes$1.fontSize, toolbarControlTypes$1.fontFamily, toolbarControlTypes$1.textAlign, toolbarControlTypes$1.divider, toolbarControlTypes$1.unorderedList, toolbarControlTypes$1.orderedList];
var colors = [{
  text: 'black',
  value: 'rgb(0, 0, 0)'
}, {
  text: 'dark grey 4',
  value: 'rgb(67, 67, 67)'
}, {
  text: 'dark grey 3',
  value: 'rgb(102, 102, 102)'
}, {
  text: 'dark grey 2',
  value: 'rgb(153, 153, 153)'
}, {
  text: 'dark grey 1',
  value: 'rgb(183, 183, 183)'
}, {
  text: 'grey',
  value: 'rgb(204, 204, 204)'
}, {
  text: 'light grey 1',
  value: 'rgb(217, 217, 217)'
}, {
  text: 'light grey 2',
  value: 'rgb(239, 239, 239)'
}, {
  text: 'light grey 3',
  value: 'rgb(243, 243, 243)'
}, {
  text: 'white',
  value: 'rgb(255, 255, 255)'
}, {
  text: 'Red berry',
  value: 'rgb(152, 0, 0)'
}, {
  text: 'red',
  value: 'rgb(255, 0, 0)'
}, {
  text: 'orange',
  value: 'rgb(255, 153, 0)'
}, {
  text: 'yellow',
  value: 'rgb(255, 255, 0)'
}, {
  text: 'green',
  value: 'rgb(0, 255, 0)'
}, {
  text: 'cyan',
  value: 'rgb(0, 255, 255)'
}, {
  text: 'cornflower blue',
  value: 'rgb(74, 134, 232)'
}, {
  text: 'blue',
  value: 'rgb(0, 0, 255)'
}, {
  text: 'purple',
  value: 'rgb(153, 0, 255)'
}, {
  text: 'magenta',
  value: 'rgb(255, 0, 255)'
}, {
  text: 'light red berry 3',
  value: 'rgb(230, 184, 175)'
}, {
  text: 'light red 3',
  value: 'rgb(244, 204, 204)'
}, {
  text: 'light orange 3',
  value: 'rgb(252, 229, 205)'
}, {
  text: 'light yellow 3',
  value: 'rgb(255, 242, 204)'
}, {
  text: 'light green 3',
  value: 'rgb(217, 234, 211)'
}, {
  text: 'light cyan 3',
  value: 'rgb(208, 224, 227)'
}, {
  text: 'light cornflower blue 3',
  value: 'rgb(201, 218, 248)'
}, {
  text: 'light blue 3',
  value: 'rgb(207, 226, 243)'
}, {
  text: 'light purple 3',
  value: 'rgb(217, 210, 233)'
}, {
  text: 'light magenta 3',
  value: 'rgb(234, 209, 220)'
}, {
  text: 'light red berry 2',
  value: 'rgb(221, 126, 107)'
}, {
  text: 'light red 2',
  value: 'rgb(234, 153, 153)'
}, {
  text: 'light orange 2',
  value: 'rgb(249, 203, 156)'
}, {
  text: 'light yellow 2',
  value: 'rgb(255, 229, 153)'
}, {
  text: 'light green 2',
  value: 'rgb(182, 215, 168)'
}, {
  text: 'light cyan 2',
  value: 'rgb(162, 196, 201)'
}, {
  text: 'light cornflower blue 2',
  value: 'rgb(164, 194, 244)'
}, {
  text: 'light blue 2',
  value: 'rgb(159, 197, 232)'
}, {
  text: 'light purple 2',
  value: 'rgb(180, 167, 214)'
}, {
  text: 'light magenta 2',
  value: 'rgb(213, 166, 189)'
}, {
  text: 'light red berry 1',
  value: 'rgb(204, 65, 37)'
}, {
  text: 'light red 1',
  value: 'rgb(224, 102, 102)'
}, {
  text: 'light orange 1',
  value: 'rgb(246, 178, 107)'
}, {
  text: 'light yellow 1',
  value: 'rgb(255, 217, 102)'
}, {
  text: 'light green 1',
  value: 'rgb(147, 196, 125)'
}, {
  text: 'light cyan 1',
  value: 'rgb(118, 165, 175)'
}, {
  text: 'light cornflower blue 1',
  value: 'rgb(109, 158, 235)'
}, {
  text: 'light blue 1',
  value: 'rgb(111, 168, 220)'
}, {
  text: 'light purple 1',
  value: 'rgb(142, 124, 195)'
}, {
  text: 'light magenta 1',
  value: 'rgb(194, 123, 160)'
}, {
  text: 'dark red berry 1',
  value: 'rgb(166, 28, 0)'
}, {
  text: 'dark red 1',
  value: 'rgb(204, 0, 0)'
}, {
  text: 'dark orange 1',
  value: 'rgb(230, 145, 56)'
}, {
  text: 'dark yellow 1',
  value: 'rgb(241, 194, 50)'
}, {
  text: 'dark green 1',
  value: 'rgb(106, 168, 79)'
}, {
  text: 'dark cyan 1',
  value: 'rgb(69, 129, 142)'
}, {
  text: 'dark cornflower blue 1',
  value: 'rgb(60, 120, 216)'
}, {
  text: 'dark blue 1',
  value: 'rgb(61, 133, 198)'
}, {
  text: 'dark purple 1',
  value: 'rgb(103, 78, 167)'
}, {
  text: 'dark magenta 1',
  value: 'rgb(166, 77, 121)'
}, {
  text: 'dark red berry 2',
  value: 'rgb(133, 32, 12)'
}, {
  text: 'dark red 2',
  value: 'rgb(153, 0, 0)'
}, {
  text: 'dark orange 2',
  value: 'rgb(180, 95, 6)'
}, {
  text: 'dark yellow 2',
  value: 'rgb(191, 144, 0)'
}, {
  text: 'dark green 2',
  value: 'rgb(56, 118, 29)'
}, {
  text: 'dark cyan 2',
  value: 'rgb(19, 79, 92)'
}, {
  text: 'dark cornflower blue 2',
  value: 'rgb(17, 85, 204)'
}, {
  text: 'dark blue 2',
  value: 'rgb(11, 83, 148)'
}, {
  text: 'dark purple 2',
  value: 'rgb(53, 28, 117)'
}, {
  text: 'dark magenta 2',
  value: 'rgb(116, 27, 71)'
}, {
  text: 'dark red berry 3',
  value: 'rgb(91, 15, 0)'
}, {
  text: 'dark red 3',
  value: 'rgb(102, 0, 0)'
}, {
  text: 'dark orange 3',
  value: 'rgb(120, 63, 4)'
}, {
  text: 'dark yellow 3',
  value: 'rgb(127, 96, 0)'
}, {
  text: 'dark green 3',
  value: 'rgb(39, 78, 19)'
}, {
  text: 'dark cyan 3',
  value: 'rgb(12, 52, 61)'
}, {
  text: 'dark cornflower blue 3',
  value: 'rgb(28, 69, 135)'
}, {
  text: 'dark blue 3',
  value: 'rgb(7, 55, 99)'
}, {
  text: 'dark purple 3',
  value: 'rgb(32, 18, 77)'
}, {
  text: 'dark magenta 3',
  value: 'rgb(76, 17, 48)'
}];
var defaultToolbarControlsConfiguration = {
  blockType: {
    options: [{
      value: 'default',
      text: LANG_PREFIX + 'controls.blockType.labels.normal'
    }, {
      value: 'header-one',
      text: LANG_PREFIX + 'controls.blockType.labels.header1'
    }, {
      value: 'header-two',
      text: LANG_PREFIX + 'controls.blockType.labels.header2'
    }, {
      value: 'header-three',
      text: LANG_PREFIX + 'controls.blockType.labels.header3'
    }, {
      value: 'header-four',
      text: LANG_PREFIX + 'controls.blockType.labels.header4'
    }, {
      value: 'header-five',
      text: LANG_PREFIX + 'controls.blockType.labels.header5'
    }, {
      value: 'header-six',
      text: LANG_PREFIX + 'controls.blockType.labels.header6'
    }]
  },
  image: {
    uploadCallback: fileToBase64
  },
  fontColor: {
    colorsPerRow: 10,
    options: colors
  },
  fontBackgroundColor: {
    colorsPerRow: 10,
    options: colors
  },
  fontSize: {
    options: ['default', '8px', '9px', '10px', '11px', '12px', '14px', '18px', '24px', '30px', '36px', '48px', '60px', '72px', '96px']
  },
  fontFamily: {
    options: ['default', 'Arial', 'Verdana', 'Times New Roman', 'Georgia', 'Courier new', 'Lucida Console']
  }
};

var defaultConfig = {
  lang: 'en',
  translations: {},
  draftEditor: {},
  editor: {
    wrapperElement: Paper$1,
    className: '',
    style: {}
  },
  toolbar: {
    className: '',
    style: {},
    visible: true,
    position: 'top',
    controls: defaultToolbarControls,
    controlsConfig: defaultToolbarControlsConfiguration
  }
};

var Translator = /*#__PURE__*/function () {
  function Translator(translations) {
    this.translations = translations;
  }

  var _proto = Translator.prototype;

  _proto.get = function get(id) {
    if (!id) return '';
    var keys = id.split('.');
    var item = this.translations;

    for (var _iterator = _createForOfIteratorHelperLoose(keys), _step; !(_step = _iterator()).done;) {
      var key = _step.value;
      item = item[key];
      if (item === undefined) return '';
    }

    return item || '';
  };

  return Translator;
}();

var _blockHTMLMap;
var blockHTMLMap = (_blockHTMLMap = {}, _blockHTMLMap[blockStyles.H1] = 'h1', _blockHTMLMap[blockStyles.H2] = 'h2', _blockHTMLMap[blockStyles.H3] = 'h3', _blockHTMLMap[blockStyles.H4] = 'h4', _blockHTMLMap[blockStyles.H5] = 'h5', _blockHTMLMap[blockStyles.H6] = 'h6', _blockHTMLMap[blockStyles.BLOCKQUOTE] = 'blockquote', _blockHTMLMap[blockStyles.CODE_BLOCK] = 'code', _blockHTMLMap[blockStyles.UNSTYLED] = 'p', _blockHTMLMap[blockStyles.ATOMIC] = 'figure', _blockHTMLMap[blockStyles.UL] = 'li', _blockHTMLMap[blockStyles.OL] = 'li', _blockHTMLMap);

var _entityHTMLMap;
var entityHTMLMap = (_entityHTMLMap = {}, _entityHTMLMap[entities.LINK] = function (entity) {
  return ["<a href=\"" + entity.getData().url + "\" target=\"_blank\">", '</a>'];
}, _entityHTMLMap[entities.IMAGE] = function (entity) {
  return ["<img src=\"" + entity.data.src + "\" alt=\"\" width=\"" + entity.getData().width + "\" height=\"" + entity.getData().height + "\">", ''];
}, _entityHTMLMap);

var isInlineStyleCollection = function isInlineStyleCollection(inlineStyle, style) {
  return inlineStyle.substr(0, style.length) === style;
};

var getInlineStyleCollectionValue = function getInlineStyleCollectionValue(inlineStyle, style) {
  return inlineStyle.substr(style.length + 1);
};

var getInlineStylesCss = function getInlineStylesCss(inlineStyle) {
  switch (inlineStyle) {
    case inlineStyles.BOLD:
      return 'font-weight: bold;';

    case inlineStyles.ITALIC:
      return 'font-style: italic;';

    case inlineStyles.UNDERLINE:
      return 'text-decoration: underline;';

    case inlineStyles.STRIKETHROUGH:
      return 'text-decoration: line-through;';

    case inlineStyles.CODE:
      return 'font-family: monospace;';

    default:
      if (isInlineStyleCollection(inlineStyle, inlineStyles.FONT_FAMILY)) {
        return "font-family: '" + getInlineStyleCollectionValue(inlineStyle, inlineStyles.FONT_FAMILY) + "';";
      }

      if (isInlineStyleCollection(inlineStyle, inlineStyles.FONT_SIZE)) {
        return "font-size: " + getInlineStyleCollectionValue(inlineStyle, inlineStyles.FONT_SIZE) + ";";
      }

      if (isInlineStyleCollection(inlineStyle, inlineStyles.FONT_COLOR)) {
        return "color: " + getInlineStyleCollectionValue(inlineStyle, inlineStyles.FONT_COLOR) + ";";
      }

      if (isInlineStyleCollection(inlineStyle, inlineStyles.FONT_BACKGROUND)) {
        return "background-color: " + getInlineStyleCollectionValue(inlineStyle, inlineStyles.FONT_BACKGROUND) + ";";
      }

      return '';
  }
};

var toHTML = function toHTML(contentState) {
  var html = '';
  var isListBlock = false;
  var blockMap = contentState.getBlockMap();
  var blockCount = 0;

  for (var _iterator = _createForOfIteratorHelperLoose(blockMap), _step; !(_step = _iterator()).done;) {
    var blockData = _step.value;
    var block = blockData[1];
    var blockTag = blockHTMLMap[block.getType()];
    var blockStyle = block.getData().has('textAlign') ? "text-align:" + block.getData().get('textAlign') + ";" : null;
    var blockOpenTag = blockTag ? "<" + blockTag + (blockStyle ? " style=\"" + blockStyle + "\"" : '') + ">" : '';
    var blockCloseTag = blockTag ? "</" + blockTag + ">" : '';

    if (block.getType() === blockStyles.UL || block.getType() === blockStyles.OL) {
      if (!isListBlock) {
        blockOpenTag = "" + (block.getType() === blockStyles.UL ? '<ul>' : '<ol>') + blockOpenTag;
      }

      if (blockCount === blockMap.length - 1) {
        blockCloseTag = "" + blockCloseTag + (block.getType() === blockStyles.UL ? '</ul>' : '</ol>');
      }

      isListBlock = true;
    } else {
      if (isListBlock) {
        blockOpenTag = "" + (block.getType() === blockStyles.UL ? '</ul>' : '</ol>') + blockOpenTag;
      }

      isListBlock = false;
    }

    if (block.getLength() === 0) {
      html += blockOpenTag + blockCloseTag;
      continue;
    }

    html += blockOpenTag;
    var lastEntityKey = null;
    var currentOpenedStylesMap = {};

    for (var charIndex in block.getText()) {
      var isLastChar = parseInt(charIndex) === block.getLength() - 1;
      var entityOpenTag = '';
      var entityCloseTag = '';
      var currentEntityKey = block.getEntityAt(charIndex);

      if (currentEntityKey !== lastEntityKey) {
        if (lastEntityKey === null) {
          var entity = contentState.getEntity(currentEntityKey);
          entityOpenTag = entityHTMLMap[entity.getType()](entity)[0];
        } else if (currentEntityKey === null) {
          var _entity = contentState.getEntity(lastEntityKey);

          entityCloseTag = entityHTMLMap[_entity.getType()](_entity)[1];
        } else {
          var entityHaveToClose = contentState.getEntity(lastEntityKey);
          var entityHaveToOpen = contentState.getEntity(currentEntityKey);
          entityOpenTag = entityHTMLMap[entityHaveToClose.getType()](entityHaveToClose)[0] + entityHTMLMap[entityHaveToOpen.getType()](entityHaveToOpen)[1];
        }
      } else if (currentEntityKey !== null && isLastChar) {
        var _entity2 = contentState.getEntity(currentEntityKey);

        entityCloseTag = entityHTMLMap[_entity2.getType()](_entity2)[1];
      }

      var charInlineStyles = block.getInlineStyleAt(charIndex);
      var styleCloseTagBeforeList = [];
      var styleOpenTagList = [];
      var styleCloseTagList = [];
      var styleCloseTagOpenIndexList = [];
      var styleCloseTagBeforeOpenIndexList = [];

      for (var _iterator2 = _createForOfIteratorHelperLoose(charInlineStyles), _step2; !(_step2 = _iterator2()).done;) {
        var _inlineStyle3 = _step2.value;

        if (currentOpenedStylesMap[_inlineStyle3] === undefined) {
          styleOpenTagList.push(_inlineStyle3);
          currentOpenedStylesMap[_inlineStyle3] = charIndex;
        } else if (entityOpenTag || entityCloseTag) {
          styleCloseTagBeforeList.push(_inlineStyle3);
          styleCloseTagBeforeOpenIndexList.push(currentOpenedStylesMap[_inlineStyle3]);
          delete currentOpenedStylesMap[_inlineStyle3];
        } else if (isLastChar) {
          styleCloseTagList.push(_inlineStyle3);
          styleCloseTagOpenIndexList.push(currentOpenedStylesMap[_inlineStyle3]);
          delete currentOpenedStylesMap[_inlineStyle3];
        }
      }

      for (var inlineStyle in currentOpenedStylesMap) {
        if (!charInlineStyles.includes(inlineStyle) && !styleCloseTagList.includes(inlineStyle) && !styleCloseTagBeforeList.includes(inlineStyle)) {
          styleCloseTagBeforeList.push(inlineStyle);
          styleCloseTagBeforeOpenIndexList.push(currentOpenedStylesMap[inlineStyle]);
          delete currentOpenedStylesMap[inlineStyle];
        } else if (isLastChar) {
          styleCloseTagList.push(inlineStyle);
          styleCloseTagOpenIndexList.push(currentOpenedStylesMap[inlineStyle]);
          delete currentOpenedStylesMap[inlineStyle];
        }
      }

      for (var _i = 0, _styleCloseTagOpenInd = styleCloseTagOpenIndexList; _i < _styleCloseTagOpenInd.length; _i++) {
        var closedIndex = _styleCloseTagOpenInd[_i];

        for (var _inlineStyle in currentOpenedStylesMap) {
          if (currentOpenedStylesMap[_inlineStyle] > closedIndex) {
            styleCloseTagList.push(_inlineStyle);
            styleCloseTagOpenIndexList.push(currentOpenedStylesMap[_inlineStyle]);
            delete currentOpenedStylesMap[_inlineStyle];
          }
        }
      }

      for (var _i2 = 0, _styleCloseTagBeforeO = styleCloseTagBeforeOpenIndexList; _i2 < _styleCloseTagBeforeO.length; _i2++) {
        var _closedIndex = _styleCloseTagBeforeO[_i2];

        for (var _inlineStyle2 in currentOpenedStylesMap) {
          if (currentOpenedStylesMap[_inlineStyle2] < charIndex && currentOpenedStylesMap[_inlineStyle2] > _closedIndex) {
            styleCloseTagBeforeList.push(_inlineStyle2);
            styleCloseTagBeforeOpenIndexList.push(currentOpenedStylesMap[_inlineStyle2]);
            delete currentOpenedStylesMap[_inlineStyle2];

            if (charInlineStyles.includes(_inlineStyle2)) {
              styleOpenTagList.push(_inlineStyle2);
              currentOpenedStylesMap[_inlineStyle2] = charIndex;
            }
          }
        }
      }

      var j = 0;

      while (j < styleCloseTagBeforeList.length) {
        html += '</span>';
        j++;
      }

      html += entityOpenTag;

      for (var _i3 = 0, _styleOpenTagList = styleOpenTagList; _i3 < _styleOpenTagList.length; _i3++) {
        var style = _styleOpenTagList[_i3];
        html += '<span style="' + getInlineStylesCss(style) + '">';
      }

      html += block.getText()[charIndex];
      var k = 0;

      while (k < styleCloseTagList.length) {
        html += '</span>';
        k++;
      }

      html += entityCloseTag;
      lastEntityKey = currentEntityKey;
    }

    html += blockCloseTag;
    blockCount++;
  }

  return html;
};

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}
function mergeDeep(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) return target;
  var source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          var _Object$assign;

          Object.assign(target, (_Object$assign = {}, _Object$assign[key] = {}, _Object$assign));
        }

        mergeDeep(target[key], source[key]);
      } else {
        var _Object$assign2;

        Object.assign(target, (_Object$assign2 = {}, _Object$assign2[key] = source[key], _Object$assign2));
      }
    }
  }

  return mergeDeep.apply(void 0, [target].concat(sources));
}

var ca = {
  controls: {
    undo: {
      title: 'Desfer'
    },
    redo: {
      title: 'Refer'
    },
    bold: {
      title: 'Negreta'
    },
    italic: {
      title: 'Cursiva'
    },
    underline: {
      title: 'Subratllat'
    },
    strikethrough: {
      title: 'Ratllat'
    },
    code: {
      title: 'Codi'
    },
    fontColor: {
      title: 'Color de font',
      labels: {
        noColor: 'Sense color'
      }
    },
    fontBackgroundColor: {
      title: 'Color de resaltat del text',
      labels: {
        noColor: 'Sense color'
      }
    },
    linkAdd: {
      title: 'Afegir enllaç',
      labels: {
        link: 'Enllaç'
      },
      actions: {
        add: 'Afegir',
        cancel: 'Cancel·lar'
      }
    },
    linkRemove: {
      title: 'Eliminar enllaç'
    },
    image: {
      title: 'Afegir imatge',
      actions: {
        upload: 'Pujar imatge',
        url: 'Des de URL',
        add: 'Afegir',
        cancel: 'Cancel·lar',
        alignLeft: "Alinear a l'esquerra",
        alignCenter: 'Centrar',
        alignRight: 'Alinear a la dreta',
        remove: 'Eliminar imatge',
        resize: 'Redimensionar'
      },
      labels: {
        dropImageHere: 'Arrossega una imatge aquí o fes click per a pujar una',
        width: 'Ample',
        height: 'Alt',
        url: 'URL',
        insertOptions: 'Opcions de afegir imatge',
        editOptions: "Opcions d'imatge"
      },
      errorMessages: {
        notValidImage: 'La imatge no és vàlida'
      }
    },
    blockType: {
      title: 'Format de bloc',
      labels: {
        normal: 'Normal',
        header1: 'Títol 1',
        header2: 'Títol 2',
        header3: 'Títol 3',
        header4: 'Títol 4',
        header5: 'Títol 5',
        header6: 'Títol 6'
      }
    },
    fontSize: {
      title: 'Grandària de font',
      labels: {
        "default": 'Per defecte'
      }
    },
    fontFamily: {
      title: 'Font',
      labels: {
        "default": 'Per defecte'
      }
    },
    textAlign: {
      title: 'Alinear text',
      actions: {
        alignLeft: 'Esquerra',
        alignCenter: 'Centre',
        alignRight: 'Dreta',
        justify: 'Justificar'
      }
    },
    unorderedList: {
      title: 'Vinyetes'
    },
    orderedList: {
      title: 'Numeració'
    }
  }
};

var en = {
  controls: {
    undo: {
      title: 'Undo'
    },
    redo: {
      title: 'Redo'
    },
    bold: {
      title: 'Bold'
    },
    italic: {
      title: 'Italic'
    },
    underline: {
      title: 'Underline'
    },
    strikethrough: {
      title: 'Strike through'
    },
    code: {
      title: 'Code'
    },
    fontColor: {
      title: 'Font color',
      labels: {
        noColor: 'None'
      }
    },
    fontBackgroundColor: {
      title: 'Highlight color',
      labels: {
        noColor: 'None'
      }
    },
    linkAdd: {
      title: 'Add link',
      labels: {
        link: 'Link'
      },
      actions: {
        add: 'Add',
        cancel: 'Cancel'
      }
    },
    linkRemove: {
      title: 'Remove link'
    },
    image: {
      title: 'Insert image',
      actions: {
        upload: 'Upload image',
        url: 'By URL',
        add: 'Add',
        cancel: 'Cancel',
        alignLeft: 'Align left',
        alignCenter: 'Align center',
        alignRight: 'Align right',
        remove: 'Remove image',
        resize: 'Resize'
      },
      labels: {
        dropImageHere: 'Drop image here or click to upload',
        width: 'Width',
        height: 'Height',
        url: 'URL',
        insertOptions: 'Insert image options',
        editOptions: 'Image options'
      },
      errorMessages: {
        notValidImage: 'Not a valid image'
      }
    },
    blockType: {
      title: 'Block format',
      labels: {
        normal: 'Normal',
        header1: 'Header 1',
        header2: 'Header 2',
        header3: 'Header 3',
        header4: 'Header 4',
        header5: 'Header 5',
        header6: 'Header 6'
      }
    },
    fontSize: {
      title: 'Font size',
      labels: {
        "default": 'default'
      }
    },
    fontFamily: {
      title: 'Font type',
      labels: {
        "default": 'default'
      }
    },
    textAlign: {
      title: 'Align text',
      actions: {
        alignLeft: 'Left',
        alignCenter: 'Center',
        alignRight: 'Right',
        justify: 'Justify'
      }
    },
    unorderedList: {
      title: 'Unordered list'
    },
    orderedList: {
      title: 'Ordered list'
    }
  }
};

var es = {
  controls: {
    undo: {
      title: 'Deshacer'
    },
    redo: {
      title: 'Rehacer'
    },
    bold: {
      title: 'Negrita'
    },
    italic: {
      title: 'Cursiva'
    },
    underline: {
      title: 'Subrayado'
    },
    strikethrough: {
      title: 'Tachado'
    },
    code: {
      title: 'Código'
    },
    fontColor: {
      title: 'Color de fuente',
      labels: {
        noColor: 'Sin color'
      }
    },
    fontBackgroundColor: {
      title: 'Color de resaltado de texto',
      labels: {
        noColor: 'Sin color'
      }
    },
    linkAdd: {
      title: 'Añadir enlace',
      labels: {
        link: 'Enlace'
      },
      actions: {
        add: 'Añadir',
        cancel: 'Cancelar'
      }
    },
    linkRemove: {
      title: 'Eliminar enlace'
    },
    image: {
      title: 'Insertar imagen',
      actions: {
        upload: 'Subir imagen',
        url: 'Desde URL',
        add: 'Añadir',
        cancel: 'Cancelar',
        alignLeft: 'Alinear a la izquierda',
        alignCenter: 'Centrar',
        alignRight: 'Alinear a la derecha',
        remove: 'Eliminar imagen',
        resize: 'Redimensionar'
      },
      labels: {
        dropImageHere: 'Arrastra una imagen aquí o haz click para subir una',
        width: 'Ancho',
        height: 'Alto',
        url: 'URL',
        insertOptions: 'Opciones de insertar imagen',
        editOptions: 'Opciones de imagen'
      },
      errorMessages: {
        notValidImage: 'La imagen no es válida'
      }
    },
    blockType: {
      title: 'Formato de bloque',
      labels: {
        normal: 'Normal',
        header1: 'Encabezado 1',
        header2: 'Encabezado 2',
        header3: 'Encabezado 3',
        header4: 'Encabezado 4',
        header5: 'Encabezado 5',
        header6: 'Encabezado 6'
      }
    },
    fontSize: {
      title: 'Tamaño de fuente',
      labels: {
        "default": 'Por defecto'
      }
    },
    fontFamily: {
      title: 'Fuente',
      labels: {
        "default": 'Por defecto'
      }
    },
    textAlign: {
      title: 'Alinear texto',
      actions: {
        alignLeft: 'Izquierda',
        alignCenter: 'Centro',
        alignRight: 'Derecha',
        justify: 'Justificar'
      }
    },
    unorderedList: {
      title: 'Viñetas'
    },
    orderedList: {
      title: 'Numeración'
    }
  }
};

var languages = {
  ca: ca,
  en: en,
  es: es
};

var factory;
var CompositeDecorator = draftJs__default.CompositeDecorator,
    DefaultDraftBlockRenderMap = draftJs__default.DefaultDraftBlockRenderMap,
    EditorState = draftJs__default.EditorState,
    Editor = draftJs__default.Editor,
    RichUtils = draftJs__default.RichUtils;
var createWithContent$1 = function createWithContent(config, contentState) {
  if (config === void 0) {
    config = defaultConfig;
  }

  var editorFactories = new EditorFactories(config);
  console.log("EDITOR STATE", EditorState);
  return draftJs__default.EditorState.createWithContent(contentState, editorFactories.getCompositeDecorator());
};
var createEmpty = function createEmpty(config) {
  if (config === void 0) {
    config = defaultConfig;
  }

  var editorFactories = new EditorFactories(config);
  console.log("EDITOR STATE", EditorState);
  return draftJs__default.EditorState.createEmpty(editorFactories.getCompositeDecorator());
};
var getFactory = function getFactory(config) {
  if (config === void 0) {
    config = defaultConfig;
  }

  if (factory) {
    return factory;
  }

  factory = new EditorFactories(config);
  return factory;
};

var EditorFactories = /*#__PURE__*/function () {
  function EditorFactories(config) {
    this.config = config || defaultConfig;
  }

  var _proto = EditorFactories.prototype;

  _proto.getCompositeDecorator = function getCompositeDecorator() {
    var decorators = [];

    for (var _iterator = _createForOfIteratorHelperLoose(this.getToolbarControls()), _step; !(_step = _iterator()).done;) {
      var control = _step.value;
      var pluginData = this.getPluginData(control);

      if (pluginData && pluginData.decorators) {
        decorators = decorators.concat(pluginData.decorators);
      }
    }

    return decorators.length > 0 ? new CompositeDecorator(decorators) : null;
  };

  _proto.getCustomStyleMap = function getCustomStyleMap() {
    var customStyleMap = {};

    for (var _iterator2 = _createForOfIteratorHelperLoose(this.getToolbarControls()), _step2; !(_step2 = _iterator2()).done;) {
      var control = _step2.value;
      var pluginData = this.getPluginData(control);

      if (pluginData && pluginData.customStyleMap) {
        customStyleMap = _extends({}, customStyleMap, pluginData.customStyleMap);
      }
    }

    return customStyleMap;
  };

  _proto.getBlockRenderMap = function getBlockRenderMap() {
    var renderMap = DefaultDraftBlockRenderMap;

    for (var _iterator3 = _createForOfIteratorHelperLoose(this.getToolbarControls()), _step3; !(_step3 = _iterator3()).done;) {
      var control = _step3.value;
      var pluginData = this.getPluginData(control);

      if (pluginData && pluginData.blockRenderMap) {
        renderMap = renderMap.merge(pluginData.blockRenderMap);
      }
    }

    return renderMap;
  };

  _proto.getBlockStyleFn = function getBlockStyleFn() {
    var _this = this;

    return function (contentBlock) {
      var classNames = '';

      for (var _iterator4 = _createForOfIteratorHelperLoose(_this.getToolbarControls()), _step4; !(_step4 = _iterator4()).done;) {
        var control = _step4.value;

        var pluginData = _this.getPluginData(control);

        if (pluginData && pluginData.blockStyleFn) {
          var result = pluginData.blockStyleFn(contentBlock);
          if (result) classNames += ' ' + result;
        }
      }

      return classNames.trim();
    };
  };

  _proto.getBlockRendererFn = function getBlockRendererFn() {
    var _this2 = this;

    return function (contentBlock) {
      for (var _iterator5 = _createForOfIteratorHelperLoose(_this2.getToolbarControls()), _step5; !(_step5 = _iterator5()).done;) {
        var control = _step5.value;

        var pluginData = _this2.getPluginData(control);

        if (!pluginData || !pluginData.blockRendererFn) continue;
        var result = pluginData.blockRendererFn(contentBlock);
        if (result) return result;
      }
    };
  };

  _proto.getToolbarControls = function getToolbarControls() {
    return this.getConfigItem('toolbar', 'controls');
  };

  _proto.getToolbarControlComponents = function getToolbarControlComponents() {
    var _this3 = this;

    var keyCounter = {};
    return this.getToolbarControls().map(function (control) {
      if (!keyCounter[control.name]) keyCounter[control.name] = 0;
      keyCounter[control.name]++;
      return React.createElement(control.component, {
        key: "" + control.name + keyCounter[control.name],
        configuration: _this3.getToolbarControlConfiguration(control.name),
        defaultConfiguration: defaultToolbarControlsConfiguration[control.name],
        pluginData: _this3.getPluginData(control)
      });
    });
  };

  _proto.getToolbarControlConfiguration = function getToolbarControlConfiguration(controlName) {
    if (this.config && this.config.toolbar && this.config.toolbar.controlsConfig && this.config.toolbar.controlsConfig[controlName]) return this.config.toolbar.controlsConfig[controlName];else if (defaultToolbarControlsConfiguration[controlName]) return defaultToolbarControlsConfiguration[controlName];
    return null;
  };

  _proto.getPluginData = function getPluginData(control) {
    if (!control.plugin) return null;
    return control.plugin(this.getToolbarControlConfiguration(control.name), defaultToolbarControlsConfiguration[control.name]);
  };

  _proto.getTranslations = function getTranslations() {
    var lang = this.getConfigItem('lang');
    var langTranslations = languages[lang];
    var customTranslations = this.config.translations || {};
    return mergeDeep(langTranslations, customTranslations);
  };

  _proto.getToolbarPosition = function getToolbarPosition() {
    return this.getConfigItem('toolbar', 'position').toLowerCase();
  };

  _proto.getConfigItem = function getConfigItem() {
    var item = _extends({}, this.config);

    for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
      keys[_key] = arguments[_key];
    }

    for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
      var key = _keys[_i];
      item = item[key];
      if (item === undefined) break;
    }

    if (item !== undefined) return item;
    item = _extends({}, defaultConfig);

    for (var _i2 = 0, _keys2 = keys; _i2 < _keys2.length; _i2++) {
      var _key2 = _keys2[_i2];
      item = item[_key2];
    }

    return item;
  };

  return EditorFactories;
}();

var useStyles$6 = makeStyles(function (theme) {
  return {
    '@global': {
      '.mui-editor-left-aligned-block': {
        textAlign: 'left !important',
        '& > div': {
          textAlign: 'left !important'
        }
      },
      '.mui-editor-center-aligned-block': {
        textAlign: 'center !important',
        '& > div': {
          textAlign: 'center !important'
        }
      },
      '.mui-editor-right-aligned-block': {
        textAlign: 'right !important',
        '& > div': {
          textAlign: 'right !important'
        }
      },
      '.mui-editor-justify-aligned-block': {
        textAlign: 'justify !important',
        '& > div': {
          textAlign: 'justify !important'
        }
      }
    },
    editorWrapper: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(5)
    }
  };
});
var blockStyleFn;
var customStyleMap;
var blockRenderMap;
var blockRendererFn;

var initStateSelector = function initStateSelector(state) {
  return state.init;
};

var setStateSelector = function setStateSelector(state) {
  return state.setEditorState;
};

var setStuffSelector = function setStuffSelector(state) {
  return state.setStuff;
};

var editorStateSelector = function editorStateSelector(state) {
  return state.editorState;
};

var translateFn;

function MUIEditor(_ref) {
  var _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$onFocus = _ref.onFocus,
      onFocus = _ref$onFocus === void 0 ? function () {} : _ref$onFocus,
      _ref$onBlur = _ref.onBlur,
      onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? defaultConfig : _ref$config;
  var init = useStore(initStateSelector);
  var editorState = useStore(editorStateSelector);
  var setState = useStore(setStateSelector);
  var setStuff = useStore(setStuffSelector);
  var editorFactories = getFactory(config);
  var editorRef = React.useRef(null);
  var translateRef = React.useRef(function () {});
  var toolbarVisibleConfig = editorFactories.getConfigItem('toolbar', 'visible');

  var _React$useState = React.useState(toolbarVisibleConfig),
      isToolbarVisible = _React$useState[0],
      setIsToolbarVisible = _React$useState[1];

  translateFn = translateFn || function (translations, id) {
    var translator = new Translator(translations);
    return translator.get(id);
  }.bind(null, editorFactories.getTranslations());

  translateRef.current = React.useCallback(function (translations, id) {
    var translator = new Translator(translations);
    return translator.get(id);
  }.bind(null, editorFactories.getTranslations()), []);
  setStuff({
    ref: editorRef,
    onChange: onChange,
    translate: translateFn
  });
  var classes = useStyles$6();
  React.useEffect(function () {
    setIsToolbarVisible(toolbarVisibleConfig);
  }, [toolbarVisibleConfig]);
  var toolbar = /*#__PURE__*/React.createElement(EditorToolbar, {
    visible: isToolbarVisible,
    style: editorFactories.getConfigItem('toolbar', 'style'),
    className: editorFactories.getConfigItem('toolbar', 'className')
  }, editorFactories.getToolbarControlComponents());
  var top = editorFactories.getToolbarPosition() === 'top' ? toolbar : null;
  var bottom = editorFactories.getToolbarPosition() === 'bottom' ? toolbar : null;
  var wrapperOnClick = React.useCallback(function (ref) {
    ref.current.focus();
  }, []);
  var editorWrapperProps = React.useRef({
    style: editorFactories.getConfigItem('editor', 'style'),
    className: classes.editorWrapper + " " + editorFactories.getConfigItem('editor', 'className'),
    onClick: wrapperOnClick
  });
  var editorWrapperElement = editorFactories.getConfigItem('editor', 'wrapperElement');
  var handleKeyCommand = React.useCallback(function (command) {
    console.log("KEY COMMAND", command);
    var newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }, [editorState]);

  if (editorWrapperElement === Paper$1) {
    editorWrapperProps.current.elevation = 3;
  }

  blockStyleFn = editorFactories.getBlockStyleFn();
  customStyleMap = editorFactories.getCustomStyleMap();
  blockRenderMap = editorFactories.getBlockRenderMap();
  blockRendererFn = editorFactories.getBlockRendererFn();

  if (!init) {
    useStore.setState(getStoreState(config));
    return null;
  }

  console.log("STORE STORE", useStore.getState());
  setTimeout(function () {
    console.log("STORE STORE", useStore.getState());
    console.log("STORE STORE", useStore.getState());
  }, 1500);
  var EditorWrapper = React.createElement(editorWrapperElement, editorWrapperProps.current, /*#__PURE__*/React.createElement(Editor, _extends({}, editorFactories.getConfigItem('draftEditor'), {
    ref: editorRef,
    editorState: editorState,
    onChange: setState,
    onFocus: onFocus,
    onBlur: onBlur,
    handleKeyCommand: handleKeyCommand,
    blockStyleFn: blockStyleFn,
    customStyleMap: customStyleMap,
    blockRenderMap: blockRenderMap,
    blockRendererFn: blockRendererFn
  })));
  return /*#__PURE__*/React.createElement("div", null, "LOLOLOLOL", top, EditorWrapper, bottom);
}

exports.LANG_PREFIX = LANG_PREFIX;
exports.MUIEditor = MUIEditor;
exports.createEmpty = createEmpty;
exports.createWithContent = createWithContent$1;
exports.fileToBase64 = fileToBase64;
exports.getFactory = getFactory;
exports.getStoreState = getStoreState;
exports.toHTML = toHTML;
exports.toolbarControlTypes = toolbarControlTypes$1;
exports.useStore = useStore;
//# sourceMappingURL=index.js.map
