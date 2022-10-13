document.getElementById('purple').onclick = partyPurp;
document.getElementById('green').onclick = partyGreen;
document.getElementById('blue').onclick = partyBlue;
document.getElementById('red').onclick = partyRed;
document.getElementById('black').onclick = partyBlack;
document.getElementById('white').onclick = resetWhite;




function partyPurp(){
    console.log('Im running purp');
    document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)';
    document.querySelector('body').style.color = 'white';
    document.querySelector('ul').style.borderColor = 'black';
}

function partyGreen() {
    console.log('Im running green');
    document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)';
    document.querySelector('body').style.color = 'white';
    document.querySelector('ul').style.borderColor = 'black';
}

function partyBlue() {
    console.log('Im running blue');
    document.querySelector('body').style.backgroundColor = 'rgba(0,254,255,1)'
    document.querySelector('body').style.color = 'white';
    document.querySelector('ul').style.borderColor = 'black';
}

function partyRed() {
    console.log('Im running red');
    document.querySelector('body').style.backgroundColor = 'rgba(255,0,0,1)';
    document.querySelector('body').style.color = 'white';
    document.querySelector('ul').style.borderColor = 'black';
}

function partyBlack(){
    console.log('Im running black');
    document.querySelector('body').style.backgroundColor = 'rgba(0,0,0,1)'
    document.querySelector('body').style.color = 'white';
    document.querySelector('ul').style.borderColor = 'white';
}

function resetWhite() {
    console.log('Im running white');
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    document.querySelector('ul').style.borderColor = 'black';
}