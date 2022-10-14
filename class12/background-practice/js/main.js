document.querySelector('#aatrox').onclick = aatrox;
document.querySelector('#ahri').onclick = ahri;
document.querySelector('#akali').onclick = akali;
document.querySelector('#akshan').onclick = akshan;

function aatrox() {
    document.querySelector('#championSplash').style.backgroundImage = "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg')";
}

function ahri() {
    document.querySelector('#championSplash').style.backgroundImage = "url('splash/Ahri.jpg')";
}

function akali() {
    document.querySelector('#championSplash').style.backgroundImage = "url('splash/Akali.jpg')"
}

function akshan() {
    document.querySelector('#championSplash').style.backgroundImage = "url('splash/Akshan.jpg')"
}
