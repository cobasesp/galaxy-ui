document.querySelectorAll('.tab-component .tab').forEach(function(el) {
    el.addEventListener('click', function(e) {
        const tabName = e.target.dataset?.tab ?? "";

        // Remove active class to others
        e.target.parentNode.querySelector('.active').classList.remove('active');
        e.target.parentNode.parentNode.querySelector('.tab-content.active').classList.remove('active');

        // Put active class to targets
        e.target.classList.add('active');
        document.querySelector(`.tab-component .tab-content[data-tab="${tabName}"]`).classList.add('active');
    })
});