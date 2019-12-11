console.log('%c HI', 'color: firebrick')
const newObj = {}

document.addEventListener('DOMContentLoaded', function () { 
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => {
        json["message"].forEach(img => createImage(img))
    })

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {
        for (const breed in json["message"]) {
            createBreed(breed)
            if (newObj[breed[0]]){
                newObj[breed[0]].push(breed)
            } else {
                newObj[breed[0]] = []
            }
        }
    })


    const dropDown = document.getElementById("breed-dropdown")
    dropDown.addEventListener("change", function(e) {
        e.preventDefault()
        const breeds = newObj[e.target.value]
        
        let test = document.querySelector("#dog-breeds")
        test.innerHTML = "";
        for(const breed of breeds) {
            createBreed(breed)
        }
    })

})

function createBreed(breed) {
    let container = document.querySelector("#dog-breeds")
    let list = document.createElement("li")
    list.innerText = breed
    container.appendChild(list)

    list.addEventListener("click", function() {
        list.style.color = "red"
    })

}


function createImage(img) {
    let container = document.querySelector("#dog-image-container")
    let image = document.createElement("img")
    image.src = img
    container.appendChild(image)
}