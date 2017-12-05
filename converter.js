// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.

//assigning variables
let temp = document.getElementById("temperature");
let newTemp = document.getElementById("convertedTemp");

let button = document.getElementById("convert");
let clearButton = document.getElementById("clear");

let toF = document.getElementById("fahrenheit");
let toC =   document.getElementById("celsius");

button.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clear);


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
    if (toF.checked) {
        toFahrenheit(temp);
    } else if (toC.checked) {
        toCelsius(temp);
    }
};

function toFahrenheit (temp) {
    let newTemp = ((temp.value * 1.8) + 32).toFixed(1);
    if (newTemp > 90) {
        convertedTemp.style.color = "red";
    }
        else if (newTemp < 32) {
            convertedTemp.style.color = "blue";
        }
        else {
            convertedTemp.style.color = "green";
        };
        convertedTemp.innerHTML = newTemp;
        
    };
    
  


function toCelsius (temp) {
    let newTemp = ((temp.value - 32) * .5556).toFixed(1);
    if (newTemp > 90) {
        convertedTemp.style.color = "red";
    }
        else if (newTemp < 32) {
            convertedTemp.style.color = "blue";
        }
        else {
            convertedTemp.style.color = "green";
        };
    convertedTemp.innerHTML = newTemp;
}

function clear () {
    temp.value = " ";
    convertedTemp.innerHTML = " ";
    document.getElementById("celsius").checked = false;
    document.getElementById("fahrenheit").checked = false;
}
