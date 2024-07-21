"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[55054],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function d(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?d(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},d=Object.keys(e);for(t=0;t<d.length;t++)n=d[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)n=d[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),i=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=i(e.components);return t.createElement(s.Provider,{value:a},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,d=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=i(n),y=r,m=g["".concat(s,".").concat(y)]||g[y]||h[y]||d;return n?t.createElement(m,o(o({ref:a},p),{},{components:n})):t.createElement(m,o({ref:a},p))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var d=n.length,o=new Array(d);o[0]=y;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<d;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},39875:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>i});var t=n(58168),r=(n(96540),n(15680));const d={id:"headers",title:"Headers"},o=void 0,l={unversionedId:"zio-http/reference/headers/headers",id:"zio-http/reference/headers/headers",title:"Headers",description:"ZIO HTTP provides support for all HTTP headers (as defined in RFC2616) along with custom headers.",source:"@site/docs/zio-http/reference/headers/headers.md",sourceDirName:"zio-http/reference/headers",slug:"/zio-http/reference/headers/",permalink:"/zio-http/reference/headers/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/reference/headers/headers.md",tags:[],version:"current",frontMatter:{id:"headers",title:"Headers"},sidebar:"ecosystem-sidebar",previous:{title:"Status Codes",permalink:"/zio-http/reference/response/status"},next:{title:"Cookies",permalink:"/zio-http/reference/headers/session/cookies"}},s={},i=[{value:"Header",id:"header",level:2},{value:"Headers",id:"headers",level:2},{value:"Headers Operations",id:"headers-operations",level:2},{value:"Getting Headers",id:"getting-headers",level:3},{value:"Modifying Headers",id:"modifying-headers",level:3},{value:"Checking for a Certain Condition",id:"checking-for-a-certain-condition",level:3},{value:"Server-side",id:"server-side",level:2},{value:"Attaching Headers to Response",id:"attaching-headers-to-response",level:3},{value:"Using <code>addHeaders</code> Helper on Response",id:"using-addheaders-helper-on-response",level:4},{value:"Through Response Constructors",id:"through-response-constructors",level:4},{value:"Using Middlewares",id:"using-middlewares",level:4},{value:"Reading Headers from Request",id:"reading-headers-from-request",level:3},{value:"Client-side",id:"client-side",level:2},{value:"Adding Headers to Request",id:"adding-headers-to-request",level:3},{value:"Reading Headers from Response",id:"reading-headers-from-response",level:3}],p={toc:i},g="wrapper";function h(e){let{components:a,...n}=e;return(0,r.yg)(g,(0,t.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZIO HTTP")," provides support for all HTTP headers (as defined in ",(0,r.yg)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2616"},"RFC2616"),") along with custom headers."),(0,r.yg)("p",null,"In ZIO HTTP we have two related types of headers:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Header")," represents a single HTTP header"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Headers")," represents an immutable collection of headers")),(0,r.yg)("h2",{id:"header"},"Header"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Header")," trait outlines the fundamental interface for all HTTP headers. We can think of it as a type-safe representation of an HTTP header, consisting of a key-value pair where the key represents the header name and the value represents the header value."),(0,r.yg)("p",null,"In the companion object of ",(0,r.yg)("inlineCode",{parentName:"p"},"Header"),", we have a collection of predefined headers. They are grouped into sub-objects based on their category, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"zio.http.Header.Authorization"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"zio.http.Header.CacheControl"),", etc. All the headers are subtypes of ",(0,r.yg)("inlineCode",{parentName:"p"},"zio.http.Header")," which is a sealed trait."),(0,r.yg)("p",null,"By calling ",(0,r.yg)("inlineCode",{parentName:"p"},"headerName")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"renderedValue")," on a header instance, we can access the header name and value, respectively."),(0,r.yg)("h2",{id:"headers"},"Headers"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Headers")," is a collection of ",(0,r.yg)("inlineCode",{parentName:"p"},"Header")," instances which is used to represent the headers of an HTTP message:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\nval headers1 = Headers(Header.Accept(MediaType.application.json))\n// headers1: Headers = Iterable(\n//   Accept(\n//     mimeTypes = NonEmptyChunk(MediaTypeWithQFactor(MediaType(application,json,true,false,List(json, map),Map(),Map()),None))\n//   )\n// )\n\nval headers2 = Headers(\n    Header.Accept(MediaType.application.json),\n    Header.Authorization.Basic("username", "password")\n  )\n// headers2: Headers = Iterable(\n//   Accept(\n//     mimeTypes = NonEmptyChunk(MediaTypeWithQFactor(MediaType(application,json,true,false,List(json, map),Map(),Map()),None))\n//   ),\n//   Basic(username = "username", password = Secret(<redacted>))\n// )\n')),(0,r.yg)("p",null,"We can use raw strings to create headers:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n// Creating headers from key-value pair\nval headers4 = Headers("Accept", "application/json")\n// headers4: Headers = Iterable(\n//   Custom(customName = "Accept", value = "application/json")\n// )\n\n// Creating headers from tuple of key-value pair\nval headers3 = Headers("Accept" -> "application/json")\n// headers3: Headers = Iterable(\n//   Custom(customName = "Accept", value = "application/json")\n// )\n')),(0,r.yg)("h2",{id:"headers-operations"},"Headers Operations"),(0,r.yg)("p",null,"Headers DSL provides plenty of powerful operators that can be used to add, remove, modify, and verify headers. There are several operations that can be performed on any instance of ",(0,r.yg)("inlineCode",{parentName:"p"},"Headers"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Request"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"Response"),"."),(0,r.yg)("h3",{id:"getting-headers"},"Getting Headers"),(0,r.yg)("p",null,"To get headers from a request or response, we can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"header")," method:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"response.header(Header.ContentType)\n\nrequest.header(Header.Authorization)\n")),(0,r.yg)("p",null,"List of methods available to get headers:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Method"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Return Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"header(headerType: HeaderType)")),(0,r.yg)("td",{parentName:"tr",align:null},"Gets a header or returns ",(0,r.yg)("inlineCode",{parentName:"td"},"None")," if not present or unparsable."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Option[headerType.HeaderValue]"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"headers(headerType: HeaderType)")),(0,r.yg)("td",{parentName:"tr",align:null},"Gets multiple headers of the specified type."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Chunk[headerType.HeaderValue]"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"headerOrFail(headerType: HeaderType)")),(0,r.yg)("td",{parentName:"tr",align:null},"Gets a header, returning ",(0,r.yg)("inlineCode",{parentName:"td"},"None")," if absent, or an ",(0,r.yg)("inlineCode",{parentName:"td"},"Either")," with parsing error or parsed value."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Option[Either[String, headerType.HeaderValue]]"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"headers")),(0,r.yg)("td",{parentName:"tr",align:null},"Returns all headers."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Headers"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rawHeader(name: CharSequence)")),(0,r.yg)("td",{parentName:"tr",align:null},"Gets the raw unparsed value of a header by name."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Option[String]"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rawHeader(headerType: HeaderType)")),(0,r.yg)("td",{parentName:"tr",align:null},"Gets the raw unparsed value of a header by type."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Option[String]"))))),(0,r.yg)("h3",{id:"modifying-headers"},"Modifying Headers"),(0,r.yg)("p",null,"There are several methods available to modify headers. Once modified, a new instance of the same type is returned:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'Request.get("/users").addHeader(Header.Accept(MediaType.application.`json`))\n\nResponse.ok.addHeaders(\n  Headers(\n    Header.ContentType(MediaType.application.json),\n    Header.AccessControlAllowOrigin.All\n  )\n)\n\nHeaders.empty.addHeader(Header.Accept(MediaType.application.json))\n')),(0,r.yg)("p",null,"Here are the methods available to modify headers:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Method"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"addHeader")),(0,r.yg)("td",{parentName:"tr",align:null},"Adds a header or a header with the given name and value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"addHeaders")),(0,r.yg)("td",{parentName:"tr",align:null},"Adds multiple headers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"removeHeader")),(0,r.yg)("td",{parentName:"tr",align:null},"Removes a specified header.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"removeHeaders")),(0,r.yg)("td",{parentName:"tr",align:null},"Removes multiple specified headers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setHeaders")),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the headers to the provided headers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"updateHeaders")),(0,r.yg)("td",{parentName:"tr",align:null},"Updates the current headers using a provided update function.")))),(0,r.yg)("h3",{id:"checking-for-a-certain-condition"},"Checking for a Certain Condition"),(0,r.yg)("p",null,"There are methods available that enable us to verify whether the headers meet specific criteria:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"response.hasContentType(MediaType.application.json.fullType)\n\nrequest.hasHeader(Header.Accept)\n\nval contentTypeHeader: Headers = Headers(Header.ContentType(MediaType.application.json))\n\ncontentTypeHeader.hasHeader(Header.ContentType) \n\ncontentTypeHeader.hasJsonContentType\n")),(0,r.yg)("p",null,"There are several such methods available to check if the headers meet certain conditions:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"th"},"Method")),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hasContentType(value: CharSequence)")),(0,r.yg)("td",{parentName:"tr",align:null},"Checks if the headers have the given content type.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hasFormUrlencodedContentType")),(0,r.yg)("td",{parentName:"tr",align:null},"Checks if the headers have a form-urlencoded content type.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hasFormMultipartContentType")),(0,r.yg)("td",{parentName:"tr",align:null},"Checks if the headers have a multipart/form-data content type.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hasHeader(name: CharSequence)")),(0,r.yg)("td",{parentName:"tr",align:null},"Checks if the headers contain a header with the given name.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hasHeader(headerType: HeaderType)")),(0,r.yg)("td",{parentName:"tr",align:null},"Checks if the headers contain a header of the given type.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hasHeader(header: Header)")),(0,r.yg)("td",{parentName:"tr",align:null},"Checks if the headers contain a specific header.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hasJsonContentType")),(0,r.yg)("td",{parentName:"tr",align:null},"Checks if the headers have a JSON content type.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hasMediaType(mediaType: MediaType)")),(0,r.yg)("td",{parentName:"tr",align:null},"Checks if the headers have the specified media type.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hasTextPlainContentType")),(0,r.yg)("td",{parentName:"tr",align:null},"Checks if the headers have a text/plain content type.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hasXhtmlXmlContentType")),(0,r.yg)("td",{parentName:"tr",align:null},"Checks if the headers have an XHTML/XML content type.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hasXmlContentType")),(0,r.yg)("td",{parentName:"tr",align:null},"Checks if the headers have an XML content type.")))),(0,r.yg)("h2",{id:"server-side"},"Server-side"),(0,r.yg)("h3",{id:"attaching-headers-to-response"},"Attaching Headers to Response"),(0,r.yg)("p",null,"On the server-side, ZIO HTTP is adding a collection of pre-defined headers to the response, according to the HTTP specification, additionally, users may add other headers, including custom headers."),(0,r.yg)("p",null,"There are multiple ways to attach headers to a response:"),(0,r.yg)("h4",{id:"using-addheaders-helper-on-response"},"Using ",(0,r.yg)("inlineCode",{parentName:"h4"},"addHeaders")," Helper on Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.http._\n\nResponse.ok.addHeader(Header.ContentLength(0L))\n// res3: Response = Response(\n//   status = Ok,\n//   headers = Iterable(ContentLength(length = 0L)),\n//   body = Body.empty\n// )\n")),(0,r.yg)("h4",{id:"through-response-constructors"},"Through Response Constructors"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"Response(\n  status = Status.Ok,\n  // Setting response header \n  headers = Headers(Header.ContentLength(0L)),\n  body = Body.empty\n)\n// res4: Response = Response(\n//   status = Ok,\n//   headers = Iterable(ContentLength(length = 0L)),\n//   body = Body.empty\n// )\n")),(0,r.yg)("h4",{id:"using-middlewares"},"Using Middlewares"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import Middleware.addHeader\n\nRoutes(Method.GET / "hello" -> Handler.ok) @@ addHeader(Header.ContentLength(0L))\n// res5: Routes[Any with Any, Nothing] = Routes(\n//   routes = IndexedSeq(\n//     Augmented(\n//       route = Handled(\n//         routePattern = RoutePattern(\n//           method = GET,\n//           pathCodec = Concat(\n//             left = Segment(segment = Empty),\n//             right = Segment(segment = Literal(value = "hello")),\n//             combiner = zio.http.codec.Combiner$$anon$1@71473d46\n//           )\n//         ),\n//         handler = zio.http.Handler$FromFunction$$anon$16@4e3e0654,\n//         location = ""\n//       ),\n//       aspect = zio.http.HandlerAspect$$Lambda$15485/0x00007f191e8187a0@72bebc48\n//     )\n//   )\n// )\n')),(0,r.yg)("h3",{id:"reading-headers-from-request"},"Reading Headers from Request"),(0,r.yg)("p",null,"On the Server-side you can read Request headers as given below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'Routes(\n  Method.GET / "streamOrNot" -> handler { (req: Request) =>\n    Response.text(req.headers.map(_.toString).mkString("\\n"))\n  }\n)\n// res6: Routes[Any, Nothing] = Routes(\n//   routes = IndexedSeq(\n//     Handled(\n//       routePattern = RoutePattern(\n//         method = GET,\n//         pathCodec = Concat(\n//           left = Segment(segment = Empty),\n//           right = Segment(segment = Literal(value = "streamOrNot")),\n//           combiner = zio.http.codec.Combiner$$anon$1@53da09d4\n//         )\n//       ),\n//       handler = zio.http.Handler$FromFunction$$anon$16@1bbfa3e4,\n//       location = ""\n//     )\n//   )\n// )\n')),(0,r.yg)("details",null,(0,r.yg)("summary",null,(0,r.yg)("b",null,"Detailed Example")),(0,r.yg)("p",null,"Example below shows how the Headers could be added to a response by using ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," constructors and how a custom header is added to ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," through ",(0,r.yg)("inlineCode",{parentName:"p"},"addHeader"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\nimport zio.stream._\n\nobject SimpleResponseDispatcher extends ZIOAppDefault {\n  override def run =\n    // Starting the server (for more advanced startup configuration checkout `HelloWorldAdvanced`)\n    Server.serve(routes).provide(Server.default)\n\n  // Create a message as a Chunk[Byte]\n  val message = Chunk.fromArray("Hello world !\\r\\n".getBytes(Charsets.Http))\n  val routes: Routes[Any, Response] =\n    Routes(\n      // Simple (non-stream) based route\n      Method.GET / "health" -> handler(Response.ok),\n\n      // From Request(req), the headers are accessible.\n      Method.GET / "streamOrNot" ->\n        handler { (req: Request) =>\n          // Checking if client is able to handle streaming response\n          val acceptsStreaming: Boolean = req.header(Header.Accept).exists(_.mimeTypes.contains(Header.Accept.MediaTypeWithQFactor(MediaType.application.`octet-stream`, None)))\n          if (acceptsStreaming)\n            Response(\n              status = Status.Ok,\n              body = Body.fromStream(ZStream.fromChunk(message), message.length.toLong), // Encoding content using a ZStream\n              )\n          else {\n            // Adding a custom header to Response\n            Response(status = Status.Accepted, body = Body.fromChunk(message)).addHeader("X-MY-HEADER", "test")\n          }\n        }\n      ).sandbox\n}\n'))),(0,r.yg)("h2",{id:"client-side"},"Client-side"),(0,r.yg)("h3",{id:"adding-headers-to-request"},"Adding Headers to Request"),(0,r.yg)("p",null,"ZIO HTTP provides a simple way to add headers to a client ",(0,r.yg)("inlineCode",{parentName:"p"},"Request"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val headers = Headers(Header.Host("jsonplaceholder.typicode.com"), Header.Accept(MediaType.application.json))\nClient.request(Request.get("https://jsonplaceholder.typicode.com/todos").addHeaders(headers))\n')),(0,r.yg)("h3",{id:"reading-headers-from-response"},"Reading Headers from Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'Client.request(Request.get("https://jsonplaceholder.typicode.com/todos")).map(_.headers)\n')),(0,r.yg)("details",null,(0,r.yg)("summary",null,(0,r.yg)("b",null,"Detailed Example")," "),(0,r.yg)("p",null,"The sample below shows how a header could be added to a client request:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\n\nobject SimpleClientJson extends ZIOAppDefault {\n  val url = "https://jsonplaceholder.typicode.com/todos"\n  // Construct headers\n  val headers = Headers(Header.Host("jsonplaceholder.typicode.com"), Header.Accept(MediaType.application.json))\n\n  val program = for {\n    // Pass headers to request\n    res <- Client.request(Request.get(url).addHeaders(headers))\n    // List all response headers\n    _ <- Console.printLine(res.headers.toList.mkString("\\n"))\n    data <-\n      // Check if response contains a specified header with a specified value.\n      if (res.header(Header.ContentType).exists(_.mediaType == MediaType.application.json))\n        res.body.asString\n      else\n        res.body.asString\n    _ <- Console.printLine(data)\n  } yield ()\n\n  override def run =\n    program.provide(Client.default, Scope.default)\n\n}\n'))))}h.isMDXComponent=!0}}]);