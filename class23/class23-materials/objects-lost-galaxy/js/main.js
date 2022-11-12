//Create a dog object that has four properties and three methods

let dog = {}

dog.color = 'brown'
dog.breed = 'lab'
dog.sex = 'male'
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