document.querySelector('.getChar').addEventListener('click', getChar)

function getChar(){
    fetch('https://www.breakingbadapi.com/api/characters')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data);
        
        let randomName = Math.floor(Math.random() * data.length)
        document.querySelector('.charImg').src = data[randomName].img
        document.querySelector('.yourChar').innerText = data[randomName].name
        console.log(randomName, data[randomName])
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

