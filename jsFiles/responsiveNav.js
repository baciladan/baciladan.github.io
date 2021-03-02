// Nav Bar Animation

const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-links')

burger.addEventListener("click",function(){
    navList.classList.toggle('nav-active');
})