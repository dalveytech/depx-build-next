"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[275],{74595:function(e,t,n){n.d(t,{I:function(){return p}});var a=n(27424),i=n.n(a),r=n(62435),s=n(88305),o=n(36493),u=n(22537),p=(0,s.f)((function(){var e=(0,r.useState)(!1),t=i()(e,2),n=t[0],a=t[1],s=(0,r.useState)([]),p=i()(s,2),l=p[0],y=p[1],d=(0,r.useState)(!1),c=i()(d,2),m=c[0],b=c[1],f=(0,r.useState)(!1),T=i()(f,2),h=T[0],v=T[1],x=(0,r.useState)(/iPad/i.test(navigator.userAgent)),w=i()(x,2),g=w[0],_=(w[1],(0,r.useState)(u.t4.Binance)),k=i()(_,2),C=k[0],M=k[1];return(0,r.useEffect)((function(){v((0,o.tq)())}),[window]),{pendingTxns:l,walletVisible:n,isIpad:g,setWalletVisible:a,setPendingTxns:y,tableFlag:m,setTableFlag:b,isMobile:h,platform:C,setPlatform:M}}))},77438:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(42122),i=n.n(a),r=n(38416),s=n.n(r),o=n(70215),u=n.n(o),p=n(94184),l=n.n(p),y=n(62435),d=n(3410),c={"dei-button":"dei-button___j8sPT","dei-button-small":"dei-button-small___KdNsA","dei-button-middle":"dei-button-middle___KSv19","dei-button-large":"dei-button-large___BjyGb","dei-button-primary":"dei-button-primary___WVGbB","dei-button-c10":"dei-button-c10___dMjVB","dei-button-c20":"dei-button-c20___lmIsv","dei-button-c30":"dei-button-c30___ES6_O","dei-button-c40":"dei-button-c40___Ue8iQ","dei-button-ghost":"dei-button-ghost___wRX7G",w100:"w100___QntK3",disabled:"disabled___bsAvV"},m=n(86074),b=["htmlType","size","onClick","children","className","disabled","type","href","block"],f=function(e){var t=e.htmlType,n=e.size,a=void 0===n?"middle":n,r=e.onClick,o=e.children,p=e.className,f=e.disabled,T=e.type,h=void 0===T?"primary":T,v=e.href,x=void 0===v?"":v,w=e.block,g=u()(e,b),_=(0,y.useMemo)((function(){var e;return l()(c["dei-button"],c["dei-button-".concat(a)],c["dei-button-".concat(h)],p,(e={},s()(e,c.disabled,f),s()(e,c.link,Boolean(x)),s()(e,c.w100,w),e))}),[a,p,f,h,x,w]),k=(0,y.useMemo)((function(){return 0===x.indexOf("https://")||0===x.indexOf("http://")}),[x]);return x?k?(0,m.jsx)("a",i()(i()({className:_,href:x,target:"_blank"},g),{},{children:o})):(0,m.jsx)(d.rU,i()(i()({className:_,to:x},g),{},{children:o})):(0,m.jsx)("button",i()(i()({onClick:r,className:_,disabled:f},g),{},{type:t,children:o}))}},69499:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(11355),i=n(82546),r=n(62435),s=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const y=e=>r.createElement("svg",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&l(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&l(e,n,t[n]);return e})({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("rect",{width:32,height:32,rx:16,fill:"#1E2126"}),r.createElement("path",{d:"m12 12 4 4m0 0 4-4m-4 4-4 4m4-4 4 4",stroke:"#78808E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));var d=n(98330),c=n(86074),m=function(e){var t=e.visible,n=e.title,s=e.width,o=e.onClose,u=e.maskClosable,p=void 0===u||u,l=e.children,m=e.className,b=e.mask,f=void 0===b||b,T=(0,d.Z)().t;return(0,c.jsx)(a.u,{appear:!0,show:t,as:r.Fragment,children:(0,c.jsxs)(i.V,{open:t,onClose:function(){p&&o()},className:"dialog",children:[(0,c.jsx)(a.u.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,c.jsx)("div",{className:"fixed ".concat(f?"inset-0":"inset-mask-false"," bg-black opacity-100")})}),(0,c.jsx)("div",{className:"fixed ".concat(f?"inset-0":"inset-mask-false"," overflow-y-auto"),children:(0,c.jsx)("div",{className:"panel-container flex min-h-full items-center justify-center p-4 text-center",children:(0,c.jsx)(a.u.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,c.jsxs)(i.V.Panel,{className:"dialog-panel transform overflow-hidden transition-all ".concat(null!=m?m:""),style:{width:s},children:[n&&(0,c.jsxs)(i.V.Title,{className:"dialog-title",children:[(0,c.jsxs)("span",{children:[T(n)," "]}),(0,c.jsx)(y,{onClick:function(){o()}})]}),l]})})})})]})})}},93879:function(e,t,n){var a=n(27424),i=n.n(a),r=n(34713),s=n(62435),o=n(16945);t.Z=function(){var e=(0,r.Ge)(),t=e.library,n=e.chainId,a=(0,s.useState)(null),u=i()(a,2),p=u[0],l=u[1];return(0,s.useEffect)((function(){if(t&&n){var e=new o.G(t,n);l(e)}}),[t,n]),p}},16945:function(e,t,n){n.d(t,{G:function(){return f}});var a=n(17061),i=n.n(a),r=n(17156),s=n.n(r),o=n(56690),u=n.n(o),p=n(89728),l=n.n(p),y=n(61655),d=n.n(y),c=n(26389),m=n.n(c),b=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"sizeDelta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"marginFeeBasisPoints","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"referralCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"DecreasePositionReferral","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"},{"indexed":false,"internalType":"address","name":"newAccount","type":"address"}],"name":"GovSetCodeOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"sizeDelta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"marginFeeBasisPoints","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"referralCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"IncreasePositionReferral","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"RegisterCode","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"newAccount","type":"address"},{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"SetCodeOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"discountShare","type":"uint256"}],"name":"SetReferrerDiscountShare","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"tierId","type":"uint256"}],"name":"SetReferrerTier","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tierId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalRebate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"discountShare","type":"uint256"}],"name":"SetTier","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"SetTraderReferralCode","type":"event"},{"inputs":[],"name":"BASIS_POINTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_CODE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"codeOwners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"_codes","type":"bytes32[]"}],"name":"getCodeOwners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getHooksCalls","outputs":[{"components":[{"internalType":"bool","name":"updatePosition","type":"bool"},{"internalType":"bool","name":"updateOrder","type":"bool"},{"internalType":"bool","name":"deleteOrder","type":"bool"}],"internalType":"struct MarketCallBackIntl.Calls","name":"","type":"tuple"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getTraderReferralInfo","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"},{"internalType":"address","name":"_newAccount","type":"address"}],"name":"govSetCodeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantAndRevoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrerDiscountShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrerTiers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"registerCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"},{"internalType":"address","name":"_newAccount","type":"address"}],"name":"setCodeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_discountShare","type":"uint256"}],"name":"setReferrerDiscountShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"},{"internalType":"uint256","name":"_tierId","type":"uint256"}],"name":"setReferrerTier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tierId","type":"uint256"},{"internalType":"uint256","name":"_totalRebate","type":"uint256"},{"internalType":"uint256","name":"_discountShare","type":"uint256"}],"name":"setTier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"setTraderReferralCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"setTraderReferralCodeByUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tiers","outputs":[{"internalType":"uint256","name":"totalRebate","type":"uint256"},{"internalType":"uint256","name":"discountShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"traderReferralCodes","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"uint256","name":"_oraclePrice","type":"uint256"},{"internalType":"bool","name":"isOpen","type":"bool"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_slippage","type":"uint256"},{"internalType":"bool","name":"_isExec","type":"bool"},{"internalType":"uint8","name":"liqState","type":"uint8"},{"internalType":"uint64","name":"_fromOrder","type":"uint64"},{"internalType":"bytes32","name":"_refCode","type":"bytes32"},{"internalType":"uint256","name":"collateralDelta","type":"uint256"},{"internalType":"uint8","name":"execNum","type":"uint8"},{"internalType":"uint256[]","name":"inputs","type":"uint256[]"}],"internalType":"struct MarketDataTypes.UpdatePositionInputs","name":"inputs","type":"tuple"},{"components":[{"internalType":"address","name":"market","type":"address"},{"internalType":"bool","name":"isLong","type":"bool"},{"internalType":"uint32","name":"lastTime","type":"uint32"},{"internalType":"uint216","name":"extra3","type":"uint216"},{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"uint256","name":"collateral","type":"uint256"},{"internalType":"uint256","name":"averagePrice","type":"uint256"},{"internalType":"int256","name":"entryFundingRate","type":"int256"},{"internalType":"int256","name":"realisedPnl","type":"int256"},{"internalType":"uint256","name":"extra0","type":"uint256"},{"internalType":"uint256","name":"extra1","type":"uint256"},{"internalType":"uint256","name":"extra2","type":"uint256"}],"internalType":"struct Position.Props","name":"position","type":"tuple"},{"internalType":"int256[]","name":"fees","type":"int256[]"},{"internalType":"address","name":"collateralToken","type":"address"},{"internalType":"address","name":"indexToken","type":"address"},{"internalType":"int256","name":"collateralDeltaAfter","type":"int256"}],"internalType":"struct MarketPositionCallBackIntl.UpdatePositionEvent","name":"_event","type":"tuple"}],"name":"updatePositionCallback","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),f=function(e){d()(o,e);var t,n,a,r=m()(o);function o(e,t){return u()(this,o),r.call(this,e,t,b.Mt)}return l()(o,[{key:"getClassName",value:function(){return"Referral"}},{key:"getCodeOwners",value:(a=s()(i()().mark((function e(t){var n;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getCodeOwners",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"registerCode",value:function(e){return this.call("registerCode",e)}},{key:"setTraderReferralCodeByUser",value:(n=s()(i()().mark((function e(t){return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.send("setTraderReferralCodeByUser",[t]));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"getTraderReferralInfo",value:(t=s()(i()().mark((function e(t){var n;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getTraderReferralInfo",t);case 2:return n=e.sent,e.abrupt("return",n[0]);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"DEFAULT_CODE",value:function(){return this.call("DEFAULT_CODE")}}]),o}(n(66457).k)},77550:function(e,t,n){n.d(t,{Do:function(){return d},Nb:function(){return l},eI:function(){return m},oE:function(){return c}});var a=n(27424),i=n.n(a),r=n(20238),s=n(86237),o=n(62435),u=n(95591),p=n(93879),l="reffer_code",y=/^0x[0-9a-f]{64}$/;function d(e){var t=e.replace(/[^\w_]/g,"");return t.length>20?r.Rr:s.s(t)}function c(e){try{return s.F(e)}catch(a){var t="";e=e.substring(2);for(var n=0;n<32;n++)t+=String.fromCharCode(parseInt(e.substring(2*n,2*n+2),16));return t.trim()}}function m(e,t){var n=(0,p.Z)(),a=(0,u.ZP)(t&&n&&["ReferralStorage",e,"traderReferralCodes",t],{fetcher:function(){return n.getTraderReferralInfo(t)}}).data,r=(0,u.ZP)(t&&n&&"contract.DEFAULT_CODE",{fetcher:function(){return n.DEFAULT_CODE()}}).data,s=window.localStorage.getItem(l)||"",d=(0,u.ZP)(s&&y.test(s)?["localStorageCode",s]:null,{fetcher:function(){return n.getCodeOwners([s,r])}}).data,m=(0,o.useMemo)((function(){return a&&"0x0000000000000000000000000000000000000000000000000000000000000000"!==a?[!0,a,c(a)]:d&&"0x0000000000000000000000000000000000000000"!==s?[!0,s,c(s)]:[!1,r,c(r||"")]}),[s,a,r]),b=i()(m,3);return{userHasReferrerCode:b[0],userReferrerCode:b[1],userReferrerCodeString:b[2]}}},22537:function(e,t,n){n.d(t,{$c:function(){return d},BA:function(){return y},Ew:function(){return a},OY:function(){return l},R7:function(){return u},SQ:function(){return s},WG:function(){return i},j$:function(){return p},qL:function(){return o},t4:function(){return r}});var a,i,r,s,o="https://blex.io",u="https://test.blex.io/#/trade",p="Blex.io",l="BLEX | Decentralized Perpetual Exchange";!function(e){e.GitbookFeeStructure="https://blex.gitbook.io/blex/whitepaper/fee-structure",e.AVAXNetworkTest="https://faucet.avax.network/",e.ETHNetworkTest="https://faucet.quicknode.com/arbitrum/goerli/",e.TokenEconomyUsdblp="https://blex.gitbook.io/blex/whitepaper/token-economy-v1.0/usdblp",e.WhitePaperReferrals="https://blex.gitbook.io/blex/whitepaper/referrals",e.WhitePaperMediaKit="https://blex.gitbook.io/blex/whitepaper/media-kit",e.BlexTermsAndConditions="https://blex.medium.com/blex-terms-and-conditions-9b61881c58ea",e.BugBounty="https://blex.gitbook.io/blex/bug-bounty",e.Desc="https://blex.gitbook.io/blex/"}(a||(a={})),function(e){e.Twitter="https://twitter.com/Blex_io",e.Medium="https://medium.com/@blex",e.Discord="https://discord.gg/DsnRrGAzVN",e.Telegram="https://t.me/bestblex",e.Github="https://github.com/dalveytech/blex-contract",e.Docs="https://blex.gitbook.io/blex"}(i||(i={})),function(e){e.Binance="binance",e.BinanceUS="binanceus",e.Bitmart="bitmart"}(r||(r={})),function(e){e.English="en-US",e.Japanese="ja-JP",e.French="fr-FR"}(s||(s={}));var y={Overview:"/overview",Competitions:"/more/competitions"},d={HiddenLimitDistrictModal:"hidden-limit-district-modal"}}}]);