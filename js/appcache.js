(function() {
        window.addEventListener('load', function(e) {
          var appCache = window.applicationCache;
          appCache.update(); // Attempt to update the user's cache.
                    appCache.addEventListener('updateready', function(e) {
                            if (appCache.status == window.applicationCache.UPDATEREADY) {
                                appCache.swapCache(); // The fetch was successful, swap in the new cache.
                                if (confirm('An updated version of this web-app is available. Load it now?')) {
                                    window.location.reload();
                                }//end CONFIRM
                            }//end IF statement
                        }//end UPDATEREADY ev listener
                        ,false);
                      }//end WINDOW.LOAD ev listener
                      ,false);
                        // from https://www.html5rocks.com/en/tutorials/appcache/beginner/
                    })();
