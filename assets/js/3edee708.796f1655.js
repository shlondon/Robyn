"use strict";(self.webpackChunkmmm_for_all=self.webpackChunkmmm_for_all||[]).push([[365],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),f=s(n),m=i,p=f["".concat(l,".").concat(m)]||f[m]||c[m]||o;return n?r.createElement(p,a(a({ref:t},u),{},{components:n})):r.createElement(p,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(2263),i=n(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,d=void 0!==a&&a,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(d)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},278:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=n(4996),d=["components"],l={id:"window",title:"Modeling window"},s="Modeling window",u={unversionedId:"window",id:"window",isDocsHomePage:!1,title:"Modeling window",description:"---",source:"@site/docs/window.mdx",sourceDirName:".",slug:"/window",permalink:"/Robyn/docs/window",editUrl:"https://github.com/facebookexperimental/Robyn/edit/main/website/docs/window.mdx",tags:[],version:"current",frontMatter:{id:"window",title:"Modeling window"},sidebar:"someSidebar",previous:{title:"Outputs and diagnostics",permalink:"/Robyn/docs/outputs-diagnostics"},next:{title:"Continuous reporting",permalink:"/Robyn/docs/refresh"}},c=[],f={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,d);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modeling-window"},"Modeling window"),(0,o.kt)("hr",null),(0,o.kt)("p",null," MMM models are built based on past data. Thus, one of the main requirements when building an MMM model is to be able to select the right dates from the historical data history that represent well both, the current business and the marketing investment situation. The advantage of a rolling window is that you may still use the full data history (E.g. 2 years) on your data for trend, seasonality and holiday effects to be modeled, while at the same time, defining a specific range (E.g. 6 months) for media, organic and contextual variables that better represents your current business and marketing scenario. You may specify a window_start and window_end dates within the robyn_inputs() function to define a modeling period as a subset of the total available data for media and other variables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' InputCollect <- robyn_inputs(\n...\n   ,window_start = "2016-11-23"\n   ,window_end = "2018-08-22"\n...\n )\n')),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"window_start"))," A character. Set the start date of the modelling period. The window start will determine the start date of the data period within your dataset you will be using to specifically regress the effects of media, organic and context variables on your dependent variable. We recommend using a full \u201cdt_input\u201d dataset with a minimum of 1 year of history, as it will be used in full for the model calculation of trend, seasonality and holidays effects. Whereas the window period will determine how much of the full data set will be used for media, organic and context variables. E.g. Uploading and using 2 years of data in \u201cdt_input\u201d but determining window_start and window_end as the last 6 months which reflect better the current business and/or marketing investment reality for budget decision making."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"window_end"))," A character. Set the end date of the modelling period. Recommended to have a ratio of (independent variable : parameters) data points of 1:10. The window end will determine the end date of the data period within your dataset you will be using to specifically regress the effects of media, organic and context variables on your dependent variable. We recommend using a full \u201cdt_input\u201d dataset with a minimum of 1 year of history, as it will be used in full for the model calculation of trend, seasonality and holidays effects. Whereas the window period will determine how much of the full data set will be used for media, organic and context variables. E.g. Uploading and using 2 years of data in \u201cdt_input\u201d but determining window_start and window_end as the last 6 months which reflect better the current business and/or marketing investment reality for budget decision making.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"You may look at the example below with most of 2017 and 2018 as the window that will be taken into consideration for media, organic and contextual variables modeling."),(0,o.kt)("img",{alt:"pareto chart 2",src:(0,a.Z)("/img/refresh-window.png")}),(0,o.kt)("hr",null))}m.isMDXComponent=!0}}]);