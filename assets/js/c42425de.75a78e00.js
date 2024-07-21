"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[73998],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),y=i,d=u["".concat(c,".").concat(y)]||u[y]||m[y]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},59451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(58168),i=(r(96540),r(15680));const a={id:"rezilience",title:"Rezilience"},l=void 0,o={unversionedId:"ecosystem/community/rezilience",id:"ecosystem/community/rezilience",title:"Rezilience",description:"Rezilience is a ZIO-native library for making resilient distributed systems.",source:"@site/docs/ecosystem/community/rezilience.md",sourceDirName:"ecosystem/community",slug:"/ecosystem/community/rezilience",permalink:"/ecosystem/community/rezilience",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/ecosystem/community/rezilience.md",tags:[],version:"current",frontMatter:{id:"rezilience",title:"Rezilience"},sidebar:"ecosystem-sidebar",previous:{title:"MUnit ZIO",permalink:"/ecosystem/community/munit-zio"},next:{title:"Scala k8s",permalink:"/ecosystem/community/scala-k8s"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/svroonland/rezilience"},"Rezilience")," is a ZIO-native library for making resilient distributed systems."),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"Rezilience is a ZIO-native fault tolerance library with a collection of policies for making asynchronous systems more resilient to failures inspired by Polly, Resilience4J, and Akka. It does not have external library dependencies other than ZIO."),(0,i.yg)("p",null,"It comprises these policies:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"CircuitBreaker")," \u2014 Temporarily prevent trying calls after too many failures"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"RateLimiter")," \u2014 Limit the rate of calls to a system"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Bulkhead")," \u2014 Limit the number of in-flight calls to a system"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Retry")," \u2014 Try again after transient failures"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Timeout")," \u2014 Interrupt execution if a call does not complete in time")),(0,i.yg)("h2",{id:"installation"},"Installation"),(0,i.yg)("p",null,"In order to use this library, we need to add the following line in our ",(0,i.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "nl.vroste" %% "rezilience" % "<version>"\n')),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("p",null,"Let's try an example of writing ",(0,i.yg)("em",{parentName:"p"},"Circuit Breaker")," policy for calling an external API:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import nl.vroste.rezilience.CircuitBreaker.{CircuitBreakerCallError, State}\nimport nl.vroste.rezilience._\nimport zio._\nimport zio.clock.Clock\nimport zio.console.{Console, putStrLn}\nimport zio.duration._\n\nobject CircuitBreakerExample extends zio.App {\n\n  def callExternalSystem: ZIO[Console, String, Nothing] =\n    putStrLn("External service called, but failed!").orDie *>\n      ZIO.fail("External service failed!")\n\n  val myApp: ZIO[Console with Clock, Nothing, Unit] =\n    CircuitBreaker.withMaxFailures(\n      maxFailures = 10,\n      resetPolicy = Schedule.exponential(1.second),\n      onStateChange = (state: State) =>\n        ZIO(println(s"State changed to $state")).orDie\n    ).use { cb =>\n      for {\n        _ <- ZIO.foreach_(1 to 10)(_ => cb(callExternalSystem).either)\n        _ <- cb(callExternalSystem).catchAll(errorHandler)\n        _ <- ZIO.sleep(2.seconds)\n        _ <- cb(callExternalSystem).catchAll(errorHandler)\n      } yield ()\n    }\n\n  def errorHandler: CircuitBreakerCallError[String] => URIO[Console, Unit] = {\n    case CircuitBreaker.CircuitBreakerOpen =>\n      putStrLn("Circuit breaker blocked the call to our external system").orDie\n    case CircuitBreaker.WrappedError(error) =>\n      putStrLn(s"External system threw an exception: $error").orDie\n  }\n  \n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    myApp.exitCode\n}\n')))}m.isMDXComponent=!0}}]);