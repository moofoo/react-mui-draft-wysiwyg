(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"v5I/":function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return u})),n.d(e,"default",(function(){return m}));var o=n("Fcif"),a=n("+I+c"),r=n("mXGw"),c=n("/FXl"),i=n("TjRS"),d=n("RHcy"),b=n("ZFoC"),u=(n("aD51"),{});void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/examples/read-only-editor.mdx"}});var l={_frontmatter:u},s=i.a;function m(t){var e,n=t.components,m=Object(a.a)(t,["components"]);return Object(c.b)(s,Object(o.a)({},l,m,{components:n,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Sets the editor to read only.")),Object(c.b)("h2",{id:"imports"},"Imports"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";\n')),Object(c.b)("h2",{id:"playground"},"Playground"),Object(c.b)(b.c,{__position:0,__code:"() => {\n  const [editorState, setEditorState] = React.useState(\n    MUIEditorState.createEmpty(),\n  )\n  const onChange = newState => {\n    setEditorState(newState)\n  }\n  return (\n    <MUIEditor\n      editorState={editorState}\n      onChange={onChange}\n      config={{ draftEditor: { readOnly: true } }}\n    />\n  )\n}",__scope:(e={props:m,DefaultLayout:i.a,MUIEditor:d.d,MUIEditorState:d.c,Playground:b.c},e.DefaultLayout=i.a,e._frontmatter=u,e),mdxType:"Playground"},(function(){var t=r.useState(d.c.createEmpty()),e=t[0],n=t[1];return Object(c.b)(d.d,{editorState:e,onChange:function(t){n(t)},config:{draftEditor:{readOnly:!0}},mdxType:"MUIEditor"})})))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/examples/read-only-editor.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-examples-read-only-editor-mdx-7c89e3c66cf3db52a271.js.map