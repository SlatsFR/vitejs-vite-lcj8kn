import{SvelteComponent as t,init as e,safe_not_equal as a,create_component as s,mount_component as l,transition_in as n,transition_out as c,destroy_component as i,HtmlTag as o,empty as d,insert as r,detach as u}from"../../../../../node_modules/svelte/internal/index.js";import m from"../../../../../node_modules/xss/lib/index.js";import p from"../../../components/primitives/text/text.js";function $(t){let e,a;return{c(){e=new o(!1),a=d(),e.a=a},m(s,l){e.m(t[0],s,l),r(s,a,l)},p(t,a){1&a&&e.p(t[0])},d(t){t&&u(a),t&&e.d()}}}function f(t){let e,a;return e=new p({props:{classes:"tw_font-bold tw_mt-6",$$slots:{default:[$]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment)},m(t,s){l(e,t,s),a=!0},p(t,[a]){const s={};129&a&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){a||(n(e.$$.fragment,t),a=!0)},o(t){c(e.$$.fragment,t),a=!1},d(t){i(e,t)}}}function b(t,e,a){let{callback:s}=e,{callbackMetadata:l}=e,{selfSubmitFunction:n=null}=e,{stepMetadata:c}=e,{style:i={}}=e,o=s.getMessage(),d=m(o);return t.$$set=t=>{"callback"in t&&a(1,s=t.callback),"callbackMetadata"in t&&a(2,l=t.callbackMetadata),"selfSubmitFunction"in t&&a(3,n=t.selfSubmitFunction),"stepMetadata"in t&&a(4,c=t.stepMetadata),"style"in t&&a(5,i=t.style)},t.$$.update=()=>{66&t.$$.dirty&&(a(6,o=s.getMessage()),a(0,d=m(o)))},[d,s,l,n,c,i,o]}class M extends t{constructor(t){super(),e(this,t,b,f,a,{callback:1,callbackMetadata:2,selfSubmitFunction:3,stepMetadata:4,style:5})}}export{M as default};