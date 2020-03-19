let slides = document.querySelectorAll('.slide_single');
console.log(slides);
let slider = [];
for (let i =0; i<slides.length; i++){
    slider[i] = slides[i].src;
    slides[i].remove();
    
};
console.log(slider);
let step = 0;
let offset = 0;
function draw (){
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add ('slide_single');
    img.style.left = offset*512 + "px";
    document.querySelector("#slide").appendChild(img);
step++;
if (step + 1 == slider.length){
    step = 0;
}
else {
    step++;
}
offset = 1;
}

function left(){
    document.onclick = null;
let slides2 = document.querySelectorAll('.slide_single');
let offset2 = 0;
for (let i = 0; i<slides2.length; i++){
    slides2[i].style.left = offset2 * 512 + 512 + 'px';
    offset2++;
}
setTimeout(function(){
    slides2[0].remove();
}, 1000);
draw();
document.onclick = left;

}


document.onclick = left;