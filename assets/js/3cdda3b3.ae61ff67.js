"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[50484],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),g=r,y=c["".concat(l,".").concat(g)]||c[g]||u[g]||i;return n?a.createElement(y,o(o({ref:t},d),{},{components:n})):a.createElement(y,o({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},32396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const i={id:"build-a-restful-webservice",title:"Tutorial: How to Build a RESTful Web Service",sidebar_label:"Building a RESTful Web Service"},o=void 0,p={unversionedId:"guides/tutorials/build-a-restful-webservice",id:"guides/tutorials/build-a-restful-webservice",title:"Tutorial: How to Build a RESTful Web Service",description:"ZIO provides good support for building RESTful web services. Using Service Pattern, we can build web services that are modular and easy to test and maintain. On the other hand, we have several powerful official and community libraries that can help us to work with JSON data types, and databases and also work with HTTP protocol.",source:"@site/docs/guides/tutorials/build-a-restful-webservice.md",sourceDirName:"guides/tutorials",slug:"/guides/tutorials/build-a-restful-webservice",permalink:"/guides/tutorials/build-a-restful-webservice",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/tutorials/build-a-restful-webservice.md",tags:[],version:"current",frontMatter:{id:"build-a-restful-webservice",title:"Tutorial: How to Build a RESTful Web Service",sidebar_label:"Building a RESTful Web Service"},sidebar:"guides-sidebar",previous:{title:"Debugging a ZIO Application",permalink:"/guides/tutorials/debug-a-zio-application"},next:{title:"Building a GraphQL Web Service",permalink:"/guides/tutorials/build-a-graphql-webservice"}},l={},s=[{value:"Installation",id:"installation",level:2},{value:"Introduction to The <code>Http</code> Data Type",id:"introduction-to-the-http-data-type",level:2},{value:"Modeling Http Applications",id:"modeling-http-applications",level:2},{value:"Creation of <code>Http</code> Applications",id:"creation-of-http-applications",level:3},{value:"Combining <code>Http</code> Applications",id:"combining-http-applications",level:3},{value:"Built-in <code>Request</code> and <code>Response</code> Data Types",id:"built-in-request-and-response-data-types",level:2},{value:"Creating HTTP Server",id:"creating-http-server",level:2},{value:"Greeting App",id:"greeting-app",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"ZIO provides good support for building RESTful web services. Using ",(0,r.yg)("em",{parentName:"p"},"Service Pattern"),", we can build web services that are modular and easy to test and maintain. On the other hand, we have several powerful official and community libraries that can help us to work with JSON data types, and databases and also work with HTTP protocol."),(0,r.yg)("p",null,"In this tutorial, we will learn how to build a RESTful web service using ZIO. The corresponding source code for this tutorial is available on ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-quickstarts"},"GitHub"),". If you haven't read the ",(0,r.yg)("a",{parentName:"p",href:"/guides/quickstarts/restful-webservice"},"ZIO Quickstart: Building RESTful Web Service")," yet, we recommend you to read it first and download and run the source code, before reading this tutorial."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"We need to add the following dependencies to our project:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "io.d11"  %% "zhttp" % "2.0.0-RC10"\n)\n')),(0,r.yg)("p",null,"For this tutorial, we will be use the ",(0,r.yg)("em",{parentName:"p"},(0,r.yg)("a",{parentName:"em",href:"https://dream11.github.io/zio-http/"},"ZIO HTTP"))," library. ",(0,r.yg)("em",{parentName:"p"},"ZIO HTTP")," is a library for building HTTP applications using ZIO."),(0,r.yg)("h2",{id:"introduction-to-the-http-data-type"},"Introduction to The ",(0,r.yg)("inlineCode",{parentName:"h2"},"Http")," Data Type"),(0,r.yg)("p",null,"Before we start to build a RESTful web service, we need to understand the ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," data type. It is a data type that models an HTTP application, just like the ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO")," data type that models ZIO workflows."),(0,r.yg)("p",null,"We can think of the ",(0,r.yg)("inlineCode",{parentName:"p"},"Http[R, E, Request, Response]")," as a description of an HTTP application that accepts requests and returns responses. It can use the environment of type ",(0,r.yg)("inlineCode",{parentName:"p"},"R")," and may fail with an error of type ",(0,r.yg)("inlineCode",{parentName:"p"},"E"),"."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," is defined as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"trait Http[-R, +E, -A, +B] extends (A => ZIO[R, Option[E], B])\n")),(0,r.yg)("p",null,"We can say that ",(0,r.yg)("inlineCode",{parentName:"p"},"Http[R, E, A, B]")," is a function that takes an ",(0,r.yg)("inlineCode",{parentName:"p"},"A")," and returns a ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO[R, Option[E], B]"),". To put it another way, ",(0,r.yg)("inlineCode",{parentName:"p"},"HTTP[R, E, A, B]")," is an HTTP application that:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Accepts an ",(0,r.yg)("inlineCode",{parentName:"li"},"A")," and returns ",(0,r.yg)("inlineCode",{parentName:"li"},"B")),(0,r.yg)("li",{parentName:"ul"},"Uses the ",(0,r.yg)("inlineCode",{parentName:"li"},"R")," from the environment"),(0,r.yg)("li",{parentName:"ul"},"Will fail with ",(0,r.yg)("inlineCode",{parentName:"li"},"E")," if there is an error")),(0,r.yg)("p",null,"Like the ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO")," data type, it can be transformed and also composed with other ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," data types to build complex and large HTTP applications."),(0,r.yg)("h2",{id:"modeling-http-applications"},"Modeling Http Applications"),(0,r.yg)("p",null,"Let's try to model some HTTP applications using the ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," data type. So first, we are going to learn some basic ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," constructors and how to combine them to build more complex HTTP applications."),(0,r.yg)("h3",{id:"creation-of-http-applications"},"Creation of ",(0,r.yg)("inlineCode",{parentName:"h3"},"Http")," Applications"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Http.succeed")," constructor creates an ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," application that always returns a successful response:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\n\nval app: Http[Any, Nothing, Any, String] = Http.succeed("Hello, world!")\n')),(0,r.yg)("p",null,"We have the same constructor for failures called ",(0,r.yg)("inlineCode",{parentName:"p"},"Http.fail"),". It creates an ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," application that always returns a failed response:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\n\nval app: Http[Any, String, Any, Nothing] = Http.fail("Something went wrong")\n')),(0,r.yg)("p",null,"We can also create ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," programs from total and partial functions. The ",(0,r.yg)("inlineCode",{parentName:"p"},"Http.fromFunction")," constructor takes a total function of type ",(0,r.yg)("inlineCode",{parentName:"p"},"A => B")," and then creates an ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," application that accepts an ",(0,r.yg)("inlineCode",{parentName:"p"},"A")," and returns a ",(0,r.yg)("inlineCode",{parentName:"p"},"B"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zhttp.http._\n\nval app: Http[Any, Nothing, Int, Double] = Http.fromFunction[Int](_ / 2.0)\n")),(0,r.yg)("p",null,"And the ",(0,r.yg)("inlineCode",{parentName:"p"},"Http.collect")," constructor takes a partial function of type ",(0,r.yg)("inlineCode",{parentName:"p"},"PartialFunction[A, B]")," and then creates an ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," application that accepts an ",(0,r.yg)("inlineCode",{parentName:"p"},"A")," and returns a ",(0,r.yg)("inlineCode",{parentName:"p"},"B"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\n\nval app: Http[Any, Nothing, String, Int] =\n  Http.collect {\n    case "case 1" => 1\n    case "case 2" => 2\n  }\n')),(0,r.yg)("p",null,"Http applications can be effectual. We have a couple of constructors that can be used to create an ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," applications that are effectual:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Http.fromZIO")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Http.fromStream")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Http.fromFunctionZIO")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Http.collectZIO")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Http.fromFile"))),(0,r.yg)("p",null,"There are lots of other constructors, but we will not go into them here."),(0,r.yg)("h3",{id:"combining-http-applications"},"Combining ",(0,r.yg)("inlineCode",{parentName:"h3"},"Http")," Applications"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," data type is composable like ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO"),". We can create new complex ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," applications by combining existing simple ones by using ",(0,r.yg)("inlineCode",{parentName:"p"},"flatMap"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"zip"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"andThen"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"orElse"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"++")," methods:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zhttp.http._\n\nval a           : Http[Any, Nothing, Int, Double]    = ???\nval b           : Http[Any, Nothing, Double, String] = ???\ndef c(i: Double): Http[Any, Nothing, Long, String]   = ???\n\nval d = a >>= c // a flatMap c (combine two http sequentially)\nval e = a ++ b  // a defaultWith b (combine two http app)\nval f = a >>> b // a andThen b (pipe output of a to input of b)\nval h = a <> b  // a orElse b  (run a, if it fails, run b)\n")),(0,r.yg)("h2",{id:"built-in-request-and-response-data-types"},"Built-in ",(0,r.yg)("inlineCode",{parentName:"h2"},"Request")," and ",(0,r.yg)("inlineCode",{parentName:"h2"},"Response")," Data Types"),(0,r.yg)("p",null,"Until now, we have learned how to create ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," applications with some simple request and response types, e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"String")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Int")," in an ",(0,r.yg)("inlineCode",{parentName:"p"},"Http[Any, Nothing, String, Int]"),". But, in real life, when we want to deal with HTTP requests and responses, we need to have a more complex type for the request and response."),(0,r.yg)("p",null,"ZIO HTTP provides a type ",(0,r.yg)("inlineCode",{parentName:"p"},"Request")," for HTTP requests and a type ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," for HTTP responses. It has a built-in decoder for ",(0,r.yg)("inlineCode",{parentName:"p"},"Request")," and encoder for ",(0,r.yg)("inlineCode",{parentName:"p"},"Response"),". So we don't need to worry about the details of how requests and responses are decoded and encoded."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," type has a default ",(0,r.yg)("inlineCode",{parentName:"p"},"apply")," constructor in its companion object that takes a status, headers and, http data to create a ",(0,r.yg)("inlineCode",{parentName:"p"},"Response"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object Response {\n  def apply[R, E](\n    status: Status = Status.Ok,\n    headers: Headers = Headers.empty,\n    data: HttpData = HttpData.Empty\n  ): Response = ???\n}\n")),(0,r.yg)("p",null,"Other than the default constructor, we have several helper methods to create a ",(0,r.yg)("inlineCode",{parentName:"p"},"Response"),". Here are some of them:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"Response.ok")),": Creates a successful response with 200 status code."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},'Response.text("Hello World")')),": Creates a successful response with 200 status code and a body of ",(0,r.yg)("inlineCode",{parentName:"li"},"Hello World"),"."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"Response.status(Status.BadRequest)")),": Creates a response with a status code of 400."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},'Response.html("<h1>Hello World</h1>")')),": Creates a successful response with 200 status code and an HTML body of ",(0,r.yg)("inlineCode",{parentName:"li"},"<h1>Hello World</h1>"),"."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},'Response.redirect("/")')),": Creates a successful response that redirects to the root path.")),(0,r.yg)("p",null,"On the other hand, we do not need to create a ",(0,r.yg)("inlineCode",{parentName:"p"},"Request")," instead, we need to pattern match incoming requests to decompose them and determine the appropriate action to take."),(0,r.yg)("p",null,"Each incoming request can be extracted into two parts using pattern matching:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"HTTP Method (GET, POST, PUT, etc.)"),(0,r.yg)("li",{parentName:"ul"},"Path (e.g. /, /greeting, /download)")),(0,r.yg)("p",null,"Let's see an example of how to pattern match on incoming requests:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\n\nval httpApp: Http[Any, Nothing, Request, Response] =\n  Http.collect[Request] {\n    case Method.GET -> !! / "greet" / name =>\n      Response.text(s"Hello $name!")\n  }\n')),(0,r.yg)("p",null,"In the above example, the ",(0,r.yg)("inlineCode",{parentName:"p"},"Http.collect")," constructor takes a partial function of type ",(0,r.yg)("inlineCode",{parentName:"p"},"PartialFunction[Request, Response]")," as an argument and returns an ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," application. Using this DSL we only access the method and path of the incoming request. If we need to access the query string, the body, and more, we need to use the following DSL:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\n\nval httpApp: Http[Any, Nothing, Request, Response] =\n  Http.collect[Request] {\n    case req@(Method.GET -> !! / "greet") if (req.url.queryParams.nonEmpty) =>\n      Response.text(s"Hello ${req.url.queryParams("name").mkString(" and ")}!")\n  }\n')),(0,r.yg)("p",null,"Until now, we have learned how to create ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," applications that handle HTTP requests. In the next section, we will learn how to create HTTP servers that can handle ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," applications."),(0,r.yg)("h2",{id:"creating-http-server"},"Creating HTTP Server"),(0,r.yg)("p",null,"In order to start an HTTP server, the ZIO HTTP requires an HTTP application of type ",(0,r.yg)("inlineCode",{parentName:"p"},"HttpApp[R, E]")," which is type alias for ",(0,r.yg)("inlineCode",{parentName:"p"},"Http[R, E, Request, Response]"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"type HttpApp[-R, +E] = Http[R, E, Request, Response]\n\nobject Server {\n  def start[R](\n    port: Int,\n    http: HttpApp[R, Throwable]\n  ): ZIO[R, Throwable, Nothing] = ???\n}\n")),(0,r.yg)("h2",{id:"greeting-app"},"Greeting App"),(0,r.yg)("p",null,"First, we need to define a request handler that will handle ",(0,r.yg)("inlineCode",{parentName:"p"},"GET")," requests to the ",(0,r.yg)("inlineCode",{parentName:"p"},"/greet")," path:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\n\nobject GreetingApp {\n  def apply(): Http[Any, Nothing, Request, Response] =\n    Http.collect[Request] {\n      // GET /greet?name=:name\n      case req@(Method.GET -> !! / "greet") if (req.url.queryParams.nonEmpty) =>\n        Response.text(s"Hello ${req.url.queryParams("name").mkString(" and ")}!")\n\n      // GET /greet\n      case Method.GET -> !! / "greet" =>\n        Response.text(s"Hello World!")\n\n      // GET /greet/:name\n      case Method.GET -> !! / "greet" / name =>\n        Response.text(s"Hello $name!")\n    }\n}\n')),(0,r.yg)("p",null,"In the above example, we have defined an ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," app that handles GET requests."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The first case matches a request with a path of ",(0,r.yg)("inlineCode",{parentName:"li"},"/greet")," and a query parameter ",(0,r.yg)("inlineCode",{parentName:"li"},"name"),"."),(0,r.yg)("li",{parentName:"ul"},"The second case matches a request with a path of ",(0,r.yg)("inlineCode",{parentName:"li"},"/greet")," with no query parameters."),(0,r.yg)("li",{parentName:"ul"},"The third case matches a request with a path of ",(0,r.yg)("inlineCode",{parentName:"li"},"/greet/:name")," and extracts the ",(0,r.yg)("inlineCode",{parentName:"li"},"name")," from the path.")),(0,r.yg)("p",null,"Next, we need to create a server for ",(0,r.yg)("inlineCode",{parentName:"p"},"GreetingApp"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zhttp.service.Server\nimport zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run =\n    Server.start(port = 8080, http = GreetingApp())\n}\n")),(0,r.yg)("p",null,"Now, we have three endpoints in our server. We can test the server according to the steps mentioned in the corresponding ",(0,r.yg)("a",{parentName:"p",href:"/guides/quickstarts/restful-webservice"},"quickstart"),"."),(0,r.yg)("p",null,"Note that if we have written other applications along with ",(0,r.yg)("inlineCode",{parentName:"p"},"GreetingApp"),", such as ",(0,r.yg)("inlineCode",{parentName:"p"},"DownloadApp"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"CounterApp"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"UserApp"),", we can combine them into a single ",(0,r.yg)("inlineCode",{parentName:"p"},"HttpApp")," and start a server for that app:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zhttp.http._\nimport zhttp.service.Server\n\nServer.start(\n  port = 8080,\n  http = GreetingApp() ++ DownloadApp() ++ CounterApp() ++ UserApp()\n)\n")),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"In this tutorial, we have learned the basic building blocks of writing HTTP servers. We learned how to write handlers for HTTP requests using ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," data type. And finally, we saw how to create an HTTP server that can handle HTTP applications."),(0,r.yg)("p",null,"All the source code associated with this article is available on the ",(0,r.yg)("a",{parentName:"p",href:"http://github.com/zio/zio-quickstarts"},"ZIO Quickstart")," project."))}u.isMDXComponent=!0}}]);