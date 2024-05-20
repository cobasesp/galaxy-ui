const _burguerButton = document.querySelector('div.burger-button') ?? null;
const _navMenu = document.querySelector('nav.navbar .menu') ?? null;
_burguerButton?.addEventListener('click', function(e){
    _burguerButton.classList.toggle('open');
    _navMenu.classList.toggle('open');
});
