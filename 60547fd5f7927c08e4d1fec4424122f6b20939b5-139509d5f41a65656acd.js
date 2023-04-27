"use strict";(self.webpackChunkicjllc_com=self.webpackChunkicjllc_com||[]).push([[804],{5725:function(t,e,n){n.d(e,{ZP:function(){return W}});var r=n(1461),i=n(7896),o=n(2784),a=n(6277),s=n(5408),c=n(9707),p=n(9075),l=n(948),u=n(1657),m=n(2734);var g=o.createContext(),f=n(9222),d=n(5672);function h(t){return(0,d.Z)("MuiGrid",t)}const w=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var Z=(0,f.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((t=>`spacing-xs-${t}`)),...["column-reverse","column","row-reverse","row"].map((t=>`direction-xs-${t}`)),...["nowrap","wrap-reverse","wrap"].map((t=>`wrap-xs-${t}`)),...w.map((t=>`grid-xs-${t}`)),...w.map((t=>`grid-sm-${t}`)),...w.map((t=>`grid-md-${t}`)),...w.map((t=>`grid-lg-${t}`)),...w.map((t=>`grid-xl-${t}`))]),x=n(2322);const b=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function k(t){const e=parseFloat(t);return`${e}${String(t).replace(String(e),"")||"px"}`}function $({breakpoints:t,values:e}){let n="";Object.keys(e).forEach((t=>{""===n&&0!==e[t]&&(n=t)}));const r=Object.keys(t).sort(((e,n)=>t[e]-t[n]));return r.slice(0,r.indexOf(n))}const y=(0,l.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t,{container:r,direction:i,item:o,spacing:a,wrap:s,zeroMinWidth:c,breakpoints:p}=n;let l=[];r&&(l=function(t,e,n={}){if(!t||t<=0)return[];if("string"==typeof t&&!Number.isNaN(Number(t))||"number"==typeof t)return[n[`spacing-xs-${String(t)}`]];const r=[];return e.forEach((e=>{const i=t[e];Number(i)>0&&r.push(n[`spacing-${e}-${String(i)}`])})),r}(a,p,e));const u=[];return p.forEach((t=>{const r=n[t];r&&u.push(e[`grid-${t}-${String(r)}`])})),[e.root,r&&e.container,o&&e.item,c&&e.zeroMinWidth,...l,"row"!==i&&e[`direction-xs-${String(i)}`],"wrap"!==s&&e[`wrap-xs-${String(s)}`],...u]}})((({ownerState:t})=>(0,i.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})),(function({theme:t,ownerState:e}){const n=(0,s.P$)({values:e.direction,breakpoints:t.breakpoints.values});return(0,s.k9)({theme:t},n,(t=>{const e={flexDirection:t};return 0===t.indexOf("column")&&(e[`& > .${Z.item}`]={maxWidth:"none"}),e}))}),(function({theme:t,ownerState:e}){const{container:n,rowSpacing:r}=e;let i={};if(n&&0!==r){const e=(0,s.P$)({values:r,breakpoints:t.breakpoints.values});let n;"object"==typeof e&&(n=$({breakpoints:t.breakpoints.values,values:e})),i=(0,s.k9)({theme:t},e,((e,r)=>{var i;const o=t.spacing(e);return"0px"!==o?{marginTop:`-${k(o)}`,[`& > .${Z.item}`]:{paddingTop:k(o)}}:null!=(i=n)&&i.includes(r)?{}:{marginTop:0,[`& > .${Z.item}`]:{paddingTop:0}}}))}return i}),(function({theme:t,ownerState:e}){const{container:n,columnSpacing:r}=e;let i={};if(n&&0!==r){const e=(0,s.P$)({values:r,breakpoints:t.breakpoints.values});let n;"object"==typeof e&&(n=$({breakpoints:t.breakpoints.values,values:e})),i=(0,s.k9)({theme:t},e,((e,r)=>{var i;const o=t.spacing(e);return"0px"!==o?{width:`calc(100% + ${k(o)})`,marginLeft:`-${k(o)}`,[`& > .${Z.item}`]:{paddingLeft:k(o)}}:null!=(i=n)&&i.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${Z.item}`]:{paddingLeft:0}}}))}return i}),(function({theme:t,ownerState:e}){let n;return t.breakpoints.keys.reduce(((r,o)=>{let a={};if(e[o]&&(n=e[o]),!n)return r;if(!0===n)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.P$)({values:e.columns,breakpoints:t.breakpoints.values}),p="object"==typeof c?c[o]:c;if(null==p)return r;const l=Math.round(n/p*1e8)/1e6+"%";let u={};if(e.container&&e.item&&0!==e.columnSpacing){const n=t.spacing(e.columnSpacing);if("0px"!==n){const t=`calc(${l} + ${k(n)})`;u={flexBasis:t,maxWidth:t}}}a=(0,i.Z)({flexBasis:l,flexGrow:0,maxWidth:l},u)}return 0===t.breakpoints.values[o]?Object.assign(r,a):r[t.breakpoints.up(o)]=a,r}),{})}));const v=t=>{const{classes:e,container:n,direction:r,item:i,spacing:o,wrap:a,zeroMinWidth:s,breakpoints:c}=t;let l=[];n&&(l=function(t,e){if(!t||t<=0)return[];if("string"==typeof t&&!Number.isNaN(Number(t))||"number"==typeof t)return[`spacing-xs-${String(t)}`];const n=[];return e.forEach((e=>{const r=t[e];if(Number(r)>0){const t=`spacing-${e}-${String(r)}`;n.push(t)}})),n}(o,c));const u=[];c.forEach((e=>{const n=t[e];n&&u.push(`grid-${e}-${String(n)}`)}));const m={root:["root",n&&"container",i&&"item",s&&"zeroMinWidth",...l,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...u]};return(0,p.Z)(m,h,e)},S=o.forwardRef((function(t,e){const n=(0,u.Z)({props:t,name:"MuiGrid"}),{breakpoints:s}=(0,m.Z)(),p=(0,c.Z)(n),{className:l,columns:f,columnSpacing:d,component:h="div",container:w=!1,direction:Z="row",item:k=!1,rowSpacing:$,spacing:S=0,wrap:W="wrap",zeroMinWidth:M=!1}=p,N=(0,r.Z)(p,b),j=$||S,z=d||S,P=o.useContext(g),C=w?f||12:P,G={},E=(0,i.Z)({},N);s.keys.forEach((t=>{null!=N[t]&&(G[t]=N[t],delete E[t])}));const L=(0,i.Z)({},p,{columns:C,container:w,direction:Z,item:k,rowSpacing:j,columnSpacing:z,wrap:W,zeroMinWidth:M,spacing:S},G,{breakpoints:s.keys}),_=v(L);return(0,x.jsx)(g.Provider,{value:C,children:(0,x.jsx)(y,(0,i.Z)({ownerState:L,className:(0,a.Z)(_.root,l),as:h,ref:e},E))})}));var W=S},7124:function(t,e,n){n.d(e,{$:function(){return u}});n(2784);var r=n(1508),i=n(6089),o=n(2658),a=n(2906),s=n(1079),c=n(8165);const p=t=>{let{children:e,href:n}=t;const r=/^\/(?!\/)/.test(n);return(0,c.tZ)(s.Z,{href:n,target:r?"_self":"_blank",onClick:t=>{r&&(t.preventDefault(),(0,a.navigate)(n))}},e)};var l=n(5025);const u=()=>(0,c.tZ)(r.Z,null,(0,c.tZ)(i.Z,{sx:{py:4}},(0,c.tZ)(r.Z,{align:"center",sx:{my:6}},[{label:"Privacy",link:"/privacy/"},{label:"SDGs",link:"/sdgs/"}].map(((t,e)=>{let{label:n,link:i}=t;return(0,c.tZ)(r.Z,{key:e,component:"span",sx:{m:1}},(0,c.tZ)(p,{href:i},n))}))),(0,c.tZ)(r.Z,{align:"center"},(0,c.tZ)("img",{src:l.Z,alt:"ICJ",style:{display:"block",width:"40px",pointerEvents:"none"}}),(0,c.tZ)(o.Z,{sx:{fontSize:"10px"}},"© ICJ LLC"))))},2059:function(t,e,n){n.d(e,{p:function(){return s}});var r=n(2784),i=n(2906),o=n(5619),a=n(8165);const s=t=>{let{children:e,title:n}=t;const{site:{siteMetadata:{siteUrl:s,title:c,description:p}}}=(0,i.useStaticQuery)("4237499240"),{pathname:l}=(0,o.useLocation)(),u="/"===l,m=n?n+" | "+c:c;return(0,a.tZ)(r.Fragment,null,(0,a.tZ)("title",null,m),(0,a.tZ)("meta",{name:"description",content:p}),(0,a.tZ)("meta",{property:"og:title",content:m}),(0,a.tZ)("meta",{property:"og:site_name",content:c}),(0,a.tZ)("meta",{property:"og:type",content:u?"website":"article"}),(0,a.tZ)("meta",{property:"og:url",content:""+s+l}),(0,a.tZ)("meta",{property:"og:description",content:p}),(0,a.tZ)("meta",{property:"og:image",content:s+"/ogp.png"}),(0,a.tZ)("meta",{property:"og:image:secure_url",content:s+"/ogp.png"}),(0,a.tZ)("meta",{property:"og:image:type",content:"image/png"}),(0,a.tZ)("meta",{property:"og:image:width",content:"1200"}),(0,a.tZ)("meta",{property:"og:image:height",content:"630"}),(0,a.tZ)("meta",{property:"og:locale",content:"ja_JP"}),(0,a.tZ)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.tZ)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,a.tZ)("link",{href:"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap",rel:"stylesheet"}),e)}}}]);
//# sourceMappingURL=60547fd5f7927c08e4d1fec4424122f6b20939b5-139509d5f41a65656acd.js.map