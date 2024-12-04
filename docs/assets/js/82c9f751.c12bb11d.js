"use strict";(self.webpackChunkarc=self.webpackChunkarc||[]).push([[8650],{9089:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"dsl/extensions","title":"Extensions","description":"Extensions are functions that can be called throughout","source":"@site/docs/01-dsl/extensions.md","sourceDirName":"01-dsl","slug":"/dsl/extensions","permalink":"/arc/docs/dsl/extensions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Extensions"},"sidebar":"tutorialSidebar","previous":{"title":"Defining Functions","permalink":"/arc/docs/dsl/defining_functions"},"next":{"title":"Filtering Input/Output","permalink":"/arc/docs/dsl/filters"}}');var s=t(4848),i=t(8453);const o={title:"Extensions"},a=void 0,l={},c=[{value:"System and User Context",id:"system-and-user-context",level:2},{value:"Logging",id:"logging",level:2},{value:"LLM",id:"llm",level:2},{value:"Time, Date, Year",id:"time-date-year",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Extensions are functions that can be called throughout\nthe Arc Agent DSL and provide additional functionality, such as reading data, logging, and more."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Redaers"})," are also functions. They are described in the ",(0,s.jsx)(n.a,{href:"../readers",children:"Readers"})," section."]}),"\n",(0,s.jsx)(n.h2,{id:"system-and-user-context",children:"System and User Context"}),"\n",(0,s.jsxs)(n.p,{children:["Providing the LLM context is a very important part of Prompt Engineering.\nThe functions ",(0,s.jsx)(n.code,{children:"system"})," and ",(0,s.jsx)(n.code,{children:"userProfile"})," can be used to retrieve helpful information,\nsuch as the user's name or the default language."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"So where do these values come from?"})}),"\n",(0,s.jsxs)(n.p,{children:["Simply implement the corresponding interfaces, ",(0,s.jsx)(n.code,{children:"SystemContextProvider"})," and/or ",(0,s.jsx)(n.code,{children:"UserProfileProvider"}),"\nand provide them as beans to your Arc Agents."]}),"\n",(0,s.jsx)(n.p,{children:"If running Arc in Spring Boot, then these can be implemented as beans in your Spring Boot configuration."}),"\n",(0,s.jsxs)(n.p,{children:["If using the GraphQL package, then these values are taken from the GraphQL request,\nsee ",(0,s.jsx)(n.a,{href:"../spring/graphql",children:"GraphQL"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"interface SystemContextProvider {\n    fun provideSystem(): SystemContext\n}\n\ninterface UserProfileProvider {\n    fun provideProfile(): UserProfile\n}\n\n// Implement the interfaces and pass them to the agent\nagent.execute(conversation, setOf(systemContextProvider, userProfileProvider))\n      \n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'agent {\n    name = "weather"\n    description = "Agent that provides weather data."\n    prompt { \n        val customerName = userProfile("name", "")\n        val lang = system("defaultLanguage", "en")\n        """ Some system prompt """ \n    }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"logging",children:"Logging"}),"\n",(0,s.jsxs)(n.p,{children:["The logging functions, ",(0,s.jsx)(n.code,{children:"debug"}),", ",(0,s.jsx)(n.code,{children:"info"}),", ",(0,s.jsx)(n.code,{children:"warn"}),", and ",(0,s.jsx)(n.code,{children:"error"}),",\ncan be called within the Agent DSL to log messages."]}),"\n",(0,s.jsx)(n.p,{children:"Example using the warn function in a filter block."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'agent {\n    name = "weather"\n    description = "Agent that provides weather data."\n    prompt { """ Some system prompt """ }\n    filterInput {\n        if(inputMessage.content.contains("Waldo")) warn("Found Waldo")\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The functions use a the logger with the name ",(0,s.jsx)(n.code,{children:"ArcDSL"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The name of the logger is required, for example, when using Spring Boot.\nFor example, to configure the log level in the ",(0,s.jsx)(n.code,{children:"application.yml"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"level:\n    root: INFO\n    ArcDSL: DEBUG\n"})}),"\n",(0,s.jsx)(n.h2,{id:"llm",children:"LLM"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"llm"})," function calls an LLM model to generate a response.\nUnless specified otherwise, the default LLM model is used."]}),"\n",(0,s.jsx)(n.p,{children:"Example using the warn function in a filter block."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'agent {\n    name = "weather"\n    description = "Agent that provides weather data."\n    prompt { """ Some system prompt """ }\n    filterOutput {\n        outputMessage = llm("Generate a different response")\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"time-date-year",children:"Time, Date, Year"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"time"}),",",(0,s.jsx)(n.code,{children:"date"})," and ",(0,s.jsx)(n.code,{children:"year"})," functions can be used to provide the current date to the LLM."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'agent {\n    name = "weather"\n    description = "Agent that provides weather data."\n    prompt { """\n     The current time is ${time()}. // returns 12:00\n     The current date is ${date()}. // returns 28.09\n     The current year is ${year()}. // returns 2024\n     """ }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To ensure that the correct time zone is used, the ",(0,s.jsx)(n.code,{children:"zoneId"})," parameter can be set."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:' time(zoneId = "Europe/Berlin")\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(6540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);