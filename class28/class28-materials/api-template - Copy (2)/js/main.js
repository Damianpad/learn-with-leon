//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=M5kG0IGFh6oXQr3MijPlf6wBBG4etsnEnWicMmXc&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.querySelector('#title').innerText = data.title
        document.querySelector('#explanation').innerText = data.explanation

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

document.querySelector('.mars-weather-btn').addEventListener('click', getMarsWeather)

function getMarsWeather(){
  const MarsWeather = `https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`

  fetch(MarsWeather)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });
}

document.querySelector('.mars-rover-btn').addEventListener('click', getRoverPhotos)

function getRoverPhotos(){
  const MarsRover = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=M5kG0IGFh6oXQr3MijPlf6wBBG4etsnEnWicMmXc`

  fetch(MarsRover)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data.photos[0].earth_date);
        console.log(data.photos[0].img_src);
        document.querySelector('.rover-img').src = data.photos[0].img_src
    });
}

