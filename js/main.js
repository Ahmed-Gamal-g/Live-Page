let menubtn = document.querySelector(".menu-btn")
let navigation = document.querySelector(".navigation")
// let btns = document.querySelector(".nav-btn")

// let one = document.querySelector(".one")
// let two = document.querySelector(".two")
// let three = document.querySelector(".three")
// let four = document.querySelector(".four")
// let five = document.querySelector(".five")
// let slide1 = document.querySelector(".video-slide1")








let start = function () {
    menubtn.classList.toggle("active")
    navigation.classList.toggle("active")
    
}

menubtn.addEventListener("click", start)






// let slide = function () {
   
//     one.classList.add("active")

//     two.classList.remove("active")
//     three.classList.remove("active")
//     four.classList.remove("active")
//     five.classList.remove("active")
//     console.log(one)
// }
    

// one.addEventListener("click", slide)



// let slide2 = function () {
   
//     two.classList.add("active")
//     one.classList.remove("active")
//     three.classList.remove("active")
//     four.classList.remove("active")
//     five.classList.remove("active")
//     console.log(two)
// }
    

// two.addEventListener("click", slide2)


// let slide3 = function () {
   
//     three.classList.add("active")
//     one.classList.remove("active")
//     two.classList.remove("active")
//     four.classList.remove("active")
//     five.classList.remove("active")
//     console.log(three)
// }
    

// three.addEventListener("click", slide3)


// let slide4 = function () {
   
//     four.classList.add("active")
//     one.classList.remove("active")
//     two.classList.remove("active")
//     three.classList.remove("active")
//     five.classList.remove("active")
//     console.log(four)
// }
    

// four.addEventListener("click", slide4)


// let slide5 = function () {
   
//     five.classList.add("active")
//     one.classList.remove("active")
//     two.classList.remove("active")
//     three.classList.remove("active")
//     four.classList.remove("active")
//     console.log(five)
// }
    

// five.addEventListener("click", slide5)






let btns = document.querySelectorAll(".nav-btn")
let slides = document.querySelectorAll(".video-slide")
let content = document.querySelectorAll(".content")

var sliderNav = function (manual) {

    btns.forEach((btn) => {
        btn.classList.remove("active")
    })

    slides.forEach((slide) => {
        slide.classList.remove("active")
    })

    content.forEach((cont) => {
        cont.classList.remove("active")
    })


    
    btns[manual].classList.add("active")
    slides[manual].classList.add("active")
    content[manual].classList.add("active")
}





btns.forEach((btn , i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    })
})
    
