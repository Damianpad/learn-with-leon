//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class MakeShow{
    constructor(name, genre, rating, season, poster) {
        this.name = name
        this.genre = genre
        this.rating = rating
        this.season = season
        this.poster = poster
    }
    play(){
        console.log('Starting... DUN DUN');
    }
    skipIntro(){
        console.log('SKIPPPPP');
    }
    restart(){
        console.log('Restarting...');
    }
}


let strangerThings = new MakeShow('Stranger Things', ['Drama', 'Fantasy', 'Horror'], '8.7/10', 4, 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg')
document.querySelector('.movie-poster').src = strangerThings.poster
document.querySelector('h2').innerText = strangerThings.name

let squidGame = new MakeShow('Squid Game', ['Action', 'Drama', 'Mystery'], '8.0/10', 1, 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Squid_Game.jpg/220px-Squid_Game.jpg')
document.querySelector('.movie-poster').src = squidGame.poster
document.querySelector('h2').innerText = squidGame.name