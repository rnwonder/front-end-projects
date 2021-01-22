// ACCESS

const toggleBack = document.getElementById('toggle-back')
const toggle = document.getElementById('toggle')
const month = document.querySelectorAll('.monthly')
const year = document.querySelectorAll('.yearly')

let look = "right"

toggleBack.addEventListener('click', ()=>{
  makeToggle()

  handleLook()
})


const makeToggle = () =>{
  if (look === "right") {
    toggle.classList.remove('float-right')
    toggle.classList.add('float-left')
    look = "left"

  } else {
    toggle.classList.remove('float-left')
    toggle.classList.add('float-right')
    look = "right"
  }
}

const handleLook = () =>{
  if (look === "right") {
    for (let i = 0; i < month.length; i++) {
      month[i].classList.remove('hide')
      year[i].classList.add('hide')
    } 

    
  } else {
    for (let i = 0; i < year.length; i++) {
      month[i].classList.add('hide')
      year[i].classList.remove('hide')
    } 
  }
}