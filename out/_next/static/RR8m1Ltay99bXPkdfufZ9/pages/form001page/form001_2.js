(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"2Gh/":function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return a}));var r="SAVE_FORM001_1",a="GET_FORM001_1"},GAHZ:function(n,t,e){"use strict";e.d(t,"b",(function(){return p})),e.d(t,"a",(function(){return c}));var r=e("o0o1"),a=e.n(r),o=e("HaE+"),i=e("2Gh/"),u=e("vDqi"),l=e.n(u),p=function(n){return function(){var t=Object(o.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:i.b,payload:n});case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},c=function(n){return function(){var t=Object(o.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("http://localhost:3000/form001/findform001_1/".concat(n));case 2:r=t.sent,e({type:i.b,payload:r.data[r.data.length-1]});case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}},"SwA+":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form001page/form001_2",function(){return e("gQV/")}])},f2vL:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r="SAVE_FORM001_2"},fEpG:function(n,t,e){"use strict";e.r(t);var r=e("h4VS");function a(){var n=Object(r.a)(['\n  #components-layout-demo-responsive .logo {\n    height: 32px;\n    background: rgba(255, 255, 255, 0.2);\n    margin: 16px;\n  }\n\n  .site-layout-background {\n    background: #fff;\n  }\n  /* \nGeneric Styling, for Desktops/Laptops \n*/\n  table {\n    width: 100%;\n    border-collapse: collapse;\n  }\n  /* Zebra striping */\n  tr:nth-of-type(odd) {\n    background: #eee;\n  }\n  th {\n    background: #333;\n    color: white;\n    font-weight: bold;\n  }\n  td,\n  th {\n    padding: 6px;\n    border: 1px solid #ccc;\n    text-align: center;\n  }\n  input {\n    outline: none;\n    margin: 0;\n    width: 80%;\n    border: 1px solid #ddd;\n    background: white;\n    padding: 7px;\n  }\n  /* Button */\n  input[type="submit"] {\n    background-color: #4caf50;\n    color: white;\n    padding: 12px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    float: right;\n    width: 25%;\n  }\n\n  input[type="submit"]:hover {\n    background-color: #45a049;\n  }\n  @media screen and (max-width: 600px) {\n    input[type="submit"] {\n      float: none;\n      width: 100%;\n      margin-top: 0;\n    }\n  }\n  /* \nMax width before this PARTICULAR table gets nasty\nThis query will take effect for any screen smaller than 760px\nand also iPads specifically.\n*/\n  @media only screen and (max-width: 760px),\n    (min-device-width: 768px) and (max-device-width: 1024px) {\n    /* Input Submit */\n    input[type="submit"] {\n      float: none;\n      width: 100%;\n      margin-top: 0;\n    }\n    /* Table */\n    td {\n      text-align: center;\n    }\n    td:before {\n      text-align: left;\n    }\n\n    input {\n      margin: 0;\n      width: 80%;\n      text-align: center;\n    }\n    /* Force table to not be like tables anymore */\n    table,\n    thead,\n    tbody,\n    th,\n    td,\n    tr {\n      display: block;\n    }\n\n    /* Hide table headers (but not display: none;, for accessibility) */\n    thead tr {\n      position: absolute;\n      top: -9999px;\n      left: -9999px;\n    }\n\n    tr {\n      border: 1px solid #ccc;\n    }\n\n    td {\n      /* Behave  like a "row" */\n      border: none;\n      border-bottom: 1px solid #eee;\n      position: relative;\n      padding-left: 50%;\n    }\n\n    td:before {\n      /* Now like a table header */\n      position: absolute;\n      /* Top/left values mimic padding */\n      top: 6px;\n      left: 6px;\n      width: 45%;\n      padding-right: 10px;\n      white-space: nowrap;\n    }\n\n    /*\n\tLabel the data\n\t*/\n    td:nth-of-type(1):before {\n      content: "\u0e25\u0e33\u0e14\u0e31\u0e1a";\n    }\n    td:nth-of-type(2):before {\n      content: "\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23";\n    }\n    td:nth-of-type(3):before {\n      content: "\u0e08\u0e33\u0e19\u0e27\u0e19";\n    }\n    td:nth-of-type(4):before {\n      content: "\t\u0e2b\u0e19\u0e48\u0e27\u0e22";\n    }\n    td:nth-of-type(5):before {\n      content: "\u0e23\u0e32\u0e04\u0e32/\u0e2b\u0e19\u0e48\u0e27\u0e22";\n    }\n  }\n']);return a=function(){return n},n}var o=e("vOnD").a.div(a());t.default=o},"gQV/":function(n,t,e){"use strict";e.r(t);var r=e("ODXe"),a=e("q1tI"),o=e.n(a),i=e("nOHt"),u=e.n(i),l=e("NKCw"),p=e("Ol7k"),c=e("TeRw"),d=e("bN8d"),s=e("Eg6Q"),f=e("fItr"),b=e("/MKj"),m=e("GAHZ"),h=e("o0o1"),y=e.n(h),g=e("HaE+"),_=e("f2vL"),w=e("vDqi"),x=e.n(w),v=e("fEpG"),k=o.a.createElement,O=p.a.Content;t.default=function(){var n=Object(l.a)(),t=n.register,e=n.handleSubmit,o=(n.errors,function(n){switch(n){case"warning":c.a[n]({message:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",description:"\u0e42\u0e1b\u0e23\u0e14\u0e01\u0e23\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e43\u0e2b\u0e49\u0e04\u0e23\u0e1a\u0e16\u0e49\u0e27\u0e19"});break;case"success":c.a[n]({message:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",description:""}),u.a.push("/form001page/form001_3")}}),i=Object(b.b)(),h=Object(b.c)((function(n){return n.user.user.username})),w=Object(b.c)((function(n){return n.form001_1.info_form001_1.order_id}));return Object(a.useEffect)((function(){i(Object(m.a)(h))}),[]),k(v.default,null,k("title",null,"Form001_2"),k(p.a,null,k(d.a,null),k(p.a,null,k(s.a,null),k(O,{style:{margin:"24px 16px 0"}},k("div",{className:"site-layout-background",style:{padding:24,minHeight:"100vh"}},k("form",{onSubmit:e((function(n){console.log("data",n);for(var t=0,e=0,a=Object.entries(n);e<a.length;e++){var u=Object(r.a)(a[e],2);u[0];""!=u[1]||(t+=1)}t>0?o("warning"):(o("success"),x.a.post("http://localhost:3000/form001-2/insertform001-2",n).then((function(n){console.log("Success")})).catch((function(n){console.log("False")})),i(function(n){return function(){var t=Object(g.a)(y.a.mark((function t(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:_.a,payload:n});case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}(n)))}))},k("input",{type:"number",name:"order_id",hidden:!0,defaultValue:w,ref:t}),k("table",null,k("thead",null,k("tr",null,k("th",null,"\u0e25\u0e33\u0e14\u0e31\u0e1a"),k("th",null,"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23"),k("th",null,"\u0e08\u0e33\u0e19\u0e27\u0e19"),k("th",null,"\u0e2b\u0e19\u0e48\u0e27\u0e22"),k("th",null,"\u0e23\u0e32\u0e04\u0e32/\u0e2b\u0e19\u0e48\u0e27\u0e22"))),k("tbody",null,k("tr",null,k("td",null,"1"),k("td",null,k("input",{ref:t,type:"text",name:"l_detail_1"})),k("td",null,k("input",{ref:t,type:"number",name:"l_amount_1"})),k("td",null,k("input",{ref:t,type:"text",name:"l_unit_1"})),k("td",null,k("input",{ref:t,type:"number",name:"l_priceunit_1"}))),k("tr",null,k("td",null,"2"),k("td",null,k("input",{ref:t,type:"text",name:"l_detail_2"})),k("td",null,k("input",{ref:t,type:"number",name:"l_amount_2"})),k("td",null,k("input",{ref:t,type:"text",name:"l_unit_2"})),k("td",null,k("input",{ref:t,type:"number",name:"l_priceunit_2"}))),k("tr",null,k("td",null,"3"),k("td",null,k("input",{ref:t,type:"text",name:"l_detail_3"})),k("td",null,k("input",{ref:t,type:"number",name:"l_amount_3"})),k("td",null,k("input",{ref:t,type:"text",name:"l_unit_3"})),k("td",null,k("input",{ref:t,type:"number",name:"l_priceunit_3"}))),k("tr",null,k("td",null,"4"),k("td",null,k("input",{ref:t,type:"text",name:"l_detail_4"})),k("td",null,k("input",{ref:t,type:"number",name:"l_amount_4"})),k("td",null,k("input",{ref:t,type:"text",name:"l_unit_4"})),k("td",null,k("input",{ref:t,type:"number",name:"l_priceunit_4"}))))),k("input",{style:{marginTop:"20px"},type:"submit",value:"Submit"})))),k(f.a,null))))}}},[["SwA+",0,1,2,3,4,5,6,7,8,9]]]);