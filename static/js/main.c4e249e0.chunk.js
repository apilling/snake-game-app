(this["webpackJsonpsnake-game-app"]=this["webpackJsonpsnake-game-app"]||[]).push([[0],[,,,,,,,,,function(A,g,e){},function(A,g,e){},function(A,g,e){},,function(A,g,e){"use strict";e.r(g);var I=e(0),B=e.n(I),E=e(4),D=e.n(E),s=(e(9),e(10),e(2)),i=e.p+"static/media/purple_square.dec83bbf.png",Q=(e(11),e(1));function t(){for(var A=[],g=0;g<44;g++){A.push([]);for(var e=0;e<72;e++)A[g].push("blank")}var B=function(){return{x:Math.floor(72*Math.random()),y:Math.floor(44*Math.random())}},E=Object(I.useState)(A),D=Object(s.a)(E,2),t=D[0],c=D[1],C=Object(I.useState)([{x:0,y:0}]),a=Object(s.a)(C,2),n=a[0],r=a[1],o=Object(I.useState)("right"),w=Object(s.a)(o,2),x=w[0],M=w[1],Y=Object(I.useState)(B),f=Object(s.a)(Y,2),u=f[0],N=f[1];document.addEventListener("keydown",(function(A){switch(A.keyCode){case 37:M("left");break;case 38:M("top");break;case 39:M("right");break;case 40:M("bottom")}}),!1);!function(A,g){var e=Object(I.useRef)(A);Object(I.useEffect)((function(){e.current=A}),[A]),Object(I.useEffect)((function(){if(null!==g){var A=setInterval((function(){e.current()}),g);return function(){return clearInterval(A)}}}),[g])}((function(){var A=[];switch(x){case"right":A.push({x:n[0].x,y:(n[0].y+1)%72});break;case"left":A.push({x:n[0].x,y:(n[0].y-1+72)%72});break;case"top":A.push({x:(n[0].x-1+44)%44,y:n[0].y});break;case"bottom":A.push({x:(n[0].x+1)%44,y:n[0].y})}n.forEach((function(g){A.push(g)})),n[0].x===u.x&&n[0].y===u.y?N(B):A.pop(),r(A),function(){var A=t;n.forEach((function(g){A[g.x][g.y]="snake"})),A[u.x][u.y]="food",c(A)}()}),100);var v=t.map((function(A){return Object(Q.jsx)("div",{className:"divClass",children:A.map((function(A){switch(A){case"blank":return Object(Q.jsx)("img",{className:"orange_square",src:"data:image/png;base64,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"});case"snake":return Object(Q.jsx)("img",{className:"snake_square",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEUAAP+goP+jo/+rq/+0tP+/v//Ly/+lpf+8vP/f3/+amv+cnP/+/v/z8//l5f/Z2f/R0f+oqP+urv9Ve3flAAABcklEQVR4nO3dSU7EMABFQbu7A8083P+wsGADGxBSFFXyyhf4b2nJksfj0/PL683NsizXy6fzl9vTN/P/Tr96O//B++Uvlp+ud+My9u1+94WzQt4c560nrKxCX4W+Cn0V+ir0HaHwbesJK5vjtPWElVXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvTNz7NvFfoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6DtC4f5fDFWoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6HvCIW3W09Y2RH+malQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehb47L1hNWVqGvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0LfHNetJ6xsjmXrCSur0Fehr0Jfhb4KfRX6KvQdoXDvN+CHcXc/9+zh9QOk/QcjLGq6tAAAAABJRU5ErkJggg=="});case"food":return Object(Q.jsx)("img",{className:"food_square",src:i})}}))})}));return Object(Q.jsx)("div",{className:"whole_board",children:v})}var c=function(){return Object(Q.jsx)("div",{className:"App",children:Object(Q.jsx)(t,{})})},C=function(A){A&&A instanceof Function&&e.e(3).then(e.bind(null,14)).then((function(g){var e=g.getCLS,I=g.getFID,B=g.getFCP,E=g.getLCP,D=g.getTTFB;e(A),I(A),B(A),E(A),D(A)}))};D.a.render(Object(Q.jsx)(B.a.StrictMode,{children:Object(Q.jsx)(c,{})}),document.getElementById("root")),C()}],[[13,1,2]]]);
//# sourceMappingURL=main.c4e249e0.chunk.js.map