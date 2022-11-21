//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', drawTwo)
let deckId = ''

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
  fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.cards[0]);
        let player1CardImage = data.cards[0].image
        let player2CardImage = data.cards[1].image
        let player1Card = data.cards[0].value + " " + data.cards[0].suit
        let player2Card = data.cards[1].value + " " + data.cards[1].suit
        
        document.querySelector('#player1').src = player1CardImage
        document.querySelector('#player2').src = player2CardImage
        document.querySelector('.card-result1').innerText = player1Card
        document.querySelector('.card-result2').innerText = player2Card
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}




