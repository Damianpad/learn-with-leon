//Create an a class and extend it - Can be anything you would like it to be! 
class Animal{
    constructor(name, color){
        this.name = name
        this.color = color
    }
    speak(){
        console.log(`${this.name} makes a sound`);
    }
}

class Wild extends Animal{
    constructor(name, color, habitat){
        super(name, color)
        this.habitat = habitat
    }
}

class Domestic extends Animal{
    constructor(name, color, breed){
        super(name, color)
        this.breed = breed
    }

}

class Dog extends Domestic{
    constructor(name, color, breed){
        super(name, color, breed)
    }
}

let simba = new Dog('Simba', 'Black', 'Sheperd')
console.log(simba);
console.log(simba.name);
console.log(simba.speak());

class Cat extends Domestic {
    constructor(name, color, breed){
        super(name, color, breed)
    }
}

let jack = new Cat('Jack', 'White', 'Mainecoon')
console.log(jack.breed);
console.log(jack.speak());

class Zebra extends Wild{
    constructor(name, color, habitat){
        super(name,color, habitat)
    }
}