(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[8],{1143:function(e,t,a){"use strict";var c=a(4),n=a(3),r=a(0),l=a(9),i=a.n(l),o=a(47),s=a(135),u=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},d=function(e){var t=e.prefixCls,a=e.className,l=e.hoverable,o=void 0===l||l,d=u(e,["prefixCls","className","hoverable"]);return r.createElement(s.a,null,(function(e){var l=(0,e.getPrefixCls)("card",t),s=i()("".concat(l,"-grid"),a,Object(c.a)({},"".concat(l,"-grid-hoverable"),o));return r.createElement("div",Object(n.a)({},d,{className:s}))}))},f=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},m=function(e){return r.createElement(s.a,null,(function(t){var a=t.getPrefixCls,c=e.prefixCls,l=e.className,o=e.avatar,s=e.title,u=e.description,d=f(e,["prefixCls","className","avatar","title","description"]),m=a("card",c),b=i()("".concat(m,"-meta"),l),p=o?r.createElement("div",{className:"".concat(m,"-meta-avatar")},o):null,v=s?r.createElement("div",{className:"".concat(m,"-meta-title")},s):null,y=u?r.createElement("div",{className:"".concat(m,"-meta-description")},u):null,O=v||y?r.createElement("div",{className:"".concat(m,"-meta-detail")},v,y):null;return r.createElement("div",Object(n.a)({},d,{className:b}),p,O)}))},b=a(1138),p=a(279),v=a(184),y=a(70),O=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a};var g=function(e){var t,a,l,u=r.useContext(s.b),f=u.getPrefixCls,m=u.direction,g=r.useContext(y.b),h=e.prefixCls,j=e.className,E=e.extra,x=e.headStyle,N=void 0===x?{}:x,C=e.bodyStyle,w=void 0===C?{}:C,P=e.title,S=e.loading,z=e.bordered,k=void 0===z||z,A=e.size,T=e.type,L=e.cover,M=e.actions,K=e.tabList,R=e.children,B=e.activeTabKey,H=e.defaultActiveTabKey,I=e.tabBarExtraContent,D=e.hoverable,U=e.tabProps,W=void 0===U?{}:U,X=O(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),G=f("card",h),J=0===w.padding||"0px"===w.padding?{padding:24}:void 0,V=r.createElement("div",{className:"".concat(G,"-loading-block")}),q=r.createElement("div",{className:"".concat(G,"-loading-content"),style:J},r.createElement(p.a,{gutter:8},r.createElement(v.a,{span:22},V)),r.createElement(p.a,{gutter:8},r.createElement(v.a,{span:8},V),r.createElement(v.a,{span:15},V)),r.createElement(p.a,{gutter:8},r.createElement(v.a,{span:6},V),r.createElement(v.a,{span:18},V)),r.createElement(p.a,{gutter:8},r.createElement(v.a,{span:13},V),r.createElement(v.a,{span:9},V)),r.createElement(p.a,{gutter:8},r.createElement(v.a,{span:4},V),r.createElement(v.a,{span:3},V),r.createElement(v.a,{span:16},V))),F=void 0!==B,Y=Object(n.a)(Object(n.a)({},W),(t={},Object(c.a)(t,F?"activeKey":"defaultActiveKey",F?B:H),Object(c.a)(t,"tabBarExtraContent",I),t)),Q=K&&K.length?r.createElement(b.a,Object(n.a)({size:"large"},Y,{className:"".concat(G,"-head-tabs"),onChange:function(t){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)}}),K.map((function(e){return r.createElement(b.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(P||E||Q)&&(l=r.createElement("div",{className:"".concat(G,"-head"),style:N},r.createElement("div",{className:"".concat(G,"-head-wrapper")},P&&r.createElement("div",{className:"".concat(G,"-head-title")},P),E&&r.createElement("div",{className:"".concat(G,"-extra")},E)),Q));var Z=L?r.createElement("div",{className:"".concat(G,"-cover")},L):null,$=r.createElement("div",{className:"".concat(G,"-body"),style:w},S?q:R),_=M&&M.length?r.createElement("ul",{className:"".concat(G,"-actions")},function(e){return e.map((function(t,a){return r.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},r.createElement("span",null,t))}))}(M)):null,ee=Object(o.a)(X,["onTabChange"]),te=A||g,ae=i()(G,(a={},Object(c.a)(a,"".concat(G,"-loading"),S),Object(c.a)(a,"".concat(G,"-bordered"),k),Object(c.a)(a,"".concat(G,"-hoverable"),D),Object(c.a)(a,"".concat(G,"-contain-grid"),function(){var t;return r.Children.forEach(e.children,(function(e){e&&e.type&&e.type===d&&(t=!0)})),t}()),Object(c.a)(a,"".concat(G,"-contain-tabs"),K&&K.length),Object(c.a)(a,"".concat(G,"-").concat(te),te),Object(c.a)(a,"".concat(G,"-type-").concat(T),!!T),Object(c.a)(a,"".concat(G,"-rtl"),"rtl"===m),a),j);return r.createElement("div",Object(n.a)({},ee,{className:ae}),l,Z,$,_)};g.Grid=d,g.Meta=m;t.a=g},1159:function(e,t,a){"use strict";var c=a(3),n=a(4),r=a(21),l=a(8),i=a(0),o=a(9),s=a.n(o),u=a(113),d=a(56),f=a(135),m=a(44),b=a(167),p=a(250),v=i.createContext("default"),y=function(e){var t=e.children,a=e.size;return i.createElement(v.Consumer,null,(function(e){return i.createElement(v.Provider,{value:a||e},t)}))},O=v,g=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},h=function(e,t){var a,o,v=i.useContext(O),y=i.useState(1),h=Object(l.a)(y,2),j=h[0],E=h[1],x=i.useState(!1),N=Object(l.a)(x,2),C=N[0],w=N[1],P=i.useState(!0),S=Object(l.a)(P,2),z=S[0],k=S[1],A=i.useRef(),T=i.useRef(),L=Object(d.a)(t,A),M=i.useContext(f.b).getPrefixCls,K=function(){if(T.current&&A.current){var t=T.current.offsetWidth,a=A.current.offsetWidth;if(0!==t&&0!==a){var c=e.gap,n=void 0===c?4:c;2*n<a&&E(a-2*n<t?(a-2*n)/t:1)}}};i.useEffect((function(){w(!0)}),[]),i.useEffect((function(){k(!0),E(1)}),[e.src]),i.useEffect((function(){K()}),[e.gap]);var R=e.prefixCls,B=e.shape,H=e.size,I=e.src,D=e.srcSet,U=e.icon,W=e.className,X=e.alt,G=e.draggable,J=e.children,V=g(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),q="default"===H?v:H,F=Object(p.a)(),Y=i.useMemo((function(){if("object"!==Object(r.a)(q))return{};var e=b.b.find((function(e){return F[e]})),t=q[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:U?t/2:18}:{}}),[F,q]);Object(m.a)(!("string"===typeof U&&U.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(U,"` at https://ant.design/components/icon"));var Q,Z=M("avatar",R),$=s()((a={},Object(n.a)(a,"".concat(Z,"-lg"),"large"===q),Object(n.a)(a,"".concat(Z,"-sm"),"small"===q),a)),_=i.isValidElement(I),ee=s()(Z,$,(o={},Object(n.a)(o,"".concat(Z,"-").concat(B),!!B),Object(n.a)(o,"".concat(Z,"-image"),_||I&&z),Object(n.a)(o,"".concat(Z,"-icon"),!!U),o),W),te="number"===typeof q?{width:q,height:q,lineHeight:"".concat(q,"px"),fontSize:U?q/2:18}:{};if("string"===typeof I&&z)Q=i.createElement("img",{src:I,draggable:G,srcSet:D,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&k(!1)},alt:X});else if(_)Q=I;else if(U)Q=U;else if(C||1!==j){var ae="scale(".concat(j,") translateX(-50%)"),ce={msTransform:ae,WebkitTransform:ae,transform:ae},ne="number"===typeof q?{lineHeight:"".concat(q,"px")}:{};Q=i.createElement(u.a,{onResize:K},i.createElement("span",{className:"".concat(Z,"-string"),ref:function(e){T.current=e},style:Object(c.a)(Object(c.a)({},ne),ce)},J))}else Q=i.createElement("span",{className:"".concat(Z,"-string"),style:{opacity:0},ref:function(e){T.current=e}},J);return delete V.onError,delete V.gap,i.createElement("span",Object(c.a)({},V,{style:Object(c.a)(Object(c.a)(Object(c.a)({},te),Y),V.style),className:ee,ref:L}),Q)},j=i.forwardRef(h);j.displayName="Avatar",j.defaultProps={shape:"circle",size:"default"};var E=j,x=a(63),N=a(41),C=a(907),w=function(e){var t=i.useContext(f.b),a=t.getPrefixCls,c=t.direction,r=e.prefixCls,l=e.className,o=void 0===l?"":l,u=e.maxCount,d=e.maxStyle,m=e.size,b=a("avatar-group",r),p=s()(b,Object(n.a)({},"".concat(b,"-rtl"),"rtl"===c),o),v=e.children,O=e.maxPopoverPlacement,g=void 0===O?"top":O,h=Object(x.a)(v).map((function(e,t){return Object(N.a)(e,{key:"avatar-key-".concat(t)})})),j=h.length;if(u&&u<j){var w=h.slice(0,u),P=h.slice(u,j);return w.push(i.createElement(C.a,{key:"avatar-popover-key",content:P,trigger:"hover",placement:g,overlayClassName:"".concat(b,"-popover")},i.createElement(E,{style:d},"+".concat(j-u)))),i.createElement(y,{size:m},i.createElement("div",{className:p,style:e.style},w))}return i.createElement(y,{size:m},i.createElement("div",{className:p,style:e.style},h))},P=E;P.Group=w;t.a=P},1161:function(e,t,a){"use strict";var c=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"}}]},name:"setting",theme:"outlined"},r=a(33),l=function(e,t){return c.createElement(r.a,Object.assign({},e,{ref:t,icon:n}))};l.displayName="SettingOutlined";t.a=c.forwardRef(l)},1162:function(e,t,a){"use strict";var c=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},r=a(33),l=function(e,t){return c.createElement(r.a,Object.assign({},e,{ref:t,icon:n}))};l.displayName="EditOutlined";t.a=c.forwardRef(l)},944:function(e,t,a){"use strict";a.r(t);a(0);var c=a(393),n=a(1143),r=a(1159),l=a(1161),i=a(1162),o=a(290),s=a(2),u=n.a.Meta;t.default=function(){return Object(s.jsx)(c.a,{children:Object(s.jsxs)("div",{className:" margin-top w-100 text-center mb-3 ",children:[Object(s.jsx)("h2",{children:"About Us "}),Object(s.jsx)("center",{children:Object(s.jsx)(n.a,{style:{width:500},actions:[Object(s.jsx)(l.a,{},"setting"),Object(s.jsx)(i.a,{},"edit"),Object(s.jsx)(o.a,{},"ellipsis")],children:Object(s.jsx)(u,{avatar:Object(s.jsx)(r.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"E-Healthcare Platform by Anushka Bhatnagar",description:"This platform is created for low-connectivity, accessibility and low literacy as a dissertation project for M.S Advanced Computing Science in University of East Anglia, UK.\r For any further details, please contact the supervisor: Dr. Dan Smith, dan.smith@uea.ac.uk"})})})]})})}}}]);
//# sourceMappingURL=8.08f6e716.chunk.js.map