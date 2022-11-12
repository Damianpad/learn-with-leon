//Create a dog object that has four properties and three methods

//Literal Declaration
let dog = {}

dog.color = 'brown'
dog.breed = 'lab'
dog.gender = 'male'
dog.name = 'thor'

dog.bark = function() {
    console.log('WOOF WOOF');
}

dog.rollover = function() {
    console.log('Rolling');
}

dog.sit = function() {
    console.log('*sitting*');
}

console.log(dog.color);
dog.bark()
dog.rollover()
dog.sit()


// Dog Constructor
function MakeDog(dogColor,dogBreed,dogGender,dogName) {
    this.color = dogColor
    this.breed = dogBreed
    this.gender = dogGender
    this.name = dogName
}

let cooper = new MakeDog('White and Black', 'Aussie', 'Male', 'Cooper')
console.log(cooper.color)
console.log(cooper.breed)

let maggie = new MakeDog('White and Black', 'Blue Heeler', 'Female', 'Maggie')
console.log(maggie.name)
console.log(maggie.color)
console.log(maggie.breed)
console.log(maggie.gender)
console.log(`The family dogs name is ${maggie.name} and she is a ${maggie.color} ${maggie.breed}`);