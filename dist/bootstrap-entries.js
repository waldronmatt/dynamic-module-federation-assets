function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==r)return;var e,o,c=[],a=!0,i=!1;try{for(r=r.call(t);!(a=(e=r.next()).done)&&(c.push(e.value),!n||c.length!==n);a=!0);}catch(t){i=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return c}(t,n)||r(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function o(t,n,r,e,o,c,a){try{var i=t[c](a),u=i.value}catch(t){return void r(t)}i.done?n(u):Promise.resolve(u).then(e,o)}var c;(c=regeneratorRuntime.mark((function r(){var e,o,c,a,i,u,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o="localhost"==(e=function(){return location.host.indexOf("localhost")>-1?"localhost":"production"})()?"./":"//",c=["https://cdn.jsdelivr.net/gh/waldronmatt/dynamic-module-federation-assets/dist/map.config.json","".concat(o,"chunks.config.json")],r.next=5,Promise.all(c.map((function(t){return fetch(t).then((function(t){return t.json()}))})));case 5:return a=r.sent,i=n(a,2),u=i[0],l=i[1],window.__ENVIRONMENT__=e(),window.__MAP__=u,console.log("DEBUG LOGGING"),console.log("Current Environment: '".concat(e(),"'")),console.log("Current Public Path: '".concat(u[l.entrypoints[0]][e()].href,"'")),console.log("List of local entry points to use: [".concat(l.entrypoints,"]")),console.log("List of remote apps to use: [".concat(l.remotes,"]")),r.next=18,Promise.all([].concat(t(l.entrypoints.map((function(t){return console.log("Getting '".concat(t,"' entry point")),fetch("".concat(o).concat(t,".js")).then((function(t){return t.text()}))}))),t(l.remotes.map((function(t){var n=u[t][e()].href;return console.log("Remote '".concat(t,"' address for environment '").concat(e(),"' is: ").concat(n,"/remoteEntry.js")),fetch("".concat(n,"/remoteEntry.js")).then((function(t){return t.text()}))}))))).then((function(t){return t.forEach((function(t){var n=document.createElement("script");n.text=t,document.querySelector("body").appendChild(n)}))}));case 18:case"end":return r.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(r,e){var a=c.apply(t,n);function i(t){o(a,r,e,i,u,"next",t)}function u(t){o(a,r,e,i,u,"throw",t)}i(void 0)}))})();
