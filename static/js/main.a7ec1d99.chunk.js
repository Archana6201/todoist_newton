(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(e,c,t){},14:function(e,c,t){},15:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t(6),n=t.n(a),u=t(2),A=t(0),b=function(e){var c=e.selectedTab,t=e.setselectedTab;return Object(A.jsxs)("div",{className:"sidebar",children:[Object(A.jsxs)("div",{className:"INBOX"===c?"active":"",onClick:function(){return t("INBOX")},children:[Object(A.jsx)("i",{class:"fas fa-inbox"}),"My Tasks"]}),Object(A.jsxs)("div",{className:"TODAY"===c?"active":"",onClick:function(){return t("TODAY")},children:[Object(A.jsx)("i",{class:"far fa-calendar"}),"Today"]}),Object(A.jsxs)("div",{className:"NEXT_7"===c?"active":"",onClick:function(){return t("NEXT_7")},children:[Object(A.jsx)("i",{class:"far fa-calendar-alt"})," Next 7 days"]})]})},d=t(7),r=function(e){var c=e.onCancel,t=e.onAddTask,a=Object(s.useState)(""),n=Object(u.a)(a,2),b=n[0],d=n[1];return Object(A.jsxs)("div",{className:"task-dialogue",children:[Object(A.jsx)("input",{value:b,onChange:function(e){return d(e.target.value)}}),Object(A.jsxs)("div",{className:"task-btn-action-container",children:[Object(A.jsxs)("div",{className:"btn-task-action",children:[Object(A.jsx)("button",{className:"Add-btn",onClick:function(){t(b),c(),d("")},children:"Add task"}),Object(A.jsx)("button",{className:"cancel-btn",onClick:function(){c(),d("")},children:"cancel"})]}),Object(A.jsx)("div",{className:"btn-calender"})]})]})},i=function(){var e=Object(s.useState)(!1),c=Object(u.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)([]),b=Object(u.a)(n,2),i=b[0],j=b[1];return Object(A.jsxs)("div",{className:"tasks",children:[Object(A.jsx)("h1",{children:"Inbox"}),Object(A.jsxs)("div",{className:"add-task-btn",onClick:function(){return a((function(e){return!e}))},children:[Object(A.jsx)("span",{className:"plus",children:"+"}),Object(A.jsx)("span",{className:"add-task-text",children:"Add task"})]}),t&&Object(A.jsx)(r,{onAddTask:function(e){j((function(c){return[].concat(Object(d.a)(c),[e])}))},onCancel:function(){return a(!1)}}),i.length>0?i.map((function(e){return Object(A.jsx)("p",{children:e})})):Object(A.jsx)("p",{children:"No Task added"})]})},j=function(){var e=Object(s.useState)("INBOX"),c=Object(u.a)(e,2),t=c[0],a=c[1];return Object(A.jsxs)("section",{className:"content",children:[Object(A.jsx)(b,{selectedTab:t,setselectedTab:a}),Object(A.jsx)(i,{})]})},w=function(){return Object(A.jsx)("header",{className:"header",children:Object(A.jsx)("nav",{children:Object(A.jsx)("div",{className:"nav-img",children:Object(A.jsx)("img",{className:"img",src:"data:image/png;base64,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",alt:"todoist"})})})})};t(13);var g=function(){return Object(A.jsxs)("header",{children:[Object(A.jsx)(w,{}),Object(A.jsx)(j,{})]})};t(14);n.a.render(Object(A.jsx)(g,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a7ec1d99.chunk.js.map