import Swiper from 'swiper/bundle'

import './components/burger';
import './components/scroll';

const slider = new Swiper('.reviews-slider', {
    spaceBetween: 100,
    speed: 800,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    navigation: {
        nextEl: '.arrow-btn__next',
        prevEl: '.arrow-btn__prev',
    },
});
