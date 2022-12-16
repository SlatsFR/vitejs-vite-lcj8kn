import{SvelteComponent as t,init as n,safe_not_equal as r,create_slot as e,element as s,space as a,attr as i,insert as o,append as c,group_outros as u,transition_out as l,check_outros as d,transition_in as $,update_slot_base as f,get_all_dirty_from_scope as w,get_slot_changes as m,detach as _,binding_callbacks as p,create_component as g,mount_component as k,destroy_component as y}from"../../../../../node_modules/svelte/internal/index.js";import h from"../../icons/alert-icon.js";import j from"../../icons/info-icon.js";import x from"../../icons/warning-icon.js";function F(t){let n,r;return n=new j({}),{c(){g(n.$$.fragment)},m(t,e){k(n,t,e),r=!0},i(t){r||($(n.$$.fragment,t),r=!0)},o(t){l(n.$$.fragment,t),r=!1},d(t){y(n,t)}}}function v(t){let n,r;return n=new x({}),{c(){g(n.$$.fragment)},m(t,e){k(n,t,e),r=!0},i(t){r||($(n.$$.fragment,t),r=!0)},o(t){l(n.$$.fragment,t),r=!1},d(t){y(n,t)}}}function b(t){let n,r;return n=new h({}),{c(){g(n.$$.fragment)},m(t,e){k(n,t,e),r=!0},i(t){r||($(n.$$.fragment,t),r=!0)},o(t){l(n.$$.fragment,t),r=!1},d(t){y(n,t)}}}function q(t){let n,r,p,g,k,y,h,j;const x=[b,v,F],q=[];function A(t,n){return"error"===t[1]?0:"warning"===t[1]?1:2}p=A(t),g=q[p]=x[p](t);const B=t[5].default,C=e(B,t,t[4],null);return{c(){n=s("div"),r=s("p"),g.c(),k=a(),y=s("span"),C&&C.c(),i(r,"class","tw_grid tw_grid-cols-[2em_1fr]"),i(n,"class",h=`${z(t[1])} tw_alert dark:tw_alert_dark tw_input-spacing tw_outline-none`),i(n,"id",t[0]),i(n,"tabindex","-1")},m(e,s){o(e,n,s),c(n,r),q[p].m(r,null),c(r,k),c(r,y),C&&C.m(y,null),t[6](n),j=!0},p(t,[e]){let s=p;p=A(t),p!==s&&(u(),l(q[s],1,1,(()=>{q[s]=null})),d(),g=q[p],g||(g=q[p]=x[p](t),g.c()),$(g,1),g.m(r,k)),C&&C.p&&(!j||16&e)&&f(C,B,t,t[4],j?m(B,t[4],e,null):w(t[4]),null),(!j||2&e&&h!==(h=`${z(t[1])} tw_alert dark:tw_alert_dark tw_input-spacing tw_outline-none`))&&i(n,"class",h),(!j||1&e)&&i(n,"id",t[0])},i(t){j||($(g),$(C,t),j=!0)},o(t){l(g),l(C,t),j=!1},d(r){r&&_(n),q[p].d(),C&&C.d(r),t[6](null)}}}function z(...t){return t.reduce(((t,n)=>{switch(n){case"error":return`${t} tw_alert-error dark:tw_alert-error_dark`;case"info":return`${t} tw_alert-info dark:tw_alert-info_dark`;case"success":return`${t} tw_alert-success dark:tw_alert-success_dark`;case"warning":return`${t} tw_alert-warning dark:tw_alert-warning_dark`;default:return t}}),"")}function A(t,n,r){let e,{$$slots:s={},$$scope:a}=n,{id:i}=n,{needsFocus:o=!1}=n,{type:c=""}=n;return t.$$set=t=>{"id"in t&&r(0,i=t.id),"needsFocus"in t&&r(3,o=t.needsFocus),"type"in t&&r(1,c=t.type),"$$scope"in t&&r(4,a=t.$$scope)},t.$$.update=()=>{12&t.$$.dirty&&o&&e&&e.focus()},[i,c,e,o,a,s,function(t){p[t?"unshift":"push"]((()=>{e=t,r(2,e)}))}]}class B extends t{constructor(t){super(),n(this,t,A,q,r,{id:0,needsFocus:3,type:1})}}export{B as default};