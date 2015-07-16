// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('uxbox.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21738__delegate = function (x){
if(cljs.core.truth_(uxbox.core.on_js_reload)){
return cljs.core.apply.call(null,uxbox.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'uxbox.core/on-js-reload' is missing");
}
};
var G__21738 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21739__i = 0, G__21739__a = new Array(arguments.length -  0);
while (G__21739__i < G__21739__a.length) {G__21739__a[G__21739__i] = arguments[G__21739__i + 0]; ++G__21739__i;}
  x = new cljs.core.IndexedSeq(G__21739__a,0);
} 
return G__21738__delegate.call(this,x);};
G__21738.cljs$lang$maxFixedArity = 0;
G__21738.cljs$lang$applyTo = (function (arglist__21740){
var x = cljs.core.seq(arglist__21740);
return G__21738__delegate(x);
});
G__21738.cljs$core$IFn$_invoke$arity$variadic = G__21738__delegate;
return G__21738;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1437054521357