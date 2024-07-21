"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[58914],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>h});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(58168),i=(n(96540),n(15680));const o={id:"commutativeboth",title:"CommutativeBoth"},r=void 0,l={unversionedId:"zio-prelude/functional-abstractions/parameterized-types/commutativeboth",id:"zio-prelude/functional-abstractions/parameterized-types/commutativeboth",title:"CommutativeBoth",description:"CommutativeBoth[F] describes a way of combining two values F[A] and F[B] into a value F[(A, B)] that is commutative.",source:"@site/docs/zio-prelude/functional-abstractions/parameterized-types/commutativeboth.md",sourceDirName:"zio-prelude/functional-abstractions/parameterized-types",slug:"/zio-prelude/functional-abstractions/parameterized-types/commutativeboth",permalink:"/zio-prelude/functional-abstractions/parameterized-types/commutativeboth",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-prelude/functional-abstractions/parameterized-types/commutativeboth.md",tags:[],version:"current",frontMatter:{id:"commutativeboth",title:"CommutativeBoth"},sidebar:"ecosystem-sidebar",previous:{title:"AssociativeFlatten",permalink:"/zio-prelude/functional-abstractions/parameterized-types/associativeflatten"},next:{title:"CommutativeEither",permalink:"/zio-prelude/functional-abstractions/parameterized-types/commutativeeither"}},s={},p=[],m={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(c,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"CommutativeBoth[F]")," describes a way of combining two values ",(0,i.yg)("inlineCode",{parentName:"p"},"F[A]")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"F[B]")," into a value ",(0,i.yg)("inlineCode",{parentName:"p"},"F[(A, B)]")," that is commutative."),(0,i.yg)("p",null,"Its signature is:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"trait AssociativeBoth[F[_]] {\n  def both[A, B](fa: => F[A], fb: => F[B]): F[(A, B)]\n}\n\ntrait CommutativeBoth[F[_]] extends AssociativeBoth[F]\n")),(0,i.yg)("p",null,"If we import ",(0,i.yg)("inlineCode",{parentName:"p"},"zio.prelude._")," we can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"zipPar")," operator or its symbolic alias ",(0,i.yg)("inlineCode",{parentName:"p"},"<&>")," to combine any two values of a parameterized type for which a ",(0,i.yg)("inlineCode",{parentName:"p"},"CommutativeBoth")," instance exists in a commutative way."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"both")," operator must be commutative, so if we combine ",(0,i.yg)("inlineCode",{parentName:"p"},"fa")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"fb")," that must be the same as combining ",(0,i.yg)("inlineCode",{parentName:"p"},"fb")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"fa"),". After rearranging the order of tuples:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"fa <&> fb === fb <&> fa\n")),(0,i.yg)("p",null,"This is the same law as defined for the ",(0,i.yg)("inlineCode",{parentName:"p"},"Commutative")," functional abstraction for concrete types, just lifted into the context of parameterized types."),(0,i.yg)("p",null,"As the name of the ",(0,i.yg)("inlineCode",{parentName:"p"},"zipPar")," operator implies, the ",(0,i.yg)("inlineCode",{parentName:"p"},"both")," operator of the ",(0,i.yg)("inlineCode",{parentName:"p"},"CommutativeBoth")," abstraction corresponds to running the first value and running the second value in parallel."),(0,i.yg)("p",null,"We can see this because to produce a tuple ",(0,i.yg)("inlineCode",{parentName:"p"},"(A, B)")," we need to run both the left value and the right value and to do it in a way that order doesn't matter we need to run the left value and the right value in parallel. This doesn't necessarily mean we are actually forking separate fibers to run the left and right values but it does mean that we run the left and right values in a way that the result does not depend on the order in which they are run."),(0,i.yg)("p",null,"To get a better sense of what it means for a combining operation on parameterized types to be commutative, let's start with looking at why the ",(0,i.yg)("inlineCode",{parentName:"p"},"zip")," operator on ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," is not commutative."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport java.io.IOException\n\nval helloZIO: ZIO[Console, IOException, Unit] =\n  Console.printLine("Hello") <*> Console.printLine("ZIO")\n// helloZIO: ZIO[Console, IOException, Unit] = FlatMap(\n//   trace = "repl.MdocSession.MdocApp0.helloZIO(commutativeboth.md:29)",\n//   first = Stateful(\n//     trace = "repl.MdocSession.MdocApp0.helloZIO(commutativeboth.md:29)",\n//     onState = zio.FiberRef$unsafe$$anon$2$$Lambda$16955/0x0000000101e1a040@529729f5\n//   ),\n//   successK = zio.ZIO$$Lambda$16957/0x0000000101e1a840@6de09ff5\n// )\n\nval zioHello: ZIO[Console, IOException, Unit] =\n  Console.printLine("ZIO") <*> Console.printLine("Hello")\n// zioHello: ZIO[Console, IOException, Unit] = FlatMap(\n//   trace = "repl.MdocSession.MdocApp0.zioHello(commutativeboth.md:33)",\n//   first = Stateful(\n//     trace = "repl.MdocSession.MdocApp0.zioHello(commutativeboth.md:33)",\n//     onState = zio.FiberRef$unsafe$$anon$2$$Lambda$16955/0x0000000101e1a040@7e34d3c0\n//   ),\n//   successK = zio.ZIO$$Lambda$16957/0x0000000101e1a840@41bb742c\n// )\n')),(0,i.yg)("p",null,"If the ",(0,i.yg)("inlineCode",{parentName:"p"},"zip")," operator was commutative these two ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," workflows would be the same. But they obviously are not."),(0,i.yg)("p",null,"The first will print ",(0,i.yg)("inlineCode",{parentName:"p"},"Hello")," to the console on one line followed by ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," on the next whereas the second will print ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," to the console followed by ",(0,i.yg)("inlineCode",{parentName:"p"},"Hello"),". We can easily observe this by running the program ourselves or using a test implementation of the ",(0,i.yg)("inlineCode",{parentName:"p"},"Console")," service like ",(0,i.yg)("inlineCode",{parentName:"p"},"TestConsole")," from ZIO Test."),(0,i.yg)("p",null,"We can also see this in the context of failures."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val failZIO: ZIO[Console, IOException, Unit] =\n  ZIO.fail(new IOException("Fail")) <*> Console.printLine("ZIO")\n// failZIO: ZIO[Console, IOException, Unit] = FlatMap(\n//   trace = "repl.MdocSession.MdocApp0.failZIO(commutativeboth.md:40)",\n//   first = FlatMap(\n//     trace = "repl.MdocSession.MdocApp0.failZIO(commutativeboth.md:40)",\n//     first = GenerateStackTrace(\n//       trace = "repl.MdocSession.MdocApp0.failZIO(commutativeboth.md:40)"\n//     ),\n//     successK = zio.ZIO$$$Lambda$16959/0x0000000101e0a040@2a08356f\n//   ),\n//   successK = zio.ZIO$$Lambda$16957/0x0000000101e1a840@43fe08ec\n// )\n\nval zioFail: ZIO[Console, IOException, (Unit, Unit)] =\n  Console.printLine("ZIO") <*> ZIO.fail(new IOException("Fail"))\n// zioFail: ZIO[Console, IOException, (Unit, Unit)] = FlatMap(\n//   trace = "repl.MdocSession.MdocApp0.zioFail(commutativeboth.md:44)",\n//   first = Stateful(\n//     trace = "repl.MdocSession.MdocApp0.zioFail(commutativeboth.md:44)",\n//     onState = zio.FiberRef$unsafe$$anon$2$$Lambda$16955/0x0000000101e1a040@1b0c7980\n//   ),\n//   successK = zio.ZIO$$Lambda$16957/0x0000000101e1a840@10c74d9\n// )\n')),(0,i.yg)("p",null,"Again if the ",(0,i.yg)("inlineCode",{parentName:"p"},"zip")," operator was commutative these two ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," workflows should be the same but they are not. The first program will fail immediately and never print ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," to the console, whereas the second will print ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," to the console and then fail."),(0,i.yg)("p",null,"What would a commutative version of this operator be? It would have to run both the left and right values at the same time so they both had the same opportunity to run."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"zipPar")," operator on ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," does just this."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val helloZIOPar: ZIO[Console, IOException, Unit] =\n  Console.printLine("Hello") <&> Console.printLine("ZIO")\n// helloZIOPar: ZIO[Console, IOException, Unit] = DynamicNoBox(\n//   trace = "repl.MdocSession.MdocApp0.helloZIOPar(commutativeboth.md:51)",\n//   update = 1L,\n//   f = zio.ZIO$$$Lambda$17032/0x00000001030af840@6a449ada\n// )\n')),(0,i.yg)("p",null,"Now ",(0,i.yg)("inlineCode",{parentName:"p"},"Hello")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"World")," will be printed to the console at the same time. For any given execution one will appear before the other but they each have the same opportunity to appear first and both this and the version with the order reversed describe the same ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," workflow."),(0,i.yg)("p",null,"This interpretation of ",(0,i.yg)("inlineCode",{parentName:"p"},"zipPar")," as running the left and right values on separate fibers is the most natural one but not the only one. The left and right values can be run in parallel as long as the result of running one does not depend on the result of running the other and information from both has equal opportunity to be included in the result."),(0,i.yg)("p",null,"To see this, let's look at a slightly simplified version of the ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," data type from ZIO Prelude and how we can define the ",(0,i.yg)("inlineCode",{parentName:"p"},"zipPar")," operator for it."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.NonEmptyChunk\n\nsealed trait Validation[+E, +A] { self =>\n  import Validation._\n\n  def zipPar[E1 >: E, B](that: Validation[E1, B]): Validation[E1, (A, B)] =\n    (self, that) match {\n      case (Success(a), Success(b))    => Success((a, b))\n      case (Success(_), Failure(e1s))  => Failure(e1s)\n      case (Failure(es), Success(_))   => Failure(es)\n      case (Failure(es), Failure(e1s)) => Failure(es ++ e1s)\n    }\n}\n\nobject Validation {\n  case class Success[+A](value: A) extends Validation[Nothing, A]\n  case class Failure[+E](errors: NonEmptyChunk[E]) extends Validation[E, Nothing]\n}\n")),(0,i.yg)("p",null,"We are not forking any fibers here, but notice how in our implementation of ",(0,i.yg)("inlineCode",{parentName:"p"},"zipPar")," we are matching on the left and right sides at the same time and preserving the information from both errors in the case where both fail. As long as we implement equality in a way that does not depend on the order of errors, combining two ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values with ",(0,i.yg)("inlineCode",{parentName:"p"},"zipPar")," will always give the same result regardless of the order in which we combine them."),(0,i.yg)("p",null,"Another interpretation of what it means to run two values in parallel comes from collections. We can combine values from two collections in parallel by zipping them together pairwise."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude._\n\nimplicit val ListCommutativeBoth: CommutativeBoth[List] =\n  new CommutativeBoth[List] {\n    def both[A, B](as: => List[A], bs: => List[B]): List[(A, B)] =\n      as.zip(bs)\n  }\n// ListCommutativeBoth: CommutativeBoth[List] = repl.MdocSession$MdocApp0$$anon$1@594e5616\n")),(0,i.yg)("p",null,"Again we are not forking any fibers here but values from the left list and the right list have an equal opportunity to be included in the zipped list."),(0,i.yg)("p",null,"We can see this if we zip together two lists of different lengths."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"val left: List[Int] =\n  List(1, 2, 3)\n// left: List[Int] = List(1, 2, 3)\n\nval right: List[Int] =\n  List(4, 5, 6, 7, 8)\n// right: List[Int] = List(4, 5, 6, 7, 8)\n\nval leftRight: List[(Int, Int)] =\n  left.zip(right)\n// leftRight: List[(Int, Int)] = List((1, 4), (2, 5), (3, 6))\n\nval rightLeft: List[(Int, Int)] =\n  right.zip(left)\n// rightLeft: List[(Int, Int)] = List((4, 1), (5, 2), (6, 3))\n")),(0,i.yg)("p",null,"The zipped lists are identical after rearranging the order of tuples."),(0,i.yg)("p",null,"Some instances of ",(0,i.yg)("inlineCode",{parentName:"p"},"CommutativeBoth")," actually combine these interpretations. For example the ",(0,i.yg)("inlineCode",{parentName:"p"},"CommutativeBoth")," instance for ",(0,i.yg)("inlineCode",{parentName:"p"},"ZStream")," is implemented in terms of the ",(0,i.yg)("inlineCode",{parentName:"p"},"zip")," operator on ",(0,i.yg)("inlineCode",{parentName:"p"},"ZStream"),", which creates a new stream that pulls values from the left and the right streams pairwise, evaluating effects in the left and right streams on separate fibers."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream._\n\ndef both[R, E, A, B](left: => ZStream[R, E, A], right: ZStream[R, E, B]): ZStream[R, E, (A, B)] =\n  left.zip(right)\n")),(0,i.yg)("p",null,"Just like the ",(0,i.yg)("inlineCode",{parentName:"p"},"AssociativeBoth")," abstraction, ",(0,i.yg)("inlineCode",{parentName:"p"},"CommutativeBoth")," is not limited to covariant types. For example we could send inputs to multiple sinks in parallel, having each sink run on a separate fiber."),(0,i.yg)("p",null,"When the parameterized type is covariant the ",(0,i.yg)("inlineCode",{parentName:"p"},"zipWithPar")," operator is also defined on it."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"def zipWithPar[F[+_]: CommutativeBoth : Covariant, A, B, C](\n  fa: => F[A],\n  fb: => F[B]\n)(f: (A, B) => C): F[C] =\n  fa.zipPar(fb).map(f.tupled)\n")),(0,i.yg)("p",null,"This is just like the ",(0,i.yg)("inlineCode",{parentName:"p"},"zipWith")," operator defined on data types that have an ",(0,i.yg)("inlineCode",{parentName:"p"},"AssociativeBoth")," instance except it runs the left and right values in parallel instead of running the left value and then the right value. It is very useful when you want to do two things in parallel and then combine the results."),(0,i.yg)("p",null,"A version of this is available for contravariant data types called ",(0,i.yg)("inlineCode",{parentName:"p"},"bothWithPar"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"def bothWithPar[F[-_]: CommutativeBoth : Contravariant, A, B, C](\n  fa: => F[A],\n  fb: => F[B]\n)(f: C => (A, B)): F[C] =\n  fa.zipPar(fb).contramap(f)\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"bothWithPar")," operator splits a data type ",(0,i.yg)("inlineCode",{parentName:"p"},"C")," up into two parts ",(0,i.yg)("inlineCode",{parentName:"p"},"A")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"B"),", running the left value with ",(0,i.yg)("inlineCode",{parentName:"p"},"A")," and the right value with ",(0,i.yg)("inlineCode",{parentName:"p"},"B")," in parallel."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"CommutativeBoth")," functional abstraction, like the ",(0,i.yg)("inlineCode",{parentName:"p"},"AssociativeBoth")," abstraction, describes a basic way of combining two data types, this time by running them in parallel instead of running the left one and then the right one. The ",(0,i.yg)("inlineCode",{parentName:"p"},"zipPar")," operator, or more domain specific names for it for certain basic types, is also very practically useful and we saw that it corresponded to common operators on these data types that we were probably already familiar with."),(0,i.yg)("p",null,"For this reason, however, the ",(0,i.yg)("inlineCode",{parentName:"p"},"CommutativeBoth")," abstraction may be less useful if you are working with data types from ZIO or the Scala standard library. They generally already implement this functionality directly, for example in the ",(0,i.yg)("inlineCode",{parentName:"p"},"zipPar")," operator on ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," and the ",(0,i.yg)("inlineCode",{parentName:"p"},"zip")," operator on ",(0,i.yg)("inlineCode",{parentName:"p"},"ZStream"),"."),(0,i.yg)("p",null,"This abstraction is more likely to be useful when you are defining your own data type. If your data type supports a way of combining that is commutative, such as the ones we have discussed here, then defining a ",(0,i.yg)("inlineCode",{parentName:"p"},"CommutativeBoth")," instance will let you express that and work with other operators that are defined on data types with ",(0,i.yg)("inlineCode",{parentName:"p"},"CommutativeBoth")," instances."),(0,i.yg)("p",null,"Finally, this abstraction is likely to be valuable for those writing generic code to describe running values in parallel. As with the ",(0,i.yg)("inlineCode",{parentName:"p"},"AssociativeBoth")," abstraction the ability to generalize over covariant, contravariant, and invariant data types is likely to be particularly valuable here."))}d.isMDXComponent=!0}}]);