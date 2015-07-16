// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.workspace.canvas.views');
goog.require('cljs.core');
goog.require('uxbox.pubsub');
goog.require('uxbox.shapes.core');
goog.require('reagent.core');
goog.require('uxbox.geometry');
goog.require('uxbox.workspace.canvas.actions');
goog.require('cuerdas.core');
uxbox.workspace.canvas.views.grid = (function uxbox$workspace$canvas$views$grid(width,height,start_width,start_height,zoom){
var padding = (20);
var ticks_mod = (100);
var step_size = (10);
var vertical_ticks = cljs.core.range.call(null,(padding - start_height),((height - start_height) - padding),step_size);
var horizontal_ticks = cljs.core.range.call(null,(padding - start_width),((width - start_width) - padding),step_size);
var vertical_lines = ((function (padding,ticks_mod,step_size,vertical_ticks,horizontal_ticks){
return (function (position,value,padding__$1){
if(cljs.core._EQ_.call(null,cljs.core.mod.call(null,value,ticks_mod),(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),position,new cljs.core.Keyword(null,"y1","y1",589123466),padding__$1,new cljs.core.Keyword(null,"y2","y2",-718691301),width,new cljs.core.Keyword(null,"x1","x1",-1863922247),position,new cljs.core.Keyword(null,"x2","x2",-1362513475),position,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"blue",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.75], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),position,new cljs.core.Keyword(null,"y1","y1",589123466),padding__$1,new cljs.core.Keyword(null,"y2","y2",-718691301),width,new cljs.core.Keyword(null,"x1","x1",-1863922247),position,new cljs.core.Keyword(null,"x2","x2",-1362513475),position,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"blue",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.25], null)], null);
}
});})(padding,ticks_mod,step_size,vertical_ticks,horizontal_ticks))
;
var horizontal_lines = ((function (padding,ticks_mod,step_size,vertical_ticks,horizontal_ticks,vertical_lines){
return (function (position,value,padding__$1){
if(cljs.core._EQ_.call(null,cljs.core.mod.call(null,value,ticks_mod),(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),position,new cljs.core.Keyword(null,"y1","y1",589123466),position,new cljs.core.Keyword(null,"y2","y2",-718691301),position,new cljs.core.Keyword(null,"x1","x1",-1863922247),padding__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475),height,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"blue",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.75], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),position,new cljs.core.Keyword(null,"y1","y1",589123466),position,new cljs.core.Keyword(null,"y2","y2",-718691301),position,new cljs.core.Keyword(null,"x1","x1",-1863922247),padding__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475),height,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"blue",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.25], null)], null);
}
});})(padding,ticks_mod,step_size,vertical_ticks,horizontal_ticks,vertical_lines))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.grid","g.grid",1504253817),cljs.core.map.call(null,((function (padding,ticks_mod,step_size,vertical_ticks,horizontal_ticks,vertical_lines,horizontal_lines){
return (function (p1__21278_SHARP_){
return vertical_lines.call(null,(p1__21278_SHARP_ + start_width),p1__21278_SHARP_,padding);
});})(padding,ticks_mod,step_size,vertical_ticks,horizontal_ticks,vertical_lines,horizontal_lines))
,vertical_ticks),cljs.core.map.call(null,((function (padding,ticks_mod,step_size,vertical_ticks,horizontal_ticks,vertical_lines,horizontal_lines){
return (function (p1__21279_SHARP_){
return horizontal_lines.call(null,(p1__21279_SHARP_ + start_height),p1__21279_SHARP_,padding);
});})(padding,ticks_mod,step_size,vertical_ticks,horizontal_ticks,vertical_lines,horizontal_lines))
,horizontal_ticks)], null);
});
uxbox.workspace.canvas.views.vertical_rule = (function uxbox$workspace$canvas$views$vertical_rule(height,start_height,zoom){
var padding = (20);
var big_ticks_mod = (100);
var mid_ticks_mod = (50);
var step_size = (10);
var ticks = cljs.core.range.call(null,(padding - start_height),((height - start_height) - padding),step_size);
var lines = ((function (padding,big_ticks_mod,mid_ticks_mod,step_size,ticks){
return (function (position,value,padding__$1){
if(cljs.core._EQ_.call(null,cljs.core.mod.call(null,value,big_ticks_mod),(0))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),position], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y1","y1",589123466),position,new cljs.core.Keyword(null,"y2","y2",-718691301),position,new cljs.core.Keyword(null,"x1","x1",-1863922247),(5),new cljs.core.Keyword(null,"x2","x2",-1362513475),padding__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#7f7f7f"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),position,new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"transform","transform",1381301764),cuerdas.core.format.call(null,"rotate(90 0 %s)",position),new cljs.core.Keyword(null,"fill","fill",883462889),"#7f7f7f",new cljs.core.Keyword(null,"style","style",-496642736),{"font-size": "12px"}], null),value], null)], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.mod.call(null,value,mid_ticks_mod),(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),position,new cljs.core.Keyword(null,"y1","y1",589123466),position,new cljs.core.Keyword(null,"y2","y2",-718691301),position,new cljs.core.Keyword(null,"x1","x1",-1863922247),(10),new cljs.core.Keyword(null,"x2","x2",-1362513475),padding__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#7f7f7f"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),position,new cljs.core.Keyword(null,"y1","y1",589123466),position,new cljs.core.Keyword(null,"y2","y2",-718691301),position,new cljs.core.Keyword(null,"x1","x1",-1863922247),(15),new cljs.core.Keyword(null,"x2","x2",-1362513475),padding__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#7f7f7f"], null)], null);

}
}
});})(padding,big_ticks_mod,mid_ticks_mod,step_size,ticks))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.vertical-rule","g.vertical-rule",-2019149350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),padding,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"width","width",-384071477),padding,new cljs.core.Keyword(null,"fill","fill",883462889),"#bab7b7"], null)], null),cljs.core.map.call(null,((function (padding,big_ticks_mod,mid_ticks_mod,step_size,ticks,lines){
return (function (p1__21280_SHARP_){
return lines.call(null,(p1__21280_SHARP_ + start_height),p1__21280_SHARP_,padding);
});})(padding,big_ticks_mod,mid_ticks_mod,step_size,ticks,lines))
,ticks)], null);
});
uxbox.workspace.canvas.views.horizontal_rule = (function uxbox$workspace$canvas$views$horizontal_rule(width,start_width,zoom){
var padding = (20);
var big_ticks_mod = (100);
var mid_ticks_mod = (50);
var step_size = (10);
var ticks = cljs.core.range.call(null,(padding - start_width),((width - start_width) - padding),step_size);
var lines = ((function (padding,big_ticks_mod,mid_ticks_mod,step_size,ticks){
return (function (position,value,padding__$1){
if(cljs.core._EQ_.call(null,cljs.core.mod.call(null,value,big_ticks_mod),(0))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),position], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),position,new cljs.core.Keyword(null,"x2","x2",-1362513475),position,new cljs.core.Keyword(null,"y1","y1",589123466),(5),new cljs.core.Keyword(null,"y2","y2",-718691301),padding__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#7f7f7f"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(position + (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(13),new cljs.core.Keyword(null,"fill","fill",883462889),"#7f7f7f",new cljs.core.Keyword(null,"style","style",-496642736),{"font-size": "12px"}], null),value], null)], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.mod.call(null,value,mid_ticks_mod),(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),position,new cljs.core.Keyword(null,"x1","x1",-1863922247),position,new cljs.core.Keyword(null,"x2","x2",-1362513475),position,new cljs.core.Keyword(null,"y1","y1",589123466),(10),new cljs.core.Keyword(null,"y2","y2",-718691301),padding__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#7f7f7f"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),position,new cljs.core.Keyword(null,"x1","x1",-1863922247),position,new cljs.core.Keyword(null,"x2","x2",-1362513475),position,new cljs.core.Keyword(null,"y1","y1",589123466),(15),new cljs.core.Keyword(null,"y2","y2",-718691301),padding__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#7f7f7f"], null)], null);

}
}
});})(padding,big_ticks_mod,mid_ticks_mod,step_size,ticks))
;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.horizontal-rule","g.horizontal-rule",-302131897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),padding,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),padding,new cljs.core.Keyword(null,"fill","fill",883462889),"#bab7b7"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),padding,new cljs.core.Keyword(null,"height","height",1025178622),padding,new cljs.core.Keyword(null,"fill","fill",883462889),"#bab7b7"], null)], null),cljs.core.map.call(null,((function (padding,big_ticks_mod,mid_ticks_mod,step_size,ticks,lines){
return (function (p1__21281_SHARP_){
return lines.call(null,(p1__21281_SHARP_ + start_width),p1__21281_SHARP_,padding);
});})(padding,big_ticks_mod,mid_ticks_mod,step_size,ticks,lines))
,ticks)], null);
});
uxbox.workspace.canvas.views.debug_coordinates = (function uxbox$workspace$canvas$views$debug_coordinates(db){
var coordinates = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var viewport_move = ((function (coordinates){
return (function (state,coord){
return cljs.core.reset_BANG_.call(null,coordinates,coord);
});})(coordinates))
;
uxbox.pubsub.register_event.call(null,new cljs.core.Keyword(null,"viewport-mouse-move","viewport-mouse-move",1727448203),viewport_move);

return ((function (coordinates,viewport_move){
return (function (){
var vec__21283 = cljs.core.deref.call(null,coordinates);
var mouseX = cljs.core.nth.call(null,vec__21283,(0),null);
var mouseY = cljs.core.nth.call(null,vec__21283,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),{"position": "absolute", "left": "80px", "top": "20px"}], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"X:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mouseX], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Y:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mouseY], null)], null)], null)], null);
});
;})(coordinates,viewport_move))
});
uxbox.workspace.canvas.views.canvas = (function uxbox$workspace$canvas$views$canvas(db){
var viewport_height = (3000);
var viewport_width = (3000);
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
var page_width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(page);
var page_height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(page);
var document_start_x = ((500) - (page_width / (2)));
var document_start_y = ((750) - (page_height / (2)));
var ids__GT_shapes = ((function (viewport_height,viewport_width,page,page_width,page_height,document_start_x,document_start_y){
return (function (shape_ids){
return cljs.core.filter.call(null,((function (viewport_height,viewport_width,page,page_width,page_height,document_start_x,document_start_y){
return (function (p1__21285_SHARP_){
return !((p1__21285_SHARP_ == null));
});})(viewport_height,viewport_width,page,page_width,page_height,document_start_x,document_start_y))
,cljs.core.map.call(null,((function (viewport_height,viewport_width,page,page_width,page_height,document_start_x,document_start_y){
return (function (p1__21284_SHARP_){
return cljs.core.get_in.call(null,page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),p1__21284_SHARP_], null));
});})(viewport_height,viewport_width,page,page_width,page_height,document_start_x,document_start_y))
,shape_ids));
});})(viewport_height,viewport_width,page,page_width,page_height,document_start_x,document_start_y))
;
var group_svg = ((function (viewport_height,viewport_width,page,page_width,page_height,document_start_x,document_start_y,ids__GT_shapes){
return (function (shapes){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,shapes),(1))){
return uxbox.shapes.core.shape__GT_svg.call(null,cljs.core.first.call(null,shapes));
} else {
return cljs.core.apply.call(null,cljs.core.vector,new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.map.call(null,uxbox.shapes.core.shape__GT_svg,shapes));
}
});})(viewport_height,viewport_width,page,page_width,page_height,document_start_x,document_start_y,ids__GT_shapes))
;
var shapes_svg = cljs.core.map.call(null,group_svg,cljs.core.map.call(null,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.map.call(null,((function (viewport_height,viewport_width,page,page_width,page_height,document_start_x,document_start_y,ids__GT_shapes,group_svg){
return (function (p1__21286_SHARP_){
return cljs.core.update_in.call(null,p1__21286_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),ids__GT_shapes);
});})(viewport_height,viewport_width,page,page_width,page_height,document_start_x,document_start_y,ids__GT_shapes,group_svg))
,cljs.core.filter.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.vals.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(page)))))));
var on_event = ((function (viewport_height,viewport_width,page,page_width,page_height,document_start_x,document_start_y,ids__GT_shapes,group_svg,shapes_svg){
return (function (event_type){
return ((function (viewport_height,viewport_width,page,page_width,page_height,document_start_x,document_start_y,ids__GT_shapes,group_svg,shapes_svg){
return (function (e){
var coords = uxbox.geometry.clientcoord__GT_viewportcord.call(null,e.clientX,e.clientY);
uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type,coords], null));

return e.preventDefault();
});
;})(viewport_height,viewport_width,page,page_width,page_height,document_start_x,document_start_y,ids__GT_shapes,group_svg,shapes_svg))
});})(viewport_height,viewport_width,page,page_width,page_height,document_start_x,document_start_y,ids__GT_shapes,group_svg,shapes_svg))
;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),on_event.call(null,new cljs.core.Keyword(null,"viewport-mouse-move","viewport-mouse-move",1727448203)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_event.call(null,new cljs.core.Keyword(null,"viewport-mouse-click","viewport-mouse-click",-211410445)),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),on_event.call(null,new cljs.core.Keyword(null,"viewport-mouse-down","viewport-mouse-down",2129866564)),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),on_event.call(null,new cljs.core.Keyword(null,"viewport-mouse-up","viewport-mouse-up",1715560585))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.canvas.views.debug_coordinates,db], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg#viewport","svg#viewport",-451652524),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),viewport_height,new cljs.core.Keyword(null,"height","height",1025178622),viewport_width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.canvas.views.horizontal_rule,viewport_width,document_start_x,(100)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.canvas.views.vertical_rule,viewport_height,document_start_y,(100)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg#page-canvas","svg#page-canvas",-290018675),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(50),new cljs.core.Keyword(null,"width","width",-384071477),page_width,new cljs.core.Keyword(null,"height","height",1025178622),page_height], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null)], null),cljs.core.apply.call(null,cljs.core.vector,new cljs.core.Keyword(null,"svg#page-layout","svg#page-layout",535047693),shapes_svg),(function (){var temp__4425__auto__ = cljs.core.get.call(null,page,new cljs.core.Keyword(null,"drawing","drawing",1181749528));
if(cljs.core.truth_(temp__4425__auto__)){
var shape = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.shapes.core.shape__GT_drawing_svg,shape], null);
} else {
return null;
}
})(),(function (){var temp__4425__auto__ = cljs.core.get.call(null,page,new cljs.core.Keyword(null,"selected","selected",574897764));
if(cljs.core.truth_(temp__4425__auto__)){
var selected_uuid = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.shapes.core.shape__GT_selected_svg,cljs.core.get_in.call(null,page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),selected_uuid], null))], null);
} else {
return null;
}
})()], null),(cljs.core.truth_(new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"workspace","workspace",-1096735709).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [uxbox.workspace.canvas.views.grid,viewport_width,viewport_height,document_start_x,document_start_y,(100)], null):null)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1437048688413