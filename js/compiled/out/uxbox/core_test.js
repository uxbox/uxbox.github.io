// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('uxbox.core');
uxbox.core_test.a_passing_test = (function uxbox$core_test$a_passing_test(){
return cljs.test.test_var.call(null,uxbox$core_test$a_passing_test.cljs$lang$var);
});
uxbox.core_test.a_passing_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"That passes");

var ret__24497__auto__ = (function (){try{var values__24439__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(42)),(42));
var result__24440__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__24439__auto__);
if(cljs.core.truth_(result__24440__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(42),(42)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__24439__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(42),(42)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__24439__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__24440__auto__;
}catch (e24639){var t__24477__auto__ = e24639;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(42),(42)),new cljs.core.Keyword(null,"actual","actual",107306363),t__24477__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__24497__auto__;
});

uxbox.core_test.a_passing_test.cljs$lang$var = new cljs.core.Var(function(){return uxbox.core_test.a_passing_test;},new cljs.core.Symbol("uxbox.core-test","a-passing-test","uxbox.core-test/a-passing-test",1879760103,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"uxbox.core-test","uxbox.core-test",-196492696,null),new cljs.core.Symbol(null,"a-passing-test","a-passing-test",402118849,null),"test/uxbox/core_test.cljs",26,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(uxbox.core_test.a_passing_test)?uxbox.core_test.a_passing_test.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map?rel=1437028483029