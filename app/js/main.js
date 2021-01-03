import Swiper from 'swiper/bundle'

import './components/burger';
import './components/scroll';

const slider = new Swiper('.reviews-slider', {
    spaceBetween: 100,
    speed: 800,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});
