webpackJsonp([1],{"/oXg":function(t,e){},0:function(t,e,n){t.exports=n("msSN")},"1UXm":function(t,e){},"2m4S":function(t,e){},"5e9e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return a});var r=function(){return{enable:!0,type:"none",effect:"none"}},a={setType:function(t,e){t.type=e},setEffect:function(t,e){t.effect=e}}},"B+OY":function(t,e){},CJsk:function(t,e){},FP9L:function(t,e){},FjKa:function(t,e){},LOWA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_PAGE_SCROLL_POSITION",function(){return s}),n.d(e,"state",function(){return c}),n.d(e,"mutations",function(){return u}),n.d(e,"actions",function(){return l});var r=n("bOdI"),a=n.n(r),i=n("Dd8w"),o=n.n(i),s="SET_PAGE_SCROLL_POSITION",c=function(){return{scrollPostionMap:{}}},u=a()({},s,function(t,e){var n=e.pageId,r=e.scrollPosition;t.scrollPostionMap=o()({},t.scrollPostionMap,a()({},n,r))}),l={savePageScrollPosition:function(t,e){var n=t.commit,r=e.pageId,a=e.scrollPosition;n(s,{pageId:r,scrollPosition:a})}}},PRzi:function(t,e){},SbDi:function(t,e){},Uz7q:function(t,e){t.exports={buildVersion:1539614134260,build:{ssr:!1,publicPath:"/",compress:!0,cssExtract:!0},middleware:{all:[],server:[],client:[]},router:{mode:"history",base:"/",pageTransition:{type:"fade",transitionClass:"fade"}},errorHandler:{defaultErrorMessage:"Internal Server Error",showRealErrorMessage:!1,errorPath:"/error"},serviceWorker:{enable:!0,swDest:"D:\\learn\\lavas\\lavas-2-sample\\dist\\service-worker.js"},skeleton:{enable:!0,asyncCSS:!0}}},VfP6:function(t,e,n){var r={"./pageTransition.js":"5e9e","./scrollBehavior.js":"LOWA"};function a(t){return n(i(t))}function i(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="VfP6"},gHRC:function(t,e){},msSN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("//Fk"),a=n.n(r),i=n("Gu7T"),o=n.n(i),s=n("Xxa5"),c=n.n(s),u=n("exGp"),l=n.n(u),p=n("/5sW"),d=n("1nuA"),v=function(){var t=l()(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();function f(t,e){var n={isClient:!0,app:e,store:t.store,route:t.to,from:t.from},r=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t){var e=t.status,a=void 0===e?302:e,i=t.path,o=void 0===i?"":i,s=t.query,c=void 0===s?{}:s,u=t.external,l=void 0!==u&&u;n._redirected=!0,r({path:o,query:c,status:a,external:l})},n}var m=function(){var t=l()(c.a.mark(function t(e,n){var r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=0;case 1:if(!(r<e.length)){t.next=9;break}if(!n._redirected){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,h(e[r],n);case 6:r++,t.next=1;break;case 9:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();function h(t,e){var n=void 0;return 2===t.length?n=new a.a(function(n,r){t(e,function(t,a){t?(e.error(t),r(t)):n(a)})}):(n=t(e))&&(n instanceof a.a||"function"==typeof n.then)||(n=a.a.resolve(n)),n}var _=n("Uz7q"),y=n.n(_),g=n("Dd8w"),w=n.n(g),b=n("p3jY"),x=n.n(b),j=n("/ocq"),k={name:"appshell",metaInfo:{title:"Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}],bodyAttrs:{"empty-appshell":void 0}}},q=n("XyMi"),E=Object(q.a)(k,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null).exports;var C=function(t){n("FjKa")},T=Object(q.a)({name:"detail-_id",metaInfo:function(){return{title:"Lavas Sample Detail "+this.$route.params.id,titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"Lavas Sample Detail"},{name:"description",content:"Lavas Sample Detail "+this.$route.params.id}]}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-wrapper"},[n("article",{staticClass:"detail-content"},[n("header",{staticClass:"detail-title"},[t._v("\n                Detail "+t._s(t.$route.params.id)+"\n            ")]),t._v(" "),n("router-link",{attrs:{to:{name:"detailId",params:{id:Number(t.$route.params.id)+1}}}},[t._v("Detail "+t._s(Number(t.$route.params.id)+1))]),t._v(" "),n("p",[t._v("\n            Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n            ")]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("Back to home")])],1)])},[],!1,C,"data-v-24d4e1cd",null).exports,S=n("fZjL"),P=n.n(S),I={name:"error",computed:{message:function(){return this.$route.params.error||"您访问的路径不存在"}},created:function(){var t=this.$route.query;0!==P()(t).length&&this.$router.replace({name:"error",params:t})}};var $=function(t){n("qnfh")},A=Object(q.a)(I,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-error"},[e("p",[this._v(this._s(this.message))])])},[],!1,$,"data-v-3a3e5021",null).exports;var O={name:"index",metaInfo:{title:"Home",titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},asyncData:function(){var t=l()(c.a.mark(function t(e){e.store,e.route;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()};var D=function(t){n("PRzi")};var z=function(t){n("nix2")};var R=function(t){n("2m4S")};var L=function(t){n("B+OY")};var M=function(t){n("/oXg")};var B=function(t){n("1UXm")},F=[{path:"/appshell",component:E,meta:{},name:"appshell"},{path:"/detail/:id",component:T,meta:{},name:"detailId"},{path:"/",component:Object(q.a)(O,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-index"},[n("h2",[t._v("巨鹿")]),t._v(" "),n("h4",[t._v("—木瓜出品—")]),t._v(" "),n("h6",[t._v("仅限lavas 学习测试用")]),t._v(" "),n("div",{staticClass:"jujilist"},[n("router-link",{attrs:{to:"/yanxigonglueall"}},[t._v("延禧攻略")]),t._v(" "),n("router-link",{attrs:{to:"/meirenxinjiall"}},[t._v("美人心计")])],1)])},[],!1,D,"data-v-74f0b456",null).exports,meta:{},name:"index"},{path:"/liangsheng/:id",component:Object(q.a)({name:"liangsheng-_id",metaInfo:function(){return{title:"凉生我们可不可以不忧伤 "+this.$route.params.id,titleTemplate:"%s - 巨鹿",meta:[{name:"keywords",content:"凉生我们可不可以不忧伤"},{name:"description",content:"凉生我们可不可以不忧伤 "+this.$route.params.id}]}},data:function(){return{jujiqian:"http://api.bbbbbb.me/yunjx2/?url=http://v.pptv.com/show/",jujihou:".html&type=pptv&way=1431&t=1539488526&s=6616cae10ec9871cb5e26b0b4d78e676",juji:["32L6eOBGtvRX1T0","oNibMCnLYSIbpZ88","BzkvrRV76ymMCnI","nt2ODHTaSojradE","SPJq6FC2JmTHRa0","BEQVkicth0Q9y8Fg","ndqPDXXbS4nsatI","mdaDAWnPP33gXsY","B0MYlv5k1BJ181s","C0cUkvpg0A5x71c","mNeEAmrQQH7hX8c","DkofnQVr2xl8ibmI","l9SFA2vRQXiciaYMg","ltWGBGzSQoDjYck","ldKHBW3TQ4HkYso","EVEKiaPBWxgRn5U0","zQpf3UWrG1m8OqI","FlIHhe1TwwFk4ko","GFgRjicddzQtu7FQ","yQZT0TmfD02wLpY","zg1e3ESqGlia7OaE","0A9c2kKoGFa5N58","yAdU0jqgEE6xL5c","3BtQzjacDEqtK5M","xANY1j6kFFK1M5s","wf5r6VG3J2XIRq4","sicBp50ib1JWPGRKw","4iaE6uCCG9jSXFX0","se57ibWHHN3XYVr4","5CM4th6E9DKVE3s","5SI3tR2D8zGUEno","ru1ibicGTKOnjbWcE","6SYzsRlic7y2QDnY","7ia0ibvCSKibjiabGYE","qeZz8VmicL23QTrY","9jUmpAxy4iaCDAWk","ibzgxrxd97SuODHQ","2RZDwSmPicz2gHoY","iczwtqxN56SeKCHA","Aj4rqRF35yWIBm4"]}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"liangsheng-wrapper"},[n("article",{staticClass:"liangsheng-content"},[n("header",{staticClass:"liangsheng-title"},[t._v("\n              凉生我们可不可以不忧伤 第"+t._s(t.$route.params.id)+"集 \n        ")]),t._v(" "),n("p",[n("iframe",{attrs:{width:"100%",height:"300",src:t.jujiqian+t.juji[t.$route.params.id-1]+t.jujihou,frameborder:"0"}})]),t._v(" "),n("router-link",{attrs:{to:{name:"liangshengId",params:{id:Number(t.$route.params.id)+1}}}},[t._v("下集 "+t._s(Number(t.$route.params.id)+1))]),t._v(" "),n("p",[t._l(40,function(e){return[n("router-link",{staticClass:"btnlink",attrs:{to:{name:"liangshengId",params:{id:e}}}},[t._v(t._s(e))])]})],2),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("首页")])],1)])},[],!1,z,"data-v-dce4ae12",null).exports,meta:{},name:"liangshengId"},{path:"/meirenxinji/:id",component:Object(q.a)({name:"meirenxinji-_id",metaInfo:function(){return{title:"美人心计 "+this.$route.params.id,titleTemplate:"%s - 巨鹿",meta:[{name:"keywords",content:"美人心计"},{name:"description",content:"美人心计 "+this.$route.params.id}]}},data:function(){return{jujiqian:"http://api.bbbbbb.me/yunjx2/?url=http://v.pptv.com/show/",jujihou:".html&type=pptv&way=1431&t=1539488526&s=6616cae10ec9871cb5e26b0b4d78e676",juji:["32L6eOBGtvRX1T0","oNibMCnLYSIbpZ88","BzkvrRV76ymMCnI","nt2ODHTaSojradE","SPJq6FC2JmTHRa0","BEQVkicth0Q9y8Fg","ndqPDXXbS4nsatI","mdaDAWnPP33gXsY","B0MYlv5k1BJ181s","C0cUkvpg0A5x71c","mNeEAmrQQH7hX8c","DkofnQVr2xl8ibmI","l9SFA2vRQXiciaYMg","ltWGBGzSQoDjYck","ldKHBW3TQ4HkYso","EVEKiaPBWxgRn5U0","zQpf3UWrG1m8OqI","FlIHhe1TwwFk4ko","GFgRjicddzQtu7FQ","yQZT0TmfD02wLpY","zg1e3ESqGlia7OaE","0A9c2kKoGFa5N58","yAdU0jqgEE6xL5c","3BtQzjacDEqtK5M","xANY1j6kFFK1M5s","wf5r6VG3J2XIRq4","sicBp50ib1JWPGRKw","4iaE6uCCG9jSXFX0","se57ibWHHN3XYVr4","5CM4th6E9DKVE3s","5SI3tR2D8zGUEno","ru1ibicGTKOnjbWcE","6SYzsRlic7y2QDnY","7ia0ibvCSKibjiabGYE","qeZz8VmicL23QTrY","9jUmpAxy4iaCDAWk","ibzgxrxd97SuODHQ","2RZDwSmPicz2gHoY","iczwtqxN56SeKCHA","Aj4rqRF35yWIBm4"]}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"meirenxinji-wrapper"},[n("article",{staticClass:"meirenxinji-content"},[n("header",{staticClass:"meirenxinji-title"},[t._v("\n              美人心计 第"+t._s(t.$route.params.id)+"集 \n        ")]),t._v(" "),n("p",[n("iframe",{attrs:{width:"100%",height:"300",src:t.jujiqian+t.juji[t.$route.params.id-1]+t.jujihou,frameborder:"0"}})]),t._v(" "),n("router-link",{attrs:{to:{name:"meirenxinjiId",params:{id:Number(t.$route.params.id)+1}}}},[t._v("下集 "+t._s(Number(t.$route.params.id)+1))]),t._v(" "),n("p",[t._l(40,function(e){return[n("router-link",{staticClass:"btnlink",attrs:{to:{name:"meirenxinjiId",params:{id:e}}}},[t._v(t._s(e))])]})],2),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("首页")])],1)])},[],!1,R,"data-v-3470d10a",null).exports,meta:{},name:"meirenxinjiId"},{path:"/meirenxinjiall",component:Object(q.a)({name:"meirenxinji-_id",metaInfo:function(){return{title:"美人心计 "+this.$route.params.id,titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"美人心计"},{name:"description",content:"美人心计 "+this.$route.params.id}]}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"meirenxinji-wrapper"},[n("article",{staticClass:"meirenxinji-content"},[n("header",{staticClass:"meirenxinji-title"},[t._v("\n            美人心计\n        ")]),t._v(" "),n("p",[t._l(40,function(e){return[n("router-link",{staticClass:"btnlink",attrs:{to:{name:"meirenxinjiId",params:{id:1}}}},[t._v(t._s(e))])]})],2),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("首页")])],1)])},[],!1,L,"data-v-6b2477e6",null).exports,meta:{},name:"meirenxinjiall"},{path:"/yanxigonglue/:id",component:Object(q.a)({name:"yanxigonglue-_id",metaInfo:function(){return{title:"美人心计 "+this.$route.params.id,titleTemplate:"%s - 巨鹿",meta:[{name:"keywords",content:"美人心计"},{name:"description",content:"美人心计 "+this.$route.params.id}]}},data:function(){return{jujiqian:"http://www.yy6080.cn/1717yun/index.php?url=https://www.iqiyi.com/",juji:["v_19rr2aesjs","v_19rr2aihnc","v_19rr2alpgc","v_19rr2al5wo","v_19rr2alz4s","v_19rr2akbkk","v_19rr2ajz8g","v_19rr2aktfc","v_19rr2aoia0","v_19rr2ao4ls","v_19rr2gftcw","v_19rr2ggmo0","v_19rr2ggx34","v_19rr2gghas","v_19rr2ger8o","v_19rr2gehms","v_19rr1xuxy0","v_19rr1xuh94","v_19rr1xy35w","v_19rr1xzbfg","v_19rr1xz5jg","v_19rr1xyzw0","v_19rr1xyqu8","v_19rr1xx5hg","v_19rqycryi8","v_19rqycvwm4","v_19rqycvo8o","v_19rqycvnz4","v_19rqycwk7o","v_19rqycwnuo","v_19rqycwfd8","v_19rqycwa74","v_19rqy4p6i4","v_19rqy4nju4","v_19rqy4ncnk","v_19rqy4n8hg","v_19rqy4my30","v_19rqy4n304","v_19rqy4o7k0","v_19rqy4nv78","v_19rqybtlso","v_19rqybtnkg","v_19rqybto5o","v_19rqybtgg0","v_19rqyx6u0o","v_19rqyx6oo0","v_19rqyx3gjc","v_19rqyx36so","v_19rqyx3810","v_19rqyx2yc4","v_19rqz2l7hc","v_19rqz2l9mw","v_19rqz2m9f4","v_19rqz2m1to","v_19rqyqe3xw","v_19rqyqe6cg","v_19rqyo9di0","v_19rqyo95v4","v_19rqyv94pw","v_19rqyv999g","v_19rqyvno8s","v_19rqyvnreg","v_19rqytm3x8","v_19rqytm5a8","v_19rqyrsdbs","v_19rqyron8k","v_19rqzk9lvc","v_19rqzk9bus","v_19rqzk9ee8","v_19rqzkaji4"]}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yanxigonglue-wrapper"},[n("article",{staticClass:"yanxigonglue-content"},[n("header",{staticClass:"yanxigonglue-title"},[t._v("\n              延禧攻略 第"+t._s(t.$route.params.id)+"集 \n        ")]),t._v(" "),n("p",[n("iframe",{attrs:{width:"100%",height:"300",src:t.jujiqian+t.juji[t.$route.params.id-1]+".html",frameborder:"0"}})]),t._v(" "),n("router-link",{attrs:{to:{name:"yanxigonglueId",params:{id:Number(t.$route.params.id)+1}}}},[t._v("下集 "+t._s(Number(t.$route.params.id)+1))]),t._v(" "),n("p",[t._l(70,function(e){return[n("router-link",{staticClass:"btnlink",attrs:{to:{name:"yanxigonglueId",params:{id:e}}}},[t._v(t._s(e))])]})],2),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("首页")])],1)])},[],!1,M,"data-v-b9ca7b42",null).exports,meta:{},name:"yanxigonglueId"},{path:"/yanxigonglueall",component:Object(q.a)({name:"yanxigonglue-_id",metaInfo:function(){return{title:"延禧攻略 "+this.$route.params.id,titleTemplate:"%s - 巨鹿",meta:[{name:"keywords",content:"延禧攻略"},{name:"description",content:"延禧攻略 "+this.$route.params.id}]}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yanxigonglue-wrapper"},[n("article",{staticClass:"yanxigonglue-content"},[n("header",{staticClass:"yanxigonglue-title"},[t._v("\n            延禧攻略\n        ")]),t._v(" "),n("p",[t._l(70,function(e){return[n("router-link",{staticClass:"btnlink",attrs:{to:{name:"yanxigonglueId",params:{id:1}}}},[t._v(t._s(e))])]})],2),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("首页")])],1)])},[],!1,B,"data-v-b4afae38",null).exports,meta:{},name:"yanxigonglueall"},{path:"/error",component:A,meta:{},name:"error",alias:"*"}];p.a.use(j.a);var Y=function(t,e,n){if(n)return n;var r={};return t.hash&&(r.selector=t.hash),t.matched.some(function(t){return t.meta.scrollToTop})&&(r.x=0,r.y=0),r},W=F.filter(function(t){return t.keepAlive||t.meta.keepAlive}).map(function(t){return t.name});var Q=n("woOf"),G=n.n(Q),N=n("BO1k"),X=n.n(N),H=n("NYxO");p.a.use(H.a);var V=n("VfP6"),K=V.keys(),U={},J=!0,Z=!1,tt=void 0;try{for(var et,nt=X()(K);!(J=(et=nt.next()).done);J=!0){var rt=et.value;if("./index.js"===rt){U=ft(rt);break}}}catch(t){Z=!0,tt=t}finally{try{!J&&nt.return&&nt.return()}finally{if(Z)throw tt}}if("function"!=typeof U){U.modules=U.modules||{};var at=!0,it=!1,ot=void 0;try{for(var st,ct=X()(K);!(at=(st=ct.next()).done);at=!0){var ut=st.value;if("./index.js"!==ut){var lt=ut.replace(/^\.\//,"").replace(/\.js$/,""),pt=lt.split("/"),dt=mt(U,pt);dt[lt=pt.pop()]=ft(ut),dt[lt].namespaced=!0}}}catch(t){it=!0,ot=t}finally{try{!at&&ct.return&&ct.return()}finally{if(it)throw ot}}}var vt=U instanceof Function?U:function(){return new H.a.Store(G()({},U,{state:U.state instanceof Function?U.state():{}}))};function ft(t){var e=V(t),n=e.default||e;if(n.commit)throw new Error("[lavas] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[lavas] state should be a function in store/"+t.replace("./",""));return n}function mt(t,e){if(1===e.length)return t.modules;var n=e.shift(),r=t.modules[n]=t.modules[n]||{};return r.namespaced=!0,r.modules=r.modules||{},mt(r,e)}var ht={name:"updateToast",props:{text:{type:String,default:"站点发生更新，请手动刷新"}},data:function(){return{show:!1}},mounted:function(){window.addEventListener("sw.update",this.handleUpdate)},beforeDestroy:function(){window.removeEventListener("sw.update",this.handleUpdate)},methods:{handleUpdate:function(t){this.show=!0},handleRefresh:function(){window.location.reload()}}};var _t=function(t){n("SbDi")},yt={name:"app",components:{UpdateToast:Object(q.a)(ht,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"popup"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"update-toast"},[e("span",[this._v(this._s(this.text))]),this._v(" "),e("span",{staticClass:"update-toast-close-btn",on:{click:this.handleRefresh}},[e("i",{staticClass:"iconfont icon-refresh"})])])])},[],!1,_t,"data-v-3553eff5",null).exports},computed:w()({},Object(H.c)("pageTransition",{pageTransitionType:function(t){return t.type},pageTransitionEffect:function(t){return t.effect}}),Object(H.c)("scrollBehavior",{scrollPostionMap:function(t){return t.scrollPostionMap}}),{pageTransitionClass:function(){return"transition-"+this.pageTransitionType},routerViewKey:function(){var t=this.$route,e=t.name,n=t.params,r=P()(n);return r.length?e+r.reduce(function(t,e){return t+n[e]},""):null}}),data:function(){return{keepAlivePages:W}},methods:w()({},Object(H.b)("scrollBehavior",["savePageScrollPosition"]),{restoreContainerScrollPosition:function(t,e){t.classList.add("app-view-scroll-enabled"),t.scrollTop=e},restoreBodyScrollPosition:function(t,e){t.classList.remove("app-view-scroll-enabled"),document.body.scrollTop=document.documentElement.scrollTop=e},handleBeforeEnter:function(t){var e=this,n=t.dataset.pageId,r=(this.scrollPostionMap[n]||{}).y,a=void 0===r?0:r;p.a.nextTick(function(){e.restoreContainerScrollPosition(t,a)})},handleAfterEnter:function(t){var e=t.dataset.pageId,n=(this.scrollPostionMap[e]||{}).y,r=void 0===n?0:n;this.restoreBodyScrollPosition(t,r)},handleBeforeLeave:function(t){var e=t.dataset.pageId,n=document.body.scrollTop||document.documentElement.scrollTop;this.restoreContainerScrollPosition(t,n),this.savePageScrollPosition({pageId:e,scrollPosition:{y:n}})}})};var gt=function(t){n("gHRC")},wt=Object(q.a)(yt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:t.pageTransitionEffect},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter,"before-leave":t.handleBeforeLeave}},[n("keep-alive",{attrs:{include:[].concat(t.keepAlivePages)}},[n("router-view",{key:t.routerViewKey,class:["app-view",t.pageTransitionClass],attrs:{"data-page-id":t.$route.fullPath}})],1)],1),t._v(" "),n("update-toast")],1)},[],!1,gt,null,null).exports;p.a.use(x.a),p.a.config.productionTip=!1;var bt={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}};var xt=function(t){n("FP9L")},jt=Object(q.a)(bt,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,xt,"data-v-5fa349a2",null).exports,kt=n("p5k0"),qt=n.n(kt),Et=n("XGXE"),Ct=n.n(Et);n("MU8w"),n("CJsk");qt.a.shim(),Ct.a.shim();var Tt=p.a.prototype.$loading=new p.a(jt).$mount(),St=function(){var t=function(){var t=new j.a({mode:"history",base:"/",scrollBehavior:Y,routes:F});return t.beforeEach(function(e,n,r){t.app.$store&&t.app.$store.state.pageTransition.enable&&(t.app.$store.commit("pageTransition/setType","fade"),t.app.$store.commit("pageTransition/setEffect","fade")),r()}),t}(),e=vt();return{App:p.a.extend(w()({router:t,store:e},wt)),router:t,store:e}}(),Pt=St.App,It=St.router,$t=St.store,At=y.a.build,Ot=At.ssr,Dt=At.cssExtract,zt=y.a.middleware,Rt=void 0===zt?{}:zt,Lt=y.a.skeleton,Mt=Lt.enable,Bt=Lt.asyncCSS,Ft=void 0;window.__INITIAL_STATE__&&$t.replaceState(window.__INITIAL_STATE__),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),document.body.appendChild(Tt.$el),p.a.mixin({beforeRouteUpdate:function(){var t=l()(c.a.mark(function t(e,n,r){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(a=this.$options.asyncData)?(Tt.start(),a.call(this,{store:this.$store,route:e}).then(function(){Tt.finish(),r()}).catch(r)):r();case 2:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}()});var Yt=!0;if(function(){var t=this;It.beforeEach(function(){var e=l()(c.a.mark(function e(n,r,a){var i,s,u,l,p,h,_;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(Yt||n.path!==r.path){t.next=2;break}return t.abrupt("return",a());case 2:return Yt=!1,i=It.getMatchedComponents(n),s=[].concat(o()(Rt.all||[]),o()(Rt.client||[]),o()(i.filter(function(t){var e=t.middleware;return!!e}).reduce(function(t,e){var n=e.middleware;return t.concat(n)},[]))),t.next=7,v(s);case 7:if(u=t.sent,!(l=s.find(function(t){return"function"!=typeof u[t]}))){t.next=11;break}throw new Error("Unknown middleware "+l);case 11:return p=!1,h=f({to:n,from:r,store:$t,next:function(t){if(Tt.finish&&Tt.finish(),!p){if(p=!0,t.external)return t.query=Object(d.stringify)(t.query),t.path=t.path+(t.query?"?"+t.query:""),window.location.replace(t.path),a();a(t)}}},Ft),_=s.map(function(t){return u[t]}),t.next=17,m(_,h);case 17:p||a();case 18:case"end":return t.stop()}},e,t)}));return function(t,n,r){return e.apply(this,arguments)}}())}(),!document.body.hasAttribute("empty-appshell")&&Ot)Ft=new Pt,It.onReady(function(){Qt(),Ft.$mount("#app")});else{var Wt=Mt&&Bt&&Dt;window.mountLavas=function(){setTimeout(function(){var t=document.querySelector("#app");t&&(t.innerHTML=""),Ft.$mount("#app")},0)},Qt(),Ft=new Pt,(Ot||!Wt||Wt&&window.STYLE_READY)&&window.mountLavas()}function Qt(){var t=this;It.beforeResolve(function(e,n,r){var i=It.getMatchedComponents(e),o=It.getMatchedComponents(n),s=!1,u=i.filter(function(t,e){return s||(s=o[e]!==t)});if(!u.length)return r();Tt.start(),a.a.all(u.filter(function(t){return t.asyncData&&(!t.asyncDataFetched||!e.meta.keepAlive)}).map(function(){var n=l()(c.a.mark(function n(r){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.asyncData({store:$t,route:e});case 2:r.asyncDataFetched=!0;case 3:case"end":return t.stop()}},n,t)}));return function(t){return n.apply(this,arguments)}}())).then(function(){Tt.finish(),r()}).catch(r)})}},nix2:function(t,e){},qnfh:function(t,e){}},[0]);
//# sourceMappingURL=index.34abafdc.js.map