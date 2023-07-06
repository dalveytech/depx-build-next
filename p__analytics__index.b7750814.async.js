"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[519],{48268:function(t,e,n){n.d(e,{y:function(){return u}});var a=n(42122),i=n.n(a),r=n(62435),o=n(61895),s=n(86074),l=function(t){var e=t.defaultValue,n=void 0===e?"-":e,a=t.value,i=t.defaultValueIncludeSuffix,l=void 0!==i&&i,u=t.displayDecimals,c=void 0===u?2:u,d=t.label,m=void 0===d?"":d,v=t.thousandSeparator,f=void 0===v||v,x=t.prefix,h=void 0===x?"":x,p=t.suffix,g=void 0===p?"":p,y=(0,r.useMemo)((function(){return null==a||""===a?l?"".concat(h||"").concat(n).concat(g||""):n:(0,o.dp)(a,c).display({thousandSeparator:f,prefix:h,suffix:g})}),[a,n,c,f,h,g]);return(0,s.jsxs)(s.Fragment,{children:[m,y]})},u=function(t){var e=t.separator,n=void 0===e?"/":e,a=t.values;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,i()({},a[0]||{})),n,(0,s.jsx)(l,i()({},a[1]||{}))]})};e.Z=l},28722:function(t,e,n){n.d(e,{Dw:function(){return h},eI:function(){return v},x7:function(){return x}});var a,i=n(17061),r=n.n(i),o=n(17156),s=n.n(o),l=n(38416),u=n.n(l),c=n(43671),d=n(46495),m=n(58926);function v(t){return new c.f({uri:t,cache:new d.h})}var f=(a={},u()(a,m.Qz,"avalanche-c-chain"),u()(a,m.PO,"arbitrum-one"),u()(a,m.N0,"arbitrum-nova"),u()(a,m.bx,"fuji-testnet7"),u()(a,m.qF,"arbtest"),a),x=function(t){return"https://api.thegraph.com/subgraphs/name/dalveytech-adrew/"+f[t]},h=function(){var t=s()(r()().mark((function t(e,n){var a,i;return r()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:n}),mode:"cors"}).catch((function(t){console.log("err",t)}));case 3:return a=t.sent,t.next=6,null==a?void 0:a.json();case 6:return i=t.sent,t.abrupt("return",(null==i?void 0:i.data)||{});case 10:t.prev=10,t.t0=t.catch(0),console.log("fetchGql error",t.t0);case 13:return t.abrupt("return",{});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()},89558:function(t,e,n){n.r(e),n.d(e,{default:function(){return Se}});var a,i=n(27424),r=n.n(i),o=n(3410),s=n(50888),l=n(27484),u=n.n(l),c=n(62435),d=n(861),m=n.n(d),v=n(17061),f=n.n(v),x=n(17156),h=n.n(x),p=n(42122),g=n.n(p),y=n(38416),j=n.n(y),b=n(43671),k=n(59508),w=n(46495),D=n(17283),P=n(25733),F=n(61029),_=n(92627),A=n(58926),C=n(37432),I=n(24069),S=n(28722),L=(a={},j()(a,A.bx,new P.r(A.LY[0])),j()(a,A.qF,new P.r(A.TB[0])),a);function N(t,e,n){for(var a=t.from,i=t.to,r=[],o=function(t,e){var n=[],a=new Date(t);for(;a<=e;)n.push(new Date(a)),a.setDate(a.getDate()+1);return n}(new Date(1e3*a),new Date(1e3*i)),s=0,l=function(){var t=c[u],a=e.find((function(e){return n=new Date(1e3*e.timestamp),a=t,n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()&&n.getDate()===a.getDate();var n,a}));a?r.push(a):r.push(n({timestamp:t.getTime()/1e3},r[s-1])),s++},u=0,c=o;u<c.length;u++)l();return r}function V(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(e.subgraph,e.subgraphUrl,(0,C.x)()),a=n.chainId,i=(0,c.useState)(),o=r()(i,2),s=o[0],l=o[1],u=(0,c.useState)(!0),d=r()(u,2),m=d[0],v=d[1],f=(0,c.useState)(null),x=r()(f,2),h=x[0],p=x[1];return(0,c.useEffect)((function(){var e=new b.f({link:new k.u({uri:(0,S.x7)(a),fetch:fetch}),cache:new w.h}),n=(0,D.Ps)(t);e.query({query:n}).then((function(t){l(t.data),v(!1)})).catch((function(t){p(t),v(!1)}))}),[t,a]),[s,m,h]}var U=function(){var t=h()(f()().mark((function t(e,n){var a,i,o,s,l,u,c,d,m;return f()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new _.N(e,n)).setChainId(n),t.next=4,a.getVault();case 4:return i=t.sent,t.next=7,a.asset();case 7:return o=t.sent,t.next=10,Promise.all([o.balanceOf(i._address),o.decimals()]);case 10:return s=t.sent,l=r()(s,2),u=l[0],c=l[1],d=(0,I.He)(c),m=(0,I.dN)(u,d),t.abrupt("return",m);case 17:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();function K(t,e){var n=g()({},e);return t.forEach((function(t){n[t]=e[t]/1e18})),n}var T=n(74704),B=n.n(T),O=n(30381),q=n.n(O),M=n(30286),Z=(n(29079),n(77163),n(70763)),E=n(86074);function $(t){var e=t.options,n=t.startDate,a=t.endDate,i=t.onChange,o=(0,c.useState)(),s=r()(o,2),l=s[0],u=s[1],d=(0,c.useState)([{startDate:null,endDate:null,key:"selection"}]),m=r()(d,2),v=m[0],f=m[1];(0,c.useEffect)((function(){f([{startDate:n,endDate:a,key:"selection"}])}),[n,a]);var x=function(t){4==t.id&&i([null,null]);var e=new Date,n=q()().subtract(t.id,"month").toDate();u(t.id),4==t.id?i([null,null]):i([n,e])};(0,c.useEffect)((function(){var t,n=!1,a=B()(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(i.isDefault){n=!0,x(i);break}}}catch(t){a.e(t)}finally{a.f()}n||x(e[0])}),[]);var h=function(t){f([t.selection]),t.selection.startDate!=t.selection.endDate&&i([t.selection.startDate,t.selection.endDate])};return(0,E.jsx)("div",{className:"date-range-selector-wrapper",children:(0,E.jsx)(Z.ZP,{placeholder:"Select",multi:!0,contentRenderer:function(t){t.props,t.state;var e=n&&n.toISOString().slice(0,10),i=a&&a.toISOString().slice(0,10);return(0,E.jsxs)("div",{style:{cursor:"pointer"},children:[n&&a&&"".concat(e," ~ ").concat(i),(!n||!a)&&"All time"]})},dropdownRenderer:function(t){var e=t.props,n=t.state,a=t.methods,i=new RegExp(n.search,"i");return(0,E.jsxs)("div",{children:[(0,E.jsx)("div",{className:"date-range-items",children:e.options.filter((function(t){return i.test(t[e.searchBy]||t[e.labelField])})).map((function(t,n){return!e.keepSelectedInList&&a.isSelected(t)?null:(0,E.jsx)("div",{disabled:t.disabled,onClick:t.disabled?null:function(){return x(t)},className:t.id===l?"date-range-item selected":"date-range-item",children:(0,E.jsx)("div",{className:"date-range-item__label",children:t[e.labelField]})},n)}))}),(0,E.jsx)("div",{className:"date-range-custom",color:e.color,children:(0,E.jsx)(M.C0,{editableDateInputs:!0,onChange:h,moveRangeOnFirstSelection:!1,ranges:v,showDateDisplay:!1})})]})},labelField:"label",options:e,closeOnSelect:!0,closeOnScroll:!0,values:[l]})})}var H=n(98330),G="filterBar___c4asA",W="link___ryLhx",Y="page___b_L5o",R="main___RbyLk",z="header___uHW4R",Q="title___HZUm4",J="desc___Wbbjo",X=n(34713),tt=n(95591),et=n(70215),nt=n.n(et),at=n(12001),it=n.n(at),rt=n(61895),ot=["timestamp"],st=65,lt=Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),ut=(Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}),function(t,e){return ct(t,e,!0)}),ct=function(t,e,n){var a=t;if(!t)return"";a.constructor!==Date&&(a=new Date(1e3*a));var i=e&&e[0]&&e[0].payload&&e[0],r=it()("%d.%m",a),o=i&&i.payload.all;return n||void 0===o||i&&"%"===i.unit?r:"".concat(r,", ").concat(kt(o,{currency:!0,compact:!0}))},dt=(Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}),Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}),"#f93333"),mt="#E45571",vt="#70D785",ft="#FFD15B",xt="#5D75F6",ht="#8884FF",pt="#FFC500",gt=["#F1864A",xt,"#00bfea","#8884ff","#ab6100","#c90000","#7b7b7b","#6464ff","purple","darkgreen","#ff8d00",dt,"#ffaf01"],yt=function(t){var e=Math.abs(t);return e>=1e9?"".concat((0,rt.Q6)(t/1e9).toFixed(2,1),"B"):e>=1e6?"".concat((0,rt.Q6)(t/1e6).toFixed(2,1),"M"):e>=1e3?"".concat((0,rt.Q6)(t/1e3).toFixed(2,1),"K"):"".concat((0,rt.Q6)(t).toFixed(2,1))},jt=function(t){return t.toFixed(2)+"%"};function bt(t){var e=Math.floor(100*Math.abs(t))/100,n=t<0?-1:1;return lt.format(e*n)}var kt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=!!e.currency,a=!!e.compact,i=a?yt(t):bt(t);return n&&!e.hiddenDollarSign?"$".concat(i):i},wt=function(t){return kt(t)},Dt=function(t){return yt(t)},Pt=function(t){return kt(t,{currency:!0,compact:!0})},Ft=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"all",a=t;if(!a)return a;if(a.constructor!==Date&&!(a=new Date(1e3*Number(a))).getDate())return a;var i=it()("%d.%m",a),r=e&&e[0];if(r&&"%"===r.unit)return i;var o=r&&r.payload[n];return a.constructor!==Date?"".concat(a,", total: ").concat(kt(o)):"".concat(i,", total: ").concat(kt(o))},_t=function(t,e){return e&&"%"===e.unit?t.toFixed(2):kt(t,{currency:!0})},At=n(98687),Ct=n(94831),It=n(46888),St=n(90643),Lt=n(56880),Nt=n(86108),Vt=n(87226),Ut=n(9253),Kt=n(14195),Tt=n(3023),Bt=n(75358),Ot=n(14888),qt=n(33558),Mt=function(t){var e=t.title,n=t.children;return(0,E.jsxs)("div",{children:[e&&(0,E.jsx)("div",{children:e}),n]})},Zt=function(){},Et=function(){};function $t(t){var e=t.data,n=t.controls,a=(0,c.useState)({isPercentsView:!1}),i=r()(a,2),o=i[0],s=i[1],l=(0,c.useMemo)((function(){if(e)return o.isPercentsView&&n.convertToPercents?n.convertToPercents(e):e}),[e,o.isPercentsView,n.convertToPercents]);return{viewState:o,togglePercentView:function(){s((function(t){return g()(g()({},t),{},{isPercentsView:!t.isPercentsView})}))},formattedData:l,itemsUnit:o.isPercentsView?"%":void 0,yaxisTickFormatter:o.isPercentsView?jt:Pt,tooltipFormatter:o.isPercentsView?Zt:Et}}var Ht,Gt=function(t){var e,n=t.title,a=t.data,i=t.description,r=t.height,o=void 0===r?400:r,s=t.yaxisDataKey,l=void 0===s?"all":s,u=t.yaxisScale,d=t.truncateYThreshold,v=t.yaxisTickFormatter,f=t.yaxisDomain,x=void 0===f?[0,"auto"]:f,h=t.xaxisDataKey,p=void 0===h?"timestamp":h,y=t.xaxisTickFormatter,j=void 0===y?ut:y,b=t.tooltipFormatter,k=void 0===b?_t:b,w=t.tooltipLabelFormatter,D=void 0===w?ct:w,P=t.items,F=t.type,_=void 0===F?"Bar":F,A=t.syncId,C=t.children,I=t.rightYaxisDataKey,S=t.controls,L=void 0===S?{}:S,N=$t({controls:L,data:a}),V=N.formattedData,U=N.yaxisTickFormatter,K=N.itemsUnit;e="Line"===_?At.w:"Bar"===_?Ct.v:"Area"===_?It.T:St.c;var T=(0,c.useMemo)((function(){return"number"==typeof d&&a&&Math.max.apply(Math,m()(a.map((function(t){return t[l]}))))>d?[x[0],function(t){return d}]:null}),[a,d,null==x?void 0:x.join("-")]),B=(P||[]).map((function(t,e){var n={type:"monotone",dataKey:t.key,stackId:"a",name:t.name||t.key,fill:t.color||gt[e%gt.length],stroke:t.color||gt[e%gt.length],dot:t.dot||!1,key:"item-"+e,unit:t.unit||K,strokeWidth:t.strokeWidth,yAxisId:t.yAxisId};return"Line"===t.type||"Line"===_?(0,E.jsx)(Lt.x,g()(g()({},n),{},{isAnimationActive:!1})):"Area"===_?(0,E.jsx)(Nt.u,g()(g()({},n),{},{isAnimationActive:!1})):(0,E.jsx)(Vt.$,g()(g()({},n),{},{isAnimationActive:!1}))}));return(0,E.jsxs)(Mt,{title:n,controls:L,children:[(0,E.jsx)(Ut.h,{width:"100%",height:o,children:c.createElement(e,{data:V,syncId:A},[(0,E.jsx)(Kt.q,{strokeDasharray:"10 10"},"a"),(0,E.jsx)(Tt.K,{dataKey:p,tickFormatter:j,minTickGap:30},"b"),(0,E.jsx)(Bt.B,{scale:u,domain:T||x,dataKey:l,tickFormatter:v||U},"c"),I?(0,E.jsx)(Bt.B,{dataKey:I,tickFormatter:v,orientation:"right",yAxisId:"right"},"c2"):null,(0,E.jsx)(Ot.u,{formatter:k,labelFormatter:D,contentStyle:{textAlign:"left"}},"d"),(0,E.jsx)(qt.D,{},"e")].concat(m()(B),[C]))}),i&&(0,E.jsx)("div",{className:"chart-description",children:i})]})},Wt=function(t){var e=(t.traderData||{}).data;return(0,E.jsx)(Gt,{data:(e||[]).map((function(t){return g()({all:t.openInterest},t)})),yaxisDataKey:"all",items:[{key:"shortOpenInterest",name:"Short",color:mt},{key:"longOpenInterest",name:"Long",color:vt}],type:"Bar"})},Yt=n(43815),Rt=function(t){var e=t.traderData||{},n=e.data,a=e.stats,i=(0,H.Z)().t;return(0,E.jsxs)(Mt,{children:[(0,E.jsx)(Ut.h,{width:"100%",height:400,children:(0,E.jsxs)(St.c,{data:n,syncId:"tradersId",children:[(0,E.jsx)(Kt.q,{strokeDasharray:"10 10"}),(0,E.jsx)(Tt.K,{dataKey:"timestamp",tickFormatter:ut,minTickGap:30}),(0,E.jsx)(Bt.B,{domain:[1.05*-(null==a?void 0:a.maxAbsCumulativePnl),1.05*(null==a?void 0:a.maxAbsCumulativePnl)],orientation:"right",yAxisId:"right",tickFormatter:Pt,width:st,tick:{fill:gt[4]}}),(0,E.jsx)(Bt.B,{domain:[1.05*-(null==a?void 0:a.maxAbsPnl),1.05*(null==a?void 0:a.maxAbsPnl)],tickFormatter:Pt,width:st}),(0,E.jsx)(Ot.u,{formatter:_t,labelFormatter:ct,contentStyle:{textAlign:"left"}}),(0,E.jsx)(qt.D,{}),(0,E.jsx)(Vt.$,{type:"monotone",fill:"#FFFFFF",dataKey:"pnl",name:"Net PnL",children:(n||[]).map((function(t,e){return(0,E.jsx)(Yt.b,{fill:t.pnl>0?vt:mt},"cell-".concat(e))}))}),(0,E.jsx)(Lt.x,{type:"monotone",strokeWidth:2,stroke:pt,dataKey:"currentPnlCumulative",name:"Cumulative PnL",yAxisId:"right"})]})}),(0,E.jsxs)("div",{className:"chart-description",children:[(0,E.jsx)("p",{children:i("Considers Settled (Closed) Positions")}),(0,E.jsxs)("p",{children:[i("Fees Are Not Factored Into PnL")," "]})]})]})},zt=["viewState","togglePercentView","formattedData"],Qt=function(t){return t},Jt=function(t){var e=t.syncId,n=t.traderData||{},a=n.data,i=n.stats,r={convertToPercents:Qt},o=(0,H.Z)().t,s=$t({controls:r,data:a}),l=s.viewState,u=(s.togglePercentView,s.formattedData),c=nt()(s,zt);return(0,E.jsxs)(Mt,{children:[(0,E.jsx)(Ut.h,{width:"100%",height:400,children:(0,E.jsxs)(St.c,{data:u,barGap:0,syncId:e,children:[(0,E.jsx)(Kt.q,{strokeDasharray:"10 10"}),(0,E.jsx)(Tt.K,{dataKey:"timestamp",tickFormatter:ut,minTickGap:30}),l.isPercentsView?(0,E.jsx)(Bt.B,{dataKey:"all",tickFormatter:c.yaxisTickFormatter,width:st}):(0,E.jsx)(Bt.B,{domain:[1.05*-(null==i?void 0:i.maxProfitLoss),1.05*(null==i?void 0:i.maxProfitLoss)],tickFormatter:c.yaxisTickFormatter,width:st}),(0,E.jsx)(Bt.B,{domain:[1.05*-(null==i?void 0:i.maxProfitLoss),1.05*(null==i?void 0:i.maxProfitLoss)],tickFormatter:c.yaxisTickFormatter,width:st}),(0,E.jsx)(Bt.B,{domain:[1.1*-i.maxCurrentCumulativeProfitLoss,1.1*i.maxCurrentCumulativeProfitLoss],orientation:"right",yAxisId:"right",tickFormatter:Pt,width:st}),(0,E.jsx)(Ot.u,{formatter:_t,labelFormatter:ct,contentStyle:{textAlign:"left"}}),(0,E.jsx)(qt.D,{}),!l.isPercentsView&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Nt.u,{yAxisId:"right",type:"monotone",fill:mt,stroke:0,dataKey:"currentLossCumulative",name:"Cumulative Loss",isAnimationActive:!1}),(0,E.jsx)(Nt.u,{yAxisId:"right",type:"monotone",stroke:0,fill:vt,dataKey:"currentProfitCumulative",name:"Cumulative Profit",isAnimationActive:!1})]}),l.isPercentsView?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Vt.$,{unit:c.itemsUnit,type:"monotone",stackId:"b",fill:mt,dataKey:"totalLoss",name:"Loss",isAnimationActive:!1}),(0,E.jsx)(Vt.$,{unit:c.itemsUnit,type:"monotone",stackId:"b",fill:vt,dataKey:"totalProfit",name:"Profit",isAnimationActive:!1})]}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Vt.$,{type:"monotone",fill:mt,dataKey:"totalLoss",name:"Loss",isAnimationActive:!1}),(0,E.jsx)(Vt.$,{type:"monotone",fill:vt,dataKey:"totalProfit",name:"Profit",isAnimationActive:!1})]})]})}),(0,E.jsxs)("div",{className:"chart-description",children:[(0,E.jsx)("p",{children:o("Considers Settled (Closed) Positions")}),(0,E.jsxs)("p",{children:[o("Fees Are Not Factored Into PnL")," "]})]})]})},Xt=function(t){var e=t.usersData;return(0,E.jsx)(Gt,{syncId:"syncGlp",data:e,yaxisDataKey:"all",rightYaxisDataKey:"cumulative",yaxisTickFormatter:Dt,tooltipFormatter:wt,tooltipLabelFormatter:Ft,items:[{key:"trading",name:"Trading",color:ft},{key:"mintAndBurn",name:"Mint & Burn DLP",color:ht},{key:"cumulative",name:"Cumulative",type:"Line",strokeWidth:3,dot:!1,color:pt,dataKey:"cumulative",yAxisId:"right"}],type:"Composed"})},te=n(48268),ee=n(94184),ne=n.n(ee),ae="loading___aP5ZE",ie="card___zhLax",re="price___S7iyd",oe="neg___drPsm",se="title___gB9uU",le="info___amemd",ue="content___wzxup",ce=function(t){var e=t.title,n=t.price,a=t.content,i=t.loading,r=t.hiddenDollarSign,o=void 0!==r&&r;return(0,E.jsx)("div",{className:ie,children:i?(0,E.jsx)("div",{className:ae,children:(0,E.jsx)(s.Z,{spin:!0,rev:!0,style:{color:"#fff"}})}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("div",{className:se,children:e}),(0,E.jsxs)("div",{className:le,children:[(0,E.jsx)("div",{className:ue,children:a}),n&&0!==Number(n)?(0,E.jsxs)("div",{className:ne()(re,j()({},oe,n<0)),children:[n>0?"+":"-",kt(Math.abs(n),{currency:!0,compact:!0,hiddenDollarSign:o})]}):(0,E.jsx)("div",{className:re,children:"+$0.00"})]})]})})},de="card___JF7YH",me="loading___yv2zP",ve="title___wE9Du",fe=function(t){var e=t.children,n=t.title,a=t.loading;return(0,E.jsxs)("div",{className:de,children:[(0,E.jsx)("div",{className:ve,children:n}),a&&(0,E.jsx)("div",{className:me,children:(0,E.jsx)(s.Z,{rev:!0,spin:!0,style:{color:"#fff",fontSize:"32px"}})}),e]})},xe=["viewState","togglePercentView","formattedData"],he=function(t){return function(t,e){var n=e.totalKey,a=void 0===n?"all":n,i=e.ignoreKeys,o=void 0===i?[]:i,s=[].concat(m()(o),[a]);return t.map((function(t){var e,n=t.timestamp,i=nt()(t,ot),o=t[a];"number"!=typeof o&&(o=Object.entries(i).reduce((function(t,e){var n=r()(e,2),a=n[0],i=n[1];return s.includes(a)||(t+=i),t}),0));var l=Object.entries(i).reduce((function(t,e){var n=r()(e,2),a=n[0],i=n[1];return s.includes(a)?t[a]=i:t[a]=i/o*100,t}),{});return g()(g()({},l),{},(e={},j()(e,a,100),j()(e,"timestamp",n),e))}))}(t,{ignoreKeys:["cumulative","movingAverageAll"],totalKey:"all"})},pe=function(t){var e=t.data,n=$t({controls:{convertToPercents:he},data:void 0===e?[]:e}),a=n.viewState,i=(n.togglePercentView,n.formattedData),r=nt()(n,xe);return(0,E.jsx)(Mt,{children:(0,E.jsx)(Ut.h,{width:"100%",height:480,children:(0,E.jsxs)(St.c,{data:i,syncId:"syncA",children:[(0,E.jsx)(Kt.q,{strokeDasharray:"10 10"}),(0,E.jsx)(Tt.K,{dataKey:"timestamp",tickFormatter:ut,minTickGap:30}),(0,E.jsx)(Bt.B,{dataKey:"all",interval:"preserveStartEnd",tickCount:a.isPercentsView?void 0:7,tickFormatter:r.yaxisTickFormatter,width:65}),(0,E.jsx)(Bt.B,{dataKey:"cumulative",orientation:"right",yAxisId:"right",tickFormatter:Pt,width:65}),(0,E.jsx)(Ot.u,{formatter:_t,labelFormatter:ct,contentStyle:{textAlign:"left"}}),(0,E.jsx)(qt.D,{}),(0,E.jsx)(Vt.$,{unit:r.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"trading",stackId:"a",name:"Trading",fill:ft}),(0,E.jsx)(Vt.$,{unit:r.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"liquidation",stackId:"a",name:"Liquidation",fill:xt}),(0,E.jsx)(Vt.$,{unit:r.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"mint",stackId:"a",name:"Buy BLP",fill:vt}),(0,E.jsx)(Vt.$,{unit:r.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"burn",stackId:"a",name:"Sell BLP",fill:mt}),(0,E.jsx)(Lt.x,{isAnimationActive:!1,type:"monotone",strokeWidth:3,dot:!1,stroke:pt,dataKey:"cumulative",yAxisId:"right",name:"Cumulative"})]})})})},ge=function(t){var e=t.usersData;return(0,E.jsx)(Gt,{syncId:"syncGlp",data:e,truncateYThreshold:6500,rightYaxisDataKey:"cumulativeNewUser",yaxisDataKey:"userCount",yaxisTickFormatter:Dt,tooltipFormatter:wt,tooltipLabelFormatter:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Ft.apply(void 0,m()(e||[]).concat(["userCount"]))},items:[{key:"newUser",name:"New User",color:xt},{key:"existingUser",name:"Existing User",color:ht},{yAxisId:"right",strokeWidth:3,key:"cumulativeNewUser",name:"Cumulative New Users",color:pt,type:"Line"}],type:"Composed"})},ye=n(87797),je=["viewState","togglePercentView","formattedData"],be=function(t){return t},ke=["BTC/USD","ETH/USD"],we=function(t,e){var n=ke.indexOf(t.name),a=ke.indexOf(e.name);return n<a?-1:n>a?1:0},De=(0,c.memo)((function(t){var e=t.rangeTime,n=(0,X.Ge)().library,a=(0,C.x)().chainId,i=function(t){var e=V('{\n    volumes(where: {period: daily, timestamp_gte: "'.concat(t.from,'", timestamp_lte:"').concat(t.to,'"}) {\n      timestamp\n      open\n      liquidation\n      id\n      market\n      close\n      cumulative\n    }\n    lpstats(where: {period: daily,  timestamp_gte: "').concat(t.from,'", timestamp_lte:"').concat(t.to,'" }) {\n      mint\n      burn\n      timestamp\n      period\n    }\n  }')),n=r()(e,3),a=n[0],i=n[1],o=n[2],s=["open","cumulative","liquidation","close"],l=0,u=[],c={buyAndSell:0};null!=a&&a.volumes&&(u=F.Z.chain((null==a?void 0:a.volumes)||[]).groupBy((function(t){return 86400*parseInt("".concat(t.timestamp/86400))})).map((function(t,e){var n=t.reduce((function(t,e){var n=K(s,e);return t.all+=n.cumulative||0,l+=n.cumulative,t.cumulative=l,c[e.market.toUpperCase()]=0,t[e.market.toUpperCase()]=n.cumulative,t}),{all:0,cumulative:0,timestamp:Number(e)});return n})).value());var d=((null==a?void 0:a.lpstats)||[]).map((function(t){var e=t.mint/1e6,n=t.burn/1e6;return g()(g()({},t),{},{buyAndSell:e+n,mint:e,burn:n})})),v=N(t,F.Z.chain([].concat(m()(d),m()(u))).groupBy((function(t){return 86400*parseInt("".concat(t.timestamp/86400))})).map((function(t){return t.reduce((function(t,e){return g()(g()({},t),e)}),g()({},c))})).value(),(function(t,e){return g()(g()(g()({},t),c),{},{all:0,mint:0,burn:0,buyAndSell:0,cumulative:e?e.cumulative:0})})),f=0;return v.reduce((function(t,e,n){var a=e.cumulative;return f+=e.buyAndSell||0,n>0&&void 0===e.cumulative?(a=v[n-1].cumulative,a+=e.buyAndSell):a+=f,e.cumulative=a,e.all=(e.all||0)+e.buyAndSell,t}),v),{data:v,loading:i,error:o}}(e),s=(null==i?void 0:i.data)||[],l=(0,tt.ZP)("".concat(a),(function(){return(0,ye.t)(a,n)})).data,u=$t({controls:{convertToPercents:be},data:s}),c=u.viewState,d=(u.togglePercentView,u.formattedData),v=nt()(u,je);return(0,E.jsx)(fe,{loading:null==i?void 0:i.loading,title:(0,E.jsx)(o._H,{id:"Volume"}),children:(0,E.jsx)(Mt,{children:(0,E.jsx)(Ut.h,{width:"100%",height:480,children:(0,E.jsxs)(St.c,{data:d,syncId:"syncA",children:[(0,E.jsx)(Kt.q,{strokeDasharray:"10 10"}),(0,E.jsx)(Tt.K,{dataKey:"timestamp",tickFormatter:ut,minTickGap:30}),(0,E.jsx)(Bt.B,{dataKey:"all",interval:"preserveStartEnd",tickCount:c.isPercentsView?void 0:7,tickFormatter:v.yaxisTickFormatter,width:65}),(0,E.jsx)(Bt.B,{dataKey:"cumulative",orientation:"right",yAxisId:"right",tickFormatter:Pt,width:65}),(0,E.jsx)(Ot.u,{formatter:_t,labelFormatter:ct,contentStyle:{textAlign:"left"}}),(l||[]).length>0&&(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(qt.D,{})}),(l||[]).sort(we).map((function(t,e){return(0,E.jsx)(Vt.$,{unit:v.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:t.address.toUpperCase(),stackId:"a",name:t.name,fill:gt[e]})})),(0,E.jsx)(Vt.$,{unit:v.itemsUnit,isAnimationActive:!1,type:"monotone",dataKey:"buyAndSell",stackId:"a",name:"Buy&Sell BLP",fill:ht}),(0,E.jsx)(Lt.x,{isAnimationActive:!1,type:"monotone",dot:!1,strokeWidth:3,stroke:pt,dataKey:"cumulative",yAxisId:"right",name:"Cumulative"})]})})})})})),Pe=De,Fe="row___mVWhk",_e="col___xdcUD",Ae="colChart___vOXjt",Ce=(Ht=u()().subtract(24,"hour").valueOf(),{from:parseInt("".concat(Ht/1e3)),to:parseInt("".concat(Date.now()/1e3))}),Ie=function(t){var e=t.rangeTime,n=(0,C.x)().chainId,a=(0,X.Ge)().library,i=(0,H.Z)().t,s=function(t){var e=V('{\n    fees(where: {timestamp_gte: "'.concat(t.from,'", timestamp_lte:"').concat(t.to,'"}) {\n      id\n      open\n      close\n      execution\n      liquidation\n      funding\n      mint\n      timestamp\n      cumulative\n      burn\n    }\n  }\n  ')),n=r()(e,3),a=n[0],i=n[1],o=n[2],s=["open","close","execution","liquidation","funding","mint","burn","cumulative"],l=0;return{data:N(t,((null==a?void 0:a.fees)||[]).map((function(t){var e=K(s,t);l+=e.cumulative;var n=e.cumulative;return g()(g()({},e),{},{all:n,trading:e.open+e.close+e.execution+e.funding,cumulative:l})})),(function(t,e){return g()(g()({},t),{},{open:0,close:0,execution:0,liquidation:0,funding:0,trading:0,mint:0,burn:0,cumulative:e?e.cumulative:0,all:0})})),loading:i,error:o}}(e),l=function(){var t,e=V("{\n  summaries(where: {period: total }) {\n    fees\n    lpVolume\n    openInterest\n    trades\n    period\n    tradingVolume\n    tradingLPVolume\n    uniqueUsers\n  }}"),n=r()(e,3),a=n[0],i=n[1],o=n[2];a&&(a.summaries||[]).length>0?((t=K(["fees","openInterest","tradingVolume"],a.summaries[0])).tradingLPVolume=t.tradingLPVolume/1e6,t.totalVolume=t.tradingVolume+t.tradingLPVolume):t={fees:0,tradingLPVolume:0,totalVolume:0,openInterest:0,tradingVolume:0,lpVolume:0,uniqueUsers:0};return{data:t,loading:i,error:o}}(),u=function(t){var e,n,a,i,o,s,l,u,c,d,m=["totalProfit","totalLoss","pnlCumulative","longOpenInterest","openInterest","shortOpenInterest"],v=V('{\n     traders (where: { timestamp_gte: "'.concat(t.from,'", timestamp_lte:"').concat(t.to,'"}) {\n      longOpenInterest\n      openInterest\n      pnlCumulative\n      shortOpenInterest\n      timestamp\n      totalLoss\n      totalProfit\n    }\n  }\n  ')),f=r()(v,3),x=f[0],h=f[1],p=f[2],y=0,j=0,b=0,k=((null==x?void 0:x.traders)||[]).map((function(t){var e=K(m,t),n=e.totalProfit,a=e.totalLoss,i=a+n;return y+=i,b+=n,j-=Math.abs(a),g()(g()({},e),{},{currentLossCumulative:j,currentProfitCumulative:b,pnl:i,currentPnlCumulative:y})})),w=0,D=0,P=0;return k.length>0&&(e=null===(l=F.Z.maxBy(k,(function(t){return t.pnl})))||void 0===l?void 0:l.pnl,n=null===(u=F.Z.minBy(k,(function(t){return t.pnl})))||void 0===u?void 0:u.pnl,o=null===(c=F.Z.maxBy(k,(function(t){return t.currentPnlCumulative})))||void 0===c?void 0:c.currentPnlCumulative,a=null===(d=F.Z.minBy(k,(function(t){return t.currentPnlCumulative})))||void 0===d?void 0:d.currentPnlCumulative,i=F.Z.minBy(k,(function(t){return t.totalLoss})).totalLoss,s=F.Z.maxBy(k,(function(t){return t.totalProfit})).totalProfit,w=Math.max(s,-i),D=k[k.length-1].currentProfitCumulative,P=k[k.length-1].currentLossCumulative),{data:{data:N(t,k,(function(t,e){return g()(g()({},t),{},{longOpenInterest:0,openInterest:0,shortOpenInterest:0,currentLossCumulative:e?e.currentLossCumulative:0,currentProfitCumulative:e?e.currentProfitCumulative:0,pnl:0,currentPnlCumulative:e?e.currentPnlCumulative:0,pnlCumulative:e?e.pnlCumulative:0,totalLoss:0,totalProfit:0})})),stats:{maxPnl:e,maxLoss:i,maxProfit:s,maxProfitLoss:w,maxCurrentCumulativeProfitLoss:Math.max(D,-P),maxCurrentCumulativePnl:o,maxAbsPnl:Math.max(Math.abs(e||0),Math.abs(n||0)),maxAbsCumulativePnl:Math.max(Math.abs(o||0),Math.abs(a||0))}},loading:h,error:p}}(e),c=function(t){var e=t.from,n=t.to,a=V('{\n    summaries(where: {period: hourly, timestamp_gte: "'.concat(e,'", timestamp_lte:"').concat(n,'"}) {\n    fees\n    lpVolume\n    openInterest\n    period\n    tradingLPVolume\n    tradingVolume\n    uniqueUsers\n  }}')),i=r()(a,3),o=i[0],s=i[1],l=i[2],u=["fees","openInterest","tradingVolume"];return null!=o&&o.summaries?{data:o.summaries.reduce((function(t,e){var n=K(u,e);return n.lpVolume=n.lpVolume/1e6,n.tradingLPVolume=n.tradingLPVolume/1e6,n.totalVolume=n.tradingVolume+n.tradingLPVolume,t.fees+=n.fees,t.openInterest+=n.openInterest,t.tradingVolume+=n.tradingVolume,t.totalVolume+=n.totalVolume,t.lpVolume+=n.lpVolume,t.uniqueUsers+=n.uniqueUsers,t}),{totalVolume:0,fees:0,tradingLPVolume:0,openInterest:0,tradingVolume:0,lpVolume:0,uniqueUsers:0}),loading:s,error:l}:{data:void 0,loading:s,error:l}}(Ce),d=function(t){var e=V('\n  {\n    activities(orderBy: timestamp, where: {  timestamp_gte: "'.concat(t.from,'", timestamp_lte:"').concat(t.to,'" }) {\n      openCount\n      closeCount\n      mintCount\n      burnCount\n      timestamp\n      newUser\n      userCount\n    }\n  }\n  ')),n=r()(e,3),a=n[0],i=n[1],o=n[2],s=0,l=0;return{data:N(t,((null==a?void 0:a.activities)||[]).map((function(t){var e=t.mintCount+t.burnCount,n=t.openCount+t.closeCount,a=n+e;s+=a;var i=t.userCount-t.newUser;return l+=t.newUser,g()(g()({},t),{},{all:a,mintAndBurn:e,trading:n,existingUser:i,cumulativeNewUser:l,cumulative:s})})),(function(t,e){return g()(g()({},t),{},{openCount:0,closeCount:0,mintCount:0,burnCount:0,newUser:0,userCount:0,all:0,mintAndBurn:0,trading:0,existingUser:e?e.existingUser:0,cumulativeNewUser:e?e.cumulativeNewUser:0,cumulative:e?e.cumulative:0})})),loading:i,error:o}}(e),m=null==l?void 0:l.data,v=null==c?void 0:c.data,f=null==u?void 0:u.data,x=(null==l?void 0:l.loading)||(null==c?void 0:c.loading),h=(0,tt.ZP)([a,n],(function(){return U(a,n)}),{refreshInterval:0,revalidateOnFocus:!1}),p=h.data,y=h.isLoading;return(0,E.jsxs)("div",{children:[(0,E.jsxs)("div",{className:Fe,children:[(0,E.jsx)("div",{className:_e,children:(0,E.jsx)(ce,{loading:x,title:i("Volume"),content:(0,E.jsx)(te.Z,{value:null==m?void 0:m.totalVolume,prefix:"$"}),price:null==v?void 0:v.totalVolume})}),(0,E.jsx)("div",{className:_e,children:(0,E.jsx)(ce,{loading:x,title:i("Open Interest"),content:(0,E.jsx)(te.Z,{prefix:"$",value:null==m?void 0:m.openInterest}),price:null==v?void 0:v.openInterest})}),(0,E.jsx)("div",{className:_e,children:(0,E.jsx)(ce,{loading:x,title:i("Total Fees"),content:(0,E.jsx)(te.Z,{prefix:"$",value:null==m?void 0:m.fees}),price:null==v?void 0:v.fees})}),(0,E.jsx)("div",{className:_e,children:(0,E.jsx)(ce,{loading:y,title:i("BLP Pool"),content:(0,E.jsx)(te.Z,{prefix:"$",value:p}),price:null==v?void 0:v.lpVolume})}),(0,E.jsx)("div",{className:_e,children:(0,E.jsx)(ce,{hiddenDollarSign:!0,loading:x,title:i("Total Users"),content:(0,E.jsx)(te.Z,{value:null==m?void 0:m.uniqueUsers}),price:null==v?void 0:v.uniqueUsers})})]}),(0,E.jsxs)("div",{children:[(0,E.jsxs)("div",{className:Fe,children:[(0,E.jsx)("div",{className:Ae,children:(0,E.jsx)(Pe,{rangeTime:e})}),(0,E.jsx)("div",{className:Ae,children:(0,E.jsx)(fe,{loading:null==s?void 0:s.loading,title:(0,E.jsx)(o._H,{id:"Fees"}),children:(0,E.jsx)(pe,{data:null==s?void 0:s.data})})})]}),(0,E.jsxs)("div",{className:Fe,children:[(0,E.jsx)("div",{className:Ae,children:(0,E.jsx)(fe,{loading:null==u?void 0:u.loading,title:(0,E.jsx)(o._H,{id:"Traders Net PnL"}),children:(0,E.jsx)(Rt,{traderData:f,syncId:"tradersId"})})}),(0,E.jsx)("div",{className:Ae,children:(0,E.jsx)(fe,{loading:null==u?void 0:u.loading,title:(0,E.jsx)(o._H,{id:"Traders Profit vs. Loss"}),children:(0,E.jsx)(Jt,{traderData:f,syncId:"tradersId"})})})]}),(0,E.jsxs)("div",{className:Fe,children:[(0,E.jsx)("div",{className:Ae,children:(0,E.jsx)(fe,{loading:null==u?void 0:u.loading,title:(0,E.jsx)(o._H,{id:"Open Interest"}),children:(0,E.jsx)(Wt,{traderData:f})})}),(0,E.jsx)("div",{className:Ae,children:(0,E.jsx)(fe,{loading:null==d?void 0:d.loading,title:(0,E.jsx)(o._H,{id:"Users Actions"}),children:(0,E.jsx)(Xt,{usersData:null==d?void 0:d.data})})})]}),(0,E.jsx)("div",{className:Fe,children:(0,E.jsx)("div",{className:Ae,children:(0,E.jsx)(fe,{loading:null==u?void 0:u.loading,title:(0,E.jsx)(o._H,{id:"Users"}),children:(0,E.jsx)(ge,{usersData:null==d?void 0:d.data})})})})]})]})},Se=function(t){var e=(0,H.Z)().t,n=[{label:e("Last Month"),id:1,isDefault:!0},{label:e("Last 2 Months"),id:2},{label:e("Last 3 Months"),id:3}],a=(0,c.useState)({from:u()().subtract(30,"day").startOf("day").unix(),to:u()().endOf("day").unix()}),i=r()(a,2),l=i[0],d=i[1],m=(0,C.x)().chainId,v=function(t){var e=V("{\n    _meta {\n      block {\n        number\n      }\n    }\n  }"),n=r()(e,3),a=n[0],i=n[1],o=n[2],s=(0,c.useState)(),l=r()(s,2),u=l[0],d=l[1];return(0,c.useEffect)((function(){a&&L[t.toString()].getBlock(a._meta.block.number).then((function(t){d(t)})).catch((function(t){console.error(t)}))}),[a,d]),{block:u,loading:i,error:o}}(m),f=v.block,x=v.loading;return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)("div",{className:Y,children:[(0,E.jsxs)("div",{className:z,children:[(0,E.jsx)("div",{className:Q,children:e("Analytics")}),x||!f?(0,E.jsx)(s.Z,{spin:!0,rev:!0,style:{color:"#fff"}}):(0,E.jsx)("div",{className:J,children:(0,E.jsx)(o._H,{id:"AnalyticsDesc",values:{time:u()(1e3*f.timestamp).fromNow(),block:(0,E.jsxs)("a",{className:W,href:(0,A.B8)(m,f.number),target:"_blank",children:[" ",f.number," "]})}})})]}),(0,E.jsxs)("div",{className:R,children:[(0,E.jsx)("div",{className:G,children:(0,E.jsx)($,{startDate:new Date(1e3*l.from),endDate:new Date(1e3*l.to),options:n,onChange:function(t){var e=r()(t,2),n=e[0],a=e[1];if(n&&a){var i=u()(n.getTime()).startOf("day").unix(),o=u()(a.getTime()).endOf("day").unix();d({from:i,to:o})}}})}),(0,E.jsx)(Ie,{rangeTime:l})]})]})})}},87797:function(t,e,n){n.d(e,{t:function(){return d}});var a=n(17061),i=n.n(a),r=n(42122),o=n.n(r),s=n(17156),l=n.n(s),u=n(44637),c={name:"BTC/USDT",address:"0xbEcC4Cd3bC7E912bCeA6EFE3F8379a7018455F99"},d=function(){var t=l()(i()().mark((function t(e,n){var a,r;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new u.x(n,e),t.next=3,a.getMarkets();case 3:if(t.t0=t.sent.map((function(t){return o()(o()({},t),{},{address:t.addr})})),t.t0){t.next=6;break}t.t0=[];case 6:return 0==(r=t.t0).length&&(console.warn("failed to get markets"),r.push(c)),t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}]);