(function(e){function t(t){for(var s,i,o=t[0],u=t[1],c=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],s=!0,o=1;o<r.length;o++){var u=r[o];0!==n[u]&&(s=!1)}s&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},n={app:0},a=[];function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0f95":function(e,t,r){},1466:function(e,t,r){"use strict";var s=r("68c7"),n=r.n(s);n.a},1663:function(e,t,r){"use strict";var s=r("7603"),n=r.n(s);n.a},"2be1":function(e,t,r){"use strict";var s=r("c91f"),n=r.n(s);n.a},"3ce4":function(e,t,r){},4947:function(e,t,r){},5160:function(e,t,r){"use strict";var s=r("7ab6"),n=r.n(s);n.a},"58aa":function(e,t,r){"use strict";var s=r("ae82"),n=r.n(s);n.a},"68c7":function(e,t,r){},"72df":function(e,t,r){"use strict";var s=r("0f95"),n=r.n(s);n.a},7603:function(e,t,r){},"7ab6":function(e,t,r){},9797:function(e,t,r){},ae82:function(e,t,r){},bd2e:function(e,t,r){"use strict";var s=r("9797"),n=r.n(s);n.a},c91f:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);var s=r("9ab4"),n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],o=r("60a3"),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(s["__extends"])(t,e),t=Object(s["__decorate"])([Object(o["a"])({})],t),t}(o["c"]),c=u,l=c,d=(r("f26c"),r("2877")),p=Object(d["a"])(l,a,i,!1,null,null,null),m=p.exports,f=r("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("SiteHeader"),r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[e._v("あなたのホーム")]),r("div",{staticClass:"dummy-contents"},e._l(30,(function(t){return r("div",[e._v(e._s(t))])})),0)])],1)},h=[],b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"site-header"},[r("router-link",{attrs:{to:{name:"home"}}},[r("div",{staticClass:"logo"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"#555",d:"M0 0v24h24v-24h-24zm18 18h-12v-12h12v12z"}})]),r("span",{staticClass:"title"},[e._v(" MY SERVICE ")])])]),e.isSignedIn?r("div",{staticClass:"user-info",on:{click:function(t){return t.stopPropagation(),e.onClickUser(t)}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"#888",d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"}})]),r("span",{staticClass:"name"},[e._v(" "+e._s(e.userName)+" ")]),r("UserMenu",{directives:[{name:"show",rawName:"v-show",value:e.isOpenMenu,expression:"isOpenMenu"}]})],1):e._e()],1)},_=[],g=r("6fc5"),w=r("2f62");n["a"].use(w["a"]);var O=new w["a"].Store({strict:!1}),y=r("8aa5"),j=r.n(y),M=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._user=r.makeEmptyUser(),t}var r;return Object(s["__extends"])(t,e),r=t,Object.defineProperty(t.prototype,"isSignedIn",{get:function(){for(var e=0;e<this._user.providers.length;e++){var t=this._user.providers[e];if(t&&("password"!=t||this._user.emailVerified))return!0}return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"user",{get:function(){return JSON.parse(JSON.stringify(this._user))},enumerable:!0,configurable:!0}),t.prototype.setUser=function(e){this._user=e},t.prototype.init=function(){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var e=this;return Object(s["__generator"])(this,(function(t){return[2,new Promise((function(t){return Object(s["__awaiter"])(e,void 0,void 0,(function(){var e;return Object(s["__generator"])(this,(function(s){switch(s.label){case 0:return j.a.initializeApp({apiKey:"AIzaSyBqQoA24zxm4puPW8USlOKWRv83-m7MwpU",authDomain:"logintutorial-e5644.firebaseapp.com",databaseURL:"https://logintutorial-e5644.firebaseio.com",projectId:"logintutorial-e5644",storageBucket:"logintutorial-e5644.appspot.com",messagingSenderId:"487156093161",appId:"1:487156093161:web:c013775c008042a5952078"}),[4,new Promise((function(e){var t=j.a.auth().onAuthStateChanged((function(r){t(),e()}))}))];case 1:return s.sent(),j.a.auth().setPersistence(j.a.auth.Auth.Persistence.LOCAL),j.a.auth().useDeviceLanguage(),e=j.a.auth().currentUser,this.setUser(r.makeUserByFirebaseUser(e)),t(),[2]}}))}))}))]}))}))},t.prototype.signUp=function(e){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var t=this;return Object(s["__generator"])(this,(function(n){return[2,new Promise((function(n){return Object(s["__awaiter"])(t,void 0,void 0,(function(){var t,a,i,o;return Object(s["__generator"])(this,(function(s){switch(s.label){case 0:return[4,j.a.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(e){if(!e.user)return r.makeFailedResultByCode("999");var t={url:window.location.origin+window.location.pathname};return e.user.sendEmailVerification(t),r.makeSuccessResult()})).catch((function(e){return r.makeFailedResultByFirebaseError(e)}))];case 1:return t=s.sent(),t.isError?(n(t),[2]):(a=j.a.auth().currentUser,a?[4,this.editUser({email:a.email||"",name:e.name,photoURL:""})]:[2,r.makeFailedResultByCode("999")]);case 2:return i=s.sent(),i.isError?(n(i),[2]):[4,this.signOut()];case 3:return o=s.sent(),o.isError?(n(o),[2]):(n(r.makeSuccessResult()),[2])}}))}))}))]}))}))},t.prototype.signIn=function(e){var t=this;return new Promise((function(s){j.a.auth().signInWithEmailAndPassword(e.email,e.password).then((function(e){e.user?e.user.emailVerified?(t.setUser(r.makeUserByFirebaseUser(e.user)),s(r.makeSuccessResult())):s(r.makeFailedResultByCode("001")):s(r.makeFailedResultByCode("999"))})).catch((function(e){s(r.makeFailedResultByFirebaseError(e))}))}))},t.prototype.editUser=function(e){var t=this;return new Promise((function(s){var n=j.a.auth().currentUser;n?n.updateProfile({displayName:e.name}).then((function(e){var a=r.makeUserByFirebaseUser(n);t.setUser(a),s(r.makeSuccessResult())})).catch((function(e){s(r.makeFailedResultByFirebaseError(e))})):s(r.makeFailedResultByCode("002"))}))},t.prototype.signOut=function(){var e=this;return new Promise((function(t){j.a.auth().signOut().then((function(s){e.setUser(r.makeEmptyUser()),t(r.makeSuccessResult())})).catch((function(e){t(r.makeFailedResultByFirebaseError(e))}))}))},t.prototype.sendPasswordReset=function(e){return new Promise((function(t){var s={url:window.location.origin+window.location.pathname};j.a.auth().sendPasswordResetEmail(e.email,s).then((function(e){t(r.makeSuccessResult())})).catch((function(e){t(r.makeFailedResultByFirebaseError(e))}))}))},t.prototype.deleteUser=function(){var e=this;return new Promise((function(t){var s=j.a.auth().currentUser;s?s.delete().then((function(s){e.setUser(r.makeEmptyUser()),t(r.makeSuccessResult())})).catch((function(e){t(r.makeFailedResultByFirebaseError(e))})):t(r.makeFailedResultByCode("002"))}))},t.makeEmptyUser=function(){return{id:"",name:"",email:"",providers:[],emailVerified:!1}},t.makeUserByFirebaseUser=function(e){return e?{id:e.uid,email:e.email||"",name:e.displayName||"",photoURL:e.photoURL||"",providers:e.providerData.map((function(e){return e?e.providerId:""})),emailVerified:e.emailVerified}:r.makeEmptyUser()},t.makeSuccessResult=function(){return{isError:!1,errorCode:"",errorMessage:""}},t.makeFailedResult=function(e){return{isError:!0,errorCode:e.code,errorMessage:e.message}},t.makeFailedResultByCode=function(e){var t={"001":"Please click the URL to verify your email address","002":"Please sign in",999:"Unexpected error occurred"};return r.makeFailedResult({code:e,message:t[e]})},t.makeFailedResultByFirebaseError=function(e){return r.makeFailedResult({code:e.code,message:e.message})},Object(s["__decorate"])([g["c"]],t.prototype,"setUser",null),Object(s["__decorate"])([g["a"]],t.prototype,"init",null),Object(s["__decorate"])([g["a"]],t.prototype,"signUp",null),Object(s["__decorate"])([g["a"]],t.prototype,"signIn",null),Object(s["__decorate"])([g["a"]],t.prototype,"editUser",null),Object(s["__decorate"])([g["a"]],t.prototype,"signOut",null),Object(s["__decorate"])([g["a"]],t.prototype,"sendPasswordReset",null),Object(s["__decorate"])([g["a"]],t.prototype,"deleteUser",null),t=r=Object(s["__decorate"])([Object(g["b"])({name:"UserStore",dynamic:!0,store:O,namespaced:!0})],t),t}(g["d"]),C=Object(g["e"])(M),S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"slide-animation"}},[r("div",{staticClass:"user-menu"},[r("router-link",{attrs:{to:{name:"edit_user"}}},[e._v(" ユーザー情報の編集")]),r("router-link",{attrs:{to:{name:"sign_out"}}},[e._v(" サインアウト")]),r("router-link",{attrs:{to:{name:"quit"}}},[e._v(" 退会する")])],1)])},k=[],E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(s["__extends"])(t,e),t=Object(s["__decorate"])([Object(o["a"])({components:{}})],t),t}(o["c"]),x=E,U=x,P=(r("5160"),Object(d["a"])(U,S,k,!1,null,"757c0b0a",null)),R=P.exports,N=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.isOpenMenu=!1,t.closeMenuForListen=function(){return t.closeMenu()},t}return Object(s["__extends"])(t,e),Object.defineProperty(t.prototype,"isSignedIn",{get:function(){return C.isSignedIn},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"userName",{get:function(){return C.user.name},enumerable:!0,configurable:!0}),t.prototype.onClickUser=function(){this.isOpenMenu?this.closeMenu():this.openMenu()},t.prototype.openMenu=function(){this.isOpenMenu=!0,document.addEventListener("click",this.closeMenuForListen)},t.prototype.closeMenu=function(){this.isOpenMenu=!1,document.removeEventListener("click",this.closeMenuForListen)},t=Object(s["__decorate"])([Object(o["a"])({components:{UserMenu:R}})],t),t}(o["c"]),F=N,B=F,I=(r("1466"),Object(d["a"])(B,b,_,!1,null,"2941886e",null)),$=I.exports,H=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(s["__extends"])(t,e),t=Object(s["__decorate"])([Object(o["a"])({components:{SiteHeader:$}})],t),t}(o["c"]),A=H,L=A,q=(r("58aa"),Object(d["a"])(L,v,h,!1,null,"0d608a31",null)),D=q.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("SiteHeader"),e.isSubmitted?e._e():r("form",[r("div",{staticClass:"title"},[e._v(" 新規ユーザー登録 ")]),r("div",{staticClass:"inputs"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",placeholder:"name"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("div",{staticClass:"buttons"},[r("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.onClickSubmit(t)}}},[e._v("登録する")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"message"},[r("ErrorMessage",{attrs:{message:e.errorMessage}})],1)]),e.isSubmitted?r("div",{staticClass:"confirm-message"},[e._v(" 確認メールを送信しました。"),r("br"),e._v(" ご確認ください。 ")]):e._e()],1)},V=[],T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v(e._s(e.message))])])},J=[],W=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(s["__extends"])(t,e),Object(s["__decorate"])([Object(o["b"])()],t.prototype,"message",void 0),t=Object(s["__decorate"])([o["a"]],t),t}(o["c"]),Q=W,K=Q,Y=(r("ec27"),Object(d["a"])(K,T,J,!1,null,"67252b54",null)),G=Y.exports,X=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.userName="",t.email="",t.password="",t.errorMessage="",t.isSubmitted=!1,t}return Object(s["__extends"])(t,e),t.prototype.onClickSubmit=function(){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var e;return Object(s["__generator"])(this,(function(t){switch(t.label){case 0:return this.isSubmitted=!1,this.errorMessage="",[4,C.signUp({name:this.userName,email:this.email,password:this.password})];case 1:return e=t.sent(),e.isError?(this.errorMessage=e.errorMessage,[2]):(this.isSubmitted=!0,[2])}}))}))},t=Object(s["__decorate"])([Object(o["a"])({components:{SiteHeader:$,ErrorMessage:G}})],t),t}(o["c"]),Z=X,ee=Z,te=(r("72df"),Object(d["a"])(ee,z,V,!1,null,"126cf8e2",null)),re=te.exports,se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("SiteHeader"),r("form",[r("div",{staticClass:"title"},[e._v(" サインイン ")]),r("div",{staticClass:"inputs"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("div",{staticClass:"buttons"},[r("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.onClickSignIn(t)}}},[e._v("サインイン")]),r("router-link",{staticClass:"button",attrs:{to:{name:"sign_up"}}},[e._v(" 新しく登録 ")]),r("router-link",{staticClass:"button",attrs:{to:{name:"reset_password"}}},[e._v(" パスワードを忘れた ")])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"message"},[r("ErrorMessage",{attrs:{message:e.errorMessage}})],1)])],1)},ne=[],ae=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.email="",t.password="",t.errorMessage="",t}return Object(s["__extends"])(t,e),Object.defineProperty(t.prototype,"isError",{get:function(){return""!=this.errorMessage},enumerable:!0,configurable:!0}),t.prototype.onClickSignIn=function(){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var e;return Object(s["__generator"])(this,(function(t){switch(t.label){case 0:return this.errorMessage="",[4,C.signIn({email:this.email,password:this.password})];case 1:return e=t.sent(),e.isError?(this.errorMessage=e.errorMessage,[2]):(this.$router.push({name:"home"}),[2])}}))}))},t=Object(s["__decorate"])([Object(o["a"])({components:{SiteHeader:$,ErrorMessage:G}})],t),t}(o["c"]),ie=ae,oe=ie,ue=(r("efb8"),Object(d["a"])(oe,se,ne,!1,null,"7a45bb2e",null)),ce=ue.exports,le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("SiteHeader"),e.isSubmitted?e._e():r("form",[r("div",{staticClass:"title"},[e._v(" パスワードリセット ")]),r("div",{staticClass:"inputs"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("div",{staticClass:"buttons"},[r("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.onClickSubmit(t)}}},[e._v("リセットする")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"message"},[r("ErrorMessage",{attrs:{message:e.errorMessage}})],1)]),e.isSubmitted?r("div",{staticClass:"confirm-message"},[e._v(" リセット用のメールを送信しました。"),r("br"),e._v(" ご確認ください。 ")]):e._e()],1)},de=[],pe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.email="",t.errorMessage="",t.isSubmitted=!1,t}return Object(s["__extends"])(t,e),t.prototype.onClickSubmit=function(){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var e;return Object(s["__generator"])(this,(function(t){switch(t.label){case 0:return this.isSubmitted=!1,this.errorMessage="",[4,C.sendPasswordReset({email:this.email})];case 1:return e=t.sent(),e.isError?(this.errorMessage=e.errorMessage,[2]):(this.isSubmitted=!0,[2])}}))}))},t=Object(s["__decorate"])([Object(o["a"])({components:{SiteHeader:$,ErrorMessage:G}})],t),t}(o["c"]),me=pe,fe=me,ve=(r("2be1"),Object(d["a"])(fe,le,de,!1,null,"5352f880",null)),he=ve.exports,be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("SiteHeader"),r("form",[r("div",{staticClass:"title"},[e._v(" ユーザー情報の修正 ")]),r("div",{staticClass:"inputs"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",placeholder:"new name"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})]),r("div",{staticClass:"buttons"},[r("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v("更新")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"message"},[r("ErrorMessage",{attrs:{message:e.errorMessage}})],1)])],1)},_e=[],ge=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.userName="",t.errorMessage="",t}return Object(s["__extends"])(t,e),t.prototype.created=function(){this.userName=C.user.name},t.prototype.onSubmit=function(){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var e,t;return Object(s["__generator"])(this,(function(r){switch(r.label){case 0:return e=C.user,e.name=this.userName,[4,C.editUser(e)];case 1:return t=r.sent(),t.isError?(this.errorMessage=t.errorMessage,[2]):(alert("更新しました"),[2])}}))}))},t=Object(s["__decorate"])([Object(o["a"])({components:{ErrorMessage:G,SiteHeader:$}})],t),t}(o["c"]),we=ge,Oe=we,ye=(r("bd2e"),Object(d["a"])(Oe,be,_e,!1,null,"23409c92",null)),je=ye.exports,Me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("SiteHeader"),r("ErrorMessage",{attrs:{message:e.errorMessage}})],1)},Ce=[],Se=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.errorMessage="",t}return Object(s["__extends"])(t,e),t.prototype.created=function(){this.signOut()},t.prototype.signOut=function(){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var e,t=this;return Object(s["__generator"])(this,(function(r){switch(r.label){case 0:return[4,C.signOut()];case 1:return e=r.sent(),e.isError?(this.errorMessage=e.errorMessage,setTimeout((function(){return t.$router.replace({name:"home"})}),3e3)):this.$router.replace({name:"front"}),[2]}}))}))},t=Object(s["__decorate"])([Object(o["a"])({components:{SiteHeader:$,ErrorMessage:G}})],t),t}(o["c"]),ke=Se,Ee=ke,xe=Object(d["a"])(Ee,Me,Ce,!1,null,"c1aa5588",null),Ue=xe.exports,Pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("SiteHeader"),e.isSubmitted?e._e():r("form",[r("div",{staticClass:"title"},[e._v(" 退会処理 ")]),r("p",{staticClass:"explain"},[e._v(" 全ての登録情報を削除します。 ")]),r("div",{staticClass:"buttons"},[r("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.onClickQuit(t)}}},[e._v("退会")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"message"},[r("ErrorMessage",{attrs:{message:e.errorMessage}})],1)]),e.isSubmitted?r("div",{staticClass:"confirm-message"},[e._v(" ご利用ありがとうございました。 ")]):e._e()],1)},Re=[],Ne=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.errorMessage="",t.isSubmitted=!1,t}return Object(s["__extends"])(t,e),t.prototype.onClickQuit=function(){return Object(s["__awaiter"])(this,void 0,void 0,(function(){var e,t=this;return Object(s["__generator"])(this,(function(r){switch(r.label){case 0:return this.isSubmitted=!1,confirm("この操作は取り消せません、よろしいですか？")?[4,C.deleteUser()]:[2];case 1:return e=r.sent(),e.isError?(this.errorMessage=e.errorMessage,[2]):(this.isSubmitted=!0,setTimeout((function(){return t.$router.replace({name:"front"})}),3e3),[2])}}))}))},t=Object(s["__decorate"])([Object(o["a"])({components:{SiteHeader:$,ErrorMessage:G}})],t),t}(o["c"]),Fe=Ne,Be=Fe,Ie=(r("1663"),Object(d["a"])(Be,Pe,Re,!1,null,"99956bc8",null)),$e=Ie.exports;n["a"].use(f["a"]);var He=[{path:"/",name:"front",component:ce},{path:"/sign_up",name:"sign_up",component:re},{path:"/reset_password",name:"reset_password",component:he},{path:"/home",name:"home",meta:{requiresAuth:!0},component:D},{path:"/edit_user",name:"edit_user",meta:{requiresAuth:!0},component:je},{path:"/sign_out",name:"sign_out",meta:{requiresAuth:!0},component:Ue},{path:"/quit",name:"quit",meta:{requiresAuth:!0},component:$e}],Ae=new f["a"]({routes:He});Ae.beforeEach((function(e,t,r){var s=e.matched.some((function(e){return e.meta.requiresAuth})),n=C.isSignedIn;!s||n?s||!n?r():r({name:"home"}):r({name:"front"})}));var Le=Ae;n["a"].config.productionTip=!1,function(){Object(s["__awaiter"])(void 0,void 0,void 0,(function(){return Object(s["__generator"])(this,(function(e){switch(e.label){case 0:return[4,C.init()];case 1:return e.sent(),new n["a"]({router:Le,store:O,render:function(e){return e(m)}}).$mount("#app"),[2]}}))}))}()},e8aa:function(e,t,r){},ec27:function(e,t,r){"use strict";var s=r("3ce4"),n=r.n(s);n.a},efb8:function(e,t,r){"use strict";var s=r("4947"),n=r.n(s);n.a},f26c:function(e,t,r){"use strict";var s=r("e8aa"),n=r.n(s);n.a}});
//# sourceMappingURL=app.9013c478.js.map