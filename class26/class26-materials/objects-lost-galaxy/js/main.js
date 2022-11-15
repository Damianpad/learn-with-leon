//Create a pizza object that has four properties and three methods

let pizza = {} 

pizza.toppings = ['Pineapple', 'Canadian Bacon']
pizza.crust = 'Stuffed'
pizza.size = 'Large'

pizza.delivered = function(){
    console.log('Time: Until delivered');
}

pizza.burnMouth = function(){
    console.log('Owie');
}

pizza.frisbee = function() {
    console.log('YEET');
}

// Make a constructor that makes a pizza
function MakePizza(pizzaToppings, pizzaCrust, pizzaSize){
    this.toppings = pizzaToppings
    this.crust = pizzaCrust
    this.size = pizzaSize
    this.delivered = function(){
        return 'Calculating...'
    }
    this.burnMouth = function() {
        console.log('Owiee');
    }
    this.frisbee = function() {
        console.log('YEEET');
    }
} 

let damianChoice = new MakePizza('Pineapple', 'Stuffed', 'Large')

console.log(damianChoice.toppings);
console.log(damianChoice.crust);
console.log(damianChoice.size);
console.log(damianChoice.delivered);

let anaChoice = new MakePizza('Meat Lovers', 'Garlic', 'Medium')
console.log(anaChoice.toppings);
console.log(anaChoice.crust);
console.log(anaChoice.size);

let lizzyChoice = new MakePizza('Cheese', 'Regular', 'Medium')
console.log(lizzyChoice.toppings);
console.log(lizzyChoice.crust);
console.log(lizzyChoice.size);

let sophiaChoice = new MakePizza('Pep', 'Regular', 'Small')
console.log(sophiaChoice.toppings);
console.log(sophiaChoice.crust);
console.log(sophiaChoice.size);

// Make a Car object with literal notation
let car = {}

car.make = 'Honda'
car.model = 'Accord'
car.year = 1999

console.log(car.make);
console.log(car.model);
console.log(car.year);

// Make a car with a constructor
// function MakeCar(make, model, year) {
//     this.make = make
//     this.model = model
//     this.year = year
// }

// let damianCar = new MakeCar('Mazda', '3', '2009')
// console.log(damianCar.make);
// console.log(damianCar.model);
// console.log(damianCar.year);

// Make a car constructor using es6 updates (class)
class MakeCar{
    constructor(make,model,year){
        this.make = make
        this.model = model
        this.year = year
    }
    honk(){
        console.log('BEEP BEEP');
    }
    lock(){
        alert(`Locked doors!`)
    }

}

let anaCar = new MakeCar('Honda', 'Civic', 2012)
console.log(anaCar.make);
console.log(anaCar.model);
console.log(anaCar.year);
anaCar.honk()
anaCar.lock()


// Make a Pet with the class constructor syntax
class MakePet{
    constructor(breed, color, age){
        this.breed = breed
        this.color = color
        this.age = age
    }

    bark(){
        console.log('WOOF WOOF');
    }
    sit(){
        console.log('*SITS*');
    }
}

let cooper = new MakePet('Aussie', 'white and black', '6 Months')
console.log(cooper.breed);
console.log(cooper.color);
console.log(cooper.age);
cooper.bark()
cooper.sit()