// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.navigation');
goog.require('cljs.core');
goog.require('uxbox.db');
goog.require('uxbox.pubsub');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
uxbox.navigation.set_location_BANG_ = (function uxbox$navigation$set_location_BANG_(location){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),location], null));
});
var action__21298__auto___21311 = (function (params__21299__auto__){
if(cljs.core.map_QMARK_.call(null,params__21299__auto__)){
var map__21308 = params__21299__auto__;
var map__21308__$1 = ((cljs.core.seq_QMARK_.call(null,map__21308))?cljs.core.apply.call(null,cljs.core.hash_map,map__21308):map__21308);
return uxbox.navigation.set_location_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21299__auto__)){
var vec__21309 = params__21299__auto__;
return uxbox.navigation.set_location_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__21298__auto___21311);

uxbox.navigation.login_route = ((function (action__21298__auto___21311){
return (function uxbox$navigation$login_route(){
var argseq__19178__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return uxbox.navigation.login_route.cljs$core$IFn$_invoke$arity$variadic(argseq__19178__auto__);
});})(action__21298__auto___21311))
;

uxbox.navigation.login_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__21298__auto___21311){
return (function (args__21297__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__21297__auto__);
});})(action__21298__auto___21311))
;

uxbox.navigation.login_route.cljs$lang$maxFixedArity = (0);

uxbox.navigation.login_route.cljs$lang$applyTo = ((function (action__21298__auto___21311){
return (function (seq21310){
return uxbox.navigation.login_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21310));
});})(action__21298__auto___21311))
;
var action__21298__auto___21315 = (function (params__21299__auto__){
if(cljs.core.map_QMARK_.call(null,params__21299__auto__)){
var map__21312 = params__21299__auto__;
var map__21312__$1 = ((cljs.core.seq_QMARK_.call(null,map__21312))?cljs.core.apply.call(null,cljs.core.hash_map,map__21312):map__21312);
return uxbox.navigation.set_location_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register","register",1968522516)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21299__auto__)){
var vec__21313 = params__21299__auto__;
return uxbox.navigation.set_location_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register","register",1968522516)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/register",action__21298__auto___21315);

uxbox.navigation.register_route = ((function (action__21298__auto___21315){
return (function uxbox$navigation$register_route(){
var argseq__19178__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return uxbox.navigation.register_route.cljs$core$IFn$_invoke$arity$variadic(argseq__19178__auto__);
});})(action__21298__auto___21315))
;

uxbox.navigation.register_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__21298__auto___21315){
return (function (args__21297__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/register",args__21297__auto__);
});})(action__21298__auto___21315))
;

uxbox.navigation.register_route.cljs$lang$maxFixedArity = (0);

uxbox.navigation.register_route.cljs$lang$applyTo = ((function (action__21298__auto___21315){
return (function (seq21314){
return uxbox.navigation.register_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21314));
});})(action__21298__auto___21315))
;
var action__21298__auto___21319 = (function (params__21299__auto__){
if(cljs.core.map_QMARK_.call(null,params__21299__auto__)){
var map__21316 = params__21299__auto__;
var map__21316__$1 = ((cljs.core.seq_QMARK_.call(null,map__21316))?cljs.core.apply.call(null,cljs.core.hash_map,map__21316):map__21316);
return uxbox.navigation.set_location_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recover-password","recover-password",1466798410)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21299__auto__)){
var vec__21317 = params__21299__auto__;
return uxbox.navigation.set_location_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recover-password","recover-password",1466798410)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/recover-password",action__21298__auto___21319);

uxbox.navigation.recover_password_route = ((function (action__21298__auto___21319){
return (function uxbox$navigation$recover_password_route(){
var argseq__19178__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return uxbox.navigation.recover_password_route.cljs$core$IFn$_invoke$arity$variadic(argseq__19178__auto__);
});})(action__21298__auto___21319))
;

uxbox.navigation.recover_password_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__21298__auto___21319){
return (function (args__21297__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/recover-password",args__21297__auto__);
});})(action__21298__auto___21319))
;

uxbox.navigation.recover_password_route.cljs$lang$maxFixedArity = (0);

