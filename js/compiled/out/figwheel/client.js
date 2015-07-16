// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29395__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29396__i = 0, G__29396__a = new Array(arguments.length -  0);
while (G__29396__i < G__29396__a.length) {G__29396__a[G__29396__i] = arguments[G__29396__i + 0]; ++G__29396__i;}
  args = new cljs.core.IndexedSeq(G__29396__a,0);
} 
return G__29395__delegate.call(this,args);};
G__29395.cljs$lang$maxFixedArity = 0;
G__29395.cljs$lang$applyTo = (function (arglist__29397){
var args = cljs.core.seq(arglist__29397);
return G__29395__delegate(args);
});
G__29395.cljs$core$IFn$_invoke$arity$variadic = G__29395__delegate;
return G__29395;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29398){
var map__29400 = p__29398;
var map__29400__$1 = ((cljs.core.seq_QMARK_.call(null,map__29400))?cljs.core.apply.call(null,cljs.core.hash_map,map__29400):map__29400);
var message = cljs.core.get.call(null,map__29400__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29400__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18137__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18137__auto__)){
return or__18137__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18125__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18125__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18125__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21372__auto___29529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___29529,ch){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___29529,ch){
return (function (state_29503){
var state_val_29504 = (state_29503[(1)]);
if((state_val_29504 === (7))){
var inst_29499 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
var statearr_29505_29530 = state_29503__$1;
(statearr_29505_29530[(2)] = inst_29499);

(statearr_29505_29530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (1))){
var state_29503__$1 = state_29503;
var statearr_29506_29531 = state_29503__$1;
(statearr_29506_29531[(2)] = null);

(statearr_29506_29531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (4))){
var inst_29467 = (state_29503[(7)]);
var inst_29467__$1 = (state_29503[(2)]);
var state_29503__$1 = (function (){var statearr_29507 = state_29503;
(statearr_29507[(7)] = inst_29467__$1);

return statearr_29507;
})();
if(cljs.core.truth_(inst_29467__$1)){
var statearr_29508_29532 = state_29503__$1;
(statearr_29508_29532[(1)] = (5));

} else {
var statearr_29509_29533 = state_29503__$1;
(statearr_29509_29533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (13))){
var state_29503__$1 = state_29503;
var statearr_29510_29534 = state_29503__$1;
(statearr_29510_29534[(2)] = null);

(statearr_29510_29534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (6))){
var state_29503__$1 = state_29503;
var statearr_29511_29535 = state_29503__$1;
(statearr_29511_29535[(2)] = null);

(statearr_29511_29535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (3))){
var inst_29501 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29503__$1,inst_29501);
} else {
if((state_val_29504 === (12))){
var inst_29474 = (state_29503[(8)]);
var inst_29487 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29474);
var inst_29488 = cljs.core.first.call(null,inst_29487);
var inst_29489 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29488);
var inst_29490 = console.warn("Figwheel: Not loading code with warnings - ",inst_29489);
var state_29503__$1 = state_29503;
var statearr_29512_29536 = state_29503__$1;
(statearr_29512_29536[(2)] = inst_29490);

(statearr_29512_29536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (2))){
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29503__$1,(4),ch);
} else {
if((state_val_29504 === (11))){
var inst_29483 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
var statearr_29513_29537 = state_29503__$1;
(statearr_29513_29537[(2)] = inst_29483);

(statearr_29513_29537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (9))){
var inst_29473 = (state_29503[(9)]);
var inst_29485 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29473,opts);
var state_29503__$1 = state_29503;
if(cljs.core.truth_(inst_29485)){
var statearr_29514_29538 = state_29503__$1;
(statearr_29514_29538[(1)] = (12));

} else {
var statearr_29515_29539 = state_29503__$1;
(statearr_29515_29539[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (5))){
var inst_29467 = (state_29503[(7)]);
var inst_29473 = (state_29503[(9)]);
var inst_29469 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29470 = (new cljs.core.PersistentArrayMap(null,2,inst_29469,null));
var inst_29471 = (new cljs.core.PersistentHashSet(null,inst_29470,null));
var inst_29472 = figwheel.client.focus_msgs.call(null,inst_29471,inst_29467);
var inst_29473__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29472);
var inst_29474 = cljs.core.first.call(null,inst_29472);
var inst_29475 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29473__$1,opts);
var state_29503__$1 = (function (){var statearr_29516 = state_29503;
(statearr_29516[(8)] = inst_29474);

(statearr_29516[(9)] = inst_29473__$1);

return statearr_29516;
})();
if(cljs.core.truth_(inst_29475)){
var statearr_29517_29540 = state_29503__$1;
(statearr_29517_29540[(1)] = (8));

} else {
var statearr_29518_29541 = state_29503__$1;
(statearr_29518_29541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (14))){
var inst_29493 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
var statearr_29519_29542 = state_29503__$1;
(statearr_29519_29542[(2)] = inst_29493);

(statearr_29519_29542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (10))){
var inst_29495 = (state_29503[(2)]);
var state_29503__$1 = (function (){var statearr_29520 = state_29503;
(statearr_29520[(10)] = inst_29495);

return statearr_29520;
})();
var statearr_29521_29543 = state_29503__$1;
(statearr_29521_29543[(2)] = null);

(statearr_29521_29543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (8))){
var inst_29474 = (state_29503[(8)]);
var inst_29477 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29478 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29474);
var inst_29479 = cljs.core.async.timeout.call(null,(1000));
var inst_29480 = [inst_29478,inst_29479];
var inst_29481 = (new cljs.core.PersistentVector(null,2,(5),inst_29477,inst_29480,null));
var state_29503__$1 = state_29503;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29503__$1,(11),inst_29481);
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
});})(c__21372__auto___29529,ch))
;
return ((function (switch__21310__auto__,c__21372__auto___29529,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21311__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21311__auto____0 = (function (){
var statearr_29525 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29525[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21311__auto__);

(statearr_29525[(1)] = (1));

return statearr_29525;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21311__auto____1 = (function (state_29503){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_29503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e29526){if((e29526 instanceof Object)){
var ex__21314__auto__ = e29526;
var statearr_29527_29544 = state_29503;
(statearr_29527_29544[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29545 = state_29503;
state_29503 = G__29545;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21311__auto__ = function(state_29503){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21311__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21311__auto____1.call(this,state_29503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21311__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21311__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___29529,ch))
})();
var state__21374__auto__ = (function (){var statearr_29528 = f__21373__auto__.call(null);
(statearr_29528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___29529);

return statearr_29528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___29529,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29546_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29546_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_29553 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29553){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_29551 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29552 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29551,_STAR_print_newline_STAR_29552,base_path_29553){
return (function() { 
var G__29554__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29554 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29555__i = 0, G__29555__a = new Array(arguments.length -  0);
while (G__29555__i < G__29555__a.length) {G__29555__a[G__29555__i] = arguments[G__29555__i + 0]; ++G__29555__i;}
  args = new cljs.core.IndexedSeq(G__29555__a,0);
} 
return G__29554__delegate.call(this,args);};
G__29554.cljs$lang$maxFixedArity = 0;
G__29554.cljs$lang$applyTo = (function (arglist__29556){
var args = cljs.core.seq(arglist__29556);
return G__29554__delegate(args);
});
G__29554.cljs$core$IFn$_invoke$arity$variadic = G__29554__delegate;
return G__29554;
})()
;})(_STAR_print_fn_STAR_29551,_STAR_print_newline_STAR_29552,base_path_29553))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29552;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29551;
}}catch (e29550){if((e29550 instanceof Error)){
var e = e29550;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29553], null));
} else {
var e = e29550;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29553))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29557){
var map__29562 = p__29557;
var map__29562__$1 = ((cljs.core.seq_QMARK_.call(null,map__29562))?cljs.core.apply.call(null,cljs.core.hash_map,map__29562):map__29562);
var opts = map__29562__$1;
var build_id = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29562,map__29562__$1,opts,build_id){
return (function (p__29563){
var vec__29564 = p__29563;
var map__29565 = cljs.core.nth.call(null,vec__29564,(0),null);
var map__29565__$1 = ((cljs.core.seq_QMARK_.call(null,map__29565))?cljs.core.apply.call(null,cljs.core.hash_map,map__29565):map__29565);
var msg = map__29565__$1;
var msg_name = cljs.core.get.call(null,map__29565__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29564,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__29564,map__29565,map__29565__$1,msg,msg_name,_,map__29562,map__29562__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29564,map__29565,map__29565__$1,msg,msg_name,_,map__29562,map__29562__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29562,map__29562__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29569){
var vec__29570 = p__29569;
var map__29571 = cljs.core.nth.call(null,vec__29570,(0),null);
var map__29571__$1 = ((cljs.core.seq_QMARK_.call(null,map__29571))?cljs.core.apply.call(null,cljs.core.hash_map,map__29571):map__29571);
var msg = map__29571__$1;
var msg_name = cljs.core.get.call(null,map__29571__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29570,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29572){
var map__29580 = p__29572;
var map__29580__$1 = ((cljs.core.seq_QMARK_.call(null,map__29580))?cljs.core.apply.call(null,cljs.core.hash_map,map__29580):map__29580);
var on_compile_warning = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29580,map__29580__$1,on_compile_warning,on_compile_fail){
return (function (p__29581){
var vec__29582 = p__29581;
var map__29583 = cljs.core.nth.call(null,vec__29582,(0),null);
var map__29583__$1 = ((cljs.core.seq_QMARK_.call(null,map__29583))?cljs.core.apply.call(null,cljs.core.hash_map,map__29583):map__29583);
var msg = map__29583__$1;
var msg_name = cljs.core.get.call(null,map__29583__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29582,(1));
var pred__29584 = cljs.core._EQ_;
var expr__29585 = msg_name;
if(cljs.core.truth_(pred__29584.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29585))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29584.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29585))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29580,map__29580__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto__,msg_hist,msg_names,msg){
return (function (state_29786){
var state_val_29787 = (state_29786[(1)]);
if((state_val_29787 === (7))){
var inst_29720 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29788_29829 = state_29786__$1;
(statearr_29788_29829[(2)] = inst_29720);

(statearr_29788_29829[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (20))){
var inst_29748 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29786__$1 = state_29786;
if(cljs.core.truth_(inst_29748)){
var statearr_29789_29830 = state_29786__$1;
(statearr_29789_29830[(1)] = (22));

} else {
var statearr_29790_29831 = state_29786__$1;
(statearr_29790_29831[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (27))){
var inst_29760 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29761 = figwheel.client.heads_up.display_warning.call(null,inst_29760);
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29786__$1,(30),inst_29761);
} else {
if((state_val_29787 === (1))){
var inst_29708 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29786__$1 = state_29786;
if(cljs.core.truth_(inst_29708)){
var statearr_29791_29832 = state_29786__$1;
(statearr_29791_29832[(1)] = (2));

} else {
var statearr_29792_29833 = state_29786__$1;
(statearr_29792_29833[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (24))){
var inst_29776 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29793_29834 = state_29786__$1;
(statearr_29793_29834[(2)] = inst_29776);

(statearr_29793_29834[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (4))){
var inst_29784 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29786__$1,inst_29784);
} else {
if((state_val_29787 === (15))){
var inst_29736 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29737 = figwheel.client.format_messages.call(null,inst_29736);
var inst_29738 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29739 = figwheel.client.heads_up.display_error.call(null,inst_29737,inst_29738);
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29786__$1,(18),inst_29739);
} else {
if((state_val_29787 === (21))){
var inst_29778 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29794_29835 = state_29786__$1;
(statearr_29794_29835[(2)] = inst_29778);

(statearr_29794_29835[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (31))){
var inst_29767 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29786__$1,(34),inst_29767);
} else {
if((state_val_29787 === (32))){
var state_29786__$1 = state_29786;
var statearr_29795_29836 = state_29786__$1;
(statearr_29795_29836[(2)] = null);

(statearr_29795_29836[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (33))){
var inst_29772 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29796_29837 = state_29786__$1;
(statearr_29796_29837[(2)] = inst_29772);

(statearr_29796_29837[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (13))){
var inst_29726 = (state_29786[(2)]);
var inst_29727 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29728 = figwheel.client.format_messages.call(null,inst_29727);
var inst_29729 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29730 = figwheel.client.heads_up.display_error.call(null,inst_29728,inst_29729);
var state_29786__$1 = (function (){var statearr_29797 = state_29786;
(statearr_29797[(7)] = inst_29726);

return statearr_29797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29786__$1,(14),inst_29730);
} else {
if((state_val_29787 === (22))){
var inst_29750 = figwheel.client.heads_up.clear.call(null);
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29786__$1,(25),inst_29750);
} else {
if((state_val_29787 === (29))){
var inst_29774 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29798_29838 = state_29786__$1;
(statearr_29798_29838[(2)] = inst_29774);

(statearr_29798_29838[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (6))){
var inst_29716 = figwheel.client.heads_up.clear.call(null);
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29786__$1,(9),inst_29716);
} else {
if((state_val_29787 === (28))){
var inst_29765 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29786__$1 = state_29786;
if(cljs.core.truth_(inst_29765)){
var statearr_29799_29839 = state_29786__$1;
(statearr_29799_29839[(1)] = (31));

} else {
var statearr_29800_29840 = state_29786__$1;
(statearr_29800_29840[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (25))){
var inst_29752 = (state_29786[(2)]);
var inst_29753 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29754 = figwheel.client.heads_up.display_warning.call(null,inst_29753);
var state_29786__$1 = (function (){var statearr_29801 = state_29786;
(statearr_29801[(8)] = inst_29752);

return statearr_29801;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29786__$1,(26),inst_29754);
} else {
if((state_val_29787 === (34))){
var inst_29769 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29802_29841 = state_29786__$1;
(statearr_29802_29841[(2)] = inst_29769);

(statearr_29802_29841[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (17))){
var inst_29780 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29803_29842 = state_29786__$1;
(statearr_29803_29842[(2)] = inst_29780);

(statearr_29803_29842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (3))){
var inst_29722 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29786__$1 = state_29786;
if(cljs.core.truth_(inst_29722)){
var statearr_29804_29843 = state_29786__$1;
(statearr_29804_29843[(1)] = (10));

} else {
var statearr_29805_29844 = state_29786__$1;
(statearr_29805_29844[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (12))){
var inst_29782 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29806_29845 = state_29786__$1;
(statearr_29806_29845[(2)] = inst_29782);

(statearr_29806_29845[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (2))){
var inst_29710 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29786__$1 = state_29786;
if(cljs.core.truth_(inst_29710)){
var statearr_29807_29846 = state_29786__$1;
(statearr_29807_29846[(1)] = (5));

} else {
var statearr_29808_29847 = state_29786__$1;
(statearr_29808_29847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (23))){
var inst_29758 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29786__$1 = state_29786;
if(cljs.core.truth_(inst_29758)){
var statearr_29809_29848 = state_29786__$1;
(statearr_29809_29848[(1)] = (27));

} else {
var statearr_29810_29849 = state_29786__$1;
(statearr_29810_29849[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (19))){
var inst_29745 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29746 = figwheel.client.heads_up.append_message.call(null,inst_29745);
var state_29786__$1 = state_29786;
var statearr_29811_29850 = state_29786__$1;
(statearr_29811_29850[(2)] = inst_29746);

(statearr_29811_29850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (11))){
var inst_29734 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29786__$1 = state_29786;
if(cljs.core.truth_(inst_29734)){
var statearr_29812_29851 = state_29786__$1;
(statearr_29812_29851[(1)] = (15));

} else {
var statearr_29813_29852 = state_29786__$1;
(statearr_29813_29852[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (9))){
var inst_29718 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29814_29853 = state_29786__$1;
(statearr_29814_29853[(2)] = inst_29718);

(statearr_29814_29853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (5))){
var inst_29712 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29786__$1,(8),inst_29712);
} else {
if((state_val_29787 === (14))){
var inst_29732 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29815_29854 = state_29786__$1;
(statearr_29815_29854[(2)] = inst_29732);

(statearr_29815_29854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (26))){
var inst_29756 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29816_29855 = state_29786__$1;
(statearr_29816_29855[(2)] = inst_29756);

(statearr_29816_29855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (16))){
var inst_29743 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29786__$1 = state_29786;
if(cljs.core.truth_(inst_29743)){
var statearr_29817_29856 = state_29786__$1;
(statearr_29817_29856[(1)] = (19));

} else {
var statearr_29818_29857 = state_29786__$1;
(statearr_29818_29857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (30))){
var inst_29763 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29819_29858 = state_29786__$1;
(statearr_29819_29858[(2)] = inst_29763);

(statearr_29819_29858[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (10))){
var inst_29724 = figwheel.client.heads_up.clear.call(null);
var state_29786__$1 = state_29786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29786__$1,(13),inst_29724);
} else {
if((state_val_29787 === (18))){
var inst_29741 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29820_29859 = state_29786__$1;
(statearr_29820_29859[(2)] = inst_29741);

(statearr_29820_29859[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29787 === (8))){
var inst_29714 = (state_29786[(2)]);
var state_29786__$1 = state_29786;
var statearr_29821_29860 = state_29786__$1;
(statearr_29821_29860[(2)] = inst_29714);

(statearr_29821_29860[(1)] = (7));


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
});})(c__21372__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21310__auto__,c__21372__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21311__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21311__auto____0 = (function (){
var statearr_29825 = [null,null,null,null,null,null,null,null,null];
(statearr_29825[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21311__auto__);

(statearr_29825[(1)] = (1));

return statearr_29825;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21311__auto____1 = (function (state_29786){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_29786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e29826){if((e29826 instanceof Object)){
var ex__21314__auto__ = e29826;
var statearr_29827_29861 = state_29786;
(statearr_29827_29861[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29862 = state_29786;
state_29786 = G__29862;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21311__auto__ = function(state_29786){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21311__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21311__auto____1.call(this,state_29786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21311__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21311__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto__,msg_hist,msg_names,msg))
})();
var state__21374__auto__ = (function (){var statearr_29828 = f__21373__auto__.call(null);
(statearr_29828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto__);

return statearr_29828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto__,msg_hist,msg_names,msg))
);

return c__21372__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21372__auto___29925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___29925,ch){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___29925,ch){
return (function (state_29908){
var state_val_29909 = (state_29908[(1)]);
if((state_val_29909 === (1))){
var state_29908__$1 = state_29908;
var statearr_29910_29926 = state_29908__$1;
(statearr_29910_29926[(2)] = null);

(statearr_29910_29926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (2))){
var state_29908__$1 = state_29908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29908__$1,(4),ch);
} else {
if((state_val_29909 === (3))){
var inst_29906 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29908__$1,inst_29906);
} else {
if((state_val_29909 === (4))){
var inst_29896 = (state_29908[(7)]);
var inst_29896__$1 = (state_29908[(2)]);
var state_29908__$1 = (function (){var statearr_29911 = state_29908;
(statearr_29911[(7)] = inst_29896__$1);

return statearr_29911;
})();
if(cljs.core.truth_(inst_29896__$1)){
var statearr_29912_29927 = state_29908__$1;
(statearr_29912_29927[(1)] = (5));

} else {
var statearr_29913_29928 = state_29908__$1;
(statearr_29913_29928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (5))){
var inst_29896 = (state_29908[(7)]);
var inst_29898 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29896);
var state_29908__$1 = state_29908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29908__$1,(8),inst_29898);
} else {
if((state_val_29909 === (6))){
var state_29908__$1 = state_29908;
var statearr_29914_29929 = state_29908__$1;
(statearr_29914_29929[(2)] = null);

(statearr_29914_29929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (7))){
var inst_29904 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
var statearr_29915_29930 = state_29908__$1;
(statearr_29915_29930[(2)] = inst_29904);

(statearr_29915_29930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (8))){
var inst_29900 = (state_29908[(2)]);
var state_29908__$1 = (function (){var statearr_29916 = state_29908;
(statearr_29916[(8)] = inst_29900);

return statearr_29916;
})();
var statearr_29917_29931 = state_29908__$1;
(statearr_29917_29931[(2)] = null);

(statearr_29917_29931[(1)] = (2));


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
});})(c__21372__auto___29925,ch))
;
return ((function (switch__21310__auto__,c__21372__auto___29925,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21311__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21311__auto____0 = (function (){
var statearr_29921 = [null,null,null,null,null,null,null,null,null];
(statearr_29921[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21311__auto__);

(statearr_29921[(1)] = (1));

return statearr_29921;
});
var figwheel$client$heads_up_plugin_$_state_machine__21311__auto____1 = (function (state_29908){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_29908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e29922){if((e29922 instanceof Object)){
var ex__21314__auto__ = e29922;
var statearr_29923_29932 = state_29908;
(statearr_29923_29932[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29933 = state_29908;
state_29908 = G__29933;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21311__auto__ = function(state_29908){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21311__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21311__auto____1.call(this,state_29908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21311__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21311__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___29925,ch))
})();
var state__21374__auto__ = (function (){var statearr_29924 = f__21373__auto__.call(null);
(statearr_29924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___29925);

return statearr_29924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___29925,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto__){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto__){
return (function (state_29954){
var state_val_29955 = (state_29954[(1)]);
if((state_val_29955 === (1))){
var inst_29949 = cljs.core.async.timeout.call(null,(3000));
var state_29954__$1 = state_29954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29954__$1,(2),inst_29949);
} else {
if((state_val_29955 === (2))){
var inst_29951 = (state_29954[(2)]);
var inst_29952 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29954__$1 = (function (){var statearr_29956 = state_29954;
(statearr_29956[(7)] = inst_29951);

return statearr_29956;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29954__$1,inst_29952);
} else {
return null;
}
}
});})(c__21372__auto__))
;
return ((function (switch__21310__auto__,c__21372__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21311__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21311__auto____0 = (function (){
var statearr_29960 = [null,null,null,null,null,null,null,null];
(statearr_29960[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21311__auto__);

(statearr_29960[(1)] = (1));

return statearr_29960;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21311__auto____1 = (function (state_29954){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_29954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e29961){if((e29961 instanceof Object)){
var ex__21314__auto__ = e29961;
var statearr_29962_29964 = state_29954;
(statearr_29962_29964[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29965 = state_29954;
state_29954 = G__29965;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21311__auto__ = function(state_29954){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21311__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21311__auto____1.call(this,state_29954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21311__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21311__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto__))
})();
var state__21374__auto__ = (function (){var statearr_29963 = f__21373__auto__.call(null);
(statearr_29963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto__);

return statearr_29963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto__))
);

return c__21372__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29966){
var map__29972 = p__29966;
var map__29972__$1 = ((cljs.core.seq_QMARK_.call(null,map__29972))?cljs.core.apply.call(null,cljs.core.hash_map,map__29972):map__29972);
var ed = map__29972__$1;
var formatted_exception = cljs.core.get.call(null,map__29972__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29972__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29972__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29973_29977 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29974_29978 = null;
var count__29975_29979 = (0);
var i__29976_29980 = (0);
while(true){
if((i__29976_29980 < count__29975_29979)){
var msg_29981 = cljs.core._nth.call(null,chunk__29974_29978,i__29976_29980);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29981);

var G__29982 = seq__29973_29977;
var G__29983 = chunk__29974_29978;
var G__29984 = count__29975_29979;
var G__29985 = (i__29976_29980 + (1));
seq__29973_29977 = G__29982;
chunk__29974_29978 = G__29983;
count__29975_29979 = G__29984;
i__29976_29980 = G__29985;
continue;
} else {
var temp__4425__auto___29986 = cljs.core.seq.call(null,seq__29973_29977);
if(temp__4425__auto___29986){
var seq__29973_29987__$1 = temp__4425__auto___29986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29973_29987__$1)){
var c__18922__auto___29988 = cljs.core.chunk_first.call(null,seq__29973_29987__$1);
var G__29989 = cljs.core.chunk_rest.call(null,seq__29973_29987__$1);
var G__29990 = c__18922__auto___29988;
var G__29991 = cljs.core.count.call(null,c__18922__auto___29988);
var G__29992 = (0);
seq__29973_29977 = G__29989;
chunk__29974_29978 = G__29990;
count__29975_29979 = G__29991;
i__29976_29980 = G__29992;
continue;
} else {
var msg_29993 = cljs.core.first.call(null,seq__29973_29987__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29993);

var G__29994 = cljs.core.next.call(null,seq__29973_29987__$1);
var G__29995 = null;
var G__29996 = (0);
var G__29997 = (0);
seq__29973_29977 = G__29994;
chunk__29974_29978 = G__29995;
count__29975_29979 = G__29996;
i__29976_29980 = G__29997;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29998){
var map__30000 = p__29998;
var map__30000__$1 = ((cljs.core.seq_QMARK_.call(null,map__30000))?cljs.core.apply.call(null,cljs.core.hash_map,map__30000):map__30000);
var w = map__30000__$1;
var message = cljs.core.get.call(null,map__30000__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18125__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18125__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18125__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30007 = cljs.core.seq.call(null,plugins);
var chunk__30008 = null;
var count__30009 = (0);
var i__30010 = (0);
while(true){
if((i__30010 < count__30009)){
var vec__30011 = cljs.core._nth.call(null,chunk__30008,i__30010);
var k = cljs.core.nth.call(null,vec__30011,(0),null);
var plugin = cljs.core.nth.call(null,vec__30011,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30013 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30007,chunk__30008,count__30009,i__30010,pl_30013,vec__30011,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30013.call(null,msg_hist);
});})(seq__30007,chunk__30008,count__30009,i__30010,pl_30013,vec__30011,k,plugin))
);
} else {
}

var G__30014 = seq__30007;
var G__30015 = chunk__30008;
var G__30016 = count__30009;
var G__30017 = (i__30010 + (1));
seq__30007 = G__30014;
chunk__30008 = G__30015;
count__30009 = G__30016;
i__30010 = G__30017;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30007);
if(temp__4425__auto__){
var seq__30007__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30007__$1)){
var c__18922__auto__ = cljs.core.chunk_first.call(null,seq__30007__$1);
var G__30018 = cljs.core.chunk_rest.call(null,seq__30007__$1);
var G__30019 = c__18922__auto__;
var G__30020 = cljs.core.count.call(null,c__18922__auto__);
var G__30021 = (0);
seq__30007 = G__30018;
chunk__30008 = G__30019;
count__30009 = G__30020;
i__30010 = G__30021;
continue;
} else {
var vec__30012 = cljs.core.first.call(null,seq__30007__$1);
var k = cljs.core.nth.call(null,vec__30012,(0),null);
var plugin = cljs.core.nth.call(null,vec__30012,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30022 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30007,chunk__30008,count__30009,i__30010,pl_30022,vec__30012,k,plugin,seq__30007__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30022.call(null,msg_hist);
});})(seq__30007,chunk__30008,count__30009,i__30010,pl_30022,vec__30012,k,plugin,seq__30007__$1,temp__4425__auto__))
);
} else {
}

var G__30023 = cljs.core.next.call(null,seq__30007__$1);
var G__30024 = null;
var G__30025 = (0);
var G__30026 = (0);
seq__30007 = G__30023;
chunk__30008 = G__30024;
count__30009 = G__30025;
i__30010 = G__30026;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__30028 = arguments.length;
switch (G__30028) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19177__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19177__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30031){
var map__30032 = p__30031;
var map__30032__$1 = ((cljs.core.seq_QMARK_.call(null,map__30032))?cljs.core.apply.call(null,cljs.core.hash_map,map__30032):map__30032);
var opts = map__30032__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30030){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30030));
});

//# sourceMappingURL=client.js.map?rel=1437028488549