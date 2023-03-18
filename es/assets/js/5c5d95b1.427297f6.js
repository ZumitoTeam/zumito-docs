"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7958],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>d});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var m=a.createContext({}),c=function(e){var t=a.useContext(m),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),p=c(i),d=n,f=p["".concat(m,".").concat(d)]||p[d]||u[d]||o;return i?a.createElement(f,l(l({ref:t},s),{},{components:i})):a.createElement(f,l({ref:t},s))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,l=new Array(o);l[0]=p;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var c=2;c<o;c++)l[c]=i[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},804:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=i(7462),n=(i(7294),i(3905));const o={sidebar_position:2,title:"Emoji FallBack",description:"An utility to fallback to a default emoji if the bot doesn't have the specified emoji."},l="Emoji FallBack",r={unversionedId:"custom/utilities/emoji-fallback",id:"custom/utilities/emoji-fallback",title:"Emoji FallBack",description:"An utility to fallback to a default emoji if the bot doesn't have the specified emoji.",source:"@site/docs/custom/utilities/emoji-fallback.md",sourceDirName:"custom/utilities",slug:"/custom/utilities/emoji-fallback",permalink:"/es/docs/custom/utilities/emoji-fallback",draft:!1,editUrl:"https://github.com/fernandomema/zumito-docs/tree/main/packages/create-docusaurus/templates/shared/docs/custom/utilities/emoji-fallback.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Emoji FallBack",description:"An utility to fallback to a default emoji if the bot doesn't have the specified emoji."},sidebar:"tutorialSidebar",previous:{title:"Text Formatter",permalink:"/es/docs/custom/utilities/text-formatter"}},m={},c=[{value:"Usage",id:"usage",level:2},{value:"By id",id:"by-id",level:3},{value:"By name",id:"by-name",level:3}],s={toc:c};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"emoji-fallback"},"Emoji FallBack"),(0,n.kt)("p",null,"In order to make easier the reuse a module across multiple bots, the EmojiFallback utility will fallback to a default emoji if the bot doesn't have the specified emoji."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"by-id"},"By id"),(0,n.kt)("p",null,"To use the EmojiFallback utility, you just need to import it from the ",(0,n.kt)("inlineCode",{parentName:"p"},"zumito-framework")," package:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { EmojiFallback } from "zumito-framework";\n')),(0,n.kt)("p",null,"Then, you can use it like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const emoji = EmojiFallback.getEmoji(client, emojiId, fallbackEmoji);\n")),(0,n.kt)("p",null,"where:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"client")," - Discord.Client object."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"emojiId")," - The id of the emoji. Example: ",(0,n.kt)("inlineCode",{parentName:"li"},"1234567890")," extracted from ",(0,n.kt)("inlineCode",{parentName:"li"},":emojiName:1234567890"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fallbackEmoji")," - The fallback emoji. Example: ",(0,n.kt)("inlineCode",{parentName:"li"},":clown:"),". Only discord native emojis are supported.")),(0,n.kt)("h3",{id:"by-name"},"By name"),(0,n.kt)("p",null,"You can also use the ",(0,n.kt)("inlineCode",{parentName:"p"},"getEmojiByName")," function, which receives the name of the emoji instead of the id:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const emoji = EmojiFallback.getEmojiByName(client, emojiName, fallbackEmoji);\n")),(0,n.kt)("p",null,"where:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"client")," - Discord.Client object."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"emojiName")," - The name of the emoji. Example: ",(0,n.kt)("inlineCode",{parentName:"li"},"emojiName")," extracted from ",(0,n.kt)("inlineCode",{parentName:"li"},":emojiName:1234567890"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fallbackEmoji")," - The fallback emoji. Example: ",(0,n.kt)("inlineCode",{parentName:"li"},":clown:"),". Only discord native emojis are supported.")),(0,n.kt)("p",null,"\u26a0\ufe0f If two or more guilds have an emoji with the same name, the emoji will be fetched from the first guild that has it. So be careful when using this method."))}u.isMDXComponent=!0}}]);