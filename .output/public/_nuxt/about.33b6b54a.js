import{g as o}from"./assets.29d53677.js";import{J as c}from"./runtime.30b6540b.js";import{a as d,b as p,e as l,f as m,o as u,h as v,i as e,u as g,j as t,k as f}from"./entry.f02308e9.js";const h={class:"flex-1 flex flex-col justify-center page-section page-section-about"},y={class:"w-full sm:max-w-screen-sm lg:max-w-screen-lg mx-auto px-4 mb-4"},w=e("div",{class:"page-section-header mb-4 text-custom-1"},[e("span",null,"02."),e("span",null,"About Me")],-1),x={class:"flex"},_=e("div",{class:"px-4 flex-1 pr-6 mb-4"},[e("p",null,[t(" Hello, my name is "),e("span",{class:"text-primary"},"Alfian Dwi Nugraha"),t("! I have a passion in the internet world since I was 10 years old. I was browsing blogs and then trying to make some desktop applications, then again met this web-based programming. ")]),e("ul",null,[e("li",null,[t("🔭 I’m currently working on Freelance as "),e("span",{class:"text-primary"},"Web Dev Programmer")]),e("li",null,"🌱 I’m currently learning Golang, Python and Web3 Solana"),e("li",null,[t("🎓 I’m currently studying at the "),e("span",{class:"text-primary"},"Surabaya State University")])])],-1),b={class:"w-2/8 px-4 flex justify-end"},k={class:"position-relative mypic-wrapper"},I=["src"],L=f('<div class="w-full sm:max-w-screen-sm lg:max-w-screen-lg mx-auto px-4"><div class="flex"><div class="flex-1 pr-6 col-md"><div class="page-section-header mb-4"><span>My Avatar</span></div><div><p> The <span class="text-purple">avatars</span> that I use on almost a lot of social media, are taken from some anime characters that I like. In the form of <span class="text-primary">Shiroe</span> (Log Horizon), <span class="text-primary">Killua</span> (Hunter x Hunter), and <span class="text-primary">Kirito</span> (Sword Art online). </p></div></div><div class="w-2/8 col-md-4 col-md page-section-about-canvas-wrapper h-50 flex justify-end"><canvas id="page-section-about-canvas"></canvas></div></div></div>',1),B=d({__name:"about",setup(P){let a;const i=()=>{if(!a)return;const s=window.innerWidth;a.canvas.parentElement&&(a.canvas.style.width="100%",a.canvas.style.height="100%"),s<836?a.canvas.style.display="none":a.canvas.style.display="block"};return p(async()=>{l().isLoading.value=!0;const s=document.getElementById("page-section-about-canvas");if(s){const n=new c(s);await n.load(o("/scene_2.splinecode")),await new Promise(r=>setTimeout(r,1e3)),l().isLoading.value=!1,window.addEventListener("resize",i),a=n}}),m(()=>{a&&(a.dispose(),a=void 0,window.removeEventListener("resize",i))}),(s,n)=>(u(),v("section",h,[e("div",y,[w,e("div",x,[_,e("div",b,[e("div",k,[e("img",{src:("getPublicUrl"in s?s.getPublicUrl:g(o))("/mypic.jpg"),alt:"My Avatar",class:"d-block img-fluid rounded mypic"},null,8,I)])])])]),L]))}});export{B as default};
