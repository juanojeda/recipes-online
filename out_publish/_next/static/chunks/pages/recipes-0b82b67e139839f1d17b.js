_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("zoAU"),a=t("7KCV");n.__esModule=!0,n.default=void 0;var o,c=a(t("q1tI")),u=t("elyg"),i=t("nOHt"),s=new Map,f=window.IntersectionObserver,p={};var l=function(e,n){var t=o||(f?o=new f((function(e){e.forEach((function(e){if(s.has(e.target)){var n=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),s.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}s.delete(e)}):function(){}};function d(e,n,t,r){(0,u.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),p[n+"%"+t]=!0)}var v=function(e){var n=!1!==e.prefetch,t=c.default.useState(),a=r(t,2),o=a[0],s=a[1],v=(0,i.useRouter)(),h=v&&v.pathname||"/",w=c.default.useMemo((function(){var n=(0,u.resolveHref)(h,e.href,!0),t=r(n,2),a=t[0],o=t[1];return{href:a,as:e.as?(0,u.resolveHref)(h,e.as):o||a}}),[h,e.href,e.as]),b=w.href,y=w.as;c.default.useEffect((function(){if(n&&f&&o&&o.tagName&&(0,u.isLocalURL)(b)&&!p[b+"%"+y])return l(o,(function(){d(v,b,y)}))}),[n,o,b,y,v]);var g=e.children,m=e.replace,_=e.shallow,E=e.scroll;"string"===typeof g&&(g=c.default.createElement("a",null,g));var x=c.Children.only(g),O={ref:function(e){e&&s(e),x&&"object"===typeof x&&x.ref&&("function"===typeof x.ref?x.ref(e):"object"===typeof x.ref&&(x.ref.current=e))},onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:o}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,b,y,m,_,E)}};return n&&(O.onMouseEnter=function(e){(0,u.isLocalURL)(b)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),d(v,b,y,{priority:!0}))}),(e.passHref||"a"===x.type&&!("href"in x.props))&&(O.href=(0,u.addBasePath)((0,u.addLocale)(y,v&&v.locale,v&&v.defaultLocale))),c.default.cloneElement(x,O)};n.default=v},iinW:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recipes",function(){return t("jwLr")}])},jwLr:function(e,n,t){"use strict";t.r(n);var r=t("o0o1"),a=t.n(r),o=t("HaE+"),c=t("q1tI"),u=t.n(c),i=t("yzAy"),s=t("h4VS"),f=t("YFqc"),p=t.n(f),l=t("vOnD"),d=t("xyTB"),v=u.a.createElement;function h(){var e=Object(s.a)(["\n  background: ",";\n  border-radius: 2px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.125);\n  display: block;\n  margin: 0.5rem;\n  padding: 1rem;\n  transition: 200ms ease all;\n  &:hover {\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    color: ",";\n    cursor: pointer;\n    transform: translateY(-1px);\n  }\n"]);return h=function(){return e},e}function w(){var e=Object(s.a)(["\n  padding: 1rem;\n"]);return w=function(){return e},e}var b=l.c.div(w()),y=l.c.a(h(),d.a.__raw.milk,d.a.__raw.oregano),g=function(e){var n=e.recipes;return v(b,null,n.map((function(e){var n=e.id,t=e.title,r=e.slug;return v(p.a,{key:n,href:"/recipe/[recipeId]",as:"recipe/".concat(r)},v(y,null,t))})))};g.defaultProps={recipes:[]};var m=g,_=u.a.createElement,E=function(){var e=Object(o.a)(a.a.mark((function e(n){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Object(i.a)(),"/getRecipes"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",{recipes:r});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=function(){var e=Object(c.useState)([]),n=e[0],t=e[1];return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(a.a.mark((function e(){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:n=e.sent,r=n.recipes,t(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),_(m,{recipes:n})}}},[["iinW",0,2,1,3,5,4]]]);