document.querySelector('#aatrox').onclick = aatrox;
document.querySelector('#ahri').onclick = ahri;
document.querySelector('#akali').onclick = akali;
document.querySelector('#akshan').onclick = akshan;

let champName;
let champTitle;
let champDescription;

function aatrox() {
    champName = 'AATROX';
    champTitle = 'THE DARKIN BLADE'
    document.querySelector('#championSplash').style.backgroundImage = "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg')";
    document.querySelector('.championName').innerText = champName;
    document.querySelector('.championTitle').innerText = champTitle;
    // document.querySelector('.championDescription').innerText = champDescription;
}

function ahri() {
    champName = 'AHRI';
    champTitle = 'THE NINE-TAILED FOX'
    document.querySelector('#championSplash').style.backgroundImage = "url('splash/Ahri.jpg')";
    document.querySelector('.championName').innerText = champName;
    document.querySelector('.championTitle').innerText = champTitle;
}

function akali() {
    champName = 'AKALI';
    champTitle = 'THE ROGUE ASSASSIN'
    document.querySelector('#championSplash').style.backgroundImage = "url('splash/Akali.jpg')"
    document.querySelector('.championName').innerText = champName;
    document.querySelector('.championTitle').innerText = champTitle;
}

function akshan() {
    champName = 'AKSHAN';
    champTitle = 'THE ROGUE SENTINEL'
    document.querySelector('#championSplash').style.backgroundImage = "url('splash/Akshan.jpg')"
    document.querySelector('.championName').innerText = champName;
    document.querySelector('.championTitle').innerText = champTitle;
}
