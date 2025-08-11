@@ .. @@
     loadFromStorage() {
         try {
-            const saved = localStorage.getItem('weatherapp_state');
+            const saved = localStorage.getItem('meteora_state');
             if (saved) {
@@ .. @@
                 currentLocation: parsed.currentLocation || null
             };
         } catch (error) {
             console.warn('Failed to load state from storage:', error);
         }
     }
     
     // Save state to localStorage
     saveToStorage() {
         try {
             const toSave = {
                 settings: this.data.settings,
                 favorites: this.data.favorites,
                 currentLocation: this.data.currentLocation
             };
             
-            localStorage.setItem('weatherapp_state', JSON.stringify(toSave));
+            localStorage.setItem('meteora_state', JSON.stringify(toSave));
         } catch (error) {
@@ .. @@
     // Detect system theme preference
     detectSystemTheme() {
-        if (!('theme' in (JSON.parse(localStorage.getItem('weatherapp_state') || '{}').settings || {}))) {
+        if (!('theme' in (JSON.parse(localStorage.getItem('meteora_state') || '{}').settings || {}))) {
             const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
@@ .. @@
         });
         
-        localStorage.removeItem('weatherapp_state');
+        localStorage.removeItem('meteora_state');
     }