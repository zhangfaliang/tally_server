(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{bqjr:function(e,t,a){"use strict";a.r(t);var n=a("d6i3"),c=a.n(n),r=a("Qyje"),s=a("GIZZ"),o=a.n(s),u=a("3eXy"),p=a("7Qib"),i=a("3Unq"),d=u["a"].queryDashboard,h=u["a"].queryWeather;t["default"]=o()(i["a"],{namespace:"dashboard",state:{weather:{city:"\u6df1\u5733",temperature:"30",name:"\u6674",icon:"//s5.sencdn.com/web/icons/3d_50/2.png"},sales:[],quote:{avatar:"http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236"},numbers:[],recentSales:[],comments:[],completed:[],browser:[],cpu:{},user:{avatar:"http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236"}},subscriptions:{setup:function(e){var t=e.dispatch,a=e.history;a.listen(function(e){var a=e.pathname;(Object(p["g"])("/dashboard",a)||Object(p["g"])("/",a))&&(t({type:"query"}),t({type:"queryWeather"}))})}},effects:{query:c.a.mark(function e(t,a){var n,s,o,u;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=a.call,o=a.put,e.next=4,s(d,Object(r["parse"])(n));case 4:return u=e.sent,e.next=7,o({type:"updateState",payload:u});case 7:case"end":return e.stop()}},e)}),queryWeather:c.a.mark(function e(t,a){var n,r,s,o,u,p,i,d;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=void 0===n?{}:n,s=a.call,o=a.put,r.location="shenzhen",e.next=5,s(h,r);case 5:if(u=e.sent,p=u.success,!p){e.next=12;break}return i=u.results[0],d={city:i.location.name,temperature:i.now.temperature,name:i.now.text,icon:"//s5.sencdn.com/web/icons/3d_50/".concat(i.now.code,".png")},e.next=12,o({type:"updateState",payload:{weather:d}});case 12:case"end":return e.stop()}},e)})}})}}]);