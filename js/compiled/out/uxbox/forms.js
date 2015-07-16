// Compiled by ClojureScript 0.0-3308 {}
goog.provide('uxbox.forms');
goog.require('cljs.core');
goog.require('uxbox.projects.actions');
goog.require('uxbox.icons');
goog.require('uxbox.pubsub');
goog.require('goog.events');
goog.require('cuerdas.core');
goog.require('goog.events.EventType');
uxbox.forms.close_lightbox = (function uxbox$forms$close_lightbox(){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-lightbox","close-lightbox",-1471638317)], null));
});
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"close-lightbox","close-lightbox",-1471638317),(function (state,_){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"lightbox","lightbox",-2136031065),null);
}));
uxbox.forms.toggle_layout = (function uxbox$forms$toggle_layout(){
return uxbox.pubsub.publish_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-layout","toggle-layout",-241410907)], null));
});
uxbox.pubsub.register_transition.call(null,new cljs.core.Keyword(null,"toggle-layout","toggle-layout",-241410907),(function (state,_){
var old_width = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"width","width",-384071477)], null));
var old_height = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"height","height",1025178622)], null));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"width","width",-384071477)], null),old_height),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"height","height",1025178622)], null),old_width);
}));
uxbox.forms.update_project_layout = (function uxbox$forms$update_project_layout(state,layout){
var width = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project-layouts","project-layouts",-1130960807),layout,new cljs.core.Keyword(null,"width","width",-384071477)], null));
var height = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project-layouts","project-layouts",-1130960807),layout,new cljs.core.Keyword(null,"height","height",1025178622)], null));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"width","width",-384071477)], null),width),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"height","height",1025178622)], null),height),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),layout);
});
uxbox.forms.generate_layout_input = (function uxbox$forms$generate_layout_input(db,layout){
var human_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project-layouts","project-layouts",-1130960807),layout,new cljs.core.Keyword(null,"name","name",1843675177)], null));
var name = [cljs.core.str(layout)].join('');
var id = [cljs.core.str("project-"),cljs.core.str(name)].join('');
var tag = [cljs.core.str("input#"),cljs.core.str(id)].join('');
var tag__$1 = cljs.core.keyword.call(null,tag);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"project-layout",new cljs.core.Keyword(null,"value","value",305978217),name,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,layout,cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (human_name,name,id,tag,tag__$1){
return (function (){
return cljs.core.swap_BANG_.call(null,db,uxbox.forms.update_project_layout,layout);
});})(human_name,name,id,tag,tag__$1))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),name,new cljs.core.Keyword(null,"for","for",-1323786319),id], null),human_name], null)], null);
});
uxbox.forms.lightbox_STAR_ = (function uxbox$forms$lightbox_STAR_(db){
var tag = (cljs.core.truth_(new cljs.core.Keyword(null,"lightbox","lightbox",-2136031065).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)))?new cljs.core.Keyword(null,"div.lightbox","div.lightbox",-938935039):new cljs.core.Keyword(null,"div.lightbox.hide","div.lightbox.hide",1660403288));
var project_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var project_width = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"width","width",-384071477)], null));
var project_height = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"height","height",1025178622)], null));
var project_layout = cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null));
var layouts = cljs.core.keys.call(null,new cljs.core.Keyword(null,"project-layouts","project-layouts",-1130960807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lightbox-body","div.lightbox-body",-367601789),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"New project"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#project-name.input-text","input#project-name.input-text",-1876524077),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"New project name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),project_name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (tag,project_name,project_width,project_height,project_layout,layouts){
return (function (p1__21229_SHARP_){
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"name","name",1843675177)], null),p1__21229_SHARP_.target.value);
});})(tag,project_name,project_width,project_height,project_layout,layouts))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.project-size","div.project-size",-946751638),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#project-witdh.input-text","input#project-witdh.input-text",-1078600410),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Width",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(666666),new cljs.core.Keyword(null,"value","value",305978217),project_width,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (tag,project_name,project_width,project_height,project_layout,layouts){
return (function (p1__21230_SHARP_){
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"width","width",-384071477)], null),p1__21230_SHARP_.target.value);
});})(tag,project_name,project_width,project_height,project_layout,layouts))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.toggle-layout","a.toggle-layout",-1568301496),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tag,project_name,project_width,project_height,project_layout,layouts){
return (function (){
return uxbox.forms.toggle_layout.call(null);
});})(tag,project_name,project_width,project_height,project_layout,layouts))
], null),uxbox.icons.toggle], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#project-height.input-text","input#project-height.input-text",-1578587440),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Height",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(666666),new cljs.core.Keyword(null,"value","value",305978217),project_height,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (tag,project_name,project_width,project_height,project_layout,layouts){
return (function (p1__21231_SHARP_){
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"height","height",1025178622)], null),p1__21231_SHARP_.target.value);
});})(tag,project_name,project_width,project_height,project_layout,layouts))
], null)], null)], null),cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"div.input-radio.radio-primary","div.input-radio.radio-primary",1099666711),cljs.core.mapcat.call(null,((function (tag,project_name,project_width,project_height,project_layout,layouts){
return (function (p1__21232_SHARP_){
return uxbox.forms.generate_layout_input.call(null,db,p1__21232_SHARP_);
});})(tag,project_name,project_width,project_height,project_layout,layouts))
,layouts))),((!(cljs.core.empty_QMARK_.call(null,cuerdas.core.trim.call(null,project_name))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#project-btn.btn-primary","input#project-btn.btn-primary",-1888976352),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"Go go go!",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tag,project_name,project_width,project_height,project_layout,layouts){
return (function (){
var new_project_attributes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),cuerdas.core.trim.call(null,project_name),new cljs.core.Keyword(null,"width","width",-384071477),(project_width | (0)),new cljs.core.Keyword(null,"height","height",1025178622),(project_height | (0)),new cljs.core.Keyword(null,"layout","layout",-2120940921),project_layout], null);
uxbox.projects.actions.create_project.call(null,new_project_attributes);

return uxbox.forms.close_lightbox.call(null);
});})(tag,project_name,project_width,project_height,project_layout,layouts))
], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.close","a.close",-573589906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tag,project_name,project_width,project_height,project_layout,layouts){
return (function (){
return uxbox.forms.close_lightbox.call(null);
});})(tag,project_name,project_width,project_height,project_layout,layouts))
], null),uxbox.icons.close], null)], null)], null);
});
uxbox.forms.dismiss_lightbox = (function uxbox$forms$dismiss_lightbox(e){
if(cljs.core._EQ_.call(null,e.keyCode,(27))){
return uxbox.forms.close_lightbox.call(null);
} else {
return null;
}
});
uxbox.forms.lightbox = cljs.core.with_meta.call(null,uxbox.forms.lightbox_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return goog.events.listen(document,goog.events.EventType.KEYUP,uxbox.forms.dismiss_lightbox);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return goog.events.unlisten(document,goog.events.EventType.KEYUP,uxbox.forms.dismiss_lightbox);
})], null));

//# sourceMappingURL=forms.js.map?rel=1437048688137