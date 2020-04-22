console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
fetchImages()
fetchBreeds()
createAlphabet()
let rickNode = document.getElementById("goodtimes")
rickNode.onclick = rickRoll
let dropDownNode = document.getElementById("breed-dropdown")
// dropDownNode.addEventListener("change", handleDropDown)
dropDownNode.onchange = handleDropDown;
let shuffleDogsNode = document.getElementById("reshuffle")
let dogImageNode = document.getElementById("dog-image-container")
shuffleDogsNode.onclick = () =>  { 
    dogImageNode.innerHTML = "" 
    fetchImages();
    }  
}
)

function createAlphabet(){
    let dropDown = document.querySelector("#breed-dropdown")
    for(i=97; i <123; i++){
        let opt = document.createElement("option")
        opt.value = String.fromCharCode(i)
        opt.innerText = opt.value
        dropDown.appendChild(opt)
    }
}
function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => {
        // console.log(data)
    // fetch (url )
    data.message.forEach( dogImage => createImg(dogImage))
    })
}

function rickRoll( ){   
    let divNode = document.getElementById("dog-image-container")
<<<<<<< HEAD
    divNode.innerHTML = `<video width="100%" height="100%" loop autoplay controls>
    <source src="http://rickrollomatic.com/rickroll.mp4" type="video/mp4">
  Your browser does not support the video tag.    <!--...Peasant.-->
  </video>`
=======
    divNode.innerHTML = '<iframe src="https://giphy.com/embed/lgcUUCXgC8mEo" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
>>>>>>> 5f8766e04022c06af4a698e2dc83db3bf5626039
}


function fetchOneDog() {
    fetch("https://dog.ceo/api/breeds/image/random/1")
    .then(response => response.json())
    .then(data => {
        // console.log(data)
    // fetch (url )
    data.message.forEach( dogImage => createImg(dogImage))
    })
}

function createImg(dogImage){
    let parent = document.getElementById("dog-image-container")
    let imgNode = document.createElement("img")
    imgNode.src = dogImage
    imgNode.style = "width: 250px";
    parent.appendChild(imgNode)
    imgNode.onclick = function()  {
        favorite(event);
        fetchOneDog()
    }
}

function favorite(event){
    let divId = document.getElementById("favorites")
    let imgNode = event.target
    divId.appendChild(imgNode)
    imgNode.onclick = () => divId.removeChild(imgNode)
}


function fetchBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        // console.log(breeds))
        for (const [key,value] of Object.entries(data.message)){
            createBreedLi(key)
        }
        // debugger
        // data.message.forEach( (breed, subBrred) => createBreedLi(breed) )
    })
}

function createBreedLi(breed) {
    // console.log(breed)
    let parent = document.getElementById("dog-breeds")
    let liNode = document.createElement("li")
    liNode.innerText = breed
    parent.appendChild(liNode)
    liNode.onclick = changeColor;
}

function changeColor(event){
    let highlighter = document.getElementById("color-dropdown").value;
    let liNode = event.target 
    if (!liNode.style.color){
        liNode.style.color = highlighter
    }
    else if (liNode.style.color !== "black") {
        liNode.style.color = "black"
    }
    else  {
        liNode.style.color = highlighter
    }
}



function handleDropDown(event) {
    console.log(event.target)
    let ulNode = document.getElementById("dog-breeds")
    let liNodeList = ulNode.querySelectorAll("li")
    liNodeList.forEach ( li => { 
        if (li.innerText[0] !== event.target.value) {
            li.hidden = true 
        }
         else if (li.innerText[0] === this.value) {
            li.hidden = false
    }
    })
}
// Add event to dropdown menu
//fucntion
// all lis
// for i = 0 ; allLi.length; ++i
// if thing[i].innerText[0] !=== event.target.value
//    set hidden
// end this isnt ruby

// elsif

// document.getElementById("myP").style.visibility = "hidden";
// document.getElementById("welcome").hidden = true;
 
// for (const [key, value] of Object.entries(test)) {
//   console.log(key, value);
// }

// items.forEach(function(item){
//     copy.push(item*item);
//   });

// 'https://dog.ceo/api/breeds/list/all'
// "dog-breeds" id