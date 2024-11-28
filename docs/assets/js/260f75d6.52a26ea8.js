"use strict";(self.webpackChunkarc=self.webpackChunkarc||[]).push([[9679],{8105:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"packages","title":"Packages","description":"Basic Packages","source":"@site/docs/09-packages.md","sourceDirName":".","slug":"/packages","permalink":"/arc/docs/packages","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"Packages"},"sidebar":"tutorialSidebar","previous":{"title":"Memory","permalink":"/arc/docs/memory/"},"next":{"title":"Semantic Router","permalink":"/arc/docs/semantic_router"}}');var s=a(4848),r=a(8453);const t={title:"Packages"},c=void 0,o={},l=[{value:"Basic Packages",id:"basic-packages",level:2},{value:"AI Clients",id:"ai-clients",level:2},{value:"Spring Boot Packages",id:"spring-boot-packages",level:2},{value:"GraphQL",id:"graphql",level:2},{value:"Extensions",id:"extensions",level:2}];function d(e){const n={code:"code",h2:"h2",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"basic-packages",children:"Basic Packages"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kts",children:'val arcVersion = "0.111.0"\nimplementation("ai.ancf.lmos:arc-scripting:$arcVersion")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ai-clients",children:"AI Clients"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kts",children:'// Add the Azure OpenAI client library for Java\nimplementation("ai.ancf.lmos:arc-azure-client:$arcVersion")\n\n// Add the langchain4j dependencies for the AIClient that should be used.\nval langchain4jVersion = "0.36.2"\nimplementation("dev.langchain4j:langchain4j-bedrock:$langchain4jVersion")\nimplementation("dev.langchain4j:langchain4j-google-ai-gemini:$langchain4jVersion")\nimplementation("dev.langchain4j:langchain4j-ollama:$langchain4jVersion")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"spring-boot-packages",children:"Spring Boot Packages"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kts",children:'implementation("ai.ancf.lmos:arc-spring-boot-starter:$arcVersion")\nimplementation("ai.ancf.lmos:arc-memory-mongo-spring-boot-starter:$arcVersion")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"graphql",children:"GraphQL"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kts",children:'implementation("ai.ancf.lmos:arc-api:$arcVersion")\nimplementation("ai.ancf.lmos:arc-graphql-spring-boot-starter:$arcVersion")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"extensions",children:"Extensions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kts",children:'implementation("ai.ancf.lmos:arc-reader-pdf:$arcVersion")\nimplementation("ai.ancf.lmos:arc-reader-html:$arcVersion")\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>c});var i=a(6540);const s={},r=i.createContext(s);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);