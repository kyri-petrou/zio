"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[38722],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>h});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return a?t.createElement(h,o(o({ref:n},p),{},{components:a})):t.createElement(h,o({ref:n},p))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},35611:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=a(58168),r=(a(96540),a(15680));const i={id:"validation",title:"Validation"},o=void 0,s={unversionedId:"zio-schema/operations/validation",id:"zio-schema/operations/validation",title:"Validation",description:"When we create a schema for a type, we can also specify validation rules for the type. Validations are a way to ensure that the data conforms to certain rules.",source:"@site/docs/zio-schema/operations/validating-types.md",sourceDirName:"zio-schema/operations",slug:"/zio-schema/operations/validation",permalink:"/zio-schema/operations/validation",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/operations/validating-types.md",tags:[],version:"current",frontMatter:{id:"validation",title:"Validation"},sidebar:"ecosystem-sidebar",previous:{title:"Transforming Schemas",permalink:"/zio-schema/operations/transforming-schemas"},next:{title:"Diffing and Patching",permalink:"/zio-schema/operations/diffing-and-patching"}},l={},c=[],p={toc:c},m="wrapper";function d(e){let{components:n,...a}=e;return(0,r.yg)(m,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"When we create a schema for a type, we can also specify validation rules for the type. Validations are a way to ensure that the data conforms to certain rules."),(0,r.yg)("p",null,"Using ",(0,r.yg)("inlineCode",{parentName:"p"},"Schema#validate")," we can validate a value against the validation rules of its schema:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"trait Schema[A] {\n  def validate(value: A)(implicit schema: Schema[A]): Chunk[ValidationError]\n}\n")),(0,r.yg)("p",null,"Let's write a schema for the ",(0,r.yg)("inlineCode",{parentName:"p"},"Person")," case class and add validation rules to it. For example, we can specify that the ",(0,r.yg)("inlineCode",{parentName:"p"},"age")," field must be greater than 0 and less than 120 and the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," field must be non-empty:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.Chunk\nimport zio.schema._\nimport zio.schema.Schema._\nimport zio.schema.validation.Validation\n\ncase class Person(name: String, age: Int)\n\nobject Person {\n  implicit val schema: Schema[Person] = CaseClass2(\n    id0 = TypeId.fromTypeName("Person"),\n    field01 = Schema.Field(\n      name0 = "name",\n      schema0 = Schema[String],\n      validation0 = Validation.minLength(1),\n      get0 = (p: Person) => p.name,\n      set0 = { (p: Person, s: String) => p.copy(name = s) }\n    ),\n    field02 = Schema.Field(\n      name0 = "age",\n      schema0 = Schema[Int],\n      validation0 = Validation.between(0, 120),\n      get0 = (p: Person) => p.age,\n      set0 = { (p: Person, age: Int) => p.copy(age = age) }\n    ),\n    construct0 = (name, age) => Person(name, age),\n    annotations0 = Chunk.empty\n  )\n}\n')),(0,r.yg)("p",null,"Both fields of the ",(0,r.yg)("inlineCode",{parentName:"p"},"Person")," case class have validation rules. Let's see what happens when we try to validate a ",(0,r.yg)("inlineCode",{parentName:"p"},"Person")," value that does not conform to the validation rules:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.schema.validation._\n\nval result: Chunk[ValidationError] = Person.schema.validate(Person("John Doe", 130))\nprintln(result)\n')),(0,r.yg)("p",null,"Due to the failed validation rules, a list of the specific rules that were not met is generated. In this case, it indicates that the age is not equal, or less than 120."))}d.isMDXComponent=!0}}]);