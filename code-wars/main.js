/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

// function squareSum(numbers){
//     let myArr;
//   for (i=0; i < numbers.length; i++) {
//     let squareRoot = numbers ** 2
//     myArr.push(squareRoot)
//   }
  
//   const sum = myArr.reduce((accumulator, value) => {
//     return accumulator + value;
//   }, 0);
//   console.log(sum);
// }

// squareSum(2,3,4,5)


/*
Write a function that takes an array of numbers and returns the sum of the numbers. 
The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
*/

// function sum(numbers){
//   return numbers.reduce((a,b) => a + b,0 )
// }

// console.log(sum([1,5.2,4,0,-1]));


/*  
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/


const doubleChar = (str) => str.split("").map(c => c + c).join("");


console.log(doubleChar('abc'));