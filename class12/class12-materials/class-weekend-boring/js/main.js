document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  let result = day.toLowerCase();

  if (result === 'tuesday' || result === 'thursday') {
    message = 'Today is a class day'
    document.querySelector('#placeToSee').innerText = message;
  } else if (result === 'saturday' || result === 'sunday'){
    message = 'It\'s the weekend!'
    document.querySelector('#placeToSee').innerText = message;
  } else {
    message = 'BOOOORINNNNGGGG'
    document.querySelector('#placeToSee').innerText = message;
  }


}
