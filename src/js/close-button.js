window.refreshListeners = function() {
    // Remove notifications
    document.querySelectorAll('.notification button.close').forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.target.parentNode.remove();
        })
    });

    // Close modals by button
    document.querySelectorAll('.modal button.close').forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.target.parentNode.parentNode.classList.remove('open');
        })
    });
}