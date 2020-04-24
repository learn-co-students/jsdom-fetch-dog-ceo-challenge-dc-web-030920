const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// wait for the DOM load DOM
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'  

    const imageContainer = document.querySelector("#dog-image-container")
    fetchImages(imgUrl);
    fetchBreeds(breedUrl);
});

function fetchImages(imgUrl) {
    return fetch(imgUrl)
    .then(response => response.json())
    .then(data => addImage(data)
)}

function fetchBreeds(breedUrl) {
    return fetch(breedUrl)
    .then(response => response.json())
    .then(data => listBreeds(data)
)}

function listBreeds(breeds){
    debugger
    const ulNode = document.querySelector("#dog-breeds")

    let selectNode = document.querySelector("#breed-dropdown")
    

    for (const breed in breeds.message) {
        let liNode = document.createElement("li")
        liNode.className = "breed-name"
        liNode.innerText = breed

        selectNode.addEventListener("change", () =>{ dogSelector( breeds, selectNode.value )})

        liNode.addEventListener("click", () => {
            liNode.style.color = "blue"
        })
    //     let changed = selectNode.addEventListener("change", () =>
    //  { dogSelector( breeds, selectNode.value )})

   
        ulNode.appendChild(liNode)
    }
}

function dogSelector( breeds, option ){
    // given all the brees and option (a,b,c,d)
    // select breed from breeds that start with the option
    // breed = 'african'.startWith("b") 

    const ulNode = document.querySelector("#dog-breeds")

    while (ulNode.lastChild) {
        ulNode.removeChild(ulNode.lastChild);
    }

    // let currentBreeds = document.querySelectorAll(".breed-name")
    // currentBreeds.forEach(breed => {
    //     breed.remove()
    // })

    for(const breed in breeds.message){
        if ( breed.startsWith(option)){      
        let liNode = document.createElement("li")
        liNode.innerText = breed
        liNode.addEventListener("click", () => {
            liNode.style.color = "blue"
        })
        ulNode.appendChild(liNode)
        }
    }
}


function addImage(urlArray) {
    urlArray.message.forEach(dog => {
        const imageContainer = document.querySelector("#dog-image-container")
        let liNode = document.createElement("li")
        const imgNode = document.createElement("img")
        imgNode.src = dog
        imageContainer.appendChild(liNode)
        liNode.appendChild(imgNode)
    })
}





