// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t26752 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26752 = (function (fn_handler,f,meta26753){
this.fn_handler = fn_handler;
this.f = f;
this.meta26753 = meta26753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26754,meta26753__$1){
var self__ = this;
var _26754__$1 = this;
return (new cljs.core.async.t26752(self__.fn_handler,self__.f,meta26753__$1));
});

cljs.core.async.t26752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26754){
var self__ = this;
var _26754__$1 = this;
return self__.meta26753;
});

cljs.core.async.t26752.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26752.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26752.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26753","meta26753",2014372375,null)], null);
});

cljs.core.async.t26752.cljs$lang$type = true;

cljs.core.async.t26752.cljs$lang$ctorStr = "cljs.core.async/t26752";

cljs.core.async.t26752.cljs$lang$ctorPrWriter = (function (this__18716__auto__,writer__18717__auto__,opt__18718__auto__){
return cljs.core._write.call(null,writer__18717__auto__,"cljs.core.async/t26752");
});

cljs.core.async.__GT_t26752 = (function cljs$core$async$fn_handler_$___GT_t26752(fn_handler__$1,f__$1,meta26753){
return (new cljs.core.async.t26752(fn_handler__$1,f__$1,meta26753));
});

}

return (new cljs.core.async.t26752(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__26756 = buff;
if(G__26756){
var bit__18811__auto__ = null;
if(cljs.core.truth_((function (){var or__18137__auto__ = bit__18811__auto__;
if(cljs.core.truth_(or__18137__auto__)){
return or__18137__auto__;
} else {
return G__26756.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26756.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26756);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26756);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__26758 = arguments.length;
switch (G__26758) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__26761 = arguments.length;
switch (G__26761) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26763 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26763);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26763,ret){
return (function (){
return fn1.call(null,val_26763);
});})(val_26763,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__26765 = arguments.length;
switch (G__26765) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19022__auto___26767 = n;
var x_26768 = (0);
while(true){
if((x_26768 < n__19022__auto___26767)){
(a[x_26768] = (0));

var G__26769 = (x_26768 + (1));
x_26768 = G__26769;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26770 = (i + (1));
i = G__26770;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26774 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26774 = (function (alt_flag,flag,meta26775){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26775 = meta26775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26776,meta26775__$1){
var self__ = this;
var _26776__$1 = this;
return (new cljs.core.async.t26774(self__.alt_flag,self__.flag,meta26775__$1));
});})(flag))
;

cljs.core.async.t26774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26776){
var self__ = this;
var _26776__$1 = this;
return self__.meta26775;
});})(flag))
;

cljs.core.async.t26774.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26774.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26774.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26774.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26775","meta26775",449072769,null)], null);
});})(flag))
;

cljs.core.async.t26774.cljs$lang$type = true;

cljs.core.async.t26774.cljs$lang$ctorStr = "cljs.core.async/t26774";

cljs.core.async.t26774.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18716__auto__,writer__18717__auto__,opt__18718__auto__){
return cljs.core._write.call(null,writer__18717__auto__,"cljs.core.async/t26774");
});})(flag))
;

cljs.core.async.__GT_t26774 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26774(alt_flag__$1,flag__$1,meta26775){
return (new cljs.core.async.t26774(alt_flag__$1,flag__$1,meta26775));
});})(flag))
;

}

return (new cljs.core.async.t26774(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26780 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26780 = (function (alt_handler,flag,cb,meta26781){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26781 = meta26781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26782,meta26781__$1){
var self__ = this;
var _26782__$1 = this;
return (new cljs.core.async.t26780(self__.alt_handler,self__.flag,self__.cb,meta26781__$1));
});

cljs.core.async.t26780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26782){
var self__ = this;
var _26782__$1 = this;
return self__.meta26781;
});

cljs.core.async.t26780.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26781","meta26781",1248186230,null)], null);
});

cljs.core.async.t26780.cljs$lang$type = true;

cljs.core.async.t26780.cljs$lang$ctorStr = "cljs.core.async/t26780";

cljs.core.async.t26780.cljs$lang$ctorPrWriter = (function (this__18716__auto__,writer__18717__auto__,opt__18718__auto__){
return cljs.core._write.call(null,writer__18717__auto__,"cljs.core.async/t26780");
});

cljs.core.async.__GT_t26780 = (function cljs$core$async$alt_handler_$___GT_t26780(alt_handler__$1,flag__$1,cb__$1,meta26781){
return (new cljs.core.async.t26780(alt_handler__$1,flag__$1,cb__$1,meta26781));
});

}

