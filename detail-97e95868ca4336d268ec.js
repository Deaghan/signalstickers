(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{630:function(e,t,a){"use strict";a.r(t),function(e){var r,n=a(74),o=a(1),l=a.n(o),s=a(112),i=a(15),c=a(73),d=a(674),u=a.n(d),m=a(82),f=a.n(m),p=a(188),k=a(189),b=a(643),g=a(190),y=a(687),h=a(690),v=a(692),E=a(693);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const S=Object(n.a)("div")({name:"StickerPackDetail",class:"s11r72gg"}),x=Object(n.a)("div")({name:"StickerGridView",class:"sk46ngu"}),N=(e,t,a)=>l.a.createElement(p.a,{href:e,key:a},t),L=()=>{const{setSearchQuery:e,searcher:t}=Object(o.useContext)(k.b),a=Object(i.k)(),r=Object(b.a)(),{packId:n}=Object(i.m)(),d="string"==typeof r.key?r.key:void 0,[m,w]=Object(o.useState)(),[L,H]=Object(o.useState)("");f()(async()=>{try{if(!n)return;w(await Object(g.c)(n,d))}catch(e){e.code&&H(e.code)}},[d,n]);const G=l.a.useCallback(r=>{r.preventDefault(),t&&r.currentTarget.textContent&&(e(t.buildQueryString({attributeQueries:[{author:r.currentTarget.textContent}]})),a.push("/"))},[a,t,e]);if(!n||!m){if(L)switch(L){case"NO_KEY_PROVIDED":return l.a.createElement(v.a,null,l.a.createElement("p",null,"This sticker pack is not listed in the Signal Stickers directory. However, if you have the pack's ",l.a.createElement("strong",null,"key"),", you can still preview the sticker pack by supplying a ",l.a.createElement("code",null,"key"),"parameter in the URL."),l.a.createElement("p",null,"For example: ",l.a.createElement("code",null,`/pack/${n}?key=sticker-pack-key`)));case"MANIFEST_DECRYPT":return l.a.createElement(v.a,null,l.a.createElement("p",null,"The provided key is invalid."));default:return l.a.createElement(v.a,null,l.a.createElement("p",null,"An unknown error occurred (",L,")."))}return null}const C=m.manifest.author.trim()?m.manifest.author:"Anonymous";return l.a.createElement(S,{className:"px-1 px-sm-4 py-4 mt-0 my-sm-4"},m.meta.nsfw&&l.a.createElement(y.a,null),l.a.createElement("div",{className:"row mb-4 flex-column-reverse flex-lg-row"},l.a.createElement("div",{className:"col-12 col-lg-8 mt-2 mt-lg-0"},l.a.createElement("h1",null,m.manifest.title),l.a.createElement("button",{type:"button",role:"link",title:"View more packs from "+C,className:"btn btn-link p-0 border-0 text-left",onClick:G},C)),l.a.createElement("div",{className:"col-12 col-lg-4 d-flex d-lg-block justify-content-between text-md-right mb-3 mb-lg-0"},m.meta.unlisted?null:l.a.createElement(c.Link,{to:"/",className:"btn btn-light mr-2"},l.a.createElement(s.a,{className:"arrow-left-icon"})," Back"),l.a.createElement(p.a,{href:`https://signal.art/addstickers/#pack_id=${n}&pack_key=${m.meta.key}`,className:"btn btn-primary",title:"Add to Signal"},l.a.createElement(s.h,{className:"plus-icon"})," Add to Signal"))),!m.meta.unlisted&&l.a.createElement("div",{className:"row mb-4"},l.a.createElement("div",{className:"col-12 col-lg-9"},l.a.createElement("ul",{className:"list-group"},m.meta.original&&l.a.createElement("li",{className:"list-group-item text-wrap text-break"},l.a.createElement(s.j,{title:"Original",className:"star-icon mr-4"}),"This pack has been created exclusively for Signal by the artist, from original artworks."),m.meta.animated&&l.a.createElement("li",{className:"list-group-item text-wrap text-break"},l.a.createElement(s.e,{title:"Animated",className:"text-primary mr-4"}),"This pack contains animated stickers!"),m.meta.source&&l.a.createElement("li",{className:"list-group-item text-wrap text-break"},l.a.createElement(s.b,{title:"Source",className:"mr-4 text-primary mention-icon"}),l.a.createElement("div",null,l.a.createElement(u.a,{componentDecorator:N},m.meta.source))),l.a.createElement("li",{className:"list-group-item text-wrap text-break"},l.a.createElement(s.f,{title:"Sticker Count",className:"mr-4 text-primary"}),m.manifest.stickers.length),l.a.createElement("li",{className:"list-group-item"},l.a.createElement(s.k,{title:"Tags",className:"mr-4 text-primary"}),l.a.createElement("div",{className:"text-wrap text-break mb-n1"},m.meta.tags&&m.meta.tags.length>0?m.meta.tags.map(e=>l.a.createElement(E.a,{key:e,className:"mb-1 mr-1",label:e})):"None"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(x,null,m.manifest.stickers.map(e=>l.a.createElement(h.a,{packId:n,packKey:m.meta.key,stickerId:e.id,key:e.id}))))))};w(L,"useContext{{\n    setSearchQuery,\n    searcher\n  }}\nuseHistory{history}\nuseQuery{query}\nuseParams{{\n    packId\n  }}\nuseState{[stickerPack, setStickerPack]}\nuseState{[stickerPackError, setStickerPackError]('')}\nuseAsyncEffect{}\nuseCallback{onAuthorClick}",()=>[i.k,b.a,i.m,f.a]);const H=L;var G,C;t.default=H,a(694),(G="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(G.register(S,"StickerPackDetail","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),G.register(x,"StickerGridView","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),G.register(N,"linkifyHrefDecorator","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),G.register(L,"StickerPackDetailComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),G.register(H,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx")),(C="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&C(e)}.call(this,a(27)(e))},643:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c}));var r,n,o,l=a(641),s=a.n(l),i=a(15);function c(){return s.a.parse(Object(i.l)().search)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(c,"useLocation{}",()=>[i.l]),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(c,"useQuery","/home/travis/build/signalstickers/signalstickers/src/hooks/use-query.ts"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}).call(this,a(27)(e))},687:function(e,t,a){"use strict";(function(e){var r,n=a(74),o=a(688),l=a.n(o),s=a(112),i=a(73),c=a(1),d=a.n(c),u=a(188);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const f=Object(n.a)("div")({name:"NsfwModal",class:"n11e8w11",vars:{"n11e8w11-0":[()=>l.a.backdropfilter?.75:1]}}),p=()=>{Object(c.useEffect)(()=>{$("#nsfw-modal").modal({show:!0,keyboard:!1,backdrop:"static"}),$("#nsfw-modal").addClass("fade"),$(".modal-backdrop").css("display","none")},[]);return d.a.createElement(f,{id:"nsfw-modal",className:"modal",role:"dialog"},d.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},d.a.createElement("div",{className:"modal-content"},d.a.createElement("div",{className:"modal-header"},d.a.createElement("h3",{className:"modal-title"},d.a.createElement(s.d,{className:"mr-1 text-primary"})," Content Warning")),d.a.createElement("div",{className:"modal-body"},d.a.createElement("p",null,"This pack has been marked ",d.a.createElement("i",null,"Not Safe For Work")," (",d.a.createElement(u.a,{href:"https://www.urbandictionary.com/define.php?term=NSFW"},"NSFW"),").",d.a.createElement("br",null),"This means that it may contain nudity, sexual content, or other potentially disturbing subject matter."),d.a.createElement("p",null,"You should not view this pack at work, or with children around.")),d.a.createElement("div",{className:"modal-footer"},d.a.createElement(i.Link,{to:"/",className:"btn btn-light",title:"Go back home"},"Go back home"),d.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:()=>{$("#nsfw-modal").modal("hide")}},"Show the pack")))))};m(p,"useEffect{}");const k=p;var b,g;t.a=k,a(689),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(f,"NsfwModal","/home/travis/build/signalstickers/signalstickers/src/components/pack/NsfwModal.tsx"),b.register(p,"NsfwModalComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/NsfwModal.tsx"),b.register(k,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/NsfwModal.tsx")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)}).call(this,a(27)(e))},688:function(e,t){!function(t){var a="Modernizr"in t,r=t.Modernizr;!function(e,t,a,r){function n(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function l(){return"function"!=typeof a.createElement?a.createElement(arguments[0]):w?a.createElementNS.call(a,"http://www.w3.org/2000/svg",arguments[0]):a.createElement.apply(a,arguments)}function s(e,t,r,n){var o,s,i,c,d="modernizr",u=l("div"),m=function(){var e=a.body;return e||((e=l(w?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(i=l("div")).id=n?n[r]:d+(r+1),u.appendChild(i);return(o=l("style")).type="text/css",o.id="s"+d,(m.fake?m:u).appendChild(o),m.appendChild(u),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(a.createTextNode(e)),u.id=d,m.fake&&(m.style.background="",m.style.overflow="hidden",c=E.style.overflow,E.style.overflow="hidden",E.appendChild(m)),s=t(u,e),m.fake?(m.parentNode.removeChild(m),E.style.overflow=c,E.offsetHeight):u.parentNode.removeChild(u),!!s}function i(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()})).replace(/^ms-/,"-ms-")}function c(e,a){var n=e.length;if("CSS"in t&&"supports"in t.CSS){for(;n--;)if(t.CSS.supports(i(e[n]),a))return!0;return!1}if("CSSSupportsRule"in t){for(var o=[];n--;)o.push("("+i(e[n])+":"+a+")");return s("@supports ("+(o=o.join(" or "))+") { #modernizr { position: absolute; } }",(function(e){return"absolute"===function(e,a,r){var n;if("getComputedStyle"in t){n=getComputedStyle.call(t,e,a);var o=t.console;if(null!==n)r&&(n=n.getPropertyValue(r));else if(o){o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else n=!a&&e.currentStyle&&e.currentStyle[r];return n}(e,null,"position")}))}return r}function d(e){return e.replace(/([a-z])-([a-z])/g,(function(e,t,a){return t+a.toUpperCase()})).replace(/^-/,"")}function u(e,t,a,s){function i(){m&&(delete x.style,delete x.modElem)}if(s=!n(s,"undefined")&&s,!n(a,"undefined")){var u=c(e,a);if(!n(u,"undefined"))return u}for(var m,f,p,k,b,g=["modernizr","tspan","samp"];!x.style&&g.length;)m=!0,x.modElem=l(g.shift()),x.style=x.modElem.style;for(p=e.length,f=0;f<p;f++)if(k=e[f],b=x.style[k],o(k,"-")&&(k=d(k)),x.style[k]!==r){if(s||n(a,"undefined"))return i(),"pfx"!==t||k;try{x.style[k]=a}catch(e){}if(x.style[k]!==b)return i(),"pfx"!==t||k}return i(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,a,r,o){var l=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+v.join(l+" ")+l).split(" ");return n(t,"string")||n(t,"undefined")?u(s,t,r,o):function(e,t,a){var r;for(var o in e)if(e[o]in t)return!1===a?e[o]:n(r=t[e[o]],"function")?m(r,a||t):r;return!1}(s=(e+" "+N.join(l+" ")+l).split(" "),t,a)}function p(e,t,a){return f(e,r,r,t,a)}var k=[],b={_version:"3.11.3",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var a=this;setTimeout((function(){t(a[e])}),0)},addTest:function(e,t,a){k.push({name:e,fn:t,options:a})},addAsyncTest:function(e){k.push({name:null,fn:e})}},g=function(){};g.prototype=b,g=new g;var y=[],h="Moz O ms Webkit",v=b._config.usePrefixes?h.split(" "):[];b._cssomPrefixes=v;var E=a.documentElement,w="svg"===E.nodeName.toLowerCase(),S={elem:l("modernizr")};g._q.push((function(){delete S.elem}));var x={style:S.elem.style};g._q.unshift((function(){delete x.style}));var N=b._config.usePrefixes?h.toLowerCase().split(" "):[];b._domPrefixes=N,b.testAllProps=f,b.testAllProps=p,g.addTest("backdropfilter",p("backdropFilter")),function(){var e,t,a,r,o,l;for(var s in k)if(k.hasOwnProperty(s)){if(e=[],(t=k[s]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(a=0;a<t.options.aliases.length;a++)e.push(t.options.aliases[a].toLowerCase());for(r=n(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(l=e[o].split(".")).length?g[l[0]]=r:(g[l[0]]&&(!g[l[0]]||g[l[0]]instanceof Boolean)||(g[l[0]]=new Boolean(g[l[0]])),g[l[0]][l[1]]=r),y.push((r?"":"no-")+l.join("-"))}}(),delete b.addTest,delete b.addAsyncTest;for(var L=0;L<g._q.length;L++)g._q[L]();e.Modernizr=g}(t,t,document),e.exports=t.Modernizr,a?t.Modernizr=r:delete t.Modernizr}(window)},689:function(e,t,a){"use strict";a.r(t)},690:function(e,t,a){"use strict";(function(e){var r,n=a(74),o=a(1),l=a.n(o),s=a(82),i=a.n(s),c=a(190);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const u=Object(n.a)("div")({name:"Sticker",class:"sahlm9h"}),m=({packId:e,packKey:t,stickerId:a})=>{const[r,n]=Object(o.useState)(""),[s,d]=Object(o.useState)("");return i()(async r=>{const[o,l]=await Promise.all([Object(c.b)(e,t,a),Object(c.a)(e,t,a)]);r()&&(n(o),d(l))},[e,t,a]),l.a.createElement(u,null,r&&s?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"emoji"},r),l.a.createElement("img",{src:s,alt:"Sticker"})):l.a.createElement("div",{className:"spinner-border text-light",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))};d(m,"useState{[emoji, setEmoji]('')}\nuseState{[stickerSrc, setStickerSrc]('')}\nuseAsyncEffect{}",()=>[i.a]);const f=m;var p,k;t.a=f,a(691),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(u,"Sticker","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx"),p.register(m,"StickerComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx"),p.register(f,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx")),(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&k(e)}).call(this,a(27)(e))},691:function(e,t,a){"use strict";a.r(t)},692:function(e,t,a){"use strict";(function(e){var r,n=a(1),o=a.n(n);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const l=e=>o.a.createElement("div",{className:"p-4 my-4"},o.a.createElement("div",{className:"row mb-4"},o.a.createElement("div",{className:"col-10 offset-1 alert alert-danger"},o.a.createElement("h3",{className:"alert-heading mt-1 mb-3"},"Error"),e.children))),s=l;var i,c;t.a=s,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(l,"StickerPackError","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackError.tsx"),i.register(s,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackError.tsx")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,a(27)(e))},693:function(e,t,a){"use strict";(function(e){var r,n=a(192),o=a(1),l=a.n(o),s=a(15),i=a(189);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const d=({className:e,label:t})=>{const{searcher:a,setSearchQuery:r}=Object(o.useContext)(i.b),c=Object(s.k)(),d=l.a.useCallback(e=>{e.preventDefault(),a&&(r(a.buildQueryString({attributeQueries:[{tag:t}]})),c.push("/"))},[a]);return l.a.createElement("button",{type:"button",title:`View more packs with tag "${t}"`,className:Object(n.a)("btn btn-primary btn-sm px-2 py-1 rounded-lg text-capitalize text-nowrap",e),role:"link",onClick:d},t)};c(d,"useContext{{searcher, setSearchQuery}}\nuseHistory{history}\nuseCallback{onTagClick}",()=>[s.k]);const u=d;var m,f;t.a=u,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(d,"TagComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/Tag.tsx"),m.register(u,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/Tag.tsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,a(27)(e))},694:function(e,t,a){"use strict";a.r(t)}}]);
//# sourceMappingURL=detail-97e95868ca4336d268ec.js.map