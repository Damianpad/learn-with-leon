//Get a dog photo from the dog.ceo api and place the photo in the DOM
document.querySelector('.getDog').addEventListener('click', getDoggo)

function getDoggo(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())// parse object as json
    .then(data => {
        console.log(data);
        document.querySelector('.dogImg').src = data.message
    })
    .catch(err => {
        console.log(`error ${err}`);
    })
}
