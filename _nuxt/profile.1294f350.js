import{_ as x}from"./Button.078b9f1f.js";import{f as V,x as C,g as B,y as L,o as w,c as g,F as j,r as q,b as u,w as _,d as b,t as A,z as N,A as y,B as U,j as a,q as E,h as D,s as F,C as z,a as v,l as H,i as M,k,D as T}from"./entry.775ef5a6.js";import{r as O,p as Z,c as G,v as S,u as J,_ as $,n as K,e as Q,a as W,b as X,d as Y}from"./user.d147c9f1.js";import ee from"./Icon.d09fe991.js";import{_ as ae}from"./Dialog.vue.ec8b9512.js";import"./config.9e0fffcf.js";import"./_plugin-vue_export-helper.c27b6911.js";const te={class:"flex w-fit max-w-full bg-theme-light rounded-lg overflow-x-auto","data-cy":"profile-action-container"},oe=V({__name:"ActionsContainer",props:{activeHash:{type:String,required:!1,default:""}},setup(h){const d=h,t=C(),n=B(),{setHelpVisibility:m}=L(),p=[{text:"My Profile",classes:"!text-theme-dark",hash:"",activeClasses:"!bg-base-green"},{text:"Password",classes:"!text-theme-dark",hash:"#change-password",activeClasses:"!bg-base-blue"},{text:"Delete Account",classes:"!text-red-500",hash:"#delete-account"}],s=(o,e,i)=>[o,d.activeHash===e&&i].join(" "),l=(o,e)=>{o==="#delete-account"&&(e.stopPropagation(),m(!1)),n.replace({...t,hash:o})};return(o,e)=>{const i=x;return w(),g("div",te,[(w(),g(j,null,q(p,({text:r,classes:f,hash:P,activeClasses:c},I)=>u(i,{variant:"text",class:N(["flex-shrink-0 px-5 md:px-8 font-medium",s(f,P,c)]),key:I,"data-cy":"action",onClick:R=>l(P,R)},{default:_(()=>[b(A(r),1)]),_:2},1032,["class","onClick"])),64))])}}}),se=V({__name:"Password",setup(h){const d=y({password:null,newPassword:null,confirmPassword:null}),t=y({password:"",newPassword:"",confirmPassword:""}),n=U(""),m=l=>G(t.newPassword,l,"passwords"),p=()=>{var l;return t.confirmPassword&&((l=d.confirmPassword)==null?void 0:l.validate())},s=l=>{if(n.value="",l.preventDefault(),!S(d))return;const{success:o,message:e}=J(t);o?(E(e,"success"),n.value=""):n.value=e};return(l,o)=>{const e=$,i=x;return w(),g("form",{class:"flex-column items-center md:items-start gap-y-8 w-full md:w-1/2 max-w-full md:max-w-md",onSubmit:s},[u(e,{modelValue:a(t).password,"onUpdate:modelValue":o[0]||(o[0]=r=>a(t).password=r),ref:r=>a(d).password=r,type:"password",validator:"requiredValidation"in l?l.requiredValidation:a(O),error:a(n),placeholder:"Password",variant:"clear",dark:"",class:"w-full","data-cy":"password"},null,8,["modelValue","validator","error"]),u(e,{modelValue:a(t).newPassword,"onUpdate:modelValue":o[1]||(o[1]=r=>a(t).newPassword=r),ref:r=>a(d).newPassword=r,type:"password",validator:"passwordValidation"in l?l.passwordValidation:a(Z),placeholder:"New Password",variant:"clear",dark:"",class:"w-full","data-cy":"new-password",onChange:p},null,8,["modelValue","validator"]),u(e,{modelValue:a(t).confirmPassword,"onUpdate:modelValue":o[2]||(o[2]=r=>a(t).confirmPassword=r),ref:r=>a(d).confirmPassword=r,type:"password",validator:m,placeholder:"Confirm Password",variant:"clear",dark:"",class:"w-full","data-cy":"confirm-password"},null,8,["modelValue"]),u(i,{variant:"gradient",color:"blue",dark:"","data-cy":"update-btn"},{default:_(()=>[b(" Update ")]),_:1})],32)}}}),ne={class:"flex-column md:!flex-row justify-center items-center md:gap-x-16 gap-y-12 w-full"},le={class:"relative w-48 md:w-1/4 md:min-w-[180px] md:max-w-[240px] aspect-square"},re=["src"],ie={for:"profilePictureInput"},de=V({__name:"Details",setup(h){const d=D(),{user:t}=F(d),n=y({name:null,email:null,phone:null}),p=H().public.baseURL,s=y({name:"",email:"",phone:"",profilePicture:""}),l=e=>{e.preventDefault(),S(n)&&X(s)},o=({target:e})=>{e.files.length&&(s.profilePicture=URL.createObjectURL(e.files[0]))};return z(()=>{var e,i,r,f;s.name=((e=t.value)==null?void 0:e.name)||"",s.email=((i=t.value)==null?void 0:i.email)||"",s.phone=((r=t.value)==null?void 0:r.phone)||"",s.profilePicture=((f=t.value)==null?void 0:f.profilePicture)||`${p}/users/john-doe.png`}),(e,i)=>{const r=ee,f=$,P=x;return w(),g("div",ne,[v("div",le,[v("img",{src:a(s).profilePicture,class:"w-full h-full object-cover rounded-full"},null,8,re),v("label",ie,[u(r,{name:"mdi-camera",size:"48",class:"absolute right-0 bottom-0 p-3 bg-base-green text-theme-light rounded-full cursor-pointer"})]),v("input",{type:"file",accept:"image/*",id:"profilePictureInput",class:"hidden",onChange:o},null,32)]),v("form",{class:"flex-column items-center md:items-end gap-y-8 w-full md:w-1/2 max-w-full md:max-w-md",onSubmit:l},[u(f,{modelValue:a(s).name,"onUpdate:modelValue":i[0]||(i[0]=c=>a(s).name=c),ref:c=>a(n).name=c,validator:"nameValidation"in e?e.nameValidation:a(K),placeholder:"Full Name",variant:"clear",dark:"",class:"w-full","data-cy":"name"},null,8,["modelValue","validator"]),u(f,{modelValue:a(s).email,"onUpdate:modelValue":i[1]||(i[1]=c=>a(s).email=c),ref:c=>a(n).email=c,validator:"emailValidation"in e?e.emailValidation:a(Q),placeholder:"Email",variant:"clear",dark:"",class:"w-full","data-cy":"email"},null,8,["modelValue","validator"]),u(f,{modelValue:a(s).phone,"onUpdate:modelValue":i[2]||(i[2]=c=>a(s).phone=c),ref:c=>a(n).phone=c,validator:"phoneValidation"in e?e.phoneValidation:a(W),placeholder:"Phone Number",variant:"clear",dark:"",class:"w-full","data-cy":"phone"},null,8,["modelValue","validator"]),u(P,{variant:"gradient",color:"blue",dark:"","data-cy":"save-btn"},{default:_(()=>[b(" Save ")]),_:1})],32)])}}}),ce=V({__name:"Delete",setup(h){const d=C(),t=B(),{clearUser:n}=D(),m=M(()=>d.hash==="#delete-account"),p=()=>{Y(),n(),t.push("/login")};return(s,l)=>{const o=x,e=ae;return w(),k(e,{show:a(m),title:"Danger Zone","data-cy":"delete-modal"},{actions:_(()=>[u(o,{variant:"outlined",class:"bg-gradient-to-bl glass-bg !text-red-500 !border-red-500","data-cy":"delete-btn",onClick:p},{default:_(()=>[b(" Delete Account ")]),_:1})]),default:_(()=>[b(" Once you delete this account, there is no going back. Please be certain ! ")]),_:1},8,["show"])}}}),ue={class:"flex-column gap-y-6 md:gap-y-12"},ge=V({__name:"profile",setup(h){const d=C(),t=B(),n=U(""),m=()=>{t.replace({...d,hash:n.value}),document.removeEventListener("click",m)};return T(()=>d.hash,()=>{d.hash==="#delete-account"?document.addEventListener("click",m):n.value=d.hash},{immediate:!0}),(p,s)=>{const l=oe,o=se,e=de,i=ce;return w(),g("div",ue,[u(l,{"active-hash":a(n)},null,8,["active-hash"]),a(n)?(w(),k(o,{key:0,"data-cy":"change-password-tab"})):(w(),k(e,{key:1,"data-cy":"my-profile-tab"})),u(i)])}}});export{ge as default};