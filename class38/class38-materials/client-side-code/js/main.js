document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const heroName = document.querySelector('input').value
    try{
        const response = await fetch(`https://easy-pink-clam-cap.cyclic.app/api/${heroName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.alterEgo
        document.querySelector('#species').innerText = data.species
        document.querySelector('#origin').innerText = data.placeOfOrigin
        document.querySelector('#abilities').innerText = data.abilities[1]
        document.querySelector('#img').src = data.img
    }catch(error){
        console.log(error)
    }
}