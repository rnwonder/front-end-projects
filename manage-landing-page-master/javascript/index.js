// ACCESS NAV 
const menu = document.getElementById('menu')
const close = document.getElementById('close')
const navDropDown = document.getElementById('nav-bar')
const background = document.getElementById('bg-color')
const menuParent = menu.parentElement
const closeParent = close.parentElement

let cl = [close, background]


// ACCESS SCROLL
const scroll = document.querySelector('.scroll')
const scrollWidthPage = scroll.offsetWidth
const position1 = document.getElementById('one')
const position2 = document.getElementById('two')
const position3 = document.getElementById('three')
const position4 = document.getElementById('four')


// ACCESS FORM
const form = document.getElementById('form')
const small = form.querySelector('small')
const email = document.getElementById('update')
let valid = false





// NAV LOGIC
menu.addEventListener('click', ()=>{
  menuParent.classList.add('desk')
  background.classList.add('active')
  closeParent.classList.remove('desk')
  navDropDown.classList.remove('desk')
  
})

for(let i = 0; i<cl.length; i++) {
  cl[i].addEventListener('click', ()=>{
    menuParent.classList.remove('desk')
    background.classList.remove('active')
    closeParent.classList.add('desk')
    navDropDown.classList.add('desk')
  })
}





// SCROLL LOGIC
scroll.addEventListener('scroll', ()=>{

  const scrollWidth = scroll.offsetWidth

    if (scroll.scrollLeft < scrollWidth) {
      position1.classList.add('fill') 
      position2.classList.remove('fill') 
      position3.classList.remove('fill') 
      position4.classList.remove('fill')    
    } 

    if (scroll.scrollLeft >= scrollWidth - 30 && scroll.scrollLeft < (scrollWidth - 30) * 2) {
      position1.classList.remove('fill') 
      position2.classList.add('fill') 
      position3.classList.remove('fill') 
      position4.classList.remove('fill') 
    }

    if (scroll.scrollLeft >= (scrollWidth - 30) * 2 && scroll.scrollLeft < (scrollWidth - 30) * 3) {
      position1.classList.remove('fill') 
      position2.classList.remove('fill') 
      position3.classList.add('fill') 
      position4.classList.remove('fill') 
    }

    if (scroll.scrollLeft >= (scrollWidth - 30) * 3) {
      position1.classList.remove('fill') 
      position2.classList.remove('fill') 
      position3.classList.remove('fill') 
      position4.classList.add('fill') 
    }

})


if (scrollWidthPage < 800) {
  scroll.scrollLeft = (scrollWidthPage + 28) * 1
} else {
  scroll.scrollLeft = 0.1 * scrollWidthPage
}





// FORM LOGIC
form.addEventListener('submit' , (e)=>{
  e.preventDefault()

  checkInput(email.value)

  if(valid) {
    form.submit()
  }
})

const checkInput = (input) => {
  if(!validateEmail(input)) {
    form.classList.add('error')
    small.innerText = 'Please enter a valid email'
  } else {
    form.classList.remove('error')
    valid = true
  }
}


const validateEmail = (input) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(input.toLowerCase())
}