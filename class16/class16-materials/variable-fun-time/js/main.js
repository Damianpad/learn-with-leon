//--- Easy
//create a variable and assign it a number
let num = 20;
//minus 10 from that number
num -= 10
//print that number to the console
console.log(num);
//--- Medium
//create a variable that holds a value from the input

//add 25 to that number
// dance += 25
//alert that number
// alert(dance)
//--- Hard
//create a variable that holds the h1
let clickMe = document.querySelector('#clickMe')
//add an event listener to that element that console logs the sum of the two previous variables
document.querySelector('#clickMe').addEventListener('click', run)

function run(){
    let dance = document.querySelector('#danceDanceRevolution').value
    console.log(num + Number(dance));
}