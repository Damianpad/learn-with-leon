//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
fetch('www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka')
    .then(res => res.json())// parse object as json
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(`error ${err}`);
    })