import Swiper from 'swiper';

const relatedCarousel = function () {
  const $slider = document.querySelector('.js-related-carousel');
  let swiper = null;

  const init = () => {
    if (swiper !== null || $slider === null)
      return;

    swiper = new Swiper($slider, {
      slidesPerView: 'auto',
      spaceBetween: 13,
      slideClass: 'js-slide',
      wrapperClass: 'js-wrapper',
      loop: false,
      breakpoints: {
        800: {
          spaceBetween: 18
        }
      }
    });
  }
  init();
}

export default relatedCarousel;
