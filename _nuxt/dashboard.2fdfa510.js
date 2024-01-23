import{_ as Z}from"./GradientText.774293ed.js";import{_ as B}from"./nuxt-link.14b69bcf.js";import x from"./Icon.d09fe991.js";import{y as D,s as N,f,o as a,k as _,w as v,b as d,a as i,t as h,j as e,c,F as w,r as S,H as y,z as $,p as tt,e as et,i as H,n as P,T as j,g as ot,h as nt,l as st,q as it,x as at,d as rt,C as lt,m as ct}from"./entry.775ef5a6.js";import{_ as R}from"./_plugin-vue_export-helper.c27b6911.js";import{a as dt}from"./date.a9ed5363.js";import{_ as ut}from"./Dialog.vue.ec8b9512.js";import"./config.9e0fffcf.js";const mt=[{to:"/dashboard",icon:"ic:round-home",text:"Dashboard"},{to:"/dashboard/accounts",icon:"mdi:cash",text:"Accounts"},{to:"/dashboard/investments",icon:"fluent-mdl2:chart",text:"Investments"},{to:"/dashboard/cards/debit",icon:"uil:atm-card",text:"Debit Cards"},{to:"/dashboard/cards/credit",icon:"bi:credit-card",text:"Credit Cards"},{to:"/dashboard/loans",icon:"bxs:bank",text:"Loans"},{to:"/dashboard/transactions",icon:"ri:exchange-dollar-fill",text:"Transactions"}],pt=[{icon:"clarity:user-solid",text:"Profile",action:"viewProfile"},{icon:"mdi:notifications",text:"Notifications",action:"showNotifications",classes:"md:hidden"},{icon:"ic:outline-help",text:"Help",action:"showHelp"},{icon:"tabler:logout",text:"Logout",action:"logout"}],F=D(),{navDrawerVisibility:C,notificationListVisibility:ft,profileMenuVisibility:gt,showHelp:ht}=N(F),{toggleNavDrawer:b,setNavDrawer:Y,toggleNotificationList:I,setNotificationList:T,toggleProfileMenu:z,setProfileMenu:M,setHelpVisibility:_t,handleCloseAllDashboardPopUp:U}=F,bt={class:"text-xl"},yt=f({__name:"Link",props:{to:{type:String,required:!0},icon:{type:String,required:!0},text:{type:String,required:!0}},setup(t){return(n,s)=>{const o=x,l=B;return a(),_(l,{to:t.to,class:"flex items-center gap-x-3 py-1 text-theme-grey-light duration-300 hover:text-theme-light","active-class":"text-theme-light","data-cy":"nav-drawer-link",onClick:s[0]||(s[0]=r=>("setNavDrawer"in n?n.setNavDrawer:e(Y))(!1))},{default:v(()=>[d(o,{name:t.icon,class:"w-6 h-6"},null,8,["name"]),i("span",bt,h(t.text),1)]),_:1},8,["to"])}}}),xt=""+globalThis.__publicAssetsURL("favicon.ico");const vt={},E=t=>(tt("data-v-d620f729"),t=t(),et(),t),wt={class:"relative flex-column gap-y-6 w-full h-full py-5 px-8 bg-gradient-to-bl glass-bg z-50 md:rounded-2xl md:border-[0.25px] md:border-theme-grey-light"},Dt=E(()=>i("div",{class:"max-md:h-16"},null,-1)),Nt=E(()=>i("img",{src:xt,class:"w-20 rounded-xl"},null,-1));function $t(t,n){const s=Z,o=B,l=yt;return a(),c("div",{class:$(["full-screen bg-theme-dark/10 backdrop-blur-xl duration-300 md:p-8 lg:!relative lg:w-min lg:!h-[calc(100vh-64px)] lg:p-0",!("navDrawerVisibility"in t?t.navDrawerVisibility:e(C))&&"max-lg:-translate-x-full"]),onClick:n[1]||(n[1]=(...r)=>("toggleNavDrawer"in t?t.toggleNavDrawer:e(b))&&("toggleNavDrawer"in t?t.toggleNavDrawer:e(b))(...r))},[i("nav",{class:"nav-container relative w-full h-full duration-300 before:content-[''] before:absolute before:aspect-square before:bg-base-green before:rounded-full before:blur-2xl before:z-40 after:content-[''] after:absolute after:bottom-0 after:right-0 after:aspect-square after:bg-base-blue after:rounded-full after:blur-2xl after:z-40 md:w-96 lg:w-80ˀ",onClick:n[0]||(n[0]=y(()=>{},["stop"]))},[i("div",wt,[Dt,d(o,{to:"/dashboard",class:"flex items-center gap-x-3 md:justify-center",onClick:"toggleNavDrawer"in t?t.toggleNavDrawer:e(b)},{default:v(()=>[Nt,d(s,{text:"Financia",start:"from-base-green",end:"to-base-blue",class:"text-4xl font-bold"})]),_:1},8,["onClick"]),(a(!0),c(w,null,S("navDrawerLinksData"in t?t.navDrawerLinksData:e(mt),({to:r,icon:u,text:m},g)=>(a(),_(l,{to:r,icon:u,text:m,key:g},null,8,["to","icon","text"]))),128))])])],2)}const kt=R(vt,[["render",$t],["__scopeId","data-v-d620f729"]]),Lt={class:"relative flex-column items-start gap-y-2 w-full p-3","data-cy":"notification-item"},Ct={class:"text-theme-light text-xl font-medium"},St={class:"text-theme-light text-start text-base"},Pt={class:"w-full text-end text-theme-grey-light text-xs"},Vt=f({__name:"Item",props:{id:{type:Number,required:!0},title:{type:String,required:!0},body:{type:String,required:!1,default:null},time:{type:String,required:!1,default:()=>String(new Date().toISOString())}},setup(t){const n=t,{readNotification:s}=D(),o=H(()=>dt(new Date(n.time)));return(l,r)=>{const u=x;return a(),c("div",Lt,[i("strong",Ct,h(t.title),1),i("span",St,h(t.body),1),i("small",Pt,h(e(o)),1),i("button",{class:"absolute top-3 right-3","data-cy":"close-notification-btn",onClick:r[0]||(r[0]=m=>e(s)(t.id))},[d(u,{name:"majesticons:close",size:"24",class:"text-theme-light"})])])}}}),qt=""+globalThis.__publicAssetsURL("no-notification-bell.svg"),At={class:"flex-column items-start gap-y-3 w-80 max-h-96 overflow-auto"},It={key:1,class:"flex-column justify-center items-center gap-y-1 w-60 h-48","data-cy":"no-notification-bell"},Tt=i("img",{src:qt,alt:"no-notifications",class:"w-20"},null,-1),zt=i("span",{class:"text-theme-grey-light"}," You have no notifications ",-1),Mt=[Tt,zt],G=f({__name:"List",props:{classes:{type:String,required:!1,default:null}},setup(t){const n=D(),{allNotifications:s}=N(n),{readAllNotification:o}=n;return(l,r)=>{const u=Vt;return a(),_(j,{name:"slide-down"},{default:v(()=>[("notificationListVisibility"in l?l.notificationListVisibility:e(ft))?(a(),c("div",{key:0,class:$(["absolute top-16 right-0 bg-gradient-to-bl glass-bg rounded-md border-[0.25px] border-theme-grey-light overflow-auto z-10",[t.classes]]),"data-cy":"notification-list",onClick:r[1]||(r[1]=y(()=>{},["stop"]))},[e(s).length?(a(),c(w,{key:0},[i("div",At,[(a(!0),c(w,null,S(e(s),({id:m,title:g,body:k,time:p})=>(a(),_(u,{id:m,title:g,body:k,time:p,class:"border-t border-t-theme-light first-of-type:border-t-0",key:m},null,8,["id","title","body","time"]))),128))]),i("button",{class:"w-full p-2 bg-theme-grey-dark/50 text-theme-light duration-200 hover:bg-theme-grey-light/50","data-cy":"read-all-notifications-btn",onClick:r[0]||(r[0]=(...m)=>e(o)&&e(o)(...m))}," Read All Notifications ")],64)):(a(),c("div",It,Mt))],2)):P("",!0)]),_:1})}}}),Ut={key:0,class:"absolute top-2 right-2 w-3 aspect-square bg-base-green rounded-full"},Bt=f({__name:"Button",setup(t){const n=D(),{allNotifications:s}=N(n);return(o,l)=>{const r=x,u=G;return a(),c("button",{class:"relative place-center w-12 aspect-square max-md:!hidden","data-cy":"notification-btn",onClick:l[0]||(l[0]=y((...m)=>("toggleNotificationList"in o?o.toggleNotificationList:e(I))&&("toggleNotificationList"in o?o.toggleNotificationList:e(I))(...m),["stop"]))},[d(r,{name:"mdi-notifications",size:"32",class:"w-8 h-8 aspect-square text-theme-grey-light cursor-pointer hover:text-theme-light"}),e(s).length?(a(),c("div",Ut)):P("",!0),d(u,{"data-cy":"landscape-notification-list"})])}}}),Ht={class:"flex gap-x-3 py-1 text-theme-grey-light hover:text-theme-light","data-cy":"profile-action"},jt={class:"text-xl"},Rt=f({__name:"Action",props:{icon:{type:String,required:!0},text:{type:String,required:!0}},setup(t){return(n,s)=>{const o=x;return a(),c("button",Ht,[d(o,{name:t.icon,size:"24"},null,8,["name"]),i("span",jt,h(t.text),1)])}}}),Ft={class:"text-theme-light text-xl max-md:hidden","data-cy":"user-name"},Yt=["src"],Et={key:0,class:"absolute top-16 right-0 flex-column gap-y-3 w-52 px-3 py-2 bg-gradient-to-bl glass-bg rounded-md border-[0.25px] border-theme-grey-light z-10"},Gt=f({__name:"index",setup(t){const n=ot(),s=nt(),{user:o}=N(s),{clearUser:l}=s,u=st().public.baseURL,m=()=>{M(!1),n.push("/dashboard/profile")},g=()=>{l(),M(!1),T(!1),n.push("/login")},k=p=>{switch(p){case"viewProfile":return m();case"showNotifications":return T(!0);case"showHelp":return _t(!0);case"logout":return g();default:it("Invalid Action","error")}};return(p,V)=>{var q,A;const O=Rt,J=G;return a(),c("div",{class:"flex items-center gap-x-3 cursor-pointer",onClick:V[0]||(V[0]=y((...L)=>("toggleProfileMenu"in p?p.toggleProfileMenu:e(z))&&("toggleProfileMenu"in p?p.toggleProfileMenu:e(z))(...L),["stop"]))},[i("span",Ft,h((q=e(o))==null?void 0:q.name),1),i("img",{src:((A=e(o))==null?void 0:A.profilePicture)||`${e(u)}/users/john-doe.png`,class:"w-14 aspect-square object-cover rounded-full"},null,8,Yt),d(j,{name:"slide-down"},{default:v(()=>[("profileMenuVisibility"in p?p.profileMenuVisibility:e(gt))?(a(),c("div",Et,[(a(!0),c(w,null,S("profileActionsData"in p?p.profileActionsData:e(pt),({icon:L,text:K,action:Q,classes:W},X)=>(a(),_(O,{icon:L,text:K,class:$(W),key:X,onClick:y(ne=>k(Q),["stop"])},null,8,["icon","text","class","onClick"]))),128))])):P("",!0)]),_:1}),d(J,{classes:"md:!hidden"})])}}}),Ot={class:"flex justify-between w-full px-3"},Jt={class:"flex items-center gap-x-3"},Kt={class:"text-theme-grey-light text-3xl max-md:hidden","data-cy":"page-title"},Qt={class:"relative flex items-center gap-x-5"},Wt=f({__name:"Bar",setup(t){const n=at(),s=H(()=>n.meta.pageTitle||"");return(o,l)=>{const r=x,u=Bt,m=Gt;return a(),c("div",Ot,[i("div",Jt,[i("button",{class:$(["lg:hidden",("navDrawerVisibility"in o?o.navDrawerVisibility:e(C))&&"max-md:z-10 md:hidden"]),"data-cy":"nav-toggle",onClick:l[0]||(l[0]=(...g)=>("toggleNavDrawer"in o?o.toggleNavDrawer:e(b))&&("toggleNavDrawer"in o?o.toggleNavDrawer:e(b))(...g))},[d(r,{name:("navDrawerVisibility"in o?o.navDrawerVisibility:e(C))?"ion:close":"eva:menu-outline",class:"text-theme-light text-6xl max-md:relative"},null,8,["name"])],2),i("span",Kt,h(e(s)),1)]),i("div",Qt,[d(u),d(m,{"data-cy":"profile-button"})])])}}}),Xt={};function Zt(t,n){const s=ut;return a(),_(s,{show:"showHelp"in t?t.showHelp:e(ht),title:"Help"},{default:v(()=>[rt(" This is a sample project with dummy data. You can manage your financial requirements over here. This project was built using Nuxt 3 & Tailwind CSS & end-to-end tested using Cypress. ")]),_:1},8,["show"])}const te=R(Xt,[["render",Zt]]),ee={class:"flex-column gap-y-6 w-full"},oe={class:"lg:w-[calc(100vw-480px)] md:h-[calc(100vh-156px)] overflow-y-auto"},me=f({__name:"dashboard",setup(t){return lt(()=>Y(!1)),(n,s)=>{const o=kt,l=Wt,r=te;return a(),c("main",{class:"w-full min-h-screen p-8 bg-theme-dark lg:flex lg:gap-x-8",onClick:s[0]||(s[0]=(...u)=>("handleCloseAllDashboardPopUp"in n?n.handleCloseAllDashboardPopUp:e(U))&&("handleCloseAllDashboardPopUp"in n?n.handleCloseAllDashboardPopUp:e(U))(...u))},[d(o,{class:"z-10"}),i("section",ee,[d(l),i("div",oe,[ct(n.$slots,"default")])]),d(r)])}}});export{me as default};
