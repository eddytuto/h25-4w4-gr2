(function(){
console.log("carrousel.js")
let hero__radio__input = document.querySelectorAll(".hero__radio__input")
let hero__carrousel = document.querySelectorAll(".hero__carrousel")
console.log(hero__carrousel.length)
console.log("hero__radio__input = " , hero__radio__input.length)
hero__radio__input.forEach((radio) =>{
    radio.addEventListener('mousedown',function(){
        parcourir_carrousel()
        console.log(radio.dataset.id_radio) 
        hero__carrousel[radio.dataset.id_radio].classList.add("hero__carrousel--active")
    })
})

function parcourir_carrousel(){
    hero__carrousel.forEach(element => {
        element.classList.remove("hero__carrousel--active")
    });
}

})()