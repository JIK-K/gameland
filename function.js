const modal = document.getElementById('modal');
const btnModal = document.getElementById('btn');

btnModal.addEventListener('click', () => {
  modal.classList.add('show-modal')
});

window.addEventListener('click', (e) => {
  e.target === modal ? modal.classList.remove('show-modal') : false
})

function todo(){
  const log = document.querySelector('.modal_login');
  const reg = document.querySelector('.modal_Wrap');

  log.style.display = 'none';
  reg.style.display = 'block';
}