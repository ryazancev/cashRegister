import Carousel from './carousel.js';

const partners = () => {
    const carousel = new Carousel({
        main: '.partners__wrapper',
        wrap: '.partners__list',
        prev: '.partners__button--prev',
        next: '.partners__button--next',
        slidesToShow: 4,
        responsive: [
            {
                breackpoint: 991,
                slidesToShow: 3
            },
            {
                breackpoint: 767,
                slidesToShow: 2
            },
            {
                breackpoint: 580,
                slidesToShow: 1
            }
        ]
    });

    carousel.init();
};

export default partners;