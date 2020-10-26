const hamburger = document.querySelector('.hamburger')

const nav = document.querySelector('nav')

console.log(hamburger, nav)



hamburger.addEventListener('click', () =>{

   console.log('working')

   hamburger.classList.toggle('active')

   nav.classList.toggle('open')

})