// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.dashboard.actions');
goog.require('cljs.core');
goog.require('uxbox.pubsub');
goog.require('uxbox.storage');
uxbox.dashboard.actions.set_projects_order = (function uxbox$dashboard$actions$set_projects_order(order){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-projects-order","set-projects-order",879565328),order], null));
});
uxbox.dashboard.actions.new_project = (function uxbox$dashboard$actions$new_project(){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project","new-project",-1947445636)], null));
});
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"new-project","new-project",-1947445636),(function (state,_){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"lightbox","lightbox",-2136031065),new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"new-project-defaults","new-project-defaults",-2027182368).cljs$core$IFn$_invoke$arity$1(state));
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"set-projects-order","set-projects-order",879565328),(function (state,order){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"project-sort-order","project-sort-order",478037672),order);
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"location","location",1815599388),(function (state,location){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,location),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"projects-list","projects-list",-1153022324),uxbox.storage.get_projects.call(null,"user-1"));
} else {
return state;
}
}));

//# sourceMappingURL=actions.js.map?rel=1437028482285