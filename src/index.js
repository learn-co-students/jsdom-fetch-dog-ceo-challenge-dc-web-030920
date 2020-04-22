console.log('%c HI', 'color: firebrick')
// Add JavaScript so that:
// on page load
// fetch the images using the url above ⬆️
// parse the response as JSON
// add image elements to the DOM for each🤔 image in the array

document.addEventListener("DOMContentLoaded", function () {
  console.log("Hello World")
  fetchDogs()
//   renderDog()
})

// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

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