// ACCESS NAV

const menuButton = document.getElementById('menu')
const closeButton = document.getElementById('close')
const navBar = document.getElementById('nav-bar')
const intro = document.querySelector('.intro')
const body = document.querySelector('main')
const footer = document.querySelector('footer')
const navTag = navBar.parentElement

const menuParent = menuButton.parentElement
const closeParent = closeButton.parentElement

const cl = [closeButton, intro, body, footer]


menuButton.addEventListener('click', ()=>{
  menuParent.classList.add('desk')
  closeParent.classList.remove('desk')
  navBar.classList.remove('desk')
  navTag.classList.add('nav-show')
})

for (let i = 0; i<cl.length; i++){
  cl[i].addEventListener('click', ()=>{
    menuParent.classList.remove('desk')
    closeParent.classList.add('desk')
    navBar.classList.add('desk')
    navTag.classList.remove('nav-show')
  })
}


// ACCESS TABS
const bookmarkingTab = document.getElementById('book')
const bookmarkingView = document.getElementById('book1')
const searchingTab = document.getElementById('search')
const searchingView = document.getElementById('search1')
const shareTab = document.getElementById('share')
const shareView = document.getElementById('share1')



// ACCESS FAQS
const faqBookmark = document.getElementById('bookmark?')
const faqBrowser = document.getElementById('browser?')
const faqApp = document.getElementById('app?')
const faqOther = document.getElementById('other?')

const faq = [faqBookmark, faqBrowser, faqApp, faqOther]
const preventHighlight = [bookmarkingTab, searchingTab, shareTab, faqBookmark, faqBrowser, faqApp, faqOther ]

let count = [0, 0, 0, 0]



// ACCESS FORM
const form = document.getElementById('form')
const small = form.querySelector('small')
const email = document.getElementById('email')
let valid = false





// PREVENT DEFAULT HIGHLIGHTING OF P TAGS ELEMENT ON THE QUESTION AND TAB DIVS
for(let i = 0; i < preventHighlight.length; i++){
  preventHighlight[i].addEventListener('mousedown', (e)=>{
    e.preventDefault(); 
  });
}



// TAB LOGIC
bookmarkingTab.addEventListener('click', ()=>{
  bookmarkingTab.classList.add('active')
  searchingTab.classList.remove('active')
  shareTab.classList.remove('active')

  bookmarkingView.classList.remove('hide')
  searchingView.classList.add('hide')
  shareView.classList.add('hide')
})

searchingTab.addEventListener('click', ()=>{
  bookmarkingTab.classList.remove('active')
  searchingTab.classList.add('active')
  shareTab.classList.remove('active')

  bookmarkingView.classList.add('hide')
  searchingView.classList.remove('hide')
  shareView.classList.add('hide')
})

shareTab.addEventListener('click', ()=>{
  bookmarkingTab.classList.remove('active')
  searchingTab.classList.remove('active')
  shareTab.classList.add('active')

  bookmarkingView.classList.add('hide')
  searchingView.classList.add('hide')
  shareView.classList.remove('hide')
})







// FAQ LOGIC
for(let i = 0; i < faq.length; i++) {

  faq[i].addEventListener('click', ()=>{

    const parent = faq[i].parentElement
    const answer = parent.querySelector('.ans')

    if (count[i] === 0) {
      parent.classList.add('show')
      answer.classList.remove('hide')
      count[i] = 1
    } else {
      parent.classList.remove('show')
      answer.classList.add('hide')
      count[i] = 0
    }
  }) 
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
    small.innerText = 'Whoops, make sure it\'s an email'
  } else {
    form.classList.remove('error')
    valid = true
  }
}


const validateEmail = (input) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(input.toLowerCase())
}