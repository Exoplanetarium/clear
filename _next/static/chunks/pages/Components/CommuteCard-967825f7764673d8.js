(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[764],{2206:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Components/CommuteCard",function(){return r(2047)}])},5157:function(e,t,r){"use strict";r.d(t,{IQ:function(){return i},ZP:function(){return l},t8:function(){return c},vQ:function(){return a}});var n=r(5893),o=r(7294);let a=o.createContext(),c=o.createContext(),i=o.createContext();function l(e){let{children:t}=e,[r,l]=(0,o.useState)(0),[s,u]=(0,o.useState)(""),[_,m]=(0,o.useState)(""),[d,f]=(0,o.useState)(0),[p,h]=(0,o.useState)(""),[g,H]=(0,o.useState)(0),[b,y]=(0,o.useState)(0),[C,v]=(0,o.useState)(""),[x,k]=(0,o.useState)("");return(0,n.jsx)(a.Provider,{value:{milesDaily:r,setMilesDaily:l,daysPerWeek:s,setDaysPerWeek:u,methodTravel:_,setMethodTravel:m},children:(0,n.jsx)(c.Provider,{value:{percentLocal:d,setPercentLocal:f,redMeat:p,setRedMeat:h,foodSaved:g,setFoodSaved:H},children:(0,n.jsx)(i.Provider,{value:{electricityBill:b,setElectricityBill:y,homeType:C,setHomeType:v,heatingCoEff:x,setHeatingCoEff:k},children:t})})})}},2047:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893),o=r(4871),a=r.n(o),c=r(7294),i=r(3649),l=r(5157),s=r(2601),u=r(2033),_=r(9603),m=r(9417);function d(e){let{milesDaily:t,setMilesDaily:r,daysPerWeek:o,setDaysPerWeek:d,methodTravel:f,setMethodTravel:p}=(0,c.useContext)(l.vQ),[h,g]=(0,c.useState)([]);console.log((0,c.useContext)(l.vQ));let H=e.pageNumber,b=e=>{p(t=>e===t?"":e)};return(0,c.useEffect)(()=>{let e=()=>{let e=document.querySelector(".customSlider");if(e){let t=e.clientWidth,r=document.querySelectorAll(".customSlider-mark"),n=Array.from(r).map(e=>{let r=e.getBoundingClientRect(),n=e.closest(".customSlider").getBoundingClientRect(),o=(r.left-n.left)/t*100;return o});g(n)}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),(0,n.jsxs)("div",{className:a().commuteArea,children:[0==H?(0,n.jsxs)("div",{className:a().commuteCard,children:[(0,n.jsx)("div",{className:a().commuteCardHeader,children:(0,n.jsx)("p",{children:"How many miles do you travel every day?"})}),(0,n.jsxs)("div",{className:a().commuteCardInfo,children:[(0,n.jsx)("div",{className:"customSlider-values",children:h.map((e,r)=>(0,n.jsx)("div",{className:"customSlider-value".concat(10*r===t?" active":""),style:{left:"calc(".concat(e,"% - ").concat(0===r?0:-1,"px)")},children:10*r},r))}),(0,n.jsx)(i.Z,{className:"customSlider",trackClassName:"customSlider-track",thumbClassName:"customSlider-thumb",markClassName:"customSlider-mark",marks:10,min:0,max:100,step:10,defaultValue:0,value:t,onChange:r,renderMark:e=>(e.key<=t?e.className="customSlider-mark customSlider-mark-before":e.className="customSlider-mark",(0,n.jsx)("span",{...e}))})]})]}):null,1==H?(0,n.jsxs)("div",{className:a().commuteCard,style:{padding:"2rem"},children:[(0,n.jsx)("div",{className:a().commuteCardHeader,children:(0,n.jsx)("p",{children:"Out of the week, how many days do you travel?"})}),(0,n.jsxs)("div",{className:a().commuteCardInfo,style:{paddingTop:"0px"},children:[(0,n.jsx)("div",{className:"customSlider-values",children:h.map((e,t)=>(0,n.jsx)("div",{className:"customSlider-value".concat(t===o?" active":""),style:{left:"calc(".concat(e,"% - ").concat(0===t?0:-1,"px)")},children:t},t))}),(0,n.jsx)(i.Z,{className:"customSlider",trackClassName:"customSlider-track",thumbClassName:"customSlider-thumb",markClassName:"customSlider-mark",marks:1,min:0,max:7,step:1,defaultValue:0,value:o,onChange:d,renderMark:e=>(e.key<=o?e.className="customSlider-mark customSlider-mark-before":e.className="customSlider-mark",(0,n.jsx)("span",{...e}))})]})]}):null,2==H?(0,n.jsxs)("div",{className:a().commuteCard,children:[(0,n.jsx)("div",{className:a().commuteCardHeader,children:(0,n.jsxs)("p",{children:["What mode of transportation ",(0,n.jsx)("br",{})," do you primarily use?"]})}),(0,n.jsx)("div",{className:a().commuteCardInfo,style:{paddingTop:"0px"},children:(0,n.jsxs)(s.Z,{className:a().buttonGroup,style:{width:"fit-content"},children:[(0,n.jsxs)(u.Z,{onClick:()=>b("gasCar"),appearance:f.includes("gasCar")?"primary":"ghost",children:[(0,n.jsx)(_.G,{icon:m.q16,style:f.includes("gasCar")?{color:"#ffffff",marginRight:"10px"}:{color:"#172a4a",marginRight:"10px"}},f),"Gasoline Car"]},"gasCar"),(0,n.jsxs)(u.Z,{onClick:()=>b("elecCar"),appearance:f.includes("elecCar")?"primary":"ghost",children:[(0,n.jsx)(_.G,{icon:m.BDt,style:f.includes("elecCar")?{color:"#ffffff",marginRight:"10px"}:{color:"#172a4a",marginRight:"10px"}},f),"Electric Car"]},"elecCar"),(0,n.jsxs)(u.Z,{onClick:()=>b("bus"),appearance:f.includes("bus")?"primary":"ghost",children:[(0,n.jsx)(_.G,{icon:m.k0d,style:f.includes("bus")?{color:"#ffffff",marginRight:"10px"}:{color:"#172a4a",marginRight:"10px"}},f),"Bus"]},"bus"),(0,n.jsxs)(u.Z,{onClick:()=>b("train"),appearance:f.includes("train")?"primary":"ghost",children:[(0,n.jsx)(_.G,{icon:m.DdW,style:f.includes("train")?{color:"#ffffff",marginRight:"10px"}:{color:"#172a4a",marginRight:"10px"}},f),"Train"]},"train"),(0,n.jsxs)(u.Z,{onClick:()=>b("bike"),appearance:f.includes("bike")?"primary":"ghost",children:[(0,n.jsx)(_.G,{icon:m._Vg,style:f.includes("bike")?{color:"#ffffff",marginRight:"10px"}:{color:"#172a4a",marginRight:"10px"}},f),"Bicycle"]},"bike"),(0,n.jsxs)(u.Z,{onClick:()=>b("walk"),appearance:f.includes("walk")?"primary":"ghost",children:[(0,n.jsx)(_.G,{icon:m.nlx,style:f.includes("walk")?{color:"#ffffff",marginRight:"10px"}:{color:"#172a4a",marginRight:"10px"}},f),"Walking"]},"walk")]})})]}):null]})}r(9844),r(7680)},4871:function(e){e.exports={main:"Home_main__VkIEL",header:"Home_header__y2QYS",headerAuth:"Home_headerAuth__MZerp",headerImage:"Home_headerImage__cCFp_",carbon:"Home_carbon__AIOo_",carbonHeader:"Home_carbonHeader__Fc1u0",carbonSub:"Home_carbonSub__3CHu4",carbonButton:"Home_carbonButton__eMG4Z",carbonSelect:"Home_carbonSelect__BvCly",carbonCard:"Home_carbonCard__h1V_d",carbonCardHeader:"Home_carbonCardHeader__WSipi",stepWrap:"Home_stepWrap__3slkN",stepHeader:"Home_stepHeader__Uhgyy",stepBody:"Home_stepBody__bD9ab",stepOne:"Home_stepOne__iT3L8",stepTwo:"Home_stepTwo__YxJLj",stepThree:"Home_stepThree__spoO1",steps:"Home_steps__hbS9k",calculatorWrap:"Home_calculatorWrap__7IZjD",calculatorTab:"Home_calculatorTab__wuRRW",calculatorArea:"Home_calculatorArea__87G3Y",commuteArea:"Home_commuteArea__obQpO",commuteCard:"Home_commuteCard__d_Dub",funFactText:"Home_funFactText__hIkT5",commuteCardHeader:"Home_commuteCardHeader__3Xede",commuteCardInfo:"Home_commuteCardInfo__TKMww",commuteCalculations:"Home_commuteCalculations__Zd7er",carbonCalculations:"Home_carbonCalculations__UVezB",countUp:"Home_countUp__mVYTK",calculationCard:"Home_calculationCard__rqj9b",resultArea:"Home_resultArea__OH1_M",animationWrapper:"Home_animationWrapper__BJucd",circle:"Home_circle__phm3R",circle1:"Home_circle1__n3u_T",circle1Animation:"Home_circle1Animation__4mqkE",circle2:"Home_circle2__0FHsy",circle2Animation:"Home_circle2Animation__jXk9M",circle3:"Home_circle3__CY_wd",circle3Animation:"Home_circle3Animation__a9T62",pMarginBottom:"Home_pMarginBottom__Z87tW",pMarginTop:"Home_pMarginTop__WWX0i",result:"Home_result__kTSSh",nextButton:"Home_nextButton__r_Kss",nextButtonArea:"Home_nextButtonArea__YSz1o",nextButtonAreaTransparent:"Home_nextButtonAreaTransparent__L5ye_",backButton:"Home_backButton__kEp3f",backButtonArea:"Home_backButtonArea__KqerP",backButtonAreaTransparent:"Home_backButtonAreaTransparent__0o6_G",backToCalculator:"Home_backToCalculator__iZIfn",otherButtonGroup:"Home_otherButtonGroup__QWX4T",buttonGroup:"Home_buttonGroup__KGCaj",carbonActionCard:"Home_carbonActionCard__Br9Fy",yellowCircleContainer:"Home_yellowCircleContainer__a77GJ",yellowCircle:"Home_yellowCircle__nWViI",yellowCircle1:"Home_yellowCircle1__48Kbg",yellowCircle2:"Home_yellowCircle2__6xUyN",yellowCircle3:"Home_yellowCircle3__esnbk",newsletterSection:"Home_newsletterSection__GyV9r",goalSettingSection:"Home_goalSettingSection__Jrruo",goalSettingCheckbox:"Home_goalSettingCheckbox__DpcM8",goalSettingCheckboxGroup:"Home_goalSettingCheckboxGroup__Ta0qV",improvementHeader:"Home_improvementHeader__459AF",newsletterHeader:"Home_newsletterHeader__580_N",goalSettingHeader:"Home_goalSettingHeader__Vn1Q9",goalSettingHeaderCond:"Home_goalSettingHeaderCond__m5ryX",newsletterInput:"Home_newsletterInput__MpMqG",suggestionItem:"Home_suggestionItem__rWVlD",goalSettingSubHeader:"Home_goalSettingSubHeader__D1l_V",goalCheckboxGroup:"Home_goalCheckboxGroup__SQtIB",allChecked:"Home_allChecked__x7wLj",haloEffect:"Home_haloEffect__AVM4e",scrollArrow:"Home_scrollArrow__mbk0v",hidden:"Home_hidden__RZvqD",goalItem:"Home_goalItem__s6Vm4",checked:"Home_checked__F6Ngz",authEmail:"Home_authEmail__LfyZ0",authPassword:"Home_authPassword__r_4mm",authCard:"Home_authCard__9RpTP",authButton:"Home_authButton__BFB2m",loginButton:"Home_loginButton__Hqu1n",signinButton:"Home_signinButton__Et4PO",signOutButton:"Home_signOutButton__c4m2c",saveButton:"Home_saveButton__brDLg",saveModal:"Home_saveModal__VZaMD",loadButton:"Home_loadButton__i1hGv",chartContainer:"Home_chartContainer__5eFbK",greenCircle:"Home_greenCircle__16ayS",greenCircle1:"Home_greenCircle1__HK3wN",greenCircle2:"Home_greenCircle2__CVk7H",greenCircle3:"Home_greenCircle3__be8El",emissionsChart:"Home_emissionsChart__cRG_8",chartHeader:"Home_chartHeader__y4oqD",loadingGoalsSection:"Home_loadingGoalsSection__gxa_h",loadingGoals:"Home_loadingGoals__fTXgJ",loadingGoalsHeader:"Home_loadingGoalsHeader__q8wJ7",pulsatingCircle:"Home_pulsatingCircle__8h123","pulse-ring":"Home_pulse-ring__54ZiR","pulse-dot":"Home_pulse-dot__4YOCm",menuLabel:"Home_menuLabel__OsoEZ",menu:"Home_menu__3OELA",hamburger:"Home_hamburger__XTGnS",check:"Home_check__9ReJh",menuList:"Home_menuList__L6dJB",menuLink:"Home_menuLink__sccAx",card:"Home_card__E5spL",thirteen:"Home_thirteen__sqGDr",content:"Home_content__tkQPU",grid:"Home_grid__AVljO",center:"Home_center__O_TIN",description:"Home_description__uXNdx",vercelLogo:"Home_vercelLogo___BVuc",logo:"Home_logo__IOQAX",rotate:"Home_rotate__c5eru"}},9844:function(e,t,r){"use strict";r.d(t,{e:function(){return _}});var n=r(7294);function o(e,t,r,n){return new(r||(r=Promise))(function(o,a){function c(e){try{l(n.next(e))}catch(e){a(e)}}function i(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(c,i)}l((n=n.apply(e,t||[])).next())})}function a(e,t){var r,n,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,n=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}function c(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)c.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return c}function l(e,t,r){if(r||2==arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function s(e,t,r,n,s){for(var _=[],m=5;m<arguments.length;m++)_[m-5]=arguments[m];return o(this,void 0,void 0,function(){var m,d,f,p,h;return a(this,function(g){switch(g.label){case 0:g.trys.push([0,12,13,14]),d=(m=c(_)).next(),g.label=1;case 1:if(d.done)return[3,11];switch(typeof(f=d.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,function(e,t,r,n,s,_){return o(this,void 0,void 0,function(){var m,d;return a(this,function(f){switch(f.label){case 0:var p,h;return p=m=e.textContent||"",h=i(r).slice(0),d=l(l([],i(p),!1),[NaN],!1).findIndex(function(e,t){return h[t]!==e}),[4,function(e,t,r,n,l){return o(this,void 0,void 0,function(){var o,s,_,m,d,f,p,h,g,H,b,y;return a(this,function(C){switch(C.label){case 0:if(o=t,l){for(s=0,_=1;_<t.length;_++)if(d=(m=i([t[_-1],t[_]],2))[0],(f=m[1]).length>d.length||""===f){s=_;break}o=t.slice(s,t.length)}C.label=1;case 1:C.trys.push([1,6,7,8]),h=(p=c(function(e){var t,r,n,o,i,l;return a(this,function(s){switch(s.label){case 0:t=function(e){return a(this,function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame(function(){return t.textContent=e})},opCode:function(t){var r=t.textContent||"";return""===e||r.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}})},s.label=1;case 1:s.trys.push([1,6,7,8]),n=(r=c(e)).next(),s.label=2;case 2:return n.done?[3,5]:(o=n.value,[5,t(o)]);case 3:s.sent(),s.label=4;case 4:return n=r.next(),[3,2];case 5:return[3,8];case 6:return i={error:s.sent()},[3,8];case 7:try{n&&!n.done&&(l=r.return)&&l.call(r)}finally{if(i)throw i.error}return[7];case 8:return[2]}})}(o))).next(),C.label=2;case 2:return h.done?[3,5]:(H="WRITING"===(g=h.value).opCode(e)?r+r*(Math.random()-.5):n+n*(Math.random()-.5),g.op(e),[4,u(H)]);case 3:C.sent(),C.label=4;case 4:return h=p.next(),[3,2];case 5:return[3,8];case 6:return b={error:C.sent()},[3,8];case 7:try{h&&!h.done&&(y=p.return)&&y.call(p)}finally{if(b)throw b.error}return[7];case 8:return[2]}})})}(e,l(l([],i(function(e,t,r){var n,o;return void 0===r&&(r=0),a(this,function(a){switch(a.label){case 0:o=(n=t(e)).length,a.label=1;case 1:return o>r?[4,n.slice(0,--o).join("")]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}})}(m,t,d)),!1),i(function(e,t,r){var n,o;return void 0===r&&(r=0),a(this,function(a){switch(a.label){case 0:o=(n=t(e)).length,a.label=1;case 1:return r<o?[4,n.slice(0,++r).join("")]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}})}(r,t,d)),!1),n,s,_)];case 1:return f.sent(),[2]}})})}(e,t,f,r,n,s)];case 3:case 5:case 7:return g.sent(),[3,10];case 4:return[4,u(f)];case 6:return[4,f.apply(void 0,l([e,t,r,n,s],i(_),!1))];case 8:return[4,f];case 9:g.sent(),g.label=10;case 10:return d=m.next(),[3,1];case 11:return[3,14];case 12:return p={error:g.sent()},[3,14];case 13:try{d&&!d.done&&(h=m.return)&&h.call(m)}finally{if(p)throw p.error}return[7];case 14:return[2]}})})}function u(e){return o(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return[4,new Promise(function(t){return setTimeout(t,e)})];case 1:return t.sent(),[2]}})})}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var _=(0,n.memo)((0,n.forwardRef)(function(e,t){var r=e.sequence,o=e.repeat,a=e.className,c=e.speed,u=void 0===c?40:c,_=e.deletionSpeed,m=e.omitDeletionAnimation,d=void 0!==m&&m,f=e.preRenderFirstString,p=e.wrapper,h=e.splitter,g=void 0===h?function(e){return l([],i(e),!1)}:h,H=e.cursor,b=void 0===H||H,y=e.style,C=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),v=C["aria-label"],x=C["aria-hidden"],k=C.role;_||(_=u);var S=[,,].fill(40);[u,_].forEach(function(e,t){switch(typeof e){case"number":S[t]=Math.abs(e-100);break;case"object":var r=e.type,n=e.value;if("number"!=typeof n)break;"keyStrokeDelayInMs"===r&&(S[t]=n)}});var w,j,N,B,A,T,G,E,R=S[0],I=S[1],O=(void 0===w&&(w=null),j=(0,n.useRef)(w),(0,n.useEffect)(function(){t&&("function"==typeof t?t(j.current):t.current=j.current)},[t]),j),M="index-module_type__E-SaG";N=a?"".concat(b?M+" ":"").concat(a):b?M:"",B=(0,n.useRef)(function(){var e,t=r;o===1/0?e=s:"number"==typeof o&&(t=Array(1+o).fill(r).flat());var n=e?l(l([],i(t),!1),[e],!1):l([],i(t),!1);return s.apply(void 0,l([O.current,g,R,I,d],i(n),!1)),function(){O.current}}),A=(0,n.useRef)(),T=(0,n.useRef)(!1),G=(0,n.useRef)(!1),E=i((0,n.useState)(0),2)[1],T.current&&(G.current=!0),(0,n.useEffect)(function(){return T.current||(A.current=B.current(),T.current=!0),E(function(e){return e+1}),function(){G.current&&A.current&&A.current()}},[]);var L=void 0!==f&&f?r.find(function(e){return"string"==typeof e})||"":null;return n.createElement(void 0===p?"span":p,{"aria-hidden":x,"aria-label":v,role:k,style:y,className:N,children:v?n.createElement("span",{"aria-hidden":"true",ref:O,children:L}):L,ref:v?void 0:O})}),function(e,t){return!0})}},function(e){e.O(0,[810,976,165,603,763,792,774,888,179],function(){return e(e.s=2206)}),_N_E=e.O()}]);