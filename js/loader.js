  function pageLoadClickEvent() {
        event.preventDefault();
        var it = event.currentTarget;
        var params = it.dataset.params;
        loadThatFunkyPage(it.href, params);
    }

    function loadThatFunkyPage(url, params) {
        try {
            if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
                httpRequest = new XMLHttpRequest();
            } else if (window.ActiveXObject) { // IE 6 and older
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }
            console.log("request initialized");
        } catch (e) {
            alert(e);
        }
        httpRequest.overrideMimeType('text/xml');
        httpRequest.open('GET', url);
        if (params != null) {
            httpRequest.send(params);
            console.log("Parameters: " + params);
        } else {
            httpRequest.send();
        }
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === 4) {
                console.log("Ready State: " + httpRequest.readyState);
                if (httpRequest.status === 200) {
                    console.log("Response Code: " + httpRequest.status);
                    //loaded, now insert.
                    var page = httpRequest.responseText;
                    console.log(page);
                    document.querySelector("main").innerHTML = "";
                    document.querySelector("main").innerHTML = page;
                    var tempSrc = document.querySelector(".loadScript").src;
                    var scrpt = document.createElement('script');
                    scrpt.src="http://localhost:7888/ptg/four-island/four-island/js/pokeedit.js";
                    // scrpt.src=tempSrc;
                    document.head.appendChild(scrpt);
                } else {
                    console.log("error with AJAX");
                    console.log("Response Code: " + httpRequest.status);
                }
            } else {
                console.log("not ready, with ready state: " + httpRequest.readyState);
            }
        };
    }