uxbox.navigation.recover_password_route.cljs$lang$applyTo = ((function (action__21298__auto___21319){
return (function (seq21318){
return uxbox.navigation.recover_password_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21318));
});})(action__21298__auto___21319))
;
var action__21298__auto___21323 = (function (params__21299__auto__){
if(cljs.core.map_QMARK_.call(null,params__21299__auto__)){
var map__21320 = params__21299__auto__;
var map__21320__$1 = ((cljs.core.seq_QMARK_.call(null,map__21320))?cljs.core.apply.call(null,cljs.core.hash_map,map__21320):map__21320);
return uxbox.navigation.set_location_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21299__auto__)){
var vec__21321 = params__21299__auto__;
return uxbox.navigation.set_location_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/dashboard",action__21298__auto___21323);

uxbox.navigation.dashboard_route = ((function (action__21298__auto___21323){
return (function uxbox$navigation$dashboard_route(){
var argseq__19178__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return uxbox.navigation.dashboard_route.cljs$core$IFn$_invoke$arity$variadic(argseq__19178__auto__);
});})(action__21298__auto___21323))
;

uxbox.navigation.dashboard_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__21298__auto___21323){
return (function (args__21297__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/dashboard",args__21297__auto__);
});})(action__21298__auto___21323))
;

uxbox.navigation.dashboard_route.cljs$lang$maxFixedArity = (0);

uxbox.navigation.dashboard_route.cljs$lang$applyTo = ((function (action__21298__auto___21323){
return (function (seq21322){
return uxbox.navigation.dashboard_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21322));
});})(action__21298__auto___21323))
;
var action__21298__auto___21327 = (function (params__21299__auto__){
if(cljs.core.map_QMARK_.call(null,params__21299__auto__)){
var map__21324 = params__21299__auto__;
var map__21324__$1 = ((cljs.core.seq_QMARK_.call(null,map__21324))?cljs.core.apply.call(null,cljs.core.hash_map,map__21324):map__21324);
var project_uuid = cljs.core.get.call(null,map__21324__$1,new cljs.core.Keyword(null,"project-uuid","project-uuid",726173820));
var page_uuid = cljs.core.get.call(null,map__21324__$1,new cljs.core.Keyword(null,"page-uuid","page-uuid",1152600915));
return uxbox.navigation.set_location_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace","workspace",-1096735709),cljs.core.uuid.call(null,project_uuid),cljs.core.uuid.call(null,page_uuid)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21299__auto__)){
var vec__21325 = params__21299__auto__;
var project_uuid = cljs.core.nth.call(null,vec__21325,(0),null);
var page_uuid = cljs.core.nth.call(null,vec__21325,(1),null);
return uxbox.navigation.set_location_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace","workspace",-1096735709),cljs.core.uuid.call(null,project_uuid),cljs.core.uuid.call(null,page_uuid)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/workspace/:project-uuid/:page-uuid",action__21298__auto___21327);

uxbox.navigation.workspace_route = ((function (action__21298__auto___21327){
return (function uxbox$navigation$workspace_route(){
var argseq__19178__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return uxbox.navigation.workspace_route.cljs$core$IFn$_invoke$arity$variadic(argseq__19178__auto__);
});})(action__21298__auto___21327))
;

uxbox.navigation.workspace_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__21298__auto___21327){
return (function (args__21297__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/workspace/:project-uuid/:page-uuid",args__21297__auto__);
});})(action__21298__auto___21327))
;

uxbox.navigation.workspace_route.cljs$lang$maxFixedArity = (0);

uxbox.navigation.workspace_route.cljs$lang$applyTo = ((function (action__21298__auto___21327){
return (function (seq21326){
return uxbox.navigation.workspace_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21326));
});})(action__21298__auto___21327))
;
uxbox.navigation.history = (function (){var G__21328 = (new goog.history.Html5History());
G__21328.setUseFragment(false);

G__21328.setPathPrefix("");

return G__21328;
})();
uxbox.navigation.dispatch_uri = (function uxbox$navigation$dispatch_uri(u){
return secretary.core.dispatch_BANG_.call(null,u.token);
});
uxbox.navigation.start_history_BANG_ = (function uxbox$navigation$start_history_BANG_(){
goog.events.listen(uxbox.navigation.history,goog.history.EventType.NAVIGATE,uxbox.navigation.dispatch_uri);

uxbox.navigation.history.setEnabled(true);

return uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"location","location",1815599388),(function (state,location){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"location","location",1815599388),location);
}));
});
uxbox.navigation.navigate_BANG_ = (function uxbox$navigation$navigate_BANG_(uri){
return uxbox.navigation.history.setToken(uri);
});
uxbox.navigation.link = (function uxbox$navigation$link(href,component){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__21329_SHARP_){
p1__21329_SHARP_.preventDefault();

return uxbox.navigation.navigate_BANG_.call(null,href);
})], null),component], null);
});

//# sourceMappingURL=navigation.js.map?rel=1437048688489