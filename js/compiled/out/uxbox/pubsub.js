// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.pubsub');
goog.require('cljs.core');
goog.require('uxbox.db');
goog.require('cljs.core.async');
uxbox.pubsub.publisher = cljs.core.atom.call(null,cljs.core.async.chan.call(null));
uxbox.pubsub.publication = cljs.core.atom.call(null,cljs.core.async.pub.call(null,cljs.core.deref.call(null,uxbox.pubsub.publisher),cljs.core.first));
uxbox.pubsub.log = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
uxbox.pubsub.publish_BANG_ = (function uxbox$pubsub$publish_BANG_(msg){
cljs.core.swap_BANG_.call(null,uxbox.pubsub.log,cljs.core.conj,msg);

return cljs.core.async.put_BANG_.call(null,cljs.core.deref.call(null,uxbox.pubsub.publisher),msg);
});
uxbox.pubsub.register_transition = (function uxbox$pubsub$register_transition(key,cb){
var ch = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,cljs.core.deref.call(null,uxbox.pubsub.publication),key,ch);

var c__21372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto__,ch){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto__,ch){
return (function (state_23588){
var state_val_23589 = (state_23588[(1)]);
if((state_val_23589 === (7))){
var inst_23584 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
var statearr_23590_23611 = state_23588__$1;
(statearr_23590_23611[(2)] = inst_23584);

(statearr_23590_23611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (1))){
var state_23588__$1 = state_23588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23588__$1,(2),ch);
} else {
if((state_val_23589 === (4))){
var inst_23586 = (state_23588[(2)]);
var state_23588__$1 = state_23588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23588__$1,inst_23586);
} else {
if((state_val_23589 === (6))){
var inst_23564 = (state_23588[(7)]);
var inst_23572 = (state_23588[(8)]);
var inst_23570 = cljs.core.deref.call(null,uxbox.db.app_state);
var inst_23571 = cljs.core.second.call(null,inst_23564);
var inst_23572__$1 = cb.call(null,inst_23570,inst_23571);
var state_23588__$1 = (function (){var statearr_23591 = state_23588;
(statearr_23591[(8)] = inst_23572__$1);

return statearr_23591;
})();
if(cljs.core.truth_(inst_23572__$1)){
var statearr_23592_23612 = state_23588__$1;
(statearr_23592_23612[(1)] = (8));

} else {
var statearr_23593_23613 = state_23588__$1;
(statearr_23593_23613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (3))){
var inst_23564 = (state_23588[(7)]);
var inst_23566 = (inst_23564 == null);
var state_23588__$1 = state_23588;
if(cljs.core.truth_(inst_23566)){
var statearr_23594_23614 = state_23588__$1;
(statearr_23594_23614[(1)] = (5));

} else {
var statearr_23595_23615 = state_23588__$1;
(statearr_23595_23615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (2))){
var inst_23563 = (state_23588[(2)]);
var inst_23564 = inst_23563;
var state_23588__$1 = (function (){var statearr_23596 = state_23588;
(statearr_23596[(7)] = inst_23564);

return statearr_23596;
})();
var statearr_23597_23616 = state_23588__$1;
(statearr_23597_23616[(2)] = null);

(statearr_23597_23616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (11))){
var inst_23581 = (state_23588[(2)]);
var inst_23564 = inst_23581;
var state_23588__$1 = (function (){var statearr_23598 = state_23588;
(statearr_23598[(7)] = inst_23564);

return statearr_23598;
})();
var statearr_23599_23617 = state_23588__$1;
(statearr_23599_23617[(2)] = null);

(statearr_23599_23617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (9))){
var inst_23576 = cljs.core.pr.call(null,uxbox.pubsub.new_state);
var inst_23577 = console.error("The",key,"handler didn't return a new version of the state but",inst_23576);
var state_23588__$1 = state_23588;
var statearr_23600_23618 = state_23588__$1;
(statearr_23600_23618[(2)] = inst_23577);

(statearr_23600_23618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (5))){
var inst_23568 = cljs.core.async.close_BANG_.call(null,ch);
var state_23588__$1 = state_23588;
var statearr_23601_23619 = state_23588__$1;
(statearr_23601_23619[(2)] = inst_23568);

(statearr_23601_23619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23589 === (10))){
var inst_23579 = (state_23588[(2)]);
var state_23588__$1 = (function (){var statearr_23602 = state_23588;
(statearr_23602[(9)] = inst_23579);

return statearr_23602;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23588__$1,(11),ch);
} else {
if((state_val_23589 === (8))){
var inst_23572 = (state_23588[(8)]);
var inst_23574 = cljs.core.reset_BANG_.call(null,uxbox.db.app_state,inst_23572);
var state_23588__$1 = state_23588;
var statearr_23603_23620 = state_23588__$1;
(statearr_23603_23620[(2)] = inst_23574);

(statearr_23603_23620[(1)] = (10));


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
});})(c__21372__auto__,ch))
;
return ((function (switch__21310__auto__,c__21372__auto__,ch){
return (function() {
var uxbox$pubsub$register_transition_$_state_machine__21311__auto__ = null;
var uxbox$pubsub$register_transition_$_state_machine__21311__auto____0 = (function (){
var statearr_23607 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23607[(0)] = uxbox$pubsub$register_transition_$_state_machine__21311__auto__);

(statearr_23607[(1)] = (1));

return statearr_23607;
});
var uxbox$pubsub$register_transition_$_state_machine__21311__auto____1 = (function (state_23588){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_23588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e23608){if((e23608 instanceof Object)){
var ex__21314__auto__ = e23608;
var statearr_23609_23621 = state_23588;
(statearr_23609_23621[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23622 = state_23588;
state_23588 = G__23622;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
uxbox$pubsub$register_transition_$_state_machine__21311__auto__ = function(state_23588){
switch(arguments.length){
case 0:
return uxbox$pubsub$register_transition_$_state_machine__21311__auto____0.call(this);
case 1:
return uxbox$pubsub$register_transition_$_state_machine__21311__auto____1.call(this,state_23588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
uxbox$pubsub$register_transition_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = uxbox$pubsub$register_transition_$_state_machine__21311__auto____0;
uxbox$pubsub$register_transition_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = uxbox$pubsub$register_transition_$_state_machine__21311__auto____1;
return uxbox$pubsub$register_transition_$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto__,ch))
})();
var state__21374__auto__ = (function (){var statearr_23610 = f__21373__auto__.call(null);
(statearr_23610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto__);

return statearr_23610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto__,ch))
);

return c__21372__auto__;
});
uxbox.pubsub.register_effect = (function uxbox$pubsub$register_effect(key,cb){
var ch = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,cljs.core.deref.call(null,uxbox.pubsub.publication),key,ch);

var c__21372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto__,ch){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto__,ch){
return (function (state_23679){
var state_val_23680 = (state_23679[(1)]);
if((state_val_23680 === (1))){
var state_23679__$1 = state_23679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23679__$1,(2),ch);
} else {
if((state_val_23680 === (2))){
var inst_23661 = (state_23679[(2)]);
var inst_23662 = inst_23661;
var state_23679__$1 = (function (){var statearr_23681 = state_23679;
(statearr_23681[(7)] = inst_23662);

return statearr_23681;
})();
var statearr_23682_23697 = state_23679__$1;
(statearr_23682_23697[(2)] = null);

(statearr_23682_23697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23680 === (3))){
var inst_23662 = (state_23679[(7)]);
var inst_23664 = (inst_23662 == null);
var state_23679__$1 = state_23679;
if(cljs.core.truth_(inst_23664)){
var statearr_23683_23698 = state_23679__$1;
(statearr_23683_23698[(1)] = (5));

} else {
var statearr_23684_23699 = state_23679__$1;
(statearr_23684_23699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23680 === (4))){
var inst_23677 = (state_23679[(2)]);
var state_23679__$1 = state_23679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23679__$1,inst_23677);
} else {
if((state_val_23680 === (5))){
var inst_23666 = cljs.core.async.close_BANG_.call(null,ch);
var state_23679__$1 = state_23679;
var statearr_23685_23700 = state_23679__$1;
(statearr_23685_23700[(2)] = inst_23666);

(statearr_23685_23700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23680 === (6))){
var inst_23662 = (state_23679[(7)]);
var inst_23668 = cljs.core.deref.call(null,uxbox.db.app_state);
var inst_23669 = cljs.core.second.call(null,inst_23662);
var inst_23670 = cb.call(null,inst_23668,inst_23669);
var state_23679__$1 = (function (){var statearr_23686 = state_23679;
(statearr_23686[(8)] = inst_23670);

return statearr_23686;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23679__$1,(8),ch);
} else {
if((state_val_23680 === (7))){
var inst_23675 = (state_23679[(2)]);
var state_23679__$1 = state_23679;
var statearr_23687_23701 = state_23679__$1;
(statearr_23687_23701[(2)] = inst_23675);

(statearr_23687_23701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23680 === (8))){
var inst_23672 = (state_23679[(2)]);
var inst_23662 = inst_23672;
var state_23679__$1 = (function (){var statearr_23688 = state_23679;
(statearr_23688[(7)] = inst_23662);

return statearr_23688;
})();
var statearr_23689_23702 = state_23679__$1;
(statearr_23689_23702[(2)] = null);

(statearr_23689_23702[(1)] = (3));


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
});})(c__21372__auto__,ch))
;
return ((function (switch__21310__auto__,c__21372__auto__,ch){
return (function() {
var uxbox$pubsub$register_effect_$_state_machine__21311__auto__ = null;
var uxbox$pubsub$register_effect_$_state_machine__21311__auto____0 = (function (){
var statearr_23693 = [null,null,null,null,null,null,null,null,null];
(statearr_23693[(0)] = uxbox$pubsub$register_effect_$_state_machine__21311__auto__);

(statearr_23693[(1)] = (1));

return statearr_23693;
});
var uxbox$pubsub$register_effect_$_state_machine__21311__auto____1 = (function (state_23679){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_23679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e23694){if((e23694 instanceof Object)){
var ex__21314__auto__ = e23694;
var statearr_23695_23703 = state_23679;
(statearr_23695_23703[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23704 = state_23679;
state_23679 = G__23704;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
uxbox$pubsub$register_effect_$_state_machine__21311__auto__ = function(state_23679){
switch(arguments.length){
case 0:
return uxbox$pubsub$register_effect_$_state_machine__21311__auto____0.call(this);
case 1:
return uxbox$pubsub$register_effect_$_state_machine__21311__auto____1.call(this,state_23679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
uxbox$pubsub$register_effect_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = uxbox$pubsub$register_effect_$_state_machine__21311__auto____0;
uxbox$pubsub$register_effect_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = uxbox$pubsub$register_effect_$_state_machine__21311__auto____1;
return uxbox$pubsub$register_effect_$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto__,ch))
})();
var state__21374__auto__ = (function (){var statearr_23696 = f__21373__auto__.call(null);
(statearr_23696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto__);

return statearr_23696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto__,ch))
);

return c__21372__auto__;
});
uxbox.pubsub.register_event = (function uxbox$pubsub$register_event(key,cb){
var ch = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,cljs.core.deref.call(null,uxbox.pubsub.publication),key,ch);

var c__21372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21372__auto__,ch){
return (function (){
var f__21373__auto__ = (function (){var switch__21310__auto__ = ((function (c__21372__auto__,ch){
return (function (state_23761){
var state_val_23762 = (state_23761[(1)]);
if((state_val_23762 === (1))){
var state_23761__$1 = state_23761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23761__$1,(2),ch);
} else {
if((state_val_23762 === (2))){
var inst_23743 = (state_23761[(2)]);
var inst_23744 = inst_23743;
var state_23761__$1 = (function (){var statearr_23763 = state_23761;
(statearr_23763[(7)] = inst_23744);

return statearr_23763;
})();
var statearr_23764_23779 = state_23761__$1;
(statearr_23764_23779[(2)] = null);

(statearr_23764_23779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23762 === (3))){
var inst_23744 = (state_23761[(7)]);
var inst_23746 = (inst_23744 == null);
var state_23761__$1 = state_23761;
if(cljs.core.truth_(inst_23746)){
var statearr_23765_23780 = state_23761__$1;
(statearr_23765_23780[(1)] = (5));

} else {
var statearr_23766_23781 = state_23761__$1;
(statearr_23766_23781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23762 === (4))){
var inst_23759 = (state_23761[(2)]);
var state_23761__$1 = state_23761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23761__$1,inst_23759);
} else {
if((state_val_23762 === (5))){
var inst_23748 = cljs.core.async.close_BANG_.call(null,ch);
var state_23761__$1 = state_23761;
var statearr_23767_23782 = state_23761__$1;
(statearr_23767_23782[(2)] = inst_23748);

(statearr_23767_23782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23762 === (6))){
var inst_23744 = (state_23761[(7)]);
var inst_23750 = cljs.core.deref.call(null,uxbox.db.app_state);
var inst_23751 = cljs.core.second.call(null,inst_23744);
var inst_23752 = cb.call(null,inst_23750,inst_23751);
var state_23761__$1 = (function (){var statearr_23768 = state_23761;
(statearr_23768[(8)] = inst_23752);

return statearr_23768;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23761__$1,(8),ch);
} else {
if((state_val_23762 === (7))){
var inst_23757 = (state_23761[(2)]);
var state_23761__$1 = state_23761;
var statearr_23769_23783 = state_23761__$1;
(statearr_23769_23783[(2)] = inst_23757);

(statearr_23769_23783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23762 === (8))){
var inst_23754 = (state_23761[(2)]);
var inst_23744 = inst_23754;
var state_23761__$1 = (function (){var statearr_23770 = state_23761;
(statearr_23770[(7)] = inst_23744);

return statearr_23770;
})();
var statearr_23771_23784 = state_23761__$1;
(statearr_23771_23784[(2)] = null);

(statearr_23771_23784[(1)] = (3));


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
});})(c__21372__auto__,ch))
;
return ((function (switch__21310__auto__,c__21372__auto__,ch){
return (function() {
var uxbox$pubsub$register_event_$_state_machine__21311__auto__ = null;
var uxbox$pubsub$register_event_$_state_machine__21311__auto____0 = (function (){
var statearr_23775 = [null,null,null,null,null,null,null,null,null];
(statearr_23775[(0)] = uxbox$pubsub$register_event_$_state_machine__21311__auto__);

(statearr_23775[(1)] = (1));

return statearr_23775;
});
var uxbox$pubsub$register_event_$_state_machine__21311__auto____1 = (function (state_23761){
while(true){
var ret_value__21312__auto__ = (function (){try{while(true){
var result__21313__auto__ = switch__21310__auto__.call(null,state_23761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21313__auto__;
}
break;
}
}catch (e23776){if((e23776 instanceof Object)){
var ex__21314__auto__ = e23776;
var statearr_23777_23785 = state_23761;
(statearr_23777_23785[(5)] = ex__21314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23786 = state_23761;
state_23761 = G__23786;
continue;
} else {
return ret_value__21312__auto__;
}
break;
}
});
uxbox$pubsub$register_event_$_state_machine__21311__auto__ = function(state_23761){
switch(arguments.length){
case 0:
return uxbox$pubsub$register_event_$_state_machine__21311__auto____0.call(this);
case 1:
return uxbox$pubsub$register_event_$_state_machine__21311__auto____1.call(this,state_23761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
uxbox$pubsub$register_event_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$0 = uxbox$pubsub$register_event_$_state_machine__21311__auto____0;
uxbox$pubsub$register_event_$_state_machine__21311__auto__.cljs$core$IFn$_invoke$arity$1 = uxbox$pubsub$register_event_$_state_machine__21311__auto____1;
return uxbox$pubsub$register_event_$_state_machine__21311__auto__;
})()
;})(switch__21310__auto__,c__21372__auto__,ch))
})();
var state__21374__auto__ = (function (){var statearr_23778 = f__21373__auto__.call(null);
(statearr_23778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21372__auto__);

return statearr_23778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21374__auto__);
});})(c__21372__auto__,ch))
);

return c__21372__auto__;
});

//# sourceMappingURL=pubsub.js.map?rel=1437028480511