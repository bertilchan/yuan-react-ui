(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"0Bia":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("dEAq"),o=n("9kvl"),c=(n("mdU6"),function(e){var t=e.location,n=Object(a["useContext"])(l["context"]),c=n.base,i=n.locale,u=n.config.locales,s=u.find((function(e){var t=e.name;return t!==i}));function m(e){var n=c.replace("/".concat(i),""),a=t.pathname.replace(c,n)||"/";if(e!==u[0].name){var r="".concat(n,"/").concat(e).replace(/\/\//,"/"),l=t.pathname.replace(c.replace(/^\/$/,"//"),"");return"".concat(r).concat(l).replace(/\/$/,"")}return a}return s?r.a.createElement("div",{className:"__dumi-default-locale-select","data-locale-count":u.length},u.length>2?r.a.createElement("select",{value:i,onChange:function(e){return o["a"].push(m(e.target.value))}},u.map((function(e){return r.a.createElement("option",{value:e.name,key:e.name},e.label)}))):r.a.createElement(l["Link"],{to:m(s.name)},s.label)):null}),i=c,u=(n("fVI1"),function(e){var t=e.onMobileMenuClick,n=e.navPrefix,o=e.location,c=e.darkPrefix,u=Object(a["useContext"])(l["context"]),s=u.base,m=u.config,f=m.mode,d=m.title,p=m.logo,h=u.nav;return r.a.createElement("div",{className:"__dumi-default-navbar","data-mode":f},r.a.createElement("button",{className:"__dumi-default-navbar-toggle",onClick:t}),r.a.createElement(l["Link"],{className:"__dumi-default-navbar-logo",style:{backgroundImage:p&&"url('".concat(p,"')")},to:s,"data-plaintext":!1===p||void 0},d),r.a.createElement("nav",null,n,h.map((function(e){var t,n=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&r.a.createElement("ul",null,e.children.map((function(e){return r.a.createElement("li",{key:e.path},r.a.createElement(l["NavLink"],{to:e.path},e.title))})));return r.a.createElement("span",{key:e.title||e.path},e.path?r.a.createElement(l["NavLink"],{to:e.path,key:e.path},e.title):e.title,n)})),r.a.createElement("div",{className:"__dumi-default-navbar-tool"},r.a.createElement(i,{location:o}),c)))}),s=u,m=(n("hJnp"),["slugs"]);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=p(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function p(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var h=function(e){var t=e.slugs,n=d(e,m);return r.a.createElement("ul",f({role:"slug-list"},n),t.filter((function(e){var t=e.depth;return t>1&&t<4})).map((function(e){return r.a.createElement("li",{key:e.heading,title:e.value,"data-depth":e.depth},r.a.createElement(l["AnchorLink"],{to:"#".concat(e.heading)},r.a.createElement("span",null,e.value)))})))},v=h,y=(n("Mpie"),function(e){var t=e.mobileMenuCollapsed,n=e.location,o=e.darkPrefix,c=Object(a["useContext"])(l["context"]),u=c.config,s=u.logo,m=u.title,f=u.description,d=u.mode,p=u.repository.url,h=c.menu,y=c.nav,g=c.base,b=c.meta,E=Boolean((b.hero||b.features||b.gapless)&&"site"===d)||!1===b.sidemenu||void 0;return r.a.createElement("div",{className:"__dumi-default-menu","data-mode":d,"data-hidden":E,"data-mobile-show":!t||void 0},r.a.createElement("div",{className:"__dumi-default-menu-inner"},r.a.createElement("div",{className:"__dumi-default-menu-header"},r.a.createElement(l["Link"],{to:g,className:"__dumi-default-menu-logo",style:{backgroundImage:s&&"url('".concat(s,"')")}}),r.a.createElement("h1",null,m),r.a.createElement("p",null,f),/github\.com/.test(p)&&"doc"===d&&r.a.createElement("p",null,r.a.createElement("object",{type:"image/svg+xml",data:"https://img.shields.io/github/stars".concat(p.match(/((\/[^\/]+){2})$/)[1],"?style=social")}))),r.a.createElement("div",{className:"__dumi-default-menu-mobile-area"},!!y.length&&r.a.createElement("ul",{className:"__dumi-default-menu-nav-list"},y.map((function(e){var t,n=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&r.a.createElement("ul",null,e.children.map((function(e){return r.a.createElement("li",{key:e.path||e.title},r.a.createElement(l["NavLink"],{to:e.path},e.title))})));return r.a.createElement("li",{key:e.path||e.title},e.path?r.a.createElement(l["NavLink"],{to:e.path},e.title):e.title,n)}))),r.a.createElement(i,{location:n}),o),r.a.createElement("ul",{className:"__dumi-default-menu-list"},!E&&h.map((function(e){var t,a=Boolean(null===(t=b.slugs)||void 0===t?void 0:t.length),o=e.children&&Boolean(e.children.length),c="menu"===b.toc&&!o&&a&&e.path===n.pathname.replace(/([^^])\/$/,"$1");return r.a.createElement("li",{key:e.path||e.title},r.a.createElement(l["NavLink"],{to:e.path,exact:!(e.children&&e.children.length)},e.title),Boolean(e.children&&e.children.length)&&r.a.createElement("ul",null,e.children.map((function(e){return r.a.createElement("li",{key:e.path},r.a.createElement(l["NavLink"],{to:e.path,exact:!0},r.a.createElement("span",null,e.title)),Boolean("menu"===b.toc&&"undefined"!==typeof window&&e.path===n.pathname&&a)&&r.a.createElement(v,{slugs:b.slugs}))}))),c&&r.a.createElement(v,{slugs:b.slugs}))})))))}),g=y;n("AK2Z");function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}function E(e,t){return S(e)||O(e,t)||k(e,t)||w()}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function k(e,t){if(e){if("string"===typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function O(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function S(e){if(Array.isArray(e))return e}var j=function(e,t){var n=t.toLowerCase().indexOf(e.toLowerCase()),a=e.length;return r.a.createElement(r.a.Fragment,null,t.substring(0,n),r.a.createElement("span",{className:"__dumi-default-search-highlight"},t.substring(n,n+a)),t.substring(n+a,t.length))},A=function(){var e=Object(a["useState"])(""),t=E(e,2),n=t[0],o=t[1],c=Object(a["useState"])([]),i=E(c,2),u=i[0],s=i[1],m=Object(a["useRef"])(),f=Object(l["useSearch"])(n),d=r.a.createElement("svg",{className:"__dumi-default-search-empty",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2347",width:"32",height:"32"},r.a.createElement("path",{d:"M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z"}));return Object(a["useEffect"])((function(){Array.isArray(f)?s(f):"function"===typeof f&&f(".".concat(m.current.className))}),[f]),r.a.createElement("div",{className:"__dumi-default-search"},r.a.createElement("input",b({className:"__dumi-default-search-input",type:"search",ref:m},Array.isArray(f)?{value:n,onChange:function(e){return o(e.target.value)}}:{})),r.a.createElement("ul",null,u.length>0&&u.map((function(e){var t;return r.a.createElement("li",{key:e.path,onClick:function(){return o("")}},r.a.createElement(l["AnchorLink"],{to:e.path},(null===(t=e.parent)||void 0===t?void 0:t.title)&&r.a.createElement("span",null,e.parent.title),j(n,e.title)))})),0===u.length&&n&&r.a.createElement("li",{style:{textAlign:"center"}},d)))};n("Zkgb");function x(e,t){return C(e)||P(e,t)||N(e,t)||M()}function M(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function N(e,t){if(e){if("string"===typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function P(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function C(e){if(Array.isArray(e))return e}var z=function(e){var t=e.darkSwitch,n=e.onDarkSwitchClick,a=e.isSideMenu,o=["dark","light","auto"],c=Object(l["usePrefersColor"])(),i=x(c,2),u=i[0],s=i[1],m=u,f=r.a.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4026",width:"22",height:"22"},r.a.createElement("path",{d:"M915.2 476.16h-43.968c-24.704 0-44.736 16-44.736 35.84s20.032 35.904 44.736 35.904H915.2c24.768 0 44.8-16.064 44.8-35.904s-20.032-35.84-44.8-35.84zM512 265.6c-136.704 0-246.464 109.824-246.464 246.4 0 136.704 109.76 246.464 246.464 246.464S758.4 648.704 758.4 512c0-136.576-109.696-246.4-246.4-246.4z m0 425.6c-99.008 0-179.2-80.128-179.2-179.2 0-98.944 80.192-179.2 179.2-179.2S691.2 413.056 691.2 512c0 99.072-80.192 179.2-179.2 179.2zM197.44 512c0-19.84-19.136-35.84-43.904-35.84H108.8c-24.768 0-44.8 16-44.8 35.84s20.032 35.904 44.8 35.904h44.736c24.768 0 43.904-16.064 43.904-35.904zM512 198.464c19.776 0 35.84-20.032 35.84-44.8v-44.8C547.84 84.032 531.84 64 512 64s-35.904 20.032-35.904 44.8v44.8c0 24.768 16.128 44.864 35.904 44.864z m0 627.136c-19.776 0-35.904 20.032-35.904 44.8v44.736C476.096 940.032 492.16 960 512 960s35.84-20.032 35.84-44.8v-44.736c0-24.768-16.064-44.864-35.84-44.864z m329.92-592.832c17.472-17.536 20.288-43.072 6.4-57.024-14.016-14.016-39.488-11.2-57.024 6.336-4.736 4.864-26.496 26.496-31.36 31.36-17.472 17.472-20.288 43.008-6.336 57.024 13.952 14.016 39.488 11.2 57.024-6.336 4.8-4.864 26.496-26.56 31.296-31.36zM213.376 759.936c-4.864 4.8-26.56 26.624-31.36 31.36-17.472 17.472-20.288 42.944-6.4 56.96 14.016 13.952 39.552 11.2 57.024-6.336 4.8-4.736 26.56-26.496 31.36-31.36 17.472-17.472 20.288-43.008 6.336-56.96-14.016-13.952-39.552-11.072-56.96 6.336z m19.328-577.92c-17.536-17.536-43.008-20.352-57.024-6.336-14.08 14.016-11.136 39.488 6.336 57.024 4.864 4.864 26.496 26.56 31.36 31.424 17.536 17.408 43.008 20.288 56.96 6.336 14.016-14.016 11.264-39.488-6.336-57.024-4.736-4.864-26.496-26.56-31.296-31.424z m527.168 628.608c4.864 4.864 26.624 26.624 31.36 31.424 17.536 17.408 43.072 20.224 57.088 6.336 13.952-14.016 11.072-39.552-6.4-57.024-4.864-4.8-26.56-26.496-31.36-31.36-17.472-17.408-43.072-20.288-57.024-6.336-13.952 14.016-11.008 39.488 6.336 56.96z","p-id":"4027"})),d=r.a.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3854",width:"22",height:"22"},r.a.createElement("path",{d:"M991.816611 674.909091a69.166545 69.166545 0 0 0-51.665455-23.272727 70.795636 70.795636 0 0 0-27.438545 5.585454A415.674182 415.674182 0 0 1 754.993338 698.181818c-209.594182 0-393.472-184.785455-393.472-395.636363 0-52.363636 38.539636-119.621818 69.515637-173.614546 4.887273-8.610909 9.634909-16.756364 14.103272-24.901818A69.818182 69.818182 0 0 0 384.631156 0a70.842182 70.842182 0 0 0-27.438545 5.585455C161.678429 90.298182 14.362065 307.898182 14.362065 512c0 282.298182 238.824727 512 532.38691 512a522.286545 522.286545 0 0 0 453.957818-268.334545A69.818182 69.818182 0 0 0 991.816611 674.909091zM546.679156 954.181818c-248.785455 0-462.941091-192-462.941091-442.181818 0-186.647273 140.637091-372.829091 300.939637-442.181818-36.817455 65.629091-92.578909 151.970909-92.578909 232.727273 0 250.181818 214.109091 465.454545 462.917818 465.454545a488.331636 488.331636 0 0 0 185.181091-46.545455 453.003636 453.003636 0 0 1-393.565091 232.727273z m103.656728-669.323636l-14.266182 83.781818a34.909091 34.909091 0 0 0 50.362182 36.770909l74.775272-39.563636 74.752 39.563636a36.142545 36.142545 0 0 0 16.174546 3.956364 34.909091 34.909091 0 0 0 34.210909-40.727273l-14.289455-83.781818 60.509091-59.345455a35.025455 35.025455 0 0 0-19.223272-59.578182l-83.61891-12.101818-37.376-76.101818a34.56 34.56 0 0 0-62.254545 0l-37.376 76.101818-83.618909 12.101818a34.909091 34.909091 0 0 0-19.246546 59.578182z m70.423272-64.698182a34.280727 34.280727 0 0 0 26.135273-19.083636l14.312727-29.090909 14.336 29.090909a34.257455 34.257455 0 0 0 26.135273 19.083636l32.046546 4.887273-23.272728 22.574545a35.234909 35.234909 0 0 0-10.007272 30.952727l5.46909 32.116364-28.625454-15.127273a34.490182 34.490182 0 0 0-32.302546 0l-28.695272 15.127273 5.469091-32.116364a35.141818 35.141818 0 0 0-9.984-30.952727l-23.272728-22.574545z","p-id":"3855"})),p=r.a.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"11002",width:"22",height:"22"},r.a.createElement("path",{d:"M127.658667 492.885333c0-51.882667 10.24-101.717333 30.378666-149.162666s47.786667-88.064 81.92-122.538667 75.093333-61.781333 122.538667-81.92 96.938667-30.378667 149.162667-30.378667 101.717333 10.24 149.162666 30.378667 88.405333 47.786667 122.88 81.92 61.781333 75.093333 81.92 122.538667 30.378667 96.938667 30.378667 149.162666-10.24 101.717333-30.378667 149.162667-47.786667 88.405333-81.92 122.88-75.093333 61.781333-122.88 81.92-97.28 30.378667-149.162666 30.378667-101.717333-10.24-149.162667-30.378667-88.064-47.786667-122.538667-81.92-61.781333-75.093333-81.92-122.88-30.378667-96.938667-30.378666-149.162667z m329.045333 0c0 130.048 13.994667 244.394667 41.984 343.381334h12.970667c46.762667 0 91.136-9.216 133.461333-27.306667s78.848-42.666667 109.568-73.386667 54.954667-67.242667 73.386667-109.568 27.306667-86.698667 27.306666-133.461333c0-46.421333-9.216-90.794667-27.306666-133.12s-42.666667-78.848-73.386667-109.568-67.242667-54.954667-109.568-73.386667-86.698667-27.306667-133.461333-27.306666h-11.605334c-28.672 123.562667-43.349333 237.909333-43.349333 343.722666z","p-id":"11003"})),h=o.filter((function(e){return e!==m})),v=function(e,t){!a&&n&&n(e),t!==m&&s(t)},y=function(e){switch(e){case"dark":return r.a.createElement("button",{key:"dumi-dark-btn-moon",title:"Dark theme",onClick:function(t){return v(t,e)},className:"__dumi-default-dark-moon ".concat(e===m?"__dumi-default-dark-switch-active":"")},d);case"light":return r.a.createElement("button",{key:"dumi-dark-btn-sun",title:"Light theme",onClick:function(t){return v(t,e)},className:"__dumi-default-dark-sun ".concat(e===m?"__dumi-default-dark-switch-active":"")},f);case"auto":return r.a.createElement("button",{key:"dumi-dark-btn-auto",title:"Default to system",onClick:function(t){return v(t,e)},className:"__dumi-default-dark-auto ".concat(e===m?"__dumi-default-dark-switch-active":"")},p);default:}};return r.a.createElement("div",{className:"__dumi-default-dark"},r.a.createElement("div",{className:"__dumi-default-dark-switch ".concat(!a&&t?"__dumi-default-dark-switch-open":"")},a?o.map((function(e){return y(e)})):y(m)),!a&&t&&r.a.createElement("div",{className:"__dumi-default-dark-switch-list"},h.map((function(e){return y(e)}))))},I=z;n("AQPS");function $(e,t){return U(e)||T(e,t)||D(e,t)||B()}function B(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function D(e,t){if(e){if("string"===typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function T(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function U(e){if(Array.isArray(e))return e}var q=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"__dumi-default-layout-hero"},e.image&&r.a.createElement("img",{src:e.image}),r.a.createElement("h1",null,e.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.desc}}),e.actions&&e.actions.map((function(e){return r.a.createElement(l["Link"],{to:e.link,key:e.text},r.a.createElement("button",{type:"button"},e.text))}))))},J=function(e){return r.a.createElement("div",{className:"__dumi-default-layout-features"},e.map((function(e){return r.a.createElement("dl",{key:e.title,style:{backgroundImage:e.icon?"url(".concat(e.icon,")"):void 0}},e.link?r.a.createElement(l["Link"],{to:e.link},r.a.createElement("dt",null,e.title)):r.a.createElement("dt",null,e.title),r.a.createElement("dd",{dangerouslySetInnerHTML:{__html:e.desc}}))})))},W=function(e){var t,n,o=e.children,c=e.location,i=Object(a["useContext"])(l["context"]),u=i.config,m=u.mode,f=u.repository,d=(i.nav,i.meta),p=i.locale,h=f.url,y=f.branch,b=f.platform,E=Object(a["useState"])(!0),w=$(E,2),k=w[0],_=w[1],O=Object(a["useState"])(!1),S=$(O,2),j=S[0],x=S[1],M="site"===m,N=M&&d.hero,L=M&&d.features,P=!1!==d.sidemenu&&!N&&!L&&!d.gapless,C=!N&&!L&&Boolean(null===(t=d.slugs)||void 0===t?void 0:t.length)&&("content"===d.toc||void 0===d.toc)&&!d.gapless,z=/^zh|cn$/i.test(p),B=new Date(d.updatedTime),D="".concat(B.toLocaleDateString([],{hour12:!1})," ").concat(B.toLocaleTimeString([],{hour12:!1})),H={github:"GitHub",gitlab:"GitLab"}[(null===(n=(h||"").match(/(github|gitlab)/))||void 0===n?void 0:n[1])||"nothing"]||b;return r.a.createElement("div",{className:"__dumi-default-layout","data-route":c.pathname,"data-show-sidemenu":String(P),"data-show-slugs":String(C),"data-site-mode":M,"data-gapless":String(!!d.gapless),onClick:function(){x(!1),k||_(!0)}},r.a.createElement(s,{location:c,navPrefix:r.a.createElement(A,null),darkPrefix:r.a.createElement(I,{darkSwitch:j,onDarkSwitchClick:function(e){x((function(e){return!e})),e.stopPropagation()},isSideMenu:!1}),onMobileMenuClick:function(e){_((function(e){return!e})),e.stopPropagation()}}),r.a.createElement(g,{darkPrefix:r.a.createElement(I,{darkSwitch:j,isSideMenu:!0}),mobileMenuCollapsed:k,location:c}),C&&r.a.createElement(v,{slugs:d.slugs,className:"__dumi-default-layout-toc"}),N&&q(d.hero),L&&J(d.features),r.a.createElement("div",{className:"__dumi-default-layout-content"},o,!N&&!L&&d.filePath&&!d.gapless&&r.a.createElement("div",{className:"__dumi-default-layout-footer-meta"},H&&r.a.createElement(l["Link"],{to:"".concat(h,"/edit/").concat(y,"/").concat(d.filePath)},z?"\u5728 ".concat(H," \u4e0a\u7f16\u8f91\u6b64\u9875"):"Edit this doc on ".concat(H)),r.a.createElement("span",{"data-updated-text":z?"\u6700\u540e\u66f4\u65b0\u65f6\u95f4\uff1a":"Last update: "},D)),(N||L)&&d.footer&&r.a.createElement("div",{className:"__dumi-default-layout-footer",dangerouslySetInnerHTML:{__html:d.footer}})))};t["default"]=W},AK2Z:function(e,t,n){},AQPS:function(e,t,n){},KcUY:function(e,t,n){"use strict";function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=u(n("q1tI")),l=c(n("q3YX")),o=c(n("nLCz"));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=e[o]}return r["default"]=e,n&&n.set(e,r),r}function s(e,t){return h(e)||p(e,t)||f(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function p(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function h(e){if(Array.isArray(e))return e}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e,t){var n=function(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];var l=a[1].replace(/([^^])\/$/,"$1");return y(y({},(null===(e=a[0].find((function(e){var t=e.path;return t===l})))||void 0===e?void 0:e.meta)||{}),{},{__pathname:t})},a=(0,r.useState)(n(e,t)),l=s(a,2),o=l[0],c=l[1];return(0,r.useLayoutEffect)((function(){c(n(e,t))}),[t]),o},E=function(e,t){var n=function(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(null===(t=a[0].find((function(e){return a[1].startsWith("/".concat(e.name))})))||void 0===t?void 0:t.name)||e[0].name},a=(0,r.useState)(n(e,t)),l=s(a,2),o=l[0],c=l[1];return(0,r.useLayoutEffect)((function(){c(n(e,t))}),[t]),o},w=function(e,t,n){var a=function(){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];for(var r=n[0].navs[n[1]]||[],l="*",o=r.length-1;o>=0;o-=1){var c=r[o],i=[c].concat(c.children).filter(Boolean),u=i.find((function(e){return e.path&&new RegExp("^".concat(e.path.replace(/\.html$/,""),"(/|.|$)")).test(n[2])}));if(u){l=u.path;break}}return(null===(e=n[0].menus[n[1]])||void 0===e?void 0:e[l])||[]},l=(0,r.useState)(a(e,t,n)),o=s(l,2),c=o[0],i=o[1];return(0,r.useLayoutEffect)((function(){i(a(e,t,n))}),[e.navs,e.menus,t,n]),c},k=function(e,t,n){var a=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return a[0]===a[1][0].name?a[2].path:"".concat(n.path,"/").concat(e).replace(/\/\//,"/")},l=(0,r.useState)(a(e,t,n)),o=s(l,2),c=o[0],i=o[1];return(0,r.useLayoutEffect)((function(){i(a(e,t,n))}),[e]),c},_=function e(t){var n;return null===(n=t.find((function(t){return!!t.__dumiRoot||!!t.routes&&e(t.routes)})))||void 0===n?void 0:n.routes},O=function(e){var t=e.location,n=e.route,a=e.children,c=t.pathname.replace(n.path.replace(/^\/$/,"//"),""),i=_(e.routes)||[],u=b(i,t.pathname),s=E(l["default"].locales,c),m=w(l["default"],s,t.pathname),f=k(s,l["default"].locales,n);return r["default"].createElement(o["default"].Provider,{value:{config:l["default"],meta:u.__pathname===t.pathname?u:{},locale:s,nav:l["default"].navs[s]||[],menu:m,base:f,routes:i}},a)},S=O;t["default"]=S},Mpie:function(e,t,n){},Zkgb:function(e,t,n){},fVI1:function(e,t,n){},hJnp:function(e,t,n){},mdU6:function(e,t,n){}}]);