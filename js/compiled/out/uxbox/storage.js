// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.storage');
goog.require('cljs.core');
goog.require('hodgepodge.core');
goog.require('uxbox.shapes.core');
uxbox.storage.users = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),"user-1",new cljs.core.Keyword(null,"password","password",417022471),"user-1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),"user-2",new cljs.core.Keyword(null,"password","password",417022471),"user-2"], null)], null);
uxbox.storage.projects = new cljs.core.PersistentArrayMap.fromArray([cljs.core.uuid.call(null,"c078f148-2686-4b07-a165-c455a0ab19a7"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"Design UX Box",new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.uuid.call(null,"c078f148-2686-4b07-a165-c455a0ab19a7"),new cljs.core.Keyword(null,"last-update","last-update",-983435406),(new Date((2014),(10),(1))),new cljs.core.Keyword(null,"created","created",-704993748),(new Date((2014),(9),(1))),new cljs.core.Keyword(null,"owner","owner",-392611939),"user-1",new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentArrayMap(null, 2, ["3e14aaed-e3ab-45f4-9fc5-14dc023a545e",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Comment1"], null),"28409319-3daa-420b-8c1c-0044b4d4d6c4",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Comment2"], null)], null),new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.PersistentArrayMap.fromArray([cljs.core.uuid.call(null,"d429c2e1-f2b7-4d4f-abff-42eea0f8dc88"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"My awesome page",new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.uuid.call(null,"d429c2e1-f2b7-4d4f-abff-42eea0f8dc88"),new cljs.core.Keyword(null,"author","author",2111686192),"Bobby Tables",new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"height","height",1025178622),(1080),new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.uuid.call(null,"3df37adb-f18d-4afb-9908-397e3d46653d"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Another awesome page",new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.uuid.call(null,"3df37adb-f18d-4afb-9908-397e3d46653d"),new cljs.core.Keyword(null,"author","author",2111686192),"Bobby Tables",new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"height","height",1025178622),(1080),new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.PersistentArrayMap.EMPTY], null)], true, false)], null),cljs.core.uuid.call(null,"7b16847f-9298-4397-b093-a5364fdd1e97"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"Wireframes Taiga Tribe",new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.uuid.call(null,"7b16847f-9298-4397-b093-a5364fdd1e97"),new cljs.core.Keyword(null,"last-update","last-update",-983435406),(new Date((2005),(10),(1))),new cljs.core.Keyword(null,"created","created",-704993748),(new Date((2005),(9),(1))),new cljs.core.Keyword(null,"owner","owner",-392611939),"user-1",new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentArrayMap(null, 3, ["b1cafec8-4b1b-49b0-8ae2-3342dcbaaf6d",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Comment1"], null),"caee3210-4d16-4eae-a42f-a59a9228b886",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Comment2"], null),"8f017228-fecd-4145-ae92-c1c64b587b46",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Comment1"], null)], null),new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.PersistentArrayMap.fromArray([cljs.core.uuid.call(null,"082e1921-908d-4af6-897c-0a8a24d00b9b"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"My awesome page",new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.uuid.call(null,"082e1921-908d-4af6-897c-0a8a24d00b9b"),new cljs.core.Keyword(null,"author","author",2111686192),"Bobby Tables",new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"height","height",1025178622),(1080),new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.PersistentArrayMap.EMPTY], null)], true, false)], null),cljs.core.uuid.call(null,"01764df1-a6d6-407c-96c4-29110deeb641"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"A WYSH Roadmap",new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.uuid.call(null,"01764df1-a6d6-407c-96c4-29110deeb641"),new cljs.core.Keyword(null,"last-update","last-update",-983435406),(new Date((2010),(10),(1))),new cljs.core.Keyword(null,"created","created",-704993748),(new Date((2010),(9),(1))),new cljs.core.Keyword(null,"owner","owner",-392611939),"user-2",new cljs.core.Keyword(null,"comment","comment",532206069),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.PersistentArrayMap.fromArray([cljs.core.uuid.call(null,"e654dff7-ef99-465d-949e-abb907dc69ce"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"My awesome page",new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.uuid.call(null,"e654dff7-ef99-465d-949e-abb907dc69ce"),new cljs.core.Keyword(null,"author","author",2111686192),"Bobby Tables",new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"height","height",1025178622),(1080),new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.PersistentArrayMap.EMPTY], null)], true, false)], null)], true, false);
if(typeof uxbox.storage.data !== 'undefined'){
} else {
uxbox.storage.data = (cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(hodgepodge.core.local_storage))?cljs.core.atom.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(hodgepodge.core.local_storage)):cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"users","users",-713552705),uxbox.storage.users,new cljs.core.Keyword(null,"projects","projects",-364845983),uxbox.storage.projects], null)));
}
cljs.core.add_watch.call(null,uxbox.storage.data,new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068),(function (_,___$1,___$2,new_value){
return cljs.core.assoc_BANG_.call(null,hodgepodge.core.local_storage,new cljs.core.Keyword(null,"data","data",-232669377),new_value);
}));
uxbox.storage.get_projects = (function uxbox$storage$get_projects(username){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (project){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(project),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"comment-count","comment-count",-850495956),new cljs.core.Keyword(null,"first-page-uuid","first-page-uuid",441077934),new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"last-update","last-update",-983435406),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"pages-count","pages-count",1274269979),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(project),cljs.core.count.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(project)),cljs.core.first.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(project))),cljs.core.count.call(null,new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(project)),new cljs.core.Keyword(null,"last-update","last-update",-983435406).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(project),cljs.core.count.call(null,new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(project)),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(project)])], null);
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"projects","projects",-364845983).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,uxbox.storage.data)))));
});
uxbox.storage.get_project = (function uxbox$storage$get_project(uuid){
var project = cljs.core.get_in.call(null,cljs.core.deref.call(null,uxbox.storage.data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),uuid], null));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"comment-count","comment-count",-850495956),new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"last-update","last-update",-983435406),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"pages-count","pages-count",1274269979),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(project),cljs.core.count.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(project)),new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"last-update","last-update",-983435406).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(project),cljs.core.count.call(null,new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(project)),new cljs.core.Keyword(null,"owner","owner",-392611939).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(project)]);
});
uxbox.storage.create_project = (function uxbox$storage$create_project(project){
return cljs.core.swap_BANG_.call(null,uxbox.storage.data,(function (current){
return cljs.core.assoc_in.call(null,current,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(project)], null),project);
}));
});
uxbox.storage.create_page = (function uxbox$storage$create_page(project_uuid,page){
return cljs.core.swap_BANG_.call(null,uxbox.storage.data,(function (current){
return cljs.core.assoc_in.call(null,current,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),project_uuid,new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(page)], null),page);
}));
});
uxbox.storage.change_page_title = (function uxbox$storage$change_page_title(project_uuid,page,title){
return cljs.core.swap_BANG_.call(null,uxbox.storage.data,(function (current){
return cljs.core.assoc_in.call(null,current,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),project_uuid,new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"title","title",636505583)], null),title);
}));
});
uxbox.storage.delete_page = (function uxbox$storage$delete_page(project_uuid,page){
return cljs.core.swap_BANG_.call(null,uxbox.storage.data,(function (current){
return cljs.core.update_in.call(null,current,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),project_uuid,new cljs.core.Keyword(null,"pages","pages",-285406513)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(page));
}));
});
uxbox.storage.delete_project = (function uxbox$storage$delete_project(uuid){
return cljs.core.swap_BANG_.call(null,uxbox.storage.data,(function (current){
return cljs.core.update.call(null,current,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.dissoc,uuid);
}));
});
uxbox.storage.get_page = (function uxbox$storage$get_page(project_uuid,page_uuid){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,uxbox.storage.data),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),project_uuid,new cljs.core.Keyword(null,"pages","pages",-285406513),page_uuid], null));
});
uxbox.storage.create_shape = (function uxbox$storage$create_shape(project_uuid,page_uuid,shape_uuid,shape){
return cljs.core.swap_BANG_.call(null,uxbox.storage.data,(function (current){
return cljs.core.assoc_in.call(null,current,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),project_uuid,new cljs.core.Keyword(null,"pages","pages",-285406513),page_uuid,new cljs.core.Keyword(null,"shapes","shapes",1897594879),shape_uuid], null),shape);
}));
});
uxbox.storage.remove_element = (function uxbox$storage$remove_element(groups_entry,element_uuid){
var in_QMARK_ = (function (seq,elm){
return cljs.core.some.call(null,(function (p1__23022_SHARP_){
return cljs.core._EQ_.call(null,elm,p1__23022_SHARP_);
}),seq);
});
var has_element_QMARK_ = ((function (in_QMARK_){
return (function (p__23026){
var vec__23027 = p__23026;
var _ = cljs.core.nth.call(null,vec__23027,(0),null);
var val = cljs.core.nth.call(null,vec__23027,(1),null);
return in_QMARK_.call(null,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(val),element_uuid);
});})(in_QMARK_))
;
var owner_uuid = cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,has_element_QMARK_,groups_entry)));
var remove_vector_element = ((function (in_QMARK_,has_element_QMARK_,owner_uuid){
return (function (v,el){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.filter.call(null,((function (in_QMARK_,has_element_QMARK_,owner_uuid){
return (function (p1__23023_SHARP_){
return !(cljs.core._EQ_.call(null,p1__23023_SHARP_,el));
});})(in_QMARK_,has_element_QMARK_,owner_uuid))
,v)],null));
});})(in_QMARK_,has_element_QMARK_,owner_uuid))
;
if((owner_uuid == null)){
return groups_entry;
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,groups_entry,owner_uuid))))){
return cljs.core.dissoc.call(null,groups_entry,owner_uuid);
} else {
return cljs.core.update_in.call(null,groups_entry,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),remove_vector_element,element_uuid);

}
}
});
uxbox.storage.remove_shape = (function uxbox$storage$remove_shape(project_uuid,page_uuid,shape_uuid){
return cljs.core.swap_BANG_.call(null,uxbox.storage.data,(function (current){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,current,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),project_uuid,new cljs.core.Keyword(null,"pages","pages",-285406513),page_uuid,new cljs.core.Keyword(null,"groups","groups",-136896102)], null),uxbox.storage.remove_element,shape_uuid),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),project_uuid,new cljs.core.Keyword(null,"pages","pages",-285406513),page_uuid,new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),cljs.core.dissoc,shape_uuid);
}));
});
uxbox.storage.create_group = (function uxbox$storage$create_group(project_uuid,page_uuid,group_uuid,group){
return cljs.core.swap_BANG_.call(null,uxbox.storage.data,(function (current){
return cljs.core.assoc_in.call(null,current,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),project_uuid,new cljs.core.Keyword(null,"pages","pages",-285406513),page_uuid,new cljs.core.Keyword(null,"groups","groups",-136896102),group_uuid], null),group);
}));
});
uxbox.storage.change_shape_attr = (function uxbox$storage$change_shape_attr(project_uuid,page_uuid,shape_uuid,attr,value){
return cljs.core.swap_BANG_.call(null,uxbox.storage.data,(function (current){
return cljs.core.assoc_in.call(null,current,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),project_uuid,new cljs.core.Keyword(null,"pages","pages",-285406513),page_uuid,new cljs.core.Keyword(null,"shapes","shapes",1897594879),shape_uuid,attr], null),value);
}));
});
uxbox.storage.move_shape = (function uxbox$storage$move_shape(project_uuid,page_uuid,shape_uuid,deltax,deltay){
return cljs.core.swap_BANG_.call(null,uxbox.storage.data,(function (current){
return cljs.core.update_in.call(null,current,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projects","projects",-364845983),project_uuid,new cljs.core.Keyword(null,"pages","pages",-285406513),page_uuid,new cljs.core.Keyword(null,"shapes","shapes",1897594879),shape_uuid], null),uxbox.shapes.core.move_delta,deltax,deltay);
}));
});

//# sourceMappingURL=storage.js.map?rel=1437054881020