//Create an array of movies with at least three movies.
let movies = ['Bring It On', 'Bring It On Again', 'Bring It On All Or Nothing']
//Using the array from above, store the first movie in a variable
let firstMovie = movies[0]
console.log(firstMovie);
//Get the length of the original array and store it in a new variable
console.log(movies.length);
//Get the last element in that array and store it in a new variable. What if your array 
//was really large and you didn't know the last index? Would your solution still work?
let lastElement = movies.length - 1
console.log(lastElement);



let bestColors = ['green', 'blue', 'yellow', 'black']

for (let i = 0; i <= bestColors.length; i++) {
    console.log(bestColors[i]);
}