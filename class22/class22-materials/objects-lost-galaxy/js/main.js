//Create a mouse object that has four properties and three methods
let mouse = {}

//Properties
mouse.brand = 'logiTech'
mouse.wired = true
mouse.color = 'black'
mouse.model = 'G502'

// Methods
mouse.leftClick = function() {
    console.log('LEFT CLICKKKK');
}

mouse.rightClick = function() {
    console.log('RIGHT CLICKKK');
}

mouse.scroll = function() {
    console.log('SCROOOOLLLLL');
}

// Make a constructor of the mouse above

function MakeMouse(mouseBrand, mouseWired, mouseColor, mouseModel){
    this.brand = mouseBrand
    this.wired = mouseWired
    this.color = mouseColor
    this.model = mouseModel

    this.leftClick = function(){
        console.log('LEFT CLICKKK');
    }

    this.rightClick = function(){
        console.log('RIGHT CLICKKK');
    }

    this.scroll = function() {
        console.log('scroll');
    }
}

// Create an instance of the MakeMouse constructor 

let logiTech = new MakeMouse('Logitech', true, 'Black', 'GH502')
console.log(logiTech);