(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[46],{951:function(e,t,n){"use strict";n.r(t);var a=n(322),r=n.n(a),c=n(394),s=n(159),i=n(160),l=n(163),h=n(162),d=n(0),o=n.n(d),j=n(247),u=n(903),p=n(1175),b=n(1177),x=n(892),m=n(395),v=n(2),O=j.a.Search,f=(u.a,function(e){return console.log(e)});function w(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return n(e)}}))}var g=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={previewVisible:!1,previewImage:"",previewTitle:"",fileList:[{uid:"-1",name:"prescription",status:"done",url:"https://storage.cashlesshealthcare.com/clhcapps-trade-static/wp-content/uploads/2020/08/28145639/rx-sample%402x-75f9059211466d9785c666d361ba3e9c.png"}]},e.handleCancel=function(){return e.setState({previewVisible:!1})},e.handlePreview=function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.url||n.preview){t.next=4;break}return t.next=3,w(n.originFileObj);case 3:n.preview=t.sent;case 4:e.setState({previewImage:n.url||n.preview,previewVisible:!0,previewTitle:n.name||n.url.substring(n.url.lastIndexOf("/")+1)});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.fileList;return e.setState({fileList:n})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.previewVisible,n=e.previewImage,a=e.fileList,r=e.previewTitle,c=Object(v.jsxs)("div",{children:[Object(v.jsx)(x.a,{}),Object(v.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return Object(v.jsxs)(m.a,{children:[Object(v.jsxs)("div",{className:"margin-top w-100 text-center mb-3 ",children:[" ",Object(v.jsx)(O,{placeholder:"Enter Patient ID/ Name",onSearch:f,style:{width:200}})]}),Object(v.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(v.jsx)("thead",{className:"thead-light",children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{className:"text-center",children:"Patient ID"}),Object(v.jsx)("th",{className:"text-center",children:"Patient's Name"}),Object(v.jsx)("th",{className:"text-center",children:"Address"}),Object(v.jsx)("th",{className:"text-center",children:"Contact"}),Object(v.jsx)("th",{className:"text-center",children:"Prescription"})]})}),Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{className:"text-center",children:"83"}),Object(v.jsx)("td",{className:"text-center",children:"Anushka Bhatnagar"}),Object(v.jsx)("td",{className:"text-center",children:" 98 Chitra Vihar, India"}),Object(v.jsx)("td",{className:"text-center",children:" 78459374628"}),Object(v.jsxs)("td",{className:"text-center",children:[Object(v.jsx)(p.a,{action:"https://storage.cashlesshealthcare.com/clhcapps-trade-static/wp-content/uploads/2020/08/28145639/rx-sample%402x-75f9059211466d9785c666d361ba3e9c.png",listType:"picture-card",fileList:a,onPreview:this.handlePreview,onChange:this.handleChange,children:a.length>=8?null:c}),Object(v.jsx)(b.a,{visible:t,title:r,footer:null,onCancel:this.handleCancel,children:Object(v.jsx)("img",{alt:"example",style:{width:"100%"},src:n})})]})]})})]})]})}}]),n}(o.a.Component);t.default=g}}]);
//# sourceMappingURL=46.ed0898de.chunk.js.map