// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.geometry');
goog.require('cljs.core');
/**
 * Given the (x1,y1) and (x2,y2) coordinates return the rectangle that
 * define as (top-left corner, width, height)
 */
uxbox.geometry.coords__GT_rect = (function uxbox$geometry$coords__GT_rect(x1,y1,x2,y2){
var rect_x = (((x1 > x2))?x2:x1);
var rect_y = (((y1 > y2))?y2:y1);
var rect_width = (((x1 > x2))?(x1 - x2):(x2 - x1));
var rect_height = (((y1 > y2))?(y1 - y2):(y2 - y1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rect_x,rect_y,rect_width,rect_height], null);
});
uxbox.geometry.clientcoord__GT_viewportcord = (function uxbox$geometry$clientcoord__GT_viewportcord(client_x,client_y){
var temp__4423__auto__ = document.getElementById("page-canvas");
if(cljs.core.truth_(temp__4423__auto__)){
var canvas_element = temp__4423__auto__;
var bounding_rect = canvas_element.getBoundingClientRect();
var offset_x = bounding_rect.left;
var offset_y = bounding_rect.top;
var new_x = (client_x - offset_x);
var new_y = (client_y - offset_y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_x,client_y], null);
}
});
uxbox.geometry.viewportcord__GT_clientcoord = (function uxbox$geometry$viewportcord__GT_clientcoord(viewport_x,viewport_y){
var temp__4423__auto__ = document.getElementById("page-canvas");
if(cljs.core.truth_(temp__4423__auto__)){
var canvas_element = temp__4423__auto__;
var bounding_rect = canvas_element.getBoundingClientRect();
var offset_x = bounding_rect.left;
var offset_y = bounding_rect.top;
var new_x = (viewport_x + offset_x);
var new_y = (viewport_y + offset_y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewport_x,viewport_y], null);
}
});
uxbox.geometry.slope = (function uxbox$geometry$slope(x1,y1,x2,y2){
return ((y1 - y2) / (x1 - x2));
});
uxbox.geometry.distance2 = (function uxbox$geometry$distance2(x1,y1,x2,y2){
var deltax = (x1 - x2);
var deltay = (y1 - y2);
var deltaxsq = (deltax * deltax);
var deltaysq = (deltay * deltay);
return (deltaxsq + deltaysq);
});
uxbox.geometry.distance = (function uxbox$geometry$distance(x1,y1,x2,y2){
return Math.sqrt(uxbox.geometry.distance2.call(null,x1,y1,x2,y2));
});
uxbox.geometry.distance_line_point2 = (function uxbox$geometry$distance_line_point2(vx,vy,wx,wy,px,py){
var l2 = uxbox.geometry.distance2.call(null,vx,vy,wx,wy);
if(cljs.core._EQ_.call(null,l2,(0))){
return uxbox.geometry.distance2.call(null,px,py,vx,vy);
} else {
var t = ((((px - vx) * (wx - vx)) + ((py - vy) * (wy - vy))) / l2);
if((t < (0))){
return uxbox.geometry.distance2.call(null,px,py,vx,vy);
} else {
if((t > (1))){
return uxbox.geometry.distance2.call(null,px,py,wx,wy);
} else {
var newx = (vx + (t * (wx - vx)));
var newy = (vy + (t * (wy - vy)));
return uxbox.geometry.distance2.call(null,px,py,newx,newy);

}
}
}
});
uxbox.geometry.distance_line_point = (function uxbox$geometry$distance_line_point(vx,vy,wx,wy,px,py){
return Math.sqrt(uxbox.geometry.distance_line_point2.call(null,vx,vy,wx,wy,px,py));
});
uxbox.geometry.distance_line_circle = (function uxbox$geometry$distance_line_circle(cx,cy,r,px,py){
var d = uxbox.geometry.distance.call(null,cx,cy,px,py);
return (d - r);
});

//# sourceMappingURL=geometry.js.map?rel=1437028480552