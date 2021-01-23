// ACCESS

const menuButton = document.getElementById('menu')
const closeButton = document.getElementById('close')
const navBar = document.getElementById('nav-bar')

const menuParent = menuButton.parentElement
const closeParent = closeButton.parentElement


menuButton.addEventListener('click', ()=>{
  menuParent.classList.add('desk')
  closeParent.classList.remove('desk')
  navBar.classList.remove('desk')
})

closeButton.addEventListener('click', ()=>{
  menuParent.classList.remove('desk')
  closeParent.classList.add('desk')
  navBar.classList.add('desk')
})