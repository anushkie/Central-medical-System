(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[40],{945:function(e,t,c){"use strict";c.r(t);var s=c(322),a=c.n(s),n=c(394),r=c(159),i=c(160),l=c(163),d=c(162),h=c(0),o=c.n(h),j=c(161),p=c(12),b=c(1175),x=c(1177),u=c(892),m=c(2);function O(e){return new Promise((function(t,c){var s=new FileReader;s.readAsDataURL(e),s.onload=function(){return t(s.result)},s.onerror=function(e){return c(e)}}))}var v=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(r.a)(this,c);for(var s=arguments.length,i=new Array(s),l=0;l<s;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={previewVisible:!1,previewImage:"https://storage.cashlesshealthcare.com/clhcapps-trade-static/wp-content/uploads/2020/08/28145639/rx-sample%402x-75f9059211466d9785c666d361ba3e9c.png",previewTitle:"",fileList:[{uid:"-1",name:"prescription",status:"done",url:"https://storage.cashlesshealthcare.com/clhcapps-trade-static/wp-content/uploads/2020/08/28145639/rx-sample%402x-75f9059211466d9785c666d361ba3e9c.png"}]},e.handleCancel=function(){return e.setState({previewVisible:!1})},e.handlePreview=function(){var t=Object(n.a)(a.a.mark((function t(c){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.url||c.preview){t.next=4;break}return t.next=3,O(c.originFileObj);case 3:c.preview=t.sent;case 4:e.setState({previewImage:c.url||c.preview,previewVisible:!0,previewTitle:c.name||c.url.substring(c.url.lastIndexOf("/")+1)});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var c=t.fileList;return e.setState({fileList:c})},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this.state,t=e.previewVisible,c=(e.previewImage,e.fileList),s=e.previewTitle,a=Object(m.jsxs)("div",{children:[Object(m.jsx)(u.a,{}),Object(m.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return Object(m.jsx)(j.a,{children:Object(m.jsx)(p.j,{children:Object(m.jsx)(p.k,{children:Object(m.jsxs)("table",{className:"margin-top table table-outline mb-0 d-none d-sm-table",children:[Object(m.jsx)("thead",{className:"",children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{className:"text-center",children:"S.no"}),Object(m.jsx)("th",{className:"text-center",children:"Admission Date"}),Object(m.jsx)("th",{className:"text-center",children:"Discharge Date"}),Object(m.jsx)("th",{className:"text-center",children:"Reason (Disease)"}),Object(m.jsx)("th",{className:"text-center",children:" Doctor's Name"}),Object(m.jsx)("th",{className:"text-center",children:"Amount Charged"}),Object(m.jsx)("th",{className:"text-center",children:"Prescription"})]})}),Object(m.jsx)("tbody",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{className:"text-center",children:"1"}),Object(m.jsx)("td",{className:"text-center",children:"12/05/2021"}),Object(m.jsx)("td",{className:"text-center",children:"15/05/2021"}),Object(m.jsx)("td",{className:"text-center",children:" Jaundice"}),Object(m.jsx)("td",{className:"text-center",children:"Michael Blaire"}),Object(m.jsx)("td",{className:"text-center",children:" \xa3500"}),Object(m.jsxs)("td",{className:"text-center",children:[Object(m.jsx)(b.a,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",listType:"picture-card",fileList:c,onPreview:this.handlePreview,onChange:this.handleChange,children:c.length>=8?null:a}),Object(m.jsx)(x.a,{visible:t,title:s,footer:null,onCancel:this.handleCancel,children:Object(m.jsx)("img",{alt:"prescription",style:{width:"100%"},src:"https://storage.cashlesshealthcare.com/clhcapps-trade-static/wp-content/uploads/2020/08/28145639/rx-sample%402x-75f9059211466d9785c666d361ba3e9c.png"})})]})]})})]})})})})}}]),c}(o.a.Component);t.default=v}}]);
//# sourceMappingURL=40.727e56bc.chunk.js.map