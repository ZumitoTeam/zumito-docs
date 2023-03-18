"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=s(n),u=a,c=k["".concat(m,".").concat(u)]||k[u]||d[u]||i;return n?r.createElement(c,o(o({ref:t},p),{},{components:n})):r.createElement(c,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"CommandParameters",title:"Interface: CommandParameters",sidebar_label:"CommandParameters",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"framework/tsdocs/interfaces/CommandParameters",id:"framework/tsdocs/interfaces/CommandParameters",title:"Interface: CommandParameters",description:"Classdesc",source:"@site/docs/framework/tsdocs/interfaces/CommandParameters.md",sourceDirName:"framework/tsdocs/interfaces",slug:"/framework/tsdocs/interfaces/CommandParameters",permalink:"/es/docs/framework/tsdocs/interfaces/CommandParameters",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CommandParameters",title:"Interface: CommandParameters",sidebar_label:"CommandParameters",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"CommandChoiceDefinition",permalink:"/es/docs/framework/tsdocs/interfaces/CommandChoiceDefinition"},next:{title:"FrameworkSettings",permalink:"/es/docs/framework/tsdocs/interfaces/FrameworkSettings"}},m={},s=[{value:"Properties",id:"properties",level:2},{value:"args",id:"args",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"client",id:"client",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"framework",id:"framework",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"guildSettings",id:"guildsettings",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"interaction",id:"interaction",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"message",id:"message",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"trans",id:"trans",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-6",level:4}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Classdesc"))),(0,a.kt)("p",null,"Parameters passed to a command execution."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Property"))),(0,a.kt)("p",null,"The client client instance."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Property"))),(0,a.kt)("p",null,"The message that triggered the command."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Property"))),(0,a.kt)("p",null,"The interaction that triggered the command."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Property"))),(0,a.kt)("p",null,"The arguments passed to the command."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"args"},"args"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"args"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/CommandParameters.ts#L16"},"types/CommandParameters.ts:16")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"client"},"client"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"client"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Client"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/CommandParameters.ts#L17"},"types/CommandParameters.ts:17")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"framework"},"framework"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"framework"),": ",(0,a.kt)("a",{parentName:"p",href:"/es/docs/framework/tsdocs/classes/ZumitoFramework"},(0,a.kt)("inlineCode",{parentName:"a"},"ZumitoFramework"))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/CommandParameters.ts#L18"},"types/CommandParameters.ts:18")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"guildsettings"},"guildSettings"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"guildSettings"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/CommandParameters.ts#L19"},"types/CommandParameters.ts:19")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"interaction"},"interaction"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"interaction"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"CommandInteraction"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"CacheType"),">"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/CommandParameters.ts#L15"},"types/CommandParameters.ts:15")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"message"},"message"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"message"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Message"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/CommandParameters.ts#L14"},"types/CommandParameters.ts:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"trans"},"trans"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"trans"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"params?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"params?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"key")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"params?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ZumitoTeam/zumito-framework/blob/4711543/src/types/CommandParameters.ts#L20"},"types/CommandParameters.ts:20")))}d.isMDXComponent=!0}}]);