return (new cljs.core.async.t26780(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26783_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26783_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26784_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26784_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18137__auto__ = wport;
if(cljs.core.truth_(or__18137__auto__)){
return or__18137__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26785 = (i + (1));
i = G__26785;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18137__auto__ = ret;
if(cljs.core.truth_(or__18137__auto__)){
return or__18137__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__18125__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18125__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18125__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19177__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19177__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26788){
var map__26789 = p__26788;
var map__26789__$1 = ((cljs.core.seq_QMARK_.call(null,map__26789))?cljs.core.apply.call(null,cljs.core.hash_map,map__26789):map__26789);
var opts = map__26789__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26786){
var G__26787 = cljs.core.first.call(null,seq26786);
var seq26786__$1 = cljs.core.next.call(null,seq26786);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26787,seq26786__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__26791 = arguments.length;
switch (G__26791) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21372__auto___26840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___26840){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___26840){
return (function (state_26815){
var state_val_26816 = (state_26815[(1)]);
if((state_val_26816 === (7))){
var inst_26811 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
var statearr_26817_26841 = state_26815__$1;
(statearr_26817_26841[(2)] = inst_26811);

(statearr_26817_26841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (1))){
var state_26815__$1 = state_26815;
var statearr_26818_26842 = state_26815__$1;
(statearr_26818_26842[(2)] = null);

(statearr_26818_26842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (4))){
var inst_26794 = (state_26815[(7)]);
var inst_26794__$1 = (state_26815[(2)]);
var inst_26795 = (inst_26794__$1 == null);
var state_26815__$1 = (function (){var statearr_26819 = state_26815;
(statearr_26819[(7)] = inst_26794__$1);

return statearr_26819;
})();
if(cljs.core.truth_(inst_26795)){
var statearr_26820_26843 = state_26815__$1;
(statearr_26820_26843[(1)] = (5));

} else {
var statearr_26821_26844 = state_26815__$1;
(statearr_26821_26844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (13))){
var state_26815__$1 = state_26815;
var statearr_26822_26845 = state_26815__$1;
(statearr_26822_26845[(2)] = null);

(statearr_26822_26845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (6))){
var inst_26794 = (state_26815[(7)]);
var state_26815__$1 = state_26815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26815__$1,(11),to,inst_26794);
} else {
if((state_val_26816 === (3))){
var inst_26813 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26815__$1,inst_26813);
} else {
if((state_val_26816 === (12))){
var state_26815__$1 = state_26815;
var statearr_26823_26846 = state_26815__$1;
(statearr_26823_26846[(2)] = null);

(statearr_26823_26846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (2))){
var state_26815__$1 = state_26815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26815__$1,(4),from);
} else {
if((state_val_26816 === (11))){
var inst_26804 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
if(cljs.core.truth_(inst_26804)){
var statearr_26824_26847 = state_26815__$1;
(statearr_26824_26847[(1)] = (12));

} else {
var statearr_26825_26848 = state_26815__$1;
(statearr_26825_26848[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (9))){
var state_26815__$1 = state_26815;
var statearr_26826_26849 = state_26815__$1;
(statearr_26826_26849[(2)] = null);

(statearr_26826_26849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (5))){
var state_26815__$1 = state_26815;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26827_26850 = state_26815__$1;
(statearr_26827_26850[(1)] = (8));

} else {
var statearr_26828_26851 = state_26815__$1;
(statearr_26828_26851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (14))){
var inst_26809 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
var statearr_26829_26852 = state_26815__$1;
(statearr_26829_26852[(2)] = inst_26809);

(statearr_26829_26852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (10))){
var inst_26801 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
var statearr_26830_26853 = state_26815__$1;
(statearr_26830_26853[(2)] = inst_26801);

(statearr_26830_26853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (8))){
var inst_26798 = cljs.core.async.close_BANG_.call(null,to);
var state_26815__$1 = state_26815;
var statearr_26831_26854 = state_26815__$1;
(statearr_26831_26854[(2)] = inst_26798);

(statearr_26831_26854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});})(c__21372__auto___26840))
;
return ((function (switch__21310__auto__,c__21372__auto___26840){
return (function() {
var cljs$core$async$state_machine__21311__auto__ = null;
var cljs$core$async$state_machine__21311__auto____0 = (function (){
var statearr_26835 = [null,null,null,null,null,null,null,null];
(statearr_26835[(0)] = cljs$core$async$state_machine__21311__auto__);

(statearr_26835[(1)] = (1));

return statearr_26835;
});
var cljs$core$async$state_machine__21311__auto____1 = (function (state_26815){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_26815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e26836){if((e26836 instanceof Object)){
var ex__21314__auto__ = e26836;
var statearr_26837_26855 = state_26815;
(statearr_26837_26855[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26856 = state_26815;
state_26815 = G__26856;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$state_machine__21311__auto__ = function(state_26815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21311__auto____1.call(this,state_26815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21311__auto____0;
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21311__auto____1;
return cljs$core$async$state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___26840))
})();
var state__21374__auto__ = (function (){var statearr_26838 = f__21373__auto__.call(null);
(statearr_26838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___26840);

return statearr_26838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___26840))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27040){
var vec__27041 = p__27040;
var v = cljs.core.nth.call(null,vec__27041,(0),null);
var p = cljs.core.nth.call(null,vec__27041,(1),null);
var job = vec__27041;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21372__auto___27223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___27223,res,vec__27041,v,p,job,jobs,results){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___27223,res,vec__27041,v,p,job,jobs,results){
return (function (state_27046){
var state_val_27047 = (state_27046[(1)]);
if((state_val_27047 === (1))){
var state_27046__$1 = state_27046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27046__$1,(2),res,v);
} else {
if((state_val_27047 === (2))){
var inst_27043 = (state_27046[(2)]);
var inst_27044 = cljs.core.async.close_BANG_.call(null,res);
var state_27046__$1 = (function (){var statearr_27048 = state_27046;
(statearr_27048[(7)] = inst_27043);

return statearr_27048;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27046__$1,inst_27044);
} else {
return null;
}
}
});})(c__21372__auto___27223,res,vec__27041,v,p,job,jobs,results))
;
return ((function (switch__21310__auto__,c__21372__auto___27223,res,vec__27041,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____0 = (function (){
var statearr_27052 = [null,null,null,null,null,null,null,null];
(statearr_27052[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__);

(statearr_27052[(1)] = (1));

return statearr_27052;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____1 = (function (state_27046){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_27046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e27053){if((e27053 instanceof Object)){
var ex__21314__auto__ = e27053;
var statearr_27054_27224 = state_27046;
(statearr_27054_27224[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27225 = state_27046;
state_27046 = G__27225;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__ = function(state_27046){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____1.call(this,state_27046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___27223,res,vec__27041,v,p,job,jobs,results))
})();
var state__21374__auto__ = (function (){var statearr_27055 = f__21373__auto__.call(null);
(statearr_27055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___27223);

return statearr_27055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___27223,res,vec__27041,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27056){
var vec__27057 = p__27056;
var v = cljs.core.nth.call(null,vec__27057,(0),null);
var p = cljs.core.nth.call(null,vec__27057,(1),null);
var job = vec__27057;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19022__auto___27226 = n;
var __27227 = (0);
while(true){
if((__27227 < n__19022__auto___27226)){
var G__27058_27228 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27058_27228) {
case "compute":
var c__21372__auto___27230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27227,c__21372__auto___27230,G__27058_27228,n__19022__auto___27226,jobs,results,process,async){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (__27227,c__21372__auto___27230,G__27058_27228,n__19022__auto___27226,jobs,results,process,async){
return (function (state_27071){
var state_val_27072 = (state_27071[(1)]);
if((state_val_27072 === (1))){
var state_27071__$1 = state_27071;
var statearr_27073_27231 = state_27071__$1;
(statearr_27073_27231[(2)] = null);

(statearr_27073_27231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27072 === (2))){
var state_27071__$1 = state_27071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27071__$1,(4),jobs);
} else {
if((state_val_27072 === (3))){
var inst_27069 = (state_27071[(2)]);
var state_27071__$1 = state_27071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27071__$1,inst_27069);
} else {
if((state_val_27072 === (4))){
var inst_27061 = (state_27071[(2)]);
var inst_27062 = process.call(null,inst_27061);
var state_27071__$1 = state_27071;
if(cljs.core.truth_(inst_27062)){
var statearr_27074_27232 = state_27071__$1;
(statearr_27074_27232[(1)] = (5));

} else {
var statearr_27075_27233 = state_27071__$1;
(statearr_27075_27233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27072 === (5))){
var state_27071__$1 = state_27071;
var statearr_27076_27234 = state_27071__$1;
(statearr_27076_27234[(2)] = null);

(statearr_27076_27234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27072 === (6))){
var state_27071__$1 = state_27071;
var statearr_27077_27235 = state_27071__$1;
(statearr_27077_27235[(2)] = null);

(statearr_27077_27235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27072 === (7))){
var inst_27067 = (state_27071[(2)]);
var state_27071__$1 = state_27071;
var statearr_27078_27236 = state_27071__$1;
(statearr_27078_27236[(2)] = inst_27067);

(statearr_27078_27236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27227,c__21372__auto___27230,G__27058_27228,n__19022__auto___27226,jobs,results,process,async))
;
return ((function (__27227,switch__21310__auto__,c__21372__auto___27230,G__27058_27228,n__19022__auto___27226,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____0 = (function (){
var statearr_27082 = [null,null,null,null,null,null,null];
(statearr_27082[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__);

(statearr_27082[(1)] = (1));

return statearr_27082;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____1 = (function (state_27071){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_27071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e27083){if((e27083 instanceof Object)){
var ex__21314__auto__ = e27083;
var statearr_27084_27237 = state_27071;
(statearr_27084_27237[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27238 = state_27071;
state_27071 = G__27238;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__ = function(state_27071){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____1.call(this,state_27071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__;
})()
;})(__27227,switch__21310__auto__,c__21372__auto___27230,G__27058_27228,n__19022__auto___27226,jobs,results,process,async))
})();
var state__21374__auto__ = (function (){var statearr_27085 = f__21373__auto__.call(null);
(statearr_27085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___27230);

return statearr_27085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(__27227,c__21372__auto___27230,G__27058_27228,n__19022__auto___27226,jobs,results,process,async))
);


break;
case "async":
var c__21372__auto___27239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27227,c__21372__auto___27239,G__27058_27228,n__19022__auto___27226,jobs,results,process,async){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (__27227,c__21372__auto___27239,G__27058_27228,n__19022__auto___27226,jobs,results,process,async){
return (function (state_27098){
var state_val_27099 = (state_27098[(1)]);
if((state_val_27099 === (1))){
var state_27098__$1 = state_27098;
var statearr_27100_27240 = state_27098__$1;
(statearr_27100_27240[(2)] = null);

(statearr_27100_27240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27099 === (2))){
var state_27098__$1 = state_27098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27098__$1,(4),jobs);
} else {
if((state_val_27099 === (3))){
var inst_27096 = (state_27098[(2)]);
var state_27098__$1 = state_27098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27098__$1,inst_27096);
} else {
if((state_val_27099 === (4))){
var inst_27088 = (state_27098[(2)]);
var inst_27089 = async.call(null,inst_27088);
var state_27098__$1 = state_27098;
if(cljs.core.truth_(inst_27089)){
var statearr_27101_27241 = state_27098__$1;
(statearr_27101_27241[(1)] = (5));

} else {
var statearr_27102_27242 = state_27098__$1;
(statearr_27102_27242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27099 === (5))){
var state_27098__$1 = state_27098;
var statearr_27103_27243 = state_27098__$1;
(statearr_27103_27243[(2)] = null);

(statearr_27103_27243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27099 === (6))){
var state_27098__$1 = state_27098;
var statearr_27104_27244 = state_27098__$1;
(statearr_27104_27244[(2)] = null);

(statearr_27104_27244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27099 === (7))){
var inst_27094 = (state_27098[(2)]);
var state_27098__$1 = state_27098;
var statearr_27105_27245 = state_27098__$1;
(statearr_27105_27245[(2)] = inst_27094);

(statearr_27105_27245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27227,c__21372__auto___27239,G__27058_27228,n__19022__auto___27226,jobs,results,process,async))
;
return ((function (__27227,switch__21310__auto__,c__21372__auto___27239,G__27058_27228,n__19022__auto___27226,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____0 = (function (){
var statearr_27109 = [null,null,null,null,null,null,null];
(statearr_27109[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__);

(statearr_27109[(1)] = (1));

return statearr_27109;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____1 = (function (state_27098){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_27098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e27110){if((e27110 instanceof Object)){
var ex__21314__auto__ = e27110;
var statearr_27111_27246 = state_27098;
(statearr_27111_27246[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27247 = state_27098;
state_27098 = G__27247;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__ = function(state_27098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____1.call(this,state_27098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__;
})()
;})(__27227,switch__21310__auto__,c__21372__auto___27239,G__27058_27228,n__19022__auto___27226,jobs,results,process,async))
})();
var state__21374__auto__ = (function (){var statearr_27112 = f__21373__auto__.call(null);
(statearr_27112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___27239);

return statearr_27112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(__27227,c__21372__auto___27239,G__27058_27228,n__19022__auto___27226,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27248 = (__27227 + (1));
__27227 = G__27248;
continue;
} else {
}
break;
}

var c__21372__auto___27249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___27249,jobs,results,process,async){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___27249,jobs,results,process,async){
return (function (state_27134){
var state_val_27135 = (state_27134[(1)]);
if((state_val_27135 === (1))){
var state_27134__$1 = state_27134;
var statearr_27136_27250 = state_27134__$1;
(statearr_27136_27250[(2)] = null);

(statearr_27136_27250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27135 === (2))){
var state_27134__$1 = state_27134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27134__$1,(4),from);
} else {
if((state_val_27135 === (3))){
var inst_27132 = (state_27134[(2)]);
var state_27134__$1 = state_27134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27134__$1,inst_27132);
} else {
if((state_val_27135 === (4))){
var inst_27115 = (state_27134[(7)]);
var inst_27115__$1 = (state_27134[(2)]);
var inst_27116 = (inst_27115__$1 == null);
var state_27134__$1 = (function (){var statearr_27137 = state_27134;
(statearr_27137[(7)] = inst_27115__$1);

return statearr_27137;
})();
if(cljs.core.truth_(inst_27116)){
var statearr_27138_27251 = state_27134__$1;
(statearr_27138_27251[(1)] = (5));

} else {
var statearr_27139_27252 = state_27134__$1;
(statearr_27139_27252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27135 === (5))){
var inst_27118 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27134__$1 = state_27134;
var statearr_27140_27253 = state_27134__$1;
(statearr_27140_27253[(2)] = inst_27118);

(statearr_27140_27253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27135 === (6))){
var inst_27120 = (state_27134[(8)]);
var inst_27115 = (state_27134[(7)]);
var inst_27120__$1 = cljs.core.async.chan.call(null,(1));
var inst_27121 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27122 = [inst_27115,inst_27120__$1];
var inst_27123 = (new cljs.core.PersistentVector(null,2,(5),inst_27121,inst_27122,null));
var state_27134__$1 = (function (){var statearr_27141 = state_27134;
(statearr_27141[(8)] = inst_27120__$1);

return statearr_27141;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27134__$1,(8),jobs,inst_27123);
} else {
if((state_val_27135 === (7))){
var inst_27130 = (state_27134[(2)]);
var state_27134__$1 = state_27134;
var statearr_27142_27254 = state_27134__$1;
(statearr_27142_27254[(2)] = inst_27130);

(statearr_27142_27254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27135 === (8))){
var inst_27120 = (state_27134[(8)]);
var inst_27125 = (state_27134[(2)]);
var state_27134__$1 = (function (){var statearr_27143 = state_27134;
(statearr_27143[(9)] = inst_27125);

return statearr_27143;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27134__$1,(9),results,inst_27120);
} else {
if((state_val_27135 === (9))){
var inst_27127 = (state_27134[(2)]);
var state_27134__$1 = (function (){var statearr_27144 = state_27134;
(statearr_27144[(10)] = inst_27127);

return statearr_27144;
})();
var statearr_27145_27255 = state_27134__$1;
(statearr_27145_27255[(2)] = null);

(statearr_27145_27255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__21372__auto___27249,jobs,results,process,async))
;
return ((function (switch__21310__auto__,c__21372__auto___27249,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____0 = (function (){
var statearr_27149 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__);

(statearr_27149[(1)] = (1));

return statearr_27149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____1 = (function (state_27134){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_27134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e27150){if((e27150 instanceof Object)){
var ex__21314__auto__ = e27150;
var statearr_27151_27256 = state_27134;
(statearr_27151_27256[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27257 = state_27134;
state_27134 = G__27257;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__ = function(state_27134){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____1.call(this,state_27134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___27249,jobs,results,process,async))
})();
var state__21374__auto__ = (function (){var statearr_27152 = f__21373__auto__.call(null);
(statearr_27152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___27249);

return statearr_27152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___27249,jobs,results,process,async))
);


var c__21372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto__,jobs,results,process,async){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto__,jobs,results,process,async){
return (function (state_27190){
var state_val_27191 = (state_27190[(1)]);
if((state_val_27191 === (7))){
var inst_27186 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27192_27258 = state_27190__$1;
(statearr_27192_27258[(2)] = inst_27186);

(statearr_27192_27258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (20))){
var state_27190__$1 = state_27190;
var statearr_27193_27259 = state_27190__$1;
(statearr_27193_27259[(2)] = null);

(statearr_27193_27259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (1))){
var state_27190__$1 = state_27190;
var statearr_27194_27260 = state_27190__$1;
(statearr_27194_27260[(2)] = null);

(statearr_27194_27260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (4))){
var inst_27155 = (state_27190[(7)]);
var inst_27155__$1 = (state_27190[(2)]);
var inst_27156 = (inst_27155__$1 == null);
var state_27190__$1 = (function (){var statearr_27195 = state_27190;
(statearr_27195[(7)] = inst_27155__$1);

return statearr_27195;
})();
if(cljs.core.truth_(inst_27156)){
var statearr_27196_27261 = state_27190__$1;
(statearr_27196_27261[(1)] = (5));

} else {
var statearr_27197_27262 = state_27190__$1;
(statearr_27197_27262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (15))){
var inst_27168 = (state_27190[(8)]);
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27190__$1,(18),to,inst_27168);
} else {
if((state_val_27191 === (21))){
var inst_27181 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27198_27263 = state_27190__$1;
(statearr_27198_27263[(2)] = inst_27181);

(statearr_27198_27263[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (13))){
var inst_27183 = (state_27190[(2)]);
var state_27190__$1 = (function (){var statearr_27199 = state_27190;
(statearr_27199[(9)] = inst_27183);

return statearr_27199;
})();
var statearr_27200_27264 = state_27190__$1;
(statearr_27200_27264[(2)] = null);

(statearr_27200_27264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (6))){
var inst_27155 = (state_27190[(7)]);
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27190__$1,(11),inst_27155);
} else {
if((state_val_27191 === (17))){
var inst_27176 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
if(cljs.core.truth_(inst_27176)){
var statearr_27201_27265 = state_27190__$1;
(statearr_27201_27265[(1)] = (19));

} else {
var statearr_27202_27266 = state_27190__$1;
(statearr_27202_27266[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (3))){
var inst_27188 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27190__$1,inst_27188);
} else {
if((state_val_27191 === (12))){
var inst_27165 = (state_27190[(10)]);
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27190__$1,(14),inst_27165);
} else {
if((state_val_27191 === (2))){
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27190__$1,(4),results);
} else {
if((state_val_27191 === (19))){
var state_27190__$1 = state_27190;
var statearr_27203_27267 = state_27190__$1;
(statearr_27203_27267[(2)] = null);

(statearr_27203_27267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (11))){
var inst_27165 = (state_27190[(2)]);
var state_27190__$1 = (function (){var statearr_27204 = state_27190;
(statearr_27204[(10)] = inst_27165);

return statearr_27204;
})();
var statearr_27205_27268 = state_27190__$1;
(statearr_27205_27268[(2)] = null);

(statearr_27205_27268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (9))){
var state_27190__$1 = state_27190;
var statearr_27206_27269 = state_27190__$1;
(statearr_27206_27269[(2)] = null);

(statearr_27206_27269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (5))){
var state_27190__$1 = state_27190;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27207_27270 = state_27190__$1;
(statearr_27207_27270[(1)] = (8));

} else {
var statearr_27208_27271 = state_27190__$1;
(statearr_27208_27271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (14))){
var inst_27168 = (state_27190[(8)]);
var inst_27170 = (state_27190[(11)]);
var inst_27168__$1 = (state_27190[(2)]);
var inst_27169 = (inst_27168__$1 == null);
var inst_27170__$1 = cljs.core.not.call(null,inst_27169);
var state_27190__$1 = (function (){var statearr_27209 = state_27190;
(statearr_27209[(8)] = inst_27168__$1);

(statearr_27209[(11)] = inst_27170__$1);

return statearr_27209;
})();
if(inst_27170__$1){
var statearr_27210_27272 = state_27190__$1;
(statearr_27210_27272[(1)] = (15));

} else {
var statearr_27211_27273 = state_27190__$1;
(statearr_27211_27273[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (16))){
var inst_27170 = (state_27190[(11)]);
var state_27190__$1 = state_27190;
var statearr_27212_27274 = state_27190__$1;
(statearr_27212_27274[(2)] = inst_27170);

(statearr_27212_27274[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (10))){
var inst_27162 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27213_27275 = state_27190__$1;
(statearr_27213_27275[(2)] = inst_27162);

(statearr_27213_27275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (18))){
var inst_27173 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27214_27276 = state_27190__$1;
(statearr_27214_27276[(2)] = inst_27173);

(statearr_27214_27276[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (8))){
var inst_27159 = cljs.core.async.close_BANG_.call(null,to);
var state_27190__$1 = state_27190;
var statearr_27215_27277 = state_27190__$1;
(statearr_27215_27277[(2)] = inst_27159);

(statearr_27215_27277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
}
});})(c__21372__auto__,jobs,results,process,async))
;
return ((function (switch__21310__auto__,c__21372__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____0 = (function (){
var statearr_27219 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__);

(statearr_27219[(1)] = (1));

return statearr_27219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____1 = (function (state_27190){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_27190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e27220){if((e27220 instanceof Object)){
var ex__21314__auto__ = e27220;
var statearr_27221_27278 = state_27190;
(statearr_27221_27278[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27279 = state_27190;
state_27190 = G__27279;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__ = function(state_27190){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____1.call(this,state_27190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21311__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto__,jobs,results,process,async))
})();
var state__21374__auto__ = (function (){var statearr_27222 = f__21373__auto__.call(null);
(statearr_27222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto__);

return statearr_27222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto__,jobs,results,process,async))
);

return c__21372__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__27281 = arguments.length;
switch (G__27281) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__27284 = arguments.length;
switch (G__27284) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__27287 = arguments.length;
switch (G__27287) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21372__auto___27339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___27339,tc,fc){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___27339,tc,fc){
return (function (state_27313){
var state_val_27314 = (state_27313[(1)]);
if((state_val_27314 === (7))){
var inst_27309 = (state_27313[(2)]);
var state_27313__$1 = state_27313;
var statearr_27315_27340 = state_27313__$1;
(statearr_27315_27340[(2)] = inst_27309);

(statearr_27315_27340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (1))){
var state_27313__$1 = state_27313;
var statearr_27316_27341 = state_27313__$1;
(statearr_27316_27341[(2)] = null);

(statearr_27316_27341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (4))){
var inst_27290 = (state_27313[(7)]);
var inst_27290__$1 = (state_27313[(2)]);
var inst_27291 = (inst_27290__$1 == null);
var state_27313__$1 = (function (){var statearr_27317 = state_27313;
(statearr_27317[(7)] = inst_27290__$1);

return statearr_27317;
})();
if(cljs.core.truth_(inst_27291)){
var statearr_27318_27342 = state_27313__$1;
(statearr_27318_27342[(1)] = (5));

} else {
var statearr_27319_27343 = state_27313__$1;
(statearr_27319_27343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (13))){
var state_27313__$1 = state_27313;
var statearr_27320_27344 = state_27313__$1;
(statearr_27320_27344[(2)] = null);

(statearr_27320_27344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (6))){
var inst_27290 = (state_27313[(7)]);
var inst_27296 = p.call(null,inst_27290);
var state_27313__$1 = state_27313;
if(cljs.core.truth_(inst_27296)){
var statearr_27321_27345 = state_27313__$1;
(statearr_27321_27345[(1)] = (9));

} else {
var statearr_27322_27346 = state_27313__$1;
(statearr_27322_27346[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (3))){
var inst_27311 = (state_27313[(2)]);
var state_27313__$1 = state_27313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27313__$1,inst_27311);
} else {
if((state_val_27314 === (12))){
var state_27313__$1 = state_27313;
var statearr_27323_27347 = state_27313__$1;
(statearr_27323_27347[(2)] = null);

(statearr_27323_27347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (2))){
var state_27313__$1 = state_27313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27313__$1,(4),ch);
} else {
if((state_val_27314 === (11))){
var inst_27290 = (state_27313[(7)]);
var inst_27300 = (state_27313[(2)]);
var state_27313__$1 = state_27313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27313__$1,(8),inst_27300,inst_27290);
} else {
if((state_val_27314 === (9))){
var state_27313__$1 = state_27313;
var statearr_27324_27348 = state_27313__$1;
(statearr_27324_27348[(2)] = tc);

(statearr_27324_27348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (5))){
var inst_27293 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27294 = cljs.core.async.close_BANG_.call(null,fc);
var state_27313__$1 = (function (){var statearr_27325 = state_27313;
(statearr_27325[(8)] = inst_27293);

return statearr_27325;
})();
var statearr_27326_27349 = state_27313__$1;
(statearr_27326_27349[(2)] = inst_27294);

(statearr_27326_27349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (14))){
var inst_27307 = (state_27313[(2)]);
var state_27313__$1 = state_27313;
var statearr_27327_27350 = state_27313__$1;
(statearr_27327_27350[(2)] = inst_27307);

(statearr_27327_27350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (10))){
var state_27313__$1 = state_27313;
var statearr_27328_27351 = state_27313__$1;
(statearr_27328_27351[(2)] = fc);

(statearr_27328_27351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27314 === (8))){
var inst_27302 = (state_27313[(2)]);
var state_27313__$1 = state_27313;
if(cljs.core.truth_(inst_27302)){
var statearr_27329_27352 = state_27313__$1;
(statearr_27329_27352[(1)] = (12));

} else {
var statearr_27330_27353 = state_27313__$1;
(statearr_27330_27353[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});})(c__21372__auto___27339,tc,fc))
;
return ((function (switch__21310__auto__,c__21372__auto___27339,tc,fc){
return (function() {
var cljs$core$async$state_machine__21311__auto__ = null;
var cljs$core$async$state_machine__21311__auto____0 = (function (){
var statearr_27334 = [null,null,null,null,null,null,null,null,null];
(statearr_27334[(0)] = cljs$core$async$state_machine__21311__auto__);

(statearr_27334[(1)] = (1));

return statearr_27334;
});
var cljs$core$async$state_machine__21311__auto____1 = (function (state_27313){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_27313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e27335){if((e27335 instanceof Object)){
var ex__21314__auto__ = e27335;
var statearr_27336_27354 = state_27313;
(statearr_27336_27354[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27355 = state_27313;
state_27313 = G__27355;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$state_machine__21311__auto__ = function(state_27313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21311__auto____1.call(this,state_27313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21311__auto____0;
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21311__auto____1;
return cljs$core$async$state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___27339,tc,fc))
})();
var state__21374__auto__ = (function (){var statearr_27337 = f__21373__auto__.call(null);
(statearr_27337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___27339);

return statearr_27337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___27339,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto__){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto__){
return (function (state_27402){
var state_val_27403 = (state_27402[(1)]);
if((state_val_27403 === (1))){
var inst_27388 = init;
var state_27402__$1 = (function (){var statearr_27404 = state_27402;
(statearr_27404[(7)] = inst_27388);

return statearr_27404;
})();
var statearr_27405_27420 = state_27402__$1;
(statearr_27405_27420[(2)] = null);

(statearr_27405_27420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (2))){
var state_27402__$1 = state_27402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27402__$1,(4),ch);
} else {
if((state_val_27403 === (3))){
var inst_27400 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27402__$1,inst_27400);
} else {
if((state_val_27403 === (4))){
var inst_27391 = (state_27402[(8)]);
var inst_27391__$1 = (state_27402[(2)]);
var inst_27392 = (inst_27391__$1 == null);
var state_27402__$1 = (function (){var statearr_27406 = state_27402;
(statearr_27406[(8)] = inst_27391__$1);

return statearr_27406;
})();
if(cljs.core.truth_(inst_27392)){
var statearr_27407_27421 = state_27402__$1;
(statearr_27407_27421[(1)] = (5));

} else {
var statearr_27408_27422 = state_27402__$1;
(statearr_27408_27422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (5))){
var inst_27388 = (state_27402[(7)]);
var state_27402__$1 = state_27402;
var statearr_27409_27423 = state_27402__$1;
(statearr_27409_27423[(2)] = inst_27388);

(statearr_27409_27423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (6))){
var inst_27391 = (state_27402[(8)]);
var inst_27388 = (state_27402[(7)]);
var inst_27395 = f.call(null,inst_27388,inst_27391);
var inst_27388__$1 = inst_27395;
var state_27402__$1 = (function (){var statearr_27410 = state_27402;
(statearr_27410[(7)] = inst_27388__$1);

return statearr_27410;
})();
var statearr_27411_27424 = state_27402__$1;
(statearr_27411_27424[(2)] = null);

(statearr_27411_27424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (7))){
var inst_27398 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
var statearr_27412_27425 = state_27402__$1;
(statearr_27412_27425[(2)] = inst_27398);

(statearr_27412_27425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21372__auto__))
;
return ((function (switch__21310__auto__,c__21372__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21311__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21311__auto____0 = (function (){
var statearr_27416 = [null,null,null,null,null,null,null,null,null];
(statearr_27416[(0)] = cljs$core$async$reduce_$_state_machine__21311__auto__);

(statearr_27416[(1)] = (1));

return statearr_27416;
});
var cljs$core$async$reduce_$_state_machine__21311__auto____1 = (function (state_27402){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_27402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e27417){if((e27417 instanceof Object)){
var ex__21314__auto__ = e27417;
var statearr_27418_27426 = state_27402;
(statearr_27418_27426[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27427 = state_27402;
state_27402 = G__27427;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21311__auto__ = function(state_27402){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21311__auto____1.call(this,state_27402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21311__auto____0;
cljs$core$async$reduce_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21311__auto____1;
return cljs$core$async$reduce_$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto__))
})();
var state__21374__auto__ = (function (){var statearr_27419 = f__21373__auto__.call(null);
(statearr_27419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto__);

return statearr_27419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto__))
);

return c__21372__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__27429 = arguments.length;
switch (G__27429) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto__){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto__){
return (function (state_27454){
var state_val_27455 = (state_27454[(1)]);
if((state_val_27455 === (7))){
var inst_27436 = (state_27454[(2)]);
var state_27454__$1 = state_27454;
var statearr_27456_27480 = state_27454__$1;
(statearr_27456_27480[(2)] = inst_27436);

(statearr_27456_27480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27455 === (1))){
var inst_27430 = cljs.core.seq.call(null,coll);
var inst_27431 = inst_27430;
var state_27454__$1 = (function (){var statearr_27457 = state_27454;
(statearr_27457[(7)] = inst_27431);

return statearr_27457;
})();
var statearr_27458_27481 = state_27454__$1;
(statearr_27458_27481[(2)] = null);

(statearr_27458_27481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27455 === (4))){
var inst_27431 = (state_27454[(7)]);
var inst_27434 = cljs.core.first.call(null,inst_27431);
var state_27454__$1 = state_27454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27454__$1,(7),ch,inst_27434);
} else {
if((state_val_27455 === (13))){
var inst_27448 = (state_27454[(2)]);
var state_27454__$1 = state_27454;
var statearr_27459_27482 = state_27454__$1;
(statearr_27459_27482[(2)] = inst_27448);

(statearr_27459_27482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27455 === (6))){
var inst_27439 = (state_27454[(2)]);
var state_27454__$1 = state_27454;
if(cljs.core.truth_(inst_27439)){
var statearr_27460_27483 = state_27454__$1;
(statearr_27460_27483[(1)] = (8));

} else {
var statearr_27461_27484 = state_27454__$1;
(statearr_27461_27484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27455 === (3))){
var inst_27452 = (state_27454[(2)]);
var state_27454__$1 = state_27454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27454__$1,inst_27452);
} else {
if((state_val_27455 === (12))){
var state_27454__$1 = state_27454;
var statearr_27462_27485 = state_27454__$1;
(statearr_27462_27485[(2)] = null);

(statearr_27462_27485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27455 === (2))){
var inst_27431 = (state_27454[(7)]);
var state_27454__$1 = state_27454;
if(cljs.core.truth_(inst_27431)){
var statearr_27463_27486 = state_27454__$1;
(statearr_27463_27486[(1)] = (4));

} else {
var statearr_27464_27487 = state_27454__$1;
(statearr_27464_27487[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27455 === (11))){
var inst_27445 = cljs.core.async.close_BANG_.call(null,ch);
var state_27454__$1 = state_27454;
var statearr_27465_27488 = state_27454__$1;
(statearr_27465_27488[(2)] = inst_27445);

(statearr_27465_27488[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27455 === (9))){
var state_27454__$1 = state_27454;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27466_27489 = state_27454__$1;
(statearr_27466_27489[(1)] = (11));

} else {
var statearr_27467_27490 = state_27454__$1;
(statearr_27467_27490[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27455 === (5))){
var inst_27431 = (state_27454[(7)]);
var state_27454__$1 = state_27454;
var statearr_27468_27491 = state_27454__$1;
(statearr_27468_27491[(2)] = inst_27431);

(statearr_27468_27491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27455 === (10))){
var inst_27450 = (state_27454[(2)]);
var state_27454__$1 = state_27454;
var statearr_27469_27492 = state_27454__$1;
(statearr_27469_27492[(2)] = inst_27450);

(statearr_27469_27492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27455 === (8))){
var inst_27431 = (state_27454[(7)]);
var inst_27441 = cljs.core.next.call(null,inst_27431);
var inst_27431__$1 = inst_27441;
var state_27454__$1 = (function (){var statearr_27470 = state_27454;
(statearr_27470[(7)] = inst_27431__$1);

return statearr_27470;
})();
var statearr_27471_27493 = state_27454__$1;
(statearr_27471_27493[(2)] = null);

(statearr_27471_27493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__21372__auto__))
;
return ((function (switch__21310__auto__,c__21372__auto__){
return (function() {
var cljs$core$async$state_machine__21311__auto__ = null;
var cljs$core$async$state_machine__21311__auto____0 = (function (){
var statearr_27475 = [null,null,null,null,null,null,null,null];
(statearr_27475[(0)] = cljs$core$async$state_machine__21311__auto__);

(statearr_27475[(1)] = (1));

return statearr_27475;
});
var cljs$core$async$state_machine__21311__auto____1 = (function (state_27454){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_27454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e27476){if((e27476 instanceof Object)){
var ex__21314__auto__ = e27476;
var statearr_27477_27494 = state_27454;
(statearr_27477_27494[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27495 = state_27454;
state_27454 = G__27495;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$state_machine__21311__auto__ = function(state_27454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21311__auto____1.call(this,state_27454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21311__auto____0;
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21311__auto____1;
return cljs$core$async$state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto__))
})();
var state__21374__auto__ = (function (){var statearr_27478 = f__21373__auto__.call(null);
(statearr_27478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto__);

return statearr_27478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto__))
);

return c__21372__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27497 = {};
return obj27497;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18125__auto__ = _;
if(and__18125__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18125__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18773__auto__ = (((_ == null))?null:_);
return (function (){var or__18137__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27499 = {};
return obj27499;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18125__auto__ = m;
if(and__18125__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18125__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18773__auto__ = (((m == null))?null:m);
return (function (){var or__18137__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18125__auto__ = m;
if(and__18125__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18125__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18773__auto__ = (((m == null))?null:m);
return (function (){var or__18137__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18125__auto__ = m;
if(and__18125__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18125__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18773__auto__ = (((m == null))?null:m);
return (function (){var or__18137__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27721 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27721 = (function (mult,ch,cs,meta27722){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27722 = meta27722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27723,meta27722__$1){
var self__ = this;
var _27723__$1 = this;
return (new cljs.core.async.t27721(self__.mult,self__.ch,self__.cs,meta27722__$1));
});})(cs))
;

cljs.core.async.t27721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27723){
var self__ = this;
var _27723__$1 = this;
return self__.meta27722;
});})(cs))
;

cljs.core.async.t27721.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27721.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27721.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27721.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27721.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27721.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27721.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27722","meta27722",57708328,null)], null);
});})(cs))
;

cljs.core.async.t27721.cljs$lang$type = true;

cljs.core.async.t27721.cljs$lang$ctorStr = "cljs.core.async/t27721";

cljs.core.async.t27721.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18716__auto__,writer__18717__auto__,opt__18718__auto__){
return cljs.core._write.call(null,writer__18717__auto__,"cljs.core.async/t27721");
});})(cs))
;

cljs.core.async.__GT_t27721 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27721(mult__$1,ch__$1,cs__$1,meta27722){
return (new cljs.core.async.t27721(mult__$1,ch__$1,cs__$1,meta27722));
});})(cs))
;

}

return (new cljs.core.async.t27721(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21372__auto___27942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___27942,cs,m,dchan,dctr,done){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___27942,cs,m,dchan,dctr,done){
return (function (state_27854){
var state_val_27855 = (state_27854[(1)]);
if((state_val_27855 === (7))){
var inst_27850 = (state_27854[(2)]);
var state_27854__$1 = state_27854;
var statearr_27856_27943 = state_27854__$1;
(statearr_27856_27943[(2)] = inst_27850);

(statearr_27856_27943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (20))){
var inst_27755 = (state_27854[(7)]);
var inst_27765 = cljs.core.first.call(null,inst_27755);
var inst_27766 = cljs.core.nth.call(null,inst_27765,(0),null);
var inst_27767 = cljs.core.nth.call(null,inst_27765,(1),null);
var state_27854__$1 = (function (){var statearr_27857 = state_27854;
(statearr_27857[(8)] = inst_27766);

return statearr_27857;
})();
if(cljs.core.truth_(inst_27767)){
var statearr_27858_27944 = state_27854__$1;
(statearr_27858_27944[(1)] = (22));

} else {
var statearr_27859_27945 = state_27854__$1;
(statearr_27859_27945[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (27))){
var inst_27802 = (state_27854[(9)]);
var inst_27797 = (state_27854[(10)]);
var inst_27726 = (state_27854[(11)]);
var inst_27795 = (state_27854[(12)]);
var inst_27802__$1 = cljs.core._nth.call(null,inst_27795,inst_27797);
var inst_27803 = cljs.core.async.put_BANG_.call(null,inst_27802__$1,inst_27726,done);
var state_27854__$1 = (function (){var statearr_27860 = state_27854;
(statearr_27860[(9)] = inst_27802__$1);

return statearr_27860;
})();
if(cljs.core.truth_(inst_27803)){
var statearr_27861_27946 = state_27854__$1;
(statearr_27861_27946[(1)] = (30));

} else {
var statearr_27862_27947 = state_27854__$1;
(statearr_27862_27947[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (1))){
var state_27854__$1 = state_27854;
var statearr_27863_27948 = state_27854__$1;
(statearr_27863_27948[(2)] = null);

(statearr_27863_27948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (24))){
var inst_27755 = (state_27854[(7)]);
var inst_27772 = (state_27854[(2)]);
var inst_27773 = cljs.core.next.call(null,inst_27755);
var inst_27735 = inst_27773;
var inst_27736 = null;
var inst_27737 = (0);
var inst_27738 = (0);
var state_27854__$1 = (function (){var statearr_27864 = state_27854;
(statearr_27864[(13)] = inst_27736);

(statearr_27864[(14)] = inst_27738);

(statearr_27864[(15)] = inst_27735);

(statearr_27864[(16)] = inst_27772);

(statearr_27864[(17)] = inst_27737);

return statearr_27864;
})();
var statearr_27865_27949 = state_27854__$1;
(statearr_27865_27949[(2)] = null);

(statearr_27865_27949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (39))){
var state_27854__$1 = state_27854;
var statearr_27869_27950 = state_27854__$1;
(statearr_27869_27950[(2)] = null);

(statearr_27869_27950[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (4))){
var inst_27726 = (state_27854[(11)]);
var inst_27726__$1 = (state_27854[(2)]);
var inst_27727 = (inst_27726__$1 == null);
var state_27854__$1 = (function (){var statearr_27870 = state_27854;
(statearr_27870[(11)] = inst_27726__$1);

return statearr_27870;
})();
if(cljs.core.truth_(inst_27727)){
var statearr_27871_27951 = state_27854__$1;
(statearr_27871_27951[(1)] = (5));

} else {
var statearr_27872_27952 = state_27854__$1;
(statearr_27872_27952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (15))){
var inst_27736 = (state_27854[(13)]);
var inst_27738 = (state_27854[(14)]);
var inst_27735 = (state_27854[(15)]);
var inst_27737 = (state_27854[(17)]);
var inst_27751 = (state_27854[(2)]);
var inst_27752 = (inst_27738 + (1));
var tmp27866 = inst_27736;
var tmp27867 = inst_27735;
var tmp27868 = inst_27737;
var inst_27735__$1 = tmp27867;
var inst_27736__$1 = tmp27866;
var inst_27737__$1 = tmp27868;
var inst_27738__$1 = inst_27752;
var state_27854__$1 = (function (){var statearr_27873 = state_27854;
(statearr_27873[(13)] = inst_27736__$1);

(statearr_27873[(14)] = inst_27738__$1);

(statearr_27873[(15)] = inst_27735__$1);

(statearr_27873[(18)] = inst_27751);

(statearr_27873[(17)] = inst_27737__$1);

return statearr_27873;
})();
var statearr_27874_27953 = state_27854__$1;
(statearr_27874_27953[(2)] = null);

(statearr_27874_27953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (21))){
var inst_27776 = (state_27854[(2)]);
var state_27854__$1 = state_27854;
var statearr_27878_27954 = state_27854__$1;
(statearr_27878_27954[(2)] = inst_27776);

(statearr_27878_27954[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (31))){
var inst_27802 = (state_27854[(9)]);
var inst_27806 = done.call(null,null);
var inst_27807 = cljs.core.async.untap_STAR_.call(null,m,inst_27802);
var state_27854__$1 = (function (){var statearr_27879 = state_27854;
(statearr_27879[(19)] = inst_27806);

return statearr_27879;
})();
var statearr_27880_27955 = state_27854__$1;
(statearr_27880_27955[(2)] = inst_27807);

(statearr_27880_27955[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (32))){
var inst_27797 = (state_27854[(10)]);
var inst_27794 = (state_27854[(20)]);
var inst_27795 = (state_27854[(12)]);
var inst_27796 = (state_27854[(21)]);
var inst_27809 = (state_27854[(2)]);
var inst_27810 = (inst_27797 + (1));
var tmp27875 = inst_27794;
var tmp27876 = inst_27795;
var tmp27877 = inst_27796;
var inst_27794__$1 = tmp27875;
var inst_27795__$1 = tmp27876;
var inst_27796__$1 = tmp27877;
var inst_27797__$1 = inst_27810;
var state_27854__$1 = (function (){var statearr_27881 = state_27854;
(statearr_27881[(10)] = inst_27797__$1);

(statearr_27881[(20)] = inst_27794__$1);

(statearr_27881[(12)] = inst_27795__$1);

(statearr_27881[(21)] = inst_27796__$1);

(statearr_27881[(22)] = inst_27809);

return statearr_27881;
})();
var statearr_27882_27956 = state_27854__$1;
(statearr_27882_27956[(2)] = null);

(statearr_27882_27956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (40))){
var inst_27822 = (state_27854[(23)]);
var inst_27826 = done.call(null,null);
var inst_27827 = cljs.core.async.untap_STAR_.call(null,m,inst_27822);
var state_27854__$1 = (function (){var statearr_27883 = state_27854;
(statearr_27883[(24)] = inst_27826);

return statearr_27883;
})();
var statearr_27884_27957 = state_27854__$1;
(statearr_27884_27957[(2)] = inst_27827);

(statearr_27884_27957[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (33))){
var inst_27813 = (state_27854[(25)]);
var inst_27815 = cljs.core.chunked_seq_QMARK_.call(null,inst_27813);
var state_27854__$1 = state_27854;
if(inst_27815){
var statearr_27885_27958 = state_27854__$1;
(statearr_27885_27958[(1)] = (36));

} else {
var statearr_27886_27959 = state_27854__$1;
(statearr_27886_27959[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (13))){
var inst_27745 = (state_27854[(26)]);
var inst_27748 = cljs.core.async.close_BANG_.call(null,inst_27745);
var state_27854__$1 = state_27854;
var statearr_27887_27960 = state_27854__$1;
(statearr_27887_27960[(2)] = inst_27748);

(statearr_27887_27960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (22))){
var inst_27766 = (state_27854[(8)]);
var inst_27769 = cljs.core.async.close_BANG_.call(null,inst_27766);
var state_27854__$1 = state_27854;
var statearr_27888_27961 = state_27854__$1;
(statearr_27888_27961[(2)] = inst_27769);

(statearr_27888_27961[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (36))){
var inst_27813 = (state_27854[(25)]);
var inst_27817 = cljs.core.chunk_first.call(null,inst_27813);
var inst_27818 = cljs.core.chunk_rest.call(null,inst_27813);
var inst_27819 = cljs.core.count.call(null,inst_27817);
var inst_27794 = inst_27818;
var inst_27795 = inst_27817;
var inst_27796 = inst_27819;
var inst_27797 = (0);
var state_27854__$1 = (function (){var statearr_27889 = state_27854;
(statearr_27889[(10)] = inst_27797);

(statearr_27889[(20)] = inst_27794);

(statearr_27889[(12)] = inst_27795);

(statearr_27889[(21)] = inst_27796);

return statearr_27889;
})();
var statearr_27890_27962 = state_27854__$1;
(statearr_27890_27962[(2)] = null);

(statearr_27890_27962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (41))){
var inst_27813 = (state_27854[(25)]);
var inst_27829 = (state_27854[(2)]);
var inst_27830 = cljs.core.next.call(null,inst_27813);
var inst_27794 = inst_27830;
var inst_27795 = null;
var inst_27796 = (0);
var inst_27797 = (0);
var state_27854__$1 = (function (){var statearr_27891 = state_27854;
(statearr_27891[(10)] = inst_27797);

(statearr_27891[(20)] = inst_27794);

(statearr_27891[(12)] = inst_27795);

(statearr_27891[(21)] = inst_27796);

(statearr_27891[(27)] = inst_27829);

return statearr_27891;
})();
var statearr_27892_27963 = state_27854__$1;
(statearr_27892_27963[(2)] = null);

(statearr_27892_27963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (43))){
var state_27854__$1 = state_27854;
var statearr_27893_27964 = state_27854__$1;
(statearr_27893_27964[(2)] = null);

(statearr_27893_27964[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (29))){
var inst_27838 = (state_27854[(2)]);
var state_27854__$1 = state_27854;
var statearr_27894_27965 = state_27854__$1;
(statearr_27894_27965[(2)] = inst_27838);

(statearr_27894_27965[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (44))){
var inst_27847 = (state_27854[(2)]);
var state_27854__$1 = (function (){var statearr_27895 = state_27854;
(statearr_27895[(28)] = inst_27847);

return statearr_27895;
})();
var statearr_27896_27966 = state_27854__$1;
(statearr_27896_27966[(2)] = null);

(statearr_27896_27966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (6))){
var inst_27786 = (state_27854[(29)]);
var inst_27785 = cljs.core.deref.call(null,cs);
var inst_27786__$1 = cljs.core.keys.call(null,inst_27785);
var inst_27787 = cljs.core.count.call(null,inst_27786__$1);
var inst_27788 = cljs.core.reset_BANG_.call(null,dctr,inst_27787);
var inst_27793 = cljs.core.seq.call(null,inst_27786__$1);
var inst_27794 = inst_27793;
var inst_27795 = null;
var inst_27796 = (0);
var inst_27797 = (0);
var state_27854__$1 = (function (){var statearr_27897 = state_27854;
(statearr_27897[(29)] = inst_27786__$1);

(statearr_27897[(10)] = inst_27797);

(statearr_27897[(20)] = inst_27794);

(statearr_27897[(30)] = inst_27788);

(statearr_27897[(12)] = inst_27795);

(statearr_27897[(21)] = inst_27796);

return statearr_27897;
})();
var statearr_27898_27967 = state_27854__$1;
(statearr_27898_27967[(2)] = null);

(statearr_27898_27967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (28))){
var inst_27813 = (state_27854[(25)]);
var inst_27794 = (state_27854[(20)]);
var inst_27813__$1 = cljs.core.seq.call(null,inst_27794);
var state_27854__$1 = (function (){var statearr_27899 = state_27854;
(statearr_27899[(25)] = inst_27813__$1);

return statearr_27899;
})();
if(inst_27813__$1){
var statearr_27900_27968 = state_27854__$1;
(statearr_27900_27968[(1)] = (33));

} else {
var statearr_27901_27969 = state_27854__$1;
(statearr_27901_27969[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (25))){
var inst_27797 = (state_27854[(10)]);
var inst_27796 = (state_27854[(21)]);
var inst_27799 = (inst_27797 < inst_27796);
var inst_27800 = inst_27799;
var state_27854__$1 = state_27854;
if(cljs.core.truth_(inst_27800)){
var statearr_27902_27970 = state_27854__$1;
(statearr_27902_27970[(1)] = (27));

} else {
var statearr_27903_27971 = state_27854__$1;
(statearr_27903_27971[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (34))){
var state_27854__$1 = state_27854;
var statearr_27904_27972 = state_27854__$1;
(statearr_27904_27972[(2)] = null);

(statearr_27904_27972[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (17))){
var state_27854__$1 = state_27854;
var statearr_27905_27973 = state_27854__$1;
(statearr_27905_27973[(2)] = null);

(statearr_27905_27973[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (3))){
var inst_27852 = (state_27854[(2)]);
var state_27854__$1 = state_27854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27854__$1,inst_27852);
} else {
if((state_val_27855 === (12))){
var inst_27781 = (state_27854[(2)]);
var state_27854__$1 = state_27854;
var statearr_27906_27974 = state_27854__$1;
(statearr_27906_27974[(2)] = inst_27781);

(statearr_27906_27974[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (2))){
var state_27854__$1 = state_27854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27854__$1,(4),ch);
} else {
if((state_val_27855 === (23))){
var state_27854__$1 = state_27854;
var statearr_27907_27975 = state_27854__$1;
(statearr_27907_27975[(2)] = null);

(statearr_27907_27975[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (35))){
var inst_27836 = (state_27854[(2)]);
var state_27854__$1 = state_27854;
var statearr_27908_27976 = state_27854__$1;
(statearr_27908_27976[(2)] = inst_27836);

(statearr_27908_27976[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (19))){
var inst_27755 = (state_27854[(7)]);
var inst_27759 = cljs.core.chunk_first.call(null,inst_27755);
var inst_27760 = cljs.core.chunk_rest.call(null,inst_27755);
var inst_27761 = cljs.core.count.call(null,inst_27759);
var inst_27735 = inst_27760;
var inst_27736 = inst_27759;
var inst_27737 = inst_27761;
var inst_27738 = (0);
var state_27854__$1 = (function (){var statearr_27909 = state_27854;
(statearr_27909[(13)] = inst_27736);

(statearr_27909[(14)] = inst_27738);

(statearr_27909[(15)] = inst_27735);

(statearr_27909[(17)] = inst_27737);

return statearr_27909;
})();
var statearr_27910_27977 = state_27854__$1;
(statearr_27910_27977[(2)] = null);

(statearr_27910_27977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (11))){
var inst_27755 = (state_27854[(7)]);
var inst_27735 = (state_27854[(15)]);
var inst_27755__$1 = cljs.core.seq.call(null,inst_27735);
var state_27854__$1 = (function (){var statearr_27911 = state_27854;
(statearr_27911[(7)] = inst_27755__$1);

return statearr_27911;
})();
if(inst_27755__$1){
var statearr_27912_27978 = state_27854__$1;
(statearr_27912_27978[(1)] = (16));

} else {
var statearr_27913_27979 = state_27854__$1;
(statearr_27913_27979[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (9))){
var inst_27783 = (state_27854[(2)]);
var state_27854__$1 = state_27854;
var statearr_27914_27980 = state_27854__$1;
(statearr_27914_27980[(2)] = inst_27783);

(statearr_27914_27980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (5))){
var inst_27733 = cljs.core.deref.call(null,cs);
var inst_27734 = cljs.core.seq.call(null,inst_27733);
var inst_27735 = inst_27734;
var inst_27736 = null;
var inst_27737 = (0);
var inst_27738 = (0);
var state_27854__$1 = (function (){var statearr_27915 = state_27854;
(statearr_27915[(13)] = inst_27736);

(statearr_27915[(14)] = inst_27738);

(statearr_27915[(15)] = inst_27735);

(statearr_27915[(17)] = inst_27737);

return statearr_27915;
})();
var statearr_27916_27981 = state_27854__$1;
(statearr_27916_27981[(2)] = null);

(statearr_27916_27981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (14))){
var state_27854__$1 = state_27854;
var statearr_27917_27982 = state_27854__$1;
(statearr_27917_27982[(2)] = null);

(statearr_27917_27982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (45))){
var inst_27844 = (state_27854[(2)]);
var state_27854__$1 = state_27854;
var statearr_27918_27983 = state_27854__$1;
(statearr_27918_27983[(2)] = inst_27844);

(statearr_27918_27983[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (26))){
var inst_27786 = (state_27854[(29)]);
var inst_27840 = (state_27854[(2)]);
var inst_27841 = cljs.core.seq.call(null,inst_27786);
var state_27854__$1 = (function (){var statearr_27919 = state_27854;
(statearr_27919[(31)] = inst_27840);

return statearr_27919;
})();
if(inst_27841){
var statearr_27920_27984 = state_27854__$1;
(statearr_27920_27984[(1)] = (42));

} else {
var statearr_27921_27985 = state_27854__$1;
(statearr_27921_27985[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (16))){
var inst_27755 = (state_27854[(7)]);
var inst_27757 = cljs.core.chunked_seq_QMARK_.call(null,inst_27755);
var state_27854__$1 = state_27854;
if(inst_27757){
var statearr_27922_27986 = state_27854__$1;
(statearr_27922_27986[(1)] = (19));

} else {
var statearr_27923_27987 = state_27854__$1;
(statearr_27923_27987[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (38))){
var inst_27833 = (state_27854[(2)]);
var state_27854__$1 = state_27854;
var statearr_27924_27988 = state_27854__$1;
(statearr_27924_27988[(2)] = inst_27833);

(statearr_27924_27988[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (30))){
var state_27854__$1 = state_27854;
var statearr_27925_27989 = state_27854__$1;
(statearr_27925_27989[(2)] = null);

(statearr_27925_27989[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (10))){
var inst_27736 = (state_27854[(13)]);
var inst_27738 = (state_27854[(14)]);
var inst_27744 = cljs.core._nth.call(null,inst_27736,inst_27738);
var inst_27745 = cljs.core.nth.call(null,inst_27744,(0),null);
var inst_27746 = cljs.core.nth.call(null,inst_27744,(1),null);
var state_27854__$1 = (function (){var statearr_27926 = state_27854;
(statearr_27926[(26)] = inst_27745);

return statearr_27926;
})();
if(cljs.core.truth_(inst_27746)){
var statearr_27927_27990 = state_27854__$1;
(statearr_27927_27990[(1)] = (13));

} else {
var statearr_27928_27991 = state_27854__$1;
(statearr_27928_27991[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (18))){
var inst_27779 = (state_27854[(2)]);
var state_27854__$1 = state_27854;
var statearr_27929_27992 = state_27854__$1;
(statearr_27929_27992[(2)] = inst_27779);

(statearr_27929_27992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (42))){
var state_27854__$1 = state_27854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27854__$1,(45),dchan);
} else {
if((state_val_27855 === (37))){
var inst_27813 = (state_27854[(25)]);
var inst_27822 = (state_27854[(23)]);
var inst_27726 = (state_27854[(11)]);
var inst_27822__$1 = cljs.core.first.call(null,inst_27813);
var inst_27823 = cljs.core.async.put_BANG_.call(null,inst_27822__$1,inst_27726,done);
var state_27854__$1 = (function (){var statearr_27930 = state_27854;
(statearr_27930[(23)] = inst_27822__$1);

return statearr_27930;
})();
if(cljs.core.truth_(inst_27823)){
var statearr_27931_27993 = state_27854__$1;
(statearr_27931_27993[(1)] = (39));

} else {
var statearr_27932_27994 = state_27854__$1;
(statearr_27932_27994[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (8))){
var inst_27738 = (state_27854[(14)]);
var inst_27737 = (state_27854[(17)]);
var inst_27740 = (inst_27738 < inst_27737);
var inst_27741 = inst_27740;
var state_27854__$1 = state_27854;
if(cljs.core.truth_(inst_27741)){
var statearr_27933_27995 = state_27854__$1;
(statearr_27933_27995[(1)] = (10));

} else {
var statearr_27934_27996 = state_27854__$1;
(statearr_27934_27996[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
}
});})(c__21372__auto___27942,cs,m,dchan,dctr,done))
;
return ((function (switch__21310__auto__,c__21372__auto___27942,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21311__auto__ = null;
var cljs$core$async$mult_$_state_machine__21311__auto____0 = (function (){
var statearr_27938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27938[(0)] = cljs$core$async$mult_$_state_machine__21311__auto__);

(statearr_27938[(1)] = (1));

return statearr_27938;
});
var cljs$core$async$mult_$_state_machine__21311__auto____1 = (function (state_27854){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_27854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e27939){if((e27939 instanceof Object)){
var ex__21314__auto__ = e27939;
var statearr_27940_27997 = state_27854;
(statearr_27940_27997[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27998 = state_27854;
state_27854 = G__27998;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21311__auto__ = function(state_27854){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21311__auto____1.call(this,state_27854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21311__auto____0;
cljs$core$async$mult_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21311__auto____1;
return cljs$core$async$mult_$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___27942,cs,m,dchan,dctr,done))
})();
var state__21374__auto__ = (function (){var statearr_27941 = f__21373__auto__.call(null);
(statearr_27941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___27942);

return statearr_27941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___27942,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__28000 = arguments.length;
switch (G__28000) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj28003 = {};
return obj28003;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18125__auto__ = m;
if(and__18125__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18125__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18773__auto__ = (((m == null))?null:m);
return (function (){var or__18137__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18125__auto__ = m;
if(and__18125__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18125__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18773__auto__ = (((m == null))?null:m);
return (function (){var or__18137__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18125__auto__ = m;
if(and__18125__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18125__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18773__auto__ = (((m == null))?null:m);
return (function (){var or__18137__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18125__auto__ = m;
if(and__18125__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18125__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18773__auto__ = (((m == null))?null:m);
return (function (){var or__18137__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18125__auto__ = m;
if(and__18125__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18125__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18773__auto__ = (((m == null))?null:m);
return (function (){var or__18137__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19177__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19177__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28008){
var map__28009 = p__28008;
var map__28009__$1 = ((cljs.core.seq_QMARK_.call(null,map__28009))?cljs.core.apply.call(null,cljs.core.hash_map,map__28009):map__28009);
var opts = map__28009__$1;
var statearr_28010_28013 = state;
(statearr_28010_28013[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28009,map__28009__$1,opts){
return (function (val){
var statearr_28011_28014 = state;
(statearr_28011_28014[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28009,map__28009__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28012_28015 = state;
(statearr_28012_28015[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28004){
var G__28005 = cljs.core.first.call(null,seq28004);
var seq28004__$1 = cljs.core.next.call(null,seq28004);
var G__28006 = cljs.core.first.call(null,seq28004__$1);
var seq28004__$2 = cljs.core.next.call(null,seq28004__$1);
var G__28007 = cljs.core.first.call(null,seq28004__$2);
var seq28004__$3 = cljs.core.next.call(null,seq28004__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28005,G__28006,G__28007,seq28004__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t28135 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28135 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28136){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28136 = meta28136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28137,meta28136__$1){
var self__ = this;
var _28137__$1 = this;
return (new cljs.core.async.t28135(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28136__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28137){
var self__ = this;
var _28137__$1 = this;
return self__.meta28136;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28135.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28135.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28135.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28135.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28135.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28135.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28135.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28135.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28135.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28136","meta28136",-1604531221,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28135.cljs$lang$type = true;

cljs.core.async.t28135.cljs$lang$ctorStr = "cljs.core.async/t28135";

cljs.core.async.t28135.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18716__auto__,writer__18717__auto__,opt__18718__auto__){
return cljs.core._write.call(null,writer__18717__auto__,"cljs.core.async/t28135");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28135 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t28135(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28136){
return (new cljs.core.async.t28135(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28136));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28135(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21372__auto___28254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___28254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___28254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28207){
var state_val_28208 = (state_28207[(1)]);
if((state_val_28208 === (7))){
var inst_28151 = (state_28207[(7)]);
var inst_28156 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28151);
var state_28207__$1 = state_28207;
var statearr_28209_28255 = state_28207__$1;
(statearr_28209_28255[(2)] = inst_28156);

(statearr_28209_28255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (20))){
var inst_28166 = (state_28207[(8)]);
var state_28207__$1 = state_28207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28207__$1,(23),out,inst_28166);
} else {
if((state_val_28208 === (1))){
var inst_28141 = (state_28207[(9)]);
var inst_28141__$1 = calc_state.call(null);
var inst_28142 = cljs.core.seq_QMARK_.call(null,inst_28141__$1);
var state_28207__$1 = (function (){var statearr_28210 = state_28207;
(statearr_28210[(9)] = inst_28141__$1);

return statearr_28210;
})();
if(inst_28142){
var statearr_28211_28256 = state_28207__$1;
(statearr_28211_28256[(1)] = (2));

} else {
var statearr_28212_28257 = state_28207__$1;
(statearr_28212_28257[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (24))){
var inst_28159 = (state_28207[(10)]);
var inst_28151 = inst_28159;
var state_28207__$1 = (function (){var statearr_28213 = state_28207;
(statearr_28213[(7)] = inst_28151);

return statearr_28213;
})();
var statearr_28214_28258 = state_28207__$1;
(statearr_28214_28258[(2)] = null);

(statearr_28214_28258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (4))){
var inst_28141 = (state_28207[(9)]);
var inst_28147 = (state_28207[(2)]);
var inst_28148 = cljs.core.get.call(null,inst_28147,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28149 = cljs.core.get.call(null,inst_28147,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28150 = cljs.core.get.call(null,inst_28147,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28151 = inst_28141;
var state_28207__$1 = (function (){var statearr_28215 = state_28207;
(statearr_28215[(7)] = inst_28151);

(statearr_28215[(11)] = inst_28150);

(statearr_28215[(12)] = inst_28148);

(statearr_28215[(13)] = inst_28149);

return statearr_28215;
})();
var statearr_28216_28259 = state_28207__$1;
(statearr_28216_28259[(2)] = null);

(statearr_28216_28259[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (15))){
var state_28207__$1 = state_28207;
var statearr_28217_28260 = state_28207__$1;
(statearr_28217_28260[(2)] = null);

(statearr_28217_28260[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (21))){
var inst_28159 = (state_28207[(10)]);
var inst_28151 = inst_28159;
var state_28207__$1 = (function (){var statearr_28218 = state_28207;
(statearr_28218[(7)] = inst_28151);

return statearr_28218;
})();
var statearr_28219_28261 = state_28207__$1;
(statearr_28219_28261[(2)] = null);

(statearr_28219_28261[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (13))){
var inst_28203 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
var statearr_28220_28262 = state_28207__$1;
(statearr_28220_28262[(2)] = inst_28203);

(statearr_28220_28262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (22))){
var inst_28201 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
var statearr_28221_28263 = state_28207__$1;
(statearr_28221_28263[(2)] = inst_28201);

(statearr_28221_28263[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (6))){
var inst_28205 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28207__$1,inst_28205);
} else {
if((state_val_28208 === (25))){
var state_28207__$1 = state_28207;
var statearr_28222_28264 = state_28207__$1;
(statearr_28222_28264[(2)] = null);

(statearr_28222_28264[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (17))){
var inst_28181 = (state_28207[(14)]);
var state_28207__$1 = state_28207;
var statearr_28223_28265 = state_28207__$1;
(statearr_28223_28265[(2)] = inst_28181);

(statearr_28223_28265[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (3))){
var inst_28141 = (state_28207[(9)]);
var state_28207__$1 = state_28207;
var statearr_28224_28266 = state_28207__$1;
(statearr_28224_28266[(2)] = inst_28141);

(statearr_28224_28266[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (12))){
var inst_28181 = (state_28207[(14)]);
var inst_28167 = (state_28207[(15)]);
var inst_28160 = (state_28207[(16)]);
var inst_28181__$1 = inst_28160.call(null,inst_28167);
var state_28207__$1 = (function (){var statearr_28225 = state_28207;
(statearr_28225[(14)] = inst_28181__$1);

return statearr_28225;
})();
if(cljs.core.truth_(inst_28181__$1)){
var statearr_28226_28267 = state_28207__$1;
(statearr_28226_28267[(1)] = (17));

} else {
var statearr_28227_28268 = state_28207__$1;
(statearr_28227_28268[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (2))){
var inst_28141 = (state_28207[(9)]);
var inst_28144 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28141);
var state_28207__$1 = state_28207;
var statearr_28228_28269 = state_28207__$1;
(statearr_28228_28269[(2)] = inst_28144);

(statearr_28228_28269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (23))){
var inst_28192 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
if(cljs.core.truth_(inst_28192)){
var statearr_28229_28270 = state_28207__$1;
(statearr_28229_28270[(1)] = (24));

} else {
var statearr_28230_28271 = state_28207__$1;
(statearr_28230_28271[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (19))){
var inst_28189 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
if(cljs.core.truth_(inst_28189)){
var statearr_28231_28272 = state_28207__$1;
(statearr_28231_28272[(1)] = (20));

} else {
var statearr_28232_28273 = state_28207__$1;
(statearr_28232_28273[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (11))){
var inst_28166 = (state_28207[(8)]);
var inst_28172 = (inst_28166 == null);
var state_28207__$1 = state_28207;
if(cljs.core.truth_(inst_28172)){
var statearr_28233_28274 = state_28207__$1;
(statearr_28233_28274[(1)] = (14));

} else {
var statearr_28234_28275 = state_28207__$1;
(statearr_28234_28275[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (9))){
var inst_28159 = (state_28207[(10)]);
var inst_28159__$1 = (state_28207[(2)]);
var inst_28160 = cljs.core.get.call(null,inst_28159__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28161 = cljs.core.get.call(null,inst_28159__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28162 = cljs.core.get.call(null,inst_28159__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28207__$1 = (function (){var statearr_28235 = state_28207;
(statearr_28235[(10)] = inst_28159__$1);

(statearr_28235[(17)] = inst_28161);

(statearr_28235[(16)] = inst_28160);

return statearr_28235;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28207__$1,(10),inst_28162);
} else {
if((state_val_28208 === (5))){
var inst_28151 = (state_28207[(7)]);
var inst_28154 = cljs.core.seq_QMARK_.call(null,inst_28151);
var state_28207__$1 = state_28207;
if(inst_28154){
var statearr_28236_28276 = state_28207__$1;
(statearr_28236_28276[(1)] = (7));

} else {
var statearr_28237_28277 = state_28207__$1;
(statearr_28237_28277[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (14))){
var inst_28167 = (state_28207[(15)]);
var inst_28174 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28167);
var state_28207__$1 = state_28207;
var statearr_28238_28278 = state_28207__$1;
(statearr_28238_28278[(2)] = inst_28174);

(statearr_28238_28278[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (26))){
var inst_28197 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
var statearr_28239_28279 = state_28207__$1;
(statearr_28239_28279[(2)] = inst_28197);

(statearr_28239_28279[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (16))){
var inst_28177 = (state_28207[(2)]);
var inst_28178 = calc_state.call(null);
var inst_28151 = inst_28178;
var state_28207__$1 = (function (){var statearr_28240 = state_28207;
(statearr_28240[(7)] = inst_28151);

(statearr_28240[(18)] = inst_28177);

return statearr_28240;
})();
var statearr_28241_28280 = state_28207__$1;
(statearr_28241_28280[(2)] = null);

(statearr_28241_28280[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (10))){
var inst_28166 = (state_28207[(8)]);
var inst_28167 = (state_28207[(15)]);
var inst_28165 = (state_28207[(2)]);
var inst_28166__$1 = cljs.core.nth.call(null,inst_28165,(0),null);
var inst_28167__$1 = cljs.core.nth.call(null,inst_28165,(1),null);
var inst_28168 = (inst_28166__$1 == null);
var inst_28169 = cljs.core._EQ_.call(null,inst_28167__$1,change);
var inst_28170 = (inst_28168) || (inst_28169);
var state_28207__$1 = (function (){var statearr_28242 = state_28207;
(statearr_28242[(8)] = inst_28166__$1);

(statearr_28242[(15)] = inst_28167__$1);

return statearr_28242;
})();
if(cljs.core.truth_(inst_28170)){
var statearr_28243_28281 = state_28207__$1;
(statearr_28243_28281[(1)] = (11));

} else {
var statearr_28244_28282 = state_28207__$1;
(statearr_28244_28282[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (18))){
var inst_28167 = (state_28207[(15)]);
var inst_28161 = (state_28207[(17)]);
var inst_28160 = (state_28207[(16)]);
var inst_28184 = cljs.core.empty_QMARK_.call(null,inst_28160);
var inst_28185 = inst_28161.call(null,inst_28167);
var inst_28186 = cljs.core.not.call(null,inst_28185);
var inst_28187 = (inst_28184) && (inst_28186);
var state_28207__$1 = state_28207;
var statearr_28245_28283 = state_28207__$1;
(statearr_28245_28283[(2)] = inst_28187);

(statearr_28245_28283[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (8))){
var inst_28151 = (state_28207[(7)]);
var state_28207__$1 = state_28207;
var statearr_28246_28284 = state_28207__$1;
(statearr_28246_28284[(2)] = inst_28151);

(statearr_28246_28284[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});})(c__21372__auto___28254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21310__auto__,c__21372__auto___28254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21311__auto__ = null;
var cljs$core$async$mix_$_state_machine__21311__auto____0 = (function (){
var statearr_28250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28250[(0)] = cljs$core$async$mix_$_state_machine__21311__auto__);

(statearr_28250[(1)] = (1));

return statearr_28250;
});
var cljs$core$async$mix_$_state_machine__21311__auto____1 = (function (state_28207){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_28207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e28251){if((e28251 instanceof Object)){
var ex__21314__auto__ = e28251;
var statearr_28252_28285 = state_28207;
(statearr_28252_28285[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28286 = state_28207;
state_28207 = G__28286;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21311__auto__ = function(state_28207){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21311__auto____1.call(this,state_28207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21311__auto____0;
cljs$core$async$mix_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21311__auto____1;
return cljs$core$async$mix_$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___28254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21374__auto__ = (function (){var statearr_28253 = f__21373__auto__.call(null);
(statearr_28253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___28254);

return statearr_28253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___28254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj28288 = {};
return obj28288;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18125__auto__ = p;
if(and__18125__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18125__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18773__auto__ = (((p == null))?null:p);
return (function (){var or__18137__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18125__auto__ = p;
if(and__18125__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18125__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18773__auto__ = (((p == null))?null:p);
return (function (){var or__18137__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__28290 = arguments.length;
switch (G__28290) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18125__auto__ = p;
if(and__18125__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18125__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18773__auto__ = (((p == null))?null:p);
return (function (){var or__18137__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18125__auto__ = p;
if(and__18125__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18125__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18773__auto__ = (((p == null))?null:p);
return (function (){var or__18137__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18773__auto__)]);
if(or__18137__auto__){
return or__18137__auto__;
} else {
var or__18137__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18137__auto____$1){
return or__18137__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__28294 = arguments.length;
switch (G__28294) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18137__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18137__auto__)){
return or__18137__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18137__auto__,mults){
return (function (p1__28292_SHARP_){
if(cljs.core.truth_(p1__28292_SHARP_.call(null,topic))){
return p1__28292_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28292_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18137__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28295 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28295 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28296){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28296 = meta28296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28297,meta28296__$1){
var self__ = this;
var _28297__$1 = this;
return (new cljs.core.async.t28295(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28296__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28297){
var self__ = this;
var _28297__$1 = this;
return self__.meta28296;
});})(mults,ensure_mult))
;

cljs.core.async.t28295.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28295.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28295.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28295.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28295.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28295.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28295.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28296","meta28296",-1547839895,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t28295.cljs$lang$type = true;

cljs.core.async.t28295.cljs$lang$ctorStr = "cljs.core.async/t28295";

cljs.core.async.t28295.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18716__auto__,writer__18717__auto__,opt__18718__auto__){
return cljs.core._write.call(null,writer__18717__auto__,"cljs.core.async/t28295");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28295 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28295(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28296){
return (new cljs.core.async.t28295(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28296));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28295(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21372__auto___28418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___28418,mults,ensure_mult,p){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___28418,mults,ensure_mult,p){
return (function (state_28369){
var state_val_28370 = (state_28369[(1)]);
if((state_val_28370 === (7))){
var inst_28365 = (state_28369[(2)]);
var state_28369__$1 = state_28369;
var statearr_28371_28419 = state_28369__$1;
(statearr_28371_28419[(2)] = inst_28365);

(statearr_28371_28419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (20))){
var state_28369__$1 = state_28369;
var statearr_28372_28420 = state_28369__$1;
(statearr_28372_28420[(2)] = null);

(statearr_28372_28420[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (1))){
var state_28369__$1 = state_28369;
var statearr_28373_28421 = state_28369__$1;
(statearr_28373_28421[(2)] = null);

(statearr_28373_28421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (24))){
var inst_28348 = (state_28369[(7)]);
var inst_28357 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28348);
var state_28369__$1 = state_28369;
var statearr_28374_28422 = state_28369__$1;
(statearr_28374_28422[(2)] = inst_28357);

(statearr_28374_28422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (4))){
var inst_28300 = (state_28369[(8)]);
var inst_28300__$1 = (state_28369[(2)]);
var inst_28301 = (inst_28300__$1 == null);
var state_28369__$1 = (function (){var statearr_28375 = state_28369;
(statearr_28375[(8)] = inst_28300__$1);

return statearr_28375;
})();
if(cljs.core.truth_(inst_28301)){
var statearr_28376_28423 = state_28369__$1;
(statearr_28376_28423[(1)] = (5));

} else {
var statearr_28377_28424 = state_28369__$1;
(statearr_28377_28424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (15))){
var inst_28342 = (state_28369[(2)]);
var state_28369__$1 = state_28369;
var statearr_28378_28425 = state_28369__$1;
(statearr_28378_28425[(2)] = inst_28342);

(statearr_28378_28425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (21))){
var inst_28362 = (state_28369[(2)]);
var state_28369__$1 = (function (){var statearr_28379 = state_28369;
(statearr_28379[(9)] = inst_28362);

return statearr_28379;
})();
var statearr_28380_28426 = state_28369__$1;
(statearr_28380_28426[(2)] = null);

(statearr_28380_28426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (13))){
var inst_28324 = (state_28369[(10)]);
var inst_28326 = cljs.core.chunked_seq_QMARK_.call(null,inst_28324);
var state_28369__$1 = state_28369;
if(inst_28326){
var statearr_28381_28427 = state_28369__$1;
(statearr_28381_28427[(1)] = (16));

} else {
var statearr_28382_28428 = state_28369__$1;
(statearr_28382_28428[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (22))){
var inst_28354 = (state_28369[(2)]);
var state_28369__$1 = state_28369;
if(cljs.core.truth_(inst_28354)){
var statearr_28383_28429 = state_28369__$1;
(statearr_28383_28429[(1)] = (23));

} else {
var statearr_28384_28430 = state_28369__$1;
(statearr_28384_28430[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (6))){
var inst_28350 = (state_28369[(11)]);
var inst_28300 = (state_28369[(8)]);
var inst_28348 = (state_28369[(7)]);
var inst_28348__$1 = topic_fn.call(null,inst_28300);
var inst_28349 = cljs.core.deref.call(null,mults);
var inst_28350__$1 = cljs.core.get.call(null,inst_28349,inst_28348__$1);
var state_28369__$1 = (function (){var statearr_28385 = state_28369;
(statearr_28385[(11)] = inst_28350__$1);

(statearr_28385[(7)] = inst_28348__$1);

return statearr_28385;
})();
if(cljs.core.truth_(inst_28350__$1)){
var statearr_28386_28431 = state_28369__$1;
(statearr_28386_28431[(1)] = (19));

} else {
var statearr_28387_28432 = state_28369__$1;
(statearr_28387_28432[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (25))){
var inst_28359 = (state_28369[(2)]);
var state_28369__$1 = state_28369;
var statearr_28388_28433 = state_28369__$1;
(statearr_28388_28433[(2)] = inst_28359);

(statearr_28388_28433[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (17))){
var inst_28324 = (state_28369[(10)]);
var inst_28333 = cljs.core.first.call(null,inst_28324);
var inst_28334 = cljs.core.async.muxch_STAR_.call(null,inst_28333);
var inst_28335 = cljs.core.async.close_BANG_.call(null,inst_28334);
var inst_28336 = cljs.core.next.call(null,inst_28324);
var inst_28310 = inst_28336;
var inst_28311 = null;
var inst_28312 = (0);
var inst_28313 = (0);
var state_28369__$1 = (function (){var statearr_28389 = state_28369;
(statearr_28389[(12)] = inst_28335);

(statearr_28389[(13)] = inst_28312);

(statearr_28389[(14)] = inst_28311);

(statearr_28389[(15)] = inst_28310);

(statearr_28389[(16)] = inst_28313);

return statearr_28389;
})();
var statearr_28390_28434 = state_28369__$1;
(statearr_28390_28434[(2)] = null);

(statearr_28390_28434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (3))){
var inst_28367 = (state_28369[(2)]);
var state_28369__$1 = state_28369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28369__$1,inst_28367);
} else {
if((state_val_28370 === (12))){
var inst_28344 = (state_28369[(2)]);
var state_28369__$1 = state_28369;
var statearr_28391_28435 = state_28369__$1;
(statearr_28391_28435[(2)] = inst_28344);

(statearr_28391_28435[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (2))){
var state_28369__$1 = state_28369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28369__$1,(4),ch);
} else {
if((state_val_28370 === (23))){
var state_28369__$1 = state_28369;
var statearr_28392_28436 = state_28369__$1;
(statearr_28392_28436[(2)] = null);

(statearr_28392_28436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (19))){
var inst_28350 = (state_28369[(11)]);
var inst_28300 = (state_28369[(8)]);
var inst_28352 = cljs.core.async.muxch_STAR_.call(null,inst_28350);
var state_28369__$1 = state_28369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28369__$1,(22),inst_28352,inst_28300);
} else {
if((state_val_28370 === (11))){
var inst_28324 = (state_28369[(10)]);
var inst_28310 = (state_28369[(15)]);
var inst_28324__$1 = cljs.core.seq.call(null,inst_28310);
var state_28369__$1 = (function (){var statearr_28393 = state_28369;
(statearr_28393[(10)] = inst_28324__$1);

return statearr_28393;
})();
if(inst_28324__$1){
var statearr_28394_28437 = state_28369__$1;
(statearr_28394_28437[(1)] = (13));

} else {
var statearr_28395_28438 = state_28369__$1;
(statearr_28395_28438[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (9))){
var inst_28346 = (state_28369[(2)]);
var state_28369__$1 = state_28369;
var statearr_28396_28439 = state_28369__$1;
(statearr_28396_28439[(2)] = inst_28346);

(statearr_28396_28439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (5))){
var inst_28307 = cljs.core.deref.call(null,mults);
var inst_28308 = cljs.core.vals.call(null,inst_28307);
var inst_28309 = cljs.core.seq.call(null,inst_28308);
var inst_28310 = inst_28309;
var inst_28311 = null;
var inst_28312 = (0);
var inst_28313 = (0);
var state_28369__$1 = (function (){var statearr_28397 = state_28369;
(statearr_28397[(13)] = inst_28312);

(statearr_28397[(14)] = inst_28311);

(statearr_28397[(15)] = inst_28310);

(statearr_28397[(16)] = inst_28313);

return statearr_28397;
})();
var statearr_28398_28440 = state_28369__$1;
(statearr_28398_28440[(2)] = null);

(statearr_28398_28440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (14))){
var state_28369__$1 = state_28369;
var statearr_28402_28441 = state_28369__$1;
(statearr_28402_28441[(2)] = null);

(statearr_28402_28441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (16))){
var inst_28324 = (state_28369[(10)]);
var inst_28328 = cljs.core.chunk_first.call(null,inst_28324);
var inst_28329 = cljs.core.chunk_rest.call(null,inst_28324);
var inst_28330 = cljs.core.count.call(null,inst_28328);
var inst_28310 = inst_28329;
var inst_28311 = inst_28328;
var inst_28312 = inst_28330;
var inst_28313 = (0);
var state_28369__$1 = (function (){var statearr_28403 = state_28369;
(statearr_28403[(13)] = inst_28312);

(statearr_28403[(14)] = inst_28311);

(statearr_28403[(15)] = inst_28310);

(statearr_28403[(16)] = inst_28313);

return statearr_28403;
})();
var statearr_28404_28442 = state_28369__$1;
(statearr_28404_28442[(2)] = null);

(statearr_28404_28442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (10))){
var inst_28312 = (state_28369[(13)]);
var inst_28311 = (state_28369[(14)]);
var inst_28310 = (state_28369[(15)]);
var inst_28313 = (state_28369[(16)]);
var inst_28318 = cljs.core._nth.call(null,inst_28311,inst_28313);
var inst_28319 = cljs.core.async.muxch_STAR_.call(null,inst_28318);
var inst_28320 = cljs.core.async.close_BANG_.call(null,inst_28319);
var inst_28321 = (inst_28313 + (1));
var tmp28399 = inst_28312;
var tmp28400 = inst_28311;
var tmp28401 = inst_28310;
var inst_28310__$1 = tmp28401;
var inst_28311__$1 = tmp28400;
var inst_28312__$1 = tmp28399;
var inst_28313__$1 = inst_28321;
var state_28369__$1 = (function (){var statearr_28405 = state_28369;
(statearr_28405[(13)] = inst_28312__$1);

(statearr_28405[(17)] = inst_28320);

(statearr_28405[(14)] = inst_28311__$1);

(statearr_28405[(15)] = inst_28310__$1);

(statearr_28405[(16)] = inst_28313__$1);

return statearr_28405;
})();
var statearr_28406_28443 = state_28369__$1;
(statearr_28406_28443[(2)] = null);

(statearr_28406_28443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (18))){
var inst_28339 = (state_28369[(2)]);
var state_28369__$1 = state_28369;
var statearr_28407_28444 = state_28369__$1;
(statearr_28407_28444[(2)] = inst_28339);

(statearr_28407_28444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28370 === (8))){
var inst_28312 = (state_28369[(13)]);
var inst_28313 = (state_28369[(16)]);
var inst_28315 = (inst_28313 < inst_28312);
var inst_28316 = inst_28315;
var state_28369__$1 = state_28369;
if(cljs.core.truth_(inst_28316)){
var statearr_28408_28445 = state_28369__$1;
(statearr_28408_28445[(1)] = (10));

} else {
var statearr_28409_28446 = state_28369__$1;
(statearr_28409_28446[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__21372__auto___28418,mults,ensure_mult,p))
;
return ((function (switch__21310__auto__,c__21372__auto___28418,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21311__auto__ = null;
var cljs$core$async$state_machine__21311__auto____0 = (function (){
var statearr_28413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28413[(0)] = cljs$core$async$state_machine__21311__auto__);

(statearr_28413[(1)] = (1));

return statearr_28413;
});
var cljs$core$async$state_machine__21311__auto____1 = (function (state_28369){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_28369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e28414){if((e28414 instanceof Object)){
var ex__21314__auto__ = e28414;
var statearr_28415_28447 = state_28369;
(statearr_28415_28447[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28448 = state_28369;
state_28369 = G__28448;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$state_machine__21311__auto__ = function(state_28369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21311__auto____1.call(this,state_28369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21311__auto____0;
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21311__auto____1;
return cljs$core$async$state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___28418,mults,ensure_mult,p))
})();
var state__21374__auto__ = (function (){var statearr_28416 = f__21373__auto__.call(null);
(statearr_28416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___28418);

return statearr_28416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___28418,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__28450 = arguments.length;
switch (G__28450) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__28453 = arguments.length;
switch (G__28453) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__28456 = arguments.length;
switch (G__28456) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21372__auto___28526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___28526,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___28526,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28495){
var state_val_28496 = (state_28495[(1)]);
if((state_val_28496 === (7))){
var state_28495__$1 = state_28495;
var statearr_28497_28527 = state_28495__$1;
(statearr_28497_28527[(2)] = null);

(statearr_28497_28527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (1))){
var state_28495__$1 = state_28495;
var statearr_28498_28528 = state_28495__$1;
(statearr_28498_28528[(2)] = null);

(statearr_28498_28528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (4))){
var inst_28459 = (state_28495[(7)]);
var inst_28461 = (inst_28459 < cnt);
var state_28495__$1 = state_28495;
if(cljs.core.truth_(inst_28461)){
var statearr_28499_28529 = state_28495__$1;
(statearr_28499_28529[(1)] = (6));

} else {
var statearr_28500_28530 = state_28495__$1;
(statearr_28500_28530[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (15))){
var inst_28491 = (state_28495[(2)]);
var state_28495__$1 = state_28495;
var statearr_28501_28531 = state_28495__$1;
(statearr_28501_28531[(2)] = inst_28491);

(statearr_28501_28531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (13))){
var inst_28484 = cljs.core.async.close_BANG_.call(null,out);
var state_28495__$1 = state_28495;
var statearr_28502_28532 = state_28495__$1;
(statearr_28502_28532[(2)] = inst_28484);

(statearr_28502_28532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (6))){
var state_28495__$1 = state_28495;
var statearr_28503_28533 = state_28495__$1;
(statearr_28503_28533[(2)] = null);

(statearr_28503_28533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (3))){
var inst_28493 = (state_28495[(2)]);
var state_28495__$1 = state_28495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28495__$1,inst_28493);
} else {
if((state_val_28496 === (12))){
var inst_28481 = (state_28495[(8)]);
var inst_28481__$1 = (state_28495[(2)]);
var inst_28482 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28481__$1);
var state_28495__$1 = (function (){var statearr_28504 = state_28495;
(statearr_28504[(8)] = inst_28481__$1);

return statearr_28504;
})();
if(cljs.core.truth_(inst_28482)){
var statearr_28505_28534 = state_28495__$1;
(statearr_28505_28534[(1)] = (13));

} else {
var statearr_28506_28535 = state_28495__$1;
(statearr_28506_28535[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (2))){
var inst_28458 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28459 = (0);
var state_28495__$1 = (function (){var statearr_28507 = state_28495;
(statearr_28507[(7)] = inst_28459);

(statearr_28507[(9)] = inst_28458);

return statearr_28507;
})();
var statearr_28508_28536 = state_28495__$1;
(statearr_28508_28536[(2)] = null);

(statearr_28508_28536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (11))){
var inst_28459 = (state_28495[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28495,(10),Object,null,(9));
var inst_28468 = chs__$1.call(null,inst_28459);
var inst_28469 = done.call(null,inst_28459);
var inst_28470 = cljs.core.async.take_BANG_.call(null,inst_28468,inst_28469);
var state_28495__$1 = state_28495;
var statearr_28509_28537 = state_28495__$1;
(statearr_28509_28537[(2)] = inst_28470);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28495__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (9))){
var inst_28459 = (state_28495[(7)]);
var inst_28472 = (state_28495[(2)]);
var inst_28473 = (inst_28459 + (1));
var inst_28459__$1 = inst_28473;
var state_28495__$1 = (function (){var statearr_28510 = state_28495;
(statearr_28510[(7)] = inst_28459__$1);

(statearr_28510[(10)] = inst_28472);

return statearr_28510;
})();
var statearr_28511_28538 = state_28495__$1;
(statearr_28511_28538[(2)] = null);

(statearr_28511_28538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (5))){
var inst_28479 = (state_28495[(2)]);
var state_28495__$1 = (function (){var statearr_28512 = state_28495;
(statearr_28512[(11)] = inst_28479);

return statearr_28512;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28495__$1,(12),dchan);
} else {
if((state_val_28496 === (14))){
var inst_28481 = (state_28495[(8)]);
var inst_28486 = cljs.core.apply.call(null,f,inst_28481);
var state_28495__$1 = state_28495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28495__$1,(16),out,inst_28486);
} else {
if((state_val_28496 === (16))){
var inst_28488 = (state_28495[(2)]);
var state_28495__$1 = (function (){var statearr_28513 = state_28495;
(statearr_28513[(12)] = inst_28488);

return statearr_28513;
})();
var statearr_28514_28539 = state_28495__$1;
(statearr_28514_28539[(2)] = null);

(statearr_28514_28539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (10))){
var inst_28463 = (state_28495[(2)]);
var inst_28464 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28495__$1 = (function (){var statearr_28515 = state_28495;
(statearr_28515[(13)] = inst_28463);

return statearr_28515;
})();
var statearr_28516_28540 = state_28495__$1;
(statearr_28516_28540[(2)] = inst_28464);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28495__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (8))){
var inst_28477 = (state_28495[(2)]);
var state_28495__$1 = state_28495;
var statearr_28517_28541 = state_28495__$1;
(statearr_28517_28541[(2)] = inst_28477);

(statearr_28517_28541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__21372__auto___28526,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21310__auto__,c__21372__auto___28526,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21311__auto__ = null;
var cljs$core$async$state_machine__21311__auto____0 = (function (){
var statearr_28521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28521[(0)] = cljs$core$async$state_machine__21311__auto__);

(statearr_28521[(1)] = (1));

return statearr_28521;
});
var cljs$core$async$state_machine__21311__auto____1 = (function (state_28495){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_28495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e28522){if((e28522 instanceof Object)){
var ex__21314__auto__ = e28522;
var statearr_28523_28542 = state_28495;
(statearr_28523_28542[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28543 = state_28495;
state_28495 = G__28543;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$state_machine__21311__auto__ = function(state_28495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21311__auto____1.call(this,state_28495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21311__auto____0;
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21311__auto____1;
return cljs$core$async$state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___28526,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21374__auto__ = (function (){var statearr_28524 = f__21373__auto__.call(null);
(statearr_28524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___28526);

return statearr_28524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___28526,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__28546 = arguments.length;
switch (G__28546) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21372__auto___28601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___28601,out){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___28601,out){
return (function (state_28576){
var state_val_28577 = (state_28576[(1)]);
if((state_val_28577 === (7))){
var inst_28555 = (state_28576[(7)]);
var inst_28556 = (state_28576[(8)]);
var inst_28555__$1 = (state_28576[(2)]);
var inst_28556__$1 = cljs.core.nth.call(null,inst_28555__$1,(0),null);
var inst_28557 = cljs.core.nth.call(null,inst_28555__$1,(1),null);
var inst_28558 = (inst_28556__$1 == null);
var state_28576__$1 = (function (){var statearr_28578 = state_28576;
(statearr_28578[(7)] = inst_28555__$1);

(statearr_28578[(9)] = inst_28557);

(statearr_28578[(8)] = inst_28556__$1);

return statearr_28578;
})();
if(cljs.core.truth_(inst_28558)){
var statearr_28579_28602 = state_28576__$1;
(statearr_28579_28602[(1)] = (8));

} else {
var statearr_28580_28603 = state_28576__$1;
(statearr_28580_28603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (1))){
var inst_28547 = cljs.core.vec.call(null,chs);
var inst_28548 = inst_28547;
var state_28576__$1 = (function (){var statearr_28581 = state_28576;
(statearr_28581[(10)] = inst_28548);

return statearr_28581;
})();
var statearr_28582_28604 = state_28576__$1;
(statearr_28582_28604[(2)] = null);

(statearr_28582_28604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (4))){
var inst_28548 = (state_28576[(10)]);
var state_28576__$1 = state_28576;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28576__$1,(7),inst_28548);
} else {
if((state_val_28577 === (6))){
var inst_28572 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28583_28605 = state_28576__$1;
(statearr_28583_28605[(2)] = inst_28572);

(statearr_28583_28605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (3))){
var inst_28574 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28576__$1,inst_28574);
} else {
if((state_val_28577 === (2))){
var inst_28548 = (state_28576[(10)]);
var inst_28550 = cljs.core.count.call(null,inst_28548);
var inst_28551 = (inst_28550 > (0));
var state_28576__$1 = state_28576;
if(cljs.core.truth_(inst_28551)){
var statearr_28585_28606 = state_28576__$1;
(statearr_28585_28606[(1)] = (4));

} else {
var statearr_28586_28607 = state_28576__$1;
(statearr_28586_28607[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (11))){
var inst_28548 = (state_28576[(10)]);
var inst_28565 = (state_28576[(2)]);
var tmp28584 = inst_28548;
var inst_28548__$1 = tmp28584;
var state_28576__$1 = (function (){var statearr_28587 = state_28576;
(statearr_28587[(10)] = inst_28548__$1);

(statearr_28587[(11)] = inst_28565);

return statearr_28587;
})();
var statearr_28588_28608 = state_28576__$1;
(statearr_28588_28608[(2)] = null);

(statearr_28588_28608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (9))){
var inst_28556 = (state_28576[(8)]);
var state_28576__$1 = state_28576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28576__$1,(11),out,inst_28556);
} else {
if((state_val_28577 === (5))){
var inst_28570 = cljs.core.async.close_BANG_.call(null,out);
var state_28576__$1 = state_28576;
var statearr_28589_28609 = state_28576__$1;
(statearr_28589_28609[(2)] = inst_28570);

(statearr_28589_28609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (10))){
var inst_28568 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28590_28610 = state_28576__$1;
(statearr_28590_28610[(2)] = inst_28568);

(statearr_28590_28610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (8))){
var inst_28548 = (state_28576[(10)]);
var inst_28555 = (state_28576[(7)]);
var inst_28557 = (state_28576[(9)]);
var inst_28556 = (state_28576[(8)]);
var inst_28560 = (function (){var cs = inst_28548;
var vec__28553 = inst_28555;
var v = inst_28556;
var c = inst_28557;
return ((function (cs,vec__28553,v,c,inst_28548,inst_28555,inst_28557,inst_28556,state_val_28577,c__21372__auto___28601,out){
return (function (p1__28544_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28544_SHARP_);
});
;})(cs,vec__28553,v,c,inst_28548,inst_28555,inst_28557,inst_28556,state_val_28577,c__21372__auto___28601,out))
})();
var inst_28561 = cljs.core.filterv.call(null,inst_28560,inst_28548);
var inst_28548__$1 = inst_28561;
var state_28576__$1 = (function (){var statearr_28591 = state_28576;
(statearr_28591[(10)] = inst_28548__$1);

return statearr_28591;
})();
var statearr_28592_28611 = state_28576__$1;
(statearr_28592_28611[(2)] = null);

(statearr_28592_28611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__21372__auto___28601,out))
;
return ((function (switch__21310__auto__,c__21372__auto___28601,out){
return (function() {
var cljs$core$async$state_machine__21311__auto__ = null;
var cljs$core$async$state_machine__21311__auto____0 = (function (){
var statearr_28596 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28596[(0)] = cljs$core$async$state_machine__21311__auto__);

(statearr_28596[(1)] = (1));

return statearr_28596;
});
var cljs$core$async$state_machine__21311__auto____1 = (function (state_28576){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_28576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e28597){if((e28597 instanceof Object)){
var ex__21314__auto__ = e28597;
var statearr_28598_28612 = state_28576;
(statearr_28598_28612[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28613 = state_28576;
state_28576 = G__28613;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$state_machine__21311__auto__ = function(state_28576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21311__auto____1.call(this,state_28576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21311__auto____0;
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21311__auto____1;
return cljs$core$async$state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___28601,out))
})();
var state__21374__auto__ = (function (){var statearr_28599 = f__21373__auto__.call(null);
(statearr_28599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___28601);

return statearr_28599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___28601,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__28615 = arguments.length;
switch (G__28615) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21372__auto___28663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___28663,out){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___28663,out){
return (function (state_28639){
var state_val_28640 = (state_28639[(1)]);
if((state_val_28640 === (7))){
var inst_28621 = (state_28639[(7)]);
var inst_28621__$1 = (state_28639[(2)]);
var inst_28622 = (inst_28621__$1 == null);
var inst_28623 = cljs.core.not.call(null,inst_28622);
var state_28639__$1 = (function (){var statearr_28641 = state_28639;
(statearr_28641[(7)] = inst_28621__$1);

return statearr_28641;
})();
if(inst_28623){
var statearr_28642_28664 = state_28639__$1;
(statearr_28642_28664[(1)] = (8));

} else {
var statearr_28643_28665 = state_28639__$1;
(statearr_28643_28665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28640 === (1))){
var inst_28616 = (0);
var state_28639__$1 = (function (){var statearr_28644 = state_28639;
(statearr_28644[(8)] = inst_28616);

return statearr_28644;
})();
var statearr_28645_28666 = state_28639__$1;
(statearr_28645_28666[(2)] = null);

(statearr_28645_28666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28640 === (4))){
var state_28639__$1 = state_28639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28639__$1,(7),ch);
} else {
if((state_val_28640 === (6))){
var inst_28634 = (state_28639[(2)]);
var state_28639__$1 = state_28639;
var statearr_28646_28667 = state_28639__$1;
(statearr_28646_28667[(2)] = inst_28634);

(statearr_28646_28667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28640 === (3))){
var inst_28636 = (state_28639[(2)]);
var inst_28637 = cljs.core.async.close_BANG_.call(null,out);
var state_28639__$1 = (function (){var statearr_28647 = state_28639;
(statearr_28647[(9)] = inst_28636);

return statearr_28647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28639__$1,inst_28637);
} else {
if((state_val_28640 === (2))){
var inst_28616 = (state_28639[(8)]);
var inst_28618 = (inst_28616 < n);
var state_28639__$1 = state_28639;
if(cljs.core.truth_(inst_28618)){
var statearr_28648_28668 = state_28639__$1;
(statearr_28648_28668[(1)] = (4));

} else {
var statearr_28649_28669 = state_28639__$1;
(statearr_28649_28669[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28640 === (11))){
var inst_28616 = (state_28639[(8)]);
var inst_28626 = (state_28639[(2)]);
var inst_28627 = (inst_28616 + (1));
var inst_28616__$1 = inst_28627;
var state_28639__$1 = (function (){var statearr_28650 = state_28639;
(statearr_28650[(10)] = inst_28626);

(statearr_28650[(8)] = inst_28616__$1);

return statearr_28650;
})();
var statearr_28651_28670 = state_28639__$1;
(statearr_28651_28670[(2)] = null);

(statearr_28651_28670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28640 === (9))){
var state_28639__$1 = state_28639;
var statearr_28652_28671 = state_28639__$1;
(statearr_28652_28671[(2)] = null);

(statearr_28652_28671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28640 === (5))){
var state_28639__$1 = state_28639;
var statearr_28653_28672 = state_28639__$1;
(statearr_28653_28672[(2)] = null);

(statearr_28653_28672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28640 === (10))){
var inst_28631 = (state_28639[(2)]);
var state_28639__$1 = state_28639;
var statearr_28654_28673 = state_28639__$1;
(statearr_28654_28673[(2)] = inst_28631);

(statearr_28654_28673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28640 === (8))){
var inst_28621 = (state_28639[(7)]);
var state_28639__$1 = state_28639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28639__$1,(11),out,inst_28621);
} else {
return null;
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
});})(c__21372__auto___28663,out))
;
return ((function (switch__21310__auto__,c__21372__auto___28663,out){
return (function() {
var cljs$core$async$state_machine__21311__auto__ = null;
var cljs$core$async$state_machine__21311__auto____0 = (function (){
var statearr_28658 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28658[(0)] = cljs$core$async$state_machine__21311__auto__);

(statearr_28658[(1)] = (1));

return statearr_28658;
});
var cljs$core$async$state_machine__21311__auto____1 = (function (state_28639){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_28639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e28659){if((e28659 instanceof Object)){
var ex__21314__auto__ = e28659;
var statearr_28660_28674 = state_28639;
(statearr_28660_28674[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28675 = state_28639;
state_28639 = G__28675;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$state_machine__21311__auto__ = function(state_28639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21311__auto____1.call(this,state_28639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21311__auto____0;
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21311__auto____1;
return cljs$core$async$state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___28663,out))
})();
var state__21374__auto__ = (function (){var statearr_28661 = f__21373__auto__.call(null);
(statearr_28661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___28663);

return statearr_28661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___28663,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28683 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28683 = (function (map_LT_,f,ch,meta28684){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28684 = meta28684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28685,meta28684__$1){
var self__ = this;
var _28685__$1 = this;
return (new cljs.core.async.t28683(self__.map_LT_,self__.f,self__.ch,meta28684__$1));
});

cljs.core.async.t28683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28685){
var self__ = this;
var _28685__$1 = this;
return self__.meta28684;
});

cljs.core.async.t28683.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28683.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28683.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28683.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28683.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28686 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28686 = (function (map_LT_,f,ch,meta28684,_,fn1,meta28687){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28684 = meta28684;
this._ = _;
this.fn1 = fn1;
this.meta28687 = meta28687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28688,meta28687__$1){
var self__ = this;
var _28688__$1 = this;
return (new cljs.core.async.t28686(self__.map_LT_,self__.f,self__.ch,self__.meta28684,self__._,self__.fn1,meta28687__$1));
});})(___$1))
;

cljs.core.async.t28686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28688){
var self__ = this;
var _28688__$1 = this;
return self__.meta28687;
});})(___$1))
;

cljs.core.async.t28686.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28676_SHARP_){
return f1.call(null,(((p1__28676_SHARP_ == null))?null:self__.f.call(null,p1__28676_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28686.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28684","meta28684",1025616964,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28687","meta28687",1055520549,null)], null);
});})(___$1))
;

cljs.core.async.t28686.cljs$lang$type = true;

cljs.core.async.t28686.cljs$lang$ctorStr = "cljs.core.async/t28686";

cljs.core.async.t28686.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18716__auto__,writer__18717__auto__,opt__18718__auto__){
return cljs.core._write.call(null,writer__18717__auto__,"cljs.core.async/t28686");
});})(___$1))
;

cljs.core.async.__GT_t28686 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28686(map_LT___$1,f__$1,ch__$1,meta28684__$1,___$2,fn1__$1,meta28687){
return (new cljs.core.async.t28686(map_LT___$1,f__$1,ch__$1,meta28684__$1,___$2,fn1__$1,meta28687));
});})(___$1))
;

}

return (new cljs.core.async.t28686(self__.map_LT_,self__.f,self__.ch,self__.meta28684,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18125__auto__ = ret;
if(cljs.core.truth_(and__18125__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18125__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28683.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28683.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28684","meta28684",1025616964,null)], null);
});

cljs.core.async.t28683.cljs$lang$type = true;

cljs.core.async.t28683.cljs$lang$ctorStr = "cljs.core.async/t28683";

cljs.core.async.t28683.cljs$lang$ctorPrWriter = (function (this__18716__auto__,writer__18717__auto__,opt__18718__auto__){
return cljs.core._write.call(null,writer__18717__auto__,"cljs.core.async/t28683");
});

cljs.core.async.__GT_t28683 = (function cljs$core$async$map_LT__$___GT_t28683(map_LT___$1,f__$1,ch__$1,meta28684){
return (new cljs.core.async.t28683(map_LT___$1,f__$1,ch__$1,meta28684));
});

}

return (new cljs.core.async.t28683(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28692 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28692 = (function (map_GT_,f,ch,meta28693){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28693 = meta28693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28694,meta28693__$1){
var self__ = this;
var _28694__$1 = this;
return (new cljs.core.async.t28692(self__.map_GT_,self__.f,self__.ch,meta28693__$1));
});

cljs.core.async.t28692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28694){
var self__ = this;
var _28694__$1 = this;
return self__.meta28693;
});

cljs.core.async.t28692.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28692.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28692.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28692.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28692.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28692.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28693","meta28693",1539575220,null)], null);
});

cljs.core.async.t28692.cljs$lang$type = true;

cljs.core.async.t28692.cljs$lang$ctorStr = "cljs.core.async/t28692";

cljs.core.async.t28692.cljs$lang$ctorPrWriter = (function (this__18716__auto__,writer__18717__auto__,opt__18718__auto__){
return cljs.core._write.call(null,writer__18717__auto__,"cljs.core.async/t28692");
});

cljs.core.async.__GT_t28692 = (function cljs$core$async$map_GT__$___GT_t28692(map_GT___$1,f__$1,ch__$1,meta28693){
return (new cljs.core.async.t28692(map_GT___$1,f__$1,ch__$1,meta28693));
});

}

return (new cljs.core.async.t28692(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28698 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28698 = (function (filter_GT_,p,ch,meta28699){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28699 = meta28699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28700,meta28699__$1){
var self__ = this;
var _28700__$1 = this;
return (new cljs.core.async.t28698(self__.filter_GT_,self__.p,self__.ch,meta28699__$1));
});

cljs.core.async.t28698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28700){
var self__ = this;
var _28700__$1 = this;
return self__.meta28699;
});

cljs.core.async.t28698.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28698.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28698.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28698.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28698.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28698.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28698.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28699","meta28699",-905033011,null)], null);
});

cljs.core.async.t28698.cljs$lang$type = true;

cljs.core.async.t28698.cljs$lang$ctorStr = "cljs.core.async/t28698";

cljs.core.async.t28698.cljs$lang$ctorPrWriter = (function (this__18716__auto__,writer__18717__auto__,opt__18718__auto__){
return cljs.core._write.call(null,writer__18717__auto__,"cljs.core.async/t28698");
});

cljs.core.async.__GT_t28698 = (function cljs$core$async$filter_GT__$___GT_t28698(filter_GT___$1,p__$1,ch__$1,meta28699){
return (new cljs.core.async.t28698(filter_GT___$1,p__$1,ch__$1,meta28699));
});

}

return (new cljs.core.async.t28698(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__28702 = arguments.length;
switch (G__28702) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21372__auto___28745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___28745,out){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___28745,out){
return (function (state_28723){
var state_val_28724 = (state_28723[(1)]);
if((state_val_28724 === (7))){
var inst_28719 = (state_28723[(2)]);
var state_28723__$1 = state_28723;
var statearr_28725_28746 = state_28723__$1;
(statearr_28725_28746[(2)] = inst_28719);

(statearr_28725_28746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (1))){
var state_28723__$1 = state_28723;
var statearr_28726_28747 = state_28723__$1;
(statearr_28726_28747[(2)] = null);

(statearr_28726_28747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (4))){
var inst_28705 = (state_28723[(7)]);
var inst_28705__$1 = (state_28723[(2)]);
var inst_28706 = (inst_28705__$1 == null);
var state_28723__$1 = (function (){var statearr_28727 = state_28723;
(statearr_28727[(7)] = inst_28705__$1);

return statearr_28727;
})();
if(cljs.core.truth_(inst_28706)){
var statearr_28728_28748 = state_28723__$1;
(statearr_28728_28748[(1)] = (5));

} else {
var statearr_28729_28749 = state_28723__$1;
(statearr_28729_28749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (6))){
var inst_28705 = (state_28723[(7)]);
var inst_28710 = p.call(null,inst_28705);
var state_28723__$1 = state_28723;
if(cljs.core.truth_(inst_28710)){
var statearr_28730_28750 = state_28723__$1;
(statearr_28730_28750[(1)] = (8));

} else {
var statearr_28731_28751 = state_28723__$1;
(statearr_28731_28751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (3))){
var inst_28721 = (state_28723[(2)]);
var state_28723__$1 = state_28723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28723__$1,inst_28721);
} else {
if((state_val_28724 === (2))){
var state_28723__$1 = state_28723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28723__$1,(4),ch);
} else {
if((state_val_28724 === (11))){
var inst_28713 = (state_28723[(2)]);
var state_28723__$1 = state_28723;
var statearr_28732_28752 = state_28723__$1;
(statearr_28732_28752[(2)] = inst_28713);

(statearr_28732_28752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (9))){
var state_28723__$1 = state_28723;
var statearr_28733_28753 = state_28723__$1;
(statearr_28733_28753[(2)] = null);

(statearr_28733_28753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (5))){
var inst_28708 = cljs.core.async.close_BANG_.call(null,out);
var state_28723__$1 = state_28723;
var statearr_28734_28754 = state_28723__$1;
(statearr_28734_28754[(2)] = inst_28708);

(statearr_28734_28754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (10))){
var inst_28716 = (state_28723[(2)]);
var state_28723__$1 = (function (){var statearr_28735 = state_28723;
(statearr_28735[(8)] = inst_28716);

return statearr_28735;
})();
var statearr_28736_28755 = state_28723__$1;
(statearr_28736_28755[(2)] = null);

(statearr_28736_28755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (8))){
var inst_28705 = (state_28723[(7)]);
var state_28723__$1 = state_28723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28723__$1,(11),out,inst_28705);
} else {
return null;
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
});})(c__21372__auto___28745,out))
;
return ((function (switch__21310__auto__,c__21372__auto___28745,out){
return (function() {
var cljs$core$async$state_machine__21311__auto__ = null;
var cljs$core$async$state_machine__21311__auto____0 = (function (){
var statearr_28740 = [null,null,null,null,null,null,null,null,null];
(statearr_28740[(0)] = cljs$core$async$state_machine__21311__auto__);

(statearr_28740[(1)] = (1));

return statearr_28740;
});
var cljs$core$async$state_machine__21311__auto____1 = (function (state_28723){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_28723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e28741){if((e28741 instanceof Object)){
var ex__21314__auto__ = e28741;
var statearr_28742_28756 = state_28723;
(statearr_28742_28756[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28757 = state_28723;
state_28723 = G__28757;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$state_machine__21311__auto__ = function(state_28723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21311__auto____1.call(this,state_28723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21311__auto____0;
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21311__auto____1;
return cljs$core$async$state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___28745,out))
})();
var state__21374__auto__ = (function (){var statearr_28743 = f__21373__auto__.call(null);
(statearr_28743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___28745);

return statearr_28743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___28745,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__28759 = arguments.length;
switch (G__28759) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto__){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto__){
return (function (state_28926){
var state_val_28927 = (state_28926[(1)]);
if((state_val_28927 === (7))){
var inst_28922 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
var statearr_28928_28969 = state_28926__$1;
(statearr_28928_28969[(2)] = inst_28922);

(statearr_28928_28969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (20))){
var inst_28892 = (state_28926[(7)]);
var inst_28903 = (state_28926[(2)]);
var inst_28904 = cljs.core.next.call(null,inst_28892);
var inst_28878 = inst_28904;
var inst_28879 = null;
var inst_28880 = (0);
var inst_28881 = (0);
var state_28926__$1 = (function (){var statearr_28929 = state_28926;
(statearr_28929[(8)] = inst_28903);

(statearr_28929[(9)] = inst_28879);

(statearr_28929[(10)] = inst_28881);

(statearr_28929[(11)] = inst_28880);

(statearr_28929[(12)] = inst_28878);

return statearr_28929;
})();
var statearr_28930_28970 = state_28926__$1;
(statearr_28930_28970[(2)] = null);

(statearr_28930_28970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (1))){
var state_28926__$1 = state_28926;
var statearr_28931_28971 = state_28926__$1;
(statearr_28931_28971[(2)] = null);

(statearr_28931_28971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (4))){
var inst_28867 = (state_28926[(13)]);
var inst_28867__$1 = (state_28926[(2)]);
var inst_28868 = (inst_28867__$1 == null);
var state_28926__$1 = (function (){var statearr_28932 = state_28926;
(statearr_28932[(13)] = inst_28867__$1);

return statearr_28932;
})();
if(cljs.core.truth_(inst_28868)){
var statearr_28933_28972 = state_28926__$1;
(statearr_28933_28972[(1)] = (5));

} else {
var statearr_28934_28973 = state_28926__$1;
(statearr_28934_28973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (15))){
var state_28926__$1 = state_28926;
var statearr_28938_28974 = state_28926__$1;
(statearr_28938_28974[(2)] = null);

(statearr_28938_28974[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (21))){
var state_28926__$1 = state_28926;
var statearr_28939_28975 = state_28926__$1;
(statearr_28939_28975[(2)] = null);

(statearr_28939_28975[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (13))){
var inst_28879 = (state_28926[(9)]);
var inst_28881 = (state_28926[(10)]);
var inst_28880 = (state_28926[(11)]);
var inst_28878 = (state_28926[(12)]);
var inst_28888 = (state_28926[(2)]);
var inst_28889 = (inst_28881 + (1));
var tmp28935 = inst_28879;
var tmp28936 = inst_28880;
var tmp28937 = inst_28878;
var inst_28878__$1 = tmp28937;
var inst_28879__$1 = tmp28935;
var inst_28880__$1 = tmp28936;
var inst_28881__$1 = inst_28889;
var state_28926__$1 = (function (){var statearr_28940 = state_28926;
(statearr_28940[(14)] = inst_28888);

(statearr_28940[(9)] = inst_28879__$1);

(statearr_28940[(10)] = inst_28881__$1);

(statearr_28940[(11)] = inst_28880__$1);

(statearr_28940[(12)] = inst_28878__$1);

return statearr_28940;
})();
var statearr_28941_28976 = state_28926__$1;
(statearr_28941_28976[(2)] = null);

(statearr_28941_28976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (22))){
var state_28926__$1 = state_28926;
var statearr_28942_28977 = state_28926__$1;
(statearr_28942_28977[(2)] = null);

(statearr_28942_28977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (6))){
var inst_28867 = (state_28926[(13)]);
var inst_28876 = f.call(null,inst_28867);
var inst_28877 = cljs.core.seq.call(null,inst_28876);
var inst_28878 = inst_28877;
var inst_28879 = null;
var inst_28880 = (0);
var inst_28881 = (0);
var state_28926__$1 = (function (){var statearr_28943 = state_28926;
(statearr_28943[(9)] = inst_28879);

(statearr_28943[(10)] = inst_28881);

(statearr_28943[(11)] = inst_28880);

(statearr_28943[(12)] = inst_28878);

return statearr_28943;
})();
var statearr_28944_28978 = state_28926__$1;
(statearr_28944_28978[(2)] = null);

(statearr_28944_28978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (17))){
var inst_28892 = (state_28926[(7)]);
var inst_28896 = cljs.core.chunk_first.call(null,inst_28892);
var inst_28897 = cljs.core.chunk_rest.call(null,inst_28892);
var inst_28898 = cljs.core.count.call(null,inst_28896);
var inst_28878 = inst_28897;
var inst_28879 = inst_28896;
var inst_28880 = inst_28898;
var inst_28881 = (0);
var state_28926__$1 = (function (){var statearr_28945 = state_28926;
(statearr_28945[(9)] = inst_28879);

(statearr_28945[(10)] = inst_28881);

(statearr_28945[(11)] = inst_28880);

(statearr_28945[(12)] = inst_28878);

return statearr_28945;
})();
var statearr_28946_28979 = state_28926__$1;
(statearr_28946_28979[(2)] = null);

(statearr_28946_28979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (3))){
var inst_28924 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28926__$1,inst_28924);
} else {
if((state_val_28927 === (12))){
var inst_28912 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
var statearr_28947_28980 = state_28926__$1;
(statearr_28947_28980[(2)] = inst_28912);

(statearr_28947_28980[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (2))){
var state_28926__$1 = state_28926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28926__$1,(4),in$);
} else {
if((state_val_28927 === (23))){
var inst_28920 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
var statearr_28948_28981 = state_28926__$1;
(statearr_28948_28981[(2)] = inst_28920);

(statearr_28948_28981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (19))){
var inst_28907 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
var statearr_28949_28982 = state_28926__$1;
(statearr_28949_28982[(2)] = inst_28907);

(statearr_28949_28982[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (11))){
var inst_28892 = (state_28926[(7)]);
var inst_28878 = (state_28926[(12)]);
var inst_28892__$1 = cljs.core.seq.call(null,inst_28878);
var state_28926__$1 = (function (){var statearr_28950 = state_28926;
(statearr_28950[(7)] = inst_28892__$1);

return statearr_28950;
})();
if(inst_28892__$1){
var statearr_28951_28983 = state_28926__$1;
(statearr_28951_28983[(1)] = (14));

} else {
var statearr_28952_28984 = state_28926__$1;
(statearr_28952_28984[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (9))){
var inst_28914 = (state_28926[(2)]);
var inst_28915 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28926__$1 = (function (){var statearr_28953 = state_28926;
(statearr_28953[(15)] = inst_28914);

return statearr_28953;
})();
if(cljs.core.truth_(inst_28915)){
var statearr_28954_28985 = state_28926__$1;
(statearr_28954_28985[(1)] = (21));

} else {
var statearr_28955_28986 = state_28926__$1;
(statearr_28955_28986[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (5))){
var inst_28870 = cljs.core.async.close_BANG_.call(null,out);
var state_28926__$1 = state_28926;
var statearr_28956_28987 = state_28926__$1;
(statearr_28956_28987[(2)] = inst_28870);

(statearr_28956_28987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (14))){
var inst_28892 = (state_28926[(7)]);
var inst_28894 = cljs.core.chunked_seq_QMARK_.call(null,inst_28892);
var state_28926__$1 = state_28926;
if(inst_28894){
var statearr_28957_28988 = state_28926__$1;
(statearr_28957_28988[(1)] = (17));

} else {
var statearr_28958_28989 = state_28926__$1;
(statearr_28958_28989[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (16))){
var inst_28910 = (state_28926[(2)]);
var state_28926__$1 = state_28926;
var statearr_28959_28990 = state_28926__$1;
(statearr_28959_28990[(2)] = inst_28910);

(statearr_28959_28990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28927 === (10))){
var inst_28879 = (state_28926[(9)]);
var inst_28881 = (state_28926[(10)]);
var inst_28886 = cljs.core._nth.call(null,inst_28879,inst_28881);
var state_28926__$1 = state_28926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28926__$1,(13),out,inst_28886);
} else {
if((state_val_28927 === (18))){
var inst_28892 = (state_28926[(7)]);
var inst_28901 = cljs.core.first.call(null,inst_28892);
var state_28926__$1 = state_28926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28926__$1,(20),out,inst_28901);
} else {
if((state_val_28927 === (8))){
var inst_28881 = (state_28926[(10)]);
var inst_28880 = (state_28926[(11)]);
var inst_28883 = (inst_28881 < inst_28880);
var inst_28884 = inst_28883;
var state_28926__$1 = state_28926;
if(cljs.core.truth_(inst_28884)){
var statearr_28960_28991 = state_28926__$1;
(statearr_28960_28991[(1)] = (10));

} else {
var statearr_28961_28992 = state_28926__$1;
(statearr_28961_28992[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__21372__auto__))
;
return ((function (switch__21310__auto__,c__21372__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21311__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21311__auto____0 = (function (){
var statearr_28965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28965[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21311__auto__);

(statearr_28965[(1)] = (1));

return statearr_28965;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21311__auto____1 = (function (state_28926){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_28926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e28966){if((e28966 instanceof Object)){
var ex__21314__auto__ = e28966;
var statearr_28967_28993 = state_28926;
(statearr_28967_28993[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28994 = state_28926;
state_28926 = G__28994;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21311__auto__ = function(state_28926){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21311__auto____1.call(this,state_28926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21311__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21311__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto__))
})();
var state__21374__auto__ = (function (){var statearr_28968 = f__21373__auto__.call(null);
(statearr_28968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto__);

return statearr_28968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto__))
);

return c__21372__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28996 = arguments.length;
switch (G__28996) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__28999 = arguments.length;
switch (G__28999) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__29002 = arguments.length;
switch (G__29002) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21372__auto___29052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___29052,out){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___29052,out){
return (function (state_29026){
var state_val_29027 = (state_29026[(1)]);
if((state_val_29027 === (7))){
var inst_29021 = (state_29026[(2)]);
var state_29026__$1 = state_29026;
var statearr_29028_29053 = state_29026__$1;
(statearr_29028_29053[(2)] = inst_29021);

(statearr_29028_29053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (1))){
var inst_29003 = null;
var state_29026__$1 = (function (){var statearr_29029 = state_29026;
(statearr_29029[(7)] = inst_29003);

return statearr_29029;
})();
var statearr_29030_29054 = state_29026__$1;
(statearr_29030_29054[(2)] = null);

(statearr_29030_29054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (4))){
var inst_29006 = (state_29026[(8)]);
var inst_29006__$1 = (state_29026[(2)]);
var inst_29007 = (inst_29006__$1 == null);
var inst_29008 = cljs.core.not.call(null,inst_29007);
var state_29026__$1 = (function (){var statearr_29031 = state_29026;
(statearr_29031[(8)] = inst_29006__$1);

return statearr_29031;
})();
if(inst_29008){
var statearr_29032_29055 = state_29026__$1;
(statearr_29032_29055[(1)] = (5));

} else {
var statearr_29033_29056 = state_29026__$1;
(statearr_29033_29056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (6))){
var state_29026__$1 = state_29026;
var statearr_29034_29057 = state_29026__$1;
(statearr_29034_29057[(2)] = null);

(statearr_29034_29057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (3))){
var inst_29023 = (state_29026[(2)]);
var inst_29024 = cljs.core.async.close_BANG_.call(null,out);
var state_29026__$1 = (function (){var statearr_29035 = state_29026;
(statearr_29035[(9)] = inst_29023);

return statearr_29035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29026__$1,inst_29024);
} else {
if((state_val_29027 === (2))){
var state_29026__$1 = state_29026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29026__$1,(4),ch);
} else {
if((state_val_29027 === (11))){
var inst_29006 = (state_29026[(8)]);
var inst_29015 = (state_29026[(2)]);
var inst_29003 = inst_29006;
var state_29026__$1 = (function (){var statearr_29036 = state_29026;
(statearr_29036[(10)] = inst_29015);

(statearr_29036[(7)] = inst_29003);

return statearr_29036;
})();
var statearr_29037_29058 = state_29026__$1;
(statearr_29037_29058[(2)] = null);

(statearr_29037_29058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (9))){
var inst_29006 = (state_29026[(8)]);
var state_29026__$1 = state_29026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29026__$1,(11),out,inst_29006);
} else {
if((state_val_29027 === (5))){
var inst_29003 = (state_29026[(7)]);
var inst_29006 = (state_29026[(8)]);
var inst_29010 = cljs.core._EQ_.call(null,inst_29006,inst_29003);
var state_29026__$1 = state_29026;
if(inst_29010){
var statearr_29039_29059 = state_29026__$1;
(statearr_29039_29059[(1)] = (8));

} else {
var statearr_29040_29060 = state_29026__$1;
(statearr_29040_29060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (10))){
var inst_29018 = (state_29026[(2)]);
var state_29026__$1 = state_29026;
var statearr_29041_29061 = state_29026__$1;
(statearr_29041_29061[(2)] = inst_29018);

(statearr_29041_29061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (8))){
var inst_29003 = (state_29026[(7)]);
var tmp29038 = inst_29003;
var inst_29003__$1 = tmp29038;
var state_29026__$1 = (function (){var statearr_29042 = state_29026;
(statearr_29042[(7)] = inst_29003__$1);

return statearr_29042;
})();
var statearr_29043_29062 = state_29026__$1;
(statearr_29043_29062[(2)] = null);

(statearr_29043_29062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__21372__auto___29052,out))
;
return ((function (switch__21310__auto__,c__21372__auto___29052,out){
return (function() {
var cljs$core$async$state_machine__21311__auto__ = null;
var cljs$core$async$state_machine__21311__auto____0 = (function (){
var statearr_29047 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29047[(0)] = cljs$core$async$state_machine__21311__auto__);

(statearr_29047[(1)] = (1));

return statearr_29047;
});
var cljs$core$async$state_machine__21311__auto____1 = (function (state_29026){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_29026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e29048){if((e29048 instanceof Object)){
var ex__21314__auto__ = e29048;
var statearr_29049_29063 = state_29026;
(statearr_29049_29063[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29064 = state_29026;
state_29026 = G__29064;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$state_machine__21311__auto__ = function(state_29026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21311__auto____1.call(this,state_29026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21311__auto____0;
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21311__auto____1;
return cljs$core$async$state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___29052,out))
})();
var state__21374__auto__ = (function (){var statearr_29050 = f__21373__auto__.call(null);
(statearr_29050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___29052);

return statearr_29050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___29052,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__29066 = arguments.length;
switch (G__29066) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21372__auto___29135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___29135,out){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___29135,out){
return (function (state_29104){
var state_val_29105 = (state_29104[(1)]);
if((state_val_29105 === (7))){
var inst_29100 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
var statearr_29106_29136 = state_29104__$1;
(statearr_29106_29136[(2)] = inst_29100);

(statearr_29106_29136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (1))){
var inst_29067 = (new Array(n));
var inst_29068 = inst_29067;
var inst_29069 = (0);
var state_29104__$1 = (function (){var statearr_29107 = state_29104;
(statearr_29107[(7)] = inst_29068);

(statearr_29107[(8)] = inst_29069);

return statearr_29107;
})();
var statearr_29108_29137 = state_29104__$1;
(statearr_29108_29137[(2)] = null);

(statearr_29108_29137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (4))){
var inst_29072 = (state_29104[(9)]);
var inst_29072__$1 = (state_29104[(2)]);
var inst_29073 = (inst_29072__$1 == null);
var inst_29074 = cljs.core.not.call(null,inst_29073);
var state_29104__$1 = (function (){var statearr_29109 = state_29104;
(statearr_29109[(9)] = inst_29072__$1);

return statearr_29109;
})();
if(inst_29074){
var statearr_29110_29138 = state_29104__$1;
(statearr_29110_29138[(1)] = (5));

} else {
var statearr_29111_29139 = state_29104__$1;
(statearr_29111_29139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (15))){
var inst_29094 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
var statearr_29112_29140 = state_29104__$1;
(statearr_29112_29140[(2)] = inst_29094);

(statearr_29112_29140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (13))){
var state_29104__$1 = state_29104;
var statearr_29113_29141 = state_29104__$1;
(statearr_29113_29141[(2)] = null);

(statearr_29113_29141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (6))){
var inst_29069 = (state_29104[(8)]);
var inst_29090 = (inst_29069 > (0));
var state_29104__$1 = state_29104;
if(cljs.core.truth_(inst_29090)){
var statearr_29114_29142 = state_29104__$1;
(statearr_29114_29142[(1)] = (12));

} else {
var statearr_29115_29143 = state_29104__$1;
(statearr_29115_29143[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (3))){
var inst_29102 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29104__$1,inst_29102);
} else {
if((state_val_29105 === (12))){
var inst_29068 = (state_29104[(7)]);
var inst_29092 = cljs.core.vec.call(null,inst_29068);
var state_29104__$1 = state_29104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29104__$1,(15),out,inst_29092);
} else {
if((state_val_29105 === (2))){
var state_29104__$1 = state_29104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29104__$1,(4),ch);
} else {
if((state_val_29105 === (11))){
var inst_29084 = (state_29104[(2)]);
var inst_29085 = (new Array(n));
var inst_29068 = inst_29085;
var inst_29069 = (0);
var state_29104__$1 = (function (){var statearr_29116 = state_29104;
(statearr_29116[(7)] = inst_29068);

(statearr_29116[(8)] = inst_29069);

(statearr_29116[(10)] = inst_29084);

return statearr_29116;
})();
var statearr_29117_29144 = state_29104__$1;
(statearr_29117_29144[(2)] = null);

(statearr_29117_29144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (9))){
var inst_29068 = (state_29104[(7)]);
var inst_29082 = cljs.core.vec.call(null,inst_29068);
var state_29104__$1 = state_29104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29104__$1,(11),out,inst_29082);
} else {
if((state_val_29105 === (5))){
var inst_29068 = (state_29104[(7)]);
var inst_29069 = (state_29104[(8)]);
var inst_29077 = (state_29104[(11)]);
var inst_29072 = (state_29104[(9)]);
var inst_29076 = (inst_29068[inst_29069] = inst_29072);
var inst_29077__$1 = (inst_29069 + (1));
var inst_29078 = (inst_29077__$1 < n);
var state_29104__$1 = (function (){var statearr_29118 = state_29104;
(statearr_29118[(12)] = inst_29076);

(statearr_29118[(11)] = inst_29077__$1);

return statearr_29118;
})();
if(cljs.core.truth_(inst_29078)){
var statearr_29119_29145 = state_29104__$1;
(statearr_29119_29145[(1)] = (8));

} else {
var statearr_29120_29146 = state_29104__$1;
(statearr_29120_29146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (14))){
var inst_29097 = (state_29104[(2)]);
var inst_29098 = cljs.core.async.close_BANG_.call(null,out);
var state_29104__$1 = (function (){var statearr_29122 = state_29104;
(statearr_29122[(13)] = inst_29097);

return statearr_29122;
})();
var statearr_29123_29147 = state_29104__$1;
(statearr_29123_29147[(2)] = inst_29098);

(statearr_29123_29147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (10))){
var inst_29088 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
var statearr_29124_29148 = state_29104__$1;
(statearr_29124_29148[(2)] = inst_29088);

(statearr_29124_29148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (8))){
var inst_29068 = (state_29104[(7)]);
var inst_29077 = (state_29104[(11)]);
var tmp29121 = inst_29068;
var inst_29068__$1 = tmp29121;
var inst_29069 = inst_29077;
var state_29104__$1 = (function (){var statearr_29125 = state_29104;
(statearr_29125[(7)] = inst_29068__$1);

(statearr_29125[(8)] = inst_29069);

return statearr_29125;
})();
var statearr_29126_29149 = state_29104__$1;
(statearr_29126_29149[(2)] = null);

(statearr_29126_29149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__21372__auto___29135,out))
;
return ((function (switch__21310__auto__,c__21372__auto___29135,out){
return (function() {
var cljs$core$async$state_machine__21311__auto__ = null;
var cljs$core$async$state_machine__21311__auto____0 = (function (){
var statearr_29130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29130[(0)] = cljs$core$async$state_machine__21311__auto__);

(statearr_29130[(1)] = (1));

return statearr_29130;
});
var cljs$core$async$state_machine__21311__auto____1 = (function (state_29104){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_29104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e29131){if((e29131 instanceof Object)){
var ex__21314__auto__ = e29131;
var statearr_29132_29150 = state_29104;
(statearr_29132_29150[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29151 = state_29104;
state_29104 = G__29151;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$state_machine__21311__auto__ = function(state_29104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21311__auto____1.call(this,state_29104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21311__auto____0;
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21311__auto____1;
return cljs$core$async$state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___29135,out))
})();
var state__21374__auto__ = (function (){var statearr_29133 = f__21373__auto__.call(null);
(statearr_29133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___29135);

return statearr_29133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___29135,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__29153 = arguments.length;
switch (G__29153) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21372__auto___29226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto___29226,out){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto___29226,out){
return (function (state_29195){
var state_val_29196 = (state_29195[(1)]);
if((state_val_29196 === (7))){
var inst_29191 = (state_29195[(2)]);
var state_29195__$1 = state_29195;
var statearr_29197_29227 = state_29195__$1;
(statearr_29197_29227[(2)] = inst_29191);

(statearr_29197_29227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (1))){
var inst_29154 = [];
var inst_29155 = inst_29154;
var inst_29156 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29195__$1 = (function (){var statearr_29198 = state_29195;
(statearr_29198[(7)] = inst_29155);

(statearr_29198[(8)] = inst_29156);

return statearr_29198;
})();
var statearr_29199_29228 = state_29195__$1;
(statearr_29199_29228[(2)] = null);

(statearr_29199_29228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (4))){
var inst_29159 = (state_29195[(9)]);
var inst_29159__$1 = (state_29195[(2)]);
var inst_29160 = (inst_29159__$1 == null);
var inst_29161 = cljs.core.not.call(null,inst_29160);
var state_29195__$1 = (function (){var statearr_29200 = state_29195;
(statearr_29200[(9)] = inst_29159__$1);

return statearr_29200;
})();
if(inst_29161){
var statearr_29201_29229 = state_29195__$1;
(statearr_29201_29229[(1)] = (5));

} else {
var statearr_29202_29230 = state_29195__$1;
(statearr_29202_29230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (15))){
var inst_29185 = (state_29195[(2)]);
var state_29195__$1 = state_29195;
var statearr_29203_29231 = state_29195__$1;
(statearr_29203_29231[(2)] = inst_29185);

(statearr_29203_29231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (13))){
var state_29195__$1 = state_29195;
var statearr_29204_29232 = state_29195__$1;
(statearr_29204_29232[(2)] = null);

(statearr_29204_29232[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (6))){
var inst_29155 = (state_29195[(7)]);
var inst_29180 = inst_29155.length;
var inst_29181 = (inst_29180 > (0));
var state_29195__$1 = state_29195;
if(cljs.core.truth_(inst_29181)){
var statearr_29205_29233 = state_29195__$1;
(statearr_29205_29233[(1)] = (12));

} else {
var statearr_29206_29234 = state_29195__$1;
(statearr_29206_29234[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (3))){
var inst_29193 = (state_29195[(2)]);
var state_29195__$1 = state_29195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29195__$1,inst_29193);
} else {
if((state_val_29196 === (12))){
var inst_29155 = (state_29195[(7)]);
var inst_29183 = cljs.core.vec.call(null,inst_29155);
var state_29195__$1 = state_29195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29195__$1,(15),out,inst_29183);
} else {
if((state_val_29196 === (2))){
var state_29195__$1 = state_29195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29195__$1,(4),ch);
} else {
if((state_val_29196 === (11))){
var inst_29159 = (state_29195[(9)]);
var inst_29163 = (state_29195[(10)]);
var inst_29173 = (state_29195[(2)]);
var inst_29174 = [];
var inst_29175 = inst_29174.push(inst_29159);
var inst_29155 = inst_29174;
var inst_29156 = inst_29163;
var state_29195__$1 = (function (){var statearr_29207 = state_29195;
(statearr_29207[(7)] = inst_29155);

(statearr_29207[(8)] = inst_29156);

(statearr_29207[(11)] = inst_29173);

(statearr_29207[(12)] = inst_29175);

return statearr_29207;
})();
var statearr_29208_29235 = state_29195__$1;
(statearr_29208_29235[(2)] = null);

(statearr_29208_29235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (9))){
var inst_29155 = (state_29195[(7)]);
var inst_29171 = cljs.core.vec.call(null,inst_29155);
var state_29195__$1 = state_29195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29195__$1,(11),out,inst_29171);
} else {
if((state_val_29196 === (5))){
var inst_29156 = (state_29195[(8)]);
var inst_29159 = (state_29195[(9)]);
var inst_29163 = (state_29195[(10)]);
var inst_29163__$1 = f.call(null,inst_29159);
var inst_29164 = cljs.core._EQ_.call(null,inst_29163__$1,inst_29156);
var inst_29165 = cljs.core.keyword_identical_QMARK_.call(null,inst_29156,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29166 = (inst_29164) || (inst_29165);
var state_29195__$1 = (function (){var statearr_29209 = state_29195;
(statearr_29209[(10)] = inst_29163__$1);

return statearr_29209;
})();
if(cljs.core.truth_(inst_29166)){
var statearr_29210_29236 = state_29195__$1;
(statearr_29210_29236[(1)] = (8));

} else {
var statearr_29211_29237 = state_29195__$1;
(statearr_29211_29237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (14))){
var inst_29188 = (state_29195[(2)]);
var inst_29189 = cljs.core.async.close_BANG_.call(null,out);
var state_29195__$1 = (function (){var statearr_29213 = state_29195;
(statearr_29213[(13)] = inst_29188);

return statearr_29213;
})();
var statearr_29214_29238 = state_29195__$1;
(statearr_29214_29238[(2)] = inst_29189);

(statearr_29214_29238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (10))){
var inst_29178 = (state_29195[(2)]);
var state_29195__$1 = state_29195;
var statearr_29215_29239 = state_29195__$1;
(statearr_29215_29239[(2)] = inst_29178);

(statearr_29215_29239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (8))){
var inst_29155 = (state_29195[(7)]);
var inst_29159 = (state_29195[(9)]);
var inst_29163 = (state_29195[(10)]);
var inst_29168 = inst_29155.push(inst_29159);
var tmp29212 = inst_29155;
var inst_29155__$1 = tmp29212;
var inst_29156 = inst_29163;
var state_29195__$1 = (function (){var statearr_29216 = state_29195;
(statearr_29216[(7)] = inst_29155__$1);

(statearr_29216[(8)] = inst_29156);

(statearr_29216[(14)] = inst_29168);

return statearr_29216;
})();
var statearr_29217_29240 = state_29195__$1;
(statearr_29217_29240[(2)] = null);

(statearr_29217_29240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__21372__auto___29226,out))
;
return ((function (switch__21310__auto__,c__21372__auto___29226,out){
return (function() {
var cljs$core$async$state_machine__21311__auto__ = null;
var cljs$core$async$state_machine__21311__auto____0 = (function (){
var statearr_29221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29221[(0)] = cljs$core$async$state_machine__21311__auto__);

(statearr_29221[(1)] = (1));

return statearr_29221;
});
var cljs$core$async$state_machine__21311__auto____1 = (function (state_29195){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_29195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e29222){if((e29222 instanceof Object)){
var ex__21314__auto__ = e29222;
var statearr_29223_29241 = state_29195;
(statearr_29223_29241[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29242 = state_29195;
state_29195 = G__29242;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
cljs$core$async$state_machine__21311__auto__ = function(state_29195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21311__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21311__auto____1.call(this,state_29195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21311__auto____0;
cljs$core$async$state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21311__auto____1;
return cljs$core$async$state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto___29226,out))
})();
var state__21374__auto__ = (function (){var statearr_29224 = f__21373__auto__.call(null);
(statearr_29224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto___29226);

return statearr_29224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto___29226,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1437028487403