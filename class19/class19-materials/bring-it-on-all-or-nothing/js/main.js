// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let myVar = true;
alert(myVar);

// Declare a variable, reassign it to your favorite color, and console log the value
let favoriteColor = 'Navy';
console.log(favoriteColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function sumOfNum(num1, num2, num3, num4) {
    let result = (num1 + num2 + num3) / num4;
    return result;
}

console.log(sumOfNum(1, 2, 3, 4));

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
// function powerOf(num1, num2) {
//     console.log(num1);
//     console.log(Math.pow(num2, 2));
// }

// console.log(powerOf(1, 2));

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function isTrue(isBool, myStr){
    if (isBool) {
        alert(myStr);
    } else {
        console.log(myStr);
    }
}

isTrue(false, "OHHH YEAHHH")

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function logValues(num) {
    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
}

logValues(100);