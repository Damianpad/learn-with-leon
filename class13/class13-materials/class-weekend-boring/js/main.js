//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value
  let result = day.toLowerCase();

  if(result === "tuesday" || result === "thursday"){
    console.log("YOU HAVE CLASS")
    document.querySelector('#placeToSee').innerText = 'YOU HAVE CLASS';
  }else if( result === "saturday" || result === "sunday"){
    console.log("Its The Weekend")
    document.querySelector('#placeToSee').innerText = 'Its The Weekend';
  }else{
    console.log("BORING")
    document.querySelector('#placeToSee').innerText = 'BORING';
  }

}
