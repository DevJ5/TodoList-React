(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,o){t.exports=o(31)},18:function(t,e,o){},20:function(t,e,o){},31:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),l=o(10),r=o.n(l),c=(o(18),o(1)),i=o(2),s=o(4),d=o(3),u=o(5),m=(o(20),o(8)),h=o(12),f=o(7),p=o(11),b=o.n(p),v=function(t){function e(){var t,o;Object(c.a)(this,e);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(l)))).third=a.a.createRef(),o.state={text:""},o.handleChange=function(t){o.setState(Object(f.a)({},t.target.name,t.target.value))},o.handleSubmit=function(t){t.preventDefault(),console.log(o.refs.first,o.second,o.third.current);var e={id:b.a.generate(),text:o.state.text,completed:!1};o.props.onSubmit(e),o.setState({text:""})},o}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("form",{ref:this.third,onSubmit:this.handleSubmit},a.a.createElement("input",{ref:"first",type:"text",name:"text",value:this.state.text,onChange:this.handleChange,placeholder:"Todo..."}),a.a.createElement("button",{ref:function(e){return t.second=e}},"Add"))}}]),e}(n.Component);function g(t){var e=t.todo;return a.a.createElement("div",{className:"todo-item"},a.a.createElement("span",{style:{textDecoration:e.completed?"line-through":null},onClick:t.toggleComplete},e.text),a.a.createElement("button",{onClick:t.deleteTodo},"X"))}var T=function(t){function e(){var t,o;Object(c.a)(this,e);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(s.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[],todoToShow:"all"},o.addTodo=function(t){o.setState({todos:[t].concat(Object(h.a)(o.state.todos))})},o.toggleComplete=function(t){o.setState({todos:o.state.todos.map(function(e){return e.id===t?Object(m.a)({},e,{completed:!e.completed}):e})})},o.updateTodoToShow=function(t){o.setState({todoToShow:t.target.value})},o.deleteTodo=function(t){o.setState({todos:o.state.todos.filter(function(e){return e.id!==t})})},o.deleteCompletedTodos=function(){o.setState({todos:o.state.todos.filter(function(t){return!t.completed})})},o.toggleAll=function(){o.state.todos.every(function(t){return t.completed})?o.setState(function(t){return{todos:t.todos.map(function(t){return Object(m.a)({},t,{completed:!1})})}}):o.setState(function(t){return{todos:o.state.todos.map(function(t){return Object(m.a)({},t,{completed:!0})})}})},o}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this,e=!!this.state.todos.some(function(t){return t.completed}),o=[];return"all"===this.state.todoToShow?o=this.state.todos:"active"===this.state.todoToShow?o=this.state.todos.filter(function(t){return!t.completed}):"completed"===this.state.todoToShow&&(o=this.state.todos.filter(function(t){return t.completed})),a.a.createElement("div",{className:"todo-list"},o.map(function(e){return a.a.createElement(g,{key:e.id,todo:e,toggleComplete:function(){return t.toggleComplete(e.id)},deleteTodo:function(){return t.deleteTodo(e.id)}})}),a.a.createElement("div",{className:"todos-left"},"Todos left: ",this.state.todos.filter(function(t){return!t.completed}).length),a.a.createElement("div",{className:"filter-buttons"},a.a.createElement("button",{value:"all",onClick:this.updateTodoToShow},"All"),a.a.createElement("button",{value:"active",onClick:this.updateTodoToShow},"Active"),a.a.createElement("button",{value:"completed",onClick:this.updateTodoToShow},"Completed")),e&&a.a.createElement("div",{className:"delete-completed"},a.a.createElement("button",{onClick:this.deleteCompletedTodos},"Delete Completed")),a.a.createElement("div",{className:"toggle-all"},a.a.createElement("button",{onClick:this.toggleAll},"Toggle All")),a.a.createElement(v,{onSubmit:this.addTodo}))}}]),e}(n.Component),w=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(T,null))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.47000ec3.chunk.js.map