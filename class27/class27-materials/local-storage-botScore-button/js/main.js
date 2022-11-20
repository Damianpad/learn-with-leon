//Create a button that adds 1 to a botScore stored in localStorage 

if (!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0)
}

const startingScore = localStorage.getItem('botScore')

document.querySelector('h2').innerText = startingScore
document.querySelector('.add').addEventListener('click', addScore)
document.querySelector('.clear').addEventListener('click', clearScore)

function addScore(){
    let botScoreVal = Number(localStorage.getItem('botScore'))
    botScoreVal += 1
    localStorage.setItem('botScore', botScoreVal)
    document.querySelector('h2').innerText = botScoreVal
}

function clearScore(){
    console.log('clear');
    localStorage.clear()
    document.querySelector('h2').innerText = 0
}

