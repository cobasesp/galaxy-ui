const _burguerButton = document.querySelector('div.burger-button');
const _navMenu = document.querySelector('nav.navbar .menu');
_burguerButton.addEventListener('click', function(e){
    _burguerButton.classList.toggle('open');
    _navMenu.classList.toggle('open');
});
