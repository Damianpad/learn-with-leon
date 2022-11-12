//Create a dog object that has four properties and three methods

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

function MakeDog(dogColor,dogBreed,dogGender,dogName) {
    this.color = dogColor
    this.breed = dogBreed
    this.gender = dogGender
    this.name = dogName
}

let cooper = new MakeDog('White and Black', 'Aussie', 'Male', 'Cooper')
console.log(cooper.color)
console.log(cooper.breed);