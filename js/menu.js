(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');

    const isModalClose = refs.modal.classList.contains("is-open");
    const method = isModalClose ? "disableBodyScroll" : "enableBodyScroll";
    bodyScrollLock[method](refs.modal);
  }
})();