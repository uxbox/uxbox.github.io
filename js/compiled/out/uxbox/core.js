// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.core');
goog.require('cljs.core');
goog.require('uxbox.forms');
goog.require('reagent.core');
goog.require('uxbox.db');
goog.require('uxbox.dashboard.views');
goog.require('uxbox.workspace.views');
goog.require('uxbox.keyboard');
goog.require('uxbox.navigation');
goog.require('uxbox.user.views');
cljs.core.enable_console_print_BANG_.call(null);
uxbox.core.on_js_reload = (function uxbox$core$on_js_reload(){
return null;
});
uxbox.core.ui = (function uxbox$core$ui(db){
var vec__24422 = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
var page = cljs.core.nth.call(null,vec__24422,(0),null);
var params = cljs.core.nth.call(null,vec__24422,(1),null);
var G__24423 = (((page instanceof cljs.core.Keyword))?page.fqn:null);
switch (G__24423) {
case "dashboard":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.dashboard.views.dashboard,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.forms.lightbox,db], null)], null);

break;
case "login":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.user.views.login], null);

break;
case "recover-password":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.user.views.recover_password], null);

break;
case "register":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.user.views.register], null);

break;
case "workspace":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.views.workspace,db], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(page)].join('')));

}
});
uxbox.core.render_BANG_ = (function uxbox$core$render_BANG_(app_state,element){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.core.ui,app_state], null),element);
});
uxbox.core.$el = document.getElementById("app");
uxbox.core.start_BANG_ = (function uxbox$core$start_BANG_(app_state){
uxbox.navigation.start_history_BANG_.call(null);

uxbox.keyboard.start_keyboard_BANG_.call(null);

return uxbox.core.render_BANG_.call(null,app_state,uxbox.core.$el);
});
uxbox.core.start_BANG_.call(null,uxbox.db.app_state);

//# sourceMappingURL=core.js.map?rel=1437028482861