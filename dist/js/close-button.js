window.refreshListeners = function() {
    document.querySelectorAll('button.close').forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.target.parentNode.remove();
        })
    });
}