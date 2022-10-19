//Write a program that shows the next bachelorettes img when their name is clicked on

//create const that selects each bachelorettes img
const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('sharleen')

//Create Event Listeners on each
document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

//Create a function that runs when a bachelorettes name is clicked

function andiNext(){
	andi.classList.toggle('hidden')
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
}

function claireNext(){
	claire.classList.toggle('hidden')
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
}

function sharleenNext() {
	sharleen.classList.toggle('hidden')
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
}