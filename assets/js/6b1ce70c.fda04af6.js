"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[40952],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||y[f]||i;return t?n.createElement(m,c(c({ref:r},u),{},{components:t})):n.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=f;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[p]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},86086:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(58168),a=(t(96540),t(15680));const i={id:"frequency",title:"Frequency"},c=void 0,o={unversionedId:"reference/observability/metrics/frequency",id:"reference/observability/metrics/frequency",title:"Frequency",description:"A Frequency represents the number of occurrences of specified values. We can think of a Frequency as a set of counters associated with each value except that new counters will automatically be created when new values are observed.",source:"@site/docs/reference/observability/metrics/frequency.md",sourceDirName:"reference/observability/metrics",slug:"/reference/observability/metrics/frequency",permalink:"/reference/observability/metrics/frequency",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/observability/metrics/frequency.md",tags:[],version:"current",frontMatter:{id:"frequency",title:"Frequency"},sidebar:"reference-sidebar",previous:{title:"Summary",permalink:"/reference/observability/metrics/summary"},next:{title:"MetricLabel",permalink:"/reference/observability/metrics/metriclabel"}},s={},l=[{value:"API",id:"api",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Examples",id:"examples",level:2}],u={toc:l},p="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"A ",(0,a.yg)("inlineCode",{parentName:"p"},"Frequency")," represents the number of occurrences of specified values. We can think of a ",(0,a.yg)("inlineCode",{parentName:"p"},"Frequency")," as a set of counters associated with each value except that new counters will automatically be created when new values are observed."),(0,a.yg)("p",null,"Essentially, a ",(0,a.yg)("inlineCode",{parentName:"p"},"Frequency")," is a set of related counters sharing the same name and tags. The counters are set apart from each other by an additional configurable tag. The values of the tag represent the observed distinct values."),(0,a.yg)("h2",{id:"api"},"API"),(0,a.yg)("p",null,"object Metric {\ndef frequency(name: String): Frequency","[String]"," = ???\n}"),(0,a.yg)("h2",{id:"use-cases"},"Use Cases"),(0,a.yg)("p",null,"Sets are used to count the occurrences of distinct string values:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Tracking number of invocations for each service, for an application that uses logical names for its services."),(0,a.yg)("li",{parentName:"ul"},"Tracking frequency of different types of failures.")),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("p",null,"Create a ",(0,a.yg)("inlineCode",{parentName:"p"},"Frequency")," to observe the occurrences of unique ",(0,a.yg)("inlineCode",{parentName:"p"},"Strings"),". It can be applied to effects yielding a ",(0,a.yg)("inlineCode",{parentName:"p"},"String"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.metrics._\n\nval freq = Metric.frequency("MySet")\n')),(0,a.yg)("p",null,"Now we can generate some keys within an effect and start counting the occurrences for each value:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\n(Random.nextIntBounded(10).map(v => s"MyKey-$v") @@ freq).repeatN(100)\n')))}y.isMDXComponent=!0}}]);