let input = document.querySelector('.input');

window.addEventListener('keydown', function(e) {

    e.key === ' ' ? input.innerHTML = 'space' : input.innerHTML = e.key;

})