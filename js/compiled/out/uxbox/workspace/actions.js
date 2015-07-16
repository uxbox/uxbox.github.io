// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.workspace.actions');
goog.require('cljs.core');
goog.require('uxbox.pubsub');
goog.require('uxbox.storage');
uxbox.workspace.actions.change_shape_attr = (function uxbox$workspace$actions$change_shape_attr(project_uuid,page_uuid,shape_uuid,attr,value){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-shape-attr","change-shape-attr",-767119604),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [project_uuid,page_uuid,shape_uuid,attr,value], null)], null));
});
uxbox.workspace.actions.close_setting_box = (function uxbox$workspace$actions$close_setting_box(setting_box){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-setting-box","close-setting-box",-1912921103),setting_box], null));
});
uxbox.workspace.actions.open_setting_box = (function uxbox$workspace$actions$open_setting_box(setting_box){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-setting-box","open-setting-box",-1705273567),setting_box], null));
});
uxbox.workspace.actions.set_tool = (function uxbox$workspace$actions$set_tool(tool){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tool","set-tool",-1804874105),tool], null));
});
uxbox.workspace.actions.set_figures_catalog = (function uxbox$workspace$actions$set_figures_catalog(catalog){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-figures-catalog","set-figures-catalog",-676107098),catalog], null));
});
uxbox.workspace.actions.toggle_grid = (function uxbox$workspace$actions$toggle_grid(){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-grid","toggle-grid",-1192669300)], null));
});
uxbox.workspace.actions.toggle_select_group = (function uxbox$workspace$actions$toggle_select_group(group_id){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-select-group","toggle-select-group",-1088397860),group_id], null));
});
uxbox.workspace.actions.toggle_group_visibility = (function uxbox$workspace$actions$toggle_group_visibility(group_id){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-group-visiblity","toggle-group-visiblity",-328795593),group_id], null));
});
uxbox.workspace.actions.toggle_group_lock = (function uxbox$workspace$actions$toggle_group_lock(group_id){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-group-lock","toggle-group-lock",1249279405),group_id], null));
});
uxbox.workspace.actions.view_page = (function uxbox$workspace$actions$view_page(project_uuid,page_uuid){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-page","view-page",173639286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [project_uuid,page_uuid], null)], null));
});
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"change-shape-attr","change-shape-attr",-767119604),(function (state,p__23113){
var vec__23114 = p__23113;
var project_uuid = cljs.core.nth.call(null,vec__23114,(0),null);
var page_uuid = cljs.core.nth.call(null,vec__23114,(1),null);
var shape_uuid = cljs.core.nth.call(null,vec__23114,(2),null);
var attr = cljs.core.nth.call(null,vec__23114,(3),null);
var value = cljs.core.nth.call(null,vec__23114,(4),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"shapes","shapes",1897594879),shape_uuid,attr], null),value);
}));
uxbox.pubsub.register_effect.call(null,new cljs.core.Keyword(null,"change-shape-attr","change-shape-attr",-767119604),(function (state,p__23115){
var vec__23116 = p__23115;
var project_uuid = cljs.core.nth.call(null,vec__23116,(0),null);
var page_uuid = cljs.core.nth.call(null,vec__23116,(1),null);
var shape_uuid = cljs.core.nth.call(null,vec__23116,(2),null);
var attr = cljs.core.nth.call(null,vec__23116,(3),null);
var value = cljs.core.nth.call(null,vec__23116,(4),null);
return uxbox.storage.change_shape_attr.call(null,project_uuid,page_uuid,shape_uuid,attr,value);
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"close-setting-box","close-setting-box",-1912921103),(function (state,setting_box){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"open-setting-boxes","open-setting-boxes",-193961941),(function (p1__23117_SHARP_){
return cljs.core.disj.call(null,p1__23117_SHARP_,setting_box);
}));
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"open-setting-box","open-setting-box",-1705273567),(function (state,setting_box){
if(cljs.core._EQ_.call(null,setting_box,new cljs.core.Keyword(null,"layers","layers",1944875032))){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"open-setting-boxes","open-setting-boxes",-193961941),(function (p1__23118_SHARP_){
return cljs.core.conj.call(null,p1__23118_SHARP_,setting_box);
}));
} else {
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"open-setting-boxes","open-setting-boxes",-193961941),(function (p1__23119_SHARP_){
return clojure.set.intersection.call(null,cljs.core.conj.call(null,p1__23119_SHARP_,setting_box),cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"layers","layers",1944875032),setting_box], true));
}));
}
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"set-tool","set-tool",-1804874105),(function (state,tool){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace","workspace",-1096735709),new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007)], null),tool);
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"set-figures-catalog","set-figures-catalog",-676107098),(function (state,catalog){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-catalog","current-catalog",1993111576),catalog);
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"toggle-grid","toggle-grid",-1192669300),(function (state,_){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace","workspace",-1096735709),new cljs.core.Keyword(null,"grid","grid",402978600)], null),cljs.core.not);
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"toggle-select-group","toggle-select-group",-1088397860),(function (state,group_id){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace","workspace",-1096735709),new cljs.core.Keyword(null,"selected-groups","selected-groups",300146646)], null),cljs.core.PersistentHashSet.fromArray([group_id], true));
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"toggle-group-visiblity","toggle-group-visiblity",-328795593),(function (state,group_id){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"groups","groups",-136896102),group_id,new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),(function (p1__23120_SHARP_){
return cljs.core.not.call(null,p1__23120_SHARP_);
}));
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"toggle-group-lock","toggle-group-lock",1249279405),(function (state,group_id){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"groups","groups",-136896102),group_id,new cljs.core.Keyword(null,"locked","locked",-1658763820)], null),(function (p1__23121_SHARP_){
return cljs.core.not.call(null,p1__23121_SHARP_);
}));
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"view-page","view-page",173639286),(function (state,p__23122){
var vec__23123 = p__23122;
var project_uuid = cljs.core.nth.call(null,vec__23123,(0),null);
var page_uuid = cljs.core.nth.call(null,vec__23123,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"page","page",849072397),uxbox.storage.get_page.call(null,project_uuid,page_uuid));
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"location","location",1815599388),(function (state,data){
var vec__23124 = data;
var location = cljs.core.nth.call(null,vec__23124,(0),null);
var project_uuid = cljs.core.nth.call(null,vec__23124,(1),null);
var page_uuid = cljs.core.nth.call(null,vec__23124,(2),null);
if(cljs.core._EQ_.call(null,location,new cljs.core.Keyword(null,"workspace","workspace",-1096735709))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"project","project",1124394579),uxbox.storage.get_project.call(null,project_uuid),new cljs.core.Keyword(null,"page","page",849072397),uxbox.storage.get_page.call(null,project_uuid,page_uuid),new cljs.core.Keyword(null,"workspace","workspace",-1096735709),new cljs.core.Keyword(null,"workspace-defaults","workspace-defaults",637753477).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"open-setting-boxes","open-setting-boxes",-193961941),new cljs.core.Keyword(null,"default-open-setting-boxes","default-open-setting-boxes",1343645984).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"visible-project-bar","visible-project-bar",1336182203),false);
} else {
return state;
}
}));

//# sourceMappingURL=actions.js.map?rel=1437054886552