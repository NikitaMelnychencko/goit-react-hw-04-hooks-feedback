(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),a=n(7),s=n.n(a),o=n(10),r=n(1),d=n(3),j=n.n(d),l=n(4),b=n.n(l),u=n(0);Notification.propTypes={option:j.a.string.isRequired,onLeaveFeedback:j.a.func.isRequired};var O=function(e){var t=e.option,n=e.onLeaveFeedback;return Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:b.a.Button,onClick:function(){return n(t)},children:t})})},h=n(11);Notification.propTypes={options:j.a.array.isRequired,onLeaveFeedback:j.a.func.isRequired};var p=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(u.jsx)("ul",{className:b.a.FeedBackList,children:t.map((function(e){return Object(u.jsx)(O,{option:e,onLeaveFeedback:n},Object(h.a)())}))})},x=n(5),f=n.n(x),_=function(e){var t=e.children,n=e.title;return Object(u.jsx)("section",{className:f.a.Section,children:Object(u.jsxs)("div",{className:f.a.Container,children:[Object(u.jsx)("h2",{className:f.a.Title,children:n}),t]})})},k=n(8),v=n.n(k),g=function(e){var t=e.good,n=e.neutral,c=e.bad,i=e.total,a=e.positivePercentage;return Object(u.jsxs)("ul",{className:v.a.StatisticsList,children:[Object(u.jsx)("li",{children:Object(u.jsxs)("p",{children:["Good: ",Object(u.jsx)("span",{children:t})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("p",{children:["Neutral: ",Object(u.jsx)("span",{children:n})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("p",{children:["Bad: ",Object(u.jsx)("span",{children:c})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("p",{children:["Total: ",Object(u.jsx)("span",{children:i})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("p",{children:["Positive feedback: ",Object(u.jsxs)("span",{children:[a,"%"]})]})})]})},m=n(9),N=n.n(m),F=function(e){var t=e.message;return Object(u.jsx)("p",{className:N.a.Notification,children:t})},B=function(e,t){switch(t.type){case"increment good":return Object(r.a)(Object(r.a)({},e),{},{good:e.good+1});case"increment neutral":return Object(r.a)(Object(r.a)({},e),{},{neutral:e.neutral+1});case"increment bad":return Object(r.a)(Object(r.a)({},e),{},{bad:e.bad+1});default:throw new Error}},L=function(){var e,t=Object(c.useReducer)(B,{good:0,neutral:0,bad:0}),n=Object(o.a)(t,2),i=n[0],a=n[1],s=i.good+i.neutral+i.bad,r=(e=s,i.good/e*100);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(_,{title:"Please leave feedback",children:Object(u.jsx)(p,{options:["good","neutral","bad"],onLeaveFeedback:function(e){a({type:"increment ".concat(e)})}})}),Object(u.jsx)(_,{title:"Statistics",children:s?Object(u.jsx)(g,{good:i.good,neutral:i.neutral,bad:i.bad,total:s,positivePercentage:r}):Object(u.jsx)(F,{message:"There is no feedback"})})]})};n(19);s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={FeedBackList:"FeedBack_FeedBackList__1jbbd",Button:"FeedBack_Button__7P8Y3"}},5:function(e,t,n){e.exports={Section:"Section_Section__Qsme4",Container:"Section_Container__2_BnF",Title:"Section_Title__3BYwK"}},8:function(e,t,n){e.exports={StatisticsList:"Statistics_StatisticsList__P5DIq"}},9:function(e,t,n){e.exports={Notification:"Notification_Notification__3MEpD"}}},[[20,1,2]]]);
//# sourceMappingURL=main.61f62637.chunk.js.map