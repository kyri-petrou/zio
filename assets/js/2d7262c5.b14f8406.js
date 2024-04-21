"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[96246],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),y=a,g=u["".concat(s,".").concat(y)]||u[y]||c[y]||i;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},11245:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const i={id:"inverse",title:"Inverse"},o=void 0,l={unversionedId:"zio-prelude/functional-abstractions/concrete-types/inverse",id:"zio-prelude/functional-abstractions/concrete-types/inverse",title:"Inverse",description:"Inverse[A] describes a type that has a combine operator and also has an inverse operator that is the inverse of the combine operator.",source:"@site/docs/zio-prelude/functional-abstractions/concrete-types/inverse.md",sourceDirName:"zio-prelude/functional-abstractions/concrete-types",slug:"/zio-prelude/functional-abstractions/concrete-types/inverse",permalink:"/zio-prelude/functional-abstractions/concrete-types/inverse",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-prelude/functional-abstractions/concrete-types/inverse.md",tags:[],version:"current",frontMatter:{id:"inverse",title:"Inverse"},sidebar:"ecosystem-sidebar",previous:{title:"Identity",permalink:"/zio-prelude/functional-abstractions/concrete-types/identity"},next:{title:"Ord",permalink:"/zio-prelude/functional-abstractions/concrete-types/ord"}},s={},p=[],d={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Inverse[A]")," describes a type that has a ",(0,a.yg)("inlineCode",{parentName:"p"},"combine")," operator and also has an ",(0,a.yg)("inlineCode",{parentName:"p"},"inverse")," operator that is the inverse of the ",(0,a.yg)("inlineCode",{parentName:"p"},"combine")," operator."),(0,a.yg)("p",null,"Its signature is:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"trait Associative[A] {\n  def combine(left: => A, right: => A): A\n}\n\ntrait Identity[A] extends Associative[A] {\n  def identity: A\n}\n\ntrait Inverse[A] extends Identity[A] {\n  def inverse(left: => A, right: => A): A\n}\n")),(0,a.yg)("p",null,"For example, subtraction is an ",(0,a.yg)("inlineCode",{parentName:"p"},"inverse")," operator with addition being the ",(0,a.yg)("inlineCode",{parentName:"p"},"combine")," operator and ",(0,a.yg)("inlineCode",{parentName:"p"},"0")," being the ",(0,a.yg)("inlineCode",{parentName:"p"},"identity")," value."),(0,a.yg)("p",null,"While the ",(0,a.yg)("inlineCode",{parentName:"p"},"combine")," operator adds structure, the ",(0,a.yg)("inlineCode",{parentName:"p"},"inverse")," operator takes it away, undoing the structure that the ",(0,a.yg)("inlineCode",{parentName:"p"},"combine")," operator added. As a result, applying the ",(0,a.yg)("inlineCode",{parentName:"p"},"inverse")," operator to a value and itself takes away all the structure, returning the identity element."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"inverse(a, a) === identity\n")),(0,a.yg)("p",null,"It is important to note that ",(0,a.yg)("inlineCode",{parentName:"p"},"inverse")," is a binary operator rather than a unary operator."),(0,a.yg)("p",null,"When we think of an inverse with respect to integer addition it is tempting to think of the inverse as the unary operator of negation. This does indeed have the attractive property that the sum of any value and its inverse is zero."),(0,a.yg)("p",null,"However, this definition turns out to be quite limiting because it does not allow us to describe an inverse for types that do not contain negative values."),(0,a.yg)("p",null,"To see this, consider the case of natural numbers, represented by the ",(0,a.yg)("inlineCode",{parentName:"p"},"Natural")," new type in ZIO Prelude. By definition there are no negative natural numbers and thus we cannot define a unary inverse operator for ",(0,a.yg)("inlineCode",{parentName:"p"},"Natural"),"."),(0,a.yg)("p",null,"However, natural numbers have a well defined notion of subtraction so it feels like we are missing something here. The solution is to view ",(0,a.yg)("inlineCode",{parentName:"p"},"inverse")," as a binary operator."),(0,a.yg)("p",null,"We can then define an ",(0,a.yg)("inlineCode",{parentName:"p"},"Inverse")," instance for ",(0,a.yg)("inlineCode",{parentName:"p"},"Natural")," like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude._\nimport zio.prelude.newtypes._\n\nimplicit val NaturalInverse: Inverse[Natural] =\n  new Inverse[Natural] {\n    def combine(left: => Natural, right: => Natural): Natural =\n      Natural.plus(left, right)\n    val identity: Natural =\n      Natural.zero\n    def inverse(left: => Natural, right: => Natural): Natural =\n      Natural.minus(left, right)\n  }\n// NaturalInverse: Inverse[Natural] = repl.MdocSession$MdocApp0$$anon$1@6cf75cf6\n")),(0,a.yg)("p",null,"This also lets us define ",(0,a.yg)("inlineCode",{parentName:"p"},"Inverse")," instances for other data types that we would not otherwise be able to. For example, what is the inverse of ",(0,a.yg)("inlineCode",{parentName:"p"},"Set(1, 2, 3)"),"?"),(0,a.yg)("p",null,"Logically it is the set of all integers other than ",(0,a.yg)("inlineCode",{parentName:"p"},"1"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"2"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"3")," but we have no way of efficiently representing that because a ",(0,a.yg)("inlineCode",{parentName:"p"},"Set")," is a collection of concrete values. So we would not be able to define an ",(0,a.yg)("inlineCode",{parentName:"p"},"Inverse")," instance for ",(0,a.yg)("inlineCode",{parentName:"p"},"Set")," this way."),(0,a.yg)("p",null,"On the other hand, by defining ",(0,a.yg)("inlineCode",{parentName:"p"},"Inverse")," as a binary operator we can quite easily do so."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"implicit def SetInverse[A]: Inverse[Set[A]] =\n  new Inverse[Set[A]] {\n    def combine(left: => Set[A], right: => Set[A]): Set[A] =\n      left | right\n    val identity: Set[A] =\n      Set.empty\n    def inverse(left: => Set[A], right: => Set[A]): Set[A] =\n      left &~ right\n  }\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"inverse")," operator is set difference, with the ",(0,a.yg)("inlineCode",{parentName:"p"},"combine")," operator being set union and the empty set being the ",(0,a.yg)("inlineCode",{parentName:"p"},"identity")," value."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"inverse")," abstraction tends to be used less frequently than the other abstractions for combining values. In writing programs, we typically want to build up more complex values from simpler ones, even if it is just tearing down one data type to build another."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Inverse"),' abstraction is most useful when we want to generalize over the notion of "subtraction" for different types. For example, if we are working with maps we might be interested in defining an operation that lets us return the difference between one map and another.'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"def diff[A, B: Equal : Inverse](left: Map[A, B], right: Map[A, B]): Map[A, B] =\n  right.foldLeft(left) { case (map, (a, b)) =>\n    val b1 = Inverse[B].inverse(map.getOrElse(a, Identity[B].identity), b)\n    if (b1 === Identity[B].identity) map - a else map + (a -> b1)\n  }\n")),(0,a.yg)("p",null,"We look up the value for every key in the ",(0,a.yg)("inlineCode",{parentName:"p"},"right")," map in the ",(0,a.yg)("inlineCode",{parentName:"p"},"left")," map, returning the ",(0,a.yg)("inlineCode",{parentName:"p"},"identity")," value if it does not exist. We then compute the difference using the ",(0,a.yg)("inlineCode",{parentName:"p"},"inverse")," operator."),(0,a.yg)("p",null,"If the difference is equal to the ",(0,a.yg)("inlineCode",{parentName:"p"},"identity")," value we remove the key from the map. Otherwise we add it."),(0,a.yg)("p",null,"Let's see it in action."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'val peopleWhoOweMe: Map[String, Sum[Int]] =\n  Map("Alice" -> Sum(1000), "Bob" -> Sum(1000))\n// peopleWhoOweMe: Map[String, Sum[Int]] = Map("Alice" -> 1000, "Bob" -> 1000)\n\nval peopleIOwe: Map[String, Sum[Int]] =\n  Map("Alice" -> Sum(1000), "Carol" -> Sum(1000))\n// peopleIOwe: Map[String, Sum[Int]] = Map("Alice" -> 1000, "Carol" -> 1000)\n\nval myNetFinancialPosition: Map[String, Int] =\n  diff(peopleWhoOweMe, peopleIOwe)\n// myNetFinancialPosition: Map[String, Int] = Map(\n//   "Bob" -> 1000,\n//   "Carol" -> -1000\n// )\n\nval friends: Map[String, Set[String]] =\n  Map("Alice" -> Set("Bob", "Carol"), "Bob" -> Set("Alice", "Carol"))\n// friends: Map[String, Set[String]] = Map(\n//   "Alice" -> Set("Bob", "Carol"),\n//   "Bob" -> Set("Alice", "Carol")\n// )\n\nval unfriends: Map[String, Set[String]] =\n  Map("Alice" -> Set("Bob", "Carol"), "Bob" -> Set("Alice"))\n// unfriends: Map[String, Set[String]] = Map(\n//   "Alice" -> Set("Bob", "Carol"),\n//   "Bob" -> Set("Alice")\n// )\n\nval updatedFriends: Map[String, Set[String]] =\n  diff(friends, unfriends)\n// updatedFriends: Map[String, Set[String]] = Map("Bob" -> Set("Carol"))\n')),(0,a.yg)("p",null,"In the first example the two maps represent assets and liabilities. The difference between them is our net financial position with each of our counterparties."),(0,a.yg)("p",null,"In the second example the first map represents the friends of users of a social networking site and the second represents friend removals for each user that need to be processed. The difference between them is the updated friends for each user we should return."),(0,a.yg)("p",null,"Often you won't need to use the ",(0,a.yg)("inlineCode",{parentName:"p"},"Inverse")," abstraction directly. For example, functionality similar to the above is provided by the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZSet")," data type in ZIO Prelude."),(0,a.yg)("p",null,"However, when you do need to work some notion of subtraction ",(0,a.yg)("inlineCode",{parentName:"p"},"Inverse")," is here and will let you describe that shared structure in a composable way."))}c.isMDXComponent=!0}}]);