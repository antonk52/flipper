"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3626],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>l,withMDXComponents:()=>c});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){return function(t){var r=l(t.components);return n.createElement(e,o({},t,{components:r}))}},l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=l(r),u=i,x=c["".concat(a,".").concat(u)]||c[u]||m[u]||o;return r?n.createElement(x,p(p({ref:t},s),{},{components:r})):n.createElement(x,p({ref:t},s))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=x;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}x.displayName="MDXCreateElement"},13919:(e,t,r)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>i})},44996:(e,t,r)=>{r.r(t),r.d(t,{useBaseUrlUtils:()=>o,default:()=>a});var n=r(52263),i=r(13919);function o(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,p=void 0!==a&&a,d=o.absolute,s=void 0!==d&&d;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(p)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+c:c}(o,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},25431:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>d,contentTitle:()=>s,metadata:()=>c,toc:()=>l,default:()=>m});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=r(44996),p=["components"],d={id:"layout-inspector",title:"Extending Layout Inspector"},s=void 0,c={unversionedId:"extending/layout-inspector",id:"extending/layout-inspector",isDocsHomePage:!1,title:"Extending Layout Inspector",description:"The Layout Inspector plugin can be extended to support new kinds of UI components. You can also extend it to customize the data made available in the sidebar.",source:"@site/../docs/extending/layout-inspector.mdx",sourceDirName:"extending",slug:"/extending/layout-inspector",permalink:"/flipper/docs/extending/layout-inspector",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/extending/layout-inspector.mdx",tags:[],version:"current",frontMatter:{id:"layout-inspector",title:"Extending Layout Inspector"},sidebar:"extending",previous:{title:"Client Plugin Lifecycle",permalink:"/flipper/docs/extending/client-plugin-lifecycle"}},l=[{value:"Android",id:"android",children:[{value:"Node Descriptor",id:"node-descriptor",children:[],level:3},{value:"Register a Descriptor",id:"register-a-descriptor",children:[],level:3},{value:"Extending an existing Descriptor",id:"extending-an-existing-descriptor",children:[],level:3}],level:2},{value:"iOS",id:"ios",children:[{value:"SKNodeDescriptor",id:"sknodedescriptor",children:[],level:3},{value:"Register a Descriptor",id:"register-a-descriptor-1",children:[],level:3},{value:"Extending an existing Descriptor",id:"extending-an-existing-descriptor-1",children:[],level:3},{value:"Subdescriptors",id:"subdescriptors",children:[],level:3}],level:2}],u={toc:l};function m(e){var t=e.components,r=(0,i.Z)(e,p);return(0,o.mdx)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The Layout Inspector plugin can be extended to support new kinds of UI components. You can also extend it to customize the data made available in the sidebar.\nDepending on whether you want to expose new data on Android or iOS, there are different interfaces you can use."),(0,o.mdx)("img",{alt:"Layout Inspector",src:(0,a.default)("img/layoutinspector.png")}),(0,o.mdx)("h2",{id:"android"},"Android"),(0,o.mdx)("h3",{id:"node-descriptor"},"Node Descriptor"),(0,o.mdx)("p",null,"To expose an object to the Layout Inspector in Flipper you have to implement a ",(0,o.mdx)("inlineCode",{parentName:"p"},"NodeDescriptor")," which describes your object. For example the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ViewDescriptor")," describes ",(0,o.mdx)("inlineCode",{parentName:"p"},"View")," objects and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"FragmentDescriptor")," describe ",(0,o.mdx)("inlineCode",{parentName:"p"},"Fragment")," instances. These descriptors have a set of callbacks used to expose children and data associated with the object they describe. See ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/b0d2983bd440dc41ec67089e11acd394e6566b8f/android/src/main/java/com/facebook/flipper/plugins/inspector/NodeDescriptor.java"},(0,o.mdx)("inlineCode",{parentName:"a"},"NodeDescriptor"))," for the full API."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"NodeDescriptor")," implementations should not subclass other ",(0,o.mdx)("inlineCode",{parentName:"p"},"NodeDescriptor")," implementations. Instead to re-use existing behavior from a more generic descriptor, you should prefer to use delegate."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Don't")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"class ViewGroupDescriptor extends ViewDescriptor<ViewGroup> {\n  public String getName(ViewGroup node) {\n    return super.getName(node);\n  }\n}\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Do")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"class ViewGroupDescriptor extends NodeDescriptor<ViewGroup> {\n  public String getName(ViewGroup node) {\n    NodeDescriptor descriptor = descriptorForClass(View.class);\n    return descriptor.getName(node);\n  }\n}\n")),(0,o.mdx)("h3",{id:"register-a-descriptor"},"Register a Descriptor"),(0,o.mdx)("p",null,"Register your descriptor in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"DescriptorMapping")," used to instantiate the ",(0,o.mdx)("inlineCode",{parentName:"p"},"InspectorFlipperPlugin"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"final FlipperClient client = FlipperClient.createInstance(mContext);\nfinal DescriptorMapping descriptorMapping = DescriptorMapping.withDefaults();\ndescriptorMapping.register(MyObject.class, new MyObjectDescriptor());\nclient.addPlugin(new InspectorFlipperPlugin(mContext, descriptorMapping));\n")),(0,o.mdx)("h3",{id:"extending-an-existing-descriptor"},"Extending an existing Descriptor"),(0,o.mdx)("p",null,"You may not need to create a whole new descriptor but instead you may just want to change extend an existing one to expose some new piece of data. In that case just locate the correct descriptor and edit its ",(0,o.mdx)("inlineCode",{parentName:"p"},"getData"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"getAttributes")," and perhaps ",(0,o.mdx)("inlineCode",{parentName:"p"},"setData")," methods."),(0,o.mdx)("h2",{id:"ios"},"iOS"),(0,o.mdx)("h3",{id:"sknodedescriptor"},"SKNodeDescriptor"),(0,o.mdx)("p",null,"To expose an object to the layout inspector in Sonar you have to implement a ",(0,o.mdx)("inlineCode",{parentName:"p"},"SKNodeDescriptor")," which describes the object. For example ",(0,o.mdx)("inlineCode",{parentName:"p"},"SKViewDescriptor")," describes ",(0,o.mdx)("inlineCode",{parentName:"p"},"UIView")," objects, and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"SKComponentDescriptor")," describes ",(0,o.mdx)("inlineCode",{parentName:"p"},"CKComponent")," objects. These descriptors have necessary callbacks which is used to expose its children and data associated with the object they describe. See ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/b0d2983bd440dc41ec67089e11acd394e6566b8f/iOS/Plugins/FlipperKitLayoutPlugin/FlipperKitLayoutPlugin/SKNodeDescriptor.h"},"SKNodeDescriptor")," for the full available API."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"SKNodeDescriptor")," implementations should ",(0,o.mdx)("strong",{parentName:"p"},"never")," be subclass other ",(0,o.mdx)("inlineCode",{parentName:"p"},"SKNodeDescriptor")," implementations. Instead re-use existing behaviour by explicitly using other descriptors and delegate behaviour."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Don't")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},"@interface SKArbitraryViewDescriptor : SKViewDescriptor<ArbitraryView *>\n\n@end\n\n@implementation SKArbitraryViewDescriptor\n\n- (NSString *)identifierForNode:(ArbitraryView *)node\n{\n  return [super identifierForNode:node];\n}\n\n@end\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Do")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},"@interface SKArbitraryViewDescriptor : SKNodeDescriptor<ArbitraryView *>\n@end\n\n@implementation SKArbitraryViewDescriptor\n\n- (NSString *)identifierForNode:(ArbitraryView *)node\n{\n  SKNodeDescriptor *descriptor = [self descriptorForClass:[UIView class]];\n  return [descriptor identifierForNode:node];\n}\n\n@end\n")),(0,o.mdx)("h3",{id:"register-a-descriptor-1"},"Register a Descriptor"),(0,o.mdx)("p",null,"In order to register your descriptor for an object, you use ",(0,o.mdx)("inlineCode",{parentName:"p"},"SKDescriptorMapper"),". After registering all descriptors you pass on the descriptor-mapper object to the plugin during initialisation."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},"[descriptorMapper registerDescriptor:[SKArbitraryViewDescriptor new]\n                            forClass:[ArbitraryView class]];\n\n")),(0,o.mdx)("p",null,"There's already a set of descriptors registered by default in\n",(0,o.mdx)("inlineCode",{parentName:"p"},"SKDescriptorMapper"),", and if you want to add a descriptor to the default set\nyou can do it in ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/b0d2983bd440dc41ec67089e11acd394e6566b8f/iOS/Plugins/FlipperKitLayoutPlugin/FlipperKitLayoutPlugin/SKDescriptorMapper.mm"},(0,o.mdx)("inlineCode",{parentName:"a"},"SKDescriptorMapper")),"."),(0,o.mdx)("h3",{id:"extending-an-existing-descriptor-1"},"Extending an existing Descriptor"),(0,o.mdx)("p",null,"Sometimes all you need is to extend the functionality of an existing descriptor. In that case you just need to locate the correct descriptor and edit the methods ",(0,o.mdx)("inlineCode",{parentName:"p"},"dataForNode"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"attributesForNode"),", and possibly ",(0,o.mdx)("inlineCode",{parentName:"p"},"dataMutationsForNode"),"."),(0,o.mdx)("h3",{id:"subdescriptors"},"Subdescriptors"),(0,o.mdx)("p",null,"If you want to extend the ",(0,o.mdx)("inlineCode",{parentName:"p"},"SKComponentKitLayoutDescriptor")," and add an additional section based on the nodes of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"SKComponentLayoutDescriptor"),", you can use ",(0,o.mdx)("inlineCode",{parentName:"p"},"SKSubDescriptor"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},'#import <FlipperKitLayoutComponentKitSupport/SKComponentLayoutWrapper.h>\n\nNSString *YourSubDescriptor(SKComponentLayoutWrapper *)node {\n    return @"Meta data";\n}\n\n// At setup time, you must register it:\n[SKComponentLayoutDescriptor registerSubDescriptor:&YourSubDescriptor forName:@"Section Name"];\n')),(0,o.mdx)("p",null,"Swift support is not yet available because you must access ",(0,o.mdx)("inlineCode",{parentName:"p"},"SKComponentLayoutWrapper")," to implement a subdescriptor."))}m.isMDXComponent=!0}}]);