
let headerId = document.getElementById('home');
let servicesId = document.getElementById('services');
let portfolioId = document.getElementById('portfolio');
let aboutId = document.getElementById('about');
let contactId = document.getElementById('contact');
let menuNuvbar = document.getElementById('menu');



// Remove Class
const removeSelectedTags = () =>{
    menuNuvbar.querySelectorAll('.tag').forEach((el)=>{
        el.classList.remove('active')})
}

//Scrolling
document.addEventListener('scroll', ()=>{
    console.log(servicesId.offsetTop)
    if(window.scrollY < servicesId.offsetTop - headerId.offsetHeight){
        removeSelectedTags();
document.getElementById('home_link').classList.add('active');
    }
    if(window.scrollY >= servicesId.offsetTop - headerId.offsetHeight && window.scrollY< portfolioId.offsetTop - headerId.offsetHeight){
        removeSelectedTags();
document.getElementById('services_link').classList.add('active');
    }
    if(window.scrollY>= portfolioId.offsetTop - headerId.offsetHeight){
        removeSelectedTags();
document.getElementById('portfolio_link').classList.add('active');
    }

    if(window.scrollY>= aboutId.offsetTop - headerId.offsetHeight){
        removeSelectedTags();
document.getElementById('about_link').classList.add('active');
    }
    if(window.scrollY>= contactId.offsetTop - headerId.offsetHeight){
        removeSelectedTags();
document.getElementById('contact_link').classList.add('active');
    }
    if (window.scrollY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
        removeSelectedTags();
        document.getElementById('contact_link').classList.add('active');
    }

})

// move to hook
let hooks = document.querySelectorAll('a[href*="#"]')
for (let item of hooks) {
    item .addEventListener('click', event => {
        event.preventDefault()
        const currentLinkId = item .getAttribute('href').substr(1)
        document.getElementById(currentLinkId ).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

//add active
addTagsClickHandler = () =>{
    menuNuvbar.addEventListener('click', (element)=>{
        if(element.target.classList.contains('tag')){
            let targetedTags = event.target;
            removeSelectedTags();
    
        targetedTags.classList.add('active');
    
        }
    })
    }

//Slides and phone_screen_switch    

let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('selected', direction);
    })
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('selected');
        isEnabled = true;
    })
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}
document.querySelector('.arrow_right').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem)
    }
});
document.querySelector('.arrow_left').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem)
    }
});

// lock screen in slider
let firstPhoneScreen = document.getElementById('slider_img_one');
let secondPhoneScreen = document.getElementById('slider_img_two');
let buttonFirstPhone = () => {
    if (firstPhoneScreen.classList.contains('none'))
    firstPhoneScreen.classList.remove('none')
    else
    firstPhoneScreen.classList.add('none');
}
let buttonSecondPhone = () => {
    if (secondPhoneScreen.classList.contains('none'))
    secondPhoneScreen.classList.remove('none')
    else
    secondPhoneScreen.classList.add('none');
}


// portfolio active image
imagePortfolio.addEventListener('click', event => {
    let target = event.target;
    if (target.tagName == 'IMG') {
        imagePortfolio.querySelectorAll('img').forEach(item => {

            item.style.boxShadow = "none";
        });       
        event.target.style.boxShadow = "0px 0px 0px 5px rgba(240,108,100,1)";
    }
})

//Random navigator portfolio
let buttonsPortfolio = document.getElementById('portfolio_buttons');
let imagePortfolio = document.getElementById('portfolio_images');
let randomImages = (event) => {
    let target = event.target;
    let srcArray = [];
    let counter = 0;
    if (target.tagName == 'SPAN') {
        buttonsPortfolio.querySelectorAll('span').forEach(item => {
            item.classList.remove('button_active');
        });
        target.classList.add('button_active');
        imagePortfolio.querySelectorAll('img').forEach(item => {
            srcArray.push(item.src);
            counter++;
            item.src = '';
        })
        function randomGrid(size) {
            let array = new Array(size).fill(0).map((item, i) => i);
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * i);
                let tmp = array[i];

                array[i] = array[j];

                array[j] = tmp;
            }
            return array;
        }
        let randomArray = randomGrid(counter);
       
        imagePortfolio.querySelectorAll('img').forEach((item, index) => {       
            item.src =srcArray[randomArray[index]];
            item.style.boxShadow = "none";   
            
            
        })
    }
}











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