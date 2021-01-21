// ACCESS

const formInput = document.getElementById('email');
const button = document.getElementById('submit-btn')
const form = document.getElementById('form')
const small = form.querySelector('small')
let valid = false


form.addEventListener('submit', (e)=>{
  e.preventDefault()

  checkEmail(email.value)

  if (valid) {
    form.submit()
  }
  
})


const checkEmail = (input) => {

  if(!input){
    small.innerText = 'Input your email !'
    formInput.classList.add('error')
    form.classList.add('normal')
  } else {
  if(!validate(input)) {
    small.innerText = 'Please provide a valid email !'

    formInput.classList.add('error')
    form.classList.add('normal')
  } else {
    formInput.classList.remove('error')
    form.classList.remove('normal')
    valid = true
  }
}

}


const validate = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email.toLowerCase())
}