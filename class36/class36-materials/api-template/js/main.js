//Make an api request using async await
document.querySelector('button').addEventListener('click', getCuteDogPhoto)

async function getCuteDogPhoto(){
        const res = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await res.json()
    try {
        console.log(data)
        document.querySelector('img').src = data.message
    } 
    catch {
        console.log('error');
    }
}

getCuteDogPhoto()