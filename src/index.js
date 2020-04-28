
//get the data from the API
//Fetch the URL
//.then convert to JSON
//.then add to DOM 

let breeds = [];

document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM is loaded')
    fetchImages()
    fetchBreeds()


})


function fetchImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json() )
    .then(data => { console.log(data) 
    data.message.forEach(image => renderImages(image) )
})
}

//add images to DOM 
function renderImages(dogimage){
    let container = document.querySelector("#dog-image-container")
    let newImageElement = document.createElement('img');
    container.appendChild(newImageElement)
    newImageElement.src = dogimage
}

//Fetch the breeds
function fetchBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json() )
    .then(data => {console.log(data)
        let breeds = Object.keys(data.message)
        breeds.forEach(breed => renderBreeds(breed) )
    })

}

//render the breeds in a list 
function renderBreeds(breed){
    let list = document.querySelector("#dog-breeds")
    let newbreedElement = document.createElement('li')
    newbreedElement.id = breed 

    list.appendChild(newbreedElement)
    newbreedElement.innerText = breed 

    newbreedElement.addEventListener("click", selectBreed)

}

function selectBreed(event){
    console.log("clicked the breed")
    event.target.style.color = "orange"

}





// for(i = 0; i< myBreed.length; i++){
//     myBreed[i].addEventListener("click", selectItem);
// }

// var myBreed = document.getElementById("dog-breeds")

// function breedColor() {
//     myBreed.innerHTML += "<li> new breed " + counter + "</li>" 
//     counter++ 
// }

// function selectItem(){
//     this.classList.add("selected")
//     myBreed[0].classList.remove("selected");
// }