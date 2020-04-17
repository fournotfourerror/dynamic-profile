self.addEventListener('install',e=>{
	e.waitUntil(
		caches.open("webdesign-tot").then(cache=>{
			return cache.addAll([

				]);
		})
		)
})

self.addEventListener('fetch',e=>{
	e.respondWith(
		caches.match(e.request).then(res=>{
			return res || fetch(e.request).then(response=>{
				return caches.open('webdesign-tot').then(cache=>{
					cache.put(e.request,response.clone());
					return response;
				})
			})
		})
		)
})