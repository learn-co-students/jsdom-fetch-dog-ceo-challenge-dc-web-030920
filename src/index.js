console.log('%c HI', 'color: firebrick')
// Challenge 1
// Add JavaScript so that:
// on page load
// fetch the images using the url above ⬆️
// parse the response as JSON
// add image elements to the DOM for each🤔 image in the array


// Challenge 2
// const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// After the first challenge is completed, add JavaScript so that:

// on page load, fetch all the dog breeds using the url above ⬆️
// add the breeds to the page in an <ul> (take a look at the included index.html)

// On page load we want to fetch all sog breeds
// Create ul tags and appened li tags to it.
// li inner text should be breed names.


// Challenge 3
// Once all of the breeds are rendered in the <ul>, 
//add JavaScript so that the font color of a particular <li> changes on click. 
// This can be a color of your choosing.

// When the user clicks any of the dog breed list items, the color the text should change.


document.addEventListener("DOMContentLoaded", function () {
  // fetchDogs()
  fetchBreeds()
  // document.addEventListener("click", function(){})
})

// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

//challenge1
function fetchDogs() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(dogArray => {
      dogArray.message.forEach(dog => renderDog(dog))
    })
}

function renderDog(data) {
  let div = document.getElementById("dog-image-container")
  let li = document.createElement("li")
  div.appendChild(li)
  let img = document.createElement("img")
  li.appendChild(img)
  img.src = data
}


//challenge2
function fetchBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(breedArray => {
      let keys = Object.keys(breedArray.message)
      // debugger 
      keys.forEach(key => renderBreeds(key))
    })
}


function renderBreeds(message) {
  let div = document.getElementById("dog-breeds")
  let li = document.createElement("li")
  div.appendChild(li)
  li.innerText = message
}