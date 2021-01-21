// ACCESS
const form = document.getElementById('form')
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password')
let valid = false

form.addEventListener('submit', (event)=>{
  event.preventDefault()
  checkInputs()

  if (valid) {
    form.submit()
  }
})

const checkInputs = () =>{

  if(!firstName.value){
    handleError(firstName, 'First Name cannot be empty')
  } else {
    handleSuccess(firstName)
  }

  if(!lastName.value){
    handleError(lastName, 'Last Name cannot be empty')
  } else {
    handleSuccess(lastName)
  }

  if(!email.value){
    handleError(email, 'Email cannot be empty')
  } else {
    if(!validateEmail(email.value)) {
      handleError(email, 'Looks like this is not an email')
    } else {
      handleSuccess(email)
    }
  }

  if(!password.value){
    handleError(password, 'Password cannot be empty')
  } else {
    if (!validatePassword(password.value)){
      handleError(password, 'Must have at least 1 number, 1 symbol, 1 lowercase letter, 1 Uppercase letter and be at least 8 characters long')
    } else {
      handleSuccess(password)
    }
  }

  if (firstName.value && lastName.value && validatePassword(password.value) && validateEmail(email.value)) {
    valid = true
  }

}


const handleError = (input, message) =>{
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  small.innerText = message
  formControl.classList.add('error')
}

const handleSuccess = (input) =>{
  const formControl = input.parentElement
  formControl.classList.remove('error')
}

const validateEmail = (input) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(input.toLowerCase())
}

const validatePassword = (input) =>{
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.*[a-zA-Z]).{8,}$/gm
  return re.test(input)
}