(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"55Gs":function(n,l,o){"use strict";o.r(l);var t=o("CcnG"),i=function(){return function(){}}(),u=o("pMnS"),a=o("oBZk"),e=o("ZZ/e"),r=o("gIcY"),c=o("Ip0R"),b=o("kXsu"),s=o("kVNm"),p=o("zbXe"),d=function(){function n(n){this.noticiasService=n,this.categorias=["business","entertainment","general","health","science","sports","technology"],this.noticias=[]}return n.prototype.ngOnInit=function(){this.segment.value=this.categorias[0],this.cargarNoticias(this.categorias[0])},n.prototype.cambioCategoria=function(n){this.noticias=[],this.cargarNoticias(n.detail.value)},n.prototype.cargarNoticias=function(n,l){var o=this;this.noticiasService.getTopHeadlinesCategoria(n).subscribe(function(n){var t;(t=o.noticias).push.apply(t,n.articles),l&&l.target.complete()})},n.prototype.loadData=function(n){this.cargarNoticias(this.segment.value,n)},n}(),g=t.mb({encapsulation:0,styles:[["ion-segment-button[_ngcontent-%COMP%]{background-color:var(--ion-color-dark)!important;color:#fff!important}.segment-button-checked[_ngcontent-%COMP%]{color:var(--ion-color-primary)!important}"]],data:{}});function h(n){return t.Cb(0,[(n()(),t.ob(0,0,null,null,4,"ion-segment-button",[["mode","md"]],null,null,null,a.R,a.s)),t.nb(1,49152,null,0,e.jb,[t.h,t.k],{mode:[0,"mode"],value:[1,"value"]},null),(n()(),t.ob(2,0,null,0,2,"ion-label",[["text-capitalize",""]],null,null,null,a.P,a.p)),t.nb(3,49152,null,0,e.L,[t.h,t.k],null,null),(n()(),t.Bb(4,0,["",""]))],function(n,l){n(l,1,0,"md",l.context.$implicit)},function(n,l){n(l,4,0,l.context.$implicit)})}function m(n){return t.Cb(0,[t.zb(402653184,1,{segment:0}),(n()(),t.ob(1,0,null,null,12,"ion-header",[["no-border",""]],null,null,null,a.K,a.k)),t.nb(2,49152,null,0,e.z,[t.h,t.k],null,null),(n()(),t.ob(3,0,null,0,4,"ion-toolbar",[["color","dark"]],null,null,null,a.Z,a.z)),t.nb(4,49152,null,0,e.zb,[t.h,t.k],{color:[0,"color"]},null),(n()(),t.ob(5,0,null,0,2,"ion-title",[],null,null,null,a.Y,a.y)),t.nb(6,49152,null,0,e.xb,[t.h,t.k],null,null),(n()(),t.Bb(-1,0,[" Encabezados "])),(n()(),t.ob(8,0,null,0,5,"ion-segment",[["color","primary"],["mode","md"],["scrollable",""]],null,[[null,"ionChange"],[null,"ionBlur"]],function(n,l,o){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t.xb(n,11)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t.xb(n,11)._handleChangeEvent(o.target.value)&&i),"ionChange"===l&&(i=!1!==u.cambioCategoria(o)&&i),i},a.S,a.r)),t.yb(5120,null,r.b,function(n){return[n]},[e.Hb]),t.nb(10,49152,[[1,4]],0,e.ib,[t.h,t.k],{color:[0,"color"],mode:[1,"mode"],scrollable:[2,"scrollable"]},null),t.nb(11,16384,null,0,e.Hb,[t.k],null,null),(n()(),t.fb(16777216,null,0,1,null,h)),t.nb(13,278528,null,0,c.h,[t.N,t.K,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.ob(14,0,null,null,7,"ion-content",[["color","dark"]],null,null,null,a.I,a.i)),t.nb(15,49152,null,0,e.s,[t.h,t.k],{color:[0,"color"]},null),(n()(),t.ob(16,0,null,0,1,"app-noticias",[],null,null,null,b.b,b.a)),t.nb(17,114688,null,0,s.a,[],{noticias:[0,"noticias"]},null),(n()(),t.ob(18,0,null,0,3,"ion-infinite-scroll",[["threshold","150px"]],null,[[null,"ionInfinite"]],function(n,l,o){var t=!0;return"ionInfinite"===l&&(t=!1!==n.component.loadData(o)&&t),t},a.O,a.n)),t.nb(19,49152,null,0,e.C,[t.h,t.k],{threshold:[0,"threshold"]},null),(n()(),t.ob(20,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","crescent"],["loadingText","Cargando data..."]],null,null,null,a.N,a.o)),t.nb(21,49152,null,0,e.D,[t.h,t.k],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],function(n,l){var o=l.component;n(l,4,0,"dark"),n(l,10,0,"primary","md",""),n(l,13,0,o.categorias),n(l,15,0,"dark"),n(l,17,0,o.noticias),n(l,19,0,"150px"),n(l,21,0,"crescent","Cargando data...")},null)}function v(n){return t.Cb(0,[(n()(),t.ob(0,0,null,null,1,"app-tab2",[],null,null,null,m,g)),t.nb(1,114688,null,0,d,[p.a],null,null)],function(n,l){n(l,1,0)},null)}var f=t.kb("app-tab2",d,v,{},{},[]),k=o("j1ZV"),C=o("ZYCi");o.d(l,"Tab2PageModuleNgFactory",function(){return y});var y=t.lb(i,[],function(n){return t.ub([t.vb(512,t.j,t.ab,[[8,[u.a,f]],[3,t.j],t.x]),t.vb(4608,c.k,c.j,[t.u,[2,c.r]]),t.vb(4608,e.b,e.b,[t.z,t.g]),t.vb(4608,e.Db,e.Db,[e.b,t.j,t.q]),t.vb(4608,e.Gb,e.Gb,[e.b,t.j,t.q]),t.vb(4608,r.d,r.d,[]),t.vb(1073742336,c.b,c.b,[]),t.vb(1073742336,e.Bb,e.Bb,[]),t.vb(1073742336,r.c,r.c,[]),t.vb(1073742336,r.a,r.a,[]),t.vb(1073742336,k.a,k.a,[]),t.vb(1073742336,C.n,C.n,[[2,C.t],[2,C.m]]),t.vb(1073742336,i,i,[]),t.vb(1024,C.k,function(){return[[{path:"",component:d}]]},[])])})}}]);