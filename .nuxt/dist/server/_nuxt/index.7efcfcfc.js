const a=["meta","link","base"],r=o=>{const t=[];for(const[s,e]of Object.entries(o)){if(e===!1||e==null)continue;let n=s;e!==!0&&(n+=`="${String(e).replace(/"/g,"&quot;")}"`),t.push(n)}return t.length>0?` ${t.join(" ")}`:""},d=o=>{const t=r(o.props),s=`<${o.tag}${t}>`;return a.includes(o.tag)?s:`${s}${o.children||""}</${o.tag}>`};function g(o){const t={htmlAttrs:{},bodyAttrs:{},tags:{head:[],bodyClose:[],bodyOpen:[]}};for(const s of o){if(s.tag==="htmlAttrs"||s.tag==="bodyAttrs"){t[s.tag]={...t[s.tag],...s.props};continue}t.tags[s.tagPosition||"head"].push(d(s))}return{headTags:t.tags.head.join(`
`),bodyTags:t.tags.bodyClose.join(`
`),bodyTagsOpen:t.tags.bodyOpen.join(`
`),htmlAttrs:r(t.htmlAttrs),bodyAttrs:r(t.bodyAttrs)}}async function l(o){const t={shouldRender:!0};if(await o.hooks.callHook("ssr:beforeRender",t),!t.shouldRender)return{headTags:"",bodyTags:"",bodyTagsOpen:"",htmlAttrs:"",bodyAttrs:""};const s={tags:await o.resolveTags()};await o.hooks.callHook("ssr:render",s);const e=g(s.tags),n={tags:s.tags,html:e};return await o.hooks.callHook("ssr:rendered",n),n.html}export{l as renderSSRHead};
//# sourceMappingURL=index.7efcfcfc.js.map
