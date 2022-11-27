// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. 
//You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. 
//Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). 
//Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 
let bulbaCandy = 9
let caterpieCandy = 6
let weedleCandy = 6

let totalCandies = bulbaCandy + caterpieCandy + weedleCandy
console.log(totalCandies); 

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. 
//Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

function convertTemp(fahrenheit){
    let celcius = (fahrenheit - 30) / 2
    checkBattle(celcius)
}

function checkBattle(celcius){
    if (celcius > 0){
        console.log('Charmander can battle');
    } else {
        console.log('Charmander cannot battle');
    }
}

console.log(convertTemp(100)); 

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. 
//Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

let trainerPokemon = [1,2,3,4,5,6,7,8,9,10]

for (i=0; i < trainerPokemon.length; i++){
    console.log("Pikachu I choose you");
}