(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{6811:function(e,o,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Components/FoodCard",function(){return a(7499)}])},5157:function(e,o,a){"use strict";a.d(o,{IQ:function(){return c},ZP:function(){return l},t8:function(){return n},vQ:function(){return _}});var t=a(5893),r=a(7294);let _=r.createContext(),n=r.createContext(),c=r.createContext();function l(e){let{children:o}=e,[a,l]=(0,r.useState)(0),[m,s]=(0,r.useState)(""),[i,u]=(0,r.useState)(""),[d,H]=(0,r.useState)(0),[p,h]=(0,r.useState)(""),[C,g]=(0,r.useState)(0),[k,S]=(0,r.useState)(0),[b,x]=(0,r.useState)(""),[v,y]=(0,r.useState)("");return(0,t.jsx)(_.Provider,{value:{milesDaily:a,setMilesDaily:l,daysPerWeek:m,setDaysPerWeek:s,methodTravel:i,setMethodTravel:u},children:(0,t.jsx)(n.Provider,{value:{percentLocal:d,setPercentLocal:H,redMeat:p,setRedMeat:h,foodSaved:C,setFoodSaved:g},children:(0,t.jsx)(c.Provider,{value:{electricityBill:k,setElectricityBill:S,homeType:b,setHomeType:x,heatingCoEff:v,setHeatingCoEff:y},children:o})})})}},7499:function(e,o,a){"use strict";a.r(o),a.d(o,{default:function(){return i}});var t=a(5893),r=a(4871),_=a.n(r),n=a(7294),c=a(3649),l=a(5157),m=a(2601),s=a(2033);function i(e){let{percentLocal:o,setPercentLocal:a,redMeat:r,setRedMeat:i,foodSaved:u,setFoodSaved:d}=(0,n.useContext)(l.t8),[H,p]=(0,n.useState)([]),h=e.pageNumber,C=e=>{i(o=>e===o?"":e)};return(0,n.useEffect)(()=>{let e=()=>{let e=document.querySelector(".customSlider");if(e){let o=e.clientWidth,a=document.querySelectorAll(".customSlider-mark"),t=Array.from(a).map(e=>{let a=e.getBoundingClientRect(),t=e.closest(".customSlider").getBoundingClientRect(),r=(a.left-t.left)/o*100;return r});p(t)}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),(0,t.jsxs)("div",{className:_().commuteArea,children:[0==h?(0,t.jsxs)("div",{className:_().commuteCard,style:{padding:"2rem"},children:[(0,t.jsx)("div",{className:_().commuteCardHeader,children:(0,t.jsx)("p",{children:"How often do you consume red meat?"})}),(0,t.jsx)("div",{className:_().commuteCardInfo,style:{paddingTop:"0px"},children:(0,t.jsxs)(m.Z,{className:_().otherButtonGroup,children:[(0,t.jsx)(s.Z,{onClick:()=>C("never"),appearance:r.includes("never")?"primary":"ghost",children:"Never"}),(0,t.jsx)(s.Z,{onClick:()=>C("everyMeal"),appearance:r.includes("everyMeal")?"primary":"ghost",children:"In every meal"}),(0,t.jsx)(s.Z,{onClick:()=>C("once"),appearance:r.includes("once")?"primary":"ghost",children:"Once a day"}),(0,t.jsx)(s.Z,{onClick:()=>C("severalPerWeek"),appearance:r.includes("severalPerWeek")?"primary":"ghost",children:"Several times a week"}),(0,t.jsx)(s.Z,{onClick:()=>C("severalPerMonth"),appearance:r.includes("severalPerMonth")?"primary":"ghost",children:"Several times a month"})]})})]}):null,1==h?(0,t.jsxs)("div",{className:_().commuteCard,style:{padding:"2rem"},children:[(0,t.jsx)("div",{className:_().commuteCardHeader,children:(0,t.jsxs)("p",{children:["How much food goes uneaten ",(0,t.jsx)("br",{}),"in your household each week?"]})}),(0,t.jsxs)("div",{className:_().commuteCardInfo,style:{paddingTop:"0px"},children:[(0,t.jsx)("div",{className:"customSlider-values",children:H.map((e,o)=>(0,t.jsx)("div",{className:"customSlider-value".concat(10*o===u?" active":""),style:{left:"calc(".concat(e,"% - ").concat(0===o?0:-1,"px)")},children:10*o+"%"},o))}),(0,t.jsx)(c.Z,{className:"customSlider",trackClassName:"customSlider-track",thumbClassName:"customSlider-thumb",markClassName:"customSlider-mark",marks:10,min:0,max:100,step:1,defaultValue:0,value:u,onChange:d,renderMark:e=>(e.key<=u?e.className="customSlider-mark customSlider-mark-before":e.className="customSlider-mark",(0,t.jsx)("span",{...e}))})]})]}):null,2==h?(0,t.jsxs)("div",{className:_().commuteCard,children:[(0,t.jsx)("div",{className:_().commuteCardHeader,children:(0,t.jsx)("p",{children:"How much of your diet consists of locally sourced foods?"})}),(0,t.jsxs)("div",{className:_().commuteCardInfo,style:{paddingTop:"0px"},children:[(0,t.jsx)("div",{className:"customSlider-values",children:H.map((e,a)=>(0,t.jsx)("div",{className:"customSlider-value".concat(10*a===o?" active":""),style:{left:"calc(".concat(e,"% - ").concat(0===a?0:-1,"px)")},children:10*a+"%"},a))}),(0,t.jsx)(c.Z,{className:"customSlider",trackClassName:"customSlider-track",thumbClassName:"customSlider-thumb",markClassName:"customSlider-mark",marks:10,min:0,max:100,step:1,defaultValue:o,onChange:a,renderMark:e=>(e.key<=o?e.className="customSlider-mark customSlider-mark-before":e.className="customSlider-mark",(0,t.jsx)("span",{...e}))})]})]}):null]})}a(7680)},4871:function(e){e.exports={main:"Home_main__VkIEL",header:"Home_header__y2QYS",headerAuth:"Home_headerAuth__MZerp",headerImage:"Home_headerImage__cCFp_",carbon:"Home_carbon__AIOo_",carbonHeader:"Home_carbonHeader__Fc1u0",carbonSub:"Home_carbonSub__3CHu4",carbonButton:"Home_carbonButton__eMG4Z",carbonSelect:"Home_carbonSelect__BvCly",carbonCard:"Home_carbonCard__h1V_d",carbonCardHeader:"Home_carbonCardHeader__WSipi",stepWrap:"Home_stepWrap__3slkN",stepHeader:"Home_stepHeader__Uhgyy",stepBody:"Home_stepBody__bD9ab",stepOne:"Home_stepOne__iT3L8",stepTwo:"Home_stepTwo__YxJLj",stepThree:"Home_stepThree__spoO1",steps:"Home_steps__hbS9k",calculatorWrap:"Home_calculatorWrap__7IZjD",calculatorTab:"Home_calculatorTab__wuRRW",calculatorArea:"Home_calculatorArea__87G3Y",commuteArea:"Home_commuteArea__obQpO",commuteCard:"Home_commuteCard__d_Dub",funFactText:"Home_funFactText__hIkT5",commuteCardHeader:"Home_commuteCardHeader__3Xede",commuteCardInfo:"Home_commuteCardInfo__TKMww",commuteCalculations:"Home_commuteCalculations__Zd7er",carbonCalculations:"Home_carbonCalculations__UVezB",countUp:"Home_countUp__mVYTK",calculationCard:"Home_calculationCard__rqj9b",resultArea:"Home_resultArea__OH1_M",animationWrapper:"Home_animationWrapper__BJucd",circle:"Home_circle__phm3R",circle1:"Home_circle1__n3u_T",circle1Animation:"Home_circle1Animation__4mqkE",circle2:"Home_circle2__0FHsy",circle2Animation:"Home_circle2Animation__jXk9M",circle3:"Home_circle3__CY_wd",circle3Animation:"Home_circle3Animation__a9T62",pMarginBottom:"Home_pMarginBottom__Z87tW",pMarginTop:"Home_pMarginTop__WWX0i",result:"Home_result__kTSSh",nextButton:"Home_nextButton__r_Kss",nextButtonArea:"Home_nextButtonArea__YSz1o",nextButtonAreaTransparent:"Home_nextButtonAreaTransparent__L5ye_",backButton:"Home_backButton__kEp3f",backButtonArea:"Home_backButtonArea__KqerP",backButtonAreaTransparent:"Home_backButtonAreaTransparent__0o6_G",backToCalculator:"Home_backToCalculator__iZIfn",otherButtonGroup:"Home_otherButtonGroup__QWX4T",buttonGroup:"Home_buttonGroup__KGCaj",carbonActionCard:"Home_carbonActionCard__Br9Fy",yellowCircleContainer:"Home_yellowCircleContainer__a77GJ",yellowCircle:"Home_yellowCircle__nWViI",yellowCircle1:"Home_yellowCircle1__48Kbg",yellowCircle2:"Home_yellowCircle2__6xUyN",yellowCircle3:"Home_yellowCircle3__esnbk",newsletterSection:"Home_newsletterSection__GyV9r",goalSettingSection:"Home_goalSettingSection__Jrruo",goalSettingCheckbox:"Home_goalSettingCheckbox__DpcM8",goalSettingCheckboxGroup:"Home_goalSettingCheckboxGroup__Ta0qV",improvementHeader:"Home_improvementHeader__459AF",newsletterHeader:"Home_newsletterHeader__580_N",goalSettingHeader:"Home_goalSettingHeader__Vn1Q9",goalSettingHeaderCond:"Home_goalSettingHeaderCond__m5ryX",newsletterInput:"Home_newsletterInput__MpMqG",suggestionItem:"Home_suggestionItem__rWVlD",goalSettingSubHeader:"Home_goalSettingSubHeader__D1l_V",goalCheckboxGroup:"Home_goalCheckboxGroup__SQtIB",allChecked:"Home_allChecked__x7wLj",haloEffect:"Home_haloEffect__AVM4e",scrollArrow:"Home_scrollArrow__mbk0v",hidden:"Home_hidden__RZvqD",goalItem:"Home_goalItem__s6Vm4",checked:"Home_checked__F6Ngz",authEmail:"Home_authEmail__LfyZ0",authPassword:"Home_authPassword__r_4mm",authCard:"Home_authCard__9RpTP",authButton:"Home_authButton__BFB2m",loginButton:"Home_loginButton__Hqu1n",signinButton:"Home_signinButton__Et4PO",signOutButton:"Home_signOutButton__c4m2c",saveButton:"Home_saveButton__brDLg",saveModal:"Home_saveModal__VZaMD",loadButton:"Home_loadButton__i1hGv",chartContainer:"Home_chartContainer__5eFbK",greenCircle:"Home_greenCircle__16ayS",greenCircle1:"Home_greenCircle1__HK3wN",greenCircle2:"Home_greenCircle2__CVk7H",greenCircle3:"Home_greenCircle3__be8El",emissionsChart:"Home_emissionsChart__cRG_8",chartHeader:"Home_chartHeader__y4oqD",loadingGoalsSection:"Home_loadingGoalsSection__gxa_h",loadingGoals:"Home_loadingGoals__fTXgJ",loadingGoalsHeader:"Home_loadingGoalsHeader__q8wJ7",pulsatingCircle:"Home_pulsatingCircle__8h123","pulse-ring":"Home_pulse-ring__54ZiR","pulse-dot":"Home_pulse-dot__4YOCm",menuLabel:"Home_menuLabel__OsoEZ",menu:"Home_menu__3OELA",hamburger:"Home_hamburger__XTGnS",check:"Home_check__9ReJh",menuList:"Home_menuList__L6dJB",menuLink:"Home_menuLink__sccAx",card:"Home_card__E5spL",thirteen:"Home_thirteen__sqGDr",content:"Home_content__tkQPU",grid:"Home_grid__AVljO",center:"Home_center__O_TIN",description:"Home_description__uXNdx",vercelLogo:"Home_vercelLogo___BVuc",logo:"Home_logo__IOQAX",rotate:"Home_rotate__c5eru"}}},function(e){e.O(0,[810,165,763,792,774,888,179],function(){return e(e.s=6811)}),_N_E=e.O()}]);