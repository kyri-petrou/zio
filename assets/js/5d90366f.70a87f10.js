"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[37360],{15680:(e,t,o)=>{o.d(t,{xA:()=>c,yg:()=>y});var n=o(96540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),g=r,y=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return o?n.createElement(y,i(i({ref:t},c),{},{components:o})):n.createElement(y,i({ref:t},c))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},96350:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(58168),r=(o(96540),o(15680));const a={id:"index",title:"Introduction to ZIO Flow",sidebar_label:"ZIO Flow"},i=void 0,l={unversionedId:"zio-flow/index",id:"zio-flow/index",title:"Introduction to ZIO Flow",description:"ZIO Flow is an engine for executing persistent, distributed, fault-tolerant applications, providing an easy and powerful way to build stateful serverless applications.",source:"@site/docs/zio-flow/index.md",sourceDirName:"zio-flow",slug:"/zio-flow/",permalink:"/zio-flow/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-flow/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Flow",sidebar_label:"ZIO Flow"},sidebar:"ecosystem-sidebar",previous:{title:"Environment",permalink:"/zio-ftp/environment"},next:{title:"Defining flows",permalink:"/zio-flow/zflow"}},s={},p=[{value:"Getting started",id:"getting-started",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.yg)(d,(0,n.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"ZIO Flow is an engine for executing persistent, distributed, fault-tolerant applications, providing an easy and powerful way to build stateful serverless applications."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Development-green.svg",alt:"Development"}))," ",(0,r.yg)("img",{parentName:"p",src:"https://github.com/zio/zio-flow/workflows/CI/badge.svg",alt:"CI Badge"})," ",(0,r.yg)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-flow_2.13/"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-flow_2.13.svg?label=Sonatype%20Release",alt:"Sonatype Releases"}))," ",(0,r.yg)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-flow_2.13/"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-flow_2.13.svg?label=Sonatype%20Snapshot",alt:"Sonatype Snapshots"}))," ",(0,r.yg)("a",{parentName:"p",href:"https://javadoc.io/doc/dev.zio/zio-flow-docs_2.13"},(0,r.yg)("img",{parentName:"a",src:"https://javadoc.io/badge2/dev.zio/zio-flow-docs_2.13/javadoc.svg",alt:"javadoc"}))," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-flow"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/zio-flow?style=social",alt:"ZIO Flow"}))),(0,r.yg)("p",null,"ZIO Flow helps you orchestrate complex business logic, without having to worry about fallible systems, transient failures, manual rollbacks, or other infrastructure."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Type-safe, compositional front-end"),(0,r.yg)("li",{parentName:"ul"},"Resilient interactions with databases, web services, and microservices"),(0,r.yg)("li",{parentName:"ul"},"Persistent workflows that survive restarts"),(0,r.yg)("li",{parentName:"ul"},"Transactional guarantees via a persistent saga pattern")),(0,r.yg)("h2",{id:"getting-started"},"Getting started"),(0,r.yg)("p",null,"For defining ZIO Flow programs, you need to add the following dependency to your ",(0,r.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-flow" % "1.0.0-RC4"\n')),(0,r.yg)("p",null,"This module is available for Scala.js as well."),(0,r.yg)("p",null,"To learn more about defining ZIO Flow programs, see ",(0,r.yg)("a",{parentName:"p",href:"zflow"},"Defining flows"),". "),(0,r.yg)("p",null,"There are a couple of ",(0,r.yg)("em",{parentName:"p"},"activity libraries")," providing integration with 3rd party services. These libraries are available as separate modules,\nand they only have to be present on the definition side of your flows. The executor does not need to have these libraries on the classpath."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-flow-twilio" % "1.0.0-RC4"\nlibraryDependencies += "dev.zio" %% "zio-flow-sendgrid" % "1.0.0-RC4"\n')),(0,r.yg)("p",null,"There are many ways to execute ZIO Flow programs. The easiest way is to use a compiled version of the built-in ",(0,r.yg)("em",{parentName:"p"},"ZIO Flow Server"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"sbt zioFlowServer/run\n")),(0,r.yg)("p",null,"We will provide ready to use Docker images as well in the future."),(0,r.yg)("p",null,"To embed the ZIO Flow executor in your own application, you need to add the following dependency:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-flow-runtime" % "1.0.0-RC4"\n')),(0,r.yg)("p",null,"For more information about the executors, see ",(0,r.yg)("a",{parentName:"p",href:"execution"},"Execution"),".\nYou will also need to choose a ",(0,r.yg)("a",{parentName:"p",href:"backends"},"persistent backend implementation"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-flow-rocksdb" % "1.0.0-RC4"\nlibraryDependencies += "dev.zio" %% "zio-flow-dynamodb" % "1.0.0-RC4"\nlibraryDependencies += "dev.zio" %% "zio-flow-cassandra" % "1.0.0-RC4"\n')))}u.isMDXComponent=!0}}]);