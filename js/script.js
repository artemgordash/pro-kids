document.addEventListener('DOMContentLoaded', function() {


// header

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 1) {
        header.classList.add('header-scrolled')
    } else {
        header.classList.remove('header-scrolled')
    }
})




const headerBurger = document.querySelector('.header__burger'),
      headerNav = document.querySelector('.header');

headerBurger.addEventListener('click', () => {
    headerNav.classList.toggle('nav-opened')
    document.body.classList.toggle('overflow-hidden')
})


// about expand (mobile) 

const aboutExpandButton = document.querySelector('.about__list-expand'),
      aboutTableList = document.querySelector('.about');

aboutExpandButton.addEventListener('click', () => {
    aboutTableList.classList.toggle('about__list-expanded')
})


// services expand

const accordionExpand = document.querySelectorAll('.item__expand')

accordionExpand.forEach(el => {
    el.addEventListener('click', () => {
        el.parentElement.parentElement.classList.toggle('item-opened')
    })
})




// employees-slider

const employeesSliderLeft = document.querySelector('.slider__prev-btn'),
      employeesSliderRight = document.querySelector('.slider__next-btn'),
      employeesSliderTape = document.querySelector('.slider-tape');
let employeesSliderOffset = 0,
    employeesSliderDesiredShift = 0,
    employeesSliderLimit = 0;

if (document.body.clientWidth <= 768) {
    employeesSliderDesiredShift = 36.25
    employeesSliderLimit = -109
} else if (document.body.clientWidth > 768) {
    employeesSliderDesiredShift = 65.5
    employeesSliderLimit = -65.5
}


employeesSliderLeft.addEventListener('click', () => {
    if (employeesSliderOffset == 0 || employeesSliderOffset == -0.25) {
        employeesSliderOffset = employeesSliderLimit 
    } else {
        employeesSliderOffset += employeesSliderDesiredShift
    }
    employeesSliderTape.style = `transform: translateX(${employeesSliderOffset}vw)` 
})

employeesSliderRight.addEventListener('click', () => {   
    if (employeesSliderOffset >= employeesSliderLimit + employeesSliderDesiredShift) {
        employeesSliderOffset -= employeesSliderDesiredShift
    } else {
        employeesSliderOffset = 0
    }
    employeesSliderTape.style = `transform: translateX(${employeesSliderOffset}vw)` 
})












})