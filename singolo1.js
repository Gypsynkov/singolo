// slider
const SLIDES = document.querySelectorAll('#slides .slide');
const SLIDER_SECTION = document.getElementById('slider-section');
const SLIDER_ARROW = document.getElementsByClassName('slider__arrow');
var currentSlide = 0;

const slider = () => {
    SLIDES[currentSlide].className += 'slide';
    currentSlide = (currentSlide + 1) % SLIDES.length;
    if (SLIDES[currentSlide].classList.contains('blue')) {
        SLIDER_SECTION.style.backgroundColor = '#648bf0';
        SLIDER_SECTION.style.borderBottomColor = '#5173cb';
        SLIDES[currentSlide].className += ' showing';
    } else {
        // SLIDER_SECTION.style.transition = 'ease-out 0.2s';;
        SLIDER_SECTION.style.backgroundColor = '#f06c64';
        SLIDER_SECTION.style.borderBottomColor = '#ea676b';
        SLIDES[currentSlide].className += ' showing';
    }
}

// lock phone
const PHONE_WALLPAPER = document.getElementsByClassName('slider__img');
const delWallpapaer = () => {
    let elem = this.event.target;
    if (elem.classList.contains('none'))
        elem.classList.remove('none')
    else
        elem.classList.add('none');
}