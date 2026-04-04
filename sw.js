const CACHE_NAME = "scan-barang-v1";

self.addEventListener("install", event => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", event => {
  // sederhana dulu (tanpa cache kompleks)
});
