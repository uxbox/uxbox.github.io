// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.workspace.canvas.actions');
goog.require('cljs.core');
goog.require('uxbox.pubsub');
goog.require('uxbox.geometry');
goog.require('uxbox.storage');
goog.require('uxbox.shapes.core');
goog.require('uxbox.workspace.figures.catalogs');
uxbox.workspace.canvas.actions.drawing_shape = (function uxbox$workspace$canvas$actions$drawing_shape(coordinates){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawing-shape","drawing-shape",-1840785303),coordinates], null));
});
uxbox.workspace.canvas.actions.select_shape = (function uxbox$workspace$canvas$actions$select_shape(coordinates){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-shape","select-shape",146401296),coordinates], null));
});
uxbox.workspace.canvas.actions.new_group = (function uxbox$workspace$canvas$actions$new_group(name,order,shape_uuid){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"order","order",-1254677256),order,new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"locked","locked",-1658763820),false,new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"square","square",812434677),new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_uuid], null)], null);
});
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"select-shape","select-shape",146401296),(function (state,p__23210){
var vec__23211 = p__23210;
var x = cljs.core.nth.call(null,vec__23211,(0),null);
var y = cljs.core.nth.call(null,vec__23211,(1),null);
var selected_uuid = cljs.core.first.call(null,cljs.core.filter.call(null,((function (vec__23211,x,y){
return (function (p1__23209_SHARP_){
return uxbox.shapes.core.intersect.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"shapes","shapes",1897594879),p1__23209_SHARP_], null)),x,y);
});})(vec__23211,x,y))
,cljs.core.filter.call(null,((function (vec__23211,x,y){
return (function (p1__23208_SHARP_){
return !((cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"shapes","shapes",1897594879),p1__23208_SHARP_], null)) == null));
});})(vec__23211,x,y))
,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.filter.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.sort_by.call(null,((function (vec__23211,x,y){
return (function (p1__23207_SHARP_){
return (- new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(p1__23207_SHARP_));
});})(vec__23211,x,y))
,cljs.core.vals.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(state)))))))));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"selected","selected",574897764)], null),selected_uuid);
}));
uxbox.workspace.canvas.actions.drawing_rect = (function uxbox$workspace$canvas$actions$drawing_rect(state,p__23212){
var vec__23215 = p__23212;
var x = cljs.core.nth.call(null,vec__23215,(0),null);
var y = cljs.core.nth.call(null,vec__23215,(1),null);
var temp__4423__auto__ = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"drawing","drawing",1181749528)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var drawing_val = temp__4423__auto__;
var shape_uuid = cljs.core.random_uuid.call(null);
var group_uuid = cljs.core.random_uuid.call(null);
var vec__23216 = uxbox.geometry.coords__GT_rect.call(null,x,y,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(drawing_val),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(drawing_val));
var rect_x = cljs.core.nth.call(null,vec__23216,(0),null);
var rect_y = cljs.core.nth.call(null,vec__23216,(1),null);
var rect_width = cljs.core.nth.call(null,vec__23216,(2),null);
var rect_height = cljs.core.nth.call(null,vec__23216,(3),null);
var new_group_order = (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.vals.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(state)))))) + (1));
var shape_val = uxbox.shapes.core.new_rectangle.call(null,rect_x,rect_y,rect_width,rect_height);
var group_val = uxbox.workspace.canvas.actions.new_group.call(null,[cljs.core.str("Group "),cljs.core.str(new_group_order)].join(''),new_group_order,shape_uuid);
uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-group","insert-group",342474183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_uuid,group_val], null)], null));

uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-shape","insert-shape",-282606562),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_uuid,shape_val], null)], null));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"drawing","drawing",1181749528)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace","workspace",-1096735709),new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007)], null),null);
} else {
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"drawing","drawing",1181749528)], null),uxbox.shapes.core.map__GT_Rectangle.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)));
}
});
uxbox.workspace.canvas.actions.drawing_line = (function uxbox$workspace$canvas$actions$drawing_line(state,p__23217){
var vec__23219 = p__23217;
var x = cljs.core.nth.call(null,vec__23219,(0),null);
var y = cljs.core.nth.call(null,vec__23219,(1),null);
var temp__4423__auto__ = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"drawing","drawing",1181749528)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var drawing_val = temp__4423__auto__;
var shape_uuid = cljs.core.random_uuid.call(null);
var group_uuid = cljs.core.random_uuid.call(null);
var new_group_order = (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.vals.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(state)))))) + (1));
var shape_val = uxbox.shapes.core.new_line.call(null,new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(drawing_val),new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(drawing_val),x,y);
var group_val = uxbox.workspace.canvas.actions.new_group.call(null,[cljs.core.str("Group "),cljs.core.str(new_group_order)].join(''),new_group_order,shape_uuid);
uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-group","insert-group",342474183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_uuid,group_val], null)], null));

uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-shape","insert-shape",-282606562),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_uuid,shape_val], null)], null));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"drawing","drawing",1181749528)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace","workspace",-1096735709),new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007)], null),null);
} else {
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"drawing","drawing",1181749528)], null),uxbox.shapes.core.map__GT_Line.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,new cljs.core.Keyword(null,"y2","y2",-718691301),y], null)));
}
});
uxbox.workspace.canvas.actions.drawing_path = (function uxbox$workspace$canvas$actions$drawing_path(state,p__23220,symbol){
var vec__23223 = p__23220;
var x = cljs.core.nth.call(null,vec__23223,(0),null);
var y = cljs.core.nth.call(null,vec__23223,(1),null);
var temp__4423__auto__ = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"drawing","drawing",1181749528)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var drawing_val = temp__4423__auto__;
var shape_uuid = cljs.core.random_uuid.call(null);
var group_uuid = cljs.core.random_uuid.call(null);
var vec__23224 = uxbox.geometry.coords__GT_rect.call(null,x,y,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(drawing_val),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(drawing_val));
var rect_x = cljs.core.nth.call(null,vec__23224,(0),null);
var rect_y = cljs.core.nth.call(null,vec__23224,(1),null);
var rect_width = cljs.core.nth.call(null,vec__23224,(2),null);
var rect_height = cljs.core.nth.call(null,vec__23224,(3),null);
var new_group_order = (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.vals.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(state)))))) + (1));
var shape_val = uxbox.shapes.core.new_path_shape.call(null,rect_x,rect_y,rect_width,rect_height,new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,new cljs.core.Keyword(null,"svg","svg",856789142).cljs$core$IFn$_invoke$arity$1(symbol))),(48),(48));
var group_val = uxbox.workspace.canvas.actions.new_group.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(symbol)),cljs.core.str(" "),cljs.core.str(new_group_order)].join(''),new_group_order,shape_uuid);
uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-group","insert-group",342474183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_uuid,group_val], null)], null));

uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-shape","insert-shape",-282606562),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_uuid,shape_val], null)], null));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"drawing","drawing",1181749528)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace","workspace",-1096735709),new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007)], null),null);
} else {
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"drawing","drawing",1181749528)], null),uxbox.shapes.core.map__GT_Path.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)));
}
});
uxbox.workspace.canvas.actions.drawing_circle = (function uxbox$workspace$canvas$actions$drawing_circle(state,p__23225){
var vec__23227 = p__23225;
var x = cljs.core.nth.call(null,vec__23227,(0),null);
var y = cljs.core.nth.call(null,vec__23227,(1),null);
var temp__4423__auto__ = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"drawing","drawing",1181749528)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var drawing_val = temp__4423__auto__;
var shape_uuid = cljs.core.random_uuid.call(null);
var group_uuid = cljs.core.random_uuid.call(null);
var new_group_order = (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.vals.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(state)))))) + (1));
var cx = new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(drawing_val);
var cy = new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(drawing_val);
var r = uxbox.geometry.distance.call(null,x,y,cx,cy);
var dx = (uxbox.geometry.distance.call(null,cx,cy,cx,(0)) - r);
var dy = (uxbox.geometry.distance.call(null,cx,cy,(0),cy) - r);
var r__$1 = ((((dx < (0))) || ((dy < (0))))?(r - Math.abs((function (){var x__18456__auto__ = dx;
var y__18457__auto__ = dy;
return ((x__18456__auto__ < y__18457__auto__) ? x__18456__auto__ : y__18457__auto__);
})())):r);
var shape_val = uxbox.shapes.core.new_circle.call(null,new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(drawing_val),new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(drawing_val),r__$1);
var group_val = uxbox.workspace.canvas.actions.new_group.call(null,[cljs.core.str("Group "),cljs.core.str(new_group_order)].join(''),new_group_order,shape_uuid);
uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-group","insert-group",342474183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_uuid,group_val], null)], null));

uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-shape","insert-shape",-282606562),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_uuid,shape_val], null)], null));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"drawing","drawing",1181749528)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace","workspace",-1096735709),new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007)], null),null);
} else {
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"drawing","drawing",1181749528)], null),uxbox.shapes.core.map__GT_Circle.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y], null)));
}
});
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"drawing-shape","drawing-shape",-1840785303),(function (state,coords){
var selected_tool = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace","workspace",-1096735709),new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007)], null));
if(cljs.core._EQ_.call(null,selected_tool,new cljs.core.Keyword(null,"rect","rect",-108902628))){
return uxbox.workspace.canvas.actions.drawing_rect.call(null,state,coords);
} else {
if(cljs.core._EQ_.call(null,selected_tool,new cljs.core.Keyword(null,"line","line",212345235))){
return uxbox.workspace.canvas.actions.drawing_line.call(null,state,coords);
} else {
if(cljs.core._EQ_.call(null,selected_tool,new cljs.core.Keyword(null,"circle","circle",1903212362))){
return uxbox.workspace.canvas.actions.drawing_circle.call(null,state,coords);
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,selected_tool),new cljs.core.Keyword(null,"figure","figure",-561394079))){
var vec__23228 = selected_tool;
var _ = cljs.core.nth.call(null,vec__23228,(0),null);
var catalog = cljs.core.nth.call(null,vec__23228,(1),null);
var symbol = cljs.core.nth.call(null,vec__23228,(2),null);
return uxbox.workspace.canvas.actions.drawing_path.call(null,state,coords,cljs.core.get_in.call(null,uxbox.workspace.figures.catalogs.catalogs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [catalog,new cljs.core.Keyword(null,"symbols","symbols",1211743),symbol], null)));
} else {
return state;

}
}
}
}
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"insert-group","insert-group",342474183),(function (state,p__23229){
var vec__23230 = p__23229;
var group_uuid = cljs.core.nth.call(null,vec__23230,(0),null);
var group_val = cljs.core.nth.call(null,vec__23230,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"groups","groups",-136896102),group_uuid], null),group_val);
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"insert-shape","insert-shape",-282606562),(function (state,p__23231){
var vec__23232 = p__23231;
var shape_uuid = cljs.core.nth.call(null,vec__23232,(0),null);
var shape_val = cljs.core.nth.call(null,vec__23232,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"shapes","shapes",1897594879),shape_uuid], null),shape_val);
}));
uxbox.pubsub.register_effect.call(null,new cljs.core.Keyword(null,"insert-group","insert-group",342474183),(function (state,p__23233){
var vec__23234 = p__23233;
var group_uuid = cljs.core.nth.call(null,vec__23234,(0),null);
var group_val = cljs.core.nth.call(null,vec__23234,(1),null);
var project_uuid = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null));
var page_uuid = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null));
return uxbox.storage.create_group.call(null,project_uuid,page_uuid,group_uuid,group_val);
}));
uxbox.pubsub.register_effect.call(null,new cljs.core.Keyword(null,"insert-shape","insert-shape",-282606562),(function (state,p__23235){
var vec__23236 = p__23235;
var shape_uuid = cljs.core.nth.call(null,vec__23236,(0),null);
var shape_val = cljs.core.nth.call(null,vec__23236,(1),null);
var project_uuid = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null));
var page_uuid = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null));
return uxbox.storage.create_shape.call(null,project_uuid,page_uuid,shape_uuid,shape_val);
}));
uxbox.pubsub.register_event.call(null,new cljs.core.Keyword(null,"viewport-mouse-click","viewport-mouse-click",-211410445),(function (state,coords){
if(cljs.core.truth_(cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace","workspace",-1096735709),new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007)], null)))){
return uxbox.workspace.canvas.actions.drawing_shape.call(null,coords);
} else {
return uxbox.workspace.canvas.actions.select_shape.call(null,coords);
}
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"viewport-mouse-drag","viewport-mouse-drag",815616040),(function (state,p__23237){
var vec__23238 = p__23237;
var state__$1 = cljs.core.nth.call(null,vec__23238,(0),null);
var coords = cljs.core.nth.call(null,vec__23238,(1),null);
if(cljs.core.truth_(cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"selected","selected",574897764)], null)))){
return state__$1;
} else {
return state__$1;
}
}));
uxbox.workspace.canvas.actions.remove_element = (function uxbox$workspace$canvas$actions$remove_element(groups_entry,element_uuid){
var in_QMARK_ = (function (seq,elm){
return cljs.core.some.call(null,(function (p1__23239_SHARP_){
return cljs.core._EQ_.call(null,elm,p1__23239_SHARP_);
}),seq);
});
var has_element_QMARK_ = ((function (in_QMARK_){
return (function (p__23243){
var vec__23244 = p__23243;
var _ = cljs.core.nth.call(null,vec__23244,(0),null);
var val = cljs.core.nth.call(null,vec__23244,(1),null);
return in_QMARK_.call(null,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(val),element_uuid);
});})(in_QMARK_))
;
var owner_uuid = cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,has_element_QMARK_,groups_entry)));
var remove_vector_element = ((function (in_QMARK_,has_element_QMARK_,owner_uuid){
return (function (v,el){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.filter.call(null,((function (in_QMARK_,has_element_QMARK_,owner_uuid){
return (function (p1__23240_SHARP_){
return !(cljs.core._EQ_.call(null,p1__23240_SHARP_,el));
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
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"delete-key-pressed","delete-key-pressed",1120263049),(function (state){
var selected_uuid = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"selected","selected",574897764)], null));
var project_uuid = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null));
var page_uuid = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null));
if(cljs.core.truth_(selected_uuid)){
uxbox.storage.remove_shape.call(null,project_uuid,page_uuid,selected_uuid);
} else {
}

if(cljs.core.truth_(selected_uuid)){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"groups","groups",-136896102)], null),uxbox.workspace.canvas.actions.remove_element,selected_uuid),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),cljs.core.dissoc,selected_uuid),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"selected","selected",574897764));
} else {
return state;
}
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"viewport-mouse-down","viewport-mouse-down",2129866564),(function (state){
var temp__4423__auto__ = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"selected","selected",574897764)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var selected_uuid = temp__4423__auto__;
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"shapes","shapes",1897594879),selected_uuid], null),cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true);
} else {
return state;
}
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"viewport-mouse-up","viewport-mouse-up",1715560585),(function (state){
var temp__4423__auto__ = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"selected","selected",574897764)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var selected_uuid = temp__4423__auto__;
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"shapes","shapes",1897594879),selected_uuid], null),cljs.core.dissoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
} else {
return state;
}
}));
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"viewport-mouse-move","viewport-mouse-move",1727448203),(function (){var last_event = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return ((function (last_event){
return (function (state,p__23245){
var vec__23246 = p__23245;
var x = cljs.core.nth.call(null,vec__23246,(0),null);
var y = cljs.core.nth.call(null,vec__23246,(1),null);
var vec__23247 = cljs.core.deref.call(null,last_event);
var old_x = cljs.core.nth.call(null,vec__23247,(0),null);
var old_y = cljs.core.nth.call(null,vec__23247,(1),null);
var selected_uuid = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"selected","selected",574897764)], null));
cljs.core.reset_BANG_.call(null,last_event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

if(cljs.core.truth_((function (){var and__18125__auto__ = selected_uuid;
if(cljs.core.truth_(and__18125__auto__)){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"shapes","shapes",1897594879),selected_uuid,new cljs.core.Keyword(null,"dragging","dragging",1185097613)], null));
} else {
return and__18125__auto__;
}
})())){
var deltax = (x - old_x);
var deltay = (y - old_y);
var shape_x = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"shapes","shapes",1897594879),selected_uuid,new cljs.core.Keyword(null,"x","x",2099068185)], null));
var shape_y = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"shapes","shapes",1897594879),selected_uuid,new cljs.core.Keyword(null,"y","y",-1757859776)], null));
var selected_uuid__$1 = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"selected","selected",574897764)], null));
var project_uuid = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null));
var page_uuid = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null));
uxbox.storage.move_shape.call(null,project_uuid,page_uuid,selected_uuid__$1,deltax,deltay);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"shapes","shapes",1897594879),selected_uuid__$1], null),uxbox.shapes.core.move_delta,deltax,deltay);
} else {
return state;
}
});
;})(last_event))
})());

//# sourceMappingURL=actions.js.map?rel=1437054887340