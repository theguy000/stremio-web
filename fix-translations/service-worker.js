if(!self.define){let f,c={};const e=(e,b)=>(e=new URL(e+".js",b).href,c[e]||new Promise((c=>{if("document"in self){const f=document.createElement("script");f.src=e,f.onload=c,document.head.appendChild(f)}else f=e,importScripts(e),c()})).then((()=>{let f=c[e];if(!f)throw new Error(`Module ${e} didn’t register its module`);return f})));self.define=(b,d)=>{const a=f||("document"in self?document.currentScript.src:"")||location.href;if(c[a])return;let i={};const o=f=>e(f,a),r={module:{uri:a},exports:i,require:o};c[a]=Promise.all(b.map((f=>r[f]||o(f)))).then((f=>(d(...f),i)))}}define(["./workbox-ad8011fb"],(function(f){"use strict";self.skipWaiting(),f.clientsClaim(),f.precacheAndRoute([{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/binaries/stremio_core_web_bg.wasm",revision:"b79c75637c0e703f5b26fb63ce8d0dbd"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/favicons/favicon.ico",revision:"73f6cce044fafd48bf447d80487f5a63"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/favicons/icon-96.png",revision:"de1c79ffc899cb64fbaf6a6d17d364a5"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/fonts/Roboto-Bold.ttf",revision:"e07df86cef2e721115583d61d1fb68a6"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/fonts/Roboto-BoldItalic.ttf",revision:"5b44818d2b9eda3e23cd5edd7b49b7d5"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/fonts/Roboto-Light.ttf",revision:"88823c2015ffd5fa89d567e17297a137"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/fonts/Roboto-LightItalic.ttf",revision:"a3ce4440f2abf76f4a1b14b83920138c"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/fonts/Roboto-Medium.ttf",revision:"58aef543c97bbaf6a9896e8484456d98"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/fonts/Roboto-MediumItalic.ttf",revision:"cf23e1bb619029496260760b72aebd30"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/fonts/Roboto-Regular.ttf",revision:"11eabca2251325cfc5589c9c6fb57b46"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/fonts/Roboto-RegularItalic.ttf",revision:"a720f17aa773e493a7ebf8b08459e66c"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/images/anonymous.png",revision:"3c24e42de8822c3e2dc0c20a04cb18c2"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/images/default_avatar.png",revision:"e574e5a876fb07bb28b07dd60bd63429"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/images/empty.png",revision:"ff850d70fd43d29b6d8c7055f33d8dbb"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/images/icon_x192.png",revision:"f91415b051185986aedf4187c90ea6f7"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/images/icon_x512.png",revision:"5a446747b1843c1aac2c386b1005ab78"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/images/intro_background.jpg",revision:"96ccc21bab56c04153a6400842b8a9dd"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/images/maskable_icon_x192.png",revision:"73f3a1cb7aeabde43ba2ed935fde06b1"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/images/maskable_icon_x512.png",revision:"88f79bb79e6039edee6367ffa081aa06"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/images/stremio_symbol.png",revision:"9d75b8169c82b11f5399be4129e7757f"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/manifest.json",revision:"1577e844d5f40d9886332544c3e3a684"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/scripts/main.js",revision:"a0bdc1a899678d77c1e830da360f93e1"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/scripts/worker.js",revision:"fd71a01080eba7d7a10ae611b1d8fc3b"},{url:"b80969f77b5f5369c42c2013e9cfcb8f7df58d7a/styles/main.css",revision:"9d35871f4c4b1b85ecd818594eba7802"},{url:"index.html",revision:"5ff18482f93467466df6dd97fb500e52"}],{})}));
//# sourceMappingURL=service-worker.js.map
