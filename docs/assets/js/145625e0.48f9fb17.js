"use strict";(self.webpackChunkarc=self.webpackChunkarc||[]).push([[9213],{5478:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"manual_setup","title":"Manual Setup","description":"The Arc Framework can easily be setup with a few lines of code to run in any JVM application.","source":"@site/docs/00-manual_setup.md","sourceDirName":".","slug":"/manual_setup","permalink":"/arc/docs/manual_setup","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Manual Setup","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Component Overview","permalink":"/arc/docs/component_overview"},"next":{"title":"AI Clients","permalink":"/arc/docs/clients/"}}');var i=t(4848),a=t(8453);const s={title:"Manual Setup",sidebar_position:2},r=void 0,l={},c=[{value:"Loading Scripted Agents",id:"loading-scripted-agents",level:3},{value:"Hot Reloading Scripts",id:"hot-reloading-scripts",level:4},{value:"Executing Agents",id:"executing-agents",level:3},{value:"Defining Agents (without scripting)",id:"defining-agents-without-scripting",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The Arc Framework can easily be setup with a few lines of code to run in any JVM application."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: When using Spring Boot, it is recommended to use the ",(0,i.jsx)(n.a,{href:"/docs/spring",children:"Arc Spring Boot Starter"}),"\nso that all the following steps are done automatically."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Also: read the ",(0,i.jsx)(n.a,{href:"/docs/component_overview",children:"Component Overview"})," page for a better understanding of core components of the Framework."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The best way to understand how to set up the Arc Framework is to look at the following example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/lmos-ai/arc/tree/main/arc-runner/src/main/kotlin/server/ArcSetup.kt",children:"https://github.com/lmos-ai/arc/tree/main/arc-runner/src/main/kotlin/server/ArcSetup.kt"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"loading-scripted-agents",children:"Loading Scripted Agents"}),"\n",(0,i.jsx)(n.p,{children:"Arc Agent DSL scripts can also be loaded from a file, folder, or string."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val agentLoader: ScriptingAgentLoader\n\nagentLoader.loadAgents(File("my-agent.agent.kts"))\n\nagentLoader.loadAgentsFromFolder("agents")\n\nagentLoader.loadAgent("""\n  agent {\n     name = "simple-agent"\n     model = { "modelId" }\n     prompt {\n      "You are a helpful agent." \n     }\n  }\n""") \n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"hot-reloading-scripts",children:"Hot Reloading Scripts"}),"\n",(0,i.jsx)(n.p,{children:"Arc Agent DSL script files can be hot-loaded when modified."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'\nval scriptHotReload = ScriptHotReload(agentLoader, functionLoader, 3.seconds)\nscriptHotReload.start(File("./agents"))\n\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: In order for Agents Scripts to be correctly identified, their files must end with ",(0,i.jsx)(n.code,{children:".agent.kts"})," when containing Agents and\n",(0,i.jsx)(n.code,{children:".functions.kts"})," when containing Functions. This will enable an IDE, such as the IntelliJ IDE,\nto provide syntax highlighting and code completion."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Once loaded, Scripted Agents are no different from Agents loaded by other\nmechanisms."}),"\n",(0,i.jsx)(n.h3,{id:"executing-agents",children:"Executing Agents"}),"\n",(0,i.jsxs)(n.p,{children:["Once an Agent is loaded, it can be executed by passing a ",(0,i.jsx)(n.code,{children:"Conversation"})," object to the ",(0,i.jsx)(n.code,{children:"execute"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:' val agent = agentLoader.getAgentByName(agentName) as ChatAgent? ?: error("Agent not found!")\n val conversation = Conversation(User("anonymous")) + UserMessage("My question")\n val result = agent.execute(conversation).getOrNull()\n'})}),"\n",(0,i.jsx)(n.h3,{id:"defining-agents-without-scripting",children:"Defining Agents (without scripting)"}),"\n",(0,i.jsx)(n.p,{children:"Loading Agent from scripting files is a great way to develop and prototype Agents.\nHowever, the Agent DSL can also be used to create Agents programmatically."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'import ai.ancf.lmos.arc.agents.dsl.buildAgents\nimport ai.ancf.lmos.arc.agents.dsl.buildFunctions\n\n   val loadedAgents = buildAgents(agentFactory) {\n        agent {\n            name = "MyAgent"\n            description = "My agent"\n            tools {\n                +"get_content"\n            }\n            prompt {\n                """\n                 Always answer with \'Hello, World!\'. \n                """\n            }\n        }\n    }\n\n    val functions = buildFunctions(beanProvider) {\n        function(\n            name = "get_content",\n            description = "Returns content from the web.",\n            params = types(\n                string("url", "The URL of the content to fetch.")\n            )\n        ) { (url) ->\n            httpGet(url.toString())\n        }\n    }\n\n'})})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(6540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);