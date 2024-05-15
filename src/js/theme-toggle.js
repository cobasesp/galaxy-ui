document.querySelector('button[data-themetoggle]').addEventListener('click', function(e) {
    let target = null;
    if(e.target.nodeName.toLowerCase() == "span") {
        target = e.target.parentNode;
    } else if (e.target.nodeName.toLowerCase() == "button")  {
        target = e.target;
    }

    const currentTheme = target.dataset.themetoggle ?? "";
    target.querySelector('.active').classList.remove('active');
    
    if(currentTheme == "dark") {
        target.querySelector('.lightmode').classList.add('active');
        target.dataset.themetoggle = "light";
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    } else if (currentTheme == "light") {
        target.querySelector('.darkmode').classList.add('active');
        target.dataset.themetoggle = "dark";
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
})