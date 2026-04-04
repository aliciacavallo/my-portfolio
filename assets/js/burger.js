document.addEventListener('click', function(event) {
    const burger = document.getElementById('burger');
    const header = document.querySelector('header');

    // Si le menu est ouvert ET le clic est en dehors du header entier
    if (burger.checked && !header.contains(event.target)) {
        burger.checked = false;
    }
});