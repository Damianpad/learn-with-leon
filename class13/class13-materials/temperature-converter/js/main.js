//Write your pseduo code first! 

/*
Value from user is entered into an input box. Example: 50




When the user presses a 'convert' button:
    The value that is in the input box is stored as a variable called fahrenheit
    The fahrenheit (50) variable is converted into C using this equation:
    Subtract 30 from fahrenheit and then divide by 2.

Converted value is displayed in the DOM by using an h2 with the class of .placeToSee

*/

document.querySelector('#convertCelsius').addEventListener('click', convertCelsius);
document.querySelector('#convertFahrenheit').addEventListener('click', convertFahrenheit)

function convertCelsius() {
    const fahrenheit = document.querySelector('#fahrenheit').value
    const celsius = (fahrenheit - 32) * 5/9
    document.querySelector('#placeToSeeCelsius').innerText = `${fahrenheit} Fahrenheit is converted to ${celsius} celsius`
}

function convertFahrenheit() {
    const celsius = document.querySelector('#celsius').value
    const fahrenheit = celsius * 9/5 + 32
    document.querySelector('#placeToSeeFahrenheit').innerText = `${celsius} Celsius  is converted to ${fahrenheit} Fahrenheit`
}




