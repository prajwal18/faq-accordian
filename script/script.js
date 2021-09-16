const toggle = document.querySelectorAll('.question');

toggle.forEach(tog => {
    tog.addEventListener('click', () => {
        tog.classList.toggle('clicked');
        const nextElementToEdit = tog.nextSibling.nextSibling;
        nextElementToEdit.classList.toggle('active');
    })
})