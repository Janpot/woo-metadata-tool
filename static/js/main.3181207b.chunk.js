(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){e.exports=a(333)},330:function(e,t,a){},333:function(e,t,a){"use strict";a.r(t);var n=a(28);Object(n.b)();var r=a(0),l=a.n(r),c=a(15),o=a.n(c),i=a(20),u=a(69),s=a.n(u),m=a(114),p=a(53),f=a(115),h=a.n(f),b=a(116),g=a.n(b),d=a(117),v=a.n(d),E=a(5),j=a.n(E),O=(a(194),a(195),a(196),a(51)),y=a.n(O),w=a(120),x=a.n(w),k=a(121),N=a.n(k),T=a(118),C=a.n(T),S=a(119),z=a.n(S),M=a(29),G=a.n(M),q=a(122),B=a.n(q);function I(e){var t=e.markup,a=e.async,n=Object(r.useRef)();return Object(r.useEffect)(function(){return h.a.highlightElement(n.current,a)},[t]),l.a.createElement("pre",null,l.a.createElement("code",{ref:n,className:"language-markup"},t))}function R(e){var t=e.className,a=e.jsonld,n=(e.async,Object(p.a)(e,["className","jsonld","async"])),c=Object(r.useState)(!1),o=Object(i.a)(c,2),u=o[0],f=o[1],h=Object(r.useState)(!1),b=Object(i.a)(h,2),d=b[0],E=b[1],O=Object(r.useState)(!1),w=Object(i.a)(O,2),k=w[0],T=w[1];function S(){return(S=Object(m.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.copy(k);case 2:f(!0);case 3:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function M(){f(!1)}Object(r.useEffect)(function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.length>0){var a=t?"":"\n",n=t?0:2;return e.map(function(e){return['<script type="application/ld+json">',g()(JSON.stringify(e,null,n),n),"<\/script>"].join(a)}).join(a)}return"\x3c!-- No input yet --\x3e"}(a,d);T(e)},[a,d]);var q=a.length>0;return l.a.createElement("div",{className:j()(t)},l.a.createElement(y.a,{disableGutters:!0},l.a.createElement("div",{style:{flexGrow:1}}),l.a.createElement(C.a,{label:"Minified",control:l.a.createElement(z.a,{value:d,onChange:function(e){return E(e.target.checked)}})}),l.a.createElement(x.a,{variant:"outlined",onClick:function(){return S.apply(this,arguments)},disabled:!q},"Copy to clipboard")),l.a.createElement(I,{markup:k,async:n.async}),l.a.createElement(N.a,{action:l.a.createElement(G.a,{color:"inherit",onClick:M},l.a.createElement(B.a,null)),open:u,autoHideDuration:3e3,onClose:M,message:"Your snippet has been copied to the clipboard."}))}var A=a(52),D=a(123),J=a(124),F=a.n(J);function P(e){return l.a.createElement(F.a,Object.assign({label:e.label,fullWidth:!0,margin:"normal"},e))}function W(e){var t=e.value,a=Object(p.a)(e,["value"]),n=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,r=!t||n.test(t),c=r?null:"This is not a valid url";return l.a.createElement(P,Object.assign({error:!r,helperText:c,pattern:n},a))}function Y(e,t){var a=Object(r.useState)(e),n=Object(i.a)(a,2),l=n[0],c=n[1];return Object(r.useEffect)(function(){var e=function(){var e=[];l.blog&&e.push({"@context":"http://schema.org","@type":"Blog",url:l.blog});var t=[l.facebook,l.googleplus,l.twitter,l.yelp,l.foursquare].filter(function(e){return e});return t.length>0&&e.push({"@context":"http://schema.org","@type":"Organization",name:l.name,url:l.url,sameAs:t}),e}();t(e)},[l]),Object.keys(e).reduce(function(e,t){return e[t]={value:l[t],onChange:function(e){c(Object(D.a)({},l,Object(A.a)({},t,e.target.value)))}},e},{})}function H(e){var t=Y({name:e.name||"ACME",url:e.url||"http://www.acme.org",blog:"",facebook:"",googleplus:"",twitter:"",yelp:"",foursquare:""},e.onChange);return l.a.createElement("form",{className:e.className},l.a.createElement(P,Object.assign({label:"The name of your organization"},t.name)),l.a.createElement(W,Object.assign({label:"The url of your website"},t.url)),l.a.createElement(W,Object.assign({label:"The url of your blog"},t.blog)),l.a.createElement(W,Object.assign({label:"The url of your Facebook page"},t.facebook)),l.a.createElement(W,Object.assign({label:"The url of your Google+ page"},t.googleplus)),l.a.createElement(W,Object.assign({label:"The url of your Twitter page"},t.twitter)),l.a.createElement(W,Object.assign({label:"The url of your Yelp page"},t.yelp)),l.a.createElement(W,Object.assign({label:"The url of your Foursquare page"},t.foursquare)))}var L=a(125),V=a.n(L),$=a(126),K=a.n($),Q=a(49),U=a.n(Q);function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Z=l.a.createElement("title",null,"Shape"),_=l.a.createElement("path",{d:"M0 11c0 4.86 3.15 8.983 7.523 10.437.55.1.75-.24.75-.53 0-.26-.01-1.128-.015-2.046-3.06.665-3.705-1.297-3.705-1.297-.5-1.27-1.222-1.608-1.222-1.608-1-.682.077-.67.077-.67 1.105.078 1.686 1.134 1.686 1.134.982 1.68 2.576 1.195 3.2.913.1-.71.386-1.196.7-1.47-2.442-.277-5.01-1.22-5.01-5.436 0-1.202.428-2.182 1.13-2.952-.112-.28-.49-1.4.11-2.913 0 0 .922-.295 3.024 1.128A10.47 10.47 0 0 1 11 5.32c.935.004 1.876.126 2.754.37 2.1-1.423 3.023-1.127 3.023-1.127.6 1.516.223 2.634.11 2.912.705.77 1.13 1.75 1.13 2.952 0 4.225-2.572 5.156-5.023 5.428.396.342.747 1.01.747 2.036 0 1.47-.014 2.657-.014 3.02 0 .292.2.635.757.527C18.85 19.98 22 15.857 22 11c0-6.075-4.925-11-11-11S0 4.925 0 11z",fillRule:"evenodd"}),ee=function(e){return l.a.createElement("svg",X({width:22,height:22,viewBox:"0 0 22 22"},e),Z,_)};a.p;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var ae=l.a.createElement("path",{d:"M7.942 15.686c6.543 0 11.914-7.843 11.914-7.843S14.486 0 7.942 0C3.662 0 0 3.617 0 7.843c0 4.227 3.662 7.843 7.942 7.843zm-.666-5.09l.702.692.702-.693 3.97-3.92c.39-.384.39-1.005 0-1.388-.386-.383-1.015-.383-1.403 0L7.993 8.53 6.695 7.248c-.388-.383-1.017-.383-1.404 0s-.387 1.004 0 1.386l1.986 1.96z",fillRule:"evenodd"}),ne=function(e){return l.a.createElement("svg",te({width:20,height:16,viewBox:"0 0 20 16"},e),ae)};a.p;var re=function(){var e=V.a.parse(window.location.search).url;if(e){e=/https?:\/\//.test(e)?e:"http://".concat(e);var t=/https?:\/\/(?:www\.)?([^.]+)/.exec(e)||[];return{name:Object(i.a)(t,2)[1],url:e}}return null}(),le=Object(n.c)(function(e){return{headerIcon:{fill:"currentColor"},root:{display:"flex",flexDirection:"column",height:"100%"},content:{flexGrow:1,display:"flex",flexDirection:"row"},editor:{flex:1,overflow:"auto",padding:2*e.spacing.unit},viewer:{flex:2,overflow:"auto",padding:2*e.spacing.unit}}});a(330);var ce=a(50),oe=a(127),ie=a.n(oe),ue=Object(ce.createMuiTheme)({palette:{primary:{main:"#607d8b"}},typography:{useNextVariants:!0}});o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(n.a,{theme:ue},l.a.createElement(ie.a,null),l.a.createElement(function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=le();return l.a.createElement("div",{className:c.root},l.a.createElement(K.a,{position:"static",color:"primary"},l.a.createElement(y.a,null,l.a.createElement(U.a,{variant:"h6",color:"inherit",style:{flexGrow:1}},"WooRank Metadata Tool"),l.a.createElement(G.a,{color:"inherit",href:"https://github.com/janpot/woo-metadata-tool"},l.a.createElement(ee,{className:c.headerIcon})),l.a.createElement(G.a,{color:"inherit",href:"https://www.woorank.com"},l.a.createElement(ne,{className:c.headerIcon})))),l.a.createElement("div",{className:c.content},l.a.createElement(H,Object.assign({className:c.editor},re,{onChange:n})),l.a.createElement(R,{className:c.viewer,jsonld:a})))},null))),document.getElementById("root"))}},[[132,2,1]]]);
//# sourceMappingURL=main.3181207b.chunk.js.map