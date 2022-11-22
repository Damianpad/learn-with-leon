//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', drawTwo)
let deckId = ''
let player1Pile = 0
let Player2Pile = 0
let player1Score = 0
let player2Score = 0

  // Get Deck
  fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    deckId = data.deck_id
    localStorage.setItem('deckId', `${deckId}`)
    console.log(deckId);
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
  

function drawTwo(){
  resetWarCards()

  fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.cards[0]);
        let player1CardImage = data.cards[0].image
        let player2CardImage = data.cards[1].image
        
        let player1Value = convertToNum(data.cards[0].value)
        let player2Value = convertToNum(data.cards[1].value)

        if (player1Value > player2Value){
          
          player1Score += 1
          document.querySelector("#result").innerText = "Result: Player 1 Wins"
          document.querySelector('#player1-score').innerText = player1Score
          document.querySelector('player1-pile').src = player1Pile

        } else if (player2Value > player1Value){
          player2Score += 1
          document.querySelector("#result").innerText = "Result: Player 2 Wins"
          document.querySelector('#player2-score').innerText = player2Score
        } else {
          document.querySelector("#result").innerText = "Result: WAR"
          runWar()
        }

        let player1Card = player1Value + " " + data.cards[0].suit
        let player2Card = player2Value + " " + data.cards[1].suit
        
        document.querySelector('#player1').src = player1CardImage
        document.querySelector('#player2').src = player2CardImage
        document.querySelector('.card-result1').innerText = player1Card
        document.querySelector('.card-result2').innerText = player2Card
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function convertToNum(value){
  if (value === 'ACE'){
    return 14
  } else if (value === 'KING'){
    return 13
  } else if (value === 'QUEEN'){
    return 12
  } else if (value === 'JACK'){
    return 11
  } else {
    return value
  }
}

function runWar(){
  fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    let player1WarImage = data.cards[0].image
    document.querySelector('.player1-war-img').src = player1WarImage
    document.querySelector('.war-result1').innerText = data.cards[0].value + " " + data.cards[0].suit

    let player2WarImage = data.cards[1].image
    document.querySelector('.player2-war-img').src = player2WarImage
    document.querySelector('.war-result2').innerText = data.cards[1].value + " " + data.cards[1].suit
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
}

function resetWarCards(){
  document.querySelector('.player1-war-img').src = ""
  document.querySelector('.war-result1').innerText = ""

  document.querySelector('.player2-war-img').src = ""
  document.querySelector('.war-result2').innerText = ""
}

function addToPile(){
  fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/pile/<<pile_name>>/add/?cards=AS,2S`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
})
.catch(err => {
  console.log(`error ${err}`)
})
}


