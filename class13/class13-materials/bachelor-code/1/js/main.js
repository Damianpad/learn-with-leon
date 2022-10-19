//Write a program that hides claire and sharleen when the Final Rose is clicked
document.querySelector('#finalRose').addEventListener('click', rose)

function rose(){
	document.querySelector('#claire').style.display = 'none';
	document.querySelector('#sharleen').style.display = 'none';
}