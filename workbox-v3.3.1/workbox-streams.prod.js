this.workbox=this.workbox||{},this.workbox.streams=function(){"use strict";try{self.workbox.v["workbox:streams:3.3.1"]=1}catch(e){}function e(e){const n=e.map(e=>Promise.resolve(e).then(e=>(e=e).body&&e.body.getReader?e.body.getReader():e.getReader?e.getReader():new Response(e).body.getReader()));var t;let r,o;let s=0;return{done:new Promise((e,n)=>{r=e,o=n}),stream:new ReadableStream({pull(e){return n[s].then(e=>e.read()).then(t=>{if(t.done)return++s>=n.length?(e.close(),void r()):this.pull(e);e.enqueue(t.value)}).catch(e=>{throw o(e),e})},cancel(){r()}})}}function n(e={}){const n=new Headers(e);return n.has("content-type")||n.set("content-type","text/html"),n}function t(t,r){const{done:o,stream:s}=e(t),c=n(r);return{done:o,response:new Response(s,{headers:c})}}let r=void 0;function o(){if(void 0===r)try{new ReadableStream({start(){}}),r=!0}catch(e){r=!1}return r}var s=Object.freeze({concatenate:e,concatenateToResponse:t,isSupported:o});var c={concatenate:e,concatenateToResponse:t,isSupported:o,strategy:function(e,r){return s=babelHelpers.asyncToGenerator(function*({event:s,url:c,params:a}){if(o()){const{done:n,response:o}=t(e.map(function(e){return e({event:s,url:c,params:a})}),r);return s.waitUntil(n),o}const u=yield Promise.all(e.map(function(e){return e({event:s,url:c,params:a})}).map((i=babelHelpers.asyncToGenerator(function*(e){const n=yield e;return n instanceof Response?n.blob():n}),function(e){return i.apply(this,arguments)})));var i;const l=n(r);return new Response(new Blob(u),{headers:l})}),function(e){return s.apply(this,arguments)};var s}};return Object.assign(c,s)}();

//# sourceMappingURL=workbox-streams.prod.js.map