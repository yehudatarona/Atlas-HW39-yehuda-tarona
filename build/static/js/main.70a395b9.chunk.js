(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e,t,a){},26:function(e,t,a){e.exports=a(39)},31:function(e,t,a){},32:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c);a(31),a(32),a(14);var l=function(e){return r.a.createElement("header",{className:"container d-flex align-items-end  text-center justify-content-center"})},s=a(3),m=a(6);var u=function(e){var t=Object(n.useRef)(),a=Object(s.e)();return r.a.createElement("nav",{className:"container  text-white d-flex align-items-center justify-content-between backg"},r.a.createElement("div",{className:"row"},r.a.createElement(m.b,{to:"/country/USA",className:"text-decoration-none"},"USA"),r.a.createElement(m.b,{to:"/country/israel",className:"text-decoration-none"},"ISRAEL"),r.a.createElement(m.b,{to:"/country/UK",className:"text-decoration-none"},"UK"),r.a.createElement(m.b,{to:"/country/France",className:"text-decoration-none"},"FRANCE"),r.a.createElement(m.b,{to:"/country/Thailand",className:"text-decoration-none"},"THAILAND"),r.a.createElement(m.b,{to:"/country/Japan",className:"text-decoration-none"},"JAPAN"),r.a.createElement(m.b,{to:"/country/Brazil",className:"text-decoration-none"},"BRAZIL"),r.a.createElement(m.b,{to:"/country/Ethiopia",className:"text-decoration-none"},"ETHIOPA"),r.a.createElement(m.b,{to:"/country/China",className:"text-decoration-none"},"CHINA")),r.a.createElement("div",{className:"float-right"},r.a.createElement("div",{className:"row "},r.a.createElement("input",{ref:t,type:"text",placeholder:"Search...",className:"col-lg-8 form-control"}),r.a.createElement("button",{onClick:function(){""===t.current.value?alert("Please a Country name Courtry in the search field"):(a.push("/country/"+t.current.value),t.current.value="")},className:"btn btn-info h-25"},"Search"))))},i=a(19),p=a(12),d=a.n(p),E=a(18),h=function(){var e=Object(E.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=a(42),v=a(43),b=a(41);var g=function(e){var t=e.item;return r.a.createElement("div",{className:"mt-2 map col"},r.a.createElement(f.a,{center:[t.latlng[0],t.latlng[1]],zoom:4},r.a.createElement(v.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(b.a,{position:[t.latlng[0],t.latlng[1]]})))};var N=function(e){var t=e.item,a=t.borders,n=e.allState_arr.filter((function(e){return a.indexOf(e.alpha3Code)>-1}));return console.log("state",t),r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"float-left mr-2 pic",style:{backgroundImage:"url(".concat(t.flag,")")}}),r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,t.name),r.a.createElement("div",null,"populatio: ",t.population),r.a.createElement("div",null,"Region: ",t.region),r.a.createElement("div",null,"Lenguage: ",t.languages[0].iso639_2,", ",t.languages[0].name," "),r.a.createElement("div",null,"Coin: ",t.currencies[0].code,", ",t.currencies[0].name),r.a.createElement("div",null,"Capital: ",t.capital))),r.a.createElement("div",{className:"row mt-2 "},r.a.createElement(g,{item:t}),r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"States with borders"),r.a.createElement("div",{className:"row pl-3"},n.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(m.b,{className:"mr-1",to:"/code/"+e.alpha3Code},e.name))}))))))};var y=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),s=Object(i.a)(l,2),m=s[0],u=s[1],p=Object(n.useState)("Israel"),d=Object(i.a)(p,2),E=d[0];return d[1],Object(n.useEffect)((function(){var t="https://restcountries.eu/rest/v2/name/"+E+"?fullText=true";e.match&&(e.match.params.name&&(t="https://restcountries.eu/rest/v2/name/"+e.match.params.name+"?fullText=true"),e.match.params.countryCode&&(t="https://restcountries.eu/rest/v2/alpha/"+e.match.params.countryCode)),h(t).then((function(t){e.match.params.countryCode?o(t):o(t[0])})).catch((function(e){alert(e),console.log(e)}))}),[e.match]),Object(n.useEffect)((function(){h("https://restcountries.eu/rest/v2/all").then((function(e){u(e)}))}),[]),r.a.createElement("div",{className:"container mt-3"},c?r.a.createElement(N,{item:c,allState_arr:m}):"Result Not Found")};var x=function(e){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(l,null),r.a.createElement(u,null),r.a.createElement(s.a,{exact:!0,path:"/",component:y}),r.a.createElement(s.a,{exact:!0,path:"/country/",component:y}),r.a.createElement(s.a,{exact:!0,path:"/country/:name",component:y}),r.a.createElement(s.a,{exact:!0,path:"/code/:countryCode",component:y})))};var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.70a395b9.chunk.js.map