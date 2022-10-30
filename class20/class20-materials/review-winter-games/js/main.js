//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function addNewArr(arr) {
    let newArr = []
    arr.forEach(x => {
        if (x % 2 == 0) {
            newArr.push(x)
        }
    });
    console.log(newArr);
}


addNewArr([1,2,3,4,5])