document.querySelectorAll('.accordion').forEach(function(el) {
    el.addEventListener('click', function(e) {
        if(e.target.nodeName.toLowerCase() == "p" || e.target.nodeName.toLowerCase() == "span"){
            e.target.parentNode.classList.toggle('open');
        }
        e.target.classList.toggle('open');
    })
});