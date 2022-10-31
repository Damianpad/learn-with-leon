//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvShows = ['Dino Fury', 'Mystic Force', 'Samurai'] 
tvShows.forEach((x => {
    console.log(x);
}))
//Create an array of numbers
const sumNum = [1,2,3,4,5,6,7,8,9,10]
//Return a new array of numbers that includes every even number from the previous Arrays
let newNum = []
newNum.push(sumNum)
console.log(newNum);
//Create a function that takes in an array of numbers

//Alert the sum of the second lowest and the second highest number

function sumOf(arr) {
   let lowest = Math.min(...arr)
   console.log(lowest);

   for (let i = 0; i < lowest; i++){
    console.log(i);
   }
}

let myArr = [2,5,50,100,1]
console.log(Math.min(...myArr))
sumOf(myArr)