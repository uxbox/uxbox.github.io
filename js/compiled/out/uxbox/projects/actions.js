// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.projects.actions');
goog.require('cljs.core');
goog.require('uxbox.pubsub');
goog.require('uxbox.projects.data');
goog.require('uxbox.storage');
uxbox.projects.actions.create_project = (function uxbox$projects$actions$create_project(p__22261){
var map__22263 = p__22261;
var map__22263__$1 = ((cljs.core.seq_QMARK_.call(null,map__22263))?cljs.core.apply.call(null,cljs.core.hash_map,map__22263):map__22263);
var name = cljs.core.get.call(null,map__22263__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var width = cljs.core.get.call(null,map__22263__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__22263__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var layout = cljs.core.get.call(null,map__22263__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var now = (new Date());
var project_uuid = cljs.core.random_uuid.call(null);
var page = uxbox.projects.data.create_page.call(null,project_uuid,"Homepage");
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-project","create-project",-2068207849),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"comment-count","comment-count",-850495956),new cljs.core.Keyword(null,"first-page-uuid","first-page-uuid",441077934),new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"last-update","last-update",-983435406),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"height","height",1025178622)],[layout,name,width,now,(0),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(page),page], true, false),now,project_uuid,height])], null));
});
uxbox.projects.actions.create_page = (function uxbox$projects$actions$create_page(project,title){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-page","create-page",-1352656443),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(project),uxbox.projects.data.create_page.call(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(project),title)], null)], null));
});
uxbox.projects.actions.change_page_title = (function uxbox$projects$actions$change_page_title(project,page,title){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-page-title","change-page-title",1303165958),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [project,page,title], null)], null));
});
uxbox.projects.actions.delete_page = (function uxbox$projects$actions$delete_page(project,page){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-page","delete-page",-1371381770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [project,page], null)], null));
});
uxbox.projects.actions.delete_project = (function uxbox$projects$actions$delete_project(uuid){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-project","delete-project",-1196614829),uuid], null));
});
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"delete-project","delete-project",-1196614829),(function (state,uuid){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"projects-list","projects-list",-1153022324),(function (p1__22264_SHARP_){
return cljs.core.dissoc.call(null,p1__22264_SHARP_,uuid);
}));
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"create-project","create-project",-2068207849),(function (state,project){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"projects-list","projects-list",-1153022324),cljs.core.assoc,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(project),project);
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"create-page","create-page",-1352656443),(function (state,p__22265){
var vec__22266 = p__22265;
var project_uuid = cljs.core.nth.call(null,vec__22266,(0),null);
var page = cljs.core.nth.call(null,vec__22266,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(page)], null),page);
}));
uxbox.pubsub.register_effect.call(null,new cljs.core.Keyword(null,"create-project","create-project",-2068207849),(function (state,project){
return uxbox.storage.create_project.call(null,project);
}));
uxbox.pubsub.register_effect.call(null,new cljs.core.Keyword(null,"delete-project","delete-project",-1196614829),(function (state,uuid){
return uxbox.storage.delete_project.call(null,uuid);
}));
uxbox.pubsub.register_effect.call(null,new cljs.core.Keyword(null,"create-page","create-page",-1352656443),(function (state,p__22267){
var vec__22268 = p__22267;
var project_uuid = cljs.core.nth.call(null,vec__22268,(0),null);
var page = cljs.core.nth.call(null,vec__22268,(1),null);
return uxbox.storage.create_page.call(null,project_uuid,page);
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"delete-page","delete-page",-1371381770),(function (state,p__22269){
var vec__22270 = p__22269;
var project = cljs.core.nth.call(null,vec__22270,(0),null);
var page = cljs.core.nth.call(null,vec__22270,(1),null);
var page_uuid = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(page);
var new_state = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"pages","pages",-285406513)], null),cljs.core.dissoc,page_uuid);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(state)),page_uuid)){
return cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.first.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"pages","pages",-285406513)], null)))));
} else {
return new_state;
}
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"change-page-title","change-page-title",1303165958),(function (state,p__22271){
var vec__22272 = p__22271;
var project = cljs.core.nth.call(null,vec__22272,(0),null);
var page = cljs.core.nth.call(null,vec__22272,(1),null);
var title = cljs.core.nth.call(null,vec__22272,(2),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"title","title",636505583)], null),title);
}));
uxbox.pubsub.register_effect.call(null,new cljs.core.Keyword(null,"change-page-title","change-page-title",1303165958),(function (state,p__22273){
var vec__22274 = p__22273;
var project = cljs.core.nth.call(null,vec__22274,(0),null);
var page = cljs.core.nth.call(null,vec__22274,(1),null);
var title = cljs.core.nth.call(null,vec__22274,(2),null);
return uxbox.storage.change_page_title.call(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(project),page,title);
}));
uxbox.pubsub.register_effect.call(null,new cljs.core.Keyword(null,"delete-page","delete-page",-1371381770),(function (state,p__22275){
var vec__22276 = p__22275;
var project = cljs.core.nth.call(null,vec__22276,(0),null);
var page = cljs.core.nth.call(null,vec__22276,(1),null);
return uxbox.storage.delete_page.call(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(project),page);
}));

//# sourceMappingURL=actions.js.map?rel=1437054746019