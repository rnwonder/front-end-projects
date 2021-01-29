
requirejs(["scripts/data.js"], (data) => {
  console.log(data)
  //This function is called when scripts/helper/util.js is loaded.
  //If util.js calls define(), then this function is not fired until
  //util's dependencies have loaded, and the util argument will hold
  //the module value for "helper/util".

  // getJobs()





  
});

// async function getJobs (url) {
//   const res = await fetch(url)

//   const data = await res.json()

//   console.log(data)
// }


// getJobs()

  
