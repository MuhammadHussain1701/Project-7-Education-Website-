burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
rightNav=document.querySelector('.rightNav')
navList=document.querySelector('.nav-list')


burger.addEventListener('click',()=>{
    rightNav.classList.toggle('visibility-nav')
    navList.classList.toggle('visibility-nav')
    navbar.classList.toggle('height-nav')
})