(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{442:function(s,t,e){s.exports=e.p+"assets/img/composition.ce78fa55.png"},537:function(s,t,e){"use strict";e.r(t);var a=e(1),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计"}},[s._v("#")]),s._v(" 设计")]),s._v(" "),a("h2",{attrs:{id:"源码目录设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码目录设计"}},[s._v("#")]),s._v(" 源码目录设计")]),s._v(" "),a("p",[a("code",[s._v("Vue.js")]),s._v("源码目录设计如下：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- dist              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- flow              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# flow的类型声明，类似于TypeScipt")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- packages          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 衍生的npm包，例如vue-server-renderer和vue-template-compiler")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- scripts           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建配置和构建脚本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端到端测试和单元测试用例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- src               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 源代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- compiler      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译相关代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- core          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 核心代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- platforms     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 跨平台")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- server        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端渲染")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- sfc           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .vue文件解析逻辑")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- shared        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 工具函数/共享代码")]),s._v("\n")])])]),a("p",[s._v("对以上目录简要做如下介绍：")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("dist")]),s._v("："),a("code",[s._v("rollup")]),s._v("构建目录，里面存放了所有"),a("code",[s._v("Vue")]),s._v("构建后不同版本的文件。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("flow")]),s._v("：它是Facebook出品的"),a("code",[s._v("JavaScript")]),s._v("静态类型检查工具，早期"),a("code",[s._v("Vue.js")]),s._v("选择了"),a("code",[s._v("flow")]),s._v("而不是现在的"),a("code",[s._v("TypeScript")]),s._v("来做静态类型检查，而在最新的"),a("code",[s._v("Vue3.0")]),s._v("版本则选择使用"),a("code",[s._v("TypeScript")]),s._v("来重写。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("packages")]),s._v("："),a("code",[s._v("Vue.js")]),s._v("衍生的其它"),a("code",[s._v("npm")]),s._v("包，它们在"),a("code",[s._v("Vue")]),s._v("构建时自动从源码中生成并且始终和"),a("code",[s._v("Vue.js")]),s._v("保持相同的版本，主要是"),a("code",[s._v("vue-server-renderer")]),s._v("和"),a("code",[s._v("vue-template-compiler")]),s._v("这两个包，其中最后一个包在我们使用脚手架生成项目，也就是使用"),a("code",[s._v(".vue")]),s._v("文件开发"),a("code",[s._v("Vue")]),s._v("项目时会使用到这个包。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("scripts")]),s._v("："),a("code",[s._v("rollup")]),s._v("构建配置和构建脚本，"),a("code",[s._v("Vue.js")]),s._v("能够通过不同的环境构建不同的版本的秘密都在这个目录下。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("test")]),s._v("："),a("code",[s._v("Vue.js")]),s._v("测试目录，自动化测试对于一个开源库来说是至关重要的，测试覆盖率在一定程度上是衡量一个库质量的一个重要指标。测试用例无论对于开发还是阅读源码，都是有很大益处的，其中通过测试用例去阅读"),a("code",[s._v("Vue")]),s._v("源码是普遍认为可行的一种方式。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("src/compiler")]),s._v("：此目录包含了与"),a("code",[s._v("Vue.js")]),s._v("编译相关的代码，它包括：模板编译成 AST 抽象语法树、AST 抽象语法树优化和代码生成相关代码。编译的工作可以在构建时用"),a("code",[s._v("runtime-only")]),s._v("版本，借助"),a("code",[s._v("webpack")]),s._v("和"),a("code",[s._v("vue-loader")]),s._v("等工具或插件来进行编译。也可以在运行时，使用包含构建功能的"),a("code",[s._v("runtime + compiler")]),s._v("版本。显然，编译是一项比较消耗性能的工作，所以我们日常的开发中，更推荐使用"),a("code",[s._v("runtime-only")]),s._v("的版本开发(体积也更小)，也就是通过"),a("code",[s._v(".vue")]),s._v("文件的形式开发。")])])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 需要使用带编译的版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello,world'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<div>{{msg}}</div>'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不需要使用带编译的版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello,world'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("ul",[a("li",[a("code",[s._v("src/core")]),s._v("：此目录包含了"),a("code",[s._v("Vue.js")]),s._v("的核心代码，包括：内置组件"),a("code",[s._v("keep-alive")]),s._v("、全局 API("),a("code",[s._v("Vue.use")]),s._v("、"),a("code",[s._v("Vue.mixin")]),s._v("和"),a("code",[s._v("Vue.extend")]),s._v("等)、实例化、响应式相关、虚拟 DOM 和工具函数等。")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- core\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- components      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内助组件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- global-api      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局API")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- instance        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实例化")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- observer        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 响应式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- util            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 工具函数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- vdom            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 虚拟DOM")]),s._v("\n")])])]),a("ul",[a("li",[a("code",[s._v("src/platform")]),s._v("："),a("code",[s._v("Vue2.0")]),s._v("提供了跨平台的能力，在"),a("code",[s._v("React")]),s._v("中有"),a("code",[s._v("React Native")]),s._v("跨平台客户端，而在"),a("code",[s._v("Vue2.0")]),s._v("中其对应的跨平台就是"),a("code",[s._v("Weex")]),s._v("。")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" platform\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" web      # web浏览器端\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" weex     # native客户端\n")])])]),a("ul",[a("li",[a("p",[a("code",[s._v("src/server")]),s._v(": "),a("code",[s._v("Vue2.0")]),s._v("提供服务端渲染的能力，所有跟服务端渲染相关的代码都在"),a("code",[s._v("server")]),s._v("目录下，此部分代码是运行在服务端，而非 Web 浏览器端。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("src/sfc")]),s._v("：此目录的主要作用是如何把"),a("code",[s._v(".vue")]),s._v("文件解析成一个"),a("code",[s._v("JavaScript")]),s._v("对象。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("src/shared")]),s._v("：此目录下存放了一些在 Web 浏览器端和服务端都会用到的共享代码。")])])]),s._v(" "),a("h2",{attrs:{id:"架构设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构设计"}},[s._v("#")]),s._v(" 架构设计")]),s._v(" "),a("p",[s._v("我们通过以上目录结构可以很容易的发现，"),a("code",[s._v("Vue.js")]),s._v("整体分为三个部分："),a("strong",[s._v("核心代码")]),s._v("、"),a("strong",[s._v("跨平台相关")]),s._v("和"),a("strong",[s._v("公共工具函数")]),s._v("。")]),s._v(" "),a("p",[s._v("同时其架构是分层的，最底层是一个构造函数(普通的函数)，最上层是一个入口，也就是将一个完整的构造函数导出给用户使用。在中间层，我们需要逐渐添加一些方法和属性，主要是原型"),a("code",[s._v("prototype")]),s._v("相关和全局API相关。")]),s._v(" "),a("p",[a("img",{attrs:{src:e(442),alt:"Vue架构设计"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);