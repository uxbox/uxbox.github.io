// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.shapes.core');
goog.require('cljs.core');
goog.require('uxbox.pubsub');
goog.require('uxbox.geometry');
goog.require('cljs.reader');
goog.require('reagent.core');

uxbox.shapes.core.Shape = (function (){var obj22906 = {};
return obj22906;
})();

/**
 * Retrieves true when the point (px, py) is inside the shape
 */
uxbox.shapes.core.intersect = (function uxbox$shapes$core$intersect(shape,px,py){
if((function (){var and__18125__auto__ = shape;
if(and__18125__auto__){
return shape.uxbox$shapes$core$Shape$intersect$arity$3;
} else {
return and__18125__auto__;
}
})()){
return shape.uxbox$shapes$core$Shape$intersect$arity$3(shape,px,py);
} else {
var x__18773__auto__ = (((shape == null))?null:shape);
return (function (){var or__18137__auto__ = (uxbox.shapes.core.intersect[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (uxbox.shapes.core.intersect["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Shape.intersect",shape);
}
}
})().call(null,shape,px,py);
}
});

/**
 * Retrieves a pair of coordinates (px, py) where the toolbar has to be displayed for this shape
 */
uxbox.shapes.core.toolbar_coords = (function uxbox$shapes$core$toolbar_coords(shape){
if((function (){var and__18125__auto__ = shape;
if(and__18125__auto__){
return shape.uxbox$shapes$core$Shape$toolbar_coords$arity$1;
} else {
return and__18125__auto__;
}
})()){
return shape.uxbox$shapes$core$Shape$toolbar_coords$arity$1(shape);
} else {
var x__18773__auto__ = (((shape == null))?null:shape);
return (function (){var or__18137__auto__ = (uxbox.shapes.core.toolbar_coords[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (uxbox.shapes.core.toolbar_coords["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Shape.toolbar-coords",shape);
}
}
})().call(null,shape);
}
});

/**
 * Returns the markup for the SVG of static shape
 */
uxbox.shapes.core.shape__GT_svg = (function uxbox$shapes$core$shape__GT_svg(shape){
if((function (){var and__18125__auto__ = shape;
if(and__18125__auto__){
return shape.uxbox$shapes$core$Shape$shape__GT_svg$arity$1;
} else {
return and__18125__auto__;
}
})()){
return shape.uxbox$shapes$core$Shape$shape__GT_svg$arity$1(shape);
} else {
var x__18773__auto__ = (((shape == null))?null:shape);
return (function (){var or__18137__auto__ = (uxbox.shapes.core.shape__GT_svg[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (uxbox.shapes.core.shape__GT_svg["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Shape.shape->svg",shape);
}
}
})().call(null,shape);
}
});

/**
 * Returns the markup for the SVG of the elements selecting the shape
 */
uxbox.shapes.core.shape__GT_selected_svg = (function uxbox$shapes$core$shape__GT_selected_svg(shape){
if((function (){var and__18125__auto__ = shape;
if(and__18125__auto__){
return shape.uxbox$shapes$core$Shape$shape__GT_selected_svg$arity$1;
} else {
return and__18125__auto__;
}
})()){
return shape.uxbox$shapes$core$Shape$shape__GT_selected_svg$arity$1(shape);
} else {
var x__18773__auto__ = (((shape == null))?null:shape);
return (function (){var or__18137__auto__ = (uxbox.shapes.core.shape__GT_selected_svg[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (uxbox.shapes.core.shape__GT_selected_svg["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Shape.shape->selected-svg",shape);
}
}
})().call(null,shape);
}
});

/**
 * Returns the markup for the SVG of the shape while is bein drawed
 */
uxbox.shapes.core.shape__GT_drawing_svg = (function uxbox$shapes$core$shape__GT_drawing_svg(shape){
if((function (){var and__18125__auto__ = shape;
if(and__18125__auto__){
return shape.uxbox$shapes$core$Shape$shape__GT_drawing_svg$arity$1;
} else {
return and__18125__auto__;
}
})()){
return shape.uxbox$shapes$core$Shape$shape__GT_drawing_svg$arity$1(shape);
} else {
var x__18773__auto__ = (((shape == null))?null:shape);
return (function (){var or__18137__auto__ = (uxbox.shapes.core.shape__GT_drawing_svg[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (uxbox.shapes.core.shape__GT_drawing_svg["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Shape.shape->drawing-svg",shape);
}
}
})().call(null,shape);
}
});

/**
 * Moves the shape to an increment given by the delta-x and delta-y coordinates
 */
uxbox.shapes.core.move_delta = (function uxbox$shapes$core$move_delta(shape,delta_x,delta_y){
if((function (){var and__18125__auto__ = shape;
if(and__18125__auto__){
return shape.uxbox$shapes$core$Shape$move_delta$arity$3;
} else {
return and__18125__auto__;
}
})()){
return shape.uxbox$shapes$core$Shape$move_delta$arity$3(shape,delta_x,delta_y);
} else {
var x__18773__auto__ = (((shape == null))?null:shape);
return (function (){var or__18137__auto__ = (uxbox.shapes.core.move_delta[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (uxbox.shapes.core.move_delta["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Shape.move-delta",shape);
}
}
})().call(null,shape,delta_x,delta_y);
}
});

uxbox.shapes.core.generate_transformation = (function uxbox$shapes$core$generate_transformation(p__22907){
var map__22909 = p__22907;
var map__22909__$1 = ((cljs.core.seq_QMARK_.call(null,map__22909))?cljs.core.apply.call(null,cljs.core.hash_map,map__22909):map__22909);
var rotate = cljs.core.get.call(null,map__22909__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var center = cljs.core.get.call(null,map__22909__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(center);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(center);
return [cljs.core.str("translate( "),cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y),cljs.core.str(") rotate("),cljs.core.str(rotate),cljs.core.str(") translate( -"),cljs.core.str(x),cljs.core.str(" -"),cljs.core.str(y),cljs.core.str(")")].join('');
});

/**
* @constructor
* @param {*} x1
* @param {*} y1
* @param {*} x2
* @param {*} y2
* @param {*} stroke
* @param {*} stroke_width
* @param {*} stroke_opacity
* @param {*} rotate
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
uxbox.shapes.core.Line = (function (x1,y1,x2,y2,stroke,stroke_width,stroke_opacity,rotate,__meta,__extmap,__hash){
this.x1 = x1;
this.y1 = y1;
this.x2 = x2;
this.y2 = y2;
this.stroke = stroke;
this.stroke_width = stroke_width;
this.stroke_opacity = stroke_opacity;
this.rotate = rotate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
uxbox.shapes.core.Line.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18732__auto__,k__18733__auto__){
var self__ = this;
var this__18732__auto____$1 = this;
return cljs.core._lookup.call(null,this__18732__auto____$1,k__18733__auto__,null);
});

uxbox.shapes.core.Line.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18734__auto__,k22911,else__18735__auto__){
var self__ = this;
var this__18734__auto____$1 = this;
var G__22913 = (((k22911 instanceof cljs.core.Keyword))?k22911.fqn:null);
switch (G__22913) {
case "x1":
return self__.x1;

break;
case "y1":
return self__.y1;

break;
case "x2":
return self__.x2;

break;
case "y2":
return self__.y2;

break;
case "stroke":
return self__.stroke;

break;
case "stroke-width":
return self__.stroke_width;

break;
case "stroke-opacity":
return self__.stroke_opacity;

break;
case "rotate":
return self__.rotate;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22911,else__18735__auto__);

}
});

uxbox.shapes.core.Line.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18746__auto__,writer__18747__auto__,opts__18748__auto__){
var self__ = this;
var this__18746__auto____$1 = this;
var pr_pair__18749__auto__ = ((function (this__18746__auto____$1){
return (function (keyval__18750__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18747__auto__,cljs.core.pr_writer,""," ","",opts__18748__auto__,keyval__18750__auto__);
});})(this__18746__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18747__auto__,pr_pair__18749__auto__,"#uxbox.shapes.core.Line{",", ","}",opts__18748__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x1","x1",-1863922247),self__.x1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y1","y1",589123466),self__.y1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x2","x2",-1362513475),self__.x2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y2","y2",-718691301),self__.y2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke","stroke",1741823555),self__.stroke],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),self__.stroke_width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),self__.stroke_opacity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rotate","rotate",152705015),self__.rotate],null))], null),self__.__extmap));
});

uxbox.shapes.core.Line.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18730__auto__){
var self__ = this;
var this__18730__auto____$1 = this;
return self__.__meta;
});

uxbox.shapes.core.Line.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18726__auto__){
var self__ = this;
var this__18726__auto____$1 = this;
return (new uxbox.shapes.core.Line(self__.x1,self__.y1,self__.x2,self__.y2,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,self__.__hash));
});

uxbox.shapes.core.Line.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18736__auto__){
var self__ = this;
var this__18736__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

uxbox.shapes.core.Line.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18727__auto__){
var self__ = this;
var this__18727__auto____$1 = this;
var h__18553__auto__ = self__.__hash;
if(!((h__18553__auto__ == null))){
return h__18553__auto__;
} else {
var h__18553__auto____$1 = cljs.core.hash_imap.call(null,this__18727__auto____$1);
self__.__hash = h__18553__auto____$1;

return h__18553__auto____$1;
}
});

uxbox.shapes.core.Line.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18728__auto__,other__18729__auto__){
var self__ = this;
var this__18728__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18125__auto__ = other__18729__auto__;
if(cljs.core.truth_(and__18125__auto__)){
var and__18125__auto____$1 = (this__18728__auto____$1.constructor === other__18729__auto__.constructor);
if(and__18125__auto____$1){
return cljs.core.equiv_map.call(null,this__18728__auto____$1,other__18729__auto__);
} else {
return and__18125__auto____$1;
}
} else {
return and__18125__auto__;
}
})())){
return true;
} else {
return false;
}
});

uxbox.shapes.core.Line.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18741__auto__,k__18742__auto__){
var self__ = this;
var this__18741__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),null,new cljs.core.Keyword(null,"y1","y1",589123466),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null,new cljs.core.Keyword(null,"rotate","rotate",152705015),null,new cljs.core.Keyword(null,"x1","x1",-1863922247),null,new cljs.core.Keyword(null,"y2","y2",-718691301),null,new cljs.core.Keyword(null,"x2","x2",-1362513475),null], null), null),k__18742__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18741__auto____$1),self__.__meta),k__18742__auto__);
} else {
return (new uxbox.shapes.core.Line(self__.x1,self__.y1,self__.x2,self__.y2,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18742__auto__)),null));
}
});

uxbox.shapes.core.Line.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18739__auto__,k__18740__auto__,G__22910){
var self__ = this;
var this__18739__auto____$1 = this;
var pred__22914 = cljs.core.keyword_identical_QMARK_;
var expr__22915 = k__18740__auto__;
if(cljs.core.truth_(pred__22914.call(null,new cljs.core.Keyword(null,"x1","x1",-1863922247),expr__22915))){
return (new uxbox.shapes.core.Line(G__22910,self__.y1,self__.x2,self__.y2,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22914.call(null,new cljs.core.Keyword(null,"y1","y1",589123466),expr__22915))){
return (new uxbox.shapes.core.Line(self__.x1,G__22910,self__.x2,self__.y2,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22914.call(null,new cljs.core.Keyword(null,"x2","x2",-1362513475),expr__22915))){
return (new uxbox.shapes.core.Line(self__.x1,self__.y1,G__22910,self__.y2,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22914.call(null,new cljs.core.Keyword(null,"y2","y2",-718691301),expr__22915))){
return (new uxbox.shapes.core.Line(self__.x1,self__.y1,self__.x2,G__22910,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22914.call(null,new cljs.core.Keyword(null,"stroke","stroke",1741823555),expr__22915))){
return (new uxbox.shapes.core.Line(self__.x1,self__.y1,self__.x2,self__.y2,G__22910,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22914.call(null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),expr__22915))){
return (new uxbox.shapes.core.Line(self__.x1,self__.y1,self__.x2,self__.y2,self__.stroke,G__22910,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22914.call(null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),expr__22915))){
return (new uxbox.shapes.core.Line(self__.x1,self__.y1,self__.x2,self__.y2,self__.stroke,self__.stroke_width,G__22910,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22914.call(null,new cljs.core.Keyword(null,"rotate","rotate",152705015),expr__22915))){
return (new uxbox.shapes.core.Line(self__.x1,self__.y1,self__.x2,self__.y2,self__.stroke,self__.stroke_width,self__.stroke_opacity,G__22910,self__.__meta,self__.__extmap,null));
} else {
return (new uxbox.shapes.core.Line(self__.x1,self__.y1,self__.x2,self__.y2,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18740__auto__,G__22910),null));
}
}
}
}
}
}
}
}
});

uxbox.shapes.core.Line.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18744__auto__){
var self__ = this;
var this__18744__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x1","x1",-1863922247),self__.x1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y1","y1",589123466),self__.y1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x2","x2",-1362513475),self__.x2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y2","y2",-718691301),self__.y2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke","stroke",1741823555),self__.stroke],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),self__.stroke_width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),self__.stroke_opacity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rotate","rotate",152705015),self__.rotate],null))], null),self__.__extmap));
});

uxbox.shapes.core.Line.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18731__auto__,G__22910){
var self__ = this;
var this__18731__auto____$1 = this;
return (new uxbox.shapes.core.Line(self__.x1,self__.y1,self__.x2,self__.y2,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,G__22910,self__.__extmap,self__.__hash));
});

uxbox.shapes.core.Line.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18737__auto__,entry__18738__auto__){
var self__ = this;
var this__18737__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18738__auto__)){
return cljs.core._assoc.call(null,this__18737__auto____$1,cljs.core._nth.call(null,entry__18738__auto__,(0)),cljs.core._nth.call(null,entry__18738__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18737__auto____$1,entry__18738__auto__);
}
});

uxbox.shapes.core.Line.prototype.uxbox$shapes$core$Shape$ = true;

uxbox.shapes.core.Line.prototype.uxbox$shapes$core$Shape$intersect$arity$3 = (function (p__22917,px,py){
var self__ = this;
var map__22918 = p__22917;
var map__22918__$1 = ((cljs.core.seq_QMARK_.call(null,map__22918))?cljs.core.apply.call(null,cljs.core.hash_map,map__22918):map__22918);
var x1__$1 = cljs.core.get.call(null,map__22918__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1__$1 = cljs.core.get.call(null,map__22918__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2__$1 = cljs.core.get.call(null,map__22918__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2__$1 = cljs.core.get.call(null,map__22918__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var map__22919 = this;
var map__22919__$1 = ((cljs.core.seq_QMARK_.call(null,map__22919))?cljs.core.apply.call(null,cljs.core.hash_map,map__22919):map__22919);
var x1__$2 = cljs.core.get.call(null,map__22919__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1__$2 = cljs.core.get.call(null,map__22919__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2__$2 = cljs.core.get.call(null,map__22919__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2__$2 = cljs.core.get.call(null,map__22919__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var distance = uxbox.geometry.distance_line_point.call(null,x1__$2,y1__$2,x2__$2,y2__$2,px,py);
return (distance <= (15));
});

uxbox.shapes.core.Line.prototype.uxbox$shapes$core$Shape$toolbar_coords$arity$1 = (function (p__22920){
var self__ = this;
var map__22921 = p__22920;
var map__22921__$1 = ((cljs.core.seq_QMARK_.call(null,map__22921))?cljs.core.apply.call(null,cljs.core.hash_map,map__22921):map__22921);
var x1__$1 = cljs.core.get.call(null,map__22921__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1__$1 = cljs.core.get.call(null,map__22921__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2__$1 = cljs.core.get.call(null,map__22921__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2__$1 = cljs.core.get.call(null,map__22921__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var map__22922 = this;
var map__22922__$1 = ((cljs.core.seq_QMARK_.call(null,map__22922))?cljs.core.apply.call(null,cljs.core.hash_map,map__22922):map__22922);
var x1__$2 = cljs.core.get.call(null,map__22922__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1__$2 = cljs.core.get.call(null,map__22922__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2__$2 = cljs.core.get.call(null,map__22922__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2__$2 = cljs.core.get.call(null,map__22922__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var max_x = (((x1__$2 > x2__$2))?x1__$2:x2__$2);
var min_y = (((y1__$2 < y2__$2))?y1__$2:y2__$2);
var vx = (max_x + (50));
var vy = min_y;
return uxbox.geometry.viewportcord__GT_clientcoord.call(null,vx,vy);
});

uxbox.shapes.core.Line.prototype.uxbox$shapes$core$Shape$shape__GT_svg$arity$1 = (function (p__22923){
var self__ = this;
var map__22924 = p__22923;
var map__22924__$1 = ((cljs.core.seq_QMARK_.call(null,map__22924))?cljs.core.apply.call(null,cljs.core.hash_map,map__22924):map__22924);
var x1__$1 = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1__$1 = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2__$1 = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2__$1 = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var stroke__$1 = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var stroke_width__$1 = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var stroke_opacity__$1 = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159));
var rotate__$1 = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var map__22925 = this;
var map__22925__$1 = ((cljs.core.seq_QMARK_.call(null,map__22925))?cljs.core.apply.call(null,cljs.core.hash_map,map__22925):map__22925);
var x1__$2 = cljs.core.get.call(null,map__22925__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1__$2 = cljs.core.get.call(null,map__22925__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2__$2 = cljs.core.get.call(null,map__22925__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2__$2 = cljs.core.get.call(null,map__22925__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var stroke__$2 = cljs.core.get.call(null,map__22925__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var stroke_width__$2 = cljs.core.get.call(null,map__22925__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var stroke_opacity__$2 = cljs.core.get.call(null,map__22925__$1,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159));
var rotate__$2 = cljs.core.get.call(null,map__22925__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var length_x = uxbox.geometry.distance.call(null,x1__$2,(0),x2__$2,(0));
var length_y = uxbox.geometry.distance.call(null,(0),y1__$2,(0),y2__$2);
var min_x = (function (){var x__18456__auto__ = x1__$2;
var y__18457__auto__ = x2__$2;
return ((x__18456__auto__ < y__18457__auto__) ? x__18456__auto__ : y__18457__auto__);
})();
var min_y = (function (){var x__18456__auto__ = y1__$2;
var y__18457__auto__ = y2__$2;
return ((x__18456__auto__ < y__18457__auto__) ? x__18456__auto__ : y__18457__auto__);
})();
var center_x = (min_x + (length_x / (2)));
var center_y = (min_y + (length_y / (2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x1__$2,new cljs.core.Keyword(null,"y1","y1",589123466),y1__$2,new cljs.core.Keyword(null,"x2","x2",-1362513475),x2__$2,new cljs.core.Keyword(null,"y2","y2",-718691301),y2__$2,new cljs.core.Keyword(null,"stroke","stroke",1741823555),stroke__$2,new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),stroke_width__$2,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),stroke_opacity__$2,new cljs.core.Keyword(null,"transform","transform",1381301764),uxbox.shapes.core.generate_transformation.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotate","rotate",152705015),rotate__$2,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),center_x,new cljs.core.Keyword(null,"y","y",-1757859776),center_y], null)], null))], null)], null);
});

uxbox.shapes.core.Line.prototype.uxbox$shapes$core$Shape$shape__GT_selected_svg$arity$1 = (function (p__22926){
var self__ = this;
var map__22927 = p__22926;
var map__22927__$1 = ((cljs.core.seq_QMARK_.call(null,map__22927))?cljs.core.apply.call(null,cljs.core.hash_map,map__22927):map__22927);
var x1__$1 = cljs.core.get.call(null,map__22927__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1__$1 = cljs.core.get.call(null,map__22927__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2__$1 = cljs.core.get.call(null,map__22927__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2__$1 = cljs.core.get.call(null,map__22927__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var stroke__$1 = cljs.core.get.call(null,map__22927__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var stroke_width__$1 = cljs.core.get.call(null,map__22927__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var stroke_opacity__$1 = cljs.core.get.call(null,map__22927__$1,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159));
var rotate__$1 = cljs.core.get.call(null,map__22927__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var map__22928 = this;
var map__22928__$1 = ((cljs.core.seq_QMARK_.call(null,map__22928))?cljs.core.apply.call(null,cljs.core.hash_map,map__22928):map__22928);
var x1__$2 = cljs.core.get.call(null,map__22928__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1__$2 = cljs.core.get.call(null,map__22928__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2__$2 = cljs.core.get.call(null,map__22928__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2__$2 = cljs.core.get.call(null,map__22928__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var stroke__$2 = cljs.core.get.call(null,map__22928__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var stroke_width__$2 = cljs.core.get.call(null,map__22928__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var stroke_opacity__$2 = cljs.core.get.call(null,map__22928__$1,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159));
var rotate__$2 = cljs.core.get.call(null,map__22928__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var length_x = uxbox.geometry.distance.call(null,x1__$2,(0),x2__$2,(0));
var length_y = uxbox.geometry.distance.call(null,(0),y1__$2,(0),y2__$2);
var min_x = (function (){var x__18456__auto__ = x1__$2;
var y__18457__auto__ = x2__$2;
return ((x__18456__auto__ < y__18457__auto__) ? x__18456__auto__ : y__18457__auto__);
})();
var min_y = (function (){var x__18456__auto__ = y1__$2;
var y__18457__auto__ = y2__$2;
return ((x__18456__auto__ < y__18457__auto__) ? x__18456__auto__ : y__18457__auto__);
})();
var center_x = (min_x + (length_x / (2)));
var center_y = (min_y + (length_y / (2)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),uxbox.shapes.core.generate_transformation.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotate","rotate",152705015),rotate__$2,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),center_x,new cljs.core.Keyword(null,"y","y",-1757859776),center_y], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(x1__$2 - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y1__$2 - (4)),new cljs.core.Keyword(null,"width","width",-384071477),(8),new cljs.core.Keyword(null,"height","height",1025178622),(8),new cljs.core.Keyword(null,"fill","fill",883462889),"#4af7c3",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),"0.75"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(x2__$2 - (4)),new cljs.core.Keyword(null,"y","y",-1757859776),(y2__$2 - (4)),new cljs.core.Keyword(null,"width","width",-384071477),(8),new cljs.core.Keyword(null,"height","height",1025178622),(8),new cljs.core.Keyword(null,"fill","fill",883462889),"#4af7c3",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),"0.75"], null)], null)], null);
});

uxbox.shapes.core.Line.prototype.uxbox$shapes$core$Shape$shape__GT_drawing_svg$arity$1 = (function (p__22929){
var self__ = this;
var map__22930 = p__22929;
var map__22930__$1 = ((cljs.core.seq_QMARK_.call(null,map__22930))?cljs.core.apply.call(null,cljs.core.hash_map,map__22930):map__22930);
var x1__$1 = cljs.core.get.call(null,map__22930__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1__$1 = cljs.core.get.call(null,map__22930__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2__$1 = cljs.core.get.call(null,map__22930__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2__$1 = cljs.core.get.call(null,map__22930__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var map__22931 = this;
var map__22931__$1 = ((cljs.core.seq_QMARK_.call(null,map__22931))?cljs.core.apply.call(null,cljs.core.hash_map,map__22931):map__22931);
var x1__$2 = cljs.core.get.call(null,map__22931__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1__$2 = cljs.core.get.call(null,map__22931__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2__$2 = cljs.core.get.call(null,map__22931__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2__$2 = cljs.core.get.call(null,map__22931__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var coordinates1 = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1__$2,y1__$2], null));
var coordinates2 = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2__$2,y2__$2], null));
var viewport_move = ((function (coordinates1,coordinates2,map__22931,map__22931__$1,x1__$2,y1__$2,x2__$2,y2__$2,map__22930,map__22930__$1,x1__$1,y1__$1,x2__$1,y2__$1){
return (function (state,coords){
return cljs.core.reset_BANG_.call(null,coordinates2,coords);
});})(coordinates1,coordinates2,map__22931,map__22931__$1,x1__$2,y1__$2,x2__$2,y2__$2,map__22930,map__22930__$1,x1__$1,y1__$1,x2__$1,y2__$1))
;
uxbox.pubsub.register_event.call(null,new cljs.core.Keyword(null,"viewport-mouse-move","viewport-mouse-move",1727448203),viewport_move);

return ((function (coordinates1,coordinates2,viewport_move,map__22931,map__22931__$1,x1__$2,y1__$2,x2__$2,y2__$2,map__22930,map__22930__$1,x1__$1,y1__$1,x2__$1,y2__$1){
return (function (){
var vec__22932 = cljs.core.deref.call(null,coordinates2);
var mouseX = cljs.core.nth.call(null,vec__22932,(0),null);
var mouseY = cljs.core.nth.call(null,vec__22932,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x1__$2,new cljs.core.Keyword(null,"y1","y1",589123466),y1__$2,new cljs.core.Keyword(null,"x2","x2",-1362513475),mouseX,new cljs.core.Keyword(null,"y2","y2",-718691301),mouseY,new cljs.core.Keyword(null,"style","style",-496642736),{"fill": "transparent", "stroke": "gray", "stroke-width": (2), "strokeDasharray": "5,5"}], null)], null);
});
;})(coordinates1,coordinates2,viewport_move,map__22931,map__22931__$1,x1__$2,y1__$2,x2__$2,y2__$2,map__22930,map__22930__$1,x1__$1,y1__$1,x2__$1,y2__$1))
});

uxbox.shapes.core.Line.prototype.uxbox$shapes$core$Shape$move_delta$arity$3 = (function (p__22933,delta_x,delta_y){
var self__ = this;
var map__22934 = p__22933;
var map__22934__$1 = ((cljs.core.seq_QMARK_.call(null,map__22934))?cljs.core.apply.call(null,cljs.core.hash_map,map__22934):map__22934);
var shape = map__22934__$1;
var x1__$1 = cljs.core.get.call(null,map__22934__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1__$1 = cljs.core.get.call(null,map__22934__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2__$1 = cljs.core.get.call(null,map__22934__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2__$1 = cljs.core.get.call(null,map__22934__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var map__22935 = this;
var map__22935__$1 = ((cljs.core.seq_QMARK_.call(null,map__22935))?cljs.core.apply.call(null,cljs.core.hash_map,map__22935):map__22935);
var shape__$1 = map__22935__$1;
var x1__$2 = cljs.core.get.call(null,map__22935__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1__$2 = cljs.core.get.call(null,map__22935__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2__$2 = cljs.core.get.call(null,map__22935__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2__$2 = cljs.core.get.call(null,map__22935__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,shape__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),(x1__$2 + delta_x)),new cljs.core.Keyword(null,"y1","y1",589123466),(y1__$2 + delta_y)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(x2__$2 + delta_x)),new cljs.core.Keyword(null,"y2","y2",-718691301),(y2__$2 + delta_y));
});

uxbox.shapes.core.Line.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x1","x1",-223390720,null),new cljs.core.Symbol(null,"y1","y1",-2065312303,null),new cljs.core.Symbol(null,"x2","x2",278018052,null),new cljs.core.Symbol(null,"y2","y2",921840226,null),new cljs.core.Symbol(null,"stroke","stroke",-912612214,null),new cljs.core.Symbol(null,"stroke-width","stroke-width",-1937599334,null),new cljs.core.Symbol(null,"stroke-opacity","stroke-opacity",448988368,null),new cljs.core.Symbol(null,"rotate","rotate",1793236542,null)], null);
});

uxbox.shapes.core.Line.cljs$lang$type = true;

uxbox.shapes.core.Line.cljs$lang$ctorPrSeq = (function (this__18766__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"uxbox.shapes.core/Line");
});

uxbox.shapes.core.Line.cljs$lang$ctorPrWriter = (function (this__18766__auto__,writer__18767__auto__){
return cljs.core._write.call(null,writer__18767__auto__,"uxbox.shapes.core/Line");
});

uxbox.shapes.core.__GT_Line = (function uxbox$shapes$core$__GT_Line(x1,y1,x2,y2,stroke,stroke_width,stroke_opacity,rotate){
return (new uxbox.shapes.core.Line(x1,y1,x2,y2,stroke,stroke_width,stroke_opacity,rotate,null,null,null));
});

uxbox.shapes.core.map__GT_Line = (function uxbox$shapes$core$map__GT_Line(G__22912){
return (new uxbox.shapes.core.Line(new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(G__22912),new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(G__22912),new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(G__22912),new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(G__22912),new cljs.core.Keyword(null,"stroke","stroke",1741823555).cljs$core$IFn$_invoke$arity$1(G__22912),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$1(G__22912),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159).cljs$core$IFn$_invoke$arity$1(G__22912),new cljs.core.Keyword(null,"rotate","rotate",152705015).cljs$core$IFn$_invoke$arity$1(G__22912),null,cljs.core.dissoc.call(null,G__22912,new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"rotate","rotate",152705015)),null));
});

/**
 * Retrieves a line with the default parameters
 */
uxbox.shapes.core.new_line = (function uxbox$shapes$core$new_line(x1,y1,x2,y2){
return (new uxbox.shapes.core.Line(x1,y1,x2,y2,"gray",(4),(1),(0),null,null,null));
});

/**
* @constructor
* @param {*} x
* @param {*} y
* @param {*} width
* @param {*} height
* @param {*} rx
* @param {*} ry
* @param {*} fill
* @param {*} fill_opacity
* @param {*} stroke
* @param {*} stroke_width
* @param {*} stroke_opacity
* @param {*} rotate
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
uxbox.shapes.core.Rectangle = (function (x,y,width,height,rx,ry,fill,fill_opacity,stroke,stroke_width,stroke_opacity,rotate,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.rx = rx;
this.ry = ry;
this.fill = fill;
this.fill_opacity = fill_opacity;
this.stroke = stroke;
this.stroke_width = stroke_width;
this.stroke_opacity = stroke_opacity;
this.rotate = rotate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
uxbox.shapes.core.Rectangle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18732__auto__,k__18733__auto__){
var self__ = this;
var this__18732__auto____$1 = this;
return cljs.core._lookup.call(null,this__18732__auto____$1,k__18733__auto__,null);
});

uxbox.shapes.core.Rectangle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18734__auto__,k22938,else__18735__auto__){
var self__ = this;
var this__18734__auto____$1 = this;
var G__22940 = (((k22938 instanceof cljs.core.Keyword))?k22938.fqn:null);
switch (G__22940) {
case "y":
return self__.y;

break;
case "rx":
return self__.rx;

break;
case "stroke":
return self__.stroke;

break;
case "stroke-opacity":
return self__.stroke_opacity;

break;
case "fill":
return self__.fill;

break;
case "width":
return self__.width;

break;
case "stroke-width":
return self__.stroke_width;

break;
case "rotate":
return self__.rotate;

break;
case "x":
return self__.x;

break;
case "ry":
return self__.ry;

break;
case "fill-opacity":
return self__.fill_opacity;

break;
case "height":
return self__.height;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22938,else__18735__auto__);

}
});

uxbox.shapes.core.Rectangle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18746__auto__,writer__18747__auto__,opts__18748__auto__){
var self__ = this;
var this__18746__auto____$1 = this;
var pr_pair__18749__auto__ = ((function (this__18746__auto____$1){
return (function (keyval__18750__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18747__auto__,cljs.core.pr_writer,""," ","",opts__18748__auto__,keyval__18750__auto__);
});})(this__18746__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18747__auto__,pr_pair__18749__auto__,"#uxbox.shapes.core.Rectangle{",", ","}",opts__18748__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),self__.fill_opacity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke","stroke",1741823555),self__.stroke],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),self__.stroke_width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),self__.stroke_opacity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rotate","rotate",152705015),self__.rotate],null))], null),self__.__extmap));
});

uxbox.shapes.core.Rectangle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18730__auto__){
var self__ = this;
var this__18730__auto____$1 = this;
return self__.__meta;
});

uxbox.shapes.core.Rectangle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18726__auto__){
var self__ = this;
var this__18726__auto____$1 = this;
return (new uxbox.shapes.core.Rectangle(self__.x,self__.y,self__.width,self__.height,self__.rx,self__.ry,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,self__.__hash));
});

uxbox.shapes.core.Rectangle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18736__auto__){
var self__ = this;
var this__18736__auto____$1 = this;
return (12 + cljs.core.count.call(null,self__.__extmap));
});

uxbox.shapes.core.Rectangle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18727__auto__){
var self__ = this;
var this__18727__auto____$1 = this;
var h__18553__auto__ = self__.__hash;
if(!((h__18553__auto__ == null))){
return h__18553__auto__;
} else {
var h__18553__auto____$1 = cljs.core.hash_imap.call(null,this__18727__auto____$1);
self__.__hash = h__18553__auto____$1;

return h__18553__auto____$1;
}
});

uxbox.shapes.core.Rectangle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18728__auto__,other__18729__auto__){
var self__ = this;
var this__18728__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18125__auto__ = other__18729__auto__;
if(cljs.core.truth_(and__18125__auto__)){
var and__18125__auto____$1 = (this__18728__auto____$1.constructor === other__18729__auto__.constructor);
if(and__18125__auto____$1){
return cljs.core.equiv_map.call(null,this__18728__auto____$1,other__18729__auto__);
} else {
return and__18125__auto____$1;
}
} else {
return and__18125__auto__;
}
})())){
return true;
} else {
return false;
}
});

uxbox.shapes.core.Rectangle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18741__auto__,k__18742__auto__){
var self__ = this;
var this__18741__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"rx","rx",1627208482),null,new cljs.core.Keyword(null,"stroke","stroke",1741823555),null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null,new cljs.core.Keyword(null,"rotate","rotate",152705015),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"ry","ry",-334598563),null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__18742__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18741__auto____$1),self__.__meta),k__18742__auto__);
} else {
return (new uxbox.shapes.core.Rectangle(self__.x,self__.y,self__.width,self__.height,self__.rx,self__.ry,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18742__auto__)),null));
}
});

uxbox.shapes.core.Rectangle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18739__auto__,k__18740__auto__,G__22937){
var self__ = this;
var this__18739__auto____$1 = this;
var pred__22941 = cljs.core.keyword_identical_QMARK_;
var expr__22942 = k__18740__auto__;
if(cljs.core.truth_(pred__22941.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__22942))){
return (new uxbox.shapes.core.Rectangle(G__22937,self__.y,self__.width,self__.height,self__.rx,self__.ry,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22941.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__22942))){
return (new uxbox.shapes.core.Rectangle(self__.x,G__22937,self__.width,self__.height,self__.rx,self__.ry,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22941.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__22942))){
return (new uxbox.shapes.core.Rectangle(self__.x,self__.y,G__22937,self__.height,self__.rx,self__.ry,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22941.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__22942))){
return (new uxbox.shapes.core.Rectangle(self__.x,self__.y,self__.width,G__22937,self__.rx,self__.ry,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22941.call(null,new cljs.core.Keyword(null,"rx","rx",1627208482),expr__22942))){
return (new uxbox.shapes.core.Rectangle(self__.x,self__.y,self__.width,self__.height,G__22937,self__.ry,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22941.call(null,new cljs.core.Keyword(null,"ry","ry",-334598563),expr__22942))){
return (new uxbox.shapes.core.Rectangle(self__.x,self__.y,self__.width,self__.height,self__.rx,G__22937,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22941.call(null,new cljs.core.Keyword(null,"fill","fill",883462889),expr__22942))){
return (new uxbox.shapes.core.Rectangle(self__.x,self__.y,self__.width,self__.height,self__.rx,self__.ry,G__22937,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22941.call(null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),expr__22942))){
return (new uxbox.shapes.core.Rectangle(self__.x,self__.y,self__.width,self__.height,self__.rx,self__.ry,self__.fill,G__22937,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22941.call(null,new cljs.core.Keyword(null,"stroke","stroke",1741823555),expr__22942))){
return (new uxbox.shapes.core.Rectangle(self__.x,self__.y,self__.width,self__.height,self__.rx,self__.ry,self__.fill,self__.fill_opacity,G__22937,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22941.call(null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),expr__22942))){
return (new uxbox.shapes.core.Rectangle(self__.x,self__.y,self__.width,self__.height,self__.rx,self__.ry,self__.fill,self__.fill_opacity,self__.stroke,G__22937,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22941.call(null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),expr__22942))){
return (new uxbox.shapes.core.Rectangle(self__.x,self__.y,self__.width,self__.height,self__.rx,self__.ry,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,G__22937,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22941.call(null,new cljs.core.Keyword(null,"rotate","rotate",152705015),expr__22942))){
return (new uxbox.shapes.core.Rectangle(self__.x,self__.y,self__.width,self__.height,self__.rx,self__.ry,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,G__22937,self__.__meta,self__.__extmap,null));
} else {
return (new uxbox.shapes.core.Rectangle(self__.x,self__.y,self__.width,self__.height,self__.rx,self__.ry,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18740__auto__,G__22937),null));
}
}
}
}
}
}
}
}
}
}
}
}
});

uxbox.shapes.core.Rectangle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18744__auto__){
var self__ = this;
var this__18744__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),self__.fill_opacity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke","stroke",1741823555),self__.stroke],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),self__.stroke_width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),self__.stroke_opacity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rotate","rotate",152705015),self__.rotate],null))], null),self__.__extmap));
});

uxbox.shapes.core.Rectangle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18731__auto__,G__22937){
var self__ = this;
var this__18731__auto____$1 = this;
return (new uxbox.shapes.core.Rectangle(self__.x,self__.y,self__.width,self__.height,self__.rx,self__.ry,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,G__22937,self__.__extmap,self__.__hash));
});

uxbox.shapes.core.Rectangle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18737__auto__,entry__18738__auto__){
var self__ = this;
var this__18737__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18738__auto__)){
return cljs.core._assoc.call(null,this__18737__auto____$1,cljs.core._nth.call(null,entry__18738__auto__,(0)),cljs.core._nth.call(null,entry__18738__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18737__auto____$1,entry__18738__auto__);
}
});

uxbox.shapes.core.Rectangle.prototype.uxbox$shapes$core$Shape$ = true;

uxbox.shapes.core.Rectangle.prototype.uxbox$shapes$core$Shape$intersect$arity$3 = (function (p__22944,px,py){
var self__ = this;
var map__22945 = p__22944;
var map__22945__$1 = ((cljs.core.seq_QMARK_.call(null,map__22945))?cljs.core.apply.call(null,cljs.core.hash_map,map__22945):map__22945);
var x__$1 = cljs.core.get.call(null,map__22945__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.call(null,map__22945__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width__$1 = cljs.core.get.call(null,map__22945__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$1 = cljs.core.get.call(null,map__22945__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__22946 = this;
var map__22946__$1 = ((cljs.core.seq_QMARK_.call(null,map__22946))?cljs.core.apply.call(null,cljs.core.hash_map,map__22946):map__22946);
var x__$2 = cljs.core.get.call(null,map__22946__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$2 = cljs.core.get.call(null,map__22946__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width__$2 = cljs.core.get.call(null,map__22946__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$2 = cljs.core.get.call(null,map__22946__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return ((px >= x__$2)) && ((px <= (x__$2 + width__$2))) && ((py >= y__$2)) && ((py <= (y__$2 + height__$2)));
});

uxbox.shapes.core.Rectangle.prototype.uxbox$shapes$core$Shape$toolbar_coords$arity$1 = (function (p__22947){
var self__ = this;
var map__22948 = p__22947;
var map__22948__$1 = ((cljs.core.seq_QMARK_.call(null,map__22948))?cljs.core.apply.call(null,cljs.core.hash_map,map__22948):map__22948);
var x__$1 = cljs.core.get.call(null,map__22948__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.call(null,map__22948__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width__$1 = cljs.core.get.call(null,map__22948__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$1 = cljs.core.get.call(null,map__22948__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__22949 = this;
var map__22949__$1 = ((cljs.core.seq_QMARK_.call(null,map__22949))?cljs.core.apply.call(null,cljs.core.hash_map,map__22949):map__22949);
var x__$2 = cljs.core.get.call(null,map__22949__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$2 = cljs.core.get.call(null,map__22949__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width__$2 = cljs.core.get.call(null,map__22949__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$2 = cljs.core.get.call(null,map__22949__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var vx = ((x__$2 + width__$2) + (50));
var vy = (y__$2 - (50));
return uxbox.geometry.viewportcord__GT_clientcoord.call(null,vx,vy);
});

uxbox.shapes.core.Rectangle.prototype.uxbox$shapes$core$Shape$shape__GT_svg$arity$1 = (function (p__22950){
var self__ = this;
var map__22951 = p__22950;
var map__22951__$1 = ((cljs.core.seq_QMARK_.call(null,map__22951))?cljs.core.apply.call(null,cljs.core.hash_map,map__22951):map__22951);
var x__$1 = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ry__$1 = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var height__$1 = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var fill_opacity__$1 = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170));
var y__$1 = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rx__$1 = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var stroke__$1 = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var stroke_opacity__$1 = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159));
var fill__$1 = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var width__$1 = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var stroke_width__$1 = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var rotate__$1 = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var map__22952 = this;
var map__22952__$1 = ((cljs.core.seq_QMARK_.call(null,map__22952))?cljs.core.apply.call(null,cljs.core.hash_map,map__22952):map__22952);
var x__$2 = cljs.core.get.call(null,map__22952__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ry__$2 = cljs.core.get.call(null,map__22952__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var height__$2 = cljs.core.get.call(null,map__22952__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var fill_opacity__$2 = cljs.core.get.call(null,map__22952__$1,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170));
var y__$2 = cljs.core.get.call(null,map__22952__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rx__$2 = cljs.core.get.call(null,map__22952__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var stroke__$2 = cljs.core.get.call(null,map__22952__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var stroke_opacity__$2 = cljs.core.get.call(null,map__22952__$1,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159));
var fill__$2 = cljs.core.get.call(null,map__22952__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var width__$2 = cljs.core.get.call(null,map__22952__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var stroke_width__$2 = cljs.core.get.call(null,map__22952__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var rotate__$2 = cljs.core.get.call(null,map__22952__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"ry","ry",-334598563),new cljs.core.Keyword(null,"height","height",1025178622)],[y__$2,rx__$2,stroke__$2,uxbox.shapes.core.generate_transformation.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotate","rotate",152705015),rotate__$2,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + (width__$2 / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (height__$2 / (2)))], null)], null)),stroke_opacity__$2,fill__$2,width__$2,fill_opacity__$2,stroke_width__$2,rotate__$2,x__$2,ry__$2,height__$2])], null);
});

uxbox.shapes.core.Rectangle.prototype.uxbox$shapes$core$Shape$shape__GT_selected_svg$arity$1 = (function (p__22953){
var self__ = this;
var map__22954 = p__22953;
var map__22954__$1 = ((cljs.core.seq_QMARK_.call(null,map__22954))?cljs.core.apply.call(null,cljs.core.hash_map,map__22954):map__22954);
var x__$1 = cljs.core.get.call(null,map__22954__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ry__$1 = cljs.core.get.call(null,map__22954__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var height__$1 = cljs.core.get.call(null,map__22954__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var fill_opacity__$1 = cljs.core.get.call(null,map__22954__$1,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170));
var y__$1 = cljs.core.get.call(null,map__22954__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rx__$1 = cljs.core.get.call(null,map__22954__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var stroke__$1 = cljs.core.get.call(null,map__22954__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var stroke_opacity__$1 = cljs.core.get.call(null,map__22954__$1,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159));
var fill__$1 = cljs.core.get.call(null,map__22954__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var width__$1 = cljs.core.get.call(null,map__22954__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var stroke_width__$1 = cljs.core.get.call(null,map__22954__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var rotate__$1 = cljs.core.get.call(null,map__22954__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var map__22955 = this;
var map__22955__$1 = ((cljs.core.seq_QMARK_.call(null,map__22955))?cljs.core.apply.call(null,cljs.core.hash_map,map__22955):map__22955);
var x__$2 = cljs.core.get.call(null,map__22955__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ry__$2 = cljs.core.get.call(null,map__22955__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var height__$2 = cljs.core.get.call(null,map__22955__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var fill_opacity__$2 = cljs.core.get.call(null,map__22955__$1,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170));
var y__$2 = cljs.core.get.call(null,map__22955__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rx__$2 = cljs.core.get.call(null,map__22955__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var stroke__$2 = cljs.core.get.call(null,map__22955__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var stroke_opacity__$2 = cljs.core.get.call(null,map__22955__$1,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159));
var fill__$2 = cljs.core.get.call(null,map__22955__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var width__$2 = cljs.core.get.call(null,map__22955__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var stroke_width__$2 = cljs.core.get.call(null,map__22955__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var rotate__$2 = cljs.core.get.call(null,map__22955__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"height","height",1025178622)],[(y__$2 - (4)),"#4af7c3",uxbox.shapes.core.generate_transformation.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotate","rotate",152705015),rotate__$2,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + (width__$2 / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + (height__$2 / (2)))], null)], null)),"transparent",(width__$2 + (8)),(2),"5,5",rotate__$2,(x__$2 - (4)),"0.5",(height__$2 + (8))])], null);
});

uxbox.shapes.core.Rectangle.prototype.uxbox$shapes$core$Shape$shape__GT_drawing_svg$arity$1 = (function (p__22956){
var self__ = this;
var map__22957 = p__22956;
var map__22957__$1 = ((cljs.core.seq_QMARK_.call(null,map__22957))?cljs.core.apply.call(null,cljs.core.hash_map,map__22957):map__22957);
var x__$1 = cljs.core.get.call(null,map__22957__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.call(null,map__22957__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__22958 = this;
var map__22958__$1 = ((cljs.core.seq_QMARK_.call(null,map__22958))?cljs.core.apply.call(null,cljs.core.hash_map,map__22958):map__22958);
var x__$2 = cljs.core.get.call(null,map__22958__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$2 = cljs.core.get.call(null,map__22958__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var coordinates = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$2,y__$2], null)], null));
var viewport_move = ((function (coordinates,map__22958,map__22958__$1,x__$2,y__$2,map__22957,map__22957__$1,x__$1,y__$1){
return (function (state,coord){
return cljs.core.reset_BANG_.call(null,coordinates,coord);
});})(coordinates,map__22958,map__22958__$1,x__$2,y__$2,map__22957,map__22957__$1,x__$1,y__$1))
;
uxbox.pubsub.register_event.call(null,new cljs.core.Keyword(null,"viewport-mouse-move","viewport-mouse-move",1727448203),viewport_move);

return ((function (coordinates,viewport_move,map__22958,map__22958__$1,x__$2,y__$2,map__22957,map__22957__$1,x__$1,y__$1){
return (function (){
var vec__22959 = cljs.core.deref.call(null,coordinates);
var mouseX = cljs.core.nth.call(null,vec__22959,(0),null);
var mouseY = cljs.core.nth.call(null,vec__22959,(1),null);
var vec__22960 = uxbox.geometry.coords__GT_rect.call(null,x__$2,y__$2,mouseX,mouseY);
var rect_x = cljs.core.nth.call(null,vec__22960,(0),null);
var rect_y = cljs.core.nth.call(null,vec__22960,(1),null);
var rect_width = cljs.core.nth.call(null,vec__22960,(2),null);
var rect_height = cljs.core.nth.call(null,vec__22960,(3),null);
if(((rect_width > (0))) && ((rect_height > (0)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),rect_x,new cljs.core.Keyword(null,"y","y",-1757859776),rect_y,new cljs.core.Keyword(null,"width","width",-384071477),rect_width,new cljs.core.Keyword(null,"height","height",1025178622),rect_height,new cljs.core.Keyword(null,"style","style",-496642736),{"fill": "transparent", "stroke": "gray", "strokeDasharray": "5,5"}], null)], null);
} else {
return null;
}
});
;})(coordinates,viewport_move,map__22958,map__22958__$1,x__$2,y__$2,map__22957,map__22957__$1,x__$1,y__$1))
});

uxbox.shapes.core.Rectangle.prototype.uxbox$shapes$core$Shape$move_delta$arity$3 = (function (p__22961,delta_x,delta_y){
var self__ = this;
var map__22962 = p__22961;
var map__22962__$1 = ((cljs.core.seq_QMARK_.call(null,map__22962))?cljs.core.apply.call(null,cljs.core.hash_map,map__22962):map__22962);
var shape = map__22962__$1;
var x__$1 = cljs.core.get.call(null,map__22962__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.call(null,map__22962__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__22963 = this;
var map__22963__$1 = ((cljs.core.seq_QMARK_.call(null,map__22963))?cljs.core.apply.call(null,cljs.core.hash_map,map__22963):map__22963);
var shape__$1 = map__22963__$1;
var x__$2 = cljs.core.get.call(null,map__22963__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$2 = cljs.core.get.call(null,map__22963__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,shape__$1,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + delta_x)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + delta_y));
});

uxbox.shapes.core.Rectangle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null),new cljs.core.Symbol(null,"ry","ry",1305932964,null),new cljs.core.Symbol(null,"fill","fill",-1770972880,null),new cljs.core.Symbol(null,"fill-opacity","fill-opacity",1102960357,null),new cljs.core.Symbol(null,"stroke","stroke",-912612214,null),new cljs.core.Symbol(null,"stroke-width","stroke-width",-1937599334,null),new cljs.core.Symbol(null,"stroke-opacity","stroke-opacity",448988368,null),new cljs.core.Symbol(null,"rotate","rotate",1793236542,null)], null);
});

uxbox.shapes.core.Rectangle.cljs$lang$type = true;

uxbox.shapes.core.Rectangle.cljs$lang$ctorPrSeq = (function (this__18766__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"uxbox.shapes.core/Rectangle");
});

uxbox.shapes.core.Rectangle.cljs$lang$ctorPrWriter = (function (this__18766__auto__,writer__18767__auto__){
return cljs.core._write.call(null,writer__18767__auto__,"uxbox.shapes.core/Rectangle");
});

uxbox.shapes.core.__GT_Rectangle = (function uxbox$shapes$core$__GT_Rectangle(x,y,width,height,rx,ry,fill,fill_opacity,stroke,stroke_width,stroke_opacity,rotate){
return (new uxbox.shapes.core.Rectangle(x,y,width,height,rx,ry,fill,fill_opacity,stroke,stroke_width,stroke_opacity,rotate,null,null,null));
});

uxbox.shapes.core.map__GT_Rectangle = (function uxbox$shapes$core$map__GT_Rectangle(G__22939){
return (new uxbox.shapes.core.Rectangle(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__22939),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__22939),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__22939),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__22939),new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(G__22939),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(G__22939),new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(G__22939),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170).cljs$core$IFn$_invoke$arity$1(G__22939),new cljs.core.Keyword(null,"stroke","stroke",1741823555).cljs$core$IFn$_invoke$arity$1(G__22939),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$1(G__22939),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159).cljs$core$IFn$_invoke$arity$1(G__22939),new cljs.core.Keyword(null,"rotate","rotate",152705015).cljs$core$IFn$_invoke$arity$1(G__22939),null,cljs.core.dissoc.call(null,G__22939,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"rotate","rotate",152705015)),null));
});

/**
 * Retrieves a line with the default parameters
 */
uxbox.shapes.core.new_rectangle = (function uxbox$shapes$core$new_rectangle(x,y,width,height){
return (new uxbox.shapes.core.Rectangle(x,y,width,height,(0),(0),"#cacaca",(1),"gray",(5),(1),(0),null,null,null));
});

/**
* @constructor
* @param {*} path
* @param {*} icowidth
* @param {*} icoheight
* @param {*} x
* @param {*} y
* @param {*} width
* @param {*} height
* @param {*} fill
* @param {*} fill_opacity
* @param {*} rotate
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
uxbox.shapes.core.Path = (function (path,icowidth,icoheight,x,y,width,height,fill,fill_opacity,rotate,__meta,__extmap,__hash){
this.path = path;
this.icowidth = icowidth;
this.icoheight = icoheight;
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.fill = fill;
this.fill_opacity = fill_opacity;
this.rotate = rotate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
uxbox.shapes.core.Path.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18732__auto__,k__18733__auto__){
var self__ = this;
var this__18732__auto____$1 = this;
return cljs.core._lookup.call(null,this__18732__auto____$1,k__18733__auto__,null);
});

uxbox.shapes.core.Path.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18734__auto__,k22966,else__18735__auto__){
var self__ = this;
var this__18734__auto____$1 = this;
var G__22968 = (((k22966 instanceof cljs.core.Keyword))?k22966.fqn:null);
switch (G__22968) {
case "y":
return self__.y;

break;
case "path":
return self__.path;

break;
case "fill":
return self__.fill;

break;
case "width":
return self__.width;

break;
case "icoheight":
return self__.icoheight;

break;
case "icowidth":
return self__.icowidth;

break;
case "rotate":
return self__.rotate;

break;
case "x":
return self__.x;

break;
case "fill-opacity":
return self__.fill_opacity;

break;
case "height":
return self__.height;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22966,else__18735__auto__);

}
});

uxbox.shapes.core.Path.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18746__auto__,writer__18747__auto__,opts__18748__auto__){
var self__ = this;
var this__18746__auto____$1 = this;
var pr_pair__18749__auto__ = ((function (this__18746__auto____$1){
return (function (keyval__18750__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18747__auto__,cljs.core.pr_writer,""," ","",opts__18748__auto__,keyval__18750__auto__);
});})(this__18746__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18747__auto__,pr_pair__18749__auto__,"#uxbox.shapes.core.Path{",", ","}",opts__18748__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"icowidth","icowidth",1969804015),self__.icowidth],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"icoheight","icoheight",1842978862),self__.icoheight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),self__.fill_opacity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rotate","rotate",152705015),self__.rotate],null))], null),self__.__extmap));
});

uxbox.shapes.core.Path.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18730__auto__){
var self__ = this;
var this__18730__auto____$1 = this;
return self__.__meta;
});

uxbox.shapes.core.Path.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18726__auto__){
var self__ = this;
var this__18726__auto____$1 = this;
return (new uxbox.shapes.core.Path(self__.path,self__.icowidth,self__.icoheight,self__.x,self__.y,self__.width,self__.height,self__.fill,self__.fill_opacity,self__.rotate,self__.__meta,self__.__extmap,self__.__hash));
});

uxbox.shapes.core.Path.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18736__auto__){
var self__ = this;
var this__18736__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

uxbox.shapes.core.Path.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18727__auto__){
var self__ = this;
var this__18727__auto____$1 = this;
var h__18553__auto__ = self__.__hash;
if(!((h__18553__auto__ == null))){
return h__18553__auto__;
} else {
var h__18553__auto____$1 = cljs.core.hash_imap.call(null,this__18727__auto____$1);
self__.__hash = h__18553__auto____$1;

return h__18553__auto____$1;
}
});

uxbox.shapes.core.Path.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18728__auto__,other__18729__auto__){
var self__ = this;
var this__18728__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18125__auto__ = other__18729__auto__;
if(cljs.core.truth_(and__18125__auto__)){
var and__18125__auto____$1 = (this__18728__auto____$1.constructor === other__18729__auto__.constructor);
if(and__18125__auto____$1){
return cljs.core.equiv_map.call(null,this__18728__auto____$1,other__18729__auto__);
} else {
return and__18125__auto____$1;
}
} else {
return and__18125__auto__;
}
})())){
return true;
} else {
return false;
}
});

uxbox.shapes.core.Path.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18741__auto__,k__18742__auto__){
var self__ = this;
var this__18741__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"icoheight","icoheight",1842978862),null,new cljs.core.Keyword(null,"icowidth","icowidth",1969804015),null,new cljs.core.Keyword(null,"rotate","rotate",152705015),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__18742__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18741__auto____$1),self__.__meta),k__18742__auto__);
} else {
return (new uxbox.shapes.core.Path(self__.path,self__.icowidth,self__.icoheight,self__.x,self__.y,self__.width,self__.height,self__.fill,self__.fill_opacity,self__.rotate,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18742__auto__)),null));
}
});

uxbox.shapes.core.Path.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18739__auto__,k__18740__auto__,G__22965){
var self__ = this;
var this__18739__auto____$1 = this;
var pred__22969 = cljs.core.keyword_identical_QMARK_;
var expr__22970 = k__18740__auto__;
if(cljs.core.truth_(pred__22969.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__22970))){
return (new uxbox.shapes.core.Path(G__22965,self__.icowidth,self__.icoheight,self__.x,self__.y,self__.width,self__.height,self__.fill,self__.fill_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22969.call(null,new cljs.core.Keyword(null,"icowidth","icowidth",1969804015),expr__22970))){
return (new uxbox.shapes.core.Path(self__.path,G__22965,self__.icoheight,self__.x,self__.y,self__.width,self__.height,self__.fill,self__.fill_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22969.call(null,new cljs.core.Keyword(null,"icoheight","icoheight",1842978862),expr__22970))){
return (new uxbox.shapes.core.Path(self__.path,self__.icowidth,G__22965,self__.x,self__.y,self__.width,self__.height,self__.fill,self__.fill_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22969.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__22970))){
return (new uxbox.shapes.core.Path(self__.path,self__.icowidth,self__.icoheight,G__22965,self__.y,self__.width,self__.height,self__.fill,self__.fill_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22969.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__22970))){
return (new uxbox.shapes.core.Path(self__.path,self__.icowidth,self__.icoheight,self__.x,G__22965,self__.width,self__.height,self__.fill,self__.fill_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22969.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__22970))){
return (new uxbox.shapes.core.Path(self__.path,self__.icowidth,self__.icoheight,self__.x,self__.y,G__22965,self__.height,self__.fill,self__.fill_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22969.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__22970))){
return (new uxbox.shapes.core.Path(self__.path,self__.icowidth,self__.icoheight,self__.x,self__.y,self__.width,G__22965,self__.fill,self__.fill_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22969.call(null,new cljs.core.Keyword(null,"fill","fill",883462889),expr__22970))){
return (new uxbox.shapes.core.Path(self__.path,self__.icowidth,self__.icoheight,self__.x,self__.y,self__.width,self__.height,G__22965,self__.fill_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22969.call(null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),expr__22970))){
return (new uxbox.shapes.core.Path(self__.path,self__.icowidth,self__.icoheight,self__.x,self__.y,self__.width,self__.height,self__.fill,G__22965,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22969.call(null,new cljs.core.Keyword(null,"rotate","rotate",152705015),expr__22970))){
return (new uxbox.shapes.core.Path(self__.path,self__.icowidth,self__.icoheight,self__.x,self__.y,self__.width,self__.height,self__.fill,self__.fill_opacity,G__22965,self__.__meta,self__.__extmap,null));
} else {
return (new uxbox.shapes.core.Path(self__.path,self__.icowidth,self__.icoheight,self__.x,self__.y,self__.width,self__.height,self__.fill,self__.fill_opacity,self__.rotate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18740__auto__,G__22965),null));
}
}
}
}
}
}
}
}
}
}
});

uxbox.shapes.core.Path.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18744__auto__){
var self__ = this;
var this__18744__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"icowidth","icowidth",1969804015),self__.icowidth],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"icoheight","icoheight",1842978862),self__.icoheight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),self__.fill_opacity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rotate","rotate",152705015),self__.rotate],null))], null),self__.__extmap));
});

uxbox.shapes.core.Path.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18731__auto__,G__22965){
var self__ = this;
var this__18731__auto____$1 = this;
return (new uxbox.shapes.core.Path(self__.path,self__.icowidth,self__.icoheight,self__.x,self__.y,self__.width,self__.height,self__.fill,self__.fill_opacity,self__.rotate,G__22965,self__.__extmap,self__.__hash));
});

uxbox.shapes.core.Path.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18737__auto__,entry__18738__auto__){
var self__ = this;
var this__18737__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18738__auto__)){
return cljs.core._assoc.call(null,this__18737__auto____$1,cljs.core._nth.call(null,entry__18738__auto__,(0)),cljs.core._nth.call(null,entry__18738__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18737__auto____$1,entry__18738__auto__);
}
});

uxbox.shapes.core.Path.prototype.uxbox$shapes$core$Shape$ = true;

uxbox.shapes.core.Path.prototype.uxbox$shapes$core$Shape$intersect$arity$3 = (function (p__22972,px,py){
var self__ = this;
var map__22973 = p__22972;
var map__22973__$1 = ((cljs.core.seq_QMARK_.call(null,map__22973))?cljs.core.apply.call(null,cljs.core.hash_map,map__22973):map__22973);
var x__$1 = cljs.core.get.call(null,map__22973__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.call(null,map__22973__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width__$1 = cljs.core.get.call(null,map__22973__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$1 = cljs.core.get.call(null,map__22973__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__22974 = this;
var map__22974__$1 = ((cljs.core.seq_QMARK_.call(null,map__22974))?cljs.core.apply.call(null,cljs.core.hash_map,map__22974):map__22974);
var x__$2 = cljs.core.get.call(null,map__22974__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$2 = cljs.core.get.call(null,map__22974__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width__$2 = cljs.core.get.call(null,map__22974__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$2 = cljs.core.get.call(null,map__22974__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return ((px >= x__$2)) && ((px <= (x__$2 + width__$2))) && ((py >= y__$2)) && ((py <= (y__$2 + height__$2)));
});

uxbox.shapes.core.Path.prototype.uxbox$shapes$core$Shape$toolbar_coords$arity$1 = (function (p__22975){
var self__ = this;
var map__22976 = p__22975;
var map__22976__$1 = ((cljs.core.seq_QMARK_.call(null,map__22976))?cljs.core.apply.call(null,cljs.core.hash_map,map__22976):map__22976);
var x__$1 = cljs.core.get.call(null,map__22976__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.call(null,map__22976__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width__$1 = cljs.core.get.call(null,map__22976__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$1 = cljs.core.get.call(null,map__22976__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__22977 = this;
var map__22977__$1 = ((cljs.core.seq_QMARK_.call(null,map__22977))?cljs.core.apply.call(null,cljs.core.hash_map,map__22977):map__22977);
var x__$2 = cljs.core.get.call(null,map__22977__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$2 = cljs.core.get.call(null,map__22977__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width__$2 = cljs.core.get.call(null,map__22977__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$2 = cljs.core.get.call(null,map__22977__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var vx = ((x__$2 + width__$2) + (50));
var vy = y__$2;
return uxbox.geometry.viewportcord__GT_clientcoord.call(null,vx,vy);
});

uxbox.shapes.core.Path.prototype.uxbox$shapes$core$Shape$shape__GT_svg$arity$1 = (function (p__22978){
var self__ = this;
var map__22979 = p__22978;
var map__22979__$1 = ((cljs.core.seq_QMARK_.call(null,map__22979))?cljs.core.apply.call(null,cljs.core.hash_map,map__22979):map__22979);
var x__$1 = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height__$1 = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var fill_opacity__$1 = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170));
var path__$1 = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var y__$1 = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var fill__$1 = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var width__$1 = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var icoheight__$1 = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword(null,"icoheight","icoheight",1842978862));
var icowidth__$1 = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword(null,"icowidth","icowidth",1969804015));
var rotate__$1 = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var map__22980 = this;
var map__22980__$1 = ((cljs.core.seq_QMARK_.call(null,map__22980))?cljs.core.apply.call(null,cljs.core.hash_map,map__22980):map__22980);
var x__$2 = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height__$2 = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var fill_opacity__$2 = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170));
var path__$2 = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var y__$2 = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var fill__$2 = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var width__$2 = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var icoheight__$2 = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"icoheight","icoheight",1842978862));
var icowidth__$2 = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"icowidth","icowidth",1969804015));
var rotate__$2 = cljs.core.get.call(null,map__22980__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[cljs.core.str("0 0 "),cljs.core.str(icowidth__$2),cljs.core.str(" "),cljs.core.str(icoheight__$2)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),width__$2,new cljs.core.Keyword(null,"height","height",1025178622),height__$2,new cljs.core.Keyword(null,"x","x",2099068185),x__$2,new cljs.core.Keyword(null,"y","y",-1757859776),y__$2,new cljs.core.Keyword(null,"preserveAspectRatio","preserveAspectRatio",1832131817),"none"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),uxbox.shapes.core.generate_transformation.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotate","rotate",152705015),rotate__$2,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(icowidth__$2 / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(icoheight__$2 / (2))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"d","d",1972142424),path__$2,new cljs.core.Keyword(null,"fill","fill",883462889),fill__$2,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),fill_opacity__$2], null)], null)], null)], null);
});

uxbox.shapes.core.Path.prototype.uxbox$shapes$core$Shape$shape__GT_selected_svg$arity$1 = (function (p__22981){
var self__ = this;
var map__22982 = p__22981;
var map__22982__$1 = ((cljs.core.seq_QMARK_.call(null,map__22982))?cljs.core.apply.call(null,cljs.core.hash_map,map__22982):map__22982);
var x__$1 = cljs.core.get.call(null,map__22982__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height__$1 = cljs.core.get.call(null,map__22982__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var fill_opacity__$1 = cljs.core.get.call(null,map__22982__$1,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170));
var path__$1 = cljs.core.get.call(null,map__22982__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var y__$1 = cljs.core.get.call(null,map__22982__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var fill__$1 = cljs.core.get.call(null,map__22982__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var width__$1 = cljs.core.get.call(null,map__22982__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var icoheight__$1 = cljs.core.get.call(null,map__22982__$1,new cljs.core.Keyword(null,"icoheight","icoheight",1842978862));
var icowidth__$1 = cljs.core.get.call(null,map__22982__$1,new cljs.core.Keyword(null,"icowidth","icowidth",1969804015));
var rotate__$1 = cljs.core.get.call(null,map__22982__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var map__22983 = this;
var map__22983__$1 = ((cljs.core.seq_QMARK_.call(null,map__22983))?cljs.core.apply.call(null,cljs.core.hash_map,map__22983):map__22983);
var x__$2 = cljs.core.get.call(null,map__22983__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height__$2 = cljs.core.get.call(null,map__22983__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var fill_opacity__$2 = cljs.core.get.call(null,map__22983__$1,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170));
var path__$2 = cljs.core.get.call(null,map__22983__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var y__$2 = cljs.core.get.call(null,map__22983__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var fill__$2 = cljs.core.get.call(null,map__22983__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var width__$2 = cljs.core.get.call(null,map__22983__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var icoheight__$2 = cljs.core.get.call(null,map__22983__$1,new cljs.core.Keyword(null,"icoheight","icoheight",1842978862));
var icowidth__$2 = cljs.core.get.call(null,map__22983__$1,new cljs.core.Keyword(null,"icowidth","icowidth",1969804015));
var rotate__$2 = cljs.core.get.call(null,map__22983__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"height","height",1025178622)],[y__$2,"#4af7c3","transparent",width__$2,(2),"5,5",x__$2,"0.5",height__$2])], null);
});

uxbox.shapes.core.Path.prototype.uxbox$shapes$core$Shape$shape__GT_drawing_svg$arity$1 = (function (p__22984){
var self__ = this;
var map__22985 = p__22984;
var map__22985__$1 = ((cljs.core.seq_QMARK_.call(null,map__22985))?cljs.core.apply.call(null,cljs.core.hash_map,map__22985):map__22985);
var x__$1 = cljs.core.get.call(null,map__22985__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.call(null,map__22985__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__22986 = this;
var map__22986__$1 = ((cljs.core.seq_QMARK_.call(null,map__22986))?cljs.core.apply.call(null,cljs.core.hash_map,map__22986):map__22986);
var x__$2 = cljs.core.get.call(null,map__22986__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$2 = cljs.core.get.call(null,map__22986__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var coordinates = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$2,y__$2], null)], null));
var viewport_move = ((function (coordinates,map__22986,map__22986__$1,x__$2,y__$2,map__22985,map__22985__$1,x__$1,y__$1){
return (function (state,coord){
return cljs.core.reset_BANG_.call(null,coordinates,coord);
});})(coordinates,map__22986,map__22986__$1,x__$2,y__$2,map__22985,map__22985__$1,x__$1,y__$1))
;
uxbox.pubsub.register_event.call(null,new cljs.core.Keyword(null,"viewport-mouse-move","viewport-mouse-move",1727448203),viewport_move);

return ((function (coordinates,viewport_move,map__22986,map__22986__$1,x__$2,y__$2,map__22985,map__22985__$1,x__$1,y__$1){
return (function (){
var vec__22987 = cljs.core.deref.call(null,coordinates);
var mouseX = cljs.core.nth.call(null,vec__22987,(0),null);
var mouseY = cljs.core.nth.call(null,vec__22987,(1),null);
var vec__22988 = uxbox.geometry.coords__GT_rect.call(null,x__$2,y__$2,mouseX,mouseY);
var rect_x = cljs.core.nth.call(null,vec__22988,(0),null);
var rect_y = cljs.core.nth.call(null,vec__22988,(1),null);
var rect_width = cljs.core.nth.call(null,vec__22988,(2),null);
var rect_height = cljs.core.nth.call(null,vec__22988,(3),null);
if(((rect_width > (0))) && ((rect_height > (0)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),rect_x,new cljs.core.Keyword(null,"y","y",-1757859776),rect_y,new cljs.core.Keyword(null,"width","width",-384071477),rect_width,new cljs.core.Keyword(null,"height","height",1025178622),rect_height,new cljs.core.Keyword(null,"style","style",-496642736),{"fill": "transparent", "stroke": "gray", "strokeDasharray": "5,5"}], null)], null);
} else {
return null;
}
});
;})(coordinates,viewport_move,map__22986,map__22986__$1,x__$2,y__$2,map__22985,map__22985__$1,x__$1,y__$1))
});

uxbox.shapes.core.Path.prototype.uxbox$shapes$core$Shape$move_delta$arity$3 = (function (p__22989,delta_x,delta_y){
var self__ = this;
var map__22990 = p__22989;
var map__22990__$1 = ((cljs.core.seq_QMARK_.call(null,map__22990))?cljs.core.apply.call(null,cljs.core.hash_map,map__22990):map__22990);
var shape = map__22990__$1;
var x__$1 = cljs.core.get.call(null,map__22990__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.call(null,map__22990__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__22991 = this;
var map__22991__$1 = ((cljs.core.seq_QMARK_.call(null,map__22991))?cljs.core.apply.call(null,cljs.core.hash_map,map__22991):map__22991);
var shape__$1 = map__22991__$1;
var x__$2 = cljs.core.get.call(null,map__22991__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$2 = cljs.core.get.call(null,map__22991__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,shape__$1,new cljs.core.Keyword(null,"x","x",2099068185),(x__$2 + delta_x)),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$2 + delta_y));
});

uxbox.shapes.core.Path.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"icowidth","icowidth",-684631754,null),new cljs.core.Symbol(null,"icoheight","icoheight",-811456907,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"fill","fill",-1770972880,null),new cljs.core.Symbol(null,"fill-opacity","fill-opacity",1102960357,null),new cljs.core.Symbol(null,"rotate","rotate",1793236542,null)], null);
});

uxbox.shapes.core.Path.cljs$lang$type = true;

uxbox.shapes.core.Path.cljs$lang$ctorPrSeq = (function (this__18766__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"uxbox.shapes.core/Path");
});

uxbox.shapes.core.Path.cljs$lang$ctorPrWriter = (function (this__18766__auto__,writer__18767__auto__){
return cljs.core._write.call(null,writer__18767__auto__,"uxbox.shapes.core/Path");
});

uxbox.shapes.core.__GT_Path = (function uxbox$shapes$core$__GT_Path(path,icowidth,icoheight,x,y,width,height,fill,fill_opacity,rotate){
return (new uxbox.shapes.core.Path(path,icowidth,icoheight,x,y,width,height,fill,fill_opacity,rotate,null,null,null));
});

uxbox.shapes.core.map__GT_Path = (function uxbox$shapes$core$map__GT_Path(G__22967){
return (new uxbox.shapes.core.Path(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__22967),new cljs.core.Keyword(null,"icowidth","icowidth",1969804015).cljs$core$IFn$_invoke$arity$1(G__22967),new cljs.core.Keyword(null,"icoheight","icoheight",1842978862).cljs$core$IFn$_invoke$arity$1(G__22967),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__22967),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__22967),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__22967),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__22967),new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(G__22967),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170).cljs$core$IFn$_invoke$arity$1(G__22967),new cljs.core.Keyword(null,"rotate","rotate",152705015).cljs$core$IFn$_invoke$arity$1(G__22967),null,cljs.core.dissoc.call(null,G__22967,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"icowidth","icowidth",1969804015),new cljs.core.Keyword(null,"icoheight","icoheight",1842978862),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"rotate","rotate",152705015)),null));
});

/**
 * Retrieves a path with the default parameters
 */
uxbox.shapes.core.new_path_shape = (function uxbox$shapes$core$new_path_shape(x,y,width,height,path,icowidth,icoheight){
return (new uxbox.shapes.core.Path(path,icowidth,icoheight,x,y,width,height,"black",(1),(0),null,null,null));
});

/**
* @constructor
* @param {*} cx
* @param {*} cy
* @param {*} r
* @param {*} fill
* @param {*} fill_opacity
* @param {*} stroke
* @param {*} stroke_width
* @param {*} stroke_opacity
* @param {*} rotate
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
uxbox.shapes.core.Circle = (function (cx,cy,r,fill,fill_opacity,stroke,stroke_width,stroke_opacity,rotate,__meta,__extmap,__hash){
this.cx = cx;
this.cy = cy;
this.r = r;
this.fill = fill;
this.fill_opacity = fill_opacity;
this.stroke = stroke;
this.stroke_width = stroke_width;
this.stroke_opacity = stroke_opacity;
this.rotate = rotate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
uxbox.shapes.core.Circle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18732__auto__,k__18733__auto__){
var self__ = this;
var this__18732__auto____$1 = this;
return cljs.core._lookup.call(null,this__18732__auto____$1,k__18733__auto__,null);
});

uxbox.shapes.core.Circle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18734__auto__,k22994,else__18735__auto__){
var self__ = this;
var this__18734__auto____$1 = this;
var G__22996 = (((k22994 instanceof cljs.core.Keyword))?k22994.fqn:null);
switch (G__22996) {
case "cx":
return self__.cx;

break;
case "cy":
return self__.cy;

break;
case "r":
return self__.r;

break;
case "fill":
return self__.fill;

break;
case "fill-opacity":
return self__.fill_opacity;

break;
case "stroke":
return self__.stroke;

break;
case "stroke-width":
return self__.stroke_width;

break;
case "stroke-opacity":
return self__.stroke_opacity;

break;
case "rotate":
return self__.rotate;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22994,else__18735__auto__);

}
});

uxbox.shapes.core.Circle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18746__auto__,writer__18747__auto__,opts__18748__auto__){
var self__ = this;
var this__18746__auto____$1 = this;
var pr_pair__18749__auto__ = ((function (this__18746__auto____$1){
return (function (keyval__18750__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18747__auto__,cljs.core.pr_writer,""," ","",opts__18748__auto__,keyval__18750__auto__);
});})(this__18746__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18747__auto__,pr_pair__18749__auto__,"#uxbox.shapes.core.Circle{",", ","}",opts__18748__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cx","cx",1272694324),self__.cx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cy","cy",755331060),self__.cy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),self__.fill_opacity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke","stroke",1741823555),self__.stroke],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),self__.stroke_width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),self__.stroke_opacity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rotate","rotate",152705015),self__.rotate],null))], null),self__.__extmap));
});

uxbox.shapes.core.Circle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18730__auto__){
var self__ = this;
var this__18730__auto____$1 = this;
return self__.__meta;
});

uxbox.shapes.core.Circle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18726__auto__){
var self__ = this;
var this__18726__auto____$1 = this;
return (new uxbox.shapes.core.Circle(self__.cx,self__.cy,self__.r,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,self__.__hash));
});

uxbox.shapes.core.Circle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18736__auto__){
var self__ = this;
var this__18736__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

uxbox.shapes.core.Circle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18727__auto__){
var self__ = this;
var this__18727__auto____$1 = this;
var h__18553__auto__ = self__.__hash;
if(!((h__18553__auto__ == null))){
return h__18553__auto__;
} else {
var h__18553__auto____$1 = cljs.core.hash_imap.call(null,this__18727__auto____$1);
self__.__hash = h__18553__auto____$1;

return h__18553__auto____$1;
}
});

uxbox.shapes.core.Circle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18728__auto__,other__18729__auto__){
var self__ = this;
var this__18728__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18125__auto__ = other__18729__auto__;
if(cljs.core.truth_(and__18125__auto__)){
var and__18125__auto____$1 = (this__18728__auto____$1.constructor === other__18729__auto__.constructor);
if(and__18125__auto____$1){
return cljs.core.equiv_map.call(null,this__18728__auto____$1,other__18729__auto__);
} else {
return and__18125__auto____$1;
}
} else {
return and__18125__auto__;
}
})())){
return true;
} else {
return false;
}
});

uxbox.shapes.core.Circle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18741__auto__,k__18742__auto__){
var self__ = this;
var this__18741__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"stroke","stroke",1741823555),null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null,new cljs.core.Keyword(null,"cx","cx",1272694324),null,new cljs.core.Keyword(null,"cy","cy",755331060),null,new cljs.core.Keyword(null,"rotate","rotate",152705015),null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),null], null), null),k__18742__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18741__auto____$1),self__.__meta),k__18742__auto__);
} else {
return (new uxbox.shapes.core.Circle(self__.cx,self__.cy,self__.r,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18742__auto__)),null));
}
});

uxbox.shapes.core.Circle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18739__auto__,k__18740__auto__,G__22993){
var self__ = this;
var this__18739__auto____$1 = this;
var pred__22997 = cljs.core.keyword_identical_QMARK_;
var expr__22998 = k__18740__auto__;
if(cljs.core.truth_(pred__22997.call(null,new cljs.core.Keyword(null,"cx","cx",1272694324),expr__22998))){
return (new uxbox.shapes.core.Circle(G__22993,self__.cy,self__.r,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22997.call(null,new cljs.core.Keyword(null,"cy","cy",755331060),expr__22998))){
return (new uxbox.shapes.core.Circle(self__.cx,G__22993,self__.r,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22997.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__22998))){
return (new uxbox.shapes.core.Circle(self__.cx,self__.cy,G__22993,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22997.call(null,new cljs.core.Keyword(null,"fill","fill",883462889),expr__22998))){
return (new uxbox.shapes.core.Circle(self__.cx,self__.cy,self__.r,G__22993,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22997.call(null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),expr__22998))){
return (new uxbox.shapes.core.Circle(self__.cx,self__.cy,self__.r,self__.fill,G__22993,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22997.call(null,new cljs.core.Keyword(null,"stroke","stroke",1741823555),expr__22998))){
return (new uxbox.shapes.core.Circle(self__.cx,self__.cy,self__.r,self__.fill,self__.fill_opacity,G__22993,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22997.call(null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),expr__22998))){
return (new uxbox.shapes.core.Circle(self__.cx,self__.cy,self__.r,self__.fill,self__.fill_opacity,self__.stroke,G__22993,self__.stroke_opacity,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22997.call(null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),expr__22998))){
return (new uxbox.shapes.core.Circle(self__.cx,self__.cy,self__.r,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,G__22993,self__.rotate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22997.call(null,new cljs.core.Keyword(null,"rotate","rotate",152705015),expr__22998))){
return (new uxbox.shapes.core.Circle(self__.cx,self__.cy,self__.r,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,G__22993,self__.__meta,self__.__extmap,null));
} else {
return (new uxbox.shapes.core.Circle(self__.cx,self__.cy,self__.r,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18740__auto__,G__22993),null));
}
}
}
}
}
}
}
}
}
});

uxbox.shapes.core.Circle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18744__auto__){
var self__ = this;
var this__18744__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cx","cx",1272694324),self__.cx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cy","cy",755331060),self__.cy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill","fill",883462889),self__.fill],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),self__.fill_opacity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke","stroke",1741823555),self__.stroke],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),self__.stroke_width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),self__.stroke_opacity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rotate","rotate",152705015),self__.rotate],null))], null),self__.__extmap));
});

uxbox.shapes.core.Circle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18731__auto__,G__22993){
var self__ = this;
var this__18731__auto____$1 = this;
return (new uxbox.shapes.core.Circle(self__.cx,self__.cy,self__.r,self__.fill,self__.fill_opacity,self__.stroke,self__.stroke_width,self__.stroke_opacity,self__.rotate,G__22993,self__.__extmap,self__.__hash));
});

uxbox.shapes.core.Circle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18737__auto__,entry__18738__auto__){
var self__ = this;
var this__18737__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18738__auto__)){
return cljs.core._assoc.call(null,this__18737__auto____$1,cljs.core._nth.call(null,entry__18738__auto__,(0)),cljs.core._nth.call(null,entry__18738__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18737__auto____$1,entry__18738__auto__);
}
});

uxbox.shapes.core.Circle.prototype.uxbox$shapes$core$Shape$ = true;

uxbox.shapes.core.Circle.prototype.uxbox$shapes$core$Shape$intersect$arity$3 = (function (p__23000,px,py){
var self__ = this;
var map__23001 = p__23000;
var map__23001__$1 = ((cljs.core.seq_QMARK_.call(null,map__23001))?cljs.core.apply.call(null,cljs.core.hash_map,map__23001):map__23001);
var cx__$1 = cljs.core.get.call(null,map__23001__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy__$1 = cljs.core.get.call(null,map__23001__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var r__$1 = cljs.core.get.call(null,map__23001__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__23002 = this;
var map__23002__$1 = ((cljs.core.seq_QMARK_.call(null,map__23002))?cljs.core.apply.call(null,cljs.core.hash_map,map__23002):map__23002);
var cx__$2 = cljs.core.get.call(null,map__23002__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy__$2 = cljs.core.get.call(null,map__23002__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var r__$2 = cljs.core.get.call(null,map__23002__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var distance = uxbox.geometry.distance_line_circle.call(null,cx__$2,cy__$2,r__$2,px,py);
return (distance <= (15));
});

uxbox.shapes.core.Circle.prototype.uxbox$shapes$core$Shape$toolbar_coords$arity$1 = (function (p__23003){
var self__ = this;
var map__23004 = p__23003;
var map__23004__$1 = ((cljs.core.seq_QMARK_.call(null,map__23004))?cljs.core.apply.call(null,cljs.core.hash_map,map__23004):map__23004);
var cx__$1 = cljs.core.get.call(null,map__23004__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy__$1 = cljs.core.get.call(null,map__23004__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var r__$1 = cljs.core.get.call(null,map__23004__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__23005 = this;
var map__23005__$1 = ((cljs.core.seq_QMARK_.call(null,map__23005))?cljs.core.apply.call(null,cljs.core.hash_map,map__23005):map__23005);
var cx__$2 = cljs.core.get.call(null,map__23005__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy__$2 = cljs.core.get.call(null,map__23005__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var r__$2 = cljs.core.get.call(null,map__23005__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var vx = ((cx__$2 + r__$2) + (20));
var vy = ((cy__$2 - r__$2) - (40));
return uxbox.geometry.viewportcord__GT_clientcoord.call(null,vx,vy);
});

uxbox.shapes.core.Circle.prototype.uxbox$shapes$core$Shape$shape__GT_svg$arity$1 = (function (p__23006){
var self__ = this;
var map__23007 = p__23006;
var map__23007__$1 = ((cljs.core.seq_QMARK_.call(null,map__23007))?cljs.core.apply.call(null,cljs.core.hash_map,map__23007):map__23007);
var cx__$1 = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy__$1 = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var r__$1 = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var fill__$1 = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var fill_opacity__$1 = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170));
var stroke__$1 = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var stroke_width__$1 = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var stroke_opacity__$1 = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159));
var rotate__$1 = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var map__23008 = this;
var map__23008__$1 = ((cljs.core.seq_QMARK_.call(null,map__23008))?cljs.core.apply.call(null,cljs.core.hash_map,map__23008):map__23008);
var cx__$2 = cljs.core.get.call(null,map__23008__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy__$2 = cljs.core.get.call(null,map__23008__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var r__$2 = cljs.core.get.call(null,map__23008__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var fill__$2 = cljs.core.get.call(null,map__23008__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var fill_opacity__$2 = cljs.core.get.call(null,map__23008__$1,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170));
var stroke__$2 = cljs.core.get.call(null,map__23008__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var stroke_width__$2 = cljs.core.get.call(null,map__23008__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var stroke_opacity__$2 = cljs.core.get.call(null,map__23008__$1,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159));
var rotate__$2 = cljs.core.get.call(null,map__23008__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"cy","cy",755331060)],[r__$2,stroke__$2,uxbox.shapes.core.generate_transformation.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotate","rotate",152705015),rotate__$2,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cx__$2,new cljs.core.Keyword(null,"y","y",-1757859776),cy__$2], null)], null)),stroke_opacity__$2,fill__$2,fill_opacity__$2,stroke_width__$2,cx__$2,cy__$2])], null);
});

uxbox.shapes.core.Circle.prototype.uxbox$shapes$core$Shape$shape__GT_selected_svg$arity$1 = (function (p__23009){
var self__ = this;
var map__23010 = p__23009;
var map__23010__$1 = ((cljs.core.seq_QMARK_.call(null,map__23010))?cljs.core.apply.call(null,cljs.core.hash_map,map__23010):map__23010);
var cx__$1 = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy__$1 = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var r__$1 = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var fill__$1 = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var fill_opacity__$1 = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170));
var stroke__$1 = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var stroke_width__$1 = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var stroke_opacity__$1 = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159));
var rotate__$1 = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var map__23011 = this;
var map__23011__$1 = ((cljs.core.seq_QMARK_.call(null,map__23011))?cljs.core.apply.call(null,cljs.core.hash_map,map__23011):map__23011);
var cx__$2 = cljs.core.get.call(null,map__23011__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy__$2 = cljs.core.get.call(null,map__23011__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var r__$2 = cljs.core.get.call(null,map__23011__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var fill__$2 = cljs.core.get.call(null,map__23011__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var fill_opacity__$2 = cljs.core.get.call(null,map__23011__$1,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170));
var stroke__$2 = cljs.core.get.call(null,map__23011__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var stroke_width__$2 = cljs.core.get.call(null,map__23011__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var stroke_opacity__$2 = cljs.core.get.call(null,map__23011__$1,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159));
var rotate__$2 = cljs.core.get.call(null,map__23011__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"height","height",1025178622)],[((cy__$2 - r__$2) - (4)),"#4af7c3",uxbox.shapes.core.generate_transformation.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotate","rotate",152705015),rotate__$2,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cx__$2,new cljs.core.Keyword(null,"y","y",-1757859776),cy__$2], null)], null)),"transparent",((8) + (r__$2 * (2))),(2),"5,5",((cx__$2 - r__$2) - (4)),"0.5",((8) + (r__$2 * (2)))])], null);
});

uxbox.shapes.core.Circle.prototype.uxbox$shapes$core$Shape$shape__GT_drawing_svg$arity$1 = (function (p__23012){
var self__ = this;
var map__23013 = p__23012;
var map__23013__$1 = ((cljs.core.seq_QMARK_.call(null,map__23013))?cljs.core.apply.call(null,cljs.core.hash_map,map__23013):map__23013);
var cx__$1 = cljs.core.get.call(null,map__23013__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy__$1 = cljs.core.get.call(null,map__23013__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var r__$1 = cljs.core.get.call(null,map__23013__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__23014 = this;
var map__23014__$1 = ((cljs.core.seq_QMARK_.call(null,map__23014))?cljs.core.apply.call(null,cljs.core.hash_map,map__23014):map__23014);
var cx__$2 = cljs.core.get.call(null,map__23014__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy__$2 = cljs.core.get.call(null,map__23014__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var r__$2 = cljs.core.get.call(null,map__23014__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var coordinates = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx__$2,cy__$2], null)], null));
var viewport_move = ((function (coordinates,map__23014,map__23014__$1,cx__$2,cy__$2,r__$2,map__23013,map__23013__$1,cx__$1,cy__$1,r__$1){
return (function (state,coord){
return cljs.core.reset_BANG_.call(null,coordinates,coord);
});})(coordinates,map__23014,map__23014__$1,cx__$2,cy__$2,r__$2,map__23013,map__23013__$1,cx__$1,cy__$1,r__$1))
;
uxbox.pubsub.register_event.call(null,new cljs.core.Keyword(null,"viewport-mouse-move","viewport-mouse-move",1727448203),viewport_move);

return ((function (coordinates,viewport_move,map__23014,map__23014__$1,cx__$2,cy__$2,r__$2,map__23013,map__23013__$1,cx__$1,cy__$1,r__$1){
return (function (){
var vec__23015 = cljs.core.deref.call(null,coordinates);
var mouseX = cljs.core.nth.call(null,vec__23015,(0),null);
var mouseY = cljs.core.nth.call(null,vec__23015,(1),null);
var r__$3 = uxbox.geometry.distance.call(null,cx__$2,cy__$2,mouseX,mouseY);
var r__$4 = (cljs.core.truth_(isNaN(r__$3))?(0):r__$3);
var dx = (uxbox.geometry.distance.call(null,cx__$2,cy__$2,cx__$2,(0)) - r__$4);
var dy = (uxbox.geometry.distance.call(null,cx__$2,cy__$2,(0),cy__$2) - r__$4);
var r__$5 = ((((dx < (0))) || ((dy < (0))))?(r__$4 - Math.abs((function (){var x__18456__auto__ = dx;
var y__18457__auto__ = dy;
return ((x__18456__auto__ < y__18457__auto__) ? x__18456__auto__ : y__18457__auto__);
})())):r__$4);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),cx__$2,new cljs.core.Keyword(null,"cy","cy",755331060),cy__$2,new cljs.core.Keyword(null,"r","r",-471384190),r__$5,new cljs.core.Keyword(null,"style","style",-496642736),{"fill": "transparent", "stroke": "gray", "strokeDasharray": "5,5"}], null)], null);
});
;})(coordinates,viewport_move,map__23014,map__23014__$1,cx__$2,cy__$2,r__$2,map__23013,map__23013__$1,cx__$1,cy__$1,r__$1))
});

uxbox.shapes.core.Circle.prototype.uxbox$shapes$core$Shape$move_delta$arity$3 = (function (p__23016,delta_x,delta_y){
var self__ = this;
var map__23017 = p__23016;
var map__23017__$1 = ((cljs.core.seq_QMARK_.call(null,map__23017))?cljs.core.apply.call(null,cljs.core.hash_map,map__23017):map__23017);
var shape = map__23017__$1;
var cx__$1 = cljs.core.get.call(null,map__23017__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy__$1 = cljs.core.get.call(null,map__23017__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var map__23018 = this;
var map__23018__$1 = ((cljs.core.seq_QMARK_.call(null,map__23018))?cljs.core.apply.call(null,cljs.core.hash_map,map__23018):map__23018);
var shape__$1 = map__23018__$1;
var cx__$2 = cljs.core.get.call(null,map__23018__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy__$2 = cljs.core.get.call(null,map__23018__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,shape__$1,new cljs.core.Keyword(null,"cx","cx",1272694324),(cx__$2 + delta_x)),new cljs.core.Keyword(null,"cy","cy",755331060),(cy__$2 + delta_y));
});

uxbox.shapes.core.Circle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"cy","cy",-1899104709,null),new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol(null,"fill","fill",-1770972880,null),new cljs.core.Symbol(null,"fill-opacity","fill-opacity",1102960357,null),new cljs.core.Symbol(null,"stroke","stroke",-912612214,null),new cljs.core.Symbol(null,"stroke-width","stroke-width",-1937599334,null),new cljs.core.Symbol(null,"stroke-opacity","stroke-opacity",448988368,null),new cljs.core.Symbol(null,"rotate","rotate",1793236542,null)], null);
});

uxbox.shapes.core.Circle.cljs$lang$type = true;

uxbox.shapes.core.Circle.cljs$lang$ctorPrSeq = (function (this__18766__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"uxbox.shapes.core/Circle");
});

uxbox.shapes.core.Circle.cljs$lang$ctorPrWriter = (function (this__18766__auto__,writer__18767__auto__){
return cljs.core._write.call(null,writer__18767__auto__,"uxbox.shapes.core/Circle");
});

uxbox.shapes.core.__GT_Circle = (function uxbox$shapes$core$__GT_Circle(cx,cy,r,fill,fill_opacity,stroke,stroke_width,stroke_opacity,rotate){
return (new uxbox.shapes.core.Circle(cx,cy,r,fill,fill_opacity,stroke,stroke_width,stroke_opacity,rotate,null,null,null));
});

uxbox.shapes.core.map__GT_Circle = (function uxbox$shapes$core$map__GT_Circle(G__22995){
return (new uxbox.shapes.core.Circle(new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(G__22995),new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(G__22995),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__22995),new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(G__22995),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170).cljs$core$IFn$_invoke$arity$1(G__22995),new cljs.core.Keyword(null,"stroke","stroke",1741823555).cljs$core$IFn$_invoke$arity$1(G__22995),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$1(G__22995),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159).cljs$core$IFn$_invoke$arity$1(G__22995),new cljs.core.Keyword(null,"rotate","rotate",152705015).cljs$core$IFn$_invoke$arity$1(G__22995),null,cljs.core.dissoc.call(null,G__22995,new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"rotate","rotate",152705015)),null));
});

/**
 * Retrieves a circle with the default parameters
 */
uxbox.shapes.core.new_circle = (function uxbox$shapes$core$new_circle(cx,cy,r){
return (new uxbox.shapes.core.Circle(cx,cy,r,"#cacaca",(1),"gray",(5),(1),(0),null,null,null));
});
cljs.reader.register_tag_parser_BANG_.call(null,clojure.string.replace.call(null,cljs.core.pr_str.call(null,uxbox.shapes.core.Rectangle),"/","."),uxbox.shapes.core.map__GT_Rectangle);
cljs.reader.register_tag_parser_BANG_.call(null,clojure.string.replace.call(null,cljs.core.pr_str.call(null,uxbox.shapes.core.Line),"/","."),uxbox.shapes.core.map__GT_Line);
cljs.reader.register_tag_parser_BANG_.call(null,clojure.string.replace.call(null,cljs.core.pr_str.call(null,uxbox.shapes.core.Path),"/","."),uxbox.shapes.core.map__GT_Path);
cljs.reader.register_tag_parser_BANG_.call(null,clojure.string.replace.call(null,cljs.core.pr_str.call(null,uxbox.shapes.core.Circle),"/","."),uxbox.shapes.core.map__GT_Circle);

//# sourceMappingURL=core.js.map?rel=1437054880906