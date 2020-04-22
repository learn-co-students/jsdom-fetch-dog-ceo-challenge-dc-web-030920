console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Loaded");
    
    fetchIMG();
    fetchBreed();

});

function fetchBreed(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        let keys = Object.keys(data.message)
        keys.forEach(key => breedLister(key))
    })
            function breedLister(breed){
                let liNode = document.createElement("li");
                let ul = document.getElementById("dog-breeds");
                ul.appendChild(liNode);
                liNode.innerText = breed;
                liNode.addEventListener("click", colorChanger) 
                function colorChanger(){
                    this.style.color = "red"
                }
            }
            
            let selectNode = document.getElementById("breed-dropdown")
            selectNode.onchange = function() {
            let liList = document.querySelectorAll('li')
            

                if (selectNode.value === "a") {
                        liList.forEach(li => {
                    
                            if (li.innerText.startsWith('a', 0) != true){

                                li.remove()

                            }
                        })  
                    }else if(selectNode.value === "b") {
                        liList.forEach(li => {
                    
                            if (li.innerText.startsWith('b', 0) != true){

                                li.remove()
                            }
                        })  
                    }else if(selectNode.value === "c") {
                        liList.forEach(li => {
                    
                            if (li.innerText.startsWith('c', 0) != true){

                                li.remove()
                            }
                        })  
                    }else if(selectNode.value === "d") {
                        liList.forEach(li => {
                    
                            if (li.innerText.startsWith('d', 0) != true){

                                li.remove()
                            }
                        })  
                    }
                    
            }
            
}


function fetchIMG() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
   .then(response => response.json())     
   .then(data => data.message.forEach(image => {img(image)}))
   }

function img(image){

   let div = document.getElementById('dog-image-container');
   let imgNode = document.createElement('img');
   div.appendChild(imgNode);
   imgNode.src = image
}

