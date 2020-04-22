console.log('%c HI', 'color: firebrick')

function fetchData(){
    // return fetch("https://dog.ceo/api/breeds/image/random/4")
    return fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then(json => renderBreeds(json))
        // .then(json => renderDogs(json))
}

function renderDogs(json){ // this code renders images
        const div = document.getElementById('dog-image-container')    
        json.message.forEach(picture => {
            const img = document.createElement('img')
            img.src = picture 
            div.appendChild(img)
     
        })
}

// function renderBreeds(json){ // this code is to load ALL dogs
//
//     const ul = document.getElementById('dog-breeds')
//     let array = []
//     // let select = docume
//     for (const breed in json.message) {
//         const li = document.createElement('li')
//         li.innerHTML = breed
//         ul.appendChild(li)
//         // if(breed.startsWith())
//         array.push(breed);
//         // li.addEventListener("click", function(){
//         //     li.setAttribute("style", "color: green")
//         // })
        
//     }

function renderBreeds(json){

    const ul = document.getElementById('dog-breeds')
    let array = []
    for (const breed in json.message) {
        const li = document.createElement('li')

        array.push(breed); 

    }
    filteredArray = [];
    array.forEach(breed => {
        if (breed.startsWith(document.querySelector('select').value)){
            let li = document.createElement('li')
            li.innerHTML = breed
            ul.appendChild(li)
        }
    })      
}

document.addEventListener('DOMContentLoaded', function() {

    fetchData()
    select = document.querySelector('select')
    ul = document.querySelector('ul')
    select.addEventListener("change", function(event){ //event can also not be there
        ul.innerHTML = '';
        fetchData()
    })

  })


