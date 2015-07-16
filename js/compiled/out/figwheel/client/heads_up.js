// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19177__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19177__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30045_30053 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30046_30054 = null;
var count__30047_30055 = (0);
var i__30048_30056 = (0);
while(true){
if((i__30048_30056 < count__30047_30055)){
var k_30057 = cljs.core._nth.call(null,chunk__30046_30054,i__30048_30056);
e.setAttribute(cljs.core.name.call(null,k_30057),cljs.core.get.call(null,attrs,k_30057));

var G__30058 = seq__30045_30053;
var G__30059 = chunk__30046_30054;
var G__30060 = count__30047_30055;
var G__30061 = (i__30048_30056 + (1));
seq__30045_30053 = G__30058;
chunk__30046_30054 = G__30059;
count__30047_30055 = G__30060;
i__30048_30056 = G__30061;
continue;
} else {
var temp__4425__auto___30062 = cljs.core.seq.call(null,seq__30045_30053);
if(temp__4425__auto___30062){
var seq__30045_30063__$1 = temp__4425__auto___30062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30045_30063__$1)){
var c__18922__auto___30064 = cljs.core.chunk_first.call(null,seq__30045_30063__$1);
var G__30065 = cljs.core.chunk_rest.call(null,seq__30045_30063__$1);
var G__30066 = c__18922__auto___30064;
var G__30067 = cljs.core.count.call(null,c__18922__auto___30064);
var G__30068 = (0);
seq__30045_30053 = G__30065;
chunk__30046_30054 = G__30066;
count__30047_30055 = G__30067;
i__30048_30056 = G__30068;
continue;
} else {
var k_30069 = cljs.core.first.call(null,seq__30045_30063__$1);
e.setAttribute(cljs.core.name.call(null,k_30069),cljs.core.get.call(null,attrs,k_30069));

var G__30070 = cljs.core.next.call(null,seq__30045_30063__$1);
var G__30071 = null;
var G__30072 = (0);
var G__30073 = (0);
seq__30045_30053 = G__30070;
chunk__30046_30054 = G__30071;
count__30047_30055 = G__30072;
i__30048_30056 = G__30073;
continue;
}
} else {
}
}
break;
}

