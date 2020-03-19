
window.onload = function(){
    addTagsClickHandler();
    /*
    addActiveClickHandler();
    
    */

}

//Header
let menuBlock = document.querySelector('.header_content_navigator');
 addTagsClickHandler = () =>{
menuBlock.addEventListener('click', (element)=>{
    if(element.target.classList.contains('tag')){
        let targetedTags = event.target;
        removeSelectedTags();

    targetedTags.classList.add('active');
    console.log(element)
    }
})
}
const removeSelectedTags = () =>{
    menuBlock.querySelectorAll('.tag').forEach(el=>el.classList.remove('active'))
}
//Scrool
function smoothScroll(Element) {

    Element = document.getElementById(Element);
    let selectedPosX = 0;
    let selectedPosY = 0;
    while (Element != null) {
        selectedPosX += Element.offsetLeft;
        selectedPosY += Element.offsetTop;
        Element = Element.offsetParent;
    }
    window.scrollTo(selectedPosX, selectedPosY);
    }
//Slides and phone_screen_switch    

let slides = document.querySelectorAll('#slides .slide');
let sliderBlock = document.getElementById('slider_section');
let currentSlide = 0;

let slider = () => {
    slides[currentSlide].className += 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    if (slides[currentSlide].classList.contains('blue')) {
        sliderBlock.style.backgroundColor = '#648bf0';
        sliderBlock.style.borderBottomColor = '#5173cb';
        slides[currentSlide].className += ' showing';
    } else {
        sliderBlock.style.backgroundColor = '#f06c64';
        sliderBlock.style.borderBottomColor = '#ea676b';
        slides[currentSlide].className += ' showing';
    }
}
let screenSwitcher = () => {
    let elem = this.event.target;
    if (elem.classList.contains('none'))
        elem.classList.remove('none')
    else
        elem.classList.add('none');
}
//Random navigator portfolio
let buttonsPortfolio = document.getElementById('portfolio_buttons');
let imagePortfolio = document.getElementById('portfolio_images');
let randomImages = (event) => {
    let target = event.target;
    let srcArray = [];
    if (target.tagName == 'SPAN') {
        buttonsPortfolio.querySelectorAll('span').forEach(item => {
            item.classList.remove('button_active');
        });
        target.classList.add('button_active');
        imagePortfolio.querySelectorAll('img').forEach(item => {
            srcArray.push(item.src);
            item.src = '';
        })
        let randArray = srcArray.sort(function() {
            return Math.random() - 0.5;
        });
        imagePortfolio.querySelectorAll('img').forEach((item, index) => {
            item.src = randArray[index];
        })
    }
}
// portfolio active image
imagePortfolio.addEventListener('click', event => {

    let target = event.target;

    if (target.tagName == 'IMG') {
        imagePortfolio.querySelectorAll('img').forEach(item => {
            item.style.boxShadow = "none";
        });
        
        event.target.style.boxShadow = "0px 0px 0px 2px rgba(255,255,0,1)";
    }
})

//modal window and form push
let modalPop = document.getElementById('modal_window');
let modalSub = document.getElementById('modal_submit');
let form = document.getElementById('form');
let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputText = document.getElementById('subject');
let inputDescr = document.getElementById('describe');


const pushForm = () => {
    console.log('ok')
    if (inputName .checkValidity() && inputEmail.checkValidity() && inputText.value.length > 0 && inputDescr.value.length > 0) {
        modalSub.innerHTML += "<div id='added'>Верно</div>";
        modalPop.classList.remove('display_none');


    } else if (inputName .value.length == 0 || inputEmail.value.length == 0) {

        modalSub.innerHTML += "<div id='added'>Не заполнены обязательные поля</div>";
        modalPop.classList.remove('display_none');


    } else if (!inputName .checkValidity()) {

        modalSub.innerHTML += "<div id='added'>Проверьте имя</div>";
        modalPop.classList.remove('display_none');


    } else if (!inputEmail.checkValidity()) {

        modalSub.innerHTML += "<div id='added'>Проверьте введеный email</div>";
        modalPop.classList.remove('display_none');



    } else if (inputText.value.length == 0 && inputDescr.value.length == 0) {

        modalSub.innerHTML += "<div id='added'>Заполните оставшиеся поля</div>";
        modalPop.classList.remove('display_none');



    } else if (inputText.value.length == 0 && inputDescr.value.length == 0) {

        modalSub.innerHTML += "<div id='added'>Без темы и без описания</div>";
        modalPop.classList.remove('display_none');



    } else if (inputText.value.length == 0) {

        modalSub.innerHTML += "<div id='added'>Без темы</div>";
        modalPop.classList.remove('display_none');



    } else if (inputText.value == 'Singolo') {

        modalSub.innerHTML += "<div id='added'>Тема: Singolo</div>";
        modalPop.classList.remove('display_none');



    } else if (inputDescr.value.length == 0) {

        modalSub.innerHTML += "<div id='added'>Без описания</div>";
        modalPop.classList.remove('display_none');



    } else if (inputDescr.value == 'Portfolio project') {

        modalSub.innerHTML += "<div id='added'>Тема: Portfolio project</div>";
        modalPop.classList.remove('display_none');
    }

}
//close window
let popWindow = (event) => {
    if (event.target.tagName == "SECTION" || event.target.tagName == "BUTTON") {
        modalPop.classList.add('display_none');
        let addedWin = document.getElementById('added');
        modalSub.removeChild(addedWin);
        form.reset();
    }
}