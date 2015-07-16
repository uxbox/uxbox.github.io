// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.keyboard');
goog.require('cljs.core');
goog.require('uxbox.pubsub');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.events.EventType');
goog.require('goog.events.KeyCodes');
uxbox.keyboard.key_event = new cljs.core.PersistentArrayMap(null, 1, [(127),new cljs.core.Keyword(null,"delete-key-pressed","delete-key-pressed",1120263049)], null);
uxbox.keyboard.dispatch_key = (function uxbox$keyboard$dispatch_key(e){
var temp__4425__auto__ = cljs.core.get.call(null,uxbox.keyboard.key_event,e.keyCode);
if(cljs.core.truth_(temp__4425__auto__)){
var event_id = temp__4425__auto__;
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_id], null));
} else {
return null;
}
});
uxbox.keyboard.start_keyboard_BANG_ = (function uxbox$keyboard$start_keyboard_BANG_(){
var app_node = (document.getElementsByTagName("html")[(0)]);
return goog.events.listen(app_node,goog.events.EventType.KEYPRESS,uxbox.keyboard.dispatch_key);
});

//# sourceMappingURL=keyboard.js.map?rel=1437054886933