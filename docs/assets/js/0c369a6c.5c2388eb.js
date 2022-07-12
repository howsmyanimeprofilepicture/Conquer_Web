"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[133],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(t),d=o,m=g["".concat(l,".").concat(d)]||g[d]||u[d]||a;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7569:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:13},i="CORS",s={unversionedId:"CORS-by-woori",id:"CORS-by-woori",title:"CORS",description:"\ud480\uc2a4\ud0dd\uc73c\ub85c \uc6f9 \uac1c\ubc1c\uc744 \ud574\ubcf8\ub2e4\uba74, \ubc18\ub4dc\uc2dc \uc774 \uc5d0\ub7ec\ub97c \ub9c8\uc8fc\ud558\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4.",source:"@site/docs/06-CORS-by-woori.md",sourceDirName:".",slug:"/CORS-by-woori",permalink:"/Conquer_Web/docs/CORS-by-woori",draft:!1,editUrl:"https://github.com/fuggedaboutit/Conquer_Web/docs/06-CORS-by-woori.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"CORS (Cross-Origin Resource Sharing)",permalink:"/Conquer_Web/docs/cors-juno"},next:{title:"1. \ubca1\ud130 vs \ub798\uc2a4\ud130",permalink:"/Conquer_Web/docs/Jpeg-Png-Gif-Svg-Webp_hong"}},l={},p=[{value:"SOP(Same-Origin Policy) - \ub3d9\uc77c \ucd9c\ucc98 \uc815\ucc45",id:"sopsame-origin-policy---\ub3d9\uc77c-\ucd9c\ucc98-\uc815\ucc45",level:2},{value:"CORS",id:"cors-1",level:2},{value:"CORS ERROR \ud574\uacb0 \ubc29\ubc95",id:"cors-error-\ud574\uacb0-\ubc29\ubc95",level:2},{value:"\uc11c\ubc84\uc5d0\uc11c Access-Control-Allow-Origin\uc744 header\ub85c \ub118\uaca8\uc8fc\uae30",id:"\uc11c\ubc84\uc5d0\uc11c-access-control-allow-origin\uc744-header\ub85c-\ub118\uaca8\uc8fc\uae30",level:4},{value:"CORS Preflight",id:"cors-preflight",level:4},{value:"Credentials",id:"credentials",level:4}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cors"},"CORS"),(0,o.kt)("p",null,"\ud480\uc2a4\ud0dd\uc73c\ub85c \uc6f9 \uac1c\ubc1c\uc744 \ud574\ubcf8\ub2e4\uba74, \ubc18\ub4dc\uc2dc \uc774 \uc5d0\ub7ec\ub97c \ub9c8\uc8fc\ud558\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53216594/120084143-efae2a80-c108-11eb-81a2-bf6bf673c0c2.png",alt:"img"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53216594/120084147-f177ee00-c108-11eb-9f9b-bc47319fec60.png",alt:"img"})),(0,o.kt)("p",null,"\uc704\uc758 \uc5d0\ub7ec\ub294 CORS Error\ub85c, \uac01\uac01 http://localhost:3000, https://localhost:3001 \uc774\ub77c\ub294 origin\uc5d0\uc11c \uc11c\ubc84\uc5d0\ub2e4\uac00",(0,o.kt)("br",{parentName:"p"}),"\n","\uc5b4\ub5a0\ud55c \ub9ac\uc18c\uc2a4\ub97c \uc694\uccad\ud588\uc744 \ub54c \ubc1c\uc0dd\ud55c \uc5d0\ub7ec\uc785\ub2c8\ub2e4. \ub300\uccb4 \uc65c \uc774\ub7ec\ud55c \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c \uac83\uc77c\uae4c\uc694?"),(0,o.kt)("p",null,"\uc6b0\ub9ac\uac00 \uc811\uc18d\ud558\ub294 \ub9ce\uc740 \uc6f9 \uc0ac\uc774\ud2b8\uc5d0 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uadf8\ub7f0\ub370 \ub9cc\uc57d \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \ub2e4\ub978 \uc11c\ubc84\uc5d0 \ub370\uc774\ud130\ub97c \ubb34\ucc28\ubcc4\uc801\uc73c\ub85c \uc694\uccad\ud558\uace0 \ubc1b\uc544\uc62c \uc218 \uc788\uac8c \ub418\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694?",(0,o.kt)("br",{parentName:"p"}),"\n","\ud2b9\uc815 \uc18c\uc15c \ubbf8\ub514\uc5b4\uc5d0 \ub85c\uadf8\uc778\uc774 \ub41c \uc0c1\ud0dc\ub85c, \ub2e4\ub978 \ud0ed\uc744 \uc5f4\uc5b4\uc11c \uc774\uc0c1\ud55c \uc545\uc131 \uc0ac\uc774\ud2b8\uc5d0 \uc811\uc18d\ud558\uac8c \ub418\uc5b4 \ubc84\ub838\ub2e4\uace0 \uac00\uc815\ud574 \ubd05\uc2dc\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc774 \uacbd\uc6b0 \uc545\uc131 \uc0ac\uc774\ud2b8\uc758 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc2ec\uc5b4\uc838 \uc788\ub294 \ucfe0\ud0a4\uc758 \uc815\ubcf4\ub97c \uc77d\uace0 \uac00\uc838\uc624\ub294 \ubc29\ubc95\uc744 \ud1b5\ud574 \uacc4\uc815 \uc815\ubcf4\uc5d0 \uc811\uadfc \ud560 \uc218 \uc788\uace0",(0,o.kt)("br",{parentName:"p"}),"\n","\uba54\uc138\uc9c0\ub098 \ud3ec\uc2a4\ud305 \ub4f1\uc758 \uc815\ubcf4\ub97c \ud1b5\uc81c\ud560 \uc218 \uc788\uac8c \ub418\uc5b4\ubc84\ub9bd\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ub9cc\uc57d \uc740\ud589 \uc815\ubcf4\ub77c\uba74 \ub354\uc6b1 \ub054\ucc0d\ud55c \uc0c1\ud669\uc774\uaca0\uc8e0?   "),(0,o.kt)("p",null,"\ub530\ub77c\uc11c \uc11c\ub85c \ub2e4\ub978 origin\uc744 \uac00\uc9c4 \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc11c\ubc84\uac04\uc758 \ub9ac\uc18c\uc2a4 \uad50\ud658\uc744 \ud1b5\uc81c\ud568\uc73c\ub85c\uc368 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \ud568\ubd80\ub85c \ub370\uc774\ud130\ub97c",(0,o.kt)("br",{parentName:"p"}),"\n","\uac00\uc838\uc62c \uc218 \uc5c6\ub3c4\ub85d \ud560 \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ubc14\ub85c \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud574 SOP\uac00 \ub4f1\uc7a5\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"sopsame-origin-policy---\ub3d9\uc77c-\ucd9c\ucc98-\uc815\ucc45"},"SOP(Same-Origin Policy) - \ub3d9\uc77c \ucd9c\ucc98 \uc815\ucc45"),(0,o.kt)("p",null,"SOP(Same-Origin Policy)\uc740 \uc5b4\ub5a4 origin\uc5d0\uc11c \ubd88\ub7ec\uc628 \ubb38\uc11c\ub098 \uc2a4\ud06c\ub9bd\ud2b8\uac00 \ub2e4\ub978 origin\uc5d0\uc11c \ub9ac\uc18c\uc2a4\ub97c \ubd88\ub7ec\uc624\ub294 \uac83\uc744 \uc81c\ud55c\ud558\ub294 \ub0b4\uc6a9\uc744 \ub2f4\uace0 \uc788\uc2b5\ub2c8\ub2e4.    "),(0,o.kt)("p",null,"\uadf8\ub7f0\ub370 \ub2e4\ub978 origin\uc73c\ub85c\ubd80\ud130 \ub9ac\uc18c\uc2a4\ub97c \uc694\uccad\ud574\uc57c\ud558\ub294 \uacbd\uc6b0\ub294 \ubc18\ub4dc\uc2dc \uc0dd\uae30\uae30 \ub54c\ubb38\uc5d0 \ud56d\uc0c1 SOP\ub97c \uc9c0\ud0a4\uba74\uc11c \ub370\uc774\ud130\ub97c \uad50\ud658\ud558\ub294 \uac83\uc740 \uc0ac\uc2e4\uc0c1 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ud480\uc2a4\ud0dd\uc73c\ub85c \uc6f9 \uac1c\ubc1c\uc744 \ud558\ub294 \ub2e8\uacc4\uc5d0\uc11c \ubc14\ub85c CORS error\ub97c \ub9c8\uc8fc\ud558\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc608\ub97c\ub4e4\uc5b4 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c 3000\ubc88 \ud3ec\ud2b8\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294\ub370, \ubc31\uc5d4\ub4dc \uc11c\ubc84\ub97c \ub9cc\ub4e4\uba74 3000\ubc88\uc774 \uc544\ub2cc \ub2e4\ub978 \ud3ec\ud2b8\ub97c \uc774\uc6a9\ud574\uc57c\ud558\ubbc0\ub85c \uc774 \ub458\uc758 origin\uc740 \ub2ec\ub77c\uc838 \ubc84\ub9bd\ub2c8\ub2e4.   "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"origin\uc774 \ub2e4\ub974\ub2e4 = Protocol, host(domain), port \uc911\uc5d0\uc11c \ud558\ub098\ub77c\ub3c4 \ub2e4\ub974\uba74 origin\uc774 \ub2e4\ub978 \uac83\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4.")),(0,o.kt)("p",null,"\uadf8\ub798\uc11c \uc11c\ub85c \ub2e4\ub978 origin\uac04\uc5d0\ub3c4 \ub9ac\uc18c\uc2a4 \uad50\ud658\uc774 \uac00\ub2a5\ud558\ub3c4\ub85d SOP\uc758 \uc608\uc678 \uc870\ud56d\uc778 CORS \uc870\ud56d\uc774 \ub9cc\ub4e4\uc5b4\uc9d1\ub2c8\ub2e4.   "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Generally, reading information from another origin is forbidden.\nHowever, an origin is permitted to use some kinds of resources retrieved from other origins.\nFor example, an origin is permitted to execute script, render images, and apply style sheets from any origin.\nLikewise, an origin can display content from another origin, such as an HTML document in an HTML frame.\nNetwork resources can also opt into letting other origins read their information, for example, using Cross-Origin Resource Sharing.\nRFC 6454 - 3.4.2 Network Access")),(0,o.kt)("h2",{id:"cors-1"},"CORS"),(0,o.kt)("p",null,"Cors \ub294 Cross Origin Resource Sharing\uc758 \uc57d\uc790\ub85c\uc11c, \uc11c\ub85c \ub2e4\ub978 origin \uc0ac\uc774\uc5d0\ub3c4 \ub9ac\uc18c\uc2a4\uc5d0 \uc811\uadfc\ud558\uace0 \uad50\ud658\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc8fc\ub294 \uccb4\uc81c\uc785\ub2c8\ub2e4.   "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ubcf4\ud1b5 Cross-origin embedding\uc740 \ud5c8\uc6a9\ub429\ub2c8\ub2e4.(",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy"},"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy"),")")),(0,o.kt)("p",null,'\uc774\ub807\uac8c Embading\uc740 \ube44\uad50\uc801 \uc790\uc720\ub86d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc9c0\ub9cc, \uc911\uc694\ud558\uac8c \ubd10\uc57c\ud560 \uac83\uc740 "cross-origin Ajax requests(or http request)" \uc785\ub2c8\ub2e4.',(0,o.kt)("br",{parentName:"p"}),"\n","\ubcf4\uc548 \ub54c\ubb38\uc5d0 \ub514\ud3f4\ud2b8\ub85c origin\uc774 \ub2e4\ub974\ub2e4\uba74 \ube44\ub3d9\uae30 \uc694\uccad\uc740 \uc81c\ud55c\ub429\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ud558\uc9c0\ub9cc \uc11c\ub85c \ub2e4\ub978 origin\uc744 \uac00\uc9c0\uace0 \uc788\ub354\ub77c\ub3c4 \uc11c\ubc84\uac00 \uc62c\ubc14\ub978 CORS header\ub97c \ud3ec\ud568\ud558\uace0 \uc788\ub294 \uacbd\uc6b0\uc5d0 \ud55c\uc815\ud574\uc11c \ub2e4\ub978 origin\uc744 \uac00\uc9c4 \ub9ac\uc18c\uc2a4\ub97c \uad50\ud658\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4.     "),(0,o.kt)("p",null,"\uc5ec\uae30\uae4c\uc9c0 \ub530\ub77c\uc654\ub2e4\uba74 \uc55e\uc758 CORS error\uc758 \ub0b4\uc6a9\uc744 \uc774\ud574\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4.\n\uc55e\uc758 CORS error\ub97c \ub2e4\uc2dc \uc0b4\ud3b4\ubcf4\uba74 http://localhost:3000 \ub77c\ub294 origin\uc5d0\uc11c \uc774\uc640 \ub2e4\ub978 origin\uc744 \uac00\uc9c4 \uc11c\ubc84\uc5d0 \uc694\uccad\uc744 \ud588\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uadf8 \ubc11\uc758 \uac83 \uc5ed\uc2dc \ub9c8\ucc2c\uac00\uc9c0\uc785\ub2c8\ub2e4. https://localhost:3001 \ub77c\ub294 origin\uc5d0\uc11c \uc774\uc640 \ub2e4\ub978 origin\uc744 \uac00\uc9c4 \uc11c\ubc84\uc5d0 \uc694\uccad\uc744 \ud588\uc2b5\ub2c8\ub2e4.   "),(0,o.kt)("p",null,"CORS \uc815\ucc45\uc73c\ub85c \uc778\ud574\uc11c \uc11c\ub85c \ub2e4\ub978 origin\uac04 \ub9ac\uc18c\uc2a4\ub97c \uad50\ud658\ud560 \uc218 \uc788\uae34\ud558\uc9c0\ub9cc, CORS Error\uac00 \ubc1c\uc0dd\ud55c \uc774\uc720\ub294 CORS \uc870\ud56d\uc758 \uc5b4\ub5a4 \uac83\uc744 \uc704\ubc18\ud588\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc5b4\ub5a4 \uac83\uc744 \uc704\ubc18\ud55c \uac83\uc77c\uae4c\uc694?"),(0,o.kt)("p",null,"CORS error\uc758 \ub0b4\uc6a9\uc744 \ubcf4\uba74 NO 'Access-Control-Allow-Origin' header is present on the requested resourse\ub77c\ub294 \ubb38\uad6c\uac00 \uc788\uc2b5\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc774\uac83\uc744 \ud574\uc11d\ud574\ubcf4\uba74 requested resourse, \uc989 \uc694\uccad\ub41c \ub9ac\uc18c\uc2a4(\uc11c\ubc84 \uce21)\uc5d0 'Access-Control-Allow-Origin'\uc774\ub77c\ub294 header\uac00 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc558\ub2e4\uace0 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.   "),(0,o.kt)("p",null,"\uc989 \uc774 \uc5d0\ub7ec\uba54\uc138\uc9c0\ub294 \"\uc11c\ubc84\uac00 \uc62c\ubc14\ub978 CORS header('Access-Control-Allow-Origin')\ub97c \ud45c\uc2dc\ud558\uace0 \uc788\uc9c0 \uc54a\uc73c\ub2c8 CORS\ub97c \ud558\ub824\uba74 \uc11c\ubc84 \uce21\uc5d0 \uc62c\ubc14\ub978 header\ub97c \ud45c\uc2dc\ud574!\"\ub77c\uace0 \ub9d0\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.    "),(0,o.kt)("p",null,"\uc815\ub9ac\ud558\uc790\uba74 CORS error\ub294 \uc11c\ubc84\uac00 \uc62c\ubc14\ub978 CORS header\ub97c \ud3ec\ud568\ud558\uace0 \uc788\ub294 \uacbd\uc6b0\uc5d0 \ud55c\uc815\ud574\uc11c \uc11c\ub85c \ub2e4\ub978 origin\ub07c\ub9ac \ub9ac\uc18c\uc2a4\ub97c \uad50\ud658\ud560 \uc218 \uc788\ub294\ub370,",(0,o.kt)("br",{parentName:"p"}),"\n","\uc11c\ubc84 \uce21\uc5d0 \uc62c\ubc14\ub978 CORS header\ub97c \ud3ec\ud568\ud558\uc9c0 \uc54a\uc558\uae30 \ub54c\ubb38\uc5d0 \ubc1c\uc0dd\ud55c \uac83\uc785\ub2c8\ub2e4.   "),(0,o.kt)("p",null,"CORS\uc640 \uad00\ub828\ud574\uc11c \ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc9da\uace0 \ub118\uc5b4\uac00\uace0 \uc2f6\uc740 \uc810\uc774 \uc788\ub294\ub370, \ubc14\ub85c Cors Error\uac00 \ub9c8\uce58 \uc11c\ubc84 \uce21\uc5d0\uc11c \ubcf4\ub0b8 \uc5d0\ub7ec\uac19\uc9c0\ub9cc \uc0ac\uc2e4 \uc774\uac83\uc740 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uc5d0\ub7ec\ub77c\ub294 \uac83\uc785\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c XMLHttpRequest \ub610\ub294 Fetch\ub97c \ud1b5\ud574 \uc694\uccad\uc774 \uc774\ub8e8\uc5b4\uc84c\ub2e4\uace0 \uac00\uc815\ud574\ubd05\uc2dc\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ube0c\ub77c\uc6b0\uc800\ub294 \ud574\ub2f9 http\uc694\uccad\uc774 CORS \uc815\ucc45\uc758 \uac80\uc99d\uc744 \ud574\uc57c\ud558\ub294\uc9c0 \ud310\ub2e8\ud569\ub2c8\ub2e4. \ub9cc\uc57d \uc548\uc804\ud558\uc9c0 \uc54a\uc740 cross-origin request\ub77c\uace0 \ud310\ub2e8\ud55c \uacbd\uc6b0, CORS\uac80\uc99d\uc744 \ud558\ub3c4\ub85d \uc11c\ubc84\uc5d0 \uc694\uccad\uc744 \ud558\uac8c \ub429\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","(\uc774 \uc694\uccad\uc744 Preflight Request\uc774\ub77c\uace0 \ud558\ub294\ub370 \uc870\uae08 \ub4a4\uc5d0 \uc790\uc138\ud558\uac8c \ub098\uc635\ub2c8\ub2e4.)\n\ube0c\ub77c\uc6b0\uc800\ub294 \uc11c\ubc84\uc5d0\uac8c\uc11c \ubc1b\uc740 \uc751\ub2f5\uc744 \uc0b4\ud53c\uace0 CORS\uac80\uc99d\uc5d0 \uc2e4\ud328\ud588\ub2e4\uba74 CORS error\ub97c \ubc1c\uc0dd\uc2dc\ud0b5\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc989 \ube0c\ub77c\uc6b0\uc800\uac00 response object\uac00 \uc801\uc808\ud55c header\ub97c \uac00\uc9c0\uace0 \uc788\ub294\uc9c0 \uc0b4\ud53c\uace0, \uadf8\ub807\uc9c0 \uc54a\ub2e4\uba74 \uc11c\ubc84\ub85c\ubd80\ud130\uc758 \uc751\ub2f5\uc744 block \ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"cors-error-\ud574\uacb0-\ubc29\ubc95"},"CORS ERROR \ud574\uacb0 \ubc29\ubc95"),(0,o.kt)("h4",{id:"\uc11c\ubc84\uc5d0\uc11c-access-control-allow-origin\uc744-header\ub85c-\ub118\uaca8\uc8fc\uae30"},"\uc11c\ubc84\uc5d0\uc11c Access-Control-Allow-Origin\uc744 header\ub85c \ub118\uaca8\uc8fc\uae30"),(0,o.kt)("p",null,"\uc55e\uc11c \uc11c\ubc84\uac00 \uc62c\ubc14\ub978 CORS header\ub97c \ud3ec\ud568\ud558\uace0 \uc788\ub294 \uacbd\uc6b0\uc5d0 cors\uac00 \uac00\ub2a5\ud558\ub2e4\uace0 \ud588\uc73c\ubbc0\ub85c, \uc11c\ubc84\uc5d0\uc11c \ud574\ub2f9 header\ub97c \ub118\uaca8\uc8fc\uba74 \ub429\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc5b4\ub5a4 \ud658\uacbd\uc5d0\uc11c \uc11c\ubc84\ub97c \ub9cc\ub4e4\uc5c8\ub290\ub0d0\uc5d0 \ub530\ub77c \uc870\uae08\uc529 \ub2e4\ub974\uaca0\uc9c0\ub9cc, Express\ub97c \uc0ac\uc6a9\ud574 \uc11c\ubc84\ub97c \ub9cc\ub4e0 \uacbd\uc6b0 \uc5b4\ub5bb\uac8c \ud574\uacb0\ud558\ub294\uc9c0 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","Node.js\uc5d0\uc11c Express\ub97c \uc774\uc6a9\ud574 \uc11c\ubc84\ub97c \ub9cc\ub4e0 \uacbd\uc6b0 cors library\ub97c \uc0ac\uc6a9\ud574\uc11c header\ub97c \ub118\uaca8\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4.   "),(0,o.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 http://localhost:3000 \uc5d0\uc11c \ub2e4\ub978 origin\uc758 \uc11c\ubc84\ub85c \uc694\uccad\ud558\ub294 \uacbd\uc6b0, \ub2e4\uc74c\uacfc \uac19\uc774 \uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"//Server\nconst express = require('express');\nconst app = express();\nconst cors = require('cors');\n\napp.use(cors({ origin: 'http://127.0.0.1:3000' }));\n\napp.listen(5000);\n")),(0,o.kt)("p",null,"\uc774\ub807\uac8c \uc500\uc73c\ub85c \uc778\ud574\uc11c \uc11c\ubc84\uc5d0\uc11c \uc751\ub2f5\ud560 \ub54c ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:3000"),"\ub97c \uac12\uc73c\ub85c \uac00\uc9c4 ",(0,o.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," header\ub97c \uc804\uc1a1\ud558\ub3c4\ub85d \uc9c0\uc2dc\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ub9cc\uc57d \ubaa8\ub4e0 url\uc5d0 \ub300\ud574\uc11c \ud5c8\uc6a9\ud558\uace0 \uc2f6\uc73c\uba74 \ud2b9\uc815 url \ub300\uc2e0\uc5d0 * \ub97c \ub123\uc5b4\uc8fc\uba74 \ub429\ub2c8\ub2e4."),(0,o.kt)("h4",{id:"cors-preflight"},"CORS Preflight"),(0,o.kt)("p",null,"\ub9cc\uc57d \uc548\uc804\ud558\uc9c0 \uc54a\uc740 cross-origin request\uac00 \uc774\ub8e8\uc5b4\uc9c0\ub294 \uacbd\uc6b0 \ube0c\ub77c\uc6b0\uc800\ub294 \uc11c\ubc84\uc5d0\uac8c\xa0preflight request(\uc0ac\uc804 \uc694\uccad)\uc774\ub77c\ub294 \uac83\uc744 \ubcf4\ub0c5\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc0ac\uc804 \uc694\uccad\uc740 \ub9d0 \uadf8\ub798\ub3c4 \ubcf8 \uc694\uccad\uc744 \ubcf4\ub0b4\uae30 \uc804\uc5d0 \ubcf4\ub0b4\ub294 \uc608\ube44 \uc694\uccad\uc785\ub2c8\ub2e4.   "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\uc548\uc804\ud55c cross-origin request\nmethod: GET, POST, HEAD\nHeader: Accept, Accept-Language, Content-Language\n\uac12\uc774 application/x-www-form-urlencoded\ub098 multipart/form-data, text/plain\uc778 Content-Type\n(\ucd9c\ucc98: ",(0,o.kt)("a",{parentName:"p",href:"https://ko.javascript.info/fetch-crossorigin"},"https://ko.javascript.info/fetch-crossorigin"),")")),(0,o.kt)("p",null,"\ub9cc\uc57d\uc5d0 \uc2a4\ud06c\ub9bd\ud2b8\uc5d0 PUT\uc694\uccad\uc774 \uc788\ub2e4\uace0 \uac00\uc815\ud574\ubd05\uc2dc\ub2e4. \uc774\ub54c\ub294 \uc548\uc804\ud558\uc9c0 \uc54a\uc740 cross-origin request\uc774\ubbc0\ub85c \ube0c\ub77c\uc6b0\uc800\ub294 \uc11c\ubc84\uc5d0 \uc0ac\uc804 \uc694\uccad\uc744 \ubcf4\ub0b4\uac8c \ub429\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ube0c\ub77c\uc6b0\uc800\uac00 \uc0ac\uc804 \uc694\uccad\uc744 \ubcf4\ub0bc \ub54c, header\uc5d0 Access-Control-Request \ubc0f Access-Control-Request \uc815\ubcf4\uac00 \ub2f4\uae41\ub2c8\ub2e4.   "),(0,o.kt)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 PUT \uba54\uc18c\ub4dc\ub85c \uc694\uccad\uc744 \ud558\uace0 \uc2f6\uace0, Special-Request-Header\ub77c\ub294 custom request header\ub97c \uc0ac\uc6a9\ud574\uc11c \uc11c\ubc84\uc5d0 \uc694\uccad\uc744 \ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0\uc5d0 \uc0ac\uc804 \uc694\uccad\uc740 \ub2e4\uc74c\uacfc \uac19\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Origin: https://....\nAccess-Control-Request-Method: PUT\nAccess-Control-Request-Headers: Special-Request-Header\n")),(0,o.kt)("p",null,"\uadf8\ub9ac\uace0 \uc11c\ubc84\ub294 \uc0ac\uc804 \uc694\uccad\uc5d0 \ub300\ud574\uc11c Access-Control-Allow-Methods, Access-Control-Allow-Headers\ub97c \ub2f4\uc740 \uc751\ub2f5\uc744 \ubcf4\ub0b4\uc904 \uac83\uc785\ub2c8\ub2e4.   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Access-Control-Allow-Origin: https://...(client url)\nAccess-Control-Allow-Methods: GET, PUT,\xa0POST, DELETE\nAccess-Control-Allow-Headers: Special-Request-Header\nAccess-Control-Allow-Credentials: true\nAccess-Control-Max-Age: 240\n")),(0,o.kt)("p",null,"\uc774\ub807\uac8c \uc751\ub2f5\uc774 \uc654\ub2e4\uba74, \uc774\uac83\uc740 GET, PUT,\xa0POST, DELETE \uba54\uc18c\ub4dc \uadf8\ub9ac\uace0 request header\uac00 Special-Request-Header\uc778 \uacbd\uc6b0 CORS\ub97c \ud5c8\uc6a9\ud558\uaca0\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc989 \ube0c\ub77c\uc6b0\uc800\ub294 \uc0ac\uc804 \uc694\uccad\uc744 \ud1b5\ud574 CORS protocol\uc774 cross-origin request\ub97c \ud5c8\uc6a9\ud558\uae30 \uc804, \uc5b4\ub5a0\ud55c methods\uc640 headers\uac00 \ud5c8\uc6a9\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\uc744 \ud558\uac8c \ub429\ub2c8\ub2e4.   "),(0,o.kt)("p",null,"\ub9cc\uc57d \uc774\ub584 Access-Control-Allow-Methods\uc5d0 PUT\uc774 \ud3ec\ud568\ub418\uc5b4\uc788\uc9c0 \uc54a\ub2e4\uba74 CORS Error\uac00 \ubc1c\uc0dd\ud560 \uac83\uc774\uace0, \uc774\ub7f0 \uacbd\uc6b0\uc5d0\ub294 \uc11c\ubc84\uc5d0\ub2e4\uac00 PUT\uc694\uccad\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \ud5c8\ub77d\ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"//Server\nconst express = require('express');\nconst app = express();\nconst cors = require('cors');\n\napp.use(cors({\n  origin: 'http://127.0.0.1:3000',\n  methods: ['GET', 'POST', 'PUT', 'DELETE'],\n  allowedHeaders: ['Content-Type']\n}));\n\napp.listen(5000);\n")),(0,o.kt)("p",null,"allowedHeaders\ub97c \uc124\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 \uc790\ub3d9\uc801\uc73c\ub85c Access-Control-Request-Headers\uc5d0 \uc788\ub294 \uac12\uc73c\ub85c \uc124\uc815\ub420 \uac83\uc774\uae30 \ub584\ubb38\uc5d0, \ubcf4\ud1b5 \ub530\ub85c \uc124\uc815\ud574\uc8fc\uc9c0 \uc54a\ub294\ub2e4\uace0 \ud569\ub2c8\ub2e4.   "),(0,o.kt)("p",null,"\uc9c0\uae08\uae4c\uc9c0 \uc0b4\ud3b4\ubcf8 \ub0b4\uc6a9\uc758 \uc804\uccb4\uc801\uc778 Flow\ub97c \uc0b4\ud3b4\ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.   "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53216594/120102007-f5952180-c183-11eb-9532-7cc155e691d9.png",alt:"330px-Flowchart_showing_Simple_and_Preflight_XHR svg"}),(0,o.kt)("br",{parentName:"p"}),"\n","(\uc774\ubbf8\uc9c0 \ucd9c\ucc98: ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"},"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"),")"),(0,o.kt)("h4",{id:"credentials"},"Credentials"),(0,o.kt)("p",null,"Credentials\ub294 CORS\uc640 \ucfe0\ud0a4\uc5d0 \uad00\ub828\ub41c \ub0b4\uc6a9\uc744 \ub2f4\uace0 \uc788\uc2b5\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uae30\ubcf8\uc801\uc73c\ub85c CORS\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uac00 \uc694\uccad\ud558\uc9c0 \uc54a\ub294 \ud55c \ucfe0\ud0a4\ub97c \uc694\uccad\uacfc \ud568\uaed8 \ubcf4\ub0b4\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ucfe0\ud0a4\ub97c \ubcf4\ub0bc \uc218 \uc788\ub3c4\ub85d \ud558\ub824\uba74 \uba3c\uc800 \uc694\uccad\uc744 \ud560 \ub54c, \uc608\ub97c \ub4e4\uc5b4 fetch\ub97c \ud558\ub294 \uacbd\uc6b0 fetch request\uc5d0 credentials option\uc744 \ud3ec\ud568\uc2dc\ucf1c\uc11c \ud574\ub2f9 \ucfe0\ud0a4\uac00 \uc548\uc804\ud558\ub2e4\ub294 \uac83\uc744 \uc694\uccad\uc5d0 \uc54c\ub824\uc57c\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"fetch(url, { credentials: 'include' });\n")),(0,o.kt)("p",null,"\uadf8\ub9ac\uace0 \uc11c\ubc84\uc5d0\uc11c\ub294 Access-Control-Allow-Credentials\ub97c true\ub85c \ud574\uc90c\uc73c\ub85c\uc11c \ucfe0\ud0a4\ub97c \uc2e0\uc784(?)\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc774 \uc5ed\uc2dc CORS library\ub97c \ud1b5\ud574\uc11c \uc27d\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"//Server\nconst express = require('express');\nconst app = express();\nconst cors = require('cors');\n\napp.use(cors({\n  origin: 'http://127.0.0.1:3000',\n  methods: ['GET', 'POST', 'PUT', 'DELETE'],\n  allowedHeaders: ['Content-Type'],\n  credentials: true\n}));\n\napp.listen(5000);\n")),(0,o.kt)("p",null,"(reference: ",(0,o.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/cors/access-control-allow-origin"},"https://portswigger.net/web-security/cors/access-control-allow-origin"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://blog.webdevsimplified.com/2021-05/cors/"},"https://blog.webdevsimplified.com/2021-05/cors/"),")"))}u.isMDXComponent=!0}}]);