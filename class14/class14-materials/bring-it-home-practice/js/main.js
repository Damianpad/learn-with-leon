// *Variables*
// Create a variable and console log the value
let favColor = 'Navy'
console.log(favColor);
// Create a variable, add 10 to it, and alert the value
let addTen = 10
addTen += 10
console.log(addTen);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractsFourNums(n1, n2, n3, n4) {
    alert(n1 - n2 - n3 - n4)
}

subtractsFourNums(100,2,5,3)
subtractsFourNums(200,10,100,2)

// Create a function that divides one number by another and returns the remainder
function dividesNums(n1, n2) {
    return (n1 / n2)
}

console.log(dividesNums(20,5));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addNums(n1, n2) {
    const total = n1 + n2
    if (total > 50){
        alert('Jumanji')
    }
}

addNums(40, 50)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function divisibleByThree(n1, n2, n3) {
    const product = n1 * n2 * n3
    if (product % 3 == 0){
        alert('ZEBRA')
    }
}

divisibleByThree(15, 2, 5)