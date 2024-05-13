const _sidebarWrapperButton = document.querySelector('div.wrapper');
const _sidebar = document.querySelector('.sidebar');
_sidebarWrapperButton.addEventListener('click', function(e){
    _sidebarWrapperButton.classList.toggle('open');
    _sidebar.classList.toggle('open');
});