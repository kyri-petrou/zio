"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[97014],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),g=r,m=c["".concat(i,".").concat(g)]||c[g]||d[g]||l;return t?a.createElement(m,s(s({ref:n},u),{},{components:t})):a.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=g;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},41594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const l={id:"ztransducer",title:"ZTransducer"},s=void 0,o={unversionedId:"reference/stream/ztransducer",id:"version-1.0.18/reference/stream/ztransducer",title:"ZTransducer",description:"Introduction",source:"@site/versioned_docs/version-1.0.18/reference/stream/ztransducer.md",sourceDirName:"reference/stream",slug:"/reference/stream/ztransducer",permalink:"/1.0.18/reference/stream/ztransducer",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.0.18/reference/stream/ztransducer.md",tags:[],version:"1.0.18",frontMatter:{id:"ztransducer",title:"ZTransducer"},sidebar:"overview_sidebar",previous:{title:"UStream",permalink:"/1.0.18/reference/stream/ustream"},next:{title:"Transducer",permalink:"/1.0.18/reference/stream/transducer"}},i={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Creation",id:"creation",level:2},{value:"From Effect",id:"from-effect",level:3},{value:"From Function",id:"from-function",level:3},{value:"Built-in Transducers",id:"built-in-transducers",level:2},{value:"Identity",id:"identity",level:3},{value:"head and last",id:"head-and-last",level:3},{value:"Splitting",id:"splitting",level:3},{value:"Dropping",id:"dropping",level:3},{value:"Folding",id:"folding",level:3},{value:"Prepending",id:"prepending",level:3},{value:"Branching/Switching",id:"branchingswitching",level:3},{value:"Collecting",id:"collecting",level:3},{value:"Compression",id:"compression",level:3},{value:"Decompression",id:"decompression",level:3},{value:"Decoders",id:"decoders",level:3},{value:"Operations",id:"operations",level:2},{value:"Filtering",id:"filtering",level:3},{value:"Input Transformation (Mapping)",id:"input-transformation-mapping",level:3},{value:"Output Transformation (Contramap)",id:"output-transformation-contramap",level:3},{value:"Composing",id:"composing",level:3}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"A ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer[R, E, I, O]")," is a stream transformer. Transducers accept a stream as input, and return the transformed stream as output."),(0,r.yg)("p",null,"ZTransducers can be thought of as a recipe for calling a bunch of methods on a source stream, to yield a new (transformed) stream. A nice mental model is the following type alias:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"type ZTransducer[Env, Err, In, Out] = ZStream[Env, Err, In] => ZStream[Env, Err, Out]\n")),(0,r.yg)("p",null,"There is no fundamental requirement for transducers to exist, because everything transducers do can be done directly on a stream. However, because transducers separate the stream transformation from the source stream itself, it becomes possible to abstract over stream transformations at the level of values, creating, storing, and passing around reusable transformation pipelines that can be applied to many different streams. "),(0,r.yg)("h2",{id:"creation"},"Creation"),(0,r.yg)("h3",{id:"from-effect"},"From Effect"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer.fromEffect")," creates a transducer that always evaluates the specified effect. Let's write a transducer that fails with a message: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val error: ZTransducer[Any, String, Any, Nothing] = ZTransducer.fromEffect(IO.fail("Ouch"))\n')),(0,r.yg)("h3",{id:"from-function"},"From Function"),(0,r.yg)("p",null,"By using ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer.fromFunction")," we convert a function into a transducer. Let's create a transducer which converts a stream of strings into a stream of characters:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val chars: ZTransducer[Any, Nothing, String, Char] = \n  ZTransducer\n    .fromFunction[String, Chunk[Char]](s => Chunk.fromArray(s.toArray))\n    .mapChunks(_.flatten)\n")),(0,r.yg)("p",null,"There is also a ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer.fromFunctionM")," which is an effecful version of this constructor."),(0,r.yg)("h2",{id:"built-in-transducers"},"Built-in Transducers"),(0,r.yg)("h3",{id:"identity"},"Identity"),(0,r.yg)("p",null,"The identity transducer passes elements through without any modification:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(1,2,3).transduce(ZTransducer.identity)\n// Ouput: 1, 2, 3\n")),(0,r.yg)("h3",{id:"head-and-last"},"head and last"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer.head")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer.last")," are two transducers that return the ",(0,r.yg)("em",{parentName:"p"},"first")," and ",(0,r.yg)("em",{parentName:"p"},"last")," element of a stream:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val stream: UStream[Int] = ZStream(1, 2, 3, 4)\nval head: UStream[Option[Int]] = stream.transduce(ZTransducer.head)\nval last: UStream[Option[Int]] = stream.transduce(ZTransducer.last)\n")),(0,r.yg)("h3",{id:"splitting"},"Splitting"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.splitOn")," \u2014 A transducer that splits strings on a delimiter:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'ZStream("1-2-3", "4-5", "6", "7-8-9-10")\n  .transduce(ZTransducer.splitOn("-"))\n  .map(_.toInt)\n// Ouput: 1, 2, 3, 4, 5, 6, 7, 8, 9 10\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.splitLines")," \u2014 A transducer that splits strings on newlines. Handles both Windows newlines (",(0,r.yg)("inlineCode",{parentName:"p"},"\\r\\n"),") and UNIX newlines (",(0,r.yg)("inlineCode",{parentName:"p"},"\\n"),"):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'ZStream("This is the first line.\\nSecond line.\\nAnd the last line.")\n  .transduce(ZTransducer.splitLines)\n// Output: "This is the first line.", "Second line.", "And the last line."\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.splitOnChunk")," \u2014 A transducer that splits elements on a delimiter and transforms the splits into desired output:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)\n  .transduce(ZTransducer.splitOnChunk(Chunk(4, 5, 6)))\n// Output: Chunk(1, 2, 3), Chunk(7, 8, 9, 10)\n")),(0,r.yg)("h3",{id:"dropping"},"Dropping"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.dropWhile")," \u2014 Creates a transducer that starts consuming values as soon as one fails the given predicate:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)\n  .transduce(ZTransducer.dropWhile(_ <= 5))\n// Output: 6, 7, 8, 9, 10\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer")," also has ",(0,r.yg)("inlineCode",{parentName:"p"},"dropWhileM")," which takes an effectful predicate ",(0,r.yg)("inlineCode",{parentName:"p"},"p: I => ZIO[R, E, Boolean]"),"."),(0,r.yg)("h3",{id:"folding"},"Folding"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.fold")," \u2014 Using ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransudcer.fold")," we can fold incoming elements until we reach the false predicate, then the transducer emits the computed value and restarts the folding process:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream\n  .range(0, 8)\n  .transduce(\n    ZTransducer.fold[Int, Chunk[Int]](Chunk.empty)(_.length < 3)((s, i) =>\n      s ++ Chunk(i)\n    )\n  )\n// Ouput: Chunk(0, 1, 2), Chunk(3, 4, 5), Chunk(6, 7)\n")),(0,r.yg)("p",null,"Note that the ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer.foldM")," is like ",(0,r.yg)("inlineCode",{parentName:"p"},"fold"),", but it folds effectfully."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.foldWeighted")," \u2014 Creates a transducer that folds incoming elements until reaches the ",(0,r.yg)("inlineCode",{parentName:"p"},"max")," worth of elements determined by the ",(0,r.yg)("inlineCode",{parentName:"p"},"costFn"),", then the transducer emits the computed value and restarts the folding process:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object ZTransducer {\n  def foldWeighted[I, O](z: O)(costFn: (O, I) => Long, max: Long)(\n    f: (O, I) => O\n  ): ZTransducer[Any, Nothing, I, O] = ???\n}\n")),(0,r.yg)("p",null,"In the following example, each time we consume a new element we return one as the weight of that element using cost function. After three times, the sum of the weights reaches to the ",(0,r.yg)("inlineCode",{parentName:"p"},"max")," number, and the folding process restarted. So we expect this transducer to group each three elements in one ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunk"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(3, 2, 4, 1, 5, 6, 2, 1, 3, 5, 6)\n  .aggregate(\n    ZTransducer\n      .foldWeighted(Chunk[Int]())(\n        (_, _: Int) => 1,\n        3\n      ) { (acc, el) =>\n        acc ++ Chunk(el)\n      }\n  )\n// Output: Chunk(3,2,4),Chunk(1,5,6),Chunk(2,1,3),Chunk(5,6)\n")),(0,r.yg)("p",null,"Another example is when we want to group element which sum of them equal or less than a specific number:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 2, 4, 2, 1, 1, 1, 0, 2, 1, 2)\n  .aggregate(\n    ZTransducer\n      .foldWeighted(Chunk[Int]())(\n        (_, i: Int) => i.toLong,\n        5\n      ) { (acc, el) =>\n        acc ++ Chunk(el)\n      }\n  )\n// Output: Chunk(1,2,2),Chunk(4),Chunk(2,1,1,1,0),Chunk(2,1,2)\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("em",{parentName:"p"},(0,r.yg)("strong",{parentName:"em"},"Note"))),(0,r.yg)("p",{parentName:"blockquote"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer.foldWeighted")," cannot decompose elements whose weight is more than the ",(0,r.yg)("inlineCode",{parentName:"p"},"max")," number. So elements that have an individual cost larger than ",(0,r.yg)("inlineCode",{parentName:"p"},"max")," will force the transducer to cross the ",(0,r.yg)("inlineCode",{parentName:"p"},"max")," cost. In the last example, if the source stream was ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream(1, 2, 2, 4, 2, 1, 6, 1, 0, 2, 1, 2)")," the output would be ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunk(1,2,2),Chunk(4),Chunk(2,1),Chunk(6),Chunk(1,0,2,1),Chunk(2)"),". As we see, the ",(0,r.yg)("inlineCode",{parentName:"p"},"6")," element crossed the ",(0,r.yg)("inlineCode",{parentName:"p"},"max")," cost."),(0,r.yg)("p",{parentName:"blockquote"},"To decompose these elements, we should use ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer.foldWeightedDecompose")," function.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.foldWeightedDecompose")," \u2014 As we saw in the previous section, we need a way to decompose elements \u2014 whose cause the output aggregate cross the ",(0,r.yg)("inlineCode",{parentName:"p"},"max")," \u2014 into smaller elements. This version of fold takes ",(0,r.yg)("inlineCode",{parentName:"p"},"decompose")," function and enables us to do that:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object ZTransducer {\n  def foldWeightedDecompose[I, O](\n      z: O\n  )(costFn: (O, I) => Long, max: Long, decompose: I => Chunk[I])(\n      f: (O, I) => O\n  ): ZTransducer[Any, Nothing, I, O] = ???\n}\n")),(0,r.yg)("p",null,"In the following example, we are break down elements that are bigger than 5, using ",(0,r.yg)("inlineCode",{parentName:"p"},"decompose")," function:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 2, 2, 1, 6, 1, 7, 2, 1, 2)\n  .aggregate(\n    ZTransducer\n      .foldWeightedDecompose(Chunk[Int]())(\n        (_, i: Int) => i.toLong,\n        5,\n        (i: Int) =>\n          if (i > 5) Chunk(i - 1, 1) else Chunk(i)\n      )((acc, el) => acc ++ Chunk.succeed(el))\n  )\n// Ouput: Chunk(1,2,2),Chunk(2,1),Chunk(5),Chunk(1,1),Chunk(5),Chunk(1,1,2,1),Chunk(2)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.foldUntil")," \u2014 Creates a transducer that folds incoming element until specific ",(0,r.yg)("inlineCode",{parentName:"p"},"max")," elements have been folded:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)\n  .transduce(ZTransducer.foldUntil(0, 3)(_ + _))\n// Output: 6, 15, 24, 10\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.foldLeft")," \u2014 This transducer will fold the inputs until the stream ends, resulting in a stream with one element:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val stream: ZStream[Any, Nothing, Int] = \n  ZStream(1, 2, 3, 4).transduce(ZTransducer.foldLeft(0)(_ + _))\n// Output: 10\n")),(0,r.yg)("h3",{id:"prepending"},"Prepending"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer.prepend")," creates a transducer that emits the provided chunks before emitting any other values:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(2, 3, 4).transduce(\n  ZTransducer.prepend(Chunk(0, 1))\n)\n// Output: 0, 1, 2, 3, 4\n")),(0,r.yg)("h3",{id:"branchingswitching"},"Branching/Switching"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer.branchAfter")," takes ",(0,r.yg)("inlineCode",{parentName:"p"},"n")," as an input and creates a transducer that reads the first ",(0,r.yg)("inlineCode",{parentName:"p"},"n")," values from the stream and uses them to choose the transducer that will be used for the rest of the stream."),(0,r.yg)("p",null,"In the following example, we are prompting the user to enter a series of numbers. If the sum of the first three elements is less than 5, we continue to emit the remaining elements by using ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer.identity"),", otherwise, we retry prompting the user to enter another series of numbers:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'ZStream\n  .fromEffect(\n    putStr("Enter numbers separated by comma: ") *> getStrLn\n  )\n  .mapConcat(_.split(","))\n  .map(_.trim.toInt)\n  .transduce(\n    ZTransducer.branchAfter(3) { elements =>\n      if (elements.sum < 5)\n        ZTransducer.identity\n      else\n        ZTransducer.fromEffect(\n          putStrLn(s"received elements are not applicable: $elements")\n        ) >>> ZTransducer.fail("boom")\n    }\n  )\n  .retry(Schedule.forever)\n')),(0,r.yg)("h3",{id:"collecting"},"Collecting"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.collectAllN")," \u2014 Collects incoming values into chunk of maximum size of ",(0,r.yg)("inlineCode",{parentName:"p"},"n"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 3, 4, 5).transduce(\n  ZTransducer.collectAllN(3)\n)\n// Output: Chunk(1,2,3), Chunk(4,5)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.collectAllWhile")," \u2014 Accumulates incoming elements into a chunk as long as they verify the given predicate:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 0, 4, 0, 6, 7).transduce(\n  ZTransducer.collectAllWhile(_ != 0)\n)\n// Output: Chunk(1,2), Chunk(4), Chunk(6,7)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.collectAllToMapN")," \u2014 Creates a transducer accumulating incoming values into maps of up to ",(0,r.yg)("inlineCode",{parentName:"p"},"n")," keys. Elements are mapped to keys using the function ",(0,r.yg)("inlineCode",{parentName:"p"},"key"),"; elements mapped to the same key will be merged with the function ",(0,r.yg)("inlineCode",{parentName:"p"},"f"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object ZTransducer {\n  def collectAllToMapN[K, I](n: Long)(key: I => K)(\n      f: (I, I) => I\n  ): ZTransducer[Any, Nothing, I, Map[K, I]] = ???\n}\n")),(0,r.yg)("p",null,"Let's do an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 0, 4, 5).transduce(\n  ZTransducer.collectAllToMapN[Int, Int](10)(_ % 3)(_ + _)\n)\n// Output: Map(1 -> 5, 2 -> 7, 0 -> 0)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.collectAllToSetN")," \u2014 Creates a transducer accumulating incoming values into sets of maximum size ",(0,r.yg)("inlineCode",{parentName:"p"},"n"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 1, 2, 1, 3, 0, 5, 0, 2).transduce(\n  ZTransducer.collectAllToSetN(3)\n)\n// Output: Set(1,2,3), Set(0,5,2), Set(1)\n")),(0,r.yg)("h3",{id:"compression"},"Compression"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.deflate")," \u2014 The ",(0,r.yg)("inlineCode",{parentName:"p"},"deflate")," transducer compresses a stream of bytes as specified by ",(0,r.yg)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc1951"},"RFC 1951"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream.ZStream\nimport zio.stream.Transducer.deflate\nimport zio.stream.compression.{CompressionLevel, CompressionStrategy, FlushMode}\n\ndef compressWithDeflate(clearText: ZStream[Any, Nothing, Byte]): ZStream[Any, Nothing, Byte] = {\n  val bufferSize: Int = 64 * 1024 // Internal buffer size. Few times bigger than upstream chunks should work well.\n  val noWrap: Boolean = false // For HTTP Content-Encoding should be false.\n  val level: CompressionLevel = CompressionLevel.DefaultCompression\n  val strategy: CompressionStrategy = CompressionStrategy.DefaultStrategy\n  val flushMode: FlushMode = FlushMode.NoFlush\n  clearText.transduce(deflate(bufferSize, noWrap, level, strategy, flushMode))\n}\n\ndef deflateWithDefaultParameters(clearText: ZStream[Any, Nothing, Byte]): ZStream[Any, Nothing, Byte] =\n  clearText.transduce(deflate())\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.gzip")," \u2014 The ",(0,r.yg)("inlineCode",{parentName:"p"},"gzip")," transducer compresses a stream of bytes as using ",(0,r.yg)("em",{parentName:"p"},"gzip")," method:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.stream.compression._\n\nZStream\n  .fromFile(Paths.get("file.txt"))\n  .transduce(\n    ZTransducer.gzip(\n      bufferSize = 64 * 1024,\n      level = CompressionLevel.DefaultCompression,\n      strategy = CompressionStrategy.DefaultStrategy,\n      flushMode = FlushMode.NoFlush\n    )\n  )\n  .run(\n    ZSink.fromFile(Paths.get("file.gz"))\n  )\n')),(0,r.yg)("h3",{id:"decompression"},"Decompression"),(0,r.yg)("p",null,"If we are reading ",(0,r.yg)("inlineCode",{parentName:"p"},"Content-Encoding: deflate"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Content-Encoding: gzip")," streams, or other such streams of compressed data, the following transducers can be helpful. Both decompression methods will fail with ",(0,r.yg)("inlineCode",{parentName:"p"},"CompressionException")," when input wasn't properly compressed:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.inflate")," \u2014 This transducer allows decompressing stream of ",(0,r.yg)("em",{parentName:"p"},"deflated")," inputs, according to ",(0,r.yg)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc1951"},"RFC 1951"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream.ZStream\nimport zio.stream.Transducer.{ gunzip, inflate }\nimport zio.stream.compression.CompressionException\n\ndef decompressDeflated(deflated: ZStream[Any, Nothing, Byte]): ZStream[Any, CompressionException, Byte] = {\n  val bufferSize: Int = 64 * 1024 // Internal buffer size. Few times bigger than upstream chunks should work well.\n  val noWrap: Boolean = false     // For HTTP Content-Encoding should be false.\n  deflated.transduce(inflate(bufferSize, noWrap))\n}\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZTransducer.gunzip")," \u2014 This transducer can be used to decompress stream of ",(0,r.yg)("em",{parentName:"p"},"gzipped")," inputs, according to ",(0,r.yg)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc1952"},"RFC 1952"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream.ZStream\nimport zio.stream.Transducer.{ gunzip, inflate }\nimport zio.stream.compression.CompressionException\n\ndef decompressGzipped(gzipped: ZStream[Any, Nothing, Byte]): ZStream[Any, CompressionException, Byte] = {\n  val bufferSize: Int = 64 * 1024 // Internal buffer size. Few times bigger than upstream chunks should work well.\n  gzipped.transduce(gunzip(bufferSize))\n}\n")),(0,r.yg)("h3",{id:"decoders"},"Decoders"),(0,r.yg)("p",null,"ZIO stream has a wide variety of transducers to decode chunks of bytes into strings:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Decoder"),(0,r.yg)("th",{parentName:"tr",align:null},"Input"),(0,r.yg)("th",{parentName:"tr",align:null},"Output"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZTransducer.utfDecode")),(0,r.yg)("td",{parentName:"tr",align:null},"Unicode bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZTransducer.utf8Decode")),(0,r.yg)("td",{parentName:"tr",align:null},"UTF-8 bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZTransducer.utf16Decode")),(0,r.yg)("td",{parentName:"tr",align:null},"UTF-16"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZTransducer.utf16BEDecode")),(0,r.yg)("td",{parentName:"tr",align:null},"UTF-16BE bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZTransducer.utf16LEDecode")),(0,r.yg)("td",{parentName:"tr",align:null},"UTF-16LE bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZTransducer.utf32Decode")),(0,r.yg)("td",{parentName:"tr",align:null},"UTF-32 bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZTransducer.utf32BEDecode")),(0,r.yg)("td",{parentName:"tr",align:null},"UTF-32BE bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZTransducer.utf32LEDecode")),(0,r.yg)("td",{parentName:"tr",align:null},"UTF-32LE bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZTransducer.usASCIIDecode")),(0,r.yg)("td",{parentName:"tr",align:null},"US-ASCII bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"String")))),(0,r.yg)("h2",{id:"operations"},"Operations"),(0,r.yg)("h3",{id:"filtering"},"Filtering"),(0,r.yg)("p",null,"Transducers have two types of filtering operations, the ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer#filter")," used for filtering outgoing elements and the ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer#filterInput")," is used for filtering incoming elements:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, -2, 0, 1, 3, -3, 4, 2, 0, 1, -3, 1, 1, 6)\n  .transduce(\n    ZTransducer\n      .collectAllN[Int](3)\n      .filterInput[Int](_ > 0)\n      .filter(_.sum > 5)\n  )\n// Output: Chunk(4,2,1), Chunk(1,1,6)\n")),(0,r.yg)("h3",{id:"input-transformation-mapping"},"Input Transformation (Mapping)"),(0,r.yg)("p",null,"To transform the ",(0,r.yg)("em",{parentName:"p"},"outputs")," of the transducer, we can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer#map")," combinator for the success channel, and the ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer#mapError")," combinator for the failure channel. Also, the ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer.mapChunks")," takes a function of type ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunk[O] => Chunk[O2]")," and transforms chunks emitted by the transducer."),(0,r.yg)("h3",{id:"output-transformation-contramap"},"Output Transformation (Contramap)"),(0,r.yg)("p",null,"To transform the ",(0,r.yg)("em",{parentName:"p"},"inputs")," of the transducer, we can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer#contramap")," combinator. It takes a map function of type ",(0,r.yg)("inlineCode",{parentName:"p"},"J => I")," and convert a ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer[R, E, I, O]")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer[R, E, J, O]"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"class ZTransducer[-R, +E, -I, +O] {\n  final def contramap[J](f: J => I): ZTransducer[R, E, J, O] = ???\n}\n")),(0,r.yg)("p",null,"Let's create an integer parser transducer using ",(0,r.yg)("inlineCode",{parentName:"p"},"ZTransducer.contramap"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val numbers: ZStream[Any, Nothing, Int] =\n  ZStream("1-2-3-4-5")\n    .mapConcat(_.split("-"))\n    .transduce(\n      ZTransducer.identity[Int].contramap[String](_.toInt)\n    )\n')),(0,r.yg)("h3",{id:"composing"},"Composing"),(0,r.yg)("p",null,"We can compose transducers in two ways:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Composing Two Transducers")," \u2014 One transducer can be composed with another transducer, resulting in a composite transducer:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val lines: ZStream[Blocking, Throwable, String] =\n  ZStream\n    .fromFile(Paths.get("file.txt"))\n    .transduce(\n      ZTransducer.utf8Decode >>> ZTransducer.splitLines\n    )\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Composing ZTransducer with ZSink")," \u2014 One transducer can be composed with a sink, resulting in a sink that processes elements by piping them through the transducer and piping the results into the sink:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val refine: ZIO[Blocking, Throwable, Long] =\n  ZStream\n    .fromFile(Paths.get("file.txt"))\n    .run(\n      ZTransducer.utf8Decode >>> ZTransducer.splitLines.filter(_.contains(\'\u20bf\')) >>>\n        ZSink\n          .fromFile(Paths.get("file.refined.txt"))\n          .contramapChunks[String](\n            _.flatMap(line => (line + System.lineSeparator()).getBytes())\n          )\n    )\n')))}d.isMDXComponent=!0}}]);