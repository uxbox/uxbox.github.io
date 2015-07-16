// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.workspace.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('uxbox.workspace.canvas.views');
goog.require('uxbox.icons');
goog.require('uxbox.projects.actions');
goog.require('uxbox.shapes.core');
goog.require('uxbox.workspace.figures.catalogs');
goog.require('uxbox.workspace.actions');
goog.require('uxbox.geometry');
goog.require('uxbox.navigation');
goog.require('uxbox.user.views');
goog.require('cuerdas.core');
uxbox.workspace.views.project_tree = (function uxbox$workspace$views$project_tree(db){
var title = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"title","title",636505583)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.project-tree-btn","div.project-tree-btn",-330256959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (title){
return (function (){
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"visible-project-bar","visible-project-bar",1336182203),cljs.core.not);
});})(title))
], null),uxbox.icons.project_tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null);
});
uxbox.workspace.views.header = (function uxbox$workspace$views$header(db){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header#workspace-bar.workspace-bar","header#workspace-bar.workspace-bar",-1409870768),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-icon","div.main-icon",1305268446),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.navigation.link,"/dashboard",uxbox.icons.logo], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.views.project_tree,db], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.workspace-options","div.workspace-options",619316215),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.options-btn","ul.options-btn",807112287),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tooltip.tooltip-bottom","li.tooltip.tooltip-bottom",1419048597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Undo (Ctrl + Z)"], null),uxbox.icons.undo], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tooltip.tooltip-bottom","li.tooltip.tooltip-bottom",1419048597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Redo (Ctrl + Shift + Z)"], null),uxbox.icons.redo], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.options-btn","ul.options-btn",807112287),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tooltip.tooltip-bottom","li.tooltip.tooltip-bottom",1419048597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Export (Ctrl + E)"], null),uxbox.icons.export$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tooltip.tooltip-bottom","li.tooltip.tooltip-bottom",1419048597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Image (Ctrl + I)"], null),uxbox.icons.image], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.options-btn","ul.options-btn",807112287),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tooltip.tooltip-bottom","li.tooltip.tooltip-bottom",1419048597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Ruler (Ctrl + R)"], null),uxbox.icons.ruler], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tooltip.tooltip-bottom","li.tooltip.tooltip-bottom",1419048597),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Grid (Ctrl + G)",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"workspace","workspace",-1096735709).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return uxbox.workspace.actions.toggle_grid.call(null);
})], null),uxbox.icons.grid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tooltip.tooltip-bottom","li.tooltip.tooltip-bottom",1419048597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Align (Ctrl + A)"], null),uxbox.icons.alignment], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tooltip.tooltip-bottom","li.tooltip.tooltip-bottom",1419048597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Organize (Ctrl + O)"], null),uxbox.icons.organize], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.user.views.user,db], null)], null);
});
uxbox.workspace.views.figures = (function uxbox$workspace$views$figures(db){
var map__23348 = cljs.core.deref.call(null,db);
var map__23348__$1 = ((cljs.core.seq_QMARK_.call(null,map__23348))?cljs.core.apply.call(null,cljs.core.hash_map,map__23348):map__23348);
var workspace = cljs.core.get.call(null,map__23348__$1,new cljs.core.Keyword(null,"workspace","workspace",-1096735709));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#form-figures.tool-window","div#form-figures.tool-window",-826951652),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-window-bar","div.tool-window-bar",-30347521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-window-icon","div.tool-window-icon",-1893125463),uxbox.icons.window], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Figures"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-window-close","div.tool-window-close",-43571478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23348,map__23348__$1,workspace){
return (function (){
return uxbox.workspace.actions.close_setting_box.call(null,new cljs.core.Keyword(null,"figures","figures",1618093438));
});})(map__23348,map__23348__$1,workspace))
], null),uxbox.icons.close], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-window-content","div.tool-window-content",1588749437),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.figures-catalog","div.figures-catalog",-43373627),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.input-select.small","select.input-select.small",732333900),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__23348,map__23348__$1,workspace){
return (function (p1__23330_SHARP_){
return uxbox.workspace.actions.set_figures_catalog.call(null,cljs.core.keyword.call(null,p1__23330_SHARP_.target.value));
});})(map__23348,map__23348__$1,workspace))
], null),(function (){var iter__18891__auto__ = ((function (map__23348,map__23348__$1,workspace){
return (function uxbox$workspace$views$figures_$_iter__23349(s__23350){
return (new cljs.core.LazySeq(null,((function (map__23348,map__23348__$1,workspace){
return (function (){
var s__23350__$1 = s__23350;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23350__$1);
if(temp__4425__auto__){
var s__23350__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23350__$2)){
var c__18889__auto__ = cljs.core.chunk_first.call(null,s__23350__$2);
var size__18890__auto__ = cljs.core.count.call(null,c__18889__auto__);
var b__23352 = cljs.core.chunk_buffer.call(null,size__18890__auto__);
if((function (){var i__23351 = (0);
while(true){
if((i__23351 < size__18890__auto__)){
var vec__23355 = cljs.core._nth.call(null,c__18889__auto__,i__23351);
var catalog_id = cljs.core.nth.call(null,vec__23355,(0),null);
var catalog = cljs.core.nth.call(null,vec__23355,(1),null);
cljs.core.chunk_append.call(null,b__23352,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),catalog_id,new cljs.core.Keyword(null,"value","value",305978217),catalog_id], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(catalog)], null));

var G__23365 = (i__23351 + (1));
i__23351 = G__23365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23352),uxbox$workspace$views$figures_$_iter__23349.call(null,cljs.core.chunk_rest.call(null,s__23350__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23352),null);
}
} else {
var vec__23356 = cljs.core.first.call(null,s__23350__$2);
var catalog_id = cljs.core.nth.call(null,vec__23356,(0),null);
var catalog = cljs.core.nth.call(null,vec__23356,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),catalog_id,new cljs.core.Keyword(null,"value","value",305978217),catalog_id], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(catalog)], null),uxbox$workspace$views$figures_$_iter__23349.call(null,cljs.core.rest.call(null,s__23350__$2)));
}
} else {
return null;
}
break;
}
});})(map__23348,map__23348__$1,workspace))
,null,null));
});})(map__23348,map__23348__$1,workspace))
;
return iter__18891__auto__.call(null,cljs.core.seq.call(null,uxbox.workspace.figures.catalogs.catalogs));
})()], null)], null),(function (){var iter__18891__auto__ = ((function (map__23348,map__23348__$1,workspace){
return (function uxbox$workspace$views$figures_$_iter__23357(s__23358){
return (new cljs.core.LazySeq(null,((function (map__23348,map__23348__$1,workspace){
return (function (){
var s__23358__$1 = s__23358;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23358__$1);
if(temp__4425__auto__){
var s__23358__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23358__$2)){
var c__18889__auto__ = cljs.core.chunk_first.call(null,s__23358__$2);
var size__18890__auto__ = cljs.core.count.call(null,c__18889__auto__);
var b__23360 = cljs.core.chunk_buffer.call(null,size__18890__auto__);
if((function (){var i__23359 = (0);
while(true){
if((i__23359 < size__18890__auto__)){
var vec__23363 = cljs.core._nth.call(null,c__18889__auto__,i__23359);
var figure_id = cljs.core.nth.call(null,vec__23363,(0),null);
var figure = cljs.core.nth.call(null,vec__23363,(1),null);
cljs.core.chunk_append.call(null,b__23360,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.figure-btn","div.figure-btn",1724155859),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),figure_id,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"current-catalog","current-catalog",1993111576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)),figure_id], null)))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__23359,vec__23363,figure_id,figure,c__18889__auto__,size__18890__auto__,b__23360,s__23358__$2,temp__4425__auto__,map__23348,map__23348__$1,workspace){
return (function (){
return uxbox.workspace.actions.set_tool.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"current-catalog","current-catalog",1993111576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)),figure_id], null));
});})(i__23359,vec__23363,figure_id,figure,c__18889__auto__,size__18890__auto__,b__23360,s__23358__$2,temp__4425__auto__,map__23348,map__23348__$1,workspace))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"svg","svg",856789142).cljs$core$IFn$_invoke$arity$1(figure)], null)], null));

var G__23366 = (i__23359 + (1));
i__23359 = G__23366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23360),uxbox$workspace$views$figures_$_iter__23357.call(null,cljs.core.chunk_rest.call(null,s__23358__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23360),null);
}
} else {
var vec__23364 = cljs.core.first.call(null,s__23358__$2);
var figure_id = cljs.core.nth.call(null,vec__23364,(0),null);
var figure = cljs.core.nth.call(null,vec__23364,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.figure-btn","div.figure-btn",1724155859),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),figure_id,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"current-catalog","current-catalog",1993111576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)),figure_id], null)))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__23364,figure_id,figure,s__23358__$2,temp__4425__auto__,map__23348,map__23348__$1,workspace){
return (function (){
return uxbox.workspace.actions.set_tool.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"current-catalog","current-catalog",1993111576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)),figure_id], null));
});})(vec__23364,figure_id,figure,s__23358__$2,temp__4425__auto__,map__23348,map__23348__$1,workspace))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"svg","svg",856789142).cljs$core$IFn$_invoke$arity$1(figure)], null)], null),uxbox$workspace$views$figures_$_iter__23357.call(null,cljs.core.rest.call(null,s__23358__$2)));
}
} else {
return null;
}
break;
}
});})(map__23348,map__23348__$1,workspace))
,null,null));
});})(map__23348,map__23348__$1,workspace))
;
return iter__18891__auto__.call(null,cljs.core.seq.call(null,cljs.core.get_in.call(null,uxbox.workspace.figures.catalogs.catalogs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-catalog","current-catalog",1993111576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)),new cljs.core.Keyword(null,"symbols","symbols",1211743)], null))));
})()], null)], null);
});
uxbox.workspace.views.components = (function uxbox$workspace$views$components(db){
var map__23368 = cljs.core.deref.call(null,db);
var map__23368__$1 = ((cljs.core.seq_QMARK_.call(null,map__23368))?cljs.core.apply.call(null,cljs.core.hash_map,map__23368):map__23368);
var workspace = cljs.core.get.call(null,map__23368__$1,new cljs.core.Keyword(null,"workspace","workspace",-1096735709));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#form-components.tool-window","div#form-components.tool-window",-729881360),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-window-bar","div.tool-window-bar",-30347521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-window-icon","div.tool-window-icon",-1893125463),uxbox.icons.window], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Components"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-window-close","div.tool-window-close",-43571478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23368,map__23368__$1,workspace){
return (function (){
return uxbox.workspace.actions.close_setting_box.call(null,new cljs.core.Keyword(null,"components","components",-1073188942));
});})(map__23368,map__23368__$1,workspace))
], null),uxbox.icons.close], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-window-content","div.tool-window-content",1588749437),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-btn","div.tool-btn",38393646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.Keyword(null,"rect","rect",-108902628)))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23368,map__23368__$1,workspace){
return (function (){
return uxbox.workspace.actions.set_tool.call(null,new cljs.core.Keyword(null,"rect","rect",-108902628));
});})(map__23368,map__23368__$1,workspace))
], null),uxbox.icons.box], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-btn","div.tool-btn",38393646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.Keyword(null,"circle","circle",1903212362)))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23368,map__23368__$1,workspace){
return (function (){
return uxbox.workspace.actions.set_tool.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362));
});})(map__23368,map__23368__$1,workspace))
], null),uxbox.icons.circle], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-btn","div.tool-btn",38393646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.Keyword(null,"line","line",212345235)))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23368,map__23368__$1,workspace){
return (function (){
return uxbox.workspace.actions.set_tool.call(null,new cljs.core.Keyword(null,"line","line",212345235));
});})(map__23368,map__23368__$1,workspace))
], null),uxbox.icons.line], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-btn","div.tool-btn",38393646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.Keyword(null,"curve","curve",-569677866)))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23368,map__23368__$1,workspace){
return (function (){
return uxbox.workspace.actions.set_tool.call(null,new cljs.core.Keyword(null,"curve","curve",-569677866));
});})(map__23368,map__23368__$1,workspace))
], null),uxbox.icons.curve], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-btn","div.tool-btn",38393646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.Keyword(null,"text","text",-1790561697)))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23368,map__23368__$1,workspace){
return (function (){
return uxbox.workspace.actions.set_tool.call(null,new cljs.core.Keyword(null,"text","text",-1790561697));
});})(map__23368,map__23368__$1,workspace))
], null),uxbox.icons.text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-btn","div.tool-btn",38393646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.Keyword(null,"arrow","arrow",1071351425)))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23368,map__23368__$1,workspace){
return (function (){
return uxbox.workspace.actions.set_tool.call(null,new cljs.core.Keyword(null,"arrow","arrow",1071351425));
});})(map__23368,map__23368__$1,workspace))
], null),uxbox.icons.arrow], null)], null)], null);
});
uxbox.workspace.views.elementoptions = (function uxbox$workspace$views$elementoptions(db){
var show_element = reagent.core.atom.call(null,new cljs.core.Keyword(null,"options","options",99638489));
return ((function (show_element){
return (function (){
var selected_uuid = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"selected","selected",574897764)], null));
var project_uuid = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null));
var page_uuid = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null));
var selected_shape = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"shapes","shapes",1897594879),selected_uuid], null));
var vec__23389 = uxbox.shapes.core.toolbar_coords.call(null,selected_shape);
var popup_x = cljs.core.nth.call(null,vec__23389,(0),null);
var popup_y = cljs.core.nth.call(null,vec__23389,(1),null);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#element-options.element-options","div#element-options.element-options",-111683943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),{"left": popup_x, "top": popup_y}], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.element-icons","ul.element-icons",1816274423),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li#e-info","li#e-info",195289340),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (e){
return cljs.core.reset_BANG_.call(null,show_element,new cljs.core.Keyword(null,"options","options",99638489));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,show_element),new cljs.core.Keyword(null,"options","options",99638489)))?"selected":null)], null),uxbox.icons.infocard], null),(cljs.core.truth_((function (){var or__18137__auto__ = (function (){var and__18125__auto__ = new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(selected_shape);
if(cljs.core.truth_(and__18125__auto__)){
return new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(selected_shape);
} else {
return and__18125__auto__;
}
})();
if(cljs.core.truth_(or__18137__auto__)){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (function (){var and__18125__auto__ = new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(selected_shape);
if(cljs.core.truth_(and__18125__auto__)){
return new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(selected_shape);
} else {
return and__18125__auto__;
}
})();
if(cljs.core.truth_(or__18137__auto____$1)){
return or__18137__auto____$1;
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(selected_shape);
}
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li#e-fill","li#e-fill",1985828474),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (e){
return cljs.core.reset_BANG_.call(null,show_element,new cljs.core.Keyword(null,"fill","fill",883462889));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,show_element),new cljs.core.Keyword(null,"fill","fill",883462889)))?"selected":null)], null),uxbox.icons.fill], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li#e-stroke","li#e-stroke",28236093),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (e){
return cljs.core.reset_BANG_.call(null,show_element,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,show_element),new cljs.core.Keyword(null,"stroke","stroke",1741823555)))?"selected":null)], null),uxbox.icons.stroke], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li#e-text","li#e-text",1723922515),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (e){
return cljs.core.reset_BANG_.call(null,show_element,new cljs.core.Keyword(null,"text","text",-1790561697));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,show_element),new cljs.core.Keyword(null,"text","text",-1790561697)))?"selected":null)], null),uxbox.icons.text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li#e-actions","li#e-actions",-309844793),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (e){
return cljs.core.reset_BANG_.call(null,show_element,new cljs.core.Keyword(null,"actions","actions",-812656882));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,show_element),new cljs.core.Keyword(null,"actions","actions",-812656882)))?"selected":null)], null),uxbox.icons.action], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#element-basics.element-set","div#element-basics.element-set",871537793),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,show_element),new cljs.core.Keyword(null,"options","options",99638489))))?"hide":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.element-set-title","div.element-set-title",-2100528045),"Size and position"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.element-set-content","div.element-set-content",269196514),(cljs.core.truth_((function (){var and__18125__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selected_shape);
if(cljs.core.truth_(and__18125__auto__)){
return new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selected_shape);
} else {
return and__18125__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Size"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-flex","div.row-flex",1748465221),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#width.input-text","input#width.input-text",1694097564),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Width",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23369_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"width","width",-384071477),(p1__23369_SHARP_.target.value | (0)));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lock-size","div.lock-size",-39054316),uxbox.icons.lock], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#height.input-text","input#height.input-text",1931525932),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Height",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23370_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"height","height",1025178622),(p1__23370_SHARP_.target.value | (0)));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null)], null)], null):null),(cljs.core.truth_((function (){var and__18125__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(selected_shape);
if(cljs.core.truth_(and__18125__auto__)){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(selected_shape);
} else {
return and__18125__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Position"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-flex","div.row-flex",1748465221),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#x.input-text","input#x.input-text",-1572690642),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"X",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23371_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"x","x",2099068185),(p1__23371_SHARP_.target.value | (0)));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#y.input-text","input#y.input-text",-964180303),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Y",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23372_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"y","y",-1757859776),(p1__23372_SHARP_.target.value | (0)));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null)], null)], null):null),(cljs.core.truth_((function (){var and__18125__auto__ = new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(selected_shape);
if(cljs.core.truth_(and__18125__auto__)){
return new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(selected_shape);
} else {
return and__18125__auto__;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Position"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-flex","div.row-flex",1748465221),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#x.input-text","input#x.input-text",-1572690642),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"X",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23373_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"cx","cx",1272694324),(p1__23373_SHARP_.target.value | (0)));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#y.input-text","input#y.input-text",-964180303),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Y",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23374_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"cy","cy",755331060),(p1__23374_SHARP_.target.value | (0)));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Width"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#r.input-text","input#r.input-text",1789641567),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Width",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23375_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"r","r",-471384190),(p1__23375_SHARP_.target.value | (0)));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null)], null):null),(cljs.core.truth_((function (){var and__18125__auto__ = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(selected_shape);
if(cljs.core.truth_(and__18125__auto__)){
var and__18125__auto____$1 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(selected_shape);
if(cljs.core.truth_(and__18125__auto____$1)){
var and__18125__auto____$2 = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(selected_shape);
if(cljs.core.truth_(and__18125__auto____$2)){
return new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(selected_shape);
} else {
return and__18125__auto____$2;
}
} else {
return and__18125__auto____$1;
}
} else {
return and__18125__auto__;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Initial position"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-flex","div.row-flex",1748465221),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#x1.input-text","input#x1.input-text",1316103670),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Initial X",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23376_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"x1","x1",-1863922247),(p1__23376_SHARP_.target.value | (0)));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#y1.input-text","input#y1.input-text",-796222914),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Initial Y",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23377_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"y1","y1",589123466),(p1__23377_SHARP_.target.value | (0)));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"End position"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-flex","div.row-flex",1748465221),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#x2.input-text","input#x2.input-text",137530000),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"End X",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23378_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"x2","x2",-1362513475),(p1__23378_SHARP_.target.value | (0)));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#y2.input-text","input#y2.input-text",-1391476369),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"End Y",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23379_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"y2","y2",-718691301),(p1__23379_SHARP_.target.value | (0)));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null)], null)], null):null)], null)], null),(cljs.core.truth_((function (){var or__18137__auto__ = (function (){var and__18125__auto__ = new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(selected_shape);
if(cljs.core.truth_(and__18125__auto__)){
return new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(selected_shape);
} else {
return and__18125__auto__;
}
})();
if(cljs.core.truth_(or__18137__auto__)){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (function (){var and__18125__auto__ = new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(selected_shape);
if(cljs.core.truth_(and__18125__auto__)){
return new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(selected_shape);
} else {
return and__18125__auto__;
}
})();
if(cljs.core.truth_(or__18137__auto____$1)){
return or__18137__auto____$1;
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(selected_shape);
}
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#fill.element-set","div#fill.element-set",1978455269),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,show_element),new cljs.core.Keyword(null,"fill","fill",883462889))))?"hide":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.element-set-title","div.element-set-title",-2100528045),"Fill color"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.element-set-content","div.element-set-content",269196514),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Choose a color"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#fill.input-text","input#fill.input-text",716275832),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Color",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23380_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"fill","fill",883462889),p1__23380_SHARP_.target.value);
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Opacity"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#element-opacity.input-text","input#element-opacity.input-text",-1352753378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"%",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23381_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),p1__23381_SHARP_.target.value);
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null)], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#element-stroke.element-set","div#element-stroke.element-set",1187011001),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,show_element),new cljs.core.Keyword(null,"stroke","stroke",1741823555))))?"hide":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.element-set-title","div.element-set-title",-2100528045),"Stroke"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.element-set-content","div.element-set-content",269196514),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-flex","div.row-flex",1748465221),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.half","span.half",-183320535),"Color"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.half","span.half",-183320535),"Opacity"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-flex","div.row-flex",1748465221),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#stroke.input-text","input#stroke.input-text",1511449128),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Color",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"stroke","stroke",1741823555).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23382_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"stroke","stroke",1741823555),p1__23382_SHARP_.target.value);
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#stroke-opacity.input-text","input#stroke-opacity.input-text",-1995423950),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Opacity",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23383_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),p1__23383_SHARP_.target.value);
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-flex","div.row-flex",1748465221),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.half","span.half",-183320535),"Width"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-flex","div.row-flex",1748465221),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#stroke-width.input-text","input#stroke-width.input-text",932838043),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Width",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23384_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(p1__23384_SHARP_.target.value | (0)));
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null)], null),(cljs.core.truth_((function (){var and__18125__auto__ = new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(selected_shape);
if(cljs.core.truth_(and__18125__auto__)){
return new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(selected_shape);
} else {
return and__18125__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Radius"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-flex","div.row-flex",1748465221),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#rx.input-text","input#rx.input-text",1798943985),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"rx",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23385_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"rx","rx",1627208482),p1__23385_SHARP_.target.value);
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#ry.input-text","input#ry.input-text",1018702033),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"ry",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23386_SHARP_){
return uxbox.workspace.actions.change_shape_attr.call(null,project_uuid,page_uuid,selected_uuid,new cljs.core.Keyword(null,"ry","ry",-334598563),p1__23386_SHARP_.target.value);
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null)], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#element-text.element-set","div#element-text.element-set",1528744843),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,show_element),new cljs.core.Keyword(null,"text","text",-1790561697))))?"hide":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.element-set-title","div.element-set-title",-2100528045),"Text"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.element-set-content","div.element-set-content",269196514)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#element-actions.element-set","div#element-actions.element-set",-354835226),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,show_element),new cljs.core.Keyword(null,"actions","actions",-812656882))))?"hide":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.element-set-title","div.element-set-title",-2100528045),"Actions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.element-set-content","div.element-set-content",269196514),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.half","span.half",-183320535),"Rotation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#stroke.input-text","input#stroke.input-text",1511449128),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Degrees",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rotate","rotate",152705015).cljs$core$IFn$_invoke$arity$1(selected_shape),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element){
return (function (p1__23387_SHARP_){
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"shapes","shapes",1897594879),selected_uuid,new cljs.core.Keyword(null,"rotate","rotate",152705015)], null),p1__23387_SHARP_.target.value);
});})(selected_uuid,project_uuid,page_uuid,selected_shape,vec__23389,popup_x,popup_y,show_element))
], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.element-set-content","div.element-set-content",269196514)], null)], null)], null);
});
;})(show_element))
});
uxbox.workspace.views.tools = (function uxbox$workspace$views$tools(db){
var map__23391 = cljs.core.deref.call(null,db);
var map__23391__$1 = ((cljs.core.seq_QMARK_.call(null,map__23391))?cljs.core.apply.call(null,cljs.core.hash_map,map__23391):map__23391);
var workspace = cljs.core.get.call(null,map__23391__$1,new cljs.core.Keyword(null,"workspace","workspace",-1096735709));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#form-tools.tool-window","div#form-tools.tool-window",-1921228578),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-window-bar","div.tool-window-bar",-30347521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-window-icon","div.tool-window-icon",-1893125463),uxbox.icons.window], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Tools"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-window-close","div.tool-window-close",-43571478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23391,map__23391__$1,workspace){
return (function (){
return uxbox.workspace.actions.close_setting_box.call(null,new cljs.core.Keyword(null,"tools","tools",-1241731990));
});})(map__23391,map__23391__$1,workspace))
], null),uxbox.icons.close], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-window-content","div.tool-window-content",1588749437),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-btn.tooltip.tooltip-hover","div.tool-btn.tooltip.tooltip-hover",1787222451),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Box (Ctrl + B)",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.Keyword(null,"rect","rect",-108902628)))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23391,map__23391__$1,workspace){
return (function (){
return uxbox.workspace.actions.set_tool.call(null,new cljs.core.Keyword(null,"rect","rect",-108902628));
});})(map__23391,map__23391__$1,workspace))
], null),uxbox.icons.box], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-btn.tooltip.tooltip-hover","div.tool-btn.tooltip.tooltip-hover",1787222451),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Circle (Ctrl + E)",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.Keyword(null,"circle","circle",1903212362)))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23391,map__23391__$1,workspace){
return (function (){
return uxbox.workspace.actions.set_tool.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362));
});})(map__23391,map__23391__$1,workspace))
], null),uxbox.icons.circle], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-btn.tooltip.tooltip-hover","div.tool-btn.tooltip.tooltip-hover",1787222451),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Line (Ctrl + L)",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.Keyword(null,"line","line",212345235)))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23391,map__23391__$1,workspace){
return (function (){
return uxbox.workspace.actions.set_tool.call(null,new cljs.core.Keyword(null,"line","line",212345235));
});})(map__23391,map__23391__$1,workspace))
], null),uxbox.icons.line], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-btn.tooltip.tooltip-hover","div.tool-btn.tooltip.tooltip-hover",1787222451),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Bezier (Ctrl + U)",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.Keyword(null,"curve","curve",-569677866)))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23391,map__23391__$1,workspace){
return (function (){
return uxbox.workspace.actions.set_tool.call(null,new cljs.core.Keyword(null,"curve","curve",-569677866));
});})(map__23391,map__23391__$1,workspace))
], null),uxbox.icons.curve], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-btn.tooltip.tooltip-hover","div.tool-btn.tooltip.tooltip-hover",1787222451),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Text (Ctrl + T)",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.Keyword(null,"text","text",-1790561697)))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23391,map__23391__$1,workspace){
return (function (){
return uxbox.workspace.actions.set_tool.call(null,new cljs.core.Keyword(null,"text","text",-1790561697));
});})(map__23391,map__23391__$1,workspace))
], null),uxbox.icons.text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-btn.tooltip.tooltip-hover","div.tool-btn.tooltip.tooltip-hover",1787222451),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Arrow (Ctrl + A)",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1(workspace),new cljs.core.Keyword(null,"arrow","arrow",1071351425)))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23391,map__23391__$1,workspace){
return (function (){
return uxbox.workspace.actions.set_tool.call(null,new cljs.core.Keyword(null,"arrow","arrow",1071351425));
});})(map__23391,map__23391__$1,workspace))
], null),uxbox.icons.arrow], null)], null)], null);
});
uxbox.workspace.views.layers = (function uxbox$workspace$views$layers(db){
var map__23396 = cljs.core.deref.call(null,db);
var map__23396__$1 = ((cljs.core.seq_QMARK_.call(null,map__23396))?cljs.core.apply.call(null,cljs.core.hash_map,map__23396):map__23396);
var page = cljs.core.get.call(null,map__23396__$1,new cljs.core.Keyword(null,"page","page",849072397));
var workspace = cljs.core.get.call(null,map__23396__$1,new cljs.core.Keyword(null,"workspace","workspace",-1096735709));
var map__23397 = page;
var map__23397__$1 = ((cljs.core.seq_QMARK_.call(null,map__23397))?cljs.core.apply.call(null,cljs.core.hash_map,map__23397):map__23397);
var groups = cljs.core.get.call(null,map__23397__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var group = ((function (map__23396,map__23396__$1,page,workspace,map__23397,map__23397__$1,groups){
return (function (p__23398,item){
var vec__23399 = p__23398;
var group_id = cljs.core.nth.call(null,vec__23399,(0),null);
var group = cljs.core.nth.call(null,vec__23399,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),group_id,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"selected-groups","selected-groups",300146646).cljs$core$IFn$_invoke$arity$1(workspace),group_id))?"selected":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggle-element","div.toggle-element",-1746523377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(group))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__23399,group_id,group,map__23396,map__23396__$1,page,workspace,map__23397,map__23397__$1,groups){
return (function (){
return uxbox.workspace.actions.toggle_group_visibility.call(null,group_id);
});})(vec__23399,group_id,group,map__23396,map__23396__$1,page,workspace,map__23397,map__23397__$1,groups))
], null),uxbox.icons.eye], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-element","div.block-element",725539279),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"locked","locked",-1658763820).cljs$core$IFn$_invoke$arity$1(group))?"selected":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__23399,group_id,group,map__23396,map__23396__$1,page,workspace,map__23397,map__23397__$1,groups){
return (function (){
return uxbox.workspace.actions.toggle_group_lock.call(null,group_id);
});})(vec__23399,group_id,group,map__23396,map__23396__$1,page,workspace,map__23397,map__23397__$1,groups))
], null),uxbox.icons.lock], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.element-icon","div.element-icon",1262562868),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(group),new cljs.core.Keyword(null,"square","square",812434677)))?uxbox.icons.box:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(group),new cljs.core.Keyword(null,"circle","circle",1903212362)))?uxbox.icons.circle:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(group),new cljs.core.Keyword(null,"line","line",212345235)))?uxbox.icons.line:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(group),new cljs.core.Keyword(null,"text","text",-1790561697)))?uxbox.icons.text:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(group),new cljs.core.Keyword(null,"arrow","arrow",1071351425)))?uxbox.icons.arrow:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(group),new cljs.core.Keyword(null,"curve","curve",-569677866)))?uxbox.icons.curve:null))))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__23399,group_id,group,map__23396,map__23396__$1,page,workspace,map__23397,map__23397__$1,groups){
return (function (){
return uxbox.workspace.actions.toggle_select_group.call(null,group_id);
});})(vec__23399,group_id,group,map__23396,map__23396__$1,page,workspace,map__23397,map__23397__$1,groups))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(group)], null)], null);
});})(map__23396,map__23396__$1,page,workspace,map__23397,map__23397__$1,groups))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#layers.tool-window","div#layers.tool-window",-1435717686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-window-bar","div.tool-window-bar",-30347521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-window-icon","div.tool-window-icon",-1893125463),uxbox.icons.layers], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Elements"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-window-close","div.tool-window-close",-43571478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23396,map__23396__$1,page,workspace,map__23397,map__23397__$1,groups,group){
return (function (){
return uxbox.workspace.actions.close_setting_box.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032));
});})(map__23396,map__23396__$1,page,workspace,map__23397,map__23397__$1,groups,group))
], null),uxbox.icons.close], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-window-content","div.tool-window-content",1588749437),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.element-list","ul.element-list",-834538632),cljs.core.map.call(null,group,cljs.core.seq.call(null,groups))], null)], null)], null);
});
uxbox.workspace.views.toolbar = (function uxbox$workspace$views$toolbar(db){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#tool-bar.tool-bar","div#tool-bar.tool-bar",-2131034295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tool-bar-inside","div.tool-bar-inside",1321490082),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.main-tools","ul.main-tools",-1638965861),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tooltip","li.tooltip",-1420587330),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Shapes (Ctrl + Shift + F)",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"open-setting-boxes","open-setting-boxes",-193961941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))))?"current":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return uxbox.workspace.actions.open_setting_box.call(null,new cljs.core.Keyword(null,"tools","tools",-1241731990));
})], null),uxbox.icons.shapes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tooltip","li.tooltip",-1420587330),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Components (Ctrl + Shift + C)",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"open-setting-boxes","open-setting-boxes",-193961941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))))?"current":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return uxbox.workspace.actions.open_setting_box.call(null,new cljs.core.Keyword(null,"components","components",-1073188942));
})], null),uxbox.icons.puzzle], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tooltip","li.tooltip",-1420587330),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Icons (Ctrl + Shift + I)",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"figures","figures",1618093438).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"open-setting-boxes","open-setting-boxes",-193961941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))))?"current":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return uxbox.workspace.actions.open_setting_box.call(null,new cljs.core.Keyword(null,"figures","figures",1618093438));
})], null),uxbox.icons.icon_set], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tooltip","li.tooltip",-1420587330),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Elements (Ctrl + Shift + L)",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"open-setting-boxes","open-setting-boxes",-193961941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))))?"current":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return uxbox.workspace.actions.open_setting_box.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032));
})], null),uxbox.icons.layers], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tooltip","li.tooltip",-1420587330),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Feedback (Ctrl + Shift + M)"], null),uxbox.icons.chat], null)], null)], null)], null);
});
uxbox.workspace.views.project_page = (function uxbox$workspace$views$project_page(db,page){
var current_page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
var current_project = new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
var editing_pages = new cljs.core.Keyword(null,"editing-pages","editing-pages",-873041858).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
var page_uuid = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.contains_QMARK_.call(null,editing_pages,page_uuid)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-text","input.input-text",-713386989),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"title","title",636505583),"page-title",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Page title",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,editing_pages,page_uuid),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (current_page,current_project,editing_pages,page_uuid){
return (function (p1__23400_SHARP_){
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-pages","editing-pages",-873041858),page_uuid], null),p1__23400_SHARP_.target.value);
});})(current_page,current_project,editing_pages,page_uuid))
,new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),((function (current_page,current_project,editing_pages,page_uuid){
return (function (p1__23401_SHARP_){
if(cljs.core._EQ_.call(null,p1__23401_SHARP_.keyCode,(13))){
if(!(cljs.core.empty_QMARK_.call(null,cuerdas.core.trim.call(null,cljs.core.get.call(null,editing_pages,page_uuid))))){
uxbox.projects.actions.change_page_title.call(null,current_project,page,cljs.core.get.call(null,editing_pages,page_uuid));

return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"editing-pages","editing-pages",-873041858),cljs.core.dissoc,page_uuid);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,p1__23401_SHARP_.keyCode,(27))){
return cljs.core.swap_BANG_.call(null,db,cljs.core.update,new cljs.core.Keyword(null,"editing-pages","editing-pages",-873041858),cljs.core.dissoc,page_uuid);
} else {
return null;
}
}
});})(current_page,current_project,editing_pages,page_uuid))
,new cljs.core.Keyword(null,"key","key",-1516042587),page_uuid], null)], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.single-page","li.single-page",1334493003),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,page_uuid,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(current_page)))?"current":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_page,current_project,editing_pages,page_uuid){
return (function (){
if(cljs.core.not_EQ_.call(null,page_uuid,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(current_page))){
return uxbox.workspace.actions.view_page.call(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(current_project),page_uuid);
} else {
return null;
}
});})(current_page,current_project,editing_pages,page_uuid))
,new cljs.core.Keyword(null,"key","key",-1516042587),page_uuid], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tree-icon","div.tree-icon",1386774945),uxbox.icons.page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(page)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.options","div.options",-1118306305),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_page,current_project,editing_pages,page_uuid){
return (function (p1__23402_SHARP_){
p1__23402_SHARP_.stopPropagation();

return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-pages","editing-pages",-873041858),page_uuid], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(page));
});})(current_page,current_project,editing_pages,page_uuid))
], null),uxbox.icons.pencil], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_page,current_project,editing_pages,page_uuid){
return (function (p1__23403_SHARP_){
p1__23403_SHARP_.stopPropagation();

return uxbox.projects.actions.delete_page.call(null,current_project,page);
});})(current_page,current_project,editing_pages,page_uuid))
], null),uxbox.icons.trash], null)], null)], null);
}
});
uxbox.workspace.views.clean_new_page_BANG_ = (function uxbox$workspace$views$clean_new_page_BANG_(db){
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"adding-new-page","adding-new-page",-1350890688),false,new cljs.core.Keyword(null,"new-page-title","new-page-title",1449518869),"");
});
uxbox.workspace.views.new_page = (function uxbox$workspace$views$new_page(db,project){
if(cljs.core.truth_(new cljs.core.Keyword(null,"adding-new-page","adding-new-page",-1350890688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-text","input.input-text",-713386989),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"page-title",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Page title",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"new-page-title","new-page-title",1449518869).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23404_SHARP_){
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"new-page-title","new-page-title",1449518869),p1__23404_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (p1__23405_SHARP_){
if(cljs.core._EQ_.call(null,p1__23405_SHARP_.keyCode,(13))){
if(!(cljs.core.empty_QMARK_.call(null,cuerdas.core.trim.call(null,new cljs.core.Keyword(null,"new-page-title","new-page-title",1449518869).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)))))){
uxbox.projects.actions.create_page.call(null,project,new cljs.core.Keyword(null,"new-page-title","new-page-title",1449518869).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));

return uxbox.workspace.views.clean_new_page_BANG_.call(null,db);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,p1__23405_SHARP_.keyCode,(27))){
return uxbox.workspace.views.clean_new_page_BANG_.call(null,db);
} else {
return null;
}
}
})], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary.btn-small","button.btn-primary.btn-small",-111328115),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"adding-new-page","adding-new-page",-1350890688),true);
})], null),"+ Add new page"], null);
}
});
uxbox.workspace.views.projectbar = (function uxbox$workspace$views$projectbar(db){
var project = new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
var project_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project);
var pages = new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(project);
var page_components = cljs.core.map.call(null,((function (project,project_name,pages){
return (function (p){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.views.project_page,db,p], null);
});})(project,project_name,pages))
,cljs.core.vals.call(null,pages));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#project-bar.project-bar","div#project-bar.project-bar",586480840),((cljs.core.not.call(null,new cljs.core.Keyword(null,"visible-project-bar","visible-project-bar",1336182203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.project-bar-inside","div.project-bar-inside",537715866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.project-name","span.project-name",-725318252),project_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.tree-view","ul.tree-view",1798884508),page_components], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.views.new_page,db,project], null)], null)], null);
});
uxbox.workspace.views.settings = (function uxbox$workspace$views$settings(db){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside#settings-bar.settings-bar","aside#settings-bar.settings-bar",-902608568),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-bar-inside","div.settings-bar-inside",-807565892),(cljs.core.truth_(new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"open-setting-boxes","open-setting-boxes",-193961941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.views.tools,db], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"figures","figures",1618093438).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"open-setting-boxes","open-setting-boxes",-193961941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.views.figures,db], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"open-setting-boxes","open-setting-boxes",-193961941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.views.components,db], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"open-setting-boxes","open-setting-boxes",-193961941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.views.layers,db], null):null)], null)], null);
});
uxbox.workspace.views.workspace = (function uxbox$workspace$views$workspace(db){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.views.header,db], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.main-content","main.main-content",-770458257),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.workspace-content","section.workspace-content",488383732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.views.toolbar,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.views.projectbar,db], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.workspace-canvas","section.workspace-canvas",-1655718222),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"open-setting-boxes","open-setting-boxes",-193961941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))))?"no-tool-bar":"")], null),(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"selected","selected",574897764)], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.views.elementoptions,db], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.canvas.views.canvas,db], null)], null)], null),((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"open-setting-boxes","open-setting-boxes",-193961941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.views.settings,db], null):null)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1437054952710