(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{ryRK:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return f}));var o=n("Fcif"),a=n("+I+c"),r=n("mXGw"),c=n("/FXl"),i=n("TjRS"),d=n("RHcy"),s=n("O0Ep"),b=n("ZFoC"),p=(n("aD51"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/examples/basic-with-content.mdx"}});var l={_frontmatter:p},m=i.a;function f(e){var t,n=e.components,f=Object(a.a)(e,["components"]);return Object(c.b)(m,Object(o.a)({},l,f,{components:n,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Initializes the editor with content")),Object(c.b)("h2",{id:"imports"},"Imports"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"import MUIEditor, { MUIEditorState } from \"react-mui-draft-wysiwyg\";\nimport { convertFromRaw } from 'draft-js';\n")),Object(c.b)("p",null,"More info for ",Object(c.b)("inlineCode",{parentName:"p"},"convertFromRaw"),":"),Object(c.b)("p",null,Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://draftjs.org/docs/api-reference-data-conversion#convertfromraw"}),"https://draftjs.org/docs/api-reference-data-conversion#convertfromraw")),Object(c.b)("h2",{id:"playground"},"Playground"),Object(c.b)(b.c,{__position:0,__code:"() => {\n  const editorConfig = {}\n  const rawContent = {\n    blocks: [\n      {\n        data: {},\n        depth: 0,\n        entityRanges: [],\n        inlineStyleRanges: [],\n        key: '2vm6d',\n        text: 'Hello world',\n        type: 'header-one',\n      },\n    ],\n    entityMap: {},\n  }\n  const [editorState, setEditorState] = React.useState(\n    MUIEditorState.createWithContent(\n      editorConfig,\n      convertFromRaw(rawContent),\n    ),\n  )\n  const onChange = newState => {\n    setEditorState(newState)\n  }\n  return (\n    <MUIEditor\n      editorState={editorState}\n      onChange={onChange}\n      config={editorConfig}\n    />\n  )\n}",__scope:(t={props:f,DefaultLayout:i.a,MUIEditor:d.d,MUIEditorState:d.c,convertFromRaw:s.convertFromRaw,Playground:b.c},t.DefaultLayout=i.a,t._frontmatter=p,t),mdxType:"Playground"},(function(){var e={},t=r.useState(d.c.createWithContent(e,Object(s.convertFromRaw)({blocks:[{data:{},depth:0,entityRanges:[],inlineStyleRanges:[],key:"2vm6d",text:"Hello world",type:"header-one"}],entityMap:{}}))),n=t[0],o=t[1];return Object(c.b)(d.d,{editorState:n,onChange:function(e){o(e)},config:e,mdxType:"MUIEditor"})})))}void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/examples/basic-with-content.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-examples-basic-with-content-mdx-d122caccc36ce57ee09e.js.map