(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[721],{5157:function(e,t,r){"use strict";r.d(t,{IQ:function(){return _},ZP:function(){return s},t8:function(){return c},vQ:function(){return n}});var o=r(5893),a=r(7294);let n=a.createContext(),c=a.createContext(),_=a.createContext();function s(e){let{children:t}=e,[r,s]=(0,a.useState)(0),[l,i]=(0,a.useState)(""),[m,u]=(0,a.useState)(""),[d,H]=(0,a.useState)(0),[p,h]=(0,a.useState)(""),[g,C]=(0,a.useState)(0),[b,x]=(0,a.useState)(0),[f,v]=(0,a.useState)(""),[S,w]=(0,a.useState)("");return(0,o.jsx)(n.Provider,{value:{milesDaily:r,setMilesDaily:s,daysPerWeek:l,setDaysPerWeek:i,methodTravel:m,setMethodTravel:u},children:(0,o.jsx)(c.Provider,{value:{percentLocal:d,setPercentLocal:H,redMeat:p,setRedMeat:h,foodSaved:g,setFoodSaved:C},children:(0,o.jsx)(_.Provider,{value:{electricityBill:b,setElectricityBill:x,homeType:f,setHomeType:v,heatingCoEff:S,setHeatingCoEff:w},children:t})})})}},7721:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var o=r(5893),a=r(4871),n=r.n(a),c=r(7294),_=r(5157),s=r(6887),l=r(5152),i=r.n(l),m=r(2033),u=r(8430),d=r(1259),H=r(9828);r(5359),r(7680);var p=r(9230);let h=i()(()=>r.e(857).then(r.bind(r,7857)),{loadableGenerated:{webpack:()=>[7857]},ssr:!1}),g=(0,H.ad)();function C(e){let{milesDaily:t,setMilesDaily:r,daysPerWeek:a,setDaysPerWeek:l,methodTravel:i,setMethodTravel:C}=(0,c.useContext)(_.vQ),{percentLocal:b,setPercentLocal:x,redMeat:f,setRedMeat:v,foodSaved:S,setFoodSaved:w}=(0,c.useContext)(_.t8),{electricityBill:y,setElectricityBill:j,homeType:k,setHomeType:B,heatingCoEff:A,setHeatingCoEff:T}=(0,c.useContext)(_.IQ),[N,I]=(0,c.useState)(0),[G,L]=(0,c.useState)(!1),E=e=>{switch(e){case"gasCar":return 386.4;case"elecCar":return 225.24;case"bus":return 177;case"train":return 106.6;default:return 0}},M=e=>{switch(e){case"never":default:return 0;case"everyMeal":return 9e3;case"once":return 3e3;case"severalPerWeek":return 1500;case"severalPerMonth":return 750}},F=e=>{switch(e){case"detached":return 25;case"attached":case"mobile":return 20;case"smallApt":return 15;case"largeApt":return 10;default:return 0}},Y=e=>{switch(e){case"detached":return .6;case"attached":return .5;case"smallApt":return .4;case"largeApt":return .3;case"mobile":return .55;default:return 0}},D=e=>{switch(e){case"never":return .1;case"fewHours":return .25;case"mostHours":return .75;case"allDay":return 1;default:return 0}},O=(e,t,r)=>E(r)*e*t*52/1e6,V=(e,t,r)=>{let o;let a=(o=0+365*M(t)+(73e4*(.01*e)*.5+73e4*(1-.01*e)*5))*(.01*r);return o+=a,o/=1e6},W=(e,t,r)=>{let o=F(t)*D(r);return((0+e/.27*4784.4)*(1-Y(t))+398.7*o*Y(t))/1e6},Z=()=>O(t,a,i)+V(b,f,S)+W(y,k,A),P=()=>Math.round(10*((14.6-Z())/14.6*100))/10;async function z(){let e=(0,d.v0)(),t=e.currentUser;if(t){let e=(0,H.JU)(g,"users",t.uid),r={timestamp:new Date,value:N};try{await (0,H.pl)((0,H.JU)(e,"emissions",r.timestamp.toISOString()),r),console.log("Data saved successfully")}catch(e){console.error("Error saving emission data: ",e)}}else console.error("No user logged in")}(0,c.useEffect)(()=>{let e=Z();I(e)},[t,a,i,b,f,S,y,k,A]);let Q=[["Emissions","Metric Tons per Year"],["Commute",O(t,a,i)],["Food",V(b,f,S)],["Electricity",W(y,k,A)]],[q,J]=(0,c.useState)(0);return(0,c.useEffect)(()=>{let e=()=>{J(window.scrollY)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:n().carbonCalculations,children:[(0,o.jsx)(h,{start:0,end:Z(),duration:4.8,decimal:".",decimals:1,children:e=>{let{countUpRef:t}=e;return(0,o.jsxs)("div",{className:n().calculationCard,style:{fontSize:"1.2em"},children:[(0,o.jsxs)("div",{className:n().countUp,children:[(0,o.jsxs)("div",{className:n().animationWrapper,style:{marginRight:"0.5rem"},children:[(0,o.jsx)("h3",{className:n().pMarginBottom,style:{marginLeft:"16px"},children:"Your Yearly Emissions"}),(0,o.jsx)("span",{className:n().animatedCount,ref:t}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{className:n().pMarginTop,children:"metric tons per year"}),(0,o.jsx)("div",{className:"".concat(n().circle," ").concat(n().circle1)}),(0,o.jsx)("div",{className:"".concat(n().circle," ").concat(n().circle2)}),(0,o.jsx)("div",{className:"".concat(n().circle," ").concat(n().circle3)})]}),(0,o.jsxs)("div",{style:{marginLeft:"0.5rem"},children:[(0,o.jsx)("h3",{className:n().pMarginBottom,style:{marginLeft:"16px"},children:"Average Yearly Emissions"}),(0,o.jsx)("span",{children:"14.6"}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{className:n().pMarginTop,children:"metric tons per year"})]})]}),0>P()?(0,o.jsxs)("p",{style:{fontSize:"1rem",marginTop:"16px",textAlign:"center"},children:["Your commute emissions are ",(0,o.jsxs)("b",{children:[-P(),"%"]})," more than average."]}):(0,o.jsxs)("p",{style:{fontSize:"1rem",marginTop:"16px",textAlign:"center"},children:["Your commute emissions are ",(0,o.jsxs)("b",{children:[P(),"%"]})," less than average."]})]})}},Z()),(0,o.jsx)(p.default,{})]}),(0,o.jsxs)("div",{className:n().chartContainer,children:[(0,o.jsxs)("div",{className:n().chartContainer,style:{transform:"translateY(".concat(-.25*q,"px)")},children:[(0,o.jsxs)("div",{className:n().chartHeader,children:[(0,o.jsx)("h1",{style:{paddingBottom:"2rem"},children:"Your Emissions"}),(0,o.jsxs)("p",{children:["See a breakdown of ",(0,o.jsx)("br",{})," your carbon footprint"]})]}),(0,o.jsx)(s.kL,{className:n().emissionsChart,chartType:"PieChart",data:Q,options:{title:"",pieHole:.4,is3D:!0,backgroundColor:"transparent",legend:{textStyle:{color:"black",fontSize:16},position:"left",alignment:"center"},titleTextStyle:{color:"black",fontSize:24},pieSliceTextStyle:{color:"white",fontSize:16},slices:{0:{color:"#FFC300"},1:{color:"#FF5733"},2:{color:"#C70039"}},chartArea:{top:0,left:0,right:"10%",bottom:0,width:"100%",height:"100%"}},width:"100%",height:"100vh"})]}),(0,o.jsx)("div",{className:"".concat(n().greenCircle," ").concat(n().greenCircle1)}),(0,o.jsx)("div",{className:"".concat(n().greenCircle," ").concat(n().greenCircle2)}),(0,o.jsx)("div",{className:"".concat(n().greenCircle," ").concat(n().greenCircle3)})]}),(0,o.jsx)(m.Z,{appearance:"primary",className:n().saveButton,onClick:()=>{z(),L(!0)},style:{position:"fixed"},children:"Save My Calculation"}),(0,o.jsx)(u.Z,{open:G,onClose:()=>{L(!1)},enforceFocus:!1,size:"xs",className:"modal ".concat(n().saveModal),children:(0,o.jsx)(u.Z.Body,{children:"Calculation successfully saved!"})})]})}},9230:function(e,t,r){"use strict";r.r(t);var o=r(5893),a=r(7294),n=r(4871),c=r.n(n),_=r(9603),s=r(9417);t.default=function(){let[e,t]=(0,a.useState)(!0),r=()=>{window.scrollY>0?t(!1):t(!0)};return(0,a.useEffect)(()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}),[]),(0,o.jsx)("div",{className:"".concat(c().scrollArrow," ").concat(e?"":c().hidden),onClick:()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})},children:(0,o.jsx)(_.G,{icon:s.ptq,style:{fontSize:"3rem"}})})}},5359:function(e,t,r){"use strict";r.d(t,{I8:function(){return c}}),r(7294);var o=r(3977),a=r(1259);r(8887);let n=(0,o.ZF)({apiKey:"AIzaSyDLokiLJXUbui5xd3Xd3RIOgvVM4Yc1u8g",authDomain:"clearapp-81565.firebaseapp.com",projectId:"clearapp-81565",storageBucket:"clearapp-81565.appspot.com",messagingSenderId:"443408997906",appId:"1:443408997906:web:53023354e9b1edbed702cb",measurementId:"G-W6QH7706Z8"}),c=(0,a.v0)(n)},4871:function(e){e.exports={main:"Home_main__VkIEL",header:"Home_header__y2QYS",headerAuth:"Home_headerAuth__MZerp",headerImage:"Home_headerImage__cCFp_",carbon:"Home_carbon__AIOo_",carbonHeader:"Home_carbonHeader__Fc1u0",carbonSub:"Home_carbonSub__3CHu4",carbonButton:"Home_carbonButton__eMG4Z",carbonSelect:"Home_carbonSelect__BvCly",carbonCard:"Home_carbonCard__h1V_d",carbonCardHeader:"Home_carbonCardHeader__WSipi",stepWrap:"Home_stepWrap__3slkN",stepHeader:"Home_stepHeader__Uhgyy",stepBody:"Home_stepBody__bD9ab",stepOne:"Home_stepOne__iT3L8",stepTwo:"Home_stepTwo__YxJLj",stepThree:"Home_stepThree__spoO1",steps:"Home_steps__hbS9k",calculatorWrap:"Home_calculatorWrap__7IZjD",calculatorTab:"Home_calculatorTab__wuRRW",calculatorArea:"Home_calculatorArea__87G3Y",commuteArea:"Home_commuteArea__obQpO",commuteCard:"Home_commuteCard__d_Dub",funFactText:"Home_funFactText__hIkT5",commuteCardHeader:"Home_commuteCardHeader__3Xede",commuteCardInfo:"Home_commuteCardInfo__TKMww",commuteCalculations:"Home_commuteCalculations__Zd7er",carbonCalculations:"Home_carbonCalculations__UVezB",countUp:"Home_countUp__mVYTK",calculationCard:"Home_calculationCard__rqj9b",resultArea:"Home_resultArea__OH1_M",animationWrapper:"Home_animationWrapper__BJucd",circle:"Home_circle__phm3R",circle1:"Home_circle1__n3u_T",circle1Animation:"Home_circle1Animation__4mqkE",circle2:"Home_circle2__0FHsy",circle2Animation:"Home_circle2Animation__jXk9M",circle3:"Home_circle3__CY_wd",circle3Animation:"Home_circle3Animation__a9T62",pMarginBottom:"Home_pMarginBottom__Z87tW",pMarginTop:"Home_pMarginTop__WWX0i",result:"Home_result__kTSSh",nextButton:"Home_nextButton__r_Kss",nextButtonArea:"Home_nextButtonArea__YSz1o",nextButtonAreaTransparent:"Home_nextButtonAreaTransparent__L5ye_",backButton:"Home_backButton__kEp3f",backButtonArea:"Home_backButtonArea__KqerP",backButtonAreaTransparent:"Home_backButtonAreaTransparent__0o6_G",backToCalculator:"Home_backToCalculator__iZIfn",otherButtonGroup:"Home_otherButtonGroup__QWX4T",buttonGroup:"Home_buttonGroup__KGCaj",carbonActionCard:"Home_carbonActionCard__Br9Fy",yellowCircleContainer:"Home_yellowCircleContainer__a77GJ",yellowCircle:"Home_yellowCircle__nWViI",yellowCircle1:"Home_yellowCircle1__48Kbg",yellowCircle2:"Home_yellowCircle2__6xUyN",yellowCircle3:"Home_yellowCircle3__esnbk",newsletterSection:"Home_newsletterSection__GyV9r",goalSettingSection:"Home_goalSettingSection__Jrruo",goalSettingCheckbox:"Home_goalSettingCheckbox__DpcM8",goalSettingCheckboxGroup:"Home_goalSettingCheckboxGroup__Ta0qV",improvementHeader:"Home_improvementHeader__459AF",newsletterHeader:"Home_newsletterHeader__580_N",goalSettingHeader:"Home_goalSettingHeader__Vn1Q9",goalSettingHeaderCond:"Home_goalSettingHeaderCond__m5ryX",newsletterInput:"Home_newsletterInput__MpMqG",suggestionItem:"Home_suggestionItem__rWVlD",goalSettingSubHeader:"Home_goalSettingSubHeader__D1l_V",goalCheckboxGroup:"Home_goalCheckboxGroup__SQtIB",allChecked:"Home_allChecked__x7wLj",haloEffect:"Home_haloEffect__AVM4e",scrollArrow:"Home_scrollArrow__mbk0v",hidden:"Home_hidden__RZvqD",goalItem:"Home_goalItem__s6Vm4",checked:"Home_checked__F6Ngz",authEmail:"Home_authEmail__LfyZ0",authPassword:"Home_authPassword__r_4mm",authCard:"Home_authCard__9RpTP",authButton:"Home_authButton__BFB2m",loginButton:"Home_loginButton__Hqu1n",signinButton:"Home_signinButton__Et4PO",signOutButton:"Home_signOutButton__c4m2c",saveButton:"Home_saveButton__brDLg",saveModal:"Home_saveModal__VZaMD",loadButton:"Home_loadButton__i1hGv",chartContainer:"Home_chartContainer__5eFbK",greenCircle:"Home_greenCircle__16ayS",greenCircle1:"Home_greenCircle1__HK3wN",greenCircle2:"Home_greenCircle2__CVk7H",greenCircle3:"Home_greenCircle3__be8El",emissionsChart:"Home_emissionsChart__cRG_8",chartHeader:"Home_chartHeader__y4oqD",loadingGoalsSection:"Home_loadingGoalsSection__gxa_h",loadingGoals:"Home_loadingGoals__fTXgJ",loadingGoalsHeader:"Home_loadingGoalsHeader__q8wJ7",pulsatingCircle:"Home_pulsatingCircle__8h123","pulse-ring":"Home_pulse-ring__54ZiR","pulse-dot":"Home_pulse-dot__4YOCm",menuLabel:"Home_menuLabel__OsoEZ",menu:"Home_menu__3OELA",hamburger:"Home_hamburger__XTGnS",check:"Home_check__9ReJh",menuList:"Home_menuList__L6dJB",menuLink:"Home_menuLink__sccAx",card:"Home_card__E5spL",thirteen:"Home_thirteen__sqGDr",content:"Home_content__tkQPU",grid:"Home_grid__AVljO",center:"Home_center__O_TIN",description:"Home_description__uXNdx",vercelLogo:"Home_vercelLogo___BVuc",logo:"Home_logo__IOQAX",rotate:"Home_rotate__c5eru"}}}]);