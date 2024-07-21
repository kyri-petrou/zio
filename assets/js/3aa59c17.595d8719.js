"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[85729],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),i=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=i(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=i(t),m=r,y=g["".concat(p,".").concat(m)]||g[m]||u[m]||o;return t?a.createElement(y,s(s({ref:n},d),{},{components:t})):a.createElement(y,s({ref:n},d))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[g]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=t(58168),r=(t(96540),t(15680));const o={id:"response",title:"Response"},s=void 0,l={unversionedId:"zio-http/reference/response/response",id:"zio-http/reference/response/response",title:"Response",description:"ZIO HTTP Response is designed to encode HTTP Response.",source:"@site/docs/zio-http/reference/response/response.md",sourceDirName:"zio-http/reference/response",slug:"/zio-http/reference/response/",permalink:"/zio-http/reference/response/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/reference/response/response.md",tags:[],version:"current",frontMatter:{id:"response",title:"Response"},sidebar:"ecosystem-sidebar",previous:{title:"Request",permalink:"/zio-http/reference/request"},next:{title:"Status Codes",permalink:"/zio-http/reference/response/status"}},p={},i=[{value:"Response Usage",id:"response-usage",level:2},{value:"Server Side",id:"server-side",level:3},{value:"Client Side",id:"client-side",level:3},{value:"Creating a Response",id:"creating-a-response",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"From Plain Text, JSON, and HTML",id:"from-plain-text-json-and-html",level:3},{value:"Converting Failures to Responses",id:"converting-failures-to-responses",level:3},{value:"Specialized Response Operators",id:"specialized-response-operators",level:3},{value:"Response from HTTP Errors",id:"response-from-http-errors",level:3},{value:"Creating a Response from Server-Sent Events",id:"creating-a-response-from-server-sent-events",level:3},{value:"Creating a Response from a WebSocketApp",id:"creating-a-response-from-a-websocketapp",level:3},{value:"Operations",id:"operations",level:2},{value:"Adding Cookies and Flashes to Response",id:"adding-cookies-and-flashes-to-response",level:3},{value:"Working with Headers",id:"working-with-headers",level:3}],d={toc:i},g="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZIO HTTP")," ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," is designed to encode HTTP Response.\nIt supports all HTTP status codes and headers along with custom methods and headers (as defined in ",(0,r.yg)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2616"},"RFC2616")," )"),(0,r.yg)("h2",{id:"response-usage"},"Response Usage"),(0,r.yg)("p",null,"In ZIO HTTP, a ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," is used in two contexts, server-side and client-side."),(0,r.yg)("h3",{id:"server-side"},"Server Side"),(0,r.yg)("p",null,"In the server-side context, a ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," is created and returned by a ",(0,r.yg)("inlineCode",{parentName:"p"},"Handler"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\n\nobject HelloWorldExample extends ZIOAppDefault {\n  val routes: Routes[Any, Response] =\n    Routes(\n      Method.GET / "text" ->\n        handler {\n          Response.text("Hello World!")\n        },\n      )\n\n  override val run = Server.serve(routes).provide(Server.default)\n}\n')),(0,r.yg)("h3",{id:"client-side"},"Client Side"),(0,r.yg)("p",null,"In the client-side context, a ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," is received from the client after making a request to a server:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http.Header.ContentType.render\nimport zio.http._\n\nobject ClientExample extends ZIOAppDefault {\n  val program = for {\n    res         <- Client.request(Request.get("https://zio.dev/"))\n    contentType <- ZIO.from(res.header(Header.ContentType))\n    _           <- Console.printLine("------Content Type------")\n    _           <- Console.printLine(render(contentType))\n    data        <- res.body.asString\n    _           <- Console.printLine("----------Body----------")\n    _           <- Console.printLine(data)\n  } yield ()\n\n  override val run = program.provide(Client.default, Scope.default)\n}\n')),(0,r.yg)("h2",{id:"creating-a-response"},"Creating a Response"),(0,r.yg)("p",null,"A ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," can be created with ",(0,r.yg)("inlineCode",{parentName:"p"},"status"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"headers"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," using the default constructor:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"case class Response(\n  status: Status = Status.Ok,\n  headers: Headers = Headers.empty,\n  body: Body = Body.empty,\n)\n")),(0,r.yg)("p",null,"The below snippet creates a response with default params, ",(0,r.yg)("inlineCode",{parentName:"p"},"status")," as ",(0,r.yg)("inlineCode",{parentName:"p"},"Status.OK"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"headers")," as ",(0,r.yg)("inlineCode",{parentName:"p"},"Headers.empty"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," as ",(0,r.yg)("inlineCode",{parentName:"p"},"Body.Empty"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.http._\nimport zio._\n\nResponse()\n// res2: Response = Response(\n//   status = Ok,\n//   headers = Iterable(),\n//   body = Body.empty\n// )\n")),(0,r.yg)("h3",{id:"status-codes"},"Status Codes"),(0,r.yg)("p",null,"ZIO HTTP has several constructors for the most common status codes:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Method"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Status Code"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Response.ok")),(0,r.yg)("td",{parentName:"tr",align:null},"Successful request"),(0,r.yg)("td",{parentName:"tr",align:null},"200 OK")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Response.badRequest")),(0,r.yg)("td",{parentName:"tr",align:null},"The server cannot or will not process the request due to an apparent client error"),(0,r.yg)("td",{parentName:"tr",align:null},"400 Bad Request")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Response.unauthorized")),(0,r.yg)("td",{parentName:"tr",align:null},"Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided"),(0,r.yg)("td",{parentName:"tr",align:null},"401 Unauthorized")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Response.forbidden")),(0,r.yg)("td",{parentName:"tr",align:null},"The client does not have access rights to the content; that is, it is unauthorized"),(0,r.yg)("td",{parentName:"tr",align:null},"403 Forbidden")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Response.notFound")),(0,r.yg)("td",{parentName:"tr",align:null},"The requested resource could not be found but may be available in the future"),(0,r.yg)("td",{parentName:"tr",align:null},"404 Not Found")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Response.internalServerError")),(0,r.yg)("td",{parentName:"tr",align:null},"A generic error message, given when an unexpected condition was encountered and no more specific message is suitable"),(0,r.yg)("td",{parentName:"tr",align:null},"500 Internal Server Error")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Response.serviceUnavailable")),(0,r.yg)("td",{parentName:"tr",align:null},"The server cannot handle the request (because it is overloaded or down for maintenance)"),(0,r.yg)("td",{parentName:"tr",align:null},"503 Service Unavailable")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Response.redirect")),(0,r.yg)("td",{parentName:"tr",align:null},"Used to inform the client that the resource they're requesting is located at a different URI"),(0,r.yg)("td",{parentName:"tr",align:null},"302 Found (Moved Temporarily)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Response.seeOther")),(0,r.yg)("td",{parentName:"tr",align:null},"Tells the client to look at a different URL for the requested resource"),(0,r.yg)("td",{parentName:"tr",align:null},"303 See Other")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Response.gatewayTimeout")),(0,r.yg)("td",{parentName:"tr",align:null},"The server was acting as a gateway or proxy and did not receive a timely response from the upstream server"),(0,r.yg)("td",{parentName:"tr",align:null},"504 Gateway Timeout")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Response.httpVersionNotSupported")),(0,r.yg)("td",{parentName:"tr",align:null},"The server does not support the HTTP protocol version that was used in the request"),(0,r.yg)("td",{parentName:"tr",align:null},"505 HTTP Version Not Supported")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Response.networkAuthenticationRequired")),(0,r.yg)("td",{parentName:"tr",align:null},"The client needs to authenticate to gain network access"),(0,r.yg)("td",{parentName:"tr",align:null},"511 Network Authentication Required")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Response.notExtended")),(0,r.yg)("td",{parentName:"tr",align:null},"Further extensions to the request are required for the server to fulfill it"),(0,r.yg)("td",{parentName:"tr",align:null},"510 Not Extended")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Response.notImplemented")),(0,r.yg)("td",{parentName:"tr",align:null},"The server either does not recognize the request method, or it lacks the ability to fulfill the request"),(0,r.yg)("td",{parentName:"tr",align:null},"501 Not Implemented")))),(0,r.yg)("p",null,"For example, to create a response with status code 200, we can use ",(0,r.yg)("inlineCode",{parentName:"p"},"Response.ok"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"Response.ok\n// res3: Response = Response(\n//   status = Ok,\n//   headers = Iterable(),\n//   body = Body.empty\n// )\n")),(0,r.yg)("p",null,"And also to create a response with status code 404, we can use ",(0,r.yg)("inlineCode",{parentName:"p"},"Response.badRequest"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'Response.notFound\n// res4: Response = Response(\n//   status = NotFound,\n//   headers = Iterable(\n//     Warning(code = 199, agent = "ZIO HTTP", text = "404", date = None)\n//   ),\n//   body = Body.empty\n// )\n\nResponse.notFound("The requested resource could not be found!")\n// res5: Response = Response(\n//   status = NotFound,\n//   headers = Iterable(\n//     Warning(\n//       code = 199,\n//       agent = "ZIO HTTP",\n//       text = "The requested resource could not be found!",\n//       date = None\n//     )\n//   ),\n//   body = Body.empty\n// )\n')),(0,r.yg)("p",null,"If we want to create a response with a more specific status code, we can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"status")," method. It takes a ",(0,r.yg)("inlineCode",{parentName:"p"},"Status")," as a parameter and returns a new ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," with the corresponding status code:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"Response.status(Status.Continue)\n")),(0,r.yg)("p",null,"To learn more about status codes, see ",(0,r.yg)("a",{parentName:"p",href:"/zio-http/reference/response/status"},"Status")," page."),(0,r.yg)("h3",{id:"from-plain-text-json-and-html"},"From Plain Text, JSON, and HTML"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Response.text"))," creates a response with data as text, content-type header set to text/plain, and status code 200:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'Response.text("hey")\n// res7: Response = Response(\n//   status = Ok,\n//   headers = Iterable(Custom(customName = "content-type", value = "text/plain")),\n//   body = AsciiStringBody(asciiString = hey, mediaType = None, boundary = None)\n// )\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Response.json"))," creates a response with data as JSON, content-type header set to ",(0,r.yg)("inlineCode",{parentName:"p"},"application/json"),", and status code 200:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'Response.json("""{"greetings": "Hello World!"}""")\n// res8: Response = Response(\n//   status = Ok,\n//   headers = Iterable(\n//     Custom(customName = "content-type", value = "application/json")\n//   ),\n//   body = AsciiStringBody(\n//     asciiString = {"greetings": "Hello World!"},\n//     mediaType = None,\n//     boundary = None\n//   )\n// )\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Response.html"))," creates a response with data as HTML, content-type header set to ",(0,r.yg)("inlineCode",{parentName:"p"},"text/html"),", and status code 200."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.http.template._\n\nResponse.html(Html.fromString("html text"))\n// res9: Response = Response(\n//   status = Ok,\n//   headers = Iterable(Custom(customName = "content-type", value = "text/html")),\n//   body = AsciiStringBody(\n//     asciiString = <!DOCTYPE html>html text,\n//     mediaType = None,\n//     boundary = None\n//   )\n// )\n')),(0,r.yg)("h3",{id:"converting-failures-to-responses"},"Converting Failures to Responses"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," companion object provides some constructors to convert exceptions into responses. These constructors are useful for error handling by converting failures into appropriate HTTP responses:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Response.fromThrowable"))," Creates a new HTTP response based on the type of throwable provided. This method facilitates the conversion of various types of exceptions into appropriate HTTP responses, making error handling more streamlined:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object Response {\n  def fromThrowable(throwable: Throwable): Response = ???\n}\n")),(0,r.yg)("p",null,"Here is the table of exceptions and their corresponding status code:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Throwable Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Status Class"),(0,r.yg)("th",{parentName:"tr",align:null},"Status Code"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"AccessDeniedException")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Forbidden")),(0,r.yg)("td",{parentName:"tr",align:null},"403"),(0,r.yg)("td",{parentName:"tr",align:null},"Access to a resource is denied.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"IllegalAccessException")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Forbidden")),(0,r.yg)("td",{parentName:"tr",align:null},"403"),(0,r.yg)("td",{parentName:"tr",align:null},"Illegal access to a resource is attempted.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"IllegalAccessError")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Forbidden")),(0,r.yg)("td",{parentName:"tr",align:null},"403"),(0,r.yg)("td",{parentName:"tr",align:null},"Illegal access to a resource occurs.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"NotDirectoryException")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"BadRequest")),(0,r.yg)("td",{parentName:"tr",align:null},"400"),(0,r.yg)("td",{parentName:"tr",align:null},"The specified path is not a directory.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"IllegalArgumentException")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"BadRequest")),(0,r.yg)("td",{parentName:"tr",align:null},"400"),(0,r.yg)("td",{parentName:"tr",align:null},"An invalid argument is provided.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"java.io.FileNotFoundException")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"NotFound")),(0,r.yg)("td",{parentName:"tr",align:null},"404"),(0,r.yg)("td",{parentName:"tr",align:null},"The specified file or resource is not found.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"java.net.ConnectException")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ServiceUnavailable")),(0,r.yg)("td",{parentName:"tr",align:null},"503"),(0,r.yg)("td",{parentName:"tr",align:null},"Unable to connect to a service.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"java.net.SocketTimeoutException")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"GatewayTimeout")),(0,r.yg)("td",{parentName:"tr",align:null},"504"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection or read operation timed out.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Others (unrecognized throwable)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"InternalServerError")),(0,r.yg)("td",{parentName:"tr",align:null},"500"),(0,r.yg)("td",{parentName:"tr",align:null},"An unexpected error occurred.")))),(0,r.yg)("p",null,"Another low-level method for error handling is ",(0,r.yg)("inlineCode",{parentName:"p"},"Response.fromCause")," which creates a response from a ",(0,r.yg)("inlineCode",{parentName:"p"},"Cause"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object Response {\n  def fromCause(cause: Cause[Any]): Response = ???\n}\n")),(0,r.yg)("p",null,"This constructor is similar to ",(0,r.yg)("inlineCode",{parentName:"p"},"Response.fromThrowable"),", but it also captures the interruption of the fiber. If the provided ",(0,r.yg)("inlineCode",{parentName:"p"},"Cause")," is a failure due to interruption, the status code of the response will be ",(0,r.yg)("inlineCode",{parentName:"p"},"Status.RequestTimeout"),"."),(0,r.yg)("p",null,"We can use ",(0,r.yg)("inlineCode",{parentName:"p"},"Response.fromCause")," in combination with the ",(0,r.yg)("inlineCode",{parentName:"p"},"Handler#mapErrorCause"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Route#handleErrorCause"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"Routes#handleErrorCause")," methods. These methods take a function that maps the ",(0,r.yg)("inlineCode",{parentName:"p"},"Cause[Err] => Err")," and return a ",(0,r.yg)("inlineCode",{parentName:"p"},"Handler"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Route")," or a ",(0,r.yg)("inlineCode",{parentName:"p"},"Routes")," with the error handling logic applied:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.http._\nimport java.io.IOException\n\nval failedHandler = Handler.fail(new IOException())\n// failedHandler: Handler[Any, IOException, Any, Nothing] = zio.http.Handler$$anon$13@34c954e4\n\nfailedHandler.mapErrorCause(Response.fromCause)\n// res10: Handler[Any, Response, Any, Nothing] = zio.http.Handler$$anon$4@b4b0c5\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"In many cases, it is more convenient to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"sandbox")," method to automatically convert all failures into a corresponding ",(0,r.yg)("inlineCode",{parentName:"p"},"Response"),". But in some cases, to have more granular control over the error handling, we may want to use ",(0,r.yg)("inlineCode",{parentName:"p"},"Response.fromCause")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Response.fromThrowable")," directly.")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Cause")," is a data structure that represents the result of a failed computation in ZIO. To learn more about ",(0,r.yg)("inlineCode",{parentName:"p"},"Cause"),", see the ",(0,r.yg)("a",{parentName:"p",href:"https://zio.dev/reference/core/cause"},"Cause")," page on the ZIO core documentation.")),(0,r.yg)("h3",{id:"specialized-response-operators"},"Specialized Response Operators"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"status")," to update the ",(0,r.yg)("inlineCode",{parentName:"p"},"status")," of ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'Response.text("Hello World!").status(Status.NotFound)\n// res11: Response = Response(\n//   status = NotFound,\n//   headers = Iterable(Custom(customName = "content-type", value = "text/plain")),\n//   body = AsciiStringBody(\n//     asciiString = Hello World!,\n//     mediaType = None,\n//     boundary = None\n//   )\n// )\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"updateHeaders")," to update the ",(0,r.yg)("inlineCode",{parentName:"p"},"headers")," of ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'Response.ok.updateHeaders(_ => Headers("key", "value"))\n// res12: Response = Response(\n//   status = Ok,\n//   headers = Iterable(Custom(customName = "key", value = "value")),\n//   body = Body.empty\n// )\n')),(0,r.yg)("h3",{id:"response-from-http-errors"},"Response from HTTP Errors"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"error")," creates a response with a provided status code and message."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'Response.error(Status.BadRequest, "It\'s not good!")\n// res13: Response = Response(\n//   status = BadRequest,\n//   headers = Iterable(\n//     Warning(\n//       code = 199,\n//       agent = "ZIO HTTP",\n//       text = "It&#x27;s not good!",\n//       date = None\n//     )\n//   ),\n//   body = Body.empty\n// )\n')),(0,r.yg)("h3",{id:"creating-a-response-from-server-sent-events"},"Creating a Response from Server-Sent Events"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Response.fromServerSentEvents")," method creates a response with a stream of server-sent events:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object Response {\n  def fromServerSentEvents(stream: ZStream[Any, Nothing, ServerSentEvent]): Response = ???\n}\n")),(0,r.yg)("p",null,"Let's try a complete example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\nimport zio.stream._\nimport java.time.LocalDateTime\nimport java.time.format.DateTimeFormatter.ISO_LOCAL_TIME\n\nobject ServerSentExample extends ZIOAppDefault {\n\n  val stream: ZStream[Any, Nothing, ServerSentEvent] =\n    ZStream.repeatWithSchedule(\n      ServerSentEvent(ISO_LOCAL_TIME.format(LocalDateTime.now)),\n      Schedule.spaced(1.second),\n    )\n\n  val app =\n    Routes(\n      Method.GET / "events" -> handler {\n        Response.fromServerSentEvents(stream)\n      },\n    )\n  def run = Server.serve(app).provide(Server.default)\n}\n')),(0,r.yg)("p",null,"After running the above example, we can open the browser and navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost:8080/events")," to see the server-sent events in action. The browser will display the time every second."),(0,r.yg)("p",null,"Also, we can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"curl")," command to see the server-sent events:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl -N http://localhost:8080/events\n")),(0,r.yg)("p",null,"This will display the time every second in the terminal:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"data: 13:51:31.036249\n\ndata: 13:51:32.037663\n\ndata: 13:51:33.039565\n\ndata: 13:51:34.041464\n\n...\n")),(0,r.yg)("h3",{id:"creating-a-response-from-a-websocketapp"},"Creating a Response from a WebSocketApp"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Response.fromWebSocketApp")," constructor takes a ",(0,r.yg)("inlineCode",{parentName:"p"},"WebSocketApp")," and creates a ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," with a WebSocket connection:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object Response {\n  def fromWebSocketApp[R](app: WebSocketApp[R]): ZIO[R, Nothing, Response] = ???\n}\n")),(0,r.yg)("p",null,"Let's try an echo server which sends back the received messages:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\n\nobject WebsocketExample extends ZIOAppDefault {\n\n  val routes: Routes[Any, Response] = {\n    Routes(\n      Method.GET / "echo" -> handler {\n        Response.fromSocketApp(\n          WebSocketApp(\n            handler { (channel: WebSocketChannel) =>\n              channel.receiveAll {\n                case ChannelEvent.Read(message) =>\n                  channel.send(ChannelEvent.read(message))\n                case other =>\n                  ZIO.debug(other)\n              }\n            },\n            ),\n          )\n      },\n      )\n  }\n\n  def run =\n    Server.serve(routes).provide(Server.default)\n}\n')),(0,r.yg)("p",null,"To test this example, we can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"websocat")," command-line tool:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"> websocat ws://localhost:8080/echo\nhello\nhello\nbye\nbye\n")),(0,r.yg)("h2",{id:"operations"},"Operations"),(0,r.yg)("h3",{id:"adding-cookies-and-flashes-to-response"},"Adding Cookies and Flashes to Response"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"addCookie"))," adds cookies in the headers of the response:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\nval cookie = Cookie.Response("key", "value")\nResponse.ok.addCookie(cookie)\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"addFlash"))," adds flash messages in the headers of the response:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\nval flash = Flash.setValue("key1", "value1")\nResponse.ok.addFlash(flash)\n')),(0,r.yg)("h3",{id:"working-with-headers"},"Working with Headers"),(0,r.yg)("p",null,"There are various methods to work with headers in ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," which we have discussed in the ",(0,r.yg)("a",{parentName:"p",href:"/zio-http/reference/headers/#headers-operations"},"Headers")," page."))}u.isMDXComponent=!0}}]);