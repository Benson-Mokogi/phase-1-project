// Fetch the data from the API using a callback function once the DOM loads
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
    .then(res => res.json())
    .then(data => data.message.map(data => renderBreed(data)))
    .catch(error => {console.log(error); return error})
})

// Create a function that renders the list of breed from the fetched data
function renderBreed(data){
    //get the breed name from the url
    const url = `${data}`
    const breedName = url.split('/')[4]; 

    if(breedName){
        //create an object containing the breed name and image url
        const dogNameObject = {
            name: breedName,
            src: url
        }

        //append the breed name to the list in the DOM
        const li = document.createElement("li");
        li.textContent = breedName
        document.getElementById("breedList").appendChild(li)

        //add a click listener to the breed name
        li.addEventListener("click", () => renderOnClick(dogNameObject))
    }   
}

// Create a function that renders the dog image when a breed name is clicked
function renderOnClick(dogNameObject){
    const img = document.createElement("img")
    img.src = dogNameObject.src
    document.getElementById("breedRender").innerHTML = ''
    document.getElementById("breedRender").appendChild(img)
}

// Add an event listener that clears the rendered image when the breed list is clicked
document.getElementById("breedList").addEventListener("click", () => {
    document.getElementById("breedRender").innerHTML = ''
})
