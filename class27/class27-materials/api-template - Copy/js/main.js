//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', drawTwo)
let deckId = '2epaporhkvow'
  // Get Deck
  fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    let deckId = data.deck_id
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
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}




