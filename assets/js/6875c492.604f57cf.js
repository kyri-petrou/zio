"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[84813],{47713:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(96540),l=a(21312),r=a(39022);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.A,{permalink:a,title:n.createElement(l.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&n.createElement(r.A,{permalink:s,title:n.createElement(l.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},33892:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(96540),l=a(7131),r=a(14477);function s(e){let{items:t,component:a=r.A}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.i,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},33069:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(96540),l=a(40870),r=a(21312),s=a(53465),o=a(69024),i=a(17559),g=a(75489),c=a(49359),m=a(47713),p=a(41463),u=a(33892);function d(e){const t=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,r.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=d(t);return n.createElement(n.Fragment,null,n.createElement(o.be,{title:a}),n.createElement(p.A,{tag:"blog_tags_posts"}))}function b(e){let{tag:t,items:a,sidebar:l,listMetadata:s}=e;const o=d(t);return n.createElement(c.A,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(g.A,{href:t.allTagsPath},n.createElement(r.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(u.A,{items:a}),n.createElement(m.A,{metadata:s}))}function E(e){return n.createElement(o.e3,{className:(0,l.A)(i.G.wrapper.blogPages,i.G.page.blogTagPostListPage)},n.createElement(h,e),n.createElement(b,e))}}}]);