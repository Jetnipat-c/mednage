(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{AxNZ:function(n,t,a){"use strict";a.r(t);var o=a("h4VS");function e(){var n=Object(o.a)(['\n  #components-layout-demo-responsive .logo {\n    height: 32px;\n    background: rgba(255, 255, 255, 0.2);\n    margin: 16px;\n  }\n\n  .site-layout-background {\n    background: #fff;\n  }\n\n  /* input Sybmit*/\n  input[type="submit"] {\n    background-color: #4caf50;\n    color: white;\n    padding: 12px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    float: right;\n    width: 25%;\n  }\n\n  input[type="submit"]:hover {\n    background-color: #45a049;\n  }\n  @media screen and (max-width: 600px) {\n    input[type="submit"] {\n      float: none;\n      width: 100%;\n      margin-top: 0;\n    }\n  }\n']);return e=function(){return n},n}var r=a("vOnD").a.div(e());t.default=r},QTxI:function(n,t,a){"use strict";a.r(t);var o=a("o0o1"),e=a.n(o),r=a("HaE+"),i=a("q1tI"),u=a.n(i),l=a("nOHt"),c=a.n(l),p=a("Ol7k"),s=a("8z0m"),f=a("tsqr"),d=a("PArb"),m=a("mr32"),g=a("LtfV"),b=a("bN8d"),h=a("Eg6Q"),x=a("fItr"),v=a("/MKj"),w=a("GAHZ"),y=a("AxNZ"),k=u.a.createElement,_=p.a.Content,O=s.a.Dragger;t.default=function(){var n=Object(v.b)(),t=Object(v.c)((function(n){return n.user.user.username})),a=Object(v.c)((function(n){return n.form001_1.info_form001_1.order_id}));Object(i.useEffect)((function(){n(Object(w.a)(t))}),[]);var o=function(){var n=Object(r.a)(e.a.mark((function n(){return e.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c.a.push("/form001page/form001_4");case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u={name:"image",action:"http://localhost:3000/uploadfile001/single/".concat(a),multiple:!1,onChange:function(n){var t=n.file.status;"uploading"!==t&&console.log(n.file,n.fileList),"done"===t?f.b.success("".concat(n.file.name," file uploaded successfully.")):"error"===t&&f.b.error("".concat(n.file.name," file upload failed."))}};return k(y.default,null,k("title",null,"Form001_3"),k(p.a,null,k(b.a,null),k(p.a,null,k(h.a,null),k(_,{style:{margin:"24px 16px 0"}},k("div",{className:"site-layout-background",style:{padding:24,minHeight:"100vh"}},k(d.a,{orientation:"left",style:{marginBottom:"50px"}},k(m.a,{color:"orange"},"\u0e44\u0e1f\u0e25\u0e4c\u0e20\u0e32\u0e22\u0e43\u0e19\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23")),k(O,u,k("p",{className:"ant-upload-drag-icon"},k(g.a,null)),k("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),k("p",{className:"ant-upload-hint"},"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files")),k("input",{style:{marginTop:"20px"},type:"submit",value:"Submit",onClick:function(){return o()}}))),k(x.a,null))))}},h6cR:function(n,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form001page/form001_3",function(){return a("QTxI")}])}},[["h6cR",0,1,2,3,4,5,6,7,8,10,11]]]);