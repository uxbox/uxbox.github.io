// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30288_30300 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30289_30301 = null;
var count__30290_30302 = (0);
var i__30291_30303 = (0);
while(true){
if((i__30291_30303 < count__30290_30302)){
var f_30304 = cljs.core._nth.call(null,chunk__30289_30301,i__30291_30303);
cljs.core.println.call(null,"  ",f_30304);

var G__30305 = seq__30288_30300;
var G__30306 = chunk__30289_30301;
var G__30307 = count__30290_30302;
var G__30308 = (i__30291_30303 + (1));
seq__30288_30300 = G__30305;
chunk__30289_30301 = G__30306;
count__30290_30302 = G__30307;
i__30291_30303 = G__30308;
continue;
} else {
var temp__4425__auto___30309 = cljs.core.seq.call(null,seq__30288_30300);
if(temp__4425__auto___30309){
var seq__30288_30310__$1 = temp__4425__auto___30309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30288_30310__$1)){
var c__18922__auto___30311 = cljs.core.chunk_first.call(null,seq__30288_30310__$1);
var G__30312 = cljs.core.chunk_rest.call(null,seq__30288_30310__$1);
var G__30313 = c__18922__auto___30311;
var G__30314 = cljs.core.count.call(null,c__18922__auto___30311);
var G__30315 = (0);
seq__30288_30300 = G__30312;
chunk__30289_30301 = G__30313;
count__30290_30302 = G__30314;
i__30291_30303 = G__30315;
continue;
} else {
var f_30316 = cljs.core.first.call(null,seq__30288_30310__$1);
cljs.core.println.call(null,"  ",f_30316);

var G__30317 = cljs.core.next.call(null,seq__30288_30310__$1);
var G__30318 = null;
var G__30319 = (0);
var G__30320 = (0);
seq__30288_30300 = G__30317;
chunk__30289_30301 = G__30318;
count__30290_30302 = G__30319;
i__30291_30303 = G__30320;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30321 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18137__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18137__auto__)){
return or__18137__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30321);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30321)))?cljs.core.second.call(null,arglists_30321):arglists_30321));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30292 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30293 = null;
var count__30294 = (0);
var i__30295 = (0);
while(true){
if((i__30295 < count__30294)){
var vec__30296 = cljs.core._nth.call(null,chunk__30293,i__30295);
var name = cljs.core.nth.call(null,vec__30296,(0),null);
var map__30297 = cljs.core.nth.call(null,vec__30296,(1),null);
var map__30297__$1 = ((cljs.core.seq_QMARK_.call(null,map__30297))?cljs.core.apply.call(null,cljs.core.hash_map,map__30297):map__30297);
var doc = cljs.core.get.call(null,map__30297__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30297__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30322 = seq__30292;
var G__30323 = chunk__30293;
var G__30324 = count__30294;
var G__30325 = (i__30295 + (1));
seq__30292 = G__30322;
chunk__30293 = G__30323;
count__30294 = G__30324;
i__30295 = G__30325;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30292);
if(temp__4425__auto__){
var seq__30292__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30292__$1)){
var c__18922__auto__ = cljs.core.chunk_first.call(null,seq__30292__$1);
var G__30326 = cljs.core.chunk_rest.call(null,seq__30292__$1);
var G__30327 = c__18922__auto__;
var G__30328 = cljs.core.count.call(null,c__18922__auto__);
var G__30329 = (0);
seq__30292 = G__30326;
chunk__30293 = G__30327;
count__30294 = G__30328;
i__30295 = G__30329;
continue;
} else {
var vec__30298 = cljs.core.first.call(null,seq__30292__$1);
var name = cljs.core.nth.call(null,vec__30298,(0),null);
var map__30299 = cljs.core.nth.call(null,vec__30298,(1),null);
var map__30299__$1 = ((cljs.core.seq_QMARK_.call(null,map__30299))?cljs.core.apply.call(null,cljs.core.hash_map,map__30299):map__30299);
var doc = cljs.core.get.call(null,map__30299__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30299__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30330 = cljs.core.next.call(null,seq__30292__$1);
var G__30331 = null;
var G__30332 = (0);
var G__30333 = (0);
seq__30292 = G__30330;
chunk__30293 = G__30331;
count__30294 = G__30332;
i__30295 = G__30333;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1437028488950