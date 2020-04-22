console.log('%c HI', 'color: firebrick')

function fetchData(){
    // return fetch("https://dog.ceo/api/breeds/image/random/4")
    return fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then(json => renderBreeds(json))
        // .then(json => renderDogs(json))
}

function renderDogs(json){
        const div = document.getElementById('dog-image-container')    
        json.message.forEach(picture => {
            const img = document.createElement('img')
            img.src = picture 
            div.appendChild(img)
     
        })
}

function renderBreeds(json){
    // debugger
    const ul = document.getElementById('dog-breeds')
    let array = []
    // let select = docume
    for (const breed in json.message) {
        const li = document.createElement('li')
        li.innerHTML = breed
        ul.appendChild(li)
        // if(breed.startsWith())
        array.push(breed);
        // li.addEventListener("click", function(){
        //     li.setAttribute("style", "color: green")
        // })
        
    }

    filteredArray = [];
    // const select = document.querySelector('select')
    // array.forEach(breed => {
        
    //     if (breed.startsWith(document.querySelector('select').value)){

    //         const li = document.createElement('li')
    //         li.innerHTML = breed
    //         ul.appendChild(li)  

    //         filteredArray.push(breed)
    //     }

    //   })
    
      
}

// function filterList(){
    
// }

document.addEventListener('DOMContentLoaded', function() {
    fetchData()

  })

//   function filterBreeds(){
//     filteredArray = [];
//   const select = document.querySelector('select')
//   array.sort.forEach(breed => function(){
//     if (breed.startsWith(select.value)){
//         filteredArray.push(breed)
//         console.log(breed)
//     }
//   })
// }
    // option value="a"
  
// if breedName.startsWith('a')
//   go to top of list
// else if b?
//   same thing
// ...