'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnOpenModal = document.querySelector('.show-modal');
// now to select all the modals at once, we use querySelectorAll
const btnOpenModal = document.querySelectorAll('.show-modal');
// to deactivate modal window and blur
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// to activate modal window and blur
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}
//to remove the overlay(blur) and modal window upon clicking the blurry parts of the screen
overlay.addEventListener('click', closeModal);
// to remove the overlay(blur) and modal window upon clicking the 'X' button
btnCloseModal.addEventListener('click', closeModal);

// to check for the object contained in the event handler
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
