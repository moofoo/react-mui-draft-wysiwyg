(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ikLd:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));var i=n("Fcif"),a=n("+I+c"),o=n("mXGw"),s=n("/FXl"),r=n("TjRS"),l=n("RHcy"),d=n("O0Ep"),u=n("ZFoC"),c=(n("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/examples/display-content-in-your-page.mdx"}});var y={_frontmatter:c},p=r.a;function m(e){var t,n=e.components,m=Object(a.a)(e,["components"]);return Object(s.b)(p,Object(i.a)({},y,m,{components:n,mdxType:"MDXLayout"}),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Display the content in your page")),Object(s.b)("h2",{id:"imports"},"Imports"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"import MUIEditor, { MUIEditorState } from \"react-mui-draft-wysiwyg\";\nimport { convertFromRaw } from 'draft-js';\n")),Object(s.b)("h2",{id:"playground"},"Playground"),Object(s.b)(u.c,{__position:0,__code:"() => {\n  const rawContent = {\n    blocks: [\n      {\n        key: 'e4lom',\n        text: 'Wow! Nice article Jane Doe!',\n        type: 'unstyled',\n        depth: 0,\n        inlineStyleRanges: [\n          { offset: 0, length: 3, style: 'BOLD' },\n          { offset: 18, length: 8, style: 'ITALIC' },\n        ],\n        entityRanges: [],\n        data: {},\n      },\n      {\n        key: 'c128v',\n        text: '',\n        type: 'unstyled',\n        depth: 0,\n        inlineStyleRanges: [],\n        entityRanges: [],\n        data: {},\n      },\n      {\n        key: '5uoeh',\n        text: 'I would recommend it to everyone.',\n        type: 'unstyled',\n        depth: 0,\n        inlineStyleRanges: [\n          { offset: 24, length: 8, style: 'BOLD' },\n          { offset: 24, length: 8, style: 'FONT_COLOR-rgb(255, 0, 0)' },\n        ],\n        entityRanges: [],\n        data: {},\n      },\n      {\n        key: '2cvur',\n        text: ' ',\n        type: 'atomic',\n        depth: 0,\n        inlineStyleRanges: [],\n        entityRanges: [{ offset: 0, length: 1, key: 0 }],\n        data: {},\n      },\n      {\n        key: '27uqd',\n        text: '',\n        type: 'unstyled',\n        depth: 0,\n        inlineStyleRanges: [],\n        entityRanges: [],\n        data: {},\n      },\n    ],\n    entityMap: {\n      '0': {\n        type: 'IMAGE',\n        mutability: 'IMMUTABLE',\n        data: {\n          src: 'https://picsum.photos/200/300',\n          width: 200,\n          height: 300,\n        },\n      },\n    },\n  }\n  const editorConfig = {\n    toolbar: { visible: false },\n    draftEditor: { readOnly: true },\n    editor: {\n      wrapperElement: 'div',\n      style: {\n        padding: 0,\n        borderTop: '1px solid gray',\n      },\n    },\n  }\n  const [editorState, setEditorState] = React.useState(\n    MUIEditorState.createWithContent(\n      editorConfig,\n      convertFromRaw(rawContent),\n    ),\n  )\n  const onChange = newState => {\n    setEditorState(newState)\n  }\n  return (\n    <>\n      <h1>My article</h1>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque\n        ornare ut tellus ac pulvinar. Nunc in nunc id eros vehicula volutpat\n        id non est. Duis est libero, semper varius purus in, scelerisque\n        venenatis elit. Phasellus consequat elementum dignissim. Duis\n        hendrerit tellus sed arcu viverra eleifend. Suspendisse sagittis eu\n        quam et aliquam. Duis quis hendrerit diam. Aenean in ex felis.\n      </p>\n      <h2>Comments</h2>\n      <h3>John Doe</h3>\n      <MUIEditor\n        editorState={editorState}\n        onChange={onChange}\n        config={editorConfig}\n      />\n    </>\n  )\n}",__scope:(t={props:m,DefaultLayout:r.a,MUIEditor:l.d,MUIEditorState:l.c,convertFromRaw:d.convertFromRaw,Playground:u.c},t.DefaultLayout=r.a,t._frontmatter=c,t),mdxType:"Playground"},(function(){var e={toolbar:{visible:!1},draftEditor:{readOnly:!0},editor:{wrapperElement:"div",style:{padding:0,borderTop:"1px solid gray"}}},t=o.useState(l.c.createWithContent(e,Object(d.convertFromRaw)({blocks:[{key:"e4lom",text:"Wow! Nice article Jane Doe!",type:"unstyled",depth:0,inlineStyleRanges:[{offset:0,length:3,style:"BOLD"},{offset:18,length:8,style:"ITALIC"}],entityRanges:[],data:{}},{key:"c128v",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"5uoeh",text:"I would recommend it to everyone.",type:"unstyled",depth:0,inlineStyleRanges:[{offset:24,length:8,style:"BOLD"},{offset:24,length:8,style:"FONT_COLOR-rgb(255, 0, 0)"}],entityRanges:[],data:{}},{key:"2cvur",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}},{key:"27uqd",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}],entityMap:{0:{type:"IMAGE",mutability:"IMMUTABLE",data:{src:"https://picsum.photos/200/300",width:200,height:300}}}}))),n=t[0],i=t[1];return Object(s.b)(o.Fragment,null,Object(s.b)("h1",null,"My article"),Object(s.b)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare ut tellus ac pulvinar. Nunc in nunc id eros vehicula volutpat id non est. Duis est libero, semper varius purus in, scelerisque venenatis elit. Phasellus consequat elementum dignissim. Duis hendrerit tellus sed arcu viverra eleifend. Suspendisse sagittis eu quam et aliquam. Duis quis hendrerit diam. Aenean in ex felis."),Object(s.b)("h2",null,"Comments"),Object(s.b)("h3",null,"John Doe"),Object(s.b)(l.d,{editorState:n,onChange:function(e){i(e)},config:e,mdxType:"MUIEditor"}))})))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/examples/display-content-in-your-page.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-examples-display-content-in-your-page-mdx-45efdfc70cb77ce0e887.js.map