import{d as B,g as m,x as A,C as E,b as D,w as e,o as u,k as n,t as r,H as t,a as y,_ as f,h as v,c as h,Q as b}from"./chunks/framework.87dd653a.js";const x={class:"jw-dialog-cont"},q={class:"jw-dialog-btn"},_=B({__name:"dialogModule",props:{modelValue:{type:Boolean,required:!0,default:!1},resolve:{type:Function,default:void 0},reject:{type:Function,default:void 0},title:{type:String,default:"标题"},mainText:{type:String,default:"弹窗内容"},width:{type:String,default:"400px"},LeftText:{type:String,default:"取消"},LeftType:{type:[String,void 0],default:void 0},RightText:{type:String,default:"确认"},RightType:{type:[String,void 0],default:"primary"}},emits:["update:modelValue"],setup(s,{emit:a}){const l=s,i=m({get(){return l.modelValue},set(o){a("update:modelValue",o)}});A(l,o=>{console.log(o.modelValue)});function p(){a("update:modelValue",!1),l.reject()}function F(){a("update:modelValue",!1),l.resolve()}return(o,c)=>{const d=E("a-button"),C=E("a-modal");return u(),D(C,{open:i.value,"onUpdate:open":c[0]||(c[0]=g=>i.value=g),wrapClassName:"dialog-box",width:s.width,closable:!1,footer:null,onCancel:p},{header:e(()=>[n("div",null,r(s.title),1)]),default:e(()=>[n("div",{onClick:p,class:"jw-dialog-close"},"×"),n("div",x,[n("div",null,r(s.mainText),1)]),n("div",q,[t(d,{type:s.LeftType,onClick:p},{default:e(()=>[y(r(s.LeftText),1)]),_:1},8,["type"]),t(d,{type:s.RightType,onClick:F},{default:e(()=>[y(r(s.RightText),1)]),_:1},8,["type"])])]),_:1},8,["open","width"])}}});const T=f(_,[["__scopeId","data-v-9cdf1129"]]),w=n("blockquote",null,[n("p",null,"Vue3 + ts函数式封装")],-1),V=n("h2",{id:"演示",tabindex:"-1"},[y("演示 "),n("a",{class:"header-anchor",href:"#演示","aria-label":'Permalink to "演示"'},"​")],-1),j=b("",4),R=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/vue/dialog/index.md","filePath":"web/vue/dialog/index.md"}'),k={name:"web/vue/dialog/index.md"},L=Object.assign(k,{setup(s){const a=v(!1);function l(){a.value=!0}return(i,p)=>{const F=E("c-title"),o=E("a-button");return u(),h("div",null,[t(F,{title:"封装dialog弹窗"}),w,V,t(o,{type:"primary",onClick:l},{default:e(()=>[y("唤醒弹窗")]),_:1}),t(T,{modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=c=>a.value=c)},null,8,["modelValue"]),j])}}});export{R as __pageData,L as default};