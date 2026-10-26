self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){var r=e.request;if(r.method!=='GET')return;var u=new URL(r.url);if(u.origin!==location.origin)return;
e.respondWith(fetch(r.url,{cache:'no-store'}).then(function(res){var cp=res.clone();caches.open('app').then(function(c){c.put(r.url,cp)});return res}).catch(function(){return caches.match(r.url).then(function(m){return m||caches.match(location.origin+location.pathname.replace('sw.js',''))})}))});
