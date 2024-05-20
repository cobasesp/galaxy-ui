const _sidebarWrapperButton = document.querySelector('div.wrapper') ?? null;
const _sidebar = document.querySelector('.sidebar') ?? null;
_sidebarWrapperButton?.addEventListener('click', function(e){
    _sidebarWrapperButton.classList.toggle('open');
    _sidebar.classList.toggle('open');
});