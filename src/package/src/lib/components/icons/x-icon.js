import{SvelteComponent as s,init as e,safe_not_equal as t,create_slot as l,svg_element as n,attr as i,insert as c,append as o,update_slot_base as u,get_all_dirty_from_scope as a,get_slot_changes as r,transition_in as L,transition_out as d,detach as p}from"../../../../node_modules/svelte/internal/index.js";function $(s){let e,t,$,h;const C=s[3].default,w=l(C,s,s[2],null);return{c(){e=n("svg"),t=n("path"),$=n("title"),w&&w.c(),i(t,"d","M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"),i(e,"class",s[0]),i(e,"height",s[1]),i(e,"viewBox","0 0 30 30"),i(e,"width",s[1]),i(e,"xmlns","http://www.w3.org/2000/svg")},m(s,l){c(s,e,l),o(e,t),o(e,$),w&&w.m($,null),h=!0},p(s,[t]){w&&w.p&&(!h||4&t)&&u(w,C,s,s[2],h?r(C,s[2],t,null):a(s[2]),null),(!h||1&t)&&i(e,"class",s[0]),(!h||2&t)&&i(e,"height",s[1]),(!h||2&t)&&i(e,"width",s[1])},i(s){h||(L(w,s),h=!0)},o(s){d(w,s),h=!1},d(s){s&&p(e),w&&w.d(s)}}}function h(s,e,t){let{$$slots:l={},$$scope:n}=e,{classes:i=""}=e,{size:c="24px"}=e;return s.$$set=s=>{"classes"in s&&t(0,i=s.classes),"size"in s&&t(1,c=s.size),"$$scope"in s&&t(2,n=s.$$scope)},[i,c,n,l]}class C extends s{constructor(s){super(),e(this,s,h,$,t,{classes:0,size:1})}}export{C as default};