(()=>{var e={};e.id=931,e.ids=[931],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},4529:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d});var s=t(3003),a=t(4293),n=t(6550),i=t.n(n),o=t(6979),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,3455)),"/Users/brookeduvall/Zero-Seats-Remaining/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,7973)),"/Users/brookeduvall/Zero-Seats-Remaining/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,2075,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/brookeduvall/Zero-Seats-Remaining/src/app/page.tsx"],c={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},587:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,2639,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23)),Promise.resolve().then(t.t.bind(t,2816,23))},5704:()=>{},5275:(e,r,t)=>{Promise.resolve().then(t.bind(t,8196))},8196:(e,r,t)=>{"use strict";t.d(r,{default:()=>d});var s=t(8819),a=t(7266),n=t(7389),i=t(1664),o=t(1223);let l=a.forwardRef(({className:e,type:r,...t},a)=>(0,s.jsx)("input",{type:r,className:(0,o.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...t}));function d(){let[e,r]=(0,a.useState)(""),[t,o]=(0,a.useState)(""),d=(0,n.useRouter)();return(0,s.jsx)("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4",children:(0,s.jsxs)("div",{className:"w-full max-w-md space-y-8",children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("h2",{className:"mt-6 text-3xl font-extrabold text-gray-900",children:"RegiLax"}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsxs)("svg",{viewBox:"0 0 100 20",className:"w-full",children:[(0,s.jsx)("path",{d:"M0,10 Q25,20 50,10 T100,10",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,s.jsx)("path",{d:"M0,10 Q25,0 50,10 T100,10",fill:"none",stroke:"currentColor",strokeWidth:"2"})]})})]}),(0,s.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:e=>{e.preventDefault(),d.push("/welcome")},children:[(0,s.jsx)(l,{type:"email",placeholder:"Email",value:e,onChange:e=>r(e.target.value),required:!0}),(0,s.jsx)(l,{type:"password",placeholder:"Password",value:t,onChange:e=>o(e.target.value),required:!0}),(0,s.jsx)(i.z,{type:"submit",className:"w-full",children:"Log In"}),(0,s.jsx)(i.z,{variant:"outline",className:"w-full",children:"Sign in with SSO"})]})]})})}l.displayName="Input"},1664:(e,r,t)=>{"use strict";t.d(r,{z:()=>d});var s=t(8819),a=t(7266),n=t(6438),i=t(8671),o=t(1223);let l=(0,i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef(({className:e,variant:r,size:t,asChild:a=!1,...i},d)=>{let u=a?n.g7:"button";return(0,s.jsx)(u,{className:(0,o.cn)(l({variant:r,size:t,className:e})),ref:d,...i})});d.displayName="Button"},1223:(e,r,t)=>{"use strict";t.d(r,{cn:()=>n});var s=t(1135),a=t(1009);function n(...e){return(0,a.m6)((0,s.W)(e))}},7973:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d,metadata:()=>l});var s=t(9351),a=t(5326),n=t.n(a),i=t(1409),o=t.n(i);t(5023);let l={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${n().variable} ${o().variable} antialiased`,children:e})})}},4889:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>e});var a=t(1851);let e=(await (0,a.createProxy)(String.raw`/Users/brookeduvall/Zero-Seats-Remaining/src/app/login.tsx`)).default;s()}catch(e){s(e)}},1)},3455:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>o});var a=t(9351),n=t(4889),i=e([n]);function o(){return(0,a.jsx)(n.Z,{})}n=(i.then?(await i)():i)[0],s()}catch(e){s(e)}})},3881:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(771);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[147,491,530],()=>t(4529));module.exports=s})();