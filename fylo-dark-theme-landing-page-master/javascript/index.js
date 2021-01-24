// ACCESS

const form = document.getElementById('form')
const email = document.getElementById('email')
const small = form.querySelector('small')
let valid = false


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