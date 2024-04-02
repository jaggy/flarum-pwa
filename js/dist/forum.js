/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={648:(t,e,r)=>{var n=r(288).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",p=s.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),s=new B(n||[]);return i(a,"_invoke",{value:L(t,r,s)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h={};function m(){}function v(){}function y(){}var w={};f(w,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(P([])));b&&b!==r&&a.call(b,c)&&(w=b);var x=y.prototype=m.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,s,c){var u=d(t[o],t,i);if("throw"!==u.type){var p=u.arg,f=p.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(f).then((function(t){p.value=t,s(p)}),(function(t){return r("throw",t,s,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=E(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=y,i(x,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=f(y,p,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,p,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},_(k.prototype),f(k.prototype,u,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(x),f(x,p,"Generator"),f(x,c,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,e,r)=>{var n=r(648)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";function t(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=e.apply(r,n);function s(e){t(i,o,a,s,c,"next",e)}function c(e){t(i,o,a,s,c,"throw",e)}s(void 0)}))}}r.r(n);var o=r(357),a=r.n(o);const i=flarum.core.compat["common/extend"];function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},s.apply(this,arguments)}var c,u,p=function(t,e){return e.some((function(e){return t instanceof e}))},f=new WeakMap,l=new WeakMap,d=new WeakMap,h=new WeakMap,v=new WeakMap,y={get:function(t,e,r){if(t instanceof IDBTransaction){if("done"===e)return l.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return g(t[e])},set:function(t,e,r){return t[e]=r,!0},has:function(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){return"function"==typeof t?(e=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e.apply(b(this),r),g(f.get(this))}:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return g(e.apply(b(this),r))}:function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];var a=e.call.apply(e,[b(this),t].concat(n));return d.set(a,t.sort?t.sort():[t]),g(a)}:(t instanceof IDBTransaction&&function(t){if(!l.has(t)){var e=new Promise((function(e,r){var n=function(){t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=function(){e(),n()},a=function(){r(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)}));l.set(t,e)}}(t),p(t,c||(c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,y):t);var e}function g(t){if(t instanceof IDBRequest)return e=t,(r=new Promise((function(t,r){var n=function(){e.removeEventListener("success",o),e.removeEventListener("error",a)},o=function(){t(g(e.result)),n()},a=function(){r(e.error),n()};e.addEventListener("success",o),e.addEventListener("error",a)}))).then((function(t){t instanceof IDBCursor&&f.set(t,e)})).catch((function(){})),v.set(r,e),r;var e,r;if(h.has(t))return h.get(t);var n=w(t);return n!==t&&(h.set(t,n),v.set(n,t)),n}var b=function(t){return v.get(t)};function x(t,e,r){var n=void 0===r?{}:r,o=n.blocked,a=n.upgrade,i=n.blocking,s=n.terminated,c=indexedDB.open(t,e),u=g(c);return a&&c.addEventListener("upgradeneeded",(function(t){a(g(c.result),t.oldVersion,t.newVersion,g(c.transaction))})),o&&c.addEventListener("blocked",(function(){return o()})),u.then((function(t){s&&t.addEventListener("close",(function(){return s()})),i&&t.addEventListener("versionchange",(function(){return i()}))})).catch((function(){})),u}var _,k=["get","getKey","getAll","getAllKeys","count"],L=["put","add","delete","clear"],E=new Map;function S(t,r){if(t instanceof IDBDatabase&&!(r in t)&&"string"==typeof r){if(E.get(r))return E.get(r);var n=r.replace(/FromIndex$/,""),o=r!==n,i=L.includes(n);if(n in(o?IDBIndex:IDBObjectStore).prototype&&(i||k.includes(n))){var s=function(){var t=e(a().mark((function t(e){var r,s,c,u,p,f,l,d=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(s=this.transaction(e,i?"readwrite":"readonly"),c=s.store,u=d.length,p=new Array(u>1?u-1:0),f=1;f<u;f++)p[f-1]=d[f];return o&&(c=c.index(p.shift())),t.next=6,(r=c)[n].apply(r,p);case 6:if(l=t.sent,!i){t.next=10;break}return t.next=10,s.done;case 10:return t.abrupt("return",l);case 11:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}();return E.set(r,s),s}}}y=s({},_=y,{get:function(t,e,r){return S(t,e)||_.get(t,e,r)},has:function(t,e){return!!S(t,e)||_.has(t,e)}});const N=flarum.core.compat["common/components/Page"];var B=r.n(N);const P=flarum.core.compat["common/components/LinkButton"];var j=r.n(P);const O=flarum.core.compat["forum/components/SessionDropdown"];var I=r.n(O);const D=flarum.core.compat["common/utils/extractText"];var M=r.n(D);const T=flarum.core.compat["forum/utils/DiscussionControls"];var A=r.n(T);const C=flarum.core.compat["forum/utils/PostControls"];var W=r.n(C);const q=flarum.core.compat["forum/utils/UserControls"];var G=r.n(q);const F=flarum.core.compat["common/components/Button"];var R=r.n(F);function K(t){return U.apply(this,arguments)}function U(){return(U=e(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=M()(e.title),t.next=4,navigator.share({title:r,url:e.url});case 4:resultPara.textContent="MDN shared successfully",t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error: "+t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}const V=flarum.core.compat["forum/components/NotificationGrid"];var z=r.n(V);const Y=flarum.core.compat["forum/components/SettingsPage"];var H=r.n(Y);const J=flarum.core.compat["common/components/Alert"];var $=r.n(J);const Q=flarum.core.compat["common/components/Link"];var X=r.n(Q);const Z=flarum.core.compat["common/helpers/icon"];var tt=r.n(Z),et=function(t){return app.sw.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:app.forum.attribute("vapidPublicKey")}).then((function(e){t&&app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/pwa/push",body:{subscription:e}})}))},rt=function(){if(!app.session.user)return!1;var t,e=app.session.user.preferences();for(t in e)if(("string"==typeof t||t instanceof String)&&t.startsWith("notify_")&&t.endsWith("_push")&&e[t])return!0;return!1},nt=function(){var t=e(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(app.cache.pwaRefreshed||!("Notification"in window)||"granted"!==window.Notification.permission||!rt()){t.next=11;break}return t.prev=1,t.next=4,et(!0);case 4:t.next=11;break;case 6:if(t.prev=6,t.t0=t.catch(1),e.pushManager){t.next=10;break}return t.abrupt("return");case 10:e.pushManager.getSubscription().then((function(t){return t.unsubscribe().then(et.bind(void 0,!0))}));case 11:app.cache.pwaRefreshed=!0;case 12:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}(),ot=function(){return app.forum.attribute("vapidPublicKey")};app.initializers.add("askvortsov/flarum-pwa",(function(){(0,i.extend)(B().prototype,"oninit",(function(){var t=app.forum.attribute("basePath").trimRight("/"),r=function(){var r=e(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=x("keyval-store",1,{upgrade:function(t){t.createObjectStore("keyval")}}),e.next=3,r;case 3:e.sent.put("keyval",app.forum.data.attributes,"flarum.forumPayload"),"serviceWorker"in navigator&&navigator.serviceWorker.register(t+"/sw",{scope:t+"/"}).then((function(t){navigator.serviceWorker.ready.then((function(){app.sw=t,nt(t)}))}));case 5:case"end":return e.stop()}}),e)})));return function(){return r.apply(this,arguments)}}();r()})),(0,i.extend)(I().prototype,"items",(function(t){(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://"))&&t.has("administration")&&t.replace("administration",j().component({icon:"fas fa-wrench",href:app.forum.attribute("adminUrl"),target:"_self",external:!0},app.translator.trans("core.forum.header.admin_button")))})),(0,i.extend)(A(),"userControls",(function(t,e){navigator.share&&t.add("share",R().component({icon:"fas fa-share-square",onclick:function(){return K({title:e.title(),url:window.location.protocol+"//"+window.location.hostname+app.route.discussion(e)})}},app.translator.trans("askvortsov-pwa.forum.discussion_controls.share_button")),-1)})),(0,i.extend)(W(),"userControls",(function(t,e){navigator.share&&t.add("share",R().component({icon:"fas fa-share-square",onclick:function(){return K({title:app.translator.trans("askvortsov-pwa.forum.post_controls.share_api.title",{username:e.user().displayName(),title:e.discussion().title()}),url:window.location.protocol+"//"+window.location.hostname+app.route.post(e)})}},app.translator.trans("askvortsov-pwa.forum.post_controls.share_button")),100)})),(0,i.extend)(G(),"userControls",(function(t,e){navigator.share&&t.add("share",R().component({icon:"fas fa-share-square",onclick:function(){return K({title:e.displayName(),url:window.location.protocol+"//"+window.location.hostname+app.route.user(e)})}},app.translator.trans("askvortsov-pwa.forum.user_controls.share_button")),100)})),(0,i.extend)(B().prototype,"oncreate",(function(){if(ot()){var t=function(){localStorage.setItem("askvortov-pwa.notif-alert.dismissed",JSON.stringify({timestamp:(new Date).getTime()}))};app.alerts.dismiss(app.cache.pwaNotifsAlert),!localStorage.getItem("askvortov-pwa.notif-alert.dismissed")&&"Notification"in window&&"default"===window.Notification.permission&&rt()&&(app.cache.pwaNotifsAlert=app.alerts.show({controls:[m(X(),{class:"Button Button--link",href:app.route("settings"),onclick:function(){return t()}},app.translator.trans("askvortsov-pwa.forum.alerts.optin_button"))],ondismiss:t},app.translator.trans("askvortsov-pwa.forum.alerts.optin")))}})),(0,i.extend)(z().prototype,"notificationMethods",(function(t){ot()&&t.add("push",{name:"push",icon:"fas fa-mobile",label:app.translator.trans("askvortsov-pwa.forum.settings.push_header")})})),(0,i.extend)(H().prototype,"notificationsItems",(function(t){if(ot())if(t.add("firebase-push-optin-default",$().component({itemClassName:"pwa-setting-alert",dismissible:!1,controls:[R().component({className:"Button Button--link",onclick:function(){window.webkit.messageHandlers["push-permission-request"].postMessage("push-permission-request")}},app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.access_default_button"))]},[tt()("fas fa-exclamation-circle"),app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.access_default")]),10),"Notification"in window)if("default"===window.Notification.permission){if(!ot())return;t.add("push-optin-default",$().component({itemClassName:"pwa-setting-alert",dismissible:!1,controls:[R().component({className:"Button Button--link",onclick:function(){window.Notification.requestPermission((function(t){m.redraw(),"granted"===t&&et(!0)}))}},app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.access_default_button"))]},[tt()("fas fa-exclamation-circle"),app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.access_default")]),10)}else"denied"===window.Notification.permission&&t.add("push-optin-denied",$().component({itemClassName:"pwa-setting-alert",dismissible:!1,type:"error",controls:[m("a",{class:"Button Button--link",href:"https://support.humblebundle.com/hc/en-us/articles/360008513933-Enabling-and-Disabling-Browser-Notifications-in-Various-Browsers"},app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.access_denied_button"))]},[tt()("fas fa-exclamation-triangle"),app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.access_denied")]),10);else t.add("push-no-browser-support",$().component({dismissible:!1,controls:[m("a",{class:"Button Button--link",href:"https://developer.mozilla.org/en-US/docs/Web/API/Push_API"},app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.no_browser_support_button"))]},[tt()("fas fa-exclamation-triangle"),app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.no_browser_support")]),10)})),(0,i.extend)(H().prototype,"oncreate",(function(){window.addEventListener("push-permission-request",(function(t){alert("push-permission-request"+t.detail)})),window.addEventListener("push-permission-state",(function(t){alert("push-permission-state"+t.detail)}))})),(0,i.extend)(H().prototype,"onremove",(function(){console.error("settings page on remove")}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map