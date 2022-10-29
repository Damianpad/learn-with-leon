/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers){
    let myArr;
  for (i=0; i < numbers.length; i++) {
    let squareRoot = numbers ** 2
    myArr.push(squareRoot)
  }
  
  const sum = myArr.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  console.log(sum);
}

squareSum(2,3,4,5)