//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()
 

  if(day === "tuesday" || day === "thursday"){
    document.querySelector('#placeToSee').innerText = "You have class"
  }else if( day === "saturday" || day === "sunday"){
    console.log("Its The Weekend")
    document.querySelector('#placeToSee').innerText = "Its The Weekend"
  }else{
    document.querySelector('#placeToSee').innerText = "BORING"
    console.log("BORING")
  }

}
