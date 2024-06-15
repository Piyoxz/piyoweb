import{_ as e}from"./TwIcon.5a8a0034.js";import{e as t,i as s,j as l,t as i,F as o,o as a}from"./vendor.6507a65c.js";import"./index.0107be5c.js";const n={name:"Home",mounted(){this.updateTime(),setInterval(this.updateTime,1e3)},data:()=>({wib:null}),methods:{updateTime(){const e=new Date,t=new Date(e.getTime());this.wib=this.formatTime(t)},formatTime:e=>new Intl.DateTimeFormat("id-ID",{hour:"numeric",minute:"2-digit",second:"2-digit"}).format(e)}},r={class:"grid gap-5 sm:grid-cols-3 lg:grid-cols-3"},m={class:"bg-green-50 rounded-xl p-5"},d=s("p",{class:"mt-8 text-green-500 text-sm"},"User Online :",-1),c={class:"bg-purple-50 rounded-xl p-5"},u=s("p",{class:"mt-8 text-purple-500 text-sm"},"Total User :",-1),p={class:"bg-yellow-50 rounded-xl p-5"},x=s("p",{class:"mt-8 text-yellow-500 text-sm"},"Admin :",-1),g={class:"bg-blue-50 rounded-xl p-5 flex flex-col items-center justify-center mt-2"},b=s("p",{class:"text-blue-500 text-lg font-bold"},"Real-Time Clock:",-1),w={class:"mt-2 text-blue-500 text-4xl font-bold",id:"wibTime"};n.render=function(n,h,f,T,v,j){const y=e;return a(),t(o,null,[s("div",r,[s("div",m,[l(y,{name:"heroicons-outline:users",class:"w-10 h-10 text-green-500"}),d]),s("div",c,[l(y,{name:"heroicons-outline:chart-pie",class:"w-10 h-10 text-purple-500"}),u]),s("div",p,[l(y,{name:"heroicons-outline:user-group",class:"w-10 h-10 text-yellow-500"}),x])]),s("div",g,[b,s("p",w,i(v.wib),1)])],64)};export{n as default};
