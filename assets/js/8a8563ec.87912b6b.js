"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[79910],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>g});var n=r(96540);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=s,g=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(58168),s=(r(96540),r(15680));const a={id:"sized",title:"Changing the Size of Sized Generators"},i=void 0,o={unversionedId:"reference/test/aspects/sized",id:"reference/test/aspects/sized",title:"Changing the Size of Sized Generators",description:"To change the default size used by sized generators we can use size test aspect:",source:"@site/docs/reference/test/aspects/sized.md",sourceDirName:"reference/test/aspects",slug:"/reference/test/aspects/sized",permalink:"/reference/test/aspects/sized",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/aspects/sized.md",tags:[],version:"current",frontMatter:{id:"sized",title:"Changing the Size of Sized Generators"},sidebar:"reference-sidebar",previous:{title:"Restoring State of Test Services",permalink:"/reference/test/aspects/restoring-state-of-test-services"},next:{title:"Annotating Tests",permalink:"/reference/test/aspects/annotating-tests"}},c={},p=[],l={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,s.yg)(u,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"To change the default ",(0,s.yg)("em",{parentName:"p"},"size")," used by ",(0,s.yg)("a",{parentName:"p",href:"/reference/test/property-testing/built-in-generators#sized-generators"},"sized generators")," we can use ",(0,s.yg)("inlineCode",{parentName:"p"},"size")," test aspect:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\n\ntest("generating small list of characters") {\n  check(Gen.small(Gen.listOfN(_)(Gen.alphaNumericChar))) { n =>\n    ZIO.attempt(n).debug *> Sized.size.map(s => assertTrue(s == 50))\n  }\n} @@ TestAspect.size(50) @@ TestAspect.samples(5)\n')),(0,s.yg)("p",null,"Sample output:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"List(p, M)\nList()\nList(0, m, 5)\nList(Y)\nList(O, b, B, V)\n+ generating small list of characters\nRan 1 test in 676 ms: 1 succeeded, 0 ignored, 0 failed\n")))}f.isMDXComponent=!0}}]);