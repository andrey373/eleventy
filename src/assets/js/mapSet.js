const map = document.querySelector('.map'),
      btnContactInner = map.querySelector('.btn_contact_box'),
      overlay = map.querySelector('.overlay');

btnContactInner.addEventListener('click', () => {
    overlay.classList.add('hide');
});