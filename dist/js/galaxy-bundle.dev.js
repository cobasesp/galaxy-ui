document.addEventListener("DOMContentLoaded", function(event) {
    const _burguerButton = document.querySelector('div.burger-button');
const _navMenu = document.querySelector('nav.navbar .menu');
_burguerButton.addEventListener('click', function(e){
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
}
document.querySelectorAll('button[data-trigger]').forEach(function(el) {
    el.addEventListener('click', function(e) {
        const triggerName = e.target.dataset?.trigger ?? "";
        document.querySelector(`.modal[data-modal="${triggerName}"]`).classList.add('open');
    })
});

    refreshListeners();
});