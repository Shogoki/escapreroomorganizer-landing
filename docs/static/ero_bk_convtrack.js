!function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var e=function(){return(e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function n(e,n,t,r){return new(t||(t=Promise))((function(o,c){function i(e){try{u(r.next(e))}catch(e){c(e)}}function a(e){try{u(r.throw(e))}catch(e){c(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,a)}u((r=r.apply(e,n||[])).next())}))}function t(e,n){var t,r,o,c,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function a(c){return function(a){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=n.call(e,i)}catch(e){c=[6,e],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}function r(e,r){return void 0===r&&(r={}),n(this,void 0,Promise,(function(){return t(this,(function(n){switch(n.label){case 0:return[4,fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(r)})];case 1:return[2,n.sent().json()]}}))}))}function o(o){return n(this,void 0,Promise,(function(){var n,c;return t(this,(function(t){switch(t.label){case 0:return"https://europe-west3-escaperoomorganizer.cloudfunctions.net/trackConversion",i="ero_ref",a=null,u=[],location.search.substr(1).split("&").forEach((function(e){(u=e.split("="))[0]===i&&(a=decodeURIComponent(u[1]))})),n=a,[4,r("https://europe-west3-escaperoomorganizer.cloudfunctions.net/trackConversion","object"==typeof o?e(e({},o),{ero_ref:n}):{data:o,ero_ref:n})];case 1:return c=t.sent(),console.log(c),[2]}var i,a,u}))}))}!function(e){console.log("Get Started"),o(e).then((function(){return console.log("Done")}))}("undefined"==typeof data?data:"noData")}();
