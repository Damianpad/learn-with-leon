// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favoriteHoliday = 'christmas'
console.log(favoriteHoliday.toUpperCase());
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let myStr = 'Damian'
alert(myStr.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subFrom100(n1,n2,n3,n4,n5) {
    let difference = 100 - n1 - n2 - n3 - n4 - n5
    alert(Math.abs(difference))
}
subFrom100(5,10,15,20,25)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowHigh (num1, num2, num3) {
    let min = Math.min(num1, num2, num3)
    let max = Math.max(num1, num2, num3)
    console.log(`${min} is the lowest value`);
    console.log(`${max} is the highest value`);
}

lowHigh(5,20,24)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
