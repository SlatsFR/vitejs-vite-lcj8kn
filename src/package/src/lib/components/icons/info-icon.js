import{SvelteComponent as s,init as e,safe_not_equal as l,create_slot as t,svg_element as n,attr as c,insert as i,append as o,update_slot_base as a,get_all_dirty_from_scope as u,get_slot_changes as r,transition_in as d,transition_out as p,detach as $}from"../../../../node_modules/svelte/internal/index.js";function h(s){let e,l,h,m;const w=s[3].default,z=t(w,s,s[2],null);return{c(){e=n("svg"),l=n("path"),h=n("title"),z&&z.c(),c(l,"d","M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"),c(e,"class",s[0]),c(e,"height",s[1]),c(e,"width",s[1]),c(e,"viewBox","0 0 16 16"),c(e,"xmlns","http://www.w3.org/2000/svg")},m(s,t){i(s,e,t),o(e,l),o(e,h),z&&z.m(h,null),m=!0},p(s,[l]){z&&z.p&&(!m||4&l)&&a(z,w,s,s[2],m?r(w,s[2],l,null):u(s[2]),null),(!m||1&l)&&c(e,"class",s[0]),(!m||2&l)&&c(e,"height",s[1]),(!m||2&l)&&c(e,"width",s[1])},i(s){m||(d(z,s),m=!0)},o(s){p(z,s),m=!1},d(s){s&&$(e),z&&z.d(s)}}}function m(s,e,l){let{$$slots:t={},$$scope:n}=e,{classes:c=""}=e,{size:i="24px"}=e;return s.$$set=s=>{"classes"in s&&l(0,c=s.classes),"size"in s&&l(1,i=s.size),"$$scope"in s&&l(2,n=s.$$scope)},[c,i,n,t]}class w extends s{constructor(s){super(),e(this,s,m,h,l,{classes:0,size:1})}}export{w as default};