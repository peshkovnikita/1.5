const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
  },
});

const text = document.getElementById('text');
const arrow = document.getElementById('arrowImg');
const brandsContainer = document.getElementById('swiper-wrapper');
let isHidden = true;

function expandAndHide() {
  if (isHidden === true) {
    text.innerHTML = 'Скрыть';
    arrow.classList.add('rotateImg');
    brandsContainer.classList.add('brands--expand');
    isHidden = false;
  } else {
    text.innerHTML = 'Показать все';
    arrow.classList.remove('rotateImg');
    brandsContainer.classList.remove('brands--expand');
    isHidden = true;
  }
}