var seq__30049_30074 = cljs.core.seq.call(null,children);
var chunk__30050_30075 = null;
var count__30051_30076 = (0);
var i__30052_30077 = (0);
while(true){
if((i__30052_30077 < count__30051_30076)){
var ch_30078 = cljs.core._nth.call(null,chunk__30050_30075,i__30052_30077);
e.appendChild(ch_30078);

var G__30079 = seq__30049_30074;
var G__30080 = chunk__30050_30075;
var G__30081 = count__30051_30076;
var G__30082 = (i__30052_30077 + (1));
seq__30049_30074 = G__30079;
chunk__30050_30075 = G__30080;
count__30051_30076 = G__30081;
i__30052_30077 = G__30082;
continue;
} else {
var temp__4425__auto___30083 = cljs.core.seq.call(null,seq__30049_30074);
if(temp__4425__auto___30083){
var seq__30049_30084__$1 = temp__4425__auto___30083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30049_30084__$1)){
var c__18922__auto___30085 = cljs.core.chunk_first.call(null,seq__30049_30084__$1);
var G__30086 = cljs.core.chunk_rest.call(null,seq__30049_30084__$1);
var G__30087 = c__18922__auto___30085;
var G__30088 = cljs.core.count.call(null,c__18922__auto___30085);
var G__30089 = (0);
seq__30049_30074 = G__30086;
chunk__30050_30075 = G__30087;
count__30051_30076 = G__30088;
i__30052_30077 = G__30089;
continue;
} else {
var ch_30090 = cljs.core.first.call(null,seq__30049_30084__$1);
e.appendChild(ch_30090);

var G__30091 = cljs.core.next.call(null,seq__30049_30084__$1);
var G__30092 = null;
var G__30093 = (0);
var G__30094 = (0);
seq__30049_30074 = G__30091;
chunk__30050_30075 = G__30092;
count__30051_30076 = G__30093;
i__30052_30077 = G__30094;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq30042){
var G__30043 = cljs.core.first.call(null,seq30042);
var seq30042__$1 = cljs.core.next.call(null,seq30042);
var G__30044 = cljs.core.first.call(null,seq30042__$1);
var seq30042__$2 = cljs.core.next.call(null,seq30042__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__30043,G__30044,seq30042__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19032__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19033__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19034__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19035__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19036__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19032__auto__,prefer_table__19033__auto__,method_cache__19034__auto__,cached_hierarchy__19035__auto__,hierarchy__19036__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19032__auto__,prefer_table__19033__auto__,method_cache__19034__auto__,cached_hierarchy__19035__auto__,hierarchy__19036__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19036__auto__,method_table__19032__auto__,prefer_table__19033__auto__,method_cache__19034__auto__,cached_hierarchy__19035__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30095 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30095.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30095.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_30095.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30095);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__30096,st_map){
var map__30100 = p__30096;
var map__30100__$1 = ((cljs.core.seq_QMARK_.call(null,map__30100))?cljs.core.apply.call(null,cljs.core.hash_map,map__30100):map__30100);
var container_el = cljs.core.get.call(null,map__30100__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30100,map__30100__$1,container_el){
return (function (p__30101){
var vec__30102 = p__30101;
var k = cljs.core.nth.call(null,vec__30102,(0),null);
var v = cljs.core.nth.call(null,vec__30102,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30100,map__30100__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__30103,dom_str){
var map__30105 = p__30103;
var map__30105__$1 = ((cljs.core.seq_QMARK_.call(null,map__30105))?cljs.core.apply.call(null,cljs.core.hash_map,map__30105):map__30105);
var c = map__30105__$1;
var content_area_el = cljs.core.get.call(null,map__30105__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__30106){
var map__30108 = p__30106;
var map__30108__$1 = ((cljs.core.seq_QMARK_.call(null,map__30108))?cljs.core.apply.call(null,cljs.core.hash_map,map__30108):map__30108);
var content_area_el = cljs.core.get.call(null,map__30108__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto__){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto__){
return (function (state_30150){
var state_val_30151 = (state_30150[(1)]);
if((state_val_30151 === (1))){
var inst_30135 = (state_30150[(7)]);
var inst_30135__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30136 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30137 = ["10px","10px","100%","68px","1.0"];
var inst_30138 = cljs.core.PersistentHashMap.fromArrays(inst_30136,inst_30137);
var inst_30139 = cljs.core.merge.call(null,inst_30138,style);
var inst_30140 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30135__$1,inst_30139);
var inst_30141 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30135__$1,msg);
var inst_30142 = cljs.core.async.timeout.call(null,(300));
var state_30150__$1 = (function (){var statearr_30152 = state_30150;
(statearr_30152[(8)] = inst_30141);

(statearr_30152[(7)] = inst_30135__$1);

(statearr_30152[(9)] = inst_30140);

return statearr_30152;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30150__$1,(2),inst_30142);
} else {
if((state_val_30151 === (2))){
var inst_30135 = (state_30150[(7)]);
var inst_30144 = (state_30150[(2)]);
var inst_30145 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30146 = ["auto"];
var inst_30147 = cljs.core.PersistentHashMap.fromArrays(inst_30145,inst_30146);
var inst_30148 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30135,inst_30147);
var state_30150__$1 = (function (){var statearr_30153 = state_30150;
(statearr_30153[(10)] = inst_30144);

return statearr_30153;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30150__$1,inst_30148);
} else {
return null;
}
}
});})(c__21372__auto__))
;
return ((function (switch__21310__auto__,c__21372__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21311__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21311__auto____0 = (function (){
var statearr_30157 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30157[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21311__auto__);

(statearr_30157[(1)] = (1));

return statearr_30157;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21311__auto____1 = (function (state_30150){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_30150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e30158){if((e30158 instanceof Object)){
var ex__21314__auto__ = e30158;
var statearr_30159_30161 = state_30150;
(statearr_30159_30161[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30162 = state_30150;
state_30150 = G__30162;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21311__auto__ = function(state_30150){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21311__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21311__auto____1.call(this,state_30150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21311__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21311__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto__))
})();
var state__21374__auto__ = (function (){var statearr_30160 = f__21373__auto__.call(null);
(statearr_30160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto__);

return statearr_30160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto__))
);

return c__21372__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__30164 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__30164,(0),null);
var ln = cljs.core.nth.call(null,vec__30164,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30167 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__30167,(0),null);
var file_line = cljs.core.nth.call(null,vec__30167,(1),null);
var file_column = cljs.core.nth.call(null,vec__30167,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30167,file_name,file_line,file_column){
return (function (p1__30165_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__30165_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__30167,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18137__auto__ = file_line;
if(cljs.core.truth_(or__18137__auto__)){
return or__18137__auto__;
} else {
var and__18125__auto__ = cause;
if(cljs.core.truth_(and__18125__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18125__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__30169 = figwheel.client.heads_up.ensure_container.call(null);
var map__30169__$1 = ((cljs.core.seq_QMARK_.call(null,map__30169))?cljs.core.apply.call(null,cljs.core.hash_map,map__30169):map__30169);
var content_area_el = cljs.core.get.call(null,map__30169__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto__){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto__){
return (function (state_30216){
var state_val_30217 = (state_30216[(1)]);
if((state_val_30217 === (1))){
var inst_30199 = (state_30216[(7)]);
var inst_30199__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30200 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30201 = ["0.0"];
var inst_30202 = cljs.core.PersistentHashMap.fromArrays(inst_30200,inst_30201);
var inst_30203 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30199__$1,inst_30202);
var inst_30204 = cljs.core.async.timeout.call(null,(300));
var state_30216__$1 = (function (){var statearr_30218 = state_30216;
(statearr_30218[(7)] = inst_30199__$1);

(statearr_30218[(8)] = inst_30203);

return statearr_30218;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30216__$1,(2),inst_30204);
} else {
if((state_val_30217 === (2))){
var inst_30199 = (state_30216[(7)]);
var inst_30206 = (state_30216[(2)]);
var inst_30207 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30208 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30209 = cljs.core.PersistentHashMap.fromArrays(inst_30207,inst_30208);
var inst_30210 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30199,inst_30209);
var inst_30211 = cljs.core.async.timeout.call(null,(200));
var state_30216__$1 = (function (){var statearr_30219 = state_30216;
(statearr_30219[(9)] = inst_30206);

(statearr_30219[(10)] = inst_30210);

return statearr_30219;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30216__$1,(3),inst_30211);
} else {
if((state_val_30217 === (3))){
var inst_30199 = (state_30216[(7)]);
var inst_30213 = (state_30216[(2)]);
var inst_30214 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30199,"");
var state_30216__$1 = (function (){var statearr_30220 = state_30216;
(statearr_30220[(11)] = inst_30213);

return statearr_30220;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30216__$1,inst_30214);
} else {
return null;
}
}
}
});})(c__21372__auto__))
;
return ((function (switch__21310__auto__,c__21372__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21311__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21311__auto____0 = (function (){
var statearr_30224 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30224[(0)] = figwheel$client$heads_up$clear_$_state_machine__21311__auto__);

(statearr_30224[(1)] = (1));

return statearr_30224;
});
var figwheel$client$heads_up$clear_$_state_machine__21311__auto____1 = (function (state_30216){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_30216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e30225){if((e30225 instanceof Object)){
var ex__21314__auto__ = e30225;
var statearr_30226_30228 = state_30216;
(statearr_30226_30228[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30229 = state_30216;
state_30216 = G__30229;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21311__auto__ = function(state_30216){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21311__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21311__auto____1.call(this,state_30216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21311__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21311__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto__))
})();
var state__21374__auto__ = (function (){var statearr_30227 = f__21373__auto__.call(null);
(statearr_30227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto__);

return statearr_30227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto__))
);

return c__21372__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto__){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto__){
return (function (state_30261){
var state_val_30262 = (state_30261[(1)]);
if((state_val_30262 === (1))){
var inst_30251 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30261__$1 = state_30261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30261__$1,(2),inst_30251);
} else {
if((state_val_30262 === (2))){
var inst_30253 = (state_30261[(2)]);
var inst_30254 = cljs.core.async.timeout.call(null,(400));
var state_30261__$1 = (function (){var statearr_30263 = state_30261;
(statearr_30263[(7)] = inst_30253);

return statearr_30263;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30261__$1,(3),inst_30254);
} else {
if((state_val_30262 === (3))){
var inst_30256 = (state_30261[(2)]);
var inst_30257 = figwheel.client.heads_up.clear.call(null);
var state_30261__$1 = (function (){var statearr_30264 = state_30261;
(statearr_30264[(8)] = inst_30256);

return statearr_30264;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30261__$1,(4),inst_30257);
} else {
if((state_val_30262 === (4))){
var inst_30259 = (state_30261[(2)]);
var state_30261__$1 = state_30261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30261__$1,inst_30259);
} else {
return null;
}
}
}
}
});})(c__21372__auto__))
;
return ((function (switch__21310__auto__,c__21372__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21311__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21311__auto____0 = (function (){
var statearr_30268 = [null,null,null,null,null,null,null,null,null];
(statearr_30268[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21311__auto__);

(statearr_30268[(1)] = (1));

return statearr_30268;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21311__auto____1 = (function (state_30261){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_30261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e30269){if((e30269 instanceof Object)){
var ex__21314__auto__ = e30269;
var statearr_30270_30272 = state_30261;
(statearr_30270_30272[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30273 = state_30261;
state_30261 = G__30273;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21311__auto__ = function(state_30261){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21311__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21311__auto____1.call(this,state_30261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21311__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21311__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto__))
})();
var state__21374__auto__ = (function (){var statearr_30271 = f__21373__auto__.call(null);
(statearr_30271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto__);

return statearr_30271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto__))
);

return c__21372__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1437028488894