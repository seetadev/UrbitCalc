(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,n){},148:function(e,t){},150:function(e,t){},166:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(3),r=(n(97),n(122),n(124),n(0)),l=n.n(r),i=n(84),u=n.n(i),s=(n(131),n(27)),m=n(14);n(132);function d(){return l.a.createElement("footer",{className:"info"},l.a.createElement("p",null,"Double-click to edit a todo"),l.a.createElement("p",null,"Created by ",l.a.createElement("a",{href:"http://github.com/jacob-ebey/"},"jacob-ebey")),l.a.createElement("p",null,"Part of ",l.a.createElement("a",{href:"http://todomvc.com"},"TodoMVC")))}var f=n(11),p=n(85),v=n.n(p);function b(e,t){return Object(r.useCallback)(function(t){"Enter"===t.key&&(t.preventDefault(),e(t))},t)}var h=n(9),g=n(92),k=n(88);function E(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return"".concat(e()).concat(e(),"-").concat(e(),"-").concat(e(),"-").concat(e(),"-").concat(e()).concat(e()).concat(e())}var j=function(e){return{done:!1,id:E(),label:(e||"").trim()}},O={deleteTodo:function(e,t){return e.filter(function(e){return e.id!==t})},addTodo:function(e,t){return[j(t)].concat(Object(g.a)(e))},setDone:function(e,t,n){return e.map(function(e){return e.id===t?Object(h.a)({},e,{done:n}):e})},setLabel:function(e,t,n){return e.map(function(e){return e.id===t?Object(h.a)({},e,{label:n}):e})},toggleDone:function(e,t){return e.map(function(e){return e.id===t?Object(h.a)({},e,{done:!e.done}):e})}},w=(Object(k.a)(JSON.parse(localStorage.getItem("todos")||"[]"),O,function(e){return localStorage.setItem("todos",JSON.stringify(e))}),n(93));function y(e){var t=Object(r.useState)(e.todo.label),n=Object(f.a)(t,2),a=n[0],o=n[1],c=Object(r.useState)(e.todo.id),i=Object(f.a)(c,2),u=i[0],s=(i[1],Object(r.useState)(!1)),m=Object(f.a)(s,2),d=m[0],p=m[1],v=e.api,h=Object(r.useCallback)(function(){return e=u,void v.poke({app:"tudumvc",mark:"tudumvc-action",json:{"remove-task":parseInt(e)}});var e},[u]),g=Object(r.useCallback)(function(){return e=u,void v.poke({app:"tudumvc",mark:"tudumvc-action",json:{"mark-complete":parseInt(e)}});var e},[u]),k=function(e,t){var n,a=[];return function(o){for(var c=arguments.length,r=new Array(c>1?c-1:0),l=1;l<c;l++)r[l-1]=arguments[l];a.push((new Date).getTime()),clearTimeout(n),n=setTimeout(function(){a.length>1&&a[a.length-1]-a[a.length-2]<250?t&&t.apply(void 0,[o].concat(r)):e&&e.apply(void 0,[o].concat(r)),a=[]},250)}}(null,function(){return p(!0)}),E=Object(r.useCallback)(function(){console.log("setting urbit state to ".concat(a," for task ").concat(u)),v.poke({app:"tudumvc",mark:"tudumvc-action",json:{"edit-task":{id:parseInt(u),label:a}}}),p(!1)},[a]),j=b(E,[a]),O=Object(r.useRef)();return Object(w.a)(O,E),l.a.createElement("li",{onClick:k,className:"".concat(d?"editing":""," ").concat(e.todo.done?"completed":"")},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",checked:e.todo.done,onChange:g,autoFocus:!0}),l.a.createElement("label",null,a),l.a.createElement("button",{className:"destroy",onClick:h})),d&&l.a.createElement("input",{ref:O,className:"edit",value:a,id:u,onChange:function(e){o(e.target.value)},onKeyPress:j}))}function C(e){var t=v()(),n=Object(r.useState)([]),a=Object(f.a)(n,2),o=a[0],c=a[1],i=e.api;Object(r.useEffect)(function(){i.subscribe({app:"tudumvc",path:"/mytasks",event:function(e){c(e)}},[o,c])},[]);var u=Object(r.useMemo)(function(){return o.reduce(function(e,t){return e+(t.done?0:1)},0)},[o]),d=Object(r.useMemo)(function(){return t.match.params.filter?o.filter(function(e){return"active"===t.match.params.filter?!e.done:e.done}):o},[o,t.match.params.filter]),p=Object(r.useMemo)(function(){return o.some(function(e){return e.done})},[o]),h=Object(r.useMemo)(function(){return d.every(function(e){return e.done})},[d]),g=Object(r.useCallback)(function(){d.forEach(function(e){return t=e.id,void i.poke({app:"tudumvc",mark:"tudumvc-action",json:{"mark-complete":t}});var t})},[d,h]),k=Object(r.useCallback)(function(){o.forEach(function(e){var t;e.done&&(t=e.id,i.poke({app:"tudumvc",mark:"tudumvc-action",json:{"remove-task":t}}))})},[o]),E=function(e){var t=Object(r.useState)(e||""),n=Object(f.a)(t,2),a=n[0],o=n[1];return[a,Object(r.useCallback)(function(e){o(e.target.value)}),o]}(),j=Object(f.a)(E,3),O=j[0],w=j[1],C=j[2],N=b(function(){var e;O&&(e=O,i.poke({app:"tudumvc",mark:"tudumvc-action",json:{"add-task":e}}),C(""))},[O]),S=e.api;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onKeyPress:N,value:O,onChange:w})),l.a.createElement("section",{className:"main"},l.a.createElement("input",{id:"toggle-all",type:"checkbox",className:"toggle-all",checked:h,onChange:g}),l.a.createElement("label",{htmlFor:"toggle-all"}),l.a.createElement("ul",{className:"todo-list"},d&&d.map(function(e){return l.a.createElement(m.Route,{key:"todoItem-".concat(e.id),render:function(t){return console.log("todoItem-".concat(e.id)),l.a.createElement(y,Object.assign({todo:e,api:S},t))}})}))),l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},l.a.createElement("strong",null,u)," items left"),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement(s.b,{exact:!0,to:"/",activeClassName:"selected"},"All")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/active",activeClassName:"selected"},"Active")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/completed",activeClassName:"selected"},"Completed")),l.a.createElement("li",null,l.a.createElement("button",{className:"clear-completed",onClick:function(){i.poke({app:"tudumvc",mark:"tudumvc-action",json:{"add-task":"from Earth to Mars"}})}},"Test Button"))),p&&l.a.createElement("button",{className:"clear-completed",onClick:k},"Clear completed")))}function N(e){var t=e.api;return l.a.createElement(s.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"todoapp"},l.a.createElement(m.Route,{key:"my-route",path:"/:filter?",render:function(e){return l.a.createElement(C,Object.assign({api:t},e))}})),l.a.createElement(d,null)))}var S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var T=n(89),A=n(91),I=Object(A.memoize)(Object(c.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.default.authenticate({ship:"nus",url:"localhost:8080",code:"bortem-pinwyl-macnyx-topdeg",verbose:!0});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)}))),W=document.getElementById("root");Object(c.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,u.a.render(l.a.createElement(N,{api:t}),W);case 4:case"end":return e.stop()}},e,this)}))(),function(e){if("serviceWorker"in navigator){if(new URL("/hooks-todo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/hooks-todo","/service-worker.js");S?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):x(t,e)})}}()},94:function(e,t,n){e.exports=n(166)}},[[94,1,2]]]);
//# sourceMappingURL=main.ec95fdd9.chunk.js.map