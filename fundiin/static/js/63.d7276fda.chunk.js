"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[63],{1937:(e,a,s)=>{s.d(a,{A:()=>l});var i=s(8139),t=s.n(i),n=s(579);const l=e=>{let{children:a,className:s,...i}=e;return(0,n.jsx)("button",{className:t()(["fundiin-btn",s]),...i,children:a})}},1293:(e,a,s)=>{s.d(a,{A:()=>d});var i=s(669),t=s(7226),n=s(8139),l=s.n(n),c=s(4117),r=s(579);const d=e=>{let{className:a}=e;const{t:s}=(0,c.Bd)();return(0,r.jsx)("div",{className:l()(["download-app",a]),children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"download-app__content",children:[(0,r.jsxs)("div",{className:"download-app__item",children:[(0,r.jsx)("div",{className:"key-visual",children:(0,r.jsx)("img",{src:i.E.keyVisualAppUrl,alt:"key visual bg"})}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("h3",{className:"download-app__title",children:s("dowloadApp.title")}),(0,r.jsxs)("div",{className:"download-app__wrap",children:[(0,r.jsx)("div",{className:"download-app__qr",children:(0,r.jsx)("img",{src:i.E.qrCode12Url,alt:"qr"})}),(0,r.jsxs)("div",{className:"download-app__text",children:[(0,r.jsx)("p",{className:"download-app__subtitle",children:s("dowloadApp.subTitle")}),(0,r.jsx)("p",{className:"download-app__downloadtext",children:s("dowloadApp.Qu\xe9t m\xe3 \u0111\u1ec3 t\u1ea3i \u1ee9ng d\u1ee5ng")})]})]}),(0,r.jsxs)("div",{className:"btn-site",children:[(0,r.jsx)("a",{href:"#",children:(0,r.jsx)(t.I.GooglePlay,{})}),(0,r.jsx)("a",{href:"#",children:(0,r.jsx)(t.I.AppStore,{})})]})]})]}),(0,r.jsx)("div",{className:"download-app__item",children:(0,r.jsx)("div",{className:"phone",children:(0,r.jsx)("img",{className:"cover-img",src:i.E.downloadAppUrl,alt:"download bg"})})})]})})})}},3063:(e,a,s)=>{s.r(a),s.d(a,{default:()=>B});var i=s(4117),t=s(2488),n=s(4413),l=s(669);const c=[{id:1,url:l.E.carousel31Url},{id:2,url:l.E.carousel32Url},{id:3,url:l.E.carousel33Url},{id:4,url:l.E.carousel34Url}];var r=s(579);const d={desktop:{breakpoint:{max:n.WH,min:n.dx},items:1.3},tablet:{breakpoint:{max:n.dx,min:n.Tz},items:2.07},mobile:{breakpoint:{max:n.Tz,min:n.vg},items:1}},o=()=>{const{t:e}=(0,i.Bd)();return(0,r.jsxs)("div",{className:"container carousel-brands",children:[(0,r.jsx)("h3",{className:"carousel-brands__title",children:e("Kh\xe1m ph\xe1 \u01b0u \u0111\xe3i t\u1eeb c\xe1c th\u01b0\u01a1ng hi\u1ec7u")}),(0,r.jsx)("div",{className:"carousel3",children:(0,r.jsx)(t.default,{arrows:!1,responsive:d,itemClass:"carousel3__item",children:c.map((e=>(0,r.jsx)("div",{className:"carousel3__wrap",children:(0,r.jsx)("div",{className:"carousel3__img",children:(0,r.jsx)("img",{className:"cover-img",src:e.url,alt:"brands"})})},e.id)))})})]})};var m=s(1293),x=s(2979),u=s(7289),h=s(1139),j=s(8139),N=s.n(j),p=s(1937),v=s(3536),g=s(8974);const I=s(7154).A.create({baseURL:"https://fundiin.vn/lp/api/",headers:{Authorization:"Bearer "+localStorage.getItem("accessToken")},timeout:3e4});I.interceptors.request.use((e=>e),(e=>{Promise.reject(e)})),I.interceptors.response.use((e=>(null===e||void 0===e?void 0:e.data)||{}),(e=>{var a,s;return 401===(null===e||void 0===e||null===(a=e.response)||void 0===a?void 0:a.status)||null===e||void 0===e||null===(s=e.response)||void 0===s||s.status,Promise.reject(e)}));const _=I,y=()=>_.get("category/get-following-merchants"),E=()=>{const{data:e,isLoading:a}=(0,g.I)({queryKey:["todos"],queryFn:y});return{isLoading:a,data:(null===e||void 0===e?void 0:e.data)||[]}};var A=s(5043),b=s(5475),O=s(6222),f=s(8167),w=s(2116),k=s(7226);let F=function(e){return e.UNCHECK="",e.ONLINE="ONLINE",e.OFFLINE="OFFLINE",e}({});const C=[{id:1,altName:"BRANDHOT",icon:(0,r.jsx)(k.I.HotBrands,{}),aciveIcon:(0,r.jsx)(k.I.HotBrands,{}),text:"category.Hot Brands"},{id:2,altName:"SUCKHOEVALAMDEP",icon:(0,r.jsx)(k.I.HeathOutline,{}),aciveIcon:(0,r.jsx)(k.I.Heath,{}),text:"category.S\u1ee9c kho\u1ebb & l\xe0m \u0111\u1eb9p"},{id:3,altName:"THOITRANGNU",icon:(0,r.jsx)(k.I.FasionOutline,{}),aciveIcon:(0,r.jsx)(k.I.Fasion,{}),text:"category.Th\u1eddi trang n\u1eef"},{id:4,altName:"THOITRANGNAM",icon:(0,r.jsx)(k.I.MenFasionOutline,{}),aciveIcon:(0,r.jsx)(k.I.MenFasion,{}),text:"category.Th\u1eddi trang nam"},{id:5,altName:"PHUKIENTHOITRANG",icon:(0,r.jsx)(k.I.EyesGlassOutline,{}),aciveIcon:(0,r.jsx)(k.I.EyesGlass,{}),text:"category.Ph\u1ee5 ki\u1ec7n th\u1eddi trang"},{id:6,altName:"NHACUADOISONG",icon:(0,r.jsx)(k.I.HomeOutline,{}),aciveIcon:(0,r.jsx)(k.I.Home,{}),text:"category.Nh\xe0 c\u1eeda \u0110\u1eddi s\u1ed1ng"},{id:7,altName:"GIAODUC",icon:(0,r.jsx)(k.I.EducationOutline,{}),aciveIcon:(0,r.jsx)(k.I.Education,{}),text:"category.Gi\xe1o d\u1ee5c"},{id:8,altName:"THETHAOVADULICH",icon:(0,r.jsx)(k.I.SportOutline,{}),aciveIcon:(0,r.jsx)(k.I.Sport,{}),text:"category.Th\u1ec3 thao du l\u1ecbch"},{id:9,altName:"MEVABE",icon:(0,r.jsx)(k.I.BabyOutline,{}),aciveIcon:(0,r.jsx)(k.I.Baby,{}),text:"category.M\u1eb9 & B\xe9"},{id:10,altName:"KHAC",icon:(0,r.jsx)(r.Fragment,{}),aciveIcon:(0,r.jsx)(r.Fragment,{}),text:"category.Kh\xe1c"}],H=[{id:1,value:F.ONLINE,text:"category.Online"},{id:2,value:F.OFFLINE,text:"category.T\u1ea1i qu\u1ea7y"}],U=(l.E.testUrl,l.E.testUrl,l.E.testUrl,l.E.testUrl,l.E.testUrl,e=>{let{activeTabs:a,onChange:s=(()=>{})}=e;const{t:t}=(0,i.Bd)(),[n,l]=(0,A.useState)([]);return(0,A.useEffect)((()=>{l(a)}),[a]),(0,r.jsxs)("div",{className:"category__menu--mobile",children:[(0,r.jsx)("ul",{children:C.map((e=>(0,r.jsxs)("li",{className:N()({active:n[e.id]}),onClick:()=>(e=>{let a=(0,v.cloneDeep)(n);a[e]=!a[e],a=a.map(((a,s)=>e===s&&a)),l(a)})(e.id),children:[(0,r.jsxs)("span",{children:[n[e.id]?e.aciveIcon:e.icon," ",t(e.text)]}),(0,r.jsx)(f.Ay,{checked:!!n[e.id]})]},e.id)))}),(0,r.jsx)(w.A,{type:"button",className:"register-btn",onClick:()=>{s(n)},children:t("\xc1p d\u1ee5ng")})]})}),T=[],L=e=>{let{defaultActive:a=1}=e;const{t:s}=(0,i.Bd)(),[t]=(0,u.l)(),{data:n,isLoading:l}=E(),[c,d]=(0,A.useState)(!1),[o,m]=(0,A.useState)([]),[x,j]=(0,A.useState)([]),g=(0,A.useMemo)((()=>{let e=C;o.includes(!0)&&(e=C.filter(((e,a)=>o[a])));const a=e.map((e=>e.altName));return n.filter((e=>a.includes(e.altName))).map((e=>(e=>({...e,merchants:x.some((e=>!!e))?e.merchants.filter((e=>x.includes(e.runningForm))):e.merchants}))(e)))}),[n,o,x]),I=(0,A.useMemo)((()=>{let e=0;return g.forEach((a=>{e+=a.merchants.length})),e}),[g]),_=(0,A.useMemo)((()=>{var e;return s((null===(e=C.find(((e,a)=>!!o[a])))||void 0===e?void 0:e.text)||"")}),[o]),y=(e,a)=>{const s=(0,v.cloneDeep)(x);s[e]=s[e]?F.UNCHECK:a,j(s)};return(0,A.useEffect)((()=>{T[a]=!0,m(T)}),[a]),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"category",children:[(0,r.jsxs)("div",{className:"category__sidebar",children:[(0,r.jsx)("h3",{className:"category__title",children:s("Danh m\u1ee5c")}),(0,r.jsx)("div",{className:"category__menu",children:C.map((e=>(0,r.jsxs)(p.A,{className:N()({active:o[e.id],medium:(0,O.Ew)(t)}),onClick:()=>(e=>{let a=(0,v.cloneDeep)(o);a[e]=!a[e],a=a.map(((a,s)=>e===s&&a)),m(a)})(e.id),children:[o[e.id]?e.aciveIcon:e.icon," ",s(e.text)]},e.id)))}),(0,r.jsx)("h3",{className:"category__title",children:s("Mua h\xe0ng")}),(0,r.jsx)("div",{className:"category__menu",children:H.map((e=>(0,r.jsx)(p.A,{className:N()({medium:(0,O.Ew)(t),active:x[e.id]===e.value}),onClick:()=>y(e.id,e.value),children:s(e.text)},e.id)))})]}),(0,r.jsxs)("div",{className:"category__result",children:[(0,r.jsxs)("p",{className:"category__count",children:[I," ",s("K\u1ebft qu\u1ea3")]}),(0,r.jsxs)("div",{className:"category__sidebar--mobile",children:[H.map((e=>(0,r.jsx)(p.A,{className:N()({mini:!0,active:x[e.id]===e.value}),onClick:()=>y(e.id,e.value),children:s(e.text)},e.id))),(0,r.jsxs)(p.A,{className:N()({mini:!0,"filter-btn":!0,active:_}),onClick:()=>{d(!0)},children:["Danh m\u1ee5c"," ",_?(0,r.jsxs)(r.Fragment,{children:["(",(0,r.jsx)("span",{className:"line-clamp",style:{maxWidth:"82px",textAlign:"left"},children:_}),")"]}):""]})]}),(0,r.jsx)("div",{className:"category__list",children:l?(0,r.jsx)("p",{children:"Loading..."}):g.map((e=>(0,r.jsx)(A.Fragment,{children:e.merchants.map((a=>(0,r.jsxs)("div",{className:"category__item",children:[(0,r.jsx)(b.N_,{to:a.website,children:(0,r.jsx)("img",{className:"cover-img",src:"https://fundiin.vn/file"+a.image,alt:"item"})}),[F.ONLINE,F.OFFLINE].includes(a.runningForm)?(0,r.jsx)("div",{className:N()({tag:!0,"tag--online":a.runningForm===F.ONLINE,"tag--offline":a.runningForm!==F.ONLINE}),children:(0,r.jsx)("span",{children:a.runningForm})}):null]},"".concat(e.id,"-").concat(a.keyTracking))))},e.id)))})]})]}),(0,r.jsx)(h.A,{width:"100%",open:c,title:s("category.Danh m\u1ee5c"),footer:(0,r.jsx)("div",{}),onCancel:()=>{d(!1)},children:(0,r.jsx)(U,{activeTabs:o,onChange:e=>{m(e),d(!1)}})})]})},B=()=>((0,u.r)("Fundiin - Brands"),(0,r.jsxs)(x.A,{children:[(0,r.jsx)("div",{className:"spacing"}),(0,r.jsx)(o,{}),(0,r.jsx)(L,{}),(0,r.jsx)(m.A,{})]}))}}]);
//# sourceMappingURL=63.d7276fda.chunk.js.map