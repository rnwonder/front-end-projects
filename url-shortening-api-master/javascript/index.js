// ACCESS FOR NAV
const menu = document.getElementById('menu')
const close = document.getElementById('close')
const navDropDown = document.getElementById('nav-bar')
const menuParent = menu.parentElement
const closeParent = close.parentElement
const intro = document.querySelector('.intro')
const body = document.querySelector('.body')
const footer = document.querySelector('footer')

let cl = [close, intro, body, footer]



// ACCESS FOR FORM
const form = document.getElementById('form')
const inputUrl = document.getElementById('url')
const output = document.getElementById('output')
const small = form.querySelector('small')

const formButton = form.querySelector('button')

let shortLink = ''
let originalLink = ''


// NAV LOGIC
menu.addEventListener('click', ()=>{
  menuParent.classList.add('desk')
  closeParent.classList.remove('desk')
  navDropDown.classList.remove('desk')
})

for(let i = 0; i<cl.length; i++) {
  cl[i].addEventListener('click', ()=>{
    menuParent.classList.remove('desk')
    closeParent.classList.add('desk')
    navDropDown.classList.add('desk')
  })
}



// FORM LOGIC
document.addEventListener('click',function(e){
  const outputButton = output.querySelectorAll('button')
  
  for(let i=0; i<outputButton.length; i++){
    outputButton[i].addEventListener('click', (e)=> {
      const parent = outputButton[i].parentElement
      const finalLink = parent.querySelector('p')
      e.target.classList.add('copied')
      window.navigator.clipboard.writeText(finalLink.innerText)
      outputButton[i].innerText = 'Copied'

      setTimeout(()=>{
        e.target.classList.remove('copied')
        outputButton[i].innerText = 'Copy'
      },1500)
    })
  }

});


form.addEventListener('submit', (e)=>{
  e.preventDefault()

  checkUrl(inputUrl.value)
})



const checkUrl = (input) => {
  if (!input) {
    handleErr('Please input a URL!!!')
  } else {
    if (!validateUrl(input)){
      handleErr('Enter a valid URL!!!')
    } else {
      formButton.classList.add('generate')
      formButton.innerText = 'Generating...'
      getShortLink(input)

      setTimeout(()=>{
        formButton.classList.remove('generate')
        formButton.innerText = 'Shorten It!'
        inputUrl.value = ''
      },4500)
    }
  }
}


const handleErr = (message) =>{

  form.classList.add('error')
  small.innerText = message

  setTimeout(()=>{
    form.classList.remove('error')
  },6000)
}

const validateUrl = (input) => {
  const re = /(http:\/\/)?(https:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g

  return re.test(input)
}


async function getShortLink(link){
  fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
  .then((res) => res.json())
  .then((data)=> {
    shortLink = data.result.short_link2
    originalLink = data.result.original_link


      output.insertAdjacentHTML('afterbegin', `
          <div  class="view">
            <div  class="view-left">
              <p>${originalLink}</p>
            </div>
            <div class="view-right">
              <p>${shortLink}</p>
              <button>Copy</button>
            </div>
          </div>`

          
      )

      console.log(outputButton)
  })
  .catch((err) => {
    console.log(err)
  })
}


