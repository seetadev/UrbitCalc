(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,n){},148:function(e,t){},150:function(e,t){},166:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(3),r=(n(97),n(122),n(124),n(0)),l=n.n(r),i=n(84),u=n.n(i),s=(n(131),n(27)),d=n(14);n(132);function m(){return l.a.createElement("footer",{className:"info"},l.a.createElement("p",null,"Double-click to edit a todo"),l.a.createElement("p",null,"Created by ",l.a.createElement("a",{href:"http://github.com/jacob-ebey/"},"jacob-ebey")),l.a.createElement("p",null,"Part of ",l.a.createElement("a",{href:"http://todomvc.com"},"TodoMVC")))}var p=n(5),f=n(85),b=n.n(f);function v(e){var t=Object(r.useState)(e||""),n=Object(p.a)(t,2),a=n[0],o=n[1];return[a,Object(r.useCallback)(function(e){o(e.target.value)}),o]}function h(e,t){return Object(r.useCallback)(function(t){"Enter"===t.key&&(t.preventDefault(),e(t))},t)}var g=n(10),k=n(92),E=n(88);function j(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return"".concat(e()).concat(e(),"-").concat(e(),"-").concat(e(),"-").concat(e(),"-").concat(e()).concat(e()).concat(e())}var O=function(e){return{done:!1,id:j(),label:(e||"").trim()}},w={deleteTodo:function(e,t){return e.filter(function(e){return e.id!==t})},addTodo:function(e,t){return[O(t)].concat(Object(k.a)(e))},setDone:function(e,t,n){return e.map(function(e){return e.id===t?Object(g.a)({},e,{done:n}):e})},setLabel:function(e,t,n){return e.map(function(e){return e.id===t?Object(g.a)({},e,{label:n}):e})},toggleDone:function(e,t){return e.map(function(e){return e.id===t?Object(g.a)({},e,{done:!e.done}):e})}},y=(Object(E.a)(JSON.parse(localStorage.getItem("todos")||"[]"),w,function(e){return localStorage.setItem("todos",JSON.stringify(e))}),n(93));function C(e){var t=Object(r.useState)(e.todo.label),n=Object(p.a)(t,2),a=n[0],o=n[1],c=Object(r.useState)(e.todo.id),i=Object(p.a)(c,2),u=i[0],s=(i[1],Object(r.useState)(!1)),d=Object(p.a)(s,2),m=d[0],f=d[1],b=e.api,v=Object(r.useCallback)(function(){return t=u,void b.poke({app:"tudumvc",mark:"tudumvc-frontend",json:{"remove-task":{ship:e.ship,id:parseInt(t)}}});var t},[u]),g=Object(r.useCallback)(function(){return t=u,void b.poke({app:"tudumvc",mark:"tudumvc-frontend",json:{"mark-complete":{ship:e.ship,id:parseInt(t)}}});var t},[u]),k=function(e,t){var n,a=[];return function(o){for(var c=arguments.length,r=new Array(c>1?c-1:0),l=1;l<c;l++)r[l-1]=arguments[l];a.push((new Date).getTime()),clearTimeout(n),n=setTimeout(function(){a.length>1&&a[a.length-1]-a[a.length-2]<250?t&&t.apply(void 0,[o].concat(r)):e&&e.apply(void 0,[o].concat(r)),a=[]},250)}}(null,function(){return f(!0)}),E=Object(r.useCallback)(function(){console.log("setting urbit state to ".concat(a," for task ").concat(u)),b.poke({app:"tudumvc",mark:"tudumvc-frontend",json:{"edit-task":{ship:e.ship,id:parseInt(u),label:a}}}),f(!1)},[a]),j=h(E,[a]),O=Object(r.useRef)();return Object(y.a)(O,E),l.a.createElement("li",{onClick:k,className:"".concat(m?"editing":""," ").concat(e.todo.done?"completed":"")},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",checked:e.todo.done,onChange:g,autoFocus:!0}),l.a.createElement("label",null,a),l.a.createElement("button",{className:"destroy",onClick:v})),m&&l.a.createElement("input",{ref:O,className:"edit",value:a,id:u,onChange:function(e){o(e.target.value)},onKeyPress:j}))}function N(e){var t=b()(),n=Object(r.useState)([]),a=Object(p.a)(n,2),o=a[0],c=a[1],i=Object(r.useState)([]),u=Object(p.a)(i,2),m=u[0],f=u[1],g=Object(r.useState)([]),k=Object(p.a)(g,2),E=k[0],j=k[1],O=Object(r.useState)([0]),w=Object(p.a)(O,2),y=w[0],N=w[1],S=e.api;Object(r.useEffect)(function(){S.subscribe({app:"tudumvc",path:"/mytasks",event:function(e){var t=[];f(e),Object.keys(e).map(function(n){return t.push([n,Object.keys(e[parseInt(n)])[0]]),!0}),j(t),c(e[document.getElementById("partner").selectedIndex][t[document.getElementById("partner").selectedIndex][1]])}},[m,E,o])},[]);var x=Object(r.useMemo)(function(){return o.reduce(function(e,t){return e+(t.done?0:1)},0)},[o]),I=Object(r.useMemo)(function(){return t.match.params.filter?o.filter(function(e){return"active"===t.match.params.filter?!e.done:e.done}):o},[o,t.match.params.filter]),T=Object(r.useMemo)(function(){return o.some(function(e){return e.done})},[o]),R=Object(r.useMemo)(function(){return I.every(function(e){return e.done})},[I]),A=Object(r.useCallback)(function(){I.forEach(function(e){return t=e.id,void S.poke({app:"tudumvc",mark:"tudumvc-action",json:{"mark-complete":{ship:E[y][1],id:parseInt(t)}}});var t})},[I,R]),W=Object(r.useCallback)(function(){o.forEach(function(e){var t;e.done&&(t=e.id,S.poke({app:"tudumvc",mark:"tudumvc-frontend",json:{"remove-task":{ship:E[y][1],id:parseInt(t)}}}))})},[o]),M=v(),P=Object(p.a)(M,3),D=P[0],L=P[1],B=P[2],F=h(function(){var e;D&&(console.log(D),e=D,S.poke({app:"tudumvc",mark:"tudumvc-frontend",json:{"add-task":{ship:E[y][1],label:e}}}),B(""))},[D]),J=v(),K=Object(p.a)(J,3),U=K[0],z=K[1],V=K[2],$=h(function(){var e;U&&(e=U,S.poke({app:"tudumvc",mark:"tudumvc-action",json:{sub:e}}),V(""))},[U]);var q=e.api;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"undefined"==typeof E[y]?"Loading...":"".concat(E[y][1],"'s todos")),l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onKeyPress:F,value:D,onChange:L})),l.a.createElement("section",{className:"main"},l.a.createElement("input",{id:"toggle-all",type:"checkbox",className:"toggle-all",checked:R,onChange:A}),l.a.createElement("label",{htmlFor:"toggle-all"}),l.a.createElement("ul",{className:"todo-list"},I&&I.map(function(e){return l.a.createElement(d.Route,{key:"todoItem-".concat(y,"-").concat(e.id),render:function(t){return l.a.createElement(C,Object.assign({todo:e,api:q,ship:E[y][1]},t))}})}))),l.a.createElement("section",null,l.a.createElement("span",{style:{paddingRight:"30px"}},l.a.createElement("span",{style:{paddingRight:"10px"}},"Select Todo List:"),l.a.createElement("select",{id:"partner",onChange:function(e){console.log(e.target.value),N(e.target.value);var t=E[e.target.value];c(m[t[0]][t[1]])}},E.map(function(e){return l.a.createElement("option",{key:parseInt(e[0]),value:e[0]},e[1])}))),l.a.createElement("span",null,l.a.createElement("span",{style:{paddingRight:"10px"}},"Subscribe to new partner:"),l.a.createElement("input",{id:"new-subscriber",type:"text",className:"new-Todo",onKeyPress:$,value:U,onChange:z}))),l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},l.a.createElement("strong",null,x)," items left"),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement(s.b,{exact:!0,to:"/",activeClassName:"selected"},"All")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/active",activeClassName:"selected"},"Active")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/completed",activeClassName:"selected"},"Completed"))),T&&l.a.createElement("button",{className:"clear-completed",onClick:W},"Clear completed")))}function S(e){var t=e.api;return l.a.createElement(s.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"todoapp"},l.a.createElement(d.Route,{key:"my-route",path:"/:filter?",render:function(e){return l.a.createElement(N,Object.assign({api:t},e))}})),l.a.createElement(m,null)))}var x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var T=n(89),R=n(91),A=Object(R.memoize)(Object(c.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.default.authenticate({ship:"nus",url:"138.197.192.56",code:"bortem-pinwyl-macnyx-topdeg",verbose:!0});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)}))),W=document.getElementById("root");Object(c.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,u.a.render(l.a.createElement(S,{api:t}),W);case 4:case"end":return e.stop()}},e,this)}))(),function(e){if("serviceWorker"in navigator){if(new URL("/~tudumvc",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/~tudumvc","/service-worker.js");x?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):I(t,e)})}}()},94:function(e,t,n){e.exports=n(166)}},[[94,1,2]]]);
//# sourceMappingURL=main.b07ed466.chunk.js.map