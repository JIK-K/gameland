const modal = document.getElementById('modal');
const btnModal = document.getElementById('btn');

btnModal.addEventListener('click', () => {
  modal.classList.add('show-modal')
});

window.addEventListener('click', (e) => {
  e.target === modal ? modal.classList.remove('show-modal') : false
})