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
const small = form.querySelector('small')
const output = document.querySelector('.shortened-links')
const formButton = form.querySelector('button')


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
      getShortLink(input)
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


async function getShortLink(link) {
  try {
    // change text to generating
    formButton.classList.add('generate')
    formButton.innerText = 'Generating...'

    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);


    // change text to short url
    formButton.classList.remove('generate')
    formButton.innerText = 'Shorten it'
    inputUrl.value = ''

    const data =  await res.json();

    output.innerHTML = `
    <div  class="view">
      <div  class="view-left">
        <p>${data.result.original_link}</p>
      </div>
      <div class="view-right">
        <p>${data.result.short_link2}</p>
        <button id=${data.result.code} onClick="copyMe('${data.result.short_link2}','${data.result.code}')" >Copy</button>
      </div>
    </div>` + output.innerHTML

  } catch(err) {
    console.log(err)
  }
}



const copyMe = (link, id) => {
  const clickedButton = document.getElementById(id);

  clickedButton.classList.add('copied')
  window.navigator.clipboard.writeText(link)
  clickedButton.innerText = 'Copied'

  setTimeout(()=>{
    clickedButton.classList.remove('copied')
    clickedButton.innerText = 'Copy'
  },1500)
}


