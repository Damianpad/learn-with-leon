// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = 'Ramen'
alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let myString = 'Damian'
alert(myString[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function myFunc(num1, num2, num3) {
    let result = (num1 / num2) * num3
    alert(result)
}

myFunc(10, 2, 2)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function getCubeRoot(num1) {
    let cubeRoot = Math.cbrt(num1)
    console.log(cubeRoot);
}

getCubeRoot(2)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function alertMonth(month) {
    if (month === 'june' || month === 'july' || month === 'august') {
        alert("YAY")
    } else {
        alert("Booo")
    }
}
alertMonth('janurary')

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function logNum(num) {
    for (i = 0; i < num; i++) {
        if (i % 5 == 0){
            console.log('Skip');
        } else {
            console.log(i);
        }
        
    }
}

logNum(100)