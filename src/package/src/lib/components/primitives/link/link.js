import{SvelteComponent as e,init as t,safe_not_equal as s,create_slot as l,element as r,attr as n,insert as a,update_slot_base as c,get_all_dirty_from_scope as i,get_slot_changes as o,transition_in as u,transition_out as d,detach as f}from"../../../../../node_modules/svelte/internal/index.js";function $(e){let t,s,$;const k=e[4].default,p=l(k,e,e[3],null);return{c(){t=r("a"),p&&p.c(),n(t,"class",s=`${e[0]} tw_link dark:tw_link_dark`),n(t,"href",e[1]),n(t,"target",e[2])},m(e,s){a(e,t,s),p&&p.m(t,null),$=!0},p(e,[l]){p&&p.p&&(!$||8&l)&&c(p,k,e,e[3],$?o(k,e[3],l,null):i(e[3]),null),(!$||1&l&&s!==(s=`${e[0]} tw_link dark:tw_link_dark`))&&n(t,"class",s),(!$||2&l)&&n(t,"href",e[1]),(!$||4&l)&&n(t,"target",e[2])},i(e){$||(u(p,e),$=!0)},o(e){d(p,e),$=!1},d(e){e&&f(t),p&&p.d(e)}}}function k(e,t,s){let{$$slots:l={},$$scope:r}=t,{classes:n=""}=t,{href:a}=t,{target:c="_self"}=t;return e.$$set=e=>{"classes"in e&&s(0,n=e.classes),"href"in e&&s(1,a=e.href),"target"in e&&s(2,c=e.target),"$$scope"in e&&s(3,r=e.$$scope)},[n,a,c,r,l]}class p extends e{constructor(e){super(),t(this,e,k,$,s,{classes:0,href:1,target:2})}}export{p as default};