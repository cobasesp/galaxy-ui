document.addEventListener("DOMContentLoaded", function(event) {
    const _burguerButton = document.querySelector('div.burger-button') ?? null;
const _navMenu = document.querySelector('nav.navbar .menu') ?? null;
_burguerButton?.addEventListener('click', function(e){
    _burguerButton.classList.toggle('open');
    _navMenu.classList.toggle('open');
});

window.createNotification = function(title, content, type = '') {
    // Create notification
    const notification = document.createElement("div");
    notification.setAttribute('class', 'notification');
    if(type !== '') {
        notification.setAttribute('class', `bg-${type}`);
    }

    // Create close button
    const closeButton = document.createElement("button");
    closeButton.setAttribute('class', 'close');
    closeButton.innerHTML = '&times;';

    // Create title
    const elTitle = document.createElement("p");
    elTitle.setAttribute('class', 'font-bold');
    const titleContent = document.createTextNode(title);
    elTitle.appendChild(titleContent);

    // Create main content
    const newContent = document.createTextNode(content);
  
    // Append all childs to notification
    notification.appendChild(closeButton);
    notification.appendChild(elTitle);
    notification.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const notificationSection = document.getElementById("notifications");
    notificationSection.appendChild(notification);

    refreshListeners();
}
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

    document.querySelectorAll('.card button.close').forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.target.parentNode.remove();
        })
    });
}
document.querySelectorAll('button[data-trigger]').forEach(function(el) {
    el.addEventListener('click', function(e) {
        const triggerName = e.target.dataset?.trigger ?? "";
        document.querySelector(`.modal[data-modal="${triggerName}"]`).classList.add('open');
    })
});
const _sidebarWrapperButton = document.querySelector('div.wrapper') ?? null;
const _sidebar = document.querySelector('.sidebar') ?? null;
_sidebarWrapperButton?.addEventListener('click', function(e){
    _sidebarWrapperButton.classList.toggle('open');
    _sidebar.classList.toggle('open');
});
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
document.querySelectorAll('.accordion').forEach(function(el) {
    el.addEventListener('click', function(e) {
        if(e.target.nodeName.toLowerCase() == "p" || e.target.nodeName.toLowerCase() == "span"){
            e.target.parentNode.classList.toggle('open');
        }
        e.target.classList.toggle('open');
    })
});

    refreshListeners();
});