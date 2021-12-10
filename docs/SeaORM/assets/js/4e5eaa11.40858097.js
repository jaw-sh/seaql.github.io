"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[4285],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=o,m=g["".concat(c,".").concat(d)]||g[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4955:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return g}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},c="Debug Log",s={unversionedId:"install-and-config/debug-log",id:"install-and-config/debug-log",isDocsHomePage:!1,title:"Debug Log",description:"SeaORM (with debug-print feature turned on) and SQLx both log debug messages via the log crate.",source:"@site/docs/02-install-and-config/04-debug-log.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/debug-log",permalink:"/SeaORM/docs/install-and-config/debug-log",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/02-install-and-config/04-debug-log.md",version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1631958644,formattedLastUpdatedAt:"9/18/2021",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connection Pool",permalink:"/SeaORM/docs/install-and-config/connection"},next:{title:"Using `sea-orm-cli`",permalink:"/SeaORM/docs/generate-entity/sea-orm-cli"}},u=[],p={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debug-log"},"Debug Log"),(0,a.kt)("p",null,"SeaORM (with ",(0,a.kt)("inlineCode",{parentName:"p"},"debug-print")," feature turned on) and SQLx both log debug messages via the ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/log"},(0,a.kt)("inlineCode",{parentName:"a"},"log"))," crate."),(0,a.kt)("p",null,"You need to choose one of the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/log/0.4.14/log/#available-logging-implementations"},"logging implementations")," to capture and view the debug log. To use ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/env_logger"},(0,a.kt)("inlineCode",{parentName:"a"},"env_logger")),", see the snippet below and a complete example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/examples/tokio/src/main.rs"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub async fn main() {\n    env_logger::builder()\n        .filter_level(log::LevelFilter::Debug)\n        .is_test(true)\n        .init();\n\n    // ...\n}\n")),(0,a.kt)("p",null,"To filter debug log from ",(0,a.kt)("inlineCode",{parentName:"p"},"sea_orm"),", you can:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ RUST_LOG=debug cargo run 2>&1 | grep sea_orm\n[2021-02-02T20:20:20Z DEBUG sea_orm::driver::sqlx_mysql] SELECT `cake`.`id`, `cake`.`name` FROM `cake` LIMIT 1\n")))}g.isMDXComponent=!0}}]);