
let form = document.forms.formCallback,
    modal = document.querySelector('.modal_overlay'),
    btnModal = document.querySelector('.btn_modal'),
    textFromInput = document.querySelector('.textFromInput');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    textFromInput.textContent = evt.target.name.value;
    document.body.classList.add('noscroll');
    modal.classList.add('open');
    evt.target.name.value = '';
    evt.target.email.value = '';
});

btnModal.addEventListener('click', (evt) => {
    modal.classList.remove('open');    
    document.body.classList.remove('noscroll');  
})