(window.webpackJsonptesting=window.webpackJsonptesting||[]).push([[0],{17:function(t,e,a){t.exports=a(29)},22:function(t,e,a){},23:function(t,e,a){},29:function(t,e,a){"use strict";a.r(e);var n=a(0),u=a.n(n),l=a(5),r=a.n(l),s=(a(22),a(11)),i=a(12),c=a(15),o=a(13),V=a(16),p=(a(23),a(3)),m=a(2),S={startValue:1,maxValue:2,newStartValue:0,startInputSwitch:!1,maxInputSwitch:!1,setSwitch:!1,upSwitch:!0,resetSwitch:!1,isCounter:!1,invalidDisplayValues:!1},w=function(t){return{type:"SET_START_VALUE",startValue:t}},h=function(t){return{type:"SET_MAX_VALUE",maxValue:t}},E=Object(p.b)((function(t){return{maxInputSwitch:t.maxInputSwitch,startInputSwitch:t.startInputSwitch,startValue:t.startValue,maxValue:t.maxValue}}),(function(t){return{setStartValue:function(e){t(w(e))},setMaxValue:function(e){t(h(e))}}}))((function(t){var e=t.maxInputSwitch?"maxError":"",a=t.startInputSwitch?"startError":"";return u.a.createElement("div",{className:"container"},u.a.createElement("span",{className:"button"},"max value:"),u.a.createElement("div",null,u.a.createElement("input",{type:"number",onChange:function(e){var a=+e.currentTarget.value;t.setMaxValue(a)},value:t.maxValue,className:e})),u.a.createElement("span",{className:"button"},"start value:"),u.a.createElement("div",null,u.a.createElement("input",{type:"number",onChange:function(e){var a=Number(e.currentTarget.value);t.setStartValue(a)},value:t.startValue,className:a})))})),d=Object(p.b)((function(t){return{invalidDisplayValues:t.invalidDisplayValues,startValue:t.startValue,maxValue:t.maxValue,setSwitch:t.setSwitch,newStartValue:t.newStartValue}}),null)((function(t){var e=t.invalidDisplayValues?"displayError":"";return u.a.createElement("div",{className:"text"},u.a.createElement("div",{className:e},t.startValue<=0||t.maxValue<=0||t.startValue>=t.maxValue||t.maxValue<=t.startValue?u.a.createElement("span",{className:"displayError"}," incorrect values "):t.setSwitch?u.a.createElement("span",null," ",t.newStartValue," "):u.a.createElement("span",null," set values please")))})),v=function(t){return u.a.createElement("button",{className:"button",disabled:t.switch,onClick:t.setData},t.title)},x=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,u=new Array(n),l=0;l<n;l++)u[l]=arguments[l];return(a=Object(c.a)(this,(t=Object(o.a)(e)).call.apply(t,[this].concat(u)))).setStartValue=function(t){a.props.setStartValue(t)},a.setMaxValue=function(t){a.props.setMaxValue(t)},a.setValue=function(){a.props.setValues()},a.addValue=function(){a.props.upValue()},a.deleteValue=function(){a.props.resetValues()},a}return Object(V.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){return this.state}},{key:"render",value:function(){return u.a.createElement("div",{className:"wrapper"},this.props.isCounter?u.a.createElement("div",{className:"display"},u.a.createElement(d,null),u.a.createElement("div",{className:"displayButton"},u.a.createElement(v,{setData:this.addValue,title:"UP",switch:this.props.upSwitch}),u.a.createElement(v,{setData:this.deleteValue,title:"RESET",switch:this.props.resetSwitch}))):u.a.createElement("div",{className:"menu"},u.a.createElement(E,null),u.a.createElement(v,{setData:this.setValue,title:"SET",switch:this.props.setSwitch})))}}]),e}(u.a.Component),f=Object(p.b)((function(t){return{startValue:t.startValue,maxValue:t.maxValue,isCounter:t.isCounter,setSwitch:t.setSwitch,resetSwitch:t.resetSwitch,upSwitch:t.upSwitch,invalidDisplayValues:t.invalidDisplayValues}}),(function(t){return{setStartValue:function(e){t(w(e))},setMaxValue:function(e){t(h(e))},setValues:function(){t({type:"SET_VALUES"})},upValue:function(){t({type:"UP_VALUE"})},resetValues:function(){t({type:"RESET_VALUES"})}}}))(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=a(6),y=Object(b.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_START_VALUE":return e.startValue<=0||t.maxValue<=0||e.startValue>=t.maxValue?Object(m.a)({},t,{startInputSwitch:!0,setSwitch:!0}):Object(m.a)({},t,{startValue:e.startValue,setSwitch:!1,startInputSwitch:!1,maxInputSwitch:!1,invalidDisplayValues:!1});case"SET_MAX_VALUE":return e.maxValue<=0||t.startValue<=0||e.maxValue<=t.startValue?Object(m.a)({},t,{maxInputSwitch:!0,setSwitch:!0}):Object(m.a)({},t,{maxValue:e.maxValue,setSwitch:!1,startInputSwitch:!1,maxInputSwitch:!1,invalidDisplayValues:!1});case"SET_VALUES":return Object(m.a)({},t,{newStartValue:t.startValue,isCounter:!0,upSwitch:!1,resetSwitch:!1,setSwitch:!0});case"UP_VALUE":return t.newStartValue+1>=t.maxValue?Object(m.a)({},t,{upSwitch:!0,invalidDisplayValues:!0,newStartValue:Number(t.newStartValue)+1}):Object(m.a)({},t,{invalidDisplayValues:!1,newStartValue:Number(t.newStartValue)+1,upSwitch:!1});case"RESET_VALUES":return Object(m.a)({},t,{startValue:1,maxValue:3,upSwitch:!0,startInputSwitch:!1,maxInputSwitch:!1,setSwitch:!1,newStartValue:t.startValue,invalidDisplayValues:!1,isCounter:!1});default:return t}}));r.a.render(u.a.createElement(p.a,{store:y},u.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.41bb6f5c.chunk.js.map