(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1257:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var s=n(5893),i=n(9586),r=n(9378),a=n(5022),o=n(2106),l=(n(7294),n(615)),c=n(809),d=n.n(c),u=n(2447),f=n(9669),x=n.n(f),h=n(8767),g=function(){var e=(0,h.useQuery)("cameraList",(0,u.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x().get("/api/camera/list");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))),{refetchInterval:2e3});return null===e||void 0===e?void 0:e.data},j=n(381),m=n.n(j),v=function(e){var t=e.id,n=e.lastRequest,i=(e.config,m()(n).local().format("YYYY-MM-DD HH:mm:ss"));return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{style:{background:"white",position:"absolute",color:"black",zIndex:999,padding:8,borderBottomRightRadius:8},children:i}),(0,s.jsx)("img",{src:"/api/camera/lastimage/"+t+"?lastRequest=".concat(n),alt:"Camera"})]})},p=(n(9207),function(){var e=g();return e?(0,s.jsx)(l.lr,{autoPlay:!0,showThumbs:!1,infiniteLoop:!0,children:e.map((function(e){return(0,s.jsxs)("div",{children:[(0,s.jsx)(v,{id:e.id,config:e.config,lastRequest:e.lastRequest}),(0,s.jsx)("p",{className:"legend",children:e.config.name})]},e.id+e.config.name)}))}):null}),b=n(9552),Z=n(7573),w=n(5675),y=n(3866),M=x().create({baseURL:"/api/door/"}),N=function(){var e,t=(0,h.useQuery)("doorStatus",(0,u.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.get("status");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))),{refetchInterval:3e3}),n=t.data,s=t.isLoading,i=(0,y.N)();return{state:null===n||void 0===n?void 0:n.state,isMoving:"stop"!==(null===n||void 0===n?void 0:n.status),nextAutomation:(null===n||void 0===n||null===(e=n.nextAutomation)||void 0===e?void 0:e[0])||{},isLoading:s,open:function(){return i().then((function(){return M.get("up")}))},close:function(){return i().then((function(){return M.get("down")}))}}},_={src:"/_next/static/image/public/open-lock.8d0f97ef90dfe5a4445f91a6e6ca2793.svg",height:36,width:36},C={src:"/_next/static/image/public/lock.48b64215e7effd06a93753c69c9c46bb.svg",height:36,width:36},L=function(){var e=N(),t=e.state,n=e.nextAutomation,i=e.isLoading,r=e.isMoving,a=e.open,l=e.close;if(i)return null;var c="top"===t,d=r?(0,s.jsx)(o.Z,{id:"Door.Moving",defaultMessage:"Moving\u2026"}):c?(0,s.jsx)(o.Z,{id:"Door.IsOpen",defaultMessage:"Opened"}):(0,s.jsx)(o.Z,{id:"Door.IsClose",defaultMessage:"Closed"});return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("b",{children:[(0,s.jsx)(o.Z,{id:"Door.State",defaultMessage:"State"})," :"," "]}),(0,s.jsx)("span",{style:{color:c?"green":r?"blue":"red"},children:d})]}),(0,s.jsxs)("div",{style:{color:"gray",fontSize:"75%"},children:["close"===n.action&&(0,s.jsx)(o.Z,{id:"Door.NextCloseAt",values:{b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.jsx)("b",{children:t})},time:m()(n.nextDate).local().format("HH:mm")},defaultMessage:"Next automatic <b>closing at {time}</b>"}),"open"===n.action&&(0,s.jsx)(o.Z,{id:"Door.NextOpenAt",values:{b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.jsx)("b",{children:t})},time:m()(n.nextDate).local().format("HH:mm")},defaultMessage:"Next automatic <b>opening at {time}</b>"})]}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{style:{margin:"0 auto",width:72,height:72},children:r?(0,s.jsx)(b.Z,{}):(0,s.jsx)(w.default,{src:c?_:C,alt:t,layout:"responsive"})}),(0,s.jsx)("br",{}),!r&&(0,s.jsxs)("div",{children:[!c&&(0,s.jsx)(Z.Z,{onClick:a,fullWidth:!0,variant:"outlined",children:(0,s.jsx)(o.Z,{id:"Door.Open",defaultMessage:"Open"})}),c&&(0,s.jsx)(Z.Z,{onClick:l,fullWidth:!0,variant:"outlined",children:(0,s.jsx)(o.Z,{id:"Door.Close",defaultMessage:"Close"})})]})]})},k={primary:"#fc7100"},A={src:"/_next/static/image/public/logo.a7814df0f364f91fca45a29183d26127.svg",height:72,width:72},O=function(){var e=(0,s.jsx)("div",{style:{fontSize:24,display:"inline-block",position:"relative",top:1,left:-3,width:25,overflow:"hidden"},children:"\ud83e\udd5a"});return(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",borderBottom:"1px solid lightgray",paddingBottom:4,marginBottom:16},children:[(0,s.jsx)(w.default,{src:A,alt:"NAME"}),(0,s.jsxs)("div",{style:{fontSize:36,fontWeight:600},children:[(0,s.jsx)("span",{style:{color:k.primary},children:"S"}),"mart","  ",(0,s.jsxs)("span",{style:{color:k.primary},children:["K",e,"tK",e,"t"]})]})]})},D=x().create({baseURL:"/api/light/"}),H=function(){var e,t=(0,h.useQuery)("lightStatus",(0,u.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("status");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))),{refetchInterval:3e3}),n=t.data,s=t.isLoading,i=t.refetch,r=(0,y.N)();return{state:null===n||void 0===n?void 0:n.state,nextAutomation:(null===n||void 0===n||null===(e=n.nextAutomation)||void 0===e?void 0:e[0])||{},isLoading:s,on:function(){return r().then((0,u.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("on");case 2:return t=e.sent,i(),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))))},off:function(){return r().then((0,u.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("off");case 2:return t=e.sent,i(),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))))}}},S={src:"/_next/static/image/public/light-on.c8b6abba956bd7832801554f7fe5bfa2.svg",height:72,width:72},P={src:"/_next/static/image/public/light-off.03408c6d15ed253a59eca4acdba2e07a.svg",height:72,width:72},I=function(){var e=H(),t=e.state,n=e.nextAutomation,i=e.isLoading,r=e.on,a=e.off;if(i)return null;var l="on"===t,c=l?(0,s.jsx)(o.Z,{id:"Light.IsOn",defaultMessage:"On"}):(0,s.jsx)(o.Z,{id:"Light.IsOff",defaultMessage:"Off"});return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("b",{children:[(0,s.jsx)(o.Z,{id:"Light.State",defaultMessage:"State"})," :"," "]}),(0,s.jsx)("span",{style:{color:l?"green":"red"},children:c})]}),(0,s.jsxs)("div",{style:{color:"gray",fontSize:"75%"},children:["light_off"===n.action&&(0,s.jsx)(o.Z,{id:"Light.NextOffAt",values:{b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.jsx)("b",{children:t})},time:m()(n.nextDate).local().format("HH:mm")},defaultMessage:"Next automatic <b>switch off at {time}</b>"}),"light_on"===n.action&&(0,s.jsx)(o.Z,{id:"Light.NextOnAt",values:{b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.jsx)("b",{children:t})},time:m()(n.nextDate).local().format("HH:mm")},defaultMessage:"Next automatic <b>switch on at {time}</b>"})]}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{style:{margin:"0 auto",width:72,height:72},children:(0,s.jsx)(w.default,{src:l?S:P,layout:"responsive",alt:t})}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{children:[!l&&(0,s.jsx)(Z.Z,{onClick:r,fullWidth:!0,variant:"outlined",children:(0,s.jsx)(o.Z,{id:"Light.On",defaultMessage:"On"})}),l&&(0,s.jsx)(Z.Z,{onClick:a,fullWidth:!0,variant:"outlined",children:(0,s.jsx)(o.Z,{id:"Light.Off",defaultMessage:"Off"})})]})]})},R=function(){return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:(0,s.jsxs)("b",{children:[(0,s.jsx)(o.Z,{id:"Temperature.Actual",defaultMessage:"Actually"})," ",":"," ",(0,s.jsx)("span",{style:{color:"green",fontSize:"140%"},children:"20.5\xb0"})]})}),(0,s.jsxs)("div",{children:["\u2022 ",(0,s.jsx)(o.Z,{id:"Temperature.12ago",defaultMessage:"12h hours ago"})," ",": ",(0,s.jsx)("span",{style:{color:"green"},children:"18\xb0"})]})]})},T=n(5323),z=n.n(T);function E(){return(0,s.jsxs)("div",{className:z().container,children:[(0,s.jsx)(O,{}),(0,s.jsxs)(i.ZP,{container:!0,spacing:4,children:[(0,s.jsx)(i.ZP,{item:!0,xs:12,sm:9,children:(0,s.jsx)(r.Z,{children:(0,s.jsxs)(a.Z,{children:[(0,s.jsx)("div",{className:z().titleCard,children:(0,s.jsx)(o.Z,{id:"Home.Cameras",defaultMessage:"Cameras"})}),(0,s.jsx)(p,{})]})})}),(0,s.jsx)(i.ZP,{item:!0,xs:12,sm:3,children:(0,s.jsxs)(i.ZP,{container:!0,spacing:4,children:[(0,s.jsx)(i.ZP,{item:!0,xs:12,children:(0,s.jsx)(r.Z,{children:(0,s.jsxs)(a.Z,{children:[(0,s.jsx)("div",{className:z().titleCard,children:(0,s.jsx)(o.Z,{id:"Home.Door",defaultMessage:"Door"})}),(0,s.jsx)(L,{})]})})}),(0,s.jsx)(i.ZP,{item:!0,xs:12,children:(0,s.jsx)(r.Z,{children:(0,s.jsxs)(a.Z,{children:[(0,s.jsx)("div",{className:z().titleCard,children:(0,s.jsx)(o.Z,{id:"Home.Light",defaultMessage:"Light"})}),(0,s.jsx)(I,{})]})})}),(0,s.jsx)(i.ZP,{item:!0,xs:12,children:(0,s.jsx)(r.Z,{children:(0,s.jsxs)(a.Z,{children:[(0,s.jsx)("div",{className:z().titleCard,children:(0,s.jsx)(o.Z,{id:"Home.Temperature",defaultMessage:"Temperature"})}),(0,s.jsx)(R,{})]})})})]})})]})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1257)}])},5323:function(e){e.exports={titleCard:"Home_titleCard__35HKW"}}},function(e){e.O(0,[885,966,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);