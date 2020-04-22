console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {
    console.log(`DOM is loaded`)
    fetchDogs()
    fetchDogBreeds()
    
})

function fetchDogs () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl).then(response => response.json()).then(data => displayImg(data))
    function displayImg(data){
        let array = data["message"]
        array.forEach(element => {
            let div = document.getElementById("dog-image-container")
            let imgTag = document.createElement("img")
            imgTag.src = element
            div.appendChild(imgTag)
        })
    }
}
function fetchDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    return fetch(breedUrl).then(response => response.json()).then(data => displayBreeds(data))
}

function displayBreeds(data){
    let object = data["message"] 
    let breedsArr = Object.keys(object)
        breedsArr.forEach(breed => {
            let ul = document.getElementById("dog-breeds")
            let li = document.createElement("li")
            li.textContent = breed
            ul.appendChild(li)    
            li.addEventListener("click", changeColor)
            function changeColor(event){    
                event.target.style.color = "red"
            }
        })
        let dropdown = document.getElementById("breed-dropdown")
        
        dropdown.addEventListener("change", () => {
            filterByLetter(breedsArr, dropdown.value)})
        
    }
        
function filterByLetter(breeds, option){
    let ulNode = document.getElementById("dog-breeds")  
    ulNode.innerHTML = ""
    breeds.forEach(breed => {
        if (breed.startsWith(option)) {
            let liNode = document.createElement("li") 
            liNode.textContent = breed
            ulNode.appendChild(liNode)   
        }
    
    })        
}
        

