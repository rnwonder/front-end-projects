// ACCESS FILTER TAGS CONTAINER AND CLEAR
const tagsContainer = document.querySelector('.tags')
const clear = document.getElementById('clear')
const filterDisplay = document.getElementById('display')

let rr 
let type = []
let words = []
let count = 1




// HANDLES CLEAR CLICKS RETURNING EVERYTHING BACK TO DEFAULT
clear.addEventListener('click', ()=>{
  tagsContainer.innerHTML = ''
  words = []
  type = []
  count = 1
})




// ASYNC FUNCTION THAT GETS DATA FROM JSON
async function getJobs(url) {
  const res = await fetch(url)

  const data = await res.json()

  renderData(data)
}







// RENDERS JSON DATA INTO HTML FILE
const renderData = (pp) => {

  // GETS EXISTING HTML ELEMENT TO INPUT OUR DATA IN
  const main = document.querySelector('main')



  let data
  // CHECKS IF A FILTER INPUT HAS BEEN RECEIVED IN "words" ARRAY AND CLEARS ANY EXISTING HTML CODE IN "main" HTML ELEMENT/ VARIABLE
  if (!words[0]) {

    // IF NO FILTER INPUT RETURN THE WHOLE DATA AS IS
    main.innerHTML = ''
    data = pp

  } else {

    // IF FILTER INPUT IS FOUND RETURN FILTERED DATA IN ACCORDANCE TO THE INPUT RECEIVED
    main.innerHTML = ''
    handleFilter(pp)

    data = rr
  }

  // HANDLES JSON DATA RECEIVED - FILTERED OR NOT FILTERED 
  for(let i = 0; i < data.length; i++) {
    
    main.innerHTML += `
    <section class="items ${data[i].featured ? `new`: ''}">
    <div class="logo">
      <img src=${data[i].logo} alt="">
    </div>

    <div class="content">

      <div class="contain">
        <div class="top">
          <h2>${data[i].company}</h2>
          ${data[i].new ? `<p>NEW!</p>`: ''}
          ${data[i].featured ? `<p>FEATURED</p>`: ''}
        </div>


        <div class="title">
          <h1>${data[i].position}</h1>
        </div>


        <div class="bottom">
          <ul>
            <li>
              <p>${data[i].postedAt}</p>
            </li>

            <li>
              <p>${data[i].contract}</p>
            </li>

            <li>
              <p>${data[i].location}</p>
            </li>
          </ul>
        </div>
      </div>


      <div class="lang">
        <ul>
          <li>
            <p class="role" onclick="addFilter('${data[i].role}', 'role')">${data[i].role}</p>
          </li>

          <li>
            <p class="level" onclick="addFilter('${data[i].level}', 'level')">${data[i].level}</p>
          </li>
         

          ${data[i].languages.map(el => {
            return `
            <li>
            <p class="languages" onclick="addFilter('${el}', 'languages')">${el}</p>
          </li>
           ` 
          }).join('')}
          

          ${data[i].tools.map(el => {
            return `
            <li>
            <p class="tools" onclick="addFilter('${el}', 'tools')"> ${el}</p>
          </li>
            `
          }).join('')}

        </ul>
      </div>

    </div>
  </section>` 
  }

  // OUR FILTERED DATA GENERATED GETS DISCARDED TO ENSURE WE WILL FILTER THE WHOLE JSON DATA AGAIN FROM SCRATCH ON THE NEXT ITERATION AND NOT THE JUST FILTERED DATA
  return rr = ''
}





// THIS ADDS FILTER INPUT TO THE "words" ARRAY AND TYPE OF FILTER INPUT RECEIVED TO THE "type" ARRAY
const addFilter = (input, kind) => { 
  filterDisplay.classList.remove('hide')
  // CHECKS IF THE FILTER INPUT RECEIVED ALREADY EXISTS IN THE "words" ARRAY
  if (!words.includes(input) ){

    // IF NOT WE STORE THE INPUT AND INPUT TYPE IN RESPECTIVE ARRAYS AND ADD IT TO OUR HTML FILE IN THE ELEMENT WITH CLASS "tags" GIVING EACH A UNIQUE ID
    type.push(kind)
    words.push(input)
    
    tagsContainer.innerHTML += `
    <div class="tag">
    <p class="${kind}">${input}</p>
    <img id="${count}" onclick="handleRemove('${input}', '${count}')" src="./images/icon-remove.svg" alt="">
    </div>
    `

    count += 1
  
  } else {

    // IF STORED DO NOTHING
    return
  }
  
}



// THIS HANDLES REMOVING STORED FILTERED INPUT INDIVIDUALLY AND IS CALLED WHEN THE "X" IMAGE ON THE INPUT ELEMENT IS CLICKED
const handleRemove = (input, id) => {

  // IT REMOVES IT FROM THE TAGS CONTAINER IN HTML FILE AND ALSO FROM "word" AND "type" ARRAYS 
  const close = document.getElementById(id)

      close.parentElement.remove()

      let index = words.indexOf(input)
      if(index > -1) {
        words.splice(index, 1)
        type.splice(index, 1)
      }
}



// HANDLES FILTER
const handleFilter = (pp) => {
  for(let i = 0; i< words.length; i++) {
    if (type[i] === 'role') {
      !rr ? rr = pp.filter(ee=> ee.role === words[i]): rr = rr.filter(ee=> ee.role === words[i])
    }

    if (type[i] === 'level') {
      !rr ? rr = pp.filter(ee => ee.level === words[i]): rr = rr.filter(ee => ee.level === words[i])
    }

    if (type[i] === 'languages') {
      !rr ? rr = pp.filter(ee => ee.languages.includes(words[i])): rr = rr.filter(ee => ee.languages.includes(words[i]))
    }

    if (type[i] === 'tools') {
      !rr ? rr = pp.filter(ee => ee.tools.includes(words[i])): rr = rr.filter(ee => ee.tools.includes(words[i]))
    }
  }
  return rr
}


// CALLS OUR ASYNC FUNCTION ON START
getJobs('scripts/data2.json')


// CALLS OUR ASYNC FUNCTION EVERY TIME A CLICK EVENT OCCURS ON OUR PAGE
document.addEventListener('click', ()=>{
  getJobs('scripts/data2.json')
})
