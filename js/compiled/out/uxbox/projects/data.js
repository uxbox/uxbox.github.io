// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.projects.data');
goog.require('cljs.core');
uxbox.projects.data.create_project = (function uxbox$projects$data$create_project(name){
var now = (new Date());
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"last-update","last-update",-983435406),now,new cljs.core.Keyword(null,"created","created",-704993748),now,new cljs.core.Keyword(null,"pages","pages",-285406513),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"comment-count","comment-count",-850495956),(0)], null);
});
uxbox.projects.data.create_page = (function uxbox$projects$data$create_page(project_uuid,title){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"height","height",1025178622),(1080),new cljs.core.Keyword(null,"project","project",1124394579),project_uuid,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.PersistentArrayMap.EMPTY], null);
});

//# sourceMappingURL=data.js.map?rel=1437048687635