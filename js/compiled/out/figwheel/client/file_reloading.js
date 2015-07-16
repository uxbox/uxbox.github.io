// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__30336_SHARP_,p2__30337_SHARP_){
var and__18125__auto__ = p1__30336_SHARP_;
if(cljs.core.truth_(and__18125__auto__)){
return p2__30337_SHARP_;
} else {
return and__18125__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18137__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18137__auto__){
return or__18137__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18137__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18137__auto__){
return or__18137__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18137__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18137__auto__)){
return or__18137__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19032__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19033__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19034__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19035__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19036__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19036__auto__,method_table__19032__auto__,prefer_table__19033__auto__,method_cache__19034__auto__,cached_hierarchy__19035__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30338){
var map__30339 = p__30338;
var map__30339__$1 = ((cljs.core.seq_QMARK_.call(null,map__30339))?cljs.core.apply.call(null,cljs.core.hash_map,map__30339):map__30339);
var file = cljs.core.get.call(null,map__30339__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__30340){
var map__30341 = p__30340;
var map__30341__$1 = ((cljs.core.seq_QMARK_.call(null,map__30341))?cljs.core.apply.call(null,cljs.core.hash_map,map__30341):map__30341);
var namespace = cljs.core.get.call(null,map__30341__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19032__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19033__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19034__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19035__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19036__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19036__auto__,method_table__19032__auto__,prefer_table__19033__auto__,method_cache__19034__auto__,cached_hierarchy__19035__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e30342){if((e30342 instanceof Error)){
var e = e30342;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30342;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__30344 = arguments.length;
switch (G__30344) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30346,callback){
var map__30348 = p__30346;
var map__30348__$1 = ((cljs.core.seq_QMARK_.call(null,map__30348))?cljs.core.apply.call(null,cljs.core.hash_map,map__30348):map__30348);
var file_msg = map__30348__$1;
var request_url = cljs.core.get.call(null,map__30348__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30348,map__30348__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30348,map__30348__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30349){
var map__30351 = p__30349;
var map__30351__$1 = ((cljs.core.seq_QMARK_.call(null,map__30351))?cljs.core.apply.call(null,cljs.core.hash_map,map__30351):map__30351);
var file_msg = map__30351__$1;
var namespace = cljs.core.get.call(null,map__30351__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__30351__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__18137__auto__ = meta_data;
if(cljs.core.truth_(or__18137__auto__)){
return or__18137__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18125__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18125__auto__){
var or__18137__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18137__auto__)){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18137__auto____$1)){
return or__18137__auto____$1;
} else {
var and__18125__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18125__auto____$1){
var or__18137__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18137__auto____$2){
return or__18137__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18125__auto____$1;
}
}
}
} else {
return and__18125__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30352,callback){
var map__30354 = p__30352;
var map__30354__$1 = ((cljs.core.seq_QMARK_.call(null,map__30354))?cljs.core.apply.call(null,cljs.core.hash_map,map__30354):map__30354);
var file_msg = map__30354__$1;
var request_url = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21372__auto___30441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___30441,out){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___30441,out){
return (function (state_30423){
var state_val_30424 = (state_30423[(1)]);
if((state_val_30424 === (1))){
var inst_30401 = cljs.core.nth.call(null,files,(0),null);
var inst_30402 = cljs.core.nthnext.call(null,files,(1));
var inst_30403 = files;
var state_30423__$1 = (function (){var statearr_30425 = state_30423;
(statearr_30425[(7)] = inst_30403);

(statearr_30425[(8)] = inst_30401);

(statearr_30425[(9)] = inst_30402);

return statearr_30425;
})();
var statearr_30426_30442 = state_30423__$1;
(statearr_30426_30442[(2)] = null);

(statearr_30426_30442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (2))){
var inst_30403 = (state_30423[(7)]);
var inst_30406 = (state_30423[(10)]);
var inst_30406__$1 = cljs.core.nth.call(null,inst_30403,(0),null);
var inst_30407 = cljs.core.nthnext.call(null,inst_30403,(1));
var inst_30408 = (inst_30406__$1 == null);
var inst_30409 = cljs.core.not.call(null,inst_30408);
var state_30423__$1 = (function (){var statearr_30427 = state_30423;
(statearr_30427[(11)] = inst_30407);

(statearr_30427[(10)] = inst_30406__$1);

return statearr_30427;
})();
if(inst_30409){
var statearr_30428_30443 = state_30423__$1;
(statearr_30428_30443[(1)] = (4));

} else {
var statearr_30429_30444 = state_30423__$1;
(statearr_30429_30444[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (3))){
var inst_30421 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30423__$1,inst_30421);
} else {
if((state_val_30424 === (4))){
var inst_30406 = (state_30423[(10)]);
var inst_30411 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30406);
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30423__$1,(7),inst_30411);
} else {
if((state_val_30424 === (5))){
var inst_30417 = cljs.core.async.close_BANG_.call(null,out);
var state_30423__$1 = state_30423;
var statearr_30430_30445 = state_30423__$1;
(statearr_30430_30445[(2)] = inst_30417);

(statearr_30430_30445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (6))){
var inst_30419 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30431_30446 = state_30423__$1;
(statearr_30431_30446[(2)] = inst_30419);

(statearr_30431_30446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (7))){
var inst_30407 = (state_30423[(11)]);
var inst_30413 = (state_30423[(2)]);
var inst_30414 = cljs.core.async.put_BANG_.call(null,out,inst_30413);
var inst_30403 = inst_30407;
var state_30423__$1 = (function (){var statearr_30432 = state_30423;
(statearr_30432[(7)] = inst_30403);

(statearr_30432[(12)] = inst_30414);

return statearr_30432;
})();
var statearr_30433_30447 = state_30423__$1;
(statearr_30433_30447[(2)] = null);

(statearr_30433_30447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21372__auto___30441,out))
;
return ((function (switch__21310__auto__,c__21372__auto___30441,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21311__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21311__auto____0 = (function (){
var statearr_30437 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30437[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21311__auto__);

(statearr_30437[(1)] = (1));

return statearr_30437;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21311__auto____1 = (function (state_30423){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_30423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e30438){if((e30438 instanceof Object)){
var ex__21314__auto__ = e30438;
var statearr_30439_30448 = state_30423;
(statearr_30439_30448[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30449 = state_30423;
state_30423 = G__30449;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21311__auto__ = function(state_30423){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21311__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21311__auto____1.call(this,state_30423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21311__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21311__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___30441,out))
})();
var state__21374__auto__ = (function (){var statearr_30440 = f__21373__auto__.call(null);
(statearr_30440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___30441);

return statearr_30440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___30441,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__30450,p__30451){
var map__30454 = p__30450;
var map__30454__$1 = ((cljs.core.seq_QMARK_.call(null,map__30454))?cljs.core.apply.call(null,cljs.core.hash_map,map__30454):map__30454);
var opts = map__30454__$1;
var url_rewriter = cljs.core.get.call(null,map__30454__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__30455 = p__30451;
var map__30455__$1 = ((cljs.core.seq_QMARK_.call(null,map__30455))?cljs.core.apply.call(null,cljs.core.hash_map,map__30455):map__30455);
var file_msg = map__30455__$1;
var file = cljs.core.get.call(null,map__30455__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30456){
var map__30459 = p__30456;
var map__30459__$1 = ((cljs.core.seq_QMARK_.call(null,map__30459))?cljs.core.apply.call(null,cljs.core.hash_map,map__30459):map__30459);
var eval_body__$1 = cljs.core.get.call(null,map__30459__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30459__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18125__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18125__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18125__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e30460){var e = e30460;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30465,p__30466){
var map__30668 = p__30465;
var map__30668__$1 = ((cljs.core.seq_QMARK_.call(null,map__30668))?cljs.core.apply.call(null,cljs.core.hash_map,map__30668):map__30668);
var opts = map__30668__$1;
var before_jsload = cljs.core.get.call(null,map__30668__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30668__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__30668__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__30669 = p__30466;
var map__30669__$1 = ((cljs.core.seq_QMARK_.call(null,map__30669))?cljs.core.apply.call(null,cljs.core.hash_map,map__30669):map__30669);
var msg = map__30669__$1;
var files = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files){
return (function (state_30794){
var state_val_30795 = (state_30794[(1)]);
if((state_val_30795 === (7))){
var inst_30684 = (state_30794[(7)]);
var inst_30683 = (state_30794[(8)]);
var inst_30682 = (state_30794[(9)]);
var inst_30681 = (state_30794[(10)]);
var inst_30689 = cljs.core._nth.call(null,inst_30682,inst_30684);
var inst_30690 = figwheel.client.file_reloading.eval_body.call(null,inst_30689);
var inst_30691 = (inst_30684 + (1));
var tmp30796 = inst_30683;
var tmp30797 = inst_30682;
var tmp30798 = inst_30681;
var inst_30681__$1 = tmp30798;
var inst_30682__$1 = tmp30797;
var inst_30683__$1 = tmp30796;
var inst_30684__$1 = inst_30691;
var state_30794__$1 = (function (){var statearr_30799 = state_30794;
(statearr_30799[(7)] = inst_30684__$1);

(statearr_30799[(8)] = inst_30683__$1);

(statearr_30799[(9)] = inst_30682__$1);

(statearr_30799[(10)] = inst_30681__$1);

(statearr_30799[(11)] = inst_30690);

return statearr_30799;
})();
var statearr_30800_30869 = state_30794__$1;
(statearr_30800_30869[(2)] = null);

(statearr_30800_30869[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (20))){
var inst_30726 = (state_30794[(12)]);
var inst_30730 = (state_30794[(13)]);
var inst_30733 = (state_30794[(14)]);
var inst_30731 = (state_30794[(15)]);
var inst_30727 = (state_30794[(16)]);
var inst_30736 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30738 = (function (){var all_files = inst_30726;
var files_SINGLEQUOTE_ = inst_30727;
var res_SINGLEQUOTE_ = inst_30730;
var res = inst_30731;
var files_not_loaded = inst_30733;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30726,inst_30730,inst_30733,inst_30731,inst_30727,inst_30736,state_val_30795,c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files){
return (function (p__30737){
var map__30801 = p__30737;
var map__30801__$1 = ((cljs.core.seq_QMARK_.call(null,map__30801))?cljs.core.apply.call(null,cljs.core.hash_map,map__30801):map__30801);
var namespace = cljs.core.get.call(null,map__30801__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30801__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30726,inst_30730,inst_30733,inst_30731,inst_30727,inst_30736,state_val_30795,c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files))
})();
var inst_30739 = cljs.core.map.call(null,inst_30738,inst_30731);
var inst_30740 = cljs.core.pr_str.call(null,inst_30739);
var inst_30741 = figwheel.client.utils.log.call(null,inst_30740);
var inst_30742 = (function (){var all_files = inst_30726;
var files_SINGLEQUOTE_ = inst_30727;
var res_SINGLEQUOTE_ = inst_30730;
var res = inst_30731;
var files_not_loaded = inst_30733;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30726,inst_30730,inst_30733,inst_30731,inst_30727,inst_30736,inst_30738,inst_30739,inst_30740,inst_30741,state_val_30795,c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30726,inst_30730,inst_30733,inst_30731,inst_30727,inst_30736,inst_30738,inst_30739,inst_30740,inst_30741,state_val_30795,c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files))
})();
var inst_30743 = setTimeout(inst_30742,(10));
var state_30794__$1 = (function (){var statearr_30802 = state_30794;
(statearr_30802[(17)] = inst_30736);

(statearr_30802[(18)] = inst_30741);

return statearr_30802;
})();
var statearr_30803_30870 = state_30794__$1;
(statearr_30803_30870[(2)] = inst_30743);

(statearr_30803_30870[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (27))){
var inst_30753 = (state_30794[(19)]);
var state_30794__$1 = state_30794;
var statearr_30804_30871 = state_30794__$1;
(statearr_30804_30871[(2)] = inst_30753);

(statearr_30804_30871[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (1))){
var inst_30673 = (state_30794[(20)]);
var inst_30670 = before_jsload.call(null,files);
var inst_30671 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30672 = (function (){return ((function (inst_30673,inst_30670,inst_30671,state_val_30795,c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files){
return (function (p1__30461_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30461_SHARP_);
});
;})(inst_30673,inst_30670,inst_30671,state_val_30795,c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files))
})();
var inst_30673__$1 = cljs.core.filter.call(null,inst_30672,files);
var inst_30674 = cljs.core.not_empty.call(null,inst_30673__$1);
var state_30794__$1 = (function (){var statearr_30805 = state_30794;
(statearr_30805[(21)] = inst_30671);

(statearr_30805[(22)] = inst_30670);

(statearr_30805[(20)] = inst_30673__$1);

return statearr_30805;
})();
if(cljs.core.truth_(inst_30674)){
var statearr_30806_30872 = state_30794__$1;
(statearr_30806_30872[(1)] = (2));

} else {
var statearr_30807_30873 = state_30794__$1;
(statearr_30807_30873[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (24))){
var state_30794__$1 = state_30794;
var statearr_30808_30874 = state_30794__$1;
(statearr_30808_30874[(2)] = null);

(statearr_30808_30874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (4))){
var inst_30718 = (state_30794[(2)]);
var inst_30719 = (function (){return ((function (inst_30718,state_val_30795,c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files){
return (function (p1__30462_SHARP_){
var and__18125__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30462_SHARP_);
if(cljs.core.truth_(and__18125__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30462_SHARP_));
} else {
return and__18125__auto__;
}
});
;})(inst_30718,state_val_30795,c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files))
})();
var inst_30720 = cljs.core.filter.call(null,inst_30719,files);
var state_30794__$1 = (function (){var statearr_30809 = state_30794;
(statearr_30809[(23)] = inst_30718);

(statearr_30809[(24)] = inst_30720);

return statearr_30809;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_30810_30875 = state_30794__$1;
(statearr_30810_30875[(1)] = (16));

} else {
var statearr_30811_30876 = state_30794__$1;
(statearr_30811_30876[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (15))){
var inst_30708 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
var statearr_30812_30877 = state_30794__$1;
(statearr_30812_30877[(2)] = inst_30708);

(statearr_30812_30877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (21))){
var state_30794__$1 = state_30794;
var statearr_30813_30878 = state_30794__$1;
(statearr_30813_30878[(2)] = null);

(statearr_30813_30878[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (31))){
var inst_30761 = (state_30794[(25)]);
var inst_30771 = (state_30794[(2)]);
var inst_30772 = cljs.core.not_empty.call(null,inst_30761);
var state_30794__$1 = (function (){var statearr_30814 = state_30794;
(statearr_30814[(26)] = inst_30771);

return statearr_30814;
})();
if(cljs.core.truth_(inst_30772)){
var statearr_30815_30879 = state_30794__$1;
(statearr_30815_30879[(1)] = (32));

} else {
var statearr_30816_30880 = state_30794__$1;
(statearr_30816_30880[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (32))){
var inst_30761 = (state_30794[(25)]);
var inst_30774 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30761);
var inst_30775 = cljs.core.pr_str.call(null,inst_30774);
var inst_30776 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_30775)].join('');
var inst_30777 = figwheel.client.utils.log.call(null,inst_30776);
var state_30794__$1 = state_30794;
var statearr_30817_30881 = state_30794__$1;
(statearr_30817_30881[(2)] = inst_30777);

(statearr_30817_30881[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (33))){
var state_30794__$1 = state_30794;
var statearr_30818_30882 = state_30794__$1;
(statearr_30818_30882[(2)] = null);

(statearr_30818_30882[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (13))){
var inst_30694 = (state_30794[(27)]);
var inst_30698 = cljs.core.chunk_first.call(null,inst_30694);
var inst_30699 = cljs.core.chunk_rest.call(null,inst_30694);
var inst_30700 = cljs.core.count.call(null,inst_30698);
var inst_30681 = inst_30699;
var inst_30682 = inst_30698;
var inst_30683 = inst_30700;
var inst_30684 = (0);
var state_30794__$1 = (function (){var statearr_30819 = state_30794;
(statearr_30819[(7)] = inst_30684);

(statearr_30819[(8)] = inst_30683);

(statearr_30819[(9)] = inst_30682);

(statearr_30819[(10)] = inst_30681);

return statearr_30819;
})();
var statearr_30820_30883 = state_30794__$1;
(statearr_30820_30883[(2)] = null);

(statearr_30820_30883[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (22))){
var inst_30733 = (state_30794[(14)]);
var inst_30746 = (state_30794[(2)]);
var inst_30747 = cljs.core.not_empty.call(null,inst_30733);
var state_30794__$1 = (function (){var statearr_30821 = state_30794;
(statearr_30821[(28)] = inst_30746);

return statearr_30821;
})();
if(cljs.core.truth_(inst_30747)){
var statearr_30822_30884 = state_30794__$1;
(statearr_30822_30884[(1)] = (23));

} else {
var statearr_30823_30885 = state_30794__$1;
(statearr_30823_30885[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (36))){
var state_30794__$1 = state_30794;
var statearr_30824_30886 = state_30794__$1;
(statearr_30824_30886[(2)] = null);

(statearr_30824_30886[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (29))){
var inst_30760 = (state_30794[(29)]);
var inst_30765 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30760);
var inst_30766 = cljs.core.pr_str.call(null,inst_30765);
var inst_30767 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30766)].join('');
var inst_30768 = figwheel.client.utils.log.call(null,inst_30767);
var state_30794__$1 = state_30794;
var statearr_30825_30887 = state_30794__$1;
(statearr_30825_30887[(2)] = inst_30768);

(statearr_30825_30887[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (6))){
var inst_30715 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
var statearr_30826_30888 = state_30794__$1;
(statearr_30826_30888[(2)] = inst_30715);

(statearr_30826_30888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (28))){
var inst_30760 = (state_30794[(29)]);
var inst_30759 = (state_30794[(2)]);
var inst_30760__$1 = cljs.core.get.call(null,inst_30759,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30761 = cljs.core.get.call(null,inst_30759,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_30762 = cljs.core.get.call(null,inst_30759,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30763 = cljs.core.not_empty.call(null,inst_30760__$1);
var state_30794__$1 = (function (){var statearr_30827 = state_30794;
(statearr_30827[(30)] = inst_30762);

(statearr_30827[(25)] = inst_30761);

(statearr_30827[(29)] = inst_30760__$1);

return statearr_30827;
})();
if(cljs.core.truth_(inst_30763)){
var statearr_30828_30889 = state_30794__$1;
(statearr_30828_30889[(1)] = (29));

} else {
var statearr_30829_30890 = state_30794__$1;
(statearr_30829_30890[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (25))){
var inst_30792 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30794__$1,inst_30792);
} else {
if((state_val_30795 === (34))){
var inst_30762 = (state_30794[(30)]);
var inst_30780 = (state_30794[(2)]);
var inst_30781 = cljs.core.not_empty.call(null,inst_30762);
var state_30794__$1 = (function (){var statearr_30830 = state_30794;
(statearr_30830[(31)] = inst_30780);

return statearr_30830;
})();
if(cljs.core.truth_(inst_30781)){
var statearr_30831_30891 = state_30794__$1;
(statearr_30831_30891[(1)] = (35));

} else {
var statearr_30832_30892 = state_30794__$1;
(statearr_30832_30892[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (17))){
var inst_30720 = (state_30794[(24)]);
var state_30794__$1 = state_30794;
var statearr_30833_30893 = state_30794__$1;
(statearr_30833_30893[(2)] = inst_30720);

(statearr_30833_30893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (3))){
var state_30794__$1 = state_30794;
var statearr_30834_30894 = state_30794__$1;
(statearr_30834_30894[(2)] = null);

(statearr_30834_30894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (12))){
var inst_30711 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
var statearr_30835_30895 = state_30794__$1;
(statearr_30835_30895[(2)] = inst_30711);

(statearr_30835_30895[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (2))){
var inst_30673 = (state_30794[(20)]);
var inst_30680 = cljs.core.seq.call(null,inst_30673);
var inst_30681 = inst_30680;
var inst_30682 = null;
var inst_30683 = (0);
var inst_30684 = (0);
var state_30794__$1 = (function (){var statearr_30836 = state_30794;
(statearr_30836[(7)] = inst_30684);

(statearr_30836[(8)] = inst_30683);

(statearr_30836[(9)] = inst_30682);

(statearr_30836[(10)] = inst_30681);

return statearr_30836;
})();
var statearr_30837_30896 = state_30794__$1;
(statearr_30837_30896[(2)] = null);

(statearr_30837_30896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (23))){
var inst_30726 = (state_30794[(12)]);
var inst_30753 = (state_30794[(19)]);
var inst_30730 = (state_30794[(13)]);
var inst_30733 = (state_30794[(14)]);
var inst_30731 = (state_30794[(15)]);
var inst_30727 = (state_30794[(16)]);
var inst_30749 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30752 = (function (){var all_files = inst_30726;
var files_SINGLEQUOTE_ = inst_30727;
var res_SINGLEQUOTE_ = inst_30730;
var res = inst_30731;
var files_not_loaded = inst_30733;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30726,inst_30753,inst_30730,inst_30733,inst_30731,inst_30727,inst_30749,state_val_30795,c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files){
return (function (p__30751){
var map__30838 = p__30751;
var map__30838__$1 = ((cljs.core.seq_QMARK_.call(null,map__30838))?cljs.core.apply.call(null,cljs.core.hash_map,map__30838):map__30838);
var meta_data = cljs.core.get.call(null,map__30838__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30726,inst_30753,inst_30730,inst_30733,inst_30731,inst_30727,inst_30749,state_val_30795,c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files))
})();
var inst_30753__$1 = cljs.core.group_by.call(null,inst_30752,inst_30733);
var inst_30754 = cljs.core.seq_QMARK_.call(null,inst_30753__$1);
var state_30794__$1 = (function (){var statearr_30839 = state_30794;
(statearr_30839[(19)] = inst_30753__$1);

(statearr_30839[(32)] = inst_30749);

return statearr_30839;
})();
if(inst_30754){
var statearr_30840_30897 = state_30794__$1;
(statearr_30840_30897[(1)] = (26));

} else {
var statearr_30841_30898 = state_30794__$1;
(statearr_30841_30898[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (35))){
var inst_30762 = (state_30794[(30)]);
var inst_30783 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30762);
var inst_30784 = cljs.core.pr_str.call(null,inst_30783);
var inst_30785 = [cljs.core.str("not required: "),cljs.core.str(inst_30784)].join('');
var inst_30786 = figwheel.client.utils.log.call(null,inst_30785);
var state_30794__$1 = state_30794;
var statearr_30842_30899 = state_30794__$1;
(statearr_30842_30899[(2)] = inst_30786);

(statearr_30842_30899[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (19))){
var inst_30726 = (state_30794[(12)]);
var inst_30730 = (state_30794[(13)]);
var inst_30731 = (state_30794[(15)]);
var inst_30727 = (state_30794[(16)]);
var inst_30730__$1 = (state_30794[(2)]);
var inst_30731__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30730__$1);
var inst_30732 = (function (){var all_files = inst_30726;
var files_SINGLEQUOTE_ = inst_30727;
var res_SINGLEQUOTE_ = inst_30730__$1;
var res = inst_30731__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_30726,inst_30730,inst_30731,inst_30727,inst_30730__$1,inst_30731__$1,state_val_30795,c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files){
return (function (p1__30464_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30464_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_30726,inst_30730,inst_30731,inst_30727,inst_30730__$1,inst_30731__$1,state_val_30795,c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files))
})();
var inst_30733 = cljs.core.filter.call(null,inst_30732,inst_30730__$1);
var inst_30734 = cljs.core.not_empty.call(null,inst_30731__$1);
var state_30794__$1 = (function (){var statearr_30843 = state_30794;
(statearr_30843[(13)] = inst_30730__$1);

(statearr_30843[(14)] = inst_30733);

(statearr_30843[(15)] = inst_30731__$1);

return statearr_30843;
})();
if(cljs.core.truth_(inst_30734)){
var statearr_30844_30900 = state_30794__$1;
(statearr_30844_30900[(1)] = (20));

} else {
var statearr_30845_30901 = state_30794__$1;
(statearr_30845_30901[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (11))){
var state_30794__$1 = state_30794;
var statearr_30846_30902 = state_30794__$1;
(statearr_30846_30902[(2)] = null);

(statearr_30846_30902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (9))){
var inst_30713 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
var statearr_30847_30903 = state_30794__$1;
(statearr_30847_30903[(2)] = inst_30713);

(statearr_30847_30903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (5))){
var inst_30684 = (state_30794[(7)]);
var inst_30683 = (state_30794[(8)]);
var inst_30686 = (inst_30684 < inst_30683);
var inst_30687 = inst_30686;
var state_30794__$1 = state_30794;
if(cljs.core.truth_(inst_30687)){
var statearr_30848_30904 = state_30794__$1;
(statearr_30848_30904[(1)] = (7));

} else {
var statearr_30849_30905 = state_30794__$1;
(statearr_30849_30905[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (14))){
var inst_30694 = (state_30794[(27)]);
var inst_30703 = cljs.core.first.call(null,inst_30694);
var inst_30704 = figwheel.client.file_reloading.eval_body.call(null,inst_30703);
var inst_30705 = cljs.core.next.call(null,inst_30694);
var inst_30681 = inst_30705;
var inst_30682 = null;
var inst_30683 = (0);
var inst_30684 = (0);
var state_30794__$1 = (function (){var statearr_30850 = state_30794;
(statearr_30850[(7)] = inst_30684);

(statearr_30850[(8)] = inst_30683);

(statearr_30850[(9)] = inst_30682);

(statearr_30850[(33)] = inst_30704);

(statearr_30850[(10)] = inst_30681);

return statearr_30850;
})();
var statearr_30851_30906 = state_30794__$1;
(statearr_30851_30906[(2)] = null);

(statearr_30851_30906[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (26))){
var inst_30753 = (state_30794[(19)]);
var inst_30756 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30753);
var state_30794__$1 = state_30794;
var statearr_30852_30907 = state_30794__$1;
(statearr_30852_30907[(2)] = inst_30756);

(statearr_30852_30907[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (16))){
var inst_30720 = (state_30794[(24)]);
var inst_30722 = (function (){var all_files = inst_30720;
return ((function (all_files,inst_30720,state_val_30795,c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files){
return (function (p1__30463_SHARP_){
return cljs.core.update_in.call(null,p1__30463_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_30720,state_val_30795,c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files))
})();
var inst_30723 = cljs.core.map.call(null,inst_30722,inst_30720);
var state_30794__$1 = state_30794;
var statearr_30853_30908 = state_30794__$1;
(statearr_30853_30908[(2)] = inst_30723);

(statearr_30853_30908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (30))){
var state_30794__$1 = state_30794;
var statearr_30854_30909 = state_30794__$1;
(statearr_30854_30909[(2)] = null);

(statearr_30854_30909[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (10))){
var inst_30694 = (state_30794[(27)]);
var inst_30696 = cljs.core.chunked_seq_QMARK_.call(null,inst_30694);
var state_30794__$1 = state_30794;
if(inst_30696){
var statearr_30855_30910 = state_30794__$1;
(statearr_30855_30910[(1)] = (13));

} else {
var statearr_30856_30911 = state_30794__$1;
(statearr_30856_30911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (18))){
var inst_30726 = (state_30794[(12)]);
var inst_30727 = (state_30794[(16)]);
var inst_30726__$1 = (state_30794[(2)]);
var inst_30727__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_30726__$1);
var inst_30728 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30727__$1);
var state_30794__$1 = (function (){var statearr_30857 = state_30794;
(statearr_30857[(12)] = inst_30726__$1);

(statearr_30857[(16)] = inst_30727__$1);

return statearr_30857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30794__$1,(19),inst_30728);
} else {
if((state_val_30795 === (37))){
var inst_30789 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
var statearr_30858_30912 = state_30794__$1;
(statearr_30858_30912[(2)] = inst_30789);

(statearr_30858_30912[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (8))){
var inst_30694 = (state_30794[(27)]);
var inst_30681 = (state_30794[(10)]);
var inst_30694__$1 = cljs.core.seq.call(null,inst_30681);
var state_30794__$1 = (function (){var statearr_30859 = state_30794;
(statearr_30859[(27)] = inst_30694__$1);

return statearr_30859;
})();
if(inst_30694__$1){
var statearr_30860_30913 = state_30794__$1;
(statearr_30860_30913[(1)] = (10));

} else {
var statearr_30861_30914 = state_30794__$1;
(statearr_30861_30914[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files))
;
return ((function (switch__21310__auto__,c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21311__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21311__auto____0 = (function (){
var statearr_30865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30865[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21311__auto__);

(statearr_30865[(1)] = (1));

return statearr_30865;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21311__auto____1 = (function (state_30794){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_30794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e30866){if((e30866 instanceof Object)){
var ex__21314__auto__ = e30866;
var statearr_30867_30915 = state_30794;
(statearr_30867_30915[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30916 = state_30794;
state_30794 = G__30916;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21311__auto__ = function(state_30794){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21311__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21311__auto____1.call(this,state_30794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21311__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21311__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files))
})();
var state__21374__auto__ = (function (){var statearr_30868 = f__21373__auto__.call(null);
(statearr_30868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto__);

return statearr_30868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto__,map__30668,map__30668__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30669,map__30669__$1,msg,files))
);

return c__21372__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30919,link){
var map__30921 = p__30919;
var map__30921__$1 = ((cljs.core.seq_QMARK_.call(null,map__30921))?cljs.core.apply.call(null,cljs.core.hash_map,map__30921):map__30921);
var file = cljs.core.get.call(null,map__30921__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__30921,map__30921__$1,file){
return (function (p1__30917_SHARP_,p2__30918_SHARP_){
if(cljs.core._EQ_.call(null,p1__30917_SHARP_,p2__30918_SHARP_)){
return p1__30917_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__30921,map__30921__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30925){
var map__30926 = p__30925;
var map__30926__$1 = ((cljs.core.seq_QMARK_.call(null,map__30926))?cljs.core.apply.call(null,cljs.core.hash_map,map__30926):map__30926);
var match_length = cljs.core.get.call(null,map__30926__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30926__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30922_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30922_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__30928 = arguments.length;
switch (G__30928) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30930){
var map__30932 = p__30930;
var map__30932__$1 = ((cljs.core.seq_QMARK_.call(null,map__30932))?cljs.core.apply.call(null,cljs.core.hash_map,map__30932):map__30932);
var f_data = map__30932__$1;
var file = cljs.core.get.call(null,map__30932__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__30932__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18137__auto__ = request_url;
if(cljs.core.truth_(or__18137__auto__)){
return or__18137__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30933,files_msg){
var map__30955 = p__30933;
var map__30955__$1 = ((cljs.core.seq_QMARK_.call(null,map__30955))?cljs.core.apply.call(null,cljs.core.hash_map,map__30955):map__30955);
var opts = map__30955__$1;
var on_cssload = cljs.core.get.call(null,map__30955__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30956_30976 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30957_30977 = null;
var count__30958_30978 = (0);
var i__30959_30979 = (0);
while(true){
if((i__30959_30979 < count__30958_30978)){
var f_30980 = cljs.core._nth.call(null,chunk__30957_30977,i__30959_30979);
figwheel.client.file_reloading.reload_css_file.call(null,f_30980);

var G__30981 = seq__30956_30976;
var G__30982 = chunk__30957_30977;
var G__30983 = count__30958_30978;
var G__30984 = (i__30959_30979 + (1));
seq__30956_30976 = G__30981;
chunk__30957_30977 = G__30982;
count__30958_30978 = G__30983;
i__30959_30979 = G__30984;
continue;
} else {
var temp__4425__auto___30985 = cljs.core.seq.call(null,seq__30956_30976);
if(temp__4425__auto___30985){
var seq__30956_30986__$1 = temp__4425__auto___30985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30956_30986__$1)){
var c__18922__auto___30987 = cljs.core.chunk_first.call(null,seq__30956_30986__$1);
var G__30988 = cljs.core.chunk_rest.call(null,seq__30956_30986__$1);
var G__30989 = c__18922__auto___30987;
var G__30990 = cljs.core.count.call(null,c__18922__auto___30987);
var G__30991 = (0);
seq__30956_30976 = G__30988;
chunk__30957_30977 = G__30989;
count__30958_30978 = G__30990;
i__30959_30979 = G__30991;
continue;
} else {
var f_30992 = cljs.core.first.call(null,seq__30956_30986__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30992);

var G__30993 = cljs.core.next.call(null,seq__30956_30986__$1);
var G__30994 = null;
var G__30995 = (0);
var G__30996 = (0);
seq__30956_30976 = G__30993;
chunk__30957_30977 = G__30994;
count__30958_30978 = G__30995;
i__30959_30979 = G__30996;
continue;
}
} else {
}
}
break;
}

var c__21372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto__,map__30955,map__30955__$1,opts,on_cssload){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto__,map__30955,map__30955__$1,opts,on_cssload){
return (function (state_30966){
var state_val_30967 = (state_30966[(1)]);
if((state_val_30967 === (1))){
var inst_30960 = cljs.core.async.timeout.call(null,(100));
var state_30966__$1 = state_30966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30966__$1,(2),inst_30960);
} else {
if((state_val_30967 === (2))){
var inst_30962 = (state_30966[(2)]);
var inst_30963 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_30964 = on_cssload.call(null,inst_30963);
var state_30966__$1 = (function (){var statearr_30968 = state_30966;
(statearr_30968[(7)] = inst_30962);

return statearr_30968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30966__$1,inst_30964);
} else {
return null;
}
}
});})(c__21372__auto__,map__30955,map__30955__$1,opts,on_cssload))
;
return ((function (switch__21310__auto__,c__21372__auto__,map__30955,map__30955__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21311__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21311__auto____0 = (function (){
var statearr_30972 = [null,null,null,null,null,null,null,null];
(statearr_30972[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21311__auto__);

(statearr_30972[(1)] = (1));

return statearr_30972;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21311__auto____1 = (function (state_30966){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_30966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e30973){if((e30973 instanceof Object)){
var ex__21314__auto__ = e30973;
var statearr_30974_30997 = state_30966;
(statearr_30974_30997[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30998 = state_30966;
state_30966 = G__30998;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21311__auto__ = function(state_30966){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21311__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21311__auto____1.call(this,state_30966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21311__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21311__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto__,map__30955,map__30955__$1,opts,on_cssload))
})();
var state__21374__auto__ = (function (){var statearr_30975 = f__21373__auto__.call(null);
(statearr_30975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto__);

return statearr_30975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto__,map__30955,map__30955__$1,opts,on_cssload))
);

return c__21372__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1437028489384