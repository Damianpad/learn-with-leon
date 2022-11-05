// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "Coca-Cola"
console.log(favDrink.trim());
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multipleFruits = "apple Oranges Bears OH MY"
console.log(multipleFruits.includes('apple'))
if (multipleFruits.includes == true){
    console.log('true');
} else {
    console.log('false');
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function play(){
    let random = Math.random()
    if (random < .33){
        return 'Rock'
    } else if (random < .66){
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

console.log(play());
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function choose(playerChoice){
    let botChoice = play()
    console.log(`The bot chose: ${botChoice}`);
    if ((playerChoice === 'Rock' && botChoice === 'Scissors') || 
    (playerChoice === 'Paper' && botChoice === 'Rock') ||
    (playerChoice === 'Scissors' && botChoice === 'Paper')) {
        console.log('YOU WIN!');
    } else if (playerChoice === botChoice){
        console.log('YOU TIED!');
    } else {
        console.log('YOU LOSE!');
    }
}

choose('Rock')
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function results(arr){
    arr.forEach(choice => choose(choice));
}

results(['Rock', 'Paper', 'Scissors'])