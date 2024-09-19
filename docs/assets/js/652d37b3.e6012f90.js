"use strict";(self.webpackChunkarc=self.webpackChunkarc||[]).push([[6609],{6637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=r(4848),n=r(8453);const i={title:"Memory"},s=void 0,d={id:"memory/index",title:"Memory",description:"This page lists Memory",source:"@site/docs/07-memory/index.md",sourceDirName:"07-memory",slug:"/memory/",permalink:"/arc/docs/memory/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Memory"},sidebar:"tutorialSidebar",previous:{title:"Eventing",permalink:"/arc/docs/eventing/"},next:{title:"Packages",permalink:"/arc/docs/packages"}},a={},c=[{value:"In-Memory Memory",id:"in-memory-memory",level:2},{value:"Mongo Memory",id:"mongo-memory",level:2}];function m(e){const t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"This page lists Memory"}),"\n",(0,o.jsx)(t.h2,{id:"in-memory-memory",children:"In-Memory Memory"}),"\n",(0,o.jsxs)(t.p,{children:["The Arc Agent Framework provides a default in-memory implementation of the ",(0,o.jsx)(t.code,{children:"Memory"})," interface.\nThe implementation is automatically configured when the Arc Spring Boot Starter is used\nand no other implementation of the ",(0,o.jsx)(t.code,{children:"Memory"})," interface is provided."]}),"\n",(0,o.jsx)(t.p,{children:"This implementation is good for getting started, but it is not recommended for production use."}),"\n",(0,o.jsx)(t.h2,{id:"mongo-memory",children:"Mongo Memory"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Package Name"}),(0,o.jsx)(t.th,{children:"Type"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"io.github.lmos-ai.arc:arc-memory-mongo-spring-boot-starter:$arcVersion"}),(0,o.jsx)(t.td,{children:"Spring Boot Starter"})]})})]}),"\n",(0,o.jsxs)(t.p,{children:["The Mongo Memory implementation uses the ",(0,o.jsx)(t.a,{href:"https://www.mongodb.com/",children:"Mongo Database"})," to store data."]}),"\n",(0,o.jsx)(t.p,{children:"The module is provided as a Spring Boot Starter and under the hood uses Spring Data to access\nthe Mongo Database."}),"\n",(0,o.jsxs)(t.p,{children:["A time-to-live (TTL) index is created for ",(0,o.jsx)(t.code,{children:"short-term"})," memory entries to automatically remove\nthem after a period of time."]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Configuration"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Default"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"arc.memory.short-term-ttl"}),(0,o.jsx)(t.td,{children:"The time-to-live for short-term memory entries."}),(0,o.jsx)(t.td,{children:"Duration"}),(0,o.jsx)(t.td,{children:"PT3H (3 hours)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"spring.data.mongodb.uri"}),(0,o.jsxs)(t.td,{children:['The uri of the Mongo Database. Example, "mongodb://admin',":password",'@localhost:27017/memory"']}),(0,o.jsx)(t.td,{children:"URI"}),(0,o.jsx)(t.td,{children:"localhost"})]})]})]}),"\n",(0,o.jsxs)(t.p,{children:["For more details on how to configure a Mongo Database with Spring, please refer to\n",(0,o.jsx)(t.a,{href:"https://docs.spring.io/spring-data/mongodb/reference/mongodb.html",children:"https://docs.spring.io/spring-data/mongodb/reference/mongodb.html"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>d});var o=r(6540);const n={},i=o.createContext(n);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);