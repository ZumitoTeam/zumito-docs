"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,u=p["".concat(l,".").concat(f)]||p[f]||c[f]||o;return n?i.createElement(u,a(a({ref:t},d),{},{components:n})):i.createElement(u,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:r,a[1]=m;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const o={id:"CommandArgDefinition",title:"Interface: CommandArgDefinition",sidebar_label:"CommandArgDefinition",sidebar_position:0,custom_edit_url:null},a=void 0,m={unversionedId:"framework/tsdocs/interfaces/CommandArgDefinition",id:"framework/tsdocs/interfaces/CommandArgDefinition",title:"Interface: CommandArgDefinition",description:"Properties",source:"@site/docs/framework/tsdocs/interfaces/CommandArgDefinition.md",sourceDirName:"framework/tsdocs/interfaces",slug:"/framework/tsdocs/interfaces/CommandArgDefinition",permalink:"/docs/framework/tsdocs/interfaces/CommandArgDefinition",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CommandArgDefinition",title:"Interface: CommandArgDefinition",sidebar_label:"CommandArgDefinition",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ButtonPressedParams",permalink:"/docs/framework/tsdocs/interfaces/ButtonPressedParams"},next:{title:"CommandChoiceDefinition",permalink:"/docs/framework/tsdocs/interfaces/CommandChoiceDefinition"}},l={},s=[{value:"Properties",id:"properties",level:2},{value:"choices",id:"choices",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"optional",id:"optional",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"choices"},"choices"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"choices"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/framework/tsdocs/interfaces/CommandChoiceDefinition"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandChoiceDefinition")),"[] ","|"," () => ",(0,r.kt)("a",{parentName:"p",href:"/docs/framework/tsdocs/interfaces/CommandChoiceDefinition"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandChoiceDefinition")),"[]"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/CommandArgDefinition.ts#L7"},"types/CommandArgDefinition.ts:7")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/CommandArgDefinition.ts#L4"},"types/CommandArgDefinition.ts:4")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"optional"},"optional"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"optional"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/CommandArgDefinition.ts#L5"},"types/CommandArgDefinition.ts:5")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"type"},"type"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZumitoTeam/zumito-framework/blob/2c519e6/src/types/CommandArgDefinition.ts#L6"},"types/CommandArgDefinition.ts:6")))}c.isMDXComponent=!0}}]);