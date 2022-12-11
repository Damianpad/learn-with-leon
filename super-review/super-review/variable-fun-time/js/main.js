//--- Easy
//create a variable and assign it a number
let myNum = 14

//minus 10 from that number
myNum -= 10


//print that number to the console
console.log(myNum)

//--- Medium
//create a variable that holds a value from the input
// let inputValue = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
// inputValue += 25

//alert that number
// alert(inputValue)

//--- Hard
//create a variable that holds the h1
// let myTitle = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
document.querySelector('h1').addEventListener('click', addValues)

function addValues(){
    let inputValue = document.querySelector('#danceDanceRevolution').value
    
    console.log(myNum + Number(inputValue)); 
}


