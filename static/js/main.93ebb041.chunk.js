(this["webpackJsonpsnake-game-app"]=this["webpackJsonpsnake-game-app"]||[]).push([[0],{25:function(A,e,g){},26:function(A,e,g){},28:function(A,e,g){},32:function(A,e,g){"use strict";g.r(e);var I=g(0),i=g.n(I),s=g(7),t=g.n(s),c=(g(25),g(3)),B=(g(26),g(27),g(35)),n=g(36),E=g(13),r=g.p+"static/media/purple_square.dec83bbf.png",D=(g(28),g(1)),a=0;function o(A){for(var e=A.showLoserModal,g=[],i=0;i<44;i++){g.push([]);for(var s=0;s<72;s++)g[i].push("blank")}var t=function(){return{x:Math.floor(44*Math.random()),y:Math.floor(72*Math.random())}},B=Object(I.useState)(g),n=Object(c.a)(B,2),o=n[0],Q=n[1],C=Object(I.useState)([{x:0,y:0}]),x=Object(c.a)(C,2),w=x[0],u=x[1],j=Object(I.useState)("right"),M=Object(c.a)(j,2),f=M[0],Y=M[1],b=Object(I.useState)(t),h=Object(c.a)(b,2),l=h[0],N=h[1];document.addEventListener("keydown",(function(A){switch(A.keyCode){case 37:Y("left");break;case 38:Y("top");break;case 39:Y("right");break;case 40:Y("bottom")}}),!1);!function(A,e){var g=Object(I.useRef)(A);Object(I.useEffect)((function(){g.current=A}),[A]),Object(I.useEffect)((function(){if(null!==e){var A=setInterval((function(){g.current()}),e);return function(){return clearInterval(A)}}}),[e])}((function(){var A=[];switch(f){case"right":A.push({x:w[0].x,y:(w[0].y+1)%72});break;case"left":A.push({x:w[0].x,y:(w[0].y-1+72)%72});break;case"top":A.push({x:(w[0].x-1+44)%44,y:w[0].y});break;case"bottom":A.push({x:(w[0].x+1)%44,y:w[0].y})}if(w.forEach((function(e){A.push(e)})),w.length>1)for(var I=1;I<w.length;I++)if(w[0].x===w[I].x&&w[0].y===w[I].y)return void e(!0);w[0].x===l.x&&w[0].y===l.y?(a+=50,N(t)):A.pop(),u(A),function(){var A=g.map((function(A){return Object(E.a)(A)}));w.forEach((function(e){A[e.x][e.y]="snake"})),A[l.x][l.y]="food",Q(A)}()}),100);var v=o.map((function(A){return Object(D.jsx)("div",{className:"divClass",children:A.map((function(A){switch(A){case"blank":return Object(D.jsx)("img",{className:"orange_square",src:"data:image/png;base64,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"});case"snake":return Object(D.jsx)("img",{className:"snake_square",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEUAAP+goP+jo/+rq/+0tP+/v//Ly/+lpf+8vP/f3/+amv+cnP/+/v/z8//l5f/Z2f/R0f+oqP+urv9Ve3flAAABcklEQVR4nO3dSU7EMABFQbu7A8083P+wsGADGxBSFFXyyhf4b2nJksfj0/PL683NsizXy6fzl9vTN/P/Tr96O//B++Uvlp+ud+My9u1+94WzQt4c560nrKxCX4W+Cn0V+ir0HaHwbesJK5vjtPWElVXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvTNz7NvFfoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6DtC4f5fDFWoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6HvCIW3W09Y2RH+malQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehb47L1hNWVqGvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0LfHNetJ6xsjmXrCSur0Fehr0Jfhb4KfRX6KvQdoXDvN+CHcXc/9+zh9QOk/QcjLGq6tAAAAABJRU5ErkJggg=="});case"food":return Object(D.jsx)("img",{className:"food_square",src:r})}}))})}));return Object(D.jsx)("div",{className:"whole_board",children:v})}function Q(A){var e=A.visible,g=A.setVisible;return Object(D.jsxs)(B.a,{show:e,onHide:function(){return g(!1)},children:[Object(D.jsx)(B.a.Header,{closeButton:!0,children:Object(D.jsx)(B.a.Title,{children:"You Lose!"})}),Object(D.jsx)(B.a.Body,{children:Object(D.jsxs)("p",{children:["Score: ",a]})}),Object(D.jsx)(B.a.Footer,{children:Object(D.jsx)(n.a,{variant:"primary",onClick:function(){return window.location.reload()},children:"Play Again"})})]})}var C=function(){var A=Object(I.useState)(!1),e=Object(c.a)(A,2),g=e[0],i=e[1];return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)("h1",{className:"title",children:Object(D.jsx)("strong",{children:"Snake"})}),Object(D.jsx)(o,{showLoserModal:i}),Object(D.jsx)(Q,{visible:g,setVisible:i})]})},x=function(A){A&&A instanceof Function&&g.e(3).then(g.bind(null,37)).then((function(e){var g=e.getCLS,I=e.getFID,i=e.getFCP,s=e.getLCP,t=e.getTTFB;g(A),I(A),i(A),s(A),t(A)}))};t.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(C,{})}),document.getElementById("root")),x()}},[[32,1,2]]]);
//# sourceMappingURL=main.93ebb041.chunk.js.map