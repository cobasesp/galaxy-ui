document.querySelectorAll('button[data-trigger]').forEach(function(el) {
    el.addEventListener('click', function(e) {
        const triggerName = e.target.dataset?.trigger ?? "";
        document.querySelector(`.modal[data-modal="${triggerName}"]`).classList.add('open');
    })
});