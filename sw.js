@@ .. @@
-// Service Worker for WeatherGlass PWA
-const CACHE_NAME = 'weatherglass-v1.0.0';
-const STATIC_CACHE_NAME = 'weatherglass-static-v1.0.0';
-const DATA_CACHE_NAME = 'weatherglass-data-v1.0.0';
+// Service Worker for Meteora PWA
+const CACHE_NAME = 'meteora-v1.0.0';
+const STATIC_CACHE_NAME = 'meteora-static-v1.0.0';
+const DATA_CACHE_NAME = 'meteora-data-v1.0.0';
@@ .. @@
                 <div class="offline-content">
-                    <h1>⛅ WeatherGlass</h1>
+                    <h1>⛅ Meteora</h1>
                     <p>You're currently offline. Please check your connection and try again.</p>
@@ .. @@
     event.waitUntil(
-        self.registration.showNotification('WeatherGlass', options)
+        self.registration.showNotification('Meteora', options)
     );