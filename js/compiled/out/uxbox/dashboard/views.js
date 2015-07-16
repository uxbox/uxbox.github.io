// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.dashboard.views');
goog.require('cljs.core');
goog.require('uxbox.dashboard.actions');
goog.require('uxbox.projects.actions');
goog.require('uxbox.dashboard.icons');
goog.require('uxbox.icons');
goog.require('uxbox.user.views');
goog.require('uxbox.navigation');
goog.require('uxbox.time');
uxbox.dashboard.views.header = (function uxbox$dashboard$views$header(db){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header#main-bar.main-bar","header#main-bar.main-bar",-624367201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-logo","div.main-logo",1392678399),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.navigation.link,"/",uxbox.icons.logo], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.user.views.user,db], null)], null);
});
uxbox.dashboard.views.activity_item = (function uxbox$dashboard$views$activity_item(item){
var map__21333 = item;
var map__21333__$1 = ((cljs.core.seq_QMARK_.call(null,map__21333))?cljs.core.apply.call(null,cljs.core.hash_map,map__21333):map__21333);
var project = cljs.core.get.call(null,map__21333__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var author = cljs.core.get.call(null,map__21333__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var event = cljs.core.get.call(null,map__21333__$1,new cljs.core.Keyword(null,"event","event",301435442));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.activity-input","div.activity-input",-2103995754),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(project)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.activity-author","img.activity-author",-765058816),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"0",new cljs.core.Keyword(null,"src","src",-1651076051),"../../images/avatar.jpg"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.activity-content","div.activity-content",1941335061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.activity-project","div.activity-project",1328674683),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__21333,map__21333__$1,project,author,event){
return (function (){
return uxbox.navigation.navigate_BANG_.call(null,uxbox.navigation.workspace_route.call(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"first-page-uuid","first-page-uuid",441077934).cljs$core$IFn$_invoke$arity$1(project)));
});})(map__21333,map__21333__$1,project,author,event))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"in"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__21333,map__21333__$1,project,author,event){
return (function (){
return uxbox.navigation.navigate_BANG_.call(null,uxbox.navigation.workspace_route.call(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"first-page-uuid","first-page-uuid",441077934).cljs$core$IFn$_invoke$arity$1(project)));
});})(map__21333,map__21333__$1,project,author,event))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.activity-time","span.activity-time",-951459935),uxbox.time.ago.call(null,new cljs.core.Keyword(null,"datetime","datetime",494675702).cljs$core$IFn$_invoke$arity$1(item))], null)], null)], null);
});
uxbox.dashboard.views.activity = (function uxbox$dashboard$views$activity(db){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside#activity-bar.activity-bar","aside#activity-bar.activity-bar",-1043737895),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.activity-bar-inside","div.activity-bar-inside",91153575),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"ACTIVITY"], null),(function (){var iter__18891__auto__ = (function uxbox$dashboard$views$activity_$_iter__21343(s__21344){
return (new cljs.core.LazySeq(null,(function (){
var s__21344__$1 = s__21344;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21344__$1);
if(temp__4425__auto__){
var s__21344__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21344__$2)){
var c__18889__auto__ = cljs.core.chunk_first.call(null,s__21344__$2);
var size__18890__auto__ = cljs.core.count.call(null,c__18889__auto__);
var b__21346 = cljs.core.chunk_buffer.call(null,size__18890__auto__);
if((function (){var i__21345 = (0);
while(true){
if((i__21345 < size__18890__auto__)){
var vec__21349 = cljs.core._nth.call(null,c__18889__auto__,i__21345);
var day = cljs.core.nth.call(null,vec__21349,(0),null);
var items = cljs.core.nth.call(null,vec__21349,(1),null);
cljs.core.chunk_append.call(null,b__21346,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date-ribbon","span.date-ribbon",-1039572977),(new moment(day)).calendar()], null)], null),cljs.core.map.call(null,uxbox.dashboard.views.activity_item,items)));

var G__21351 = (i__21345 + (1));
i__21345 = G__21351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21346),uxbox$dashboard$views$activity_$_iter__21343.call(null,cljs.core.chunk_rest.call(null,s__21344__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21346),null);
}
} else {
var vec__21350 = cljs.core.first.call(null,s__21344__$2);
var day = cljs.core.nth.call(null,vec__21350,(0),null);
var items = cljs.core.nth.call(null,vec__21350,(1),null);
return cljs.core.cons.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date-ribbon","span.date-ribbon",-1039572977),(new moment(day)).calendar()], null)], null),cljs.core.map.call(null,uxbox.dashboard.views.activity_item,items)),uxbox$dashboard$views$activity_$_iter__21343.call(null,cljs.core.rest.call(null,s__21344__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18891__auto__.call(null,cljs.core.seq.call(null,cljs.core.group_by.call(null,((function (iter__18891__auto__){
return (function (p1__21334_SHARP_){
return new cljs.core.Keyword(null,"datetime","datetime",494675702).cljs$core$IFn$_invoke$arity$1(p1__21334_SHARP_).toDateString();
});})(iter__18891__auto__))
,new cljs.core.Keyword(null,"activity","activity",-1179221455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)))));
})()], null)], null);
});
uxbox.dashboard.views.mysvg = (function uxbox$dashboard$views$mysvg(db,icon_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("/assets/images/"),cljs.core.str(icon_name),cljs.core.str(".svg")].join('')], null)], null);
});
uxbox.dashboard.views.canvas = (function uxbox$dashboard$views$canvas(db){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.canvas.viewport","section.canvas.viewport",-85453593),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.dashboard.views.mysvg,db,"trash"], null)], null);
});
uxbox.dashboard.views.dashboard_info = (function uxbox$dashboard$views$dashboard_info(db){
var projects = cljs.core.vals.call(null,new cljs.core.Keyword(null,"projects-list","projects-list",-1153022324).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
var sort_order = new cljs.core.Keyword(null,"project-sort-order","project-sort-order",478037672).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
var orderings = new cljs.core.Keyword(null,"project-orderings","project-orderings",1566803555).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
var name__GT_order = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18891__auto__ = ((function (projects,sort_order,orderings){
return (function uxbox$dashboard$views$dashboard_info_$_iter__21365(s__21366){
return (new cljs.core.LazySeq(null,((function (projects,sort_order,orderings){
return (function (){
var s__21366__$1 = s__21366;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21366__$1);
if(temp__4425__auto__){
var s__21366__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21366__$2)){
var c__18889__auto__ = cljs.core.chunk_first.call(null,s__21366__$2);
var size__18890__auto__ = cljs.core.count.call(null,c__18889__auto__);
var b__21368 = cljs.core.chunk_buffer.call(null,size__18890__auto__);
if((function (){var i__21367 = (0);
while(true){
if((i__21367 < size__18890__auto__)){
var vec__21371 = cljs.core._nth.call(null,c__18889__auto__,i__21367);
var k = cljs.core.nth.call(null,vec__21371,(0),null);
var v = cljs.core.nth.call(null,vec__21371,(1),null);
cljs.core.chunk_append.call(null,b__21368,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null));

var G__21377 = (i__21367 + (1));
i__21367 = G__21377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21368),uxbox$dashboard$views$dashboard_info_$_iter__21365.call(null,cljs.core.chunk_rest.call(null,s__21366__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21368),null);
}
} else {
var vec__21372 = cljs.core.first.call(null,s__21366__$2);
var k = cljs.core.nth.call(null,vec__21372,(0),null);
var v = cljs.core.nth.call(null,vec__21372,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null),uxbox$dashboard$views$dashboard_info_$_iter__21365.call(null,cljs.core.rest.call(null,s__21366__$2)));
}
} else {
return null;
}
break;
}
});})(projects,sort_order,orderings))
,null,null));
});})(projects,sort_order,orderings))
;
return iter__18891__auto__.call(null,orderings);
})());
var sort_name = cljs.core.get.call(null,orderings,sort_order);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-info","div.dashboard-info",-2062968401),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dashboard-projects","span.dashboard-projects",-1468511734),cljs.core.count.call(null,projects)," projects"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Sort by"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.input-select","select.input-select",-1174985820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (projects,sort_order,orderings,name__GT_order,sort_name){
return (function (p1__21352_SHARP_){
return uxbox.dashboard.actions.set_projects_order.call(null,name__GT_order.call(null,p1__21352_SHARP_.target.value));
});})(projects,sort_order,orderings,name__GT_order,sort_name))
,new cljs.core.Keyword(null,"value","value",305978217),sort_name], null),(function (){var iter__18891__auto__ = ((function (projects,sort_order,orderings,name__GT_order,sort_name){
return (function uxbox$dashboard$views$dashboard_info_$_iter__21373(s__21374){
return (new cljs.core.LazySeq(null,((function (projects,sort_order,orderings,name__GT_order,sort_name){
return (function (){
var s__21374__$1 = s__21374;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21374__$1);
if(temp__4425__auto__){
var s__21374__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21374__$2)){
var c__18889__auto__ = cljs.core.chunk_first.call(null,s__21374__$2);
var size__18890__auto__ = cljs.core.count.call(null,c__18889__auto__);
var b__21376 = cljs.core.chunk_buffer.call(null,size__18890__auto__);
if((function (){var i__21375 = (0);
while(true){
if((i__21375 < size__18890__auto__)){
var order = cljs.core._nth.call(null,c__18889__auto__,i__21375);
var name = cljs.core.get.call(null,orderings,order);
cljs.core.chunk_append.call(null,b__21376,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),name], null));

var G__21378 = (i__21375 + (1));
i__21375 = G__21378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21376),uxbox$dashboard$views$dashboard_info_$_iter__21373.call(null,cljs.core.chunk_rest.call(null,s__21374__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21376),null);
}
} else {
var order = cljs.core.first.call(null,s__21374__$2);
var name = cljs.core.get.call(null,orderings,order);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),name], null),uxbox$dashboard$views$dashboard_info_$_iter__21373.call(null,cljs.core.rest.call(null,s__21374__$2)));
}
} else {
return null;
}
break;
}
});})(projects,sort_order,orderings,name__GT_order,sort_name))
,null,null));
});})(projects,sort_order,orderings,name__GT_order,sort_name))
;
return iter__18891__auto__.call(null,cljs.core.keys.call(null,orderings));
})()], null)], null);
});
uxbox.dashboard.views.dashboard_bar = (function uxbox$dashboard$views$dashboard_bar(db){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#dashboard-bar.dashboard-bar","section#dashboard-bar.dashboard-bar",352379012),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.dashboard.views.dashboard_info,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-search","div.dashboard-search",-1624208303),uxbox.dashboard.icons.search], null)], null);
});
uxbox.dashboard.views.new_project = (function uxbox$dashboard$views$new_project(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid-item.add-project","div.grid-item.add-project",-1846582125),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return uxbox.dashboard.actions.new_project.call(null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"+ New project"], null)], null);
});
uxbox.dashboard.views.project_card = (function uxbox$dashboard$views$project_card(project){
var map__21380 = project;
var map__21380__$1 = ((cljs.core.seq_QMARK_.call(null,map__21380))?cljs.core.apply.call(null,cljs.core.hash_map,map__21380):map__21380);
var uuid = cljs.core.get.call(null,map__21380__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var last_update = cljs.core.get.call(null,map__21380__$1,new cljs.core.Keyword(null,"last-update","last-update",-983435406));
var first_page_uuid = cljs.core.get.call(null,map__21380__$1,new cljs.core.Keyword(null,"first-page-uuid","first-page-uuid",441077934));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid-item.project-th","div.grid-item.project-th",1921330598),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uuid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__21380,map__21380__$1,uuid,last_update,first_page_uuid){
return (function (){
return uxbox.navigation.navigate_BANG_.call(null,uxbox.navigation.workspace_route.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project-uuid","project-uuid",726173820),uuid,new cljs.core.Keyword(null,"page-uuid","page-uuid",1152600915),first_page_uuid], null)));
});})(map__21380,map__21380__$1,uuid,last_update,first_page_uuid))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.project-th-update","span.project-th-update",-1433579052),"Updated ",uxbox.time.ago.call(null,last_update)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.project-th-actions","div.project-th-actions",-959928189),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.project-th-icon.pages","div.project-th-icon.pages",-491967017),uxbox.dashboard.icons.page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"pages-count","pages-count",1274269979).cljs$core$IFn$_invoke$arity$1(project)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.project-th-icon.comments","div.project-th-icon.comments",-1638048307),uxbox.icons.chat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"comment-count","comment-count",-850495956).cljs$core$IFn$_invoke$arity$1(project)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.project-th-icon.delete","div.project-th-icon.delete",-1937190997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__21380,map__21380__$1,uuid,last_update,first_page_uuid){
return (function (){
return uxbox.projects.actions.delete_project.call(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(project));
});})(map__21380,map__21380__$1,uuid,last_update,first_page_uuid))
], null),uxbox.dashboard.icons.trash], null)], null)], null);
});
uxbox.dashboard.views.dashboard_grid = (function uxbox$dashboard$views$dashboard_grid(db){
var projects = cljs.core.vals.call(null,new cljs.core.Keyword(null,"projects-list","projects-list",-1153022324).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
var projects__$1 = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"project-sort-order","project-sort-order",478037672).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)),projects);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.dashboard-grid","section.dashboard-grid",1037000148),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Your projects"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-grid-content","div.dashboard-grid-content",-2018064194),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.dashboard.views.new_project], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"project-sort-order","project-sort-order",478037672).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)),new cljs.core.Keyword(null,"name","name",1843675177)))?cljs.core.map.call(null,uxbox.dashboard.views.project_card,projects__$1):cljs.core.reverse.call(null,cljs.core.map.call(null,uxbox.dashboard.views.project_card,projects__$1)))], null)], null);
});
uxbox.dashboard.views.dashboard_content = (function uxbox$dashboard$views$dashboard_content(db){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.dashboard-main","main.dashboard-main",-434576035),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.dashboard-content","section.dashboard-content",247083399),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.dashboard.views.dashboard_bar,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.dashboard.views.dashboard_grid,db], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.dashboard.views.activity,db], null)], null);
});
uxbox.dashboard.views.dashboard = (function uxbox$dashboard$views$dashboard(db){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.dashboard.views.header,db], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.dashboard.views.dashboard_content,db], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1437048688594