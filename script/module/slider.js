const slider = () => {
    const
        slide = document.querySelectorAll('.slide'),
        sliderContainer = document.querySelector('.main-slider');

    let currentSlide = 0, //Текущий слайд
        interval; //Интервал для setInterval

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'slide--active');

        currentSlide++;

        if (currentSlide >= slide.length) currentSlide = 0;

        nextSlide(slide, currentSlide, 'slide--active');
    };

    const startSlide = (time = 3500) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    startSlide();
}

export default slider;