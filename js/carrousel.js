(function(){
console.log("carrousel.js")
let hero__radio__input = document.querySelectorAll(".hero__radio__input")
let hero__carrousel = document.querySelectorAll(".hero__carrousel")
let hero__animation = document.querySelectorAll(".hero__animation")
console.log(hero__carrousel.length)
console.log("hero__radio__input = " , hero__radio__input.length)
hero__radio__input.forEach((radio) =>{
    radio.addEventListener('mousedown',function(){
        parcourir_carrousel()
        parcourir_animation()
        console.log(radio.dataset.id_radio) 
        hero__carrousel[radio.dataset.id_radio].classList.add("hero__carrousel--active")
        hero__animation[radio.dataset.id_radio].classList.add("hero__animation--active")
    })
})

function parcourir_carrousel(){
    hero__carrousel.forEach(element => {
        element.classList.remove("hero__carrousel--active")
    });
}

function parcourir_animation(){
    hero__animation.forEach(element => {
        element.classList.remove("hero__animation--active")
    });
}

})()