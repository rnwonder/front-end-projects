// ACCESS

const menuButton = document.getElementById('menu')
const closeButton = document.getElementById('close')
const navBar = document.getElementById('nav-bar')
const intro = document.querySelector('.intro')
const body = document.querySelector('.body')
const footer = document.querySelector('footer')

const menuParent = menuButton.parentElement
const closeParent = closeButton.parentElement

const cl = [closeButton, intro, body, footer]


menuButton.addEventListener('click', ()=>{
  menuParent.classList.add('desk')
  closeParent.classList.remove('desk')
  navBar.classList.remove('desk')
})

for (let i = 0; i<cl.length; i++){
  cl[i].addEventListener('click', ()=>{
    menuParent.classList.remove('desk')
    closeParent.classList.add('desk')
    navBar.classList.add('desk')
  })
}




