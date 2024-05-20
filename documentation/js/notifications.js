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