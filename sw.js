/* TECTOVA Team Desk — service worker (v2.18).
   Keeps the app shell for fast start and offline opening, and shows push notifications.
   api.php is never cached: data always comes fresh from the server. */
const V='td-26';
const SHELL=['./','index.html','manifest.json','assets/app.css?v=26','assets/app.js?v=26','assets/tectova-mark.png','assets/tectova-mark-dark.png','assets/tectova-logo.png','assets/tectova-logo-dark.png',
 'icons/icon-192.png','icons/badge-72.png','fonts/ibm-plex-sans-arabic-arabic-400-normal.woff2','fonts/ibm-plex-sans-arabic-latin-400-normal.woff2','fonts/ibm-plex-sans-arabic-arabic-600-normal.woff2',
 'fonts/ibm-plex-sans-arabic-latin-600-normal.woff2','fonts/readex-pro-arabic-600-normal.woff2','fonts/readex-pro-latin-600-normal.woff2','fonts/ibm-plex-mono-latin-400-normal.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.allSettled(SHELL.map(u=>c.add(u)))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('td-')&&k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
 if(/\/(api|cron|install)\.php$/.test(u.pathname)||u.pathname.includes('/uploads/'))return;
 if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put('index.html',cp));return res}).catch(()=>caches.match('index.html').then(m=>m||caches.match('./'))));return}
 if(/\/(assets|fonts|icons)\//.test(u.pathname)||u.pathname.endsWith('manifest.json')){
  e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res})));
 }
});
self.addEventListener('push',e=>{
 let d={};try{d=e.data?e.data.json():{}}catch(x){d={title:'TECTOVA Team Desk',body:e.data?e.data.text():''}}
 e.waitUntil(self.registration.showNotification(d.title||'TECTOVA Team Desk',{body:d.body||'',icon:'icons/icon-192.png',badge:'icons/badge-72.png',dir:'auto',
  tag:d.tag||undefined,renotify:!!d.tag,data:{url:d.url||'./'}}));
});
self.addEventListener('notificationclick',e=>{
 e.notification.close();const url=new URL((e.notification.data&&e.notification.data.url)||'./',self.registration.scope).href;
 e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{
  for(const c of cs)if(c.url.startsWith(self.registration.scope)){c.postMessage({type:'td-open',url});return c.focus()}
  return self.clients.openWindow(url);
 }));
});
