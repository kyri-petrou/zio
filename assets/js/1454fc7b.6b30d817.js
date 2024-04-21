"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[49693],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>u});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=n.createContext({}),m=function(e){var a=n.useContext(g),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=m(e.components);return n.createElement(g.Provider,{value:a},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(t),y=r,u=d["".concat(g,".").concat(y)]||d[y]||s[y]||l;return t?n.createElement(u,o(o({ref:a},p),{},{components:t})):n.createElement(u,o({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=y;var i={};for(var g in a)hasOwnProperty.call(a,g)&&(i[g]=a[g]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},23184:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=t(58168),r=(t(96540),t(15680));const l={id:"formatting-log-records",title:"Formatting Log Records"},o=void 0,i={unversionedId:"zio-logging/formatting-log-records",id:"zio-logging/formatting-log-records",title:"Formatting Log Records",description:"A LogFormat represents a DSL to describe the format of text log messages.",source:"@site/docs/zio-logging/formatting-log-records.md",sourceDirName:"zio-logging",slug:"/zio-logging/formatting-log-records",permalink:"/zio-logging/formatting-log-records",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-logging/formatting-log-records.md",tags:[],version:"current",frontMatter:{id:"formatting-log-records",title:"Formatting Log Records"},sidebar:"ecosystem-sidebar",previous:{title:"Introduction",permalink:"/zio-logging/"},next:{title:"Logger Context and Annotations",permalink:"/zio-logging/logger-context-and-annotations"}},g={},m=[{value:"Log Format Configuration",id:"log-format-configuration",level:2},{value:"LogFormat and LogAppender",id:"logformat-and-logappender",level:2}],p={toc:m},d="wrapper";function s(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"A ",(0,r.yg)("inlineCode",{parentName:"p"},"LogFormat")," represents a DSL to describe the format of text log messages."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.logging.console\nimport zio.logging.LogFormat._\n\nval myLogFormat = timestamp.fixed(32) |-| level |-| label("message", quoted(line))\nval myConsoleLogger = console(myLogFormat)\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"LogFormat.filter")," returns a new log format that produces the same result, if ",(0,r.yg)("inlineCode",{parentName:"p"},"LogFilter")," is satisfied."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.logging.LogFormat\nimport zio.logging.LogFilter\n\nLogFormat.label("cause", LogFormat.cause).filter(LogFilter.causeNonEmpty)\n')),(0,r.yg)("h2",{id:"log-format-configuration"},"Log Format Configuration"),(0,r.yg)("p",null,"String representation of LogFormat:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"format"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%timestamp{date-format}",(0,r.yg)("br",null),"%timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"Timestamp, where date format is ",(0,r.yg)("inlineCode",{parentName:"td"},"java.time.format.DateTimeFormatter"),",",(0,r.yg)("br",null),"example: ",(0,r.yg)("inlineCode",{parentName:"td"},"%timestamp{yyyy-MM-dd'T'HH:mm:ssZ}"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%fiberId"),(0,r.yg)("td",{parentName:"tr",align:null},"Fiber Id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%fixed{size}{format}"),(0,r.yg)("td",{parentName:"tr",align:null},"Fixed size for format,",(0,r.yg)("br",null),"example: ",(0,r.yg)("inlineCode",{parentName:"td"},"%fixed{7}{%level}"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%label{name}{format}"),(0,r.yg)("td",{parentName:"tr",align:null},"Labeled format,",(0,r.yg)("br",null),"example: ",(0,r.yg)("inlineCode",{parentName:"td"},"%label{abcSpan}{%span{abc}}"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%color{LogColor}{format}"),(0,r.yg)("td",{parentName:"tr",align:null},"Colored format, log color values: ",(0,r.yg)("inlineCode",{parentName:"td"},"RED"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"BLUE"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"YELLOW"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"CYAN"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"GREEN"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"MAGENTA"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"WHITE"),", ",(0,r.yg)("br",null),"example: ",(0,r.yg)("inlineCode",{parentName:"td"},"%color{CYAN}{%timestamp}"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%level"),(0,r.yg)("td",{parentName:"tr",align:null},"Log level")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%name"),(0,r.yg)("td",{parentName:"tr",align:null},"Logger name (from logger name annotation or Trace)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%line"),(0,r.yg)("td",{parentName:"tr",align:null},"Log/trace line (from Trace)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%message"),(0,r.yg)("td",{parentName:"tr",align:null},"Log message")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%cause"),(0,r.yg)("td",{parentName:"tr",align:null},"Cause")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%kvs"),(0,r.yg)("td",{parentName:"tr",align:null},"Key-values - all annotations")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%kv{key}"),(0,r.yg)("td",{parentName:"tr",align:null},"Key-value - annotation with given key")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%spans"),(0,r.yg)("td",{parentName:"tr",align:null},"All log spans")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%span{span}"),(0,r.yg)("td",{parentName:"tr",align:null},"Log spans with key")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%highlight{format}"),(0,r.yg)("td",{parentName:"tr",align:null},"Highlight given format with colors based on log Level")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%%"),(0,r.yg)("td",{parentName:"tr",align:null},"% character")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%{"),(0,r.yg)("td",{parentName:"tr",align:null},"{ character")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"%}"),(0,r.yg)("td",{parentName:"tr",align:null},"} character")))),(0,r.yg)("p",null,"examples:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"%timestamp %level [%fiberId] %name:%line %message %cause\n\n%highlight{%timestamp{yyyy-MM-dd'T'HH:mm:ssZ} %fixed{7}{%level} [%fiberId] %name:%line %message %cause}\n\n%label{timestamp}{%fixed{32}{%timestamp}} %label{level}{%level} %label{thread}{%fiberId} %label{message}{%message} %label{cause}{%cause}\n")),(0,r.yg)("h2",{id:"logformat-and-logappender"},"LogFormat and LogAppender"),(0,r.yg)("p",null,"A ",(0,r.yg)("inlineCode",{parentName:"p"},"LogFormat")," represents a DSL to describe the format of text log messages."),(0,r.yg)("p",null,"A ",(0,r.yg)("inlineCode",{parentName:"p"},"LogAppender")," is a low-level interface designed to be the bridge between, ZIO Logging and logging backends, such as\nLogback.\nThis interface is slightly higher-level than a string builder, because it allows for structured logging,\nand preserves all ZIO-specific information about runtime failures."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"LogFormat")," may be created by following function:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object LogFormat {\n  def make(format: (LogAppender, Trace, FiberId, LogLevel, () => String, Cause[Any], FiberRefs, List[LogSpan], Map[String, String]) => Any): LogFormat\n}\n")),(0,r.yg)("p",null,"format function arguments can be split to two sections:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"LogAppender"),(0,r.yg)("li",{parentName:"ul"},"all others - all log inputs provided by ZIO core logging:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Trace - current trace (",(0,r.yg)("inlineCode",{parentName:"li"},"zio.Trace"),")"),(0,r.yg)("li",{parentName:"ul"},"FiberId - fiber id (",(0,r.yg)("inlineCode",{parentName:"li"},"zio.FiberId"),")"),(0,r.yg)("li",{parentName:"ul"},"LogLevel - log level (",(0,r.yg)("inlineCode",{parentName:"li"},"zio.LogLevel"),")"),(0,r.yg)("li",{parentName:"ul"},"() => String - log message"),(0,r.yg)("li",{parentName:"ul"},"Cause","[Any]"," - cause (",(0,r.yg)("inlineCode",{parentName:"li"},"zio.Cause"),")"),(0,r.yg)("li",{parentName:"ul"},"FiberRefs - fiber refs (",(0,r.yg)("inlineCode",{parentName:"li"},"zio.FiberRefs"),"), collection of ",(0,r.yg)("inlineCode",{parentName:"li"},"zio.FiberRef")," - ZIO's equivalent of Java's ThreadLocal"),(0,r.yg)("li",{parentName:"ul"},"List","[LogSpan]"," - log spans  (",(0,r.yg)("inlineCode",{parentName:"li"},"zio.LogSpan"),")"),(0,r.yg)("li",{parentName:"ul"},"Map","[String, String]"," - ZIO core log annotations values, where key is annotation key/name, and value is annotation\nvalue")))),(0,r.yg)("p",null,"essential ",(0,r.yg)("inlineCode",{parentName:"p"},"LogAppender")," functions, which are used in predefined log formats:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"def appendCause(cause: Cause[Any])")," - appends a ",(0,r.yg)("inlineCode",{parentName:"li"},"zio.Cause")," to the log, some logging backends may have special\nsupport for logging failures"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"def appendNumeric[A](numeric: A)")," - appends a numeric value to the log"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"def appendText(text: String)")," - appends unstructured text to the log"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"def appendKeyValue(key: String, value: String)")," - appends a key/value string pair to the log")),(0,r.yg)("p",null,"then it depends on the specific logging backend how these functions are implemented with respect to the backend output,\nfor example:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zio-logging/slf4j1"},"slf4j v1")," logging backend - key/value is appended to\nslf4j ",(0,r.yg)("a",{parentName:"li",href:"https://logback.qos.ch/manual/mdc.html"},"MDC context"),", Cause is transformed to Throwable and placed to slf4j\nthrowable section, all other text and numeric parts are added to slf4j log message"),(0,r.yg)("li",{parentName:"ul"},"console logging backend - in general all values are added to log line, ",(0,r.yg)("inlineCode",{parentName:"li"},"Cause.prettyPrint")," is used to log cause\ndetails")),(0,r.yg)("p",null,"example of some predefined log formats implementations:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"def annotation(name: String): LogFormat =\n  LogFormat.make { (builder, _, _, _, _, _, _, _, annotations) =>\n    annotations.get(name).foreach { value =>\n      builder.appendKeyValue(name, value)\n    }\n  }\n\nval cause: LogFormat =\n  LogFormat.make { (builder, _, _, _, _, cause, _, _, _) =>\n    if (!cause.isEmpty) {\n      builder.appendCause(cause)\n    }\n  }\n\ndef text(value: => String): LogFormat =\n  LogFormat.make { (builder, _, _, _, _, _, _, _, _) =>\n    builder.appendText(value)\n  }\n")))}s.isMDXComponent=!0}}]);