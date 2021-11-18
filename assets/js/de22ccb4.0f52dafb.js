"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1602,1618],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>d,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>s});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){return function(t){var n=c(t.components);return r.createElement(e,o({},t,{components:n}))}},c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,g=s["".concat(a,".").concat(d)]||s[d]||f[d]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},52840:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>u,metadata:()=>s,toc:()=>c,default:()=>f});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=n(44996),l=["components"],p={},u=void 0,s={type:"mdx",permalink:"/flipper/docs/plugins/navigation/overview",source:"@site/src/embedded-pages/docs/plugins/navigation/overview.mdx"},c=[],d={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The Navigation Plugin allows users to quickly navigate to deep links within their mobile applications to help speed up the development cycle. The plugin is designed to integrate easily within your existing navigation framework or as a stand alone tool. Users can bookmark deep links and jump to them via the button in the tool bar."),(0,o.mdx)("img",{alt:"Navigation Plugin Button",src:(0,a.default)("img/navigation-plugin-1.png")}),(0,o.mdx)("p",null,"Navigation events within the app can also be logged to Flipper. This allows the user to view past navigation events and jump straight to them, or export the navigation events for reporting."),(0,o.mdx)("img",{alt:"Navigation Plugin UI",src:(0,a.default)("img/navigation-plugin-2.png")}))}f.isMDXComponent=!0},13919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>i})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>o,default:()=>a});var r=n(52263),i=n(13919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,l=void 0!==a&&a,p=o.absolute,u=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},49159:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>u,metadata:()=>s,toc:()=>c,default:()=>f});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=n(52840),l=["components"],p={id:"navigation",title:"Navigation Plugin",sidebar_label:"Navigation",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/navigation/docs/overview.mdx"},u=void 0,s={unversionedId:"features/plugins/navigation",id:"features/plugins/navigation",isDocsHomePage:!1,title:"Navigation Plugin",description:"\u2192 See setup instructions for the Navigation plugin",source:"@site/../docs/features/plugins/navigation.mdx",sourceDirName:"features/plugins",slug:"/features/plugins/navigation",permalink:"/flipper/docs/features/plugins/navigation",editUrl:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/navigation/docs/overview.mdx",tags:[],version:"current",frontMatter:{id:"navigation",title:"Navigation Plugin",sidebar_label:"Navigation",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/navigation/docs/overview.mdx"},sidebar:"features",previous:{title:"LeakCanary",permalink:"/flipper/docs/features/plugins/leak-canary"},next:{title:"Network",permalink:"/flipper/docs/features/plugins/network"}},c=[],d={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"\u2192 ",(0,o.mdx)("a",{parentName:"p",href:"/flipper/docs/setup/plugins/navigation"},"See setup instructions for the Navigation plugin")),(0,o.mdx)(a.default,{mdxType:"Article"}))}f.isMDXComponent=!0}}]);