(function() {
    var copy = document.querySelector("#copyToggle"); //for copyright info toggle
    var hamburger = document.querySelector(".hamburger");

    function toggleCopy(event) {
        event.preventDefault();
        var it = event.currentTarget;
        it.parentNode.parentNode.querySelector('.center').classList.toggle('hide');
    }

    function toggleMenu(event) {
        event.preventDefault();
        // var it = event.currentTarget;
        document.querySelector("#mainNav").classList.toggle('closed');

    }
    copy.addEventListener('click', toggleCopy, false);
    hamburger.addEventListener('click', toggleMenu, false);
})();
