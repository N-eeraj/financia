import{_ as m}from"./Button.078b9f1f.js";import{f as u,i as d,o as g,c as f,a as t,j as x,t as l,m as p,b as h,w as y,d as _}from"./entry.775ef5a6.js";const b={class:"place-center w-screen min-h-screen lg:!flex"},v=["src"],w={class:"relative flex-column items-center gap-y-7 w-80 z-10 md:w-4/6 lg:items-start lg:gap-y-12 lg:w-[45%] lg:pl-7"},S={class:"w-full flex-column items-center gap-y-1 md:gap-y-2 lg:items-start"},k={class:"text-theme-light text-3xl font-bold md:text-5xl"},B={class:"text-theme-grey-light text-lg md:text-2xl"},$={class:"flex justify-center items-center gap-x-2 text-xl"},j={class:"text-theme-grey-light"},V=u({__name:"EntryForm",props:{image:{type:String,required:!0},title:{type:String,required:!0},subtitle:{type:String,required:!0},segue:{type:String,required:!1},link:{type:Object,required:!0,validator({text:e,to:n}){return!!(e&&n)}}},emits:["submit"],setup(e,{emit:n}){const a=e,r=d(()=>`/financia/${a.image}`),o=s=>{s.preventDefault(),n("submit")};return(s,i)=>{const c=m;return g(),f("div",b,[t("img",{src:x(r),class:"absolute top-0 left-0 w-screen h-screen object-cover object-center lg:relative lg:w-[55%]"},null,8,v),t("div",w,[t("div",S,[t("h1",k,l(e.title),1),t("span",B,l(e.subtitle),1)]),t("form",{class:"flex-column items-center gap-y-6 w-80 md:w-96 lg:items-start",onSubmit:o},[p(s.$slots,"default")],32),t("div",$,[t("span",j,l(e.segue),1),h(c,{variant:"text","data-cy":"segue-link",onClick:i[0]||(i[0]=q=>s.$router.replace(e.link.to))},{default:y(()=>[_(l(e.link.text),1)]),_:1})])])])}}});export{V as _};