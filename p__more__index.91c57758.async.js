(self.webpackChunk=self.webpackChunk||[]).push([[40],{86237:function(e,t,n){"use strict";n.d(t,{F:function(){return o},s:function(){return s}});var a=n(57218),r=n(16441),i=n(29251);function s(e){const t=(0,i.Y0)(e);if(t.length>31)throw new Error("bytes32 string must be less than 32 bytes");return(0,r.Dv)((0,r.zo)([t,a.R]).slice(0,32))}function o(e){const t=(0,r.lE)(e);if(32!==t.length)throw new Error("invalid bytes32 - not 32 bytes long");if(0!==t[31])throw new Error("invalid bytes32 string - no null terminator");let n=31;for(;0===t[n-1];)n--;return(0,i.ZN)(t.slice(0,n))}},43680:function(e,t,n){"use strict";n.d(t,{x:function(){return b}});var a=n(62435),r=n(74855),i=n.n(r),s=n(90381),o=Object.defineProperty,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const d=e=>a.createElement("svg",((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&p(e,n,t[n]);return e})({width:24,height:25,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M17.25 9h-7a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 19 17.75v-7A1.75 1.75 0 0 0 17.25 9Z",stroke:"#78808E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M15.5 9V7.25a1.75 1.75 0 0 0-1.75-1.75h-7A1.75 1.75 0 0 0 5 7.25v7A1.75 1.75 0 0 0 6.75 16H8.5",stroke:"#78808E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));var y=n(88469),f=n(98330),m=n(86074),b=function(e){var t=e.account,n=e.isFull,r=void 0!==n&&n,o=e.isCopy,u=void 0===o||o,l=e.className,c=(0,f.Z)().t,p=(0,a.useMemo)((function(){return t?r?t:t.length>13?"".concat(t.slice(0,5),"...").concat(t.slice(t.length-4)):t:"-"}),[r,t]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{className:null!=l?l:"",children:null!=p?p:"-"}),u?(0,m.jsx)(i(),{text:null!=t?t:"",onCopy:function(){return y.U.success(c("Address copied to your clipboard"))},children:(0,m.jsx)(d,{className:s.Z.copy})}):null]})}},87798:function(e,t,n){"use strict";n.d(t,{Fc:function(){return o},Fr:function(){return u},II:function(){return r},Pi:function(){return a},T$:function(){return s},ZF:function(){return i}});var a="wss://data-stream.binance.com/stream",r="https://data.binance.com/api/v3/",i="https://api.binance.us/api/v3",s="wss://stream.binance.us:9443/stream",o="https://api-cloud.bitmart.com/spot/v1",u="https://info.blex.io/api"},37432:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var a=n(34713),r=n(58926),i=n(65334);function s(){var e=(0,a.Ge)().chainId;if(!e){var t=localStorage.getItem(i.HC);t&&((e=parseInt(t))||localStorage.removeItem(i.HC))}return e&&r.FQ.includes(e)||(e=r.rC),{chainId:e}}},28722:function(e,t,n){"use strict";n.d(t,{Dw:function(){return b},eI:function(){return y},x7:function(){return m}});var a,r=n(17061),i=n.n(r),s=n(17156),o=n.n(s),u=n(38416),l=n.n(u),c=n(43671),p=n(46495),d=n(58926);function y(e){return new c.f({uri:e,cache:new p.h})}var f=(a={},l()(a,d.Qz,"avalanche-c-chain"),l()(a,d.PO,"arbitrum-one"),l()(a,d.N0,"arbitrum-nova"),l()(a,d.bx,"fujibeta"),l()(a,d.qF,"arbtest"),a),m=function(e){return"https://api.thegraph.com/subgraphs/name/dalveytech-adrew/"+f[e]},b=function(){var e=o()(i()().mark((function e(t,n){var a,r;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:n}),mode:"cors"}).catch((function(e){console.log("err",e)}));case 3:return a=e.sent,e.next=6,null==a?void 0:a.json();case 6:return r=e.sent,e.abrupt("return",(null==r?void 0:r.data)||{});case 10:e.prev=10,e.t0=e.catch(0),console.log("fetchGql error",e.t0);case 13:return e.abrupt("return",{});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}()},79536:function(e,t,n){"use strict";n.d(t,{m:function(){return u}});var a=n(27424),r=n.n(a),i=n(62435),s=n(86074),o=function(e){var t=Math.floor(e/86400),n=Math.floor(e%86400/3600),a=Math.floor(e%3600/60),r=e%60,i="";return t>0&&(i+=t+"d "),n>0&&(i+=n+"h "),a>0&&(i+=a+"m "),r>0&&(i+=r+"s "),i.trim()},u=function(e){var t=e.className,n=e.startTime,a=e.endedTime,u=(0,i.useState)("Start At "),l=r()(u,2),c=l[0],p=l[1],d=(0,i.useState)("-"),y=r()(d,2),f=y[0],m=y[1];return(0,i.useEffect)((function(){if(n&&a){var e=setInterval((function(){var e=Math.round(Date.now()/1e3);n>e?(p("Start After "),m(o(Number(n)-e))):a<e?(p("Ended"),m("")):(p("Ending in "),m(o(Number(a)-e)))}),1e3);return function(){return clearInterval(e)}}}),[n,a]),(0,s.jsxs)("span",{className:"dib c100 ".concat(t),children:[c,(0,s.jsx)("span",{className:"c200",children:f})]})}},63695:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ze}});var a=n(42122),r=n.n(a),i=n(34713),s=n(94184),o=n.n(s),u=n(62435),l=n(4480),c=n(95591),p=n(3410),d=n(17061),y=n.n(d),f=n(17156),m=n.n(f),b=n(61895),v=n(24069),h=n(28722),x=function(){var e=m()(y()().mark((function e(t,n){var a,i,s,o,u,l,c;return y()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},i='query MyQuery {\n    users(where: {id: "'.concat(t.toLowerCase(),'"}) {\n      avgLoss\n      avgProfit\n      winRate\n      totalVolume\n      realizedPnl\n      trades\n      totalProfitCount\n    }\n  }'),s=(0,h.x7)(n),e.next=5,(0,h.Dw)(s,i);case 5:return o=e.sent,u=o.users,l=u[0],(c=r()(r()({},l),a)).avgProfit=l.avgProfit,c.avgLoss=l.avgLoss,e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=m()(y()().mark((function e(t,n){var a,i,s,o,u,l,c,p,d;return y()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o='query MyQuery {\n    users(where: {id: "'.concat(t.toLowerCase(),'"}){\n      avgLoss\n      avgProfit\n      winRate\n      totalVolume\n      realizedPnl\n      trades\n      totalProfit\n      totalLoss\n    }\n  }'),u=(0,h.x7)(n),e.next=4,(0,h.Dw)(u,o);case 4:return l=e.sent,c=l.users,p=null==c?void 0:c[0],console.log("---user---",p),d=null!==(a=(0,b.Q6)(null!==(i=p.totalProfit)&&void 0!==i?i:0).plus((0,b.Q6)(p.totalLoss)).toString())&&void 0!==a?a:"0",p.realizedPnl=null!==(s=(0,v.dN)(d,18))&&void 0!==s?s:"0",p.feesPaid=(0,v.dN)(p.feesPaid,18),p.totalVolume=(0,v.dN)(p.totalVolume,18),console.log("---user---after",p),e.abrupt("return",r()({},p));case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=n(56690),T=n.n(g),N=n(89728),w=n.n(N),_=n(61655),M=n.n(_),O=n(26389),I=n.n(O),k=JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"factory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"int256[]","name":"fees","type":"int256[]"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"UpdateFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"uint8","name":"kind","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"oldFeeOrRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feeOrRate","type":"uint256"}],"name":"UpdateFeeAndRates","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_RATE_PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"int256[]","name":"fees","type":"int256[]"}],"name":"collectFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"bool","name":"isLong","type":"bool"}],"name":"cumulativeFundingRates","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"feeAndRates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"}],"name":"getExecFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"uint256","name":"_oraclePrice","type":"uint256"},{"internalType":"bool","name":"isOpen","type":"bool"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_slippage","type":"uint256"},{"internalType":"bool","name":"_isExec","type":"bool"},{"internalType":"uint8","name":"liqState","type":"uint8"},{"internalType":"uint64","name":"_fromOrder","type":"uint64"},{"internalType":"bytes32","name":"_refCode","type":"bytes32"},{"internalType":"uint256","name":"collateralDelta","type":"uint256"},{"internalType":"uint8","name":"execNum","type":"uint8"},{"internalType":"uint256[]","name":"inputs","type":"uint256[]"}],"internalType":"struct MarketDataTypes.UpdatePositionInputs","name":"params","type":"tuple"},{"components":[{"internalType":"address","name":"market","type":"address"},{"internalType":"bool","name":"isLong","type":"bool"},{"internalType":"uint32","name":"lastTime","type":"uint32"},{"internalType":"uint216","name":"extra3","type":"uint216"},{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"uint256","name":"collateral","type":"uint256"},{"internalType":"uint256","name":"averagePrice","type":"uint256"},{"internalType":"int256","name":"entryFundingRate","type":"int256"},{"internalType":"int256","name":"realisedPnl","type":"int256"},{"internalType":"uint256","name":"extra0","type":"uint256"},{"internalType":"uint256","name":"extra1","type":"uint256"},{"internalType":"uint256","name":"extra2","type":"uint256"}],"internalType":"struct Position.Props","name":"position","type":"tuple"}],"name":"getFees","outputs":[{"internalType":"int256[]","name":"fees","type":"int256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"uint256","name":"longSize","type":"uint256"},{"internalType":"uint256","name":"shortSize","type":"uint256"},{"internalType":"bool","name":"isLong","type":"bool"}],"name":"getFundingRate","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getGlobalFees","outputs":[{"internalType":"int256","name":"total","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"uint256","name":"_oraclePrice","type":"uint256"},{"internalType":"bool","name":"isOpen","type":"bool"},{"internalType":"bool","name":"isCreate","type":"bool"},{"components":[{"internalType":"uint8","name":"version","type":"uint8"},{"internalType":"uint32","name":"updatedAtBlock","type":"uint32"},{"internalType":"uint8","name":"triggerAbove","type":"uint8"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint48","name":"extra3","type":"uint48"},{"internalType":"uint128","name":"collateral","type":"uint128"},{"internalType":"uint128","name":"size","type":"uint128"},{"internalType":"uint128","name":"price","type":"uint128"},{"internalType":"uint128","name":"extra1","type":"uint128"},{"internalType":"uint64","name":"orderID","type":"uint64"},{"internalType":"uint64","name":"extra2","type":"uint64"},{"internalType":"uint128","name":"extra0","type":"uint128"},{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"internalType":"struct Order.Props","name":"_order","type":"tuple"},{"internalType":"uint256[]","name":"inputs","type":"uint256[]"}],"internalType":"struct MarketDataTypes.UpdateOrderInputs","name":"params","type":"tuple"}],"name":"getOrderFees","outputs":[{"internalType":"int256","name":"fees","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantAndRevoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"},{"internalType":"address","name":"fundingFee","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"uint256[]","name":"rates","type":"uint256[]"}],"name":"setFeeAndRates","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"}],"name":"setFeeVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"fundingFee","type":"address"}],"name":"setFundFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"uint256","name":"longSize","type":"uint256"},{"internalType":"uint256","name":"shortSize","type":"uint256"}],"name":"updateCumulativeFundingRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),C=function(e){M()(a,e);var t,n=I()(a);function a(e,t){return T()(this,a),n.call(this,e,t,k.Mt)}return w()(a,[{key:"getClassName",value:function(){return"FeeRouter"}},{key:"getAccountFees",value:(t=m()(y()().mark((function e(t){var n;return y()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",void 0);case 2:return e.next=4,this.call("getAccountFees",t);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),a}(n(66457).k),D=function(){var e=m()(y()().mark((function e(t,n,a){var r,i;return y()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new C(t,n),e.next=3,r.getAccountFees(a);case 3:return i=e.sent,e.abrupt("return",(0,v.dN)(i,18));case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),A=Object.defineProperty,P=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const Z=e=>u.createElement("svg",((e,t)=>{for(var n in t||(t={}))L.call(t,n)&&R(e,n,t[n]);if(P)for(var n of P(t))S.call(t,n)&&R(e,n,t[n]);return e})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.createElement("path",{d:"m9 16.5 4.5-4.5L9 7.5",stroke:"#fff",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));var z=n(58926),E=n(37432),F=n(98330),Y=n(22537),V="more___v_xdE",Q="card___ZViUB",B="tag___Ao9lP",G=n(38416),U=n.n(G),W=n(70215),H=n.n(W),J=n(27424),q=n.n(J),X=n(71230),$=n(15746),K=n(79536),ee=n(87004),te=n(77438),ne=n(36493),ae="card___oHb6E",re="titleText___J9yLo",ie="cardContent___NBZnP",se="xstr___dns5W",oe=n(86074),ue=["value","label","xstr"],le=function(){var e,t,n,a,s,u=(0,i.Ge)().account,l=(0,F.Z)().t,d=(0,c.ZP)(["getCompetitionPageInfos",u],(function(e){var t=q()(e,2),n=(t[0],t[1]);return(0,ee.I)(n)})),y=d.data;return(0,oe.jsxs)("div",{className:"bgc10 br16 "+ae,children:[(0,oe.jsxs)("div",{className:"c200 f16 "+re,children:[(0,oe.jsx)("span",{children:(0,oe.jsx)(p._H,{id:"Competitions"})}),(0,oe.jsx)(K.m,{className:"f14",startTime:null==y?void 0:y.startAt,endedTime:null==y?void 0:y.endedAt})]}),(0,oe.jsxs)(X.Z,{children:[[{label:l("Profit Rank"),value:(null==y||null===(e=y.user)||void 0===e?void 0:e.yourRankProfit)||"-",span:5,xs:12,md:5},{label:l("Profit"),value:(0,b.dp)(null==y||null===(t=y.user)||void 0===t?void 0:t.yourProfit,2).display({prefix:"$"})||"-",xs:12,md:5,span:5,xstr:!0},{label:l("Trade ROI Rank"),value:(null==y||null===(n=y.user)||void 0===n?void 0:n.yourRankRoi)||"-",span:5,xs:8,md:5},r()({label:l("Trade ROI"),value:(0,b.dp)(null==y||null===(a=y.user)||void 0===a?void 0:a.yourRoi).display({prefix:"",suffix:"%"})||"-",span:5},(0,ne.tq)()?{xs:{span:5,offset:3}}:{span:5})].map((function(e,t){var n=e.value,a=e.label,i=e.xstr,s=H()(e,ue);return(0,oe.jsx)($.Z,r()(r()({},s),{},{children:(0,oe.jsxs)("div",{className:o()("df fdc jcfe jcfs",ie,U()({},se,Boolean(i))),children:[(0,oe.jsx)("span",{className:"f18 c200 fw3",children:n}),(0,oe.jsx)("span",{className:"f14 c100",children:a})]})}),t)})),(0,oe.jsx)($.Z,{span:4,xs:8,md:4,children:(0,oe.jsxs)("div",{className:"df fdc jcfe jcfs tr "+ie,children:[(0,oe.jsx)("span",{className:"f18 cGreen fw3",children:(0,b.dp)(null==y||null===(s=y.user)||void 0===s?void 0:s.yourTotalPrize).display({prefix:"$"})}),(0,oe.jsx)("span",{className:"f14 c100",children:l("Prize")})]})})]}),(0,oe.jsx)("div",{children:(0,oe.jsx)(te.Z,{href:Y.BA.Competitions,type:"primary",style:{width:"120px"},children:(0,oe.jsx)(p._H,{id:"View"})})})]})},ce=n(96963),pe=n(38478),de={item:"item___FRv2D",tooltip:"tooltip___bOFO9",btn:"btn___fp2oa",primary:"primary___h3mfF",head:"head___J_JkM",content:"content___EqeXD",cell:"cell___NTsu9",fieldValue:"fieldValue___cZGhB",fieldName:"fieldName___weocJ",footer:"footer___Ir88b",icon:"icon___qyyhH",fee:"fee___t82Et",fundFeeInfo:"fundFeeInfo___KmcYB"},ye=function(){return(0,oe.jsxs)("div",{className:de.fundFeeInfo,children:[(0,oe.jsxs)("b",{children:[(0,oe.jsx)(p._H,{id:"Fund"}),(0,oe.jsx)(p._H,{id:"Fee"})]}),(0,oe.jsxs)("div",{children:[(0,oe.jsx)(p._H,{id:"fundFeeInfoP1"}),(0,oe.jsx)("br",{}),(0,oe.jsx)(p._H,{id:"fundFeeInfoP2"})]})]})},fe=function(e){var t=e.tradingData,n=(0,F.Z)().t,a=(0,E.x)().chainId===z.qF;return(0,oe.jsxs)(X.Z,{className:de.tradingInfo,gutter:24,children:[(0,oe.jsx)($.Z,{xs:24,lg:12,children:(0,oe.jsxs)("div",{className:de.item,children:[(0,oe.jsx)("div",{className:de.head,children:n("Trading Data")}),(0,oe.jsxs)(X.Z,{className:de.content,children:[(0,oe.jsxs)($.Z,{span:a?12:8,className:de.cell,children:[(0,oe.jsx)("div",{className:de.fieldValue,children:(0,b.dp)(null==t?void 0:t.totalVolume).display()}),(0,oe.jsx)("div",{className:de.fieldName,children:n("Total volume")})]}),!a&&(0,oe.jsxs)($.Z,{span:8,className:de.cell,children:[(0,oe.jsx)("div",{className:de.fieldValue,children:(0,b.dp)(null==t?void 0:t.feesPaid).display()}),(0,oe.jsx)("div",{className:de.fieldName,children:n("Fees Paid")})]}),(0,oe.jsxs)($.Z,{span:a?10:8,offset:a?2:0,className:de.cell,children:[(0,oe.jsx)("div",{className:de.fieldValue,children:(0,b.dp)(null==t?void 0:t.realizedPnl).display()}),(0,oe.jsx)("div",{className:de.fieldName,children:n("PNL")})]})]}),(0,oe.jsx)(te.Z,{className:de.footer,href:"/trade",children:n("Trade")})]})}),(0,oe.jsx)($.Z,{xs:24,lg:12,children:(0,oe.jsxs)("div",{className:de.item,children:[(0,oe.jsx)("div",{className:de.head,children:n("Trading Fees")}),(0,oe.jsxs)(X.Z,{className:de.content,children:[(0,oe.jsxs)($.Z,{span:12,className:de.cell,children:[(0,oe.jsx)("div",{className:de.fieldValue,children:"0.1000%"}),(0,oe.jsx)("div",{className:de.fieldName,children:n("Open/Close Fee")})]}),(0,oe.jsxs)($.Z,{span:10,offset:2,className:de.cell,children:[(0,oe.jsx)("div",{className:de.fieldValue,children:"0.0020% / 1h"}),(0,oe.jsx)(ce.Z,{overlayStyle:{maxWidth:420},placement:"topLeft",overlay:(0,oe.jsx)(ye,{}),children:(0,oe.jsxs)("div",{className:"".concat(de.fieldName," ").concat(de.fee),children:[n("Funding Fee")," ",(0,oe.jsx)(pe.r,{className:de.icon})]})})]})]}),(0,oe.jsx)(te.Z,{className:de.footer,type:"c20",href:Y.Ew.GitbookFeeStructure,children:n("Read More")})]})})]})},me=n(610),be=n.n(me);Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var ve=n(43680),he=n(74595),xe=n(82226),je=n(65334),ge=n(1403),Te=n(16330),Ne=n(70794),we="content___oCbRs",_e="mainText___omv2g",Me="pnlContainer____9bQB",Oe="pnl___A7Mzd",Ie="winRate____2WVz",ke="prices___xdV4Q",Ce="priceContainer___ioeHG",De="priceTitle___RSAFh",Ae="priceValue___s4toj",Pe=function(e){var t=e.userInfo;return(0,oe.jsxs)("div",{className:we,children:[(0,oe.jsx)("span",{className:_e,children:(0,oe.jsx)(p._H,{id:"IMakeTrades",values:{value:(0,oe.jsx)("b",{children:t.trades})}})}),(0,oe.jsxs)("div",{className:Me,children:[(0,oe.jsx)("span",{className:Oe,children:(0,oe.jsx)(p._H,{id:"Winrate"})}),(0,oe.jsx)("span",{className:Ie,children:null!=t&&t.winRate?(0,b.dp)((0,Ne.O)(null==t?void 0:t.winRate).multipliedBy(100)).display({prefix:"",suffix:"%"}):"-"})]}),(0,oe.jsx)("div",{className:ke,children:[{titleId:"profit",value:(0,b.dp)(null==t?void 0:t.avgProfit).display({prefix:"",suffix:"%"})},{titleId:"loss",value:(0,b.dp)(null==t?void 0:t.avgLoss).display({prefix:"",suffix:"%"})}].map((function(e){return(0,oe.jsxs)("div",{className:Ce,children:[(0,oe.jsxs)("span",{className:De,children:[(0,oe.jsx)(p._H,{id:"Average"})," ",(0,oe.jsx)(p._H,{id:e.titleId})]}),(0,oe.jsx)("span",{className:Ae,children:e.value})]},e.titleId)}))})]})},Le=n(90381),Se=function(e){var t,n=e.userInfo,a=(0,F.Z)().t,r=he.I.useContainer().setWalletVisible,s=(0,i.Ge)(),o=s.deactivate,l=s.account,c=(0,ge.E3)(z.p4).provider,d=(0,u.useCallback)((function(){(0,Te.VK)(),(0,Te.hL)(),o()}),[o]);var y=[{name:a("Trades"),value:null!==(t=null==n?void 0:n.trades)&&void 0!==t?t:"-"},{name:a("Winrate"),value:null!=n&&n.winRate?(0,b.dp)((0,b.Q6)(null==n?void 0:n.winRate).multipliedBy(100)).display({prefix:"",suffix:"%"}):"-"},{name:a("Average profit"),value:(0,b.dp)(null==n?void 0:n.avgProfit).display({prefix:"",suffix:"%"}),xsValue:10},{name:a("Average loss"),value:(0,b.dp)(null==n?void 0:n.avgLoss).display({prefix:"",suffix:"%"})}];return(0,oe.jsxs)(X.Z,{className:Le.Z.walletInfo,children:[(0,oe.jsx)($.Z,{xs:24,md:12,className:Le.Z.left,children:(0,oe.jsxs)(X.Z,{style:{width:"100%"},children:[(0,oe.jsx)($.Z,{flex:"100px",style:{height:80},children:l?(0,oe.jsx)(be(),{size:80,address:null!=l?l:"",provider:c}):(0,oe.jsx)("img",{className:Le.Z.avatar,src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjU2MyA0MC41YzAgMjEuMjI4IDE3LjIwOSAzOC40MzggMzguNDM3IDM4LjQzOCAyMS4yMjggMCAzOC40MzgtMTcuMjEgMzguNDM4LTM4LjQzOFM2MS4yMjcgMi4wNjIgNDAgMi4wNjIgMS41NjIgMTkuMjczIDEuNTYyIDQwLjVaTTQwIC41QzE3LjkwOS41IDAgMTguNDA5IDAgNDAuNXMxNy45MDkgNDAgNDAgNDAgNDAtMTcuOTA5IDQwLTQwUzYyLjA5MS41IDQwIC41WiIgZmlsbD0iIzFFMjEyNiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcuNTgyIDI4LjY4NEg0MGMwLTUuMzQtNC4wNi05LjY2OC05LjA2Ni05LjY2OEgxOC41MTZjMCA1LjMzOSA0LjA2IDkuNjY4IDkuMDY2IDkuNjY4Wk00MCAyOS43NThIMjcuNTgyYy01LjAwNiAwLTkuMDY2IDQuMzI5LTkuMDY2IDkuNjY4aDEyLjQxOGM1LjAwNiAwIDkuMDY2LTQuMzMgOS4wNjYtOS42NjhabTkuMDY2IDBoMTIuNDE4YzAgNS4zMzktNC4wNiA5LjY2OC05LjA2NiA5LjY2OEg0MGMwLTUuMzQgNC4wNi05LjY2OCA5LjA2Ni05LjY2OFptMC0xLjA3NGgxMi40MThjMC01LjM0LTQuMDYtOS42NjgtOS4wNjYtOS42NjhINDBjMCA1LjMzOSA0LjA2IDkuNjY4IDkuMDY2IDkuNjY4Wk0yNy41ODIgNTEuMjQySDQwYzAtNS4zMzktNC4wNi05LjY2OC05LjA2Ni05LjY2OEgxOC41MTZjMCA1LjM0IDQuMDYgOS42NjggOS4wNjYgOS42NjhaTTQwIDUyLjMxNkgyNy41ODJjLTUuMDA2IDAtOS4wNjYgNC4zMy05LjA2NiA5LjY2OGgxMi40MThjNS4wMDYgMCA5LjA2Ni00LjMyOSA5LjA2Ni05LjY2OFptOS4wNjYgMGgxMi40MThjMCA1LjM0LTQuMDYgOS42NjgtOS4wNjYgOS42NjhINDBjMC01LjMzOSA0LjA2LTkuNjY4IDkuMDY2LTkuNjY4Wm0wLTEuMDc0aDEyLjQxOGMwLTUuMzM5LTQuMDYtOS42NjgtOS4wNjYtOS42NjhINDBjMCA1LjM0IDQuMDYgOS42NjggOS4wNjYgOS42NjhaIiBmaWxsPSIjM0Y0NDRDIi8+PC9zdmc+"})}),(0,oe.jsx)($.Z,{className:Le.Z.h5Address,children:(0,oe.jsx)(ve.x,{isFull:!1,account:l})}),(0,oe.jsxs)($.Z,{className:Le.Z.details,flex:"auto",children:[(0,oe.jsx)(X.Z,{className:Le.Z.address,children:(0,oe.jsx)(ve.x,{isFull:!1,account:l})}),(0,oe.jsx)(X.Z,{className:Le.Z.cells,children:y.map((function(e,t){return(0,oe.jsxs)($.Z,{className:Le.Z.cell,lg:6,xs:e.xsValue||7,children:[(0,oe.jsx)("span",{className:Le.Z.fieldValue,children:e.value}),(0,oe.jsx)("span",{className:Le.Z.fieldName,children:e.name})]},t)}))})]})]})}),(0,oe.jsxs)($.Z,{xs:24,md:8,className:Le.Z.right,children:[l&&(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(xe.T,{title:a("Share"),downloadName:"".concat(Y.j$,"_share"),content:(0,oe.jsx)(Pe,{userInfo:n}),children:(0,oe.jsx)(te.Z,{disabled:!n,className:"".concat(Le.Z.shareBtn),children:(0,oe.jsx)(p._H,{id:"Share"})})}),(0,oe.jsx)(te.Z,{className:Le.Z.btn,type:"c30",onClick:function(){return d(),localStorage.removeItem(je.Cs),void localStorage.removeItem(je.Wr)},children:(0,oe.jsx)(p._H,{id:"Disconnect"})})]}),!l&&(0,oe.jsx)(te.Z,{className:Le.Z.btn,onClick:function(){return r(!0)},children:a("Connect wallet")})]})]})},Re=function(){var e=(0,i.Ge)(),t=e.account,n=e.library,a=(0,E.x)().chainId,s=(0,F.Z)().t,l=(0,c.ZP)(t,(function(e){return x(t||"",a)})).data,d=(0,c.ZP)([t],(function(){return j(t||"",a)})).data,y=(0,c.ZP)("getAccountFees",(function(){return D(n,a,t)})).data,f=(0,u.useMemo)((function(){return y?r()(r()({},d),{},{feesPaid:y}):d}),[y,d]);return(0,oe.jsxs)("div",{className:V,children:[(0,oe.jsx)(Se,{userInfo:l}),a!==z.qF&&(0,oe.jsx)(le,{}),(0,oe.jsx)(fe,{tradingData:f}),(0,oe.jsxs)("a",{href:Y.Ew.BugBounty,target:"_blank",className:o()(Q,"df jcsb f14 lh20"),children:[(0,oe.jsxs)("span",{className:"df aic f16 c200",children:[s("Bug Bounty"),(0,oe.jsx)("i",{className:B+" f14",children:"New"})]}),(0,oe.jsxs)("div",{className:"df aic c100",children:[s("Submit a Bug"),(0,oe.jsx)(Z,{className:"cp"})]})]}),(0,oe.jsxs)(p.rU,{to:"/more/analytics",className:o()(Q,"df jcsb f14 lh20 mt-24"),children:[(0,oe.jsx)("span",{className:"df aic c200",children:s("Analytics")}),(0,oe.jsx)(Z,{className:"cp"})]})]})},Ze=function(){return(0,oe.jsx)(l.Wh,{children:(0,oe.jsx)(Re,{})})}},52545:function(e,t,n){"use strict";n.d(t,{z:function(){return y}});var a,r,i,s=n(17061),o=n.n(s),u=n(17156),l=n.n(u),c=n(8433),p=n(87798),d=c.Z.create({baseURL:p.Fr,timeout:5e3}),y={getLocaleInfo:(i=l()(o()().mark((function e(t){var n,a;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.post("/infomation/limitedregion",{account:t});case 2:return n=e.sent,a=n.data,e.abrupt("return",null==a?void 0:a.data);case 5:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)}),getCompetitionInfo:(r=l()(o()().mark((function e(t){var n,a;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.post("/competition/getcompetition",{account:t});case 2:return n=e.sent,a=n.data,e.abrupt("return",null==a?void 0:a.data);case 5:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)}),getCompetitionList:(a=l()(o()().mark((function e(t){var n,a,r,i,s;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.isroi,a=t.page,r=t.size,e.next=3,d.post("/competition/getcompetitiondetail",{isroi:n,page:a,size:r});case 3:return i=e.sent,s=i.data,e.abrupt("return",null==s?void 0:s.data);case 6:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})}},87004:function(e,t,n){"use strict";n.d(t,{I:function(){return u},k:function(){return l}});var a=n(17061),r=n.n(a),i=n(17156),s=n.n(i),o=n(52545),u=function(){var e=s()(r()().mark((function e(t){var n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.z.getCompetitionInfo(t);case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",{endedAt:n.endedAt,prizePool:n.prizePool,startAt:n.startAt,trades:n.trades,totalVolume:Number(n.tradingVolume),user:{yourProfit:Number(n.yourProfit),yourRankTrade:Number(n.yourRankTrade),yourRankRoi:Number(n.yourRankRoi),yourTotalPrize:Number(n.yourRoiPrize)+Number(n.yourTradePrize),yourRoi:Number(n.yourRoi),yourRoiPrize:Number(n.yourRoiPrize),yourTradePrize:Number(n.yourTradePrize),yourTrades:Number(n.yourTrades),yourVolume:Number(n.yourVolume)}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=s()(r()().mark((function e(t){var n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.z.getCompetitionList(t);case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",n.rows.map((function(e){return{id:e.CompetitionSetModelID,account:e.account,cumCollateral:e.cumCollateral,profit:e.grossProfit,rank:t.isroi?e.rank_roi:e.rank_profit,ROI:e.roi,trades:e.trades,prize:t.isroi?e.prize_roi:e.prize_profit,reward:e.reward,cumSize:e.volume}})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},90381:function(e,t){"use strict";t.Z={walletInfo:"walletInfo___GORBE",avatar:"avatar___SFBQR",copy:"copy___lquiD",left:"left___J1Auj",right:"right___cW8mN",address:"address___WNk72",cells:"cells___ZDMOm",cell:"cell___Cu_Tk",fieldValue:"fieldValue___YJIFV",fieldName:"fieldName___E9D3z",btn:"btn___UEE1S",shareBtn:"shareBtn___KsWSb",primary:"primary___CrgyC",h5Address:"h5Address___F2MEi"}},15746:function(e,t,n){"use strict";var a=n(21584);t.Z=a.Z},71230:function(e,t,n){"use strict";var a=n(92820);t.Z=a.Z},20640:function(e,t,n){"use strict";var a=n(11742),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,s,o,u,l,c=!1;t||(t={}),n=t.debug||!1;try{if(s=a(),o=document.createRange(),u=document.getSelection(),(l=document.createElement("span")).textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(a){if(a.stopPropagation(),t.format)if(a.preventDefault(),void 0===a.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=r[t.format]||r.default;window.clipboardData.setData(i,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e);t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))})),document.body.appendChild(l),o.selectNodeContents(l),u.addRange(o),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");c=!0}catch(a){n&&console.error("unable to copy using execCommand: ",a),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),c=!0}catch(a){n&&console.error("unable to copy using clipboardData: ",a),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(o):u.removeAllRanges()),l&&document.body.removeChild(l),s()}return c}},74300:function(e,t,n){"use strict";function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=o(n(62435)),i=o(n(20640)),s=["text","onCopy","options","children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v(e);if(t){var r=v(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m(this,n)}}function m(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(u,e);var t,n,a,o=f(u);function u(){var e;p(this,u);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return h(b(e=o.call.apply(o,[this].concat(n))),"onClick",(function(t){var n=e.props,a=n.text,s=n.onCopy,o=n.children,u=n.options,l=r.default.Children.only(o),c=(0,i.default)(a,u);s&&s(a,c),l&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(t)})),e}return t=u,(n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=c(e,s),a=r.default.Children.only(t);return r.default.cloneElement(a,l(l({},n),{},{onClick:this.onClick}))}}])&&d(t.prototype,n),a&&d(t,a),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.default.PureComponent);t.CopyToClipboard=x,h(x,"defaultProps",{onCopy:void 0,options:void 0})},74855:function(e,t,n){"use strict";var a=n(74300).CopyToClipboard;a.CopyToClipboard=a,e.exports=a},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],a=0;a<e.rangeCount;a++)n.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);