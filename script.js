let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a,b) => a / b;

let numberA = 0;
let numberB = 0;
let operator = "";
let previousOperator = "";
let currentOperator = "";
let typedValue = [];
let result = 0;
//
let operate = (numberA, operator, numberB) => {
    if (operator == "+") {
        return add(numberA, numberB)
    } else if (operator == "-") {
        console.log(subtract(numberA, numberB));
        return subtract(numberA, numberB)
    } else if (operator == "*") {
        return multiply(numberA, numberB)
    } else if (operator == "/") {
        return divide(numberA, numberB)
    } 
}

function performOperation() {

    console.log(`typerValue: ${typedValue.length} inside the performOperation`);
    console.log(`numberA: ${numberA} inside the performOperation`);
    console.log("------------------------------------------------");

    currentOperator = operator;
    if (typedValue.length > 0) { //if any value was declared on typedValue then it means that it has to correctly calculate with the first operator and then input the next operator.
        if (previousOperator != "") { //
            operator = previousOperator;
        }
        numberB = typedValue.join(""); //it will concatenate all the number inputted by the user and it will turn into a string

        if (operator == "*" && numberA == 0) { //as the numberB was already declared those conditions were made to make sure that numberA "neutralize" numberB. E.g. If I type (12*) the result would be (0*).
            numberA = 1;
        } else if (operator == "/" && numberA == 0) {
            numberA = numberB * numberB;
            console.log(numberA);
        } else if (operator == "-" && numberA == 0) {
            numberA = numberB * 2;
        }

        display.innerHTML = "";
        console.log(numberA, numberB);
        let result = operate(+numberA, operator, +numberB); //this function will correctly operate the values transforming strings to numbers
        result = roundToThreeDecimals(result);
        display.innerHTML += result;

        if (operator == "/" && numberB == 0) {
            display.innerHTML = "";
            display.innerHTML = "YOU CANNOT DO IT MATE";
        }

        console.log(result);
        numberA = result;
        numberB = 0;
        operator = currentOperator;
        typedValue = [];
    } else { //if 
        if (numberA == 0) {
            numberA = typedValue.join("");
        }        
        display.innerHTML = "";

        if (operator == "*" || operator == "/") {
            numberB = 1;
        } 

        let result = operate(+numberA, operator, +numberB);
        display.innerHTML += result;
        numberA = result;
        numberB = 0;
        typedValue = [];
    }
    display.innerHTML += operator;
    previousOperator = operator;

    console.log(`numberA: ${numberA} inside the performOperation`);
    console.log(`numberB: ${numberB} inside the performOperation`);
    console.log(`result: ${result} inside the performOperation`);
    console.log(`operator: ${operator} inside the performOperation`);
    console.log("------------------------------------------------");
}

function roundToThreeDecimals(result) {
    if (Number.isFinite(result) && !Number.isInteger(result)) {
      return parseFloat(result.toFixed(3));
    } else {
      return result;
    }
  }
//
const display = document.querySelector(".display");
const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btnAdd = document.querySelector("#btnAdd");
const btnSubtract = document.querySelector("#btnSubtract");
const btnMultiply = document.querySelector("#btnMultiply");
const btnDivide = document.querySelector("#btnDivide");
const btnEqual = document.querySelector("#btnEqual");
const btnC = document.querySelector("#btnC");
//
btn0.addEventListener("click", () => {
    display.innerHTML += "0";
    typedValue.push(0); 
});

btn1.addEventListener("click", () => {
    display.innerHTML += "1";
    typedValue.push(1); 
});

btn2.addEventListener("click", () => {
    display.innerHTML += "2";
    typedValue.push(2);
});

btn3.addEventListener("click", () => {
    display.innerHTML += "3";
    typedValue.push(3); 
});

btn4.addEventListener("click", () => {
    display.innerHTML += "4";
    typedValue.push(4); 
});

btn5.addEventListener("click", () => {
    display.innerHTML += "5";
    typedValue.push(5); 
});

btn6.addEventListener("click", () => {
    display.innerHTML += "6";
    typedValue.push(6); 
});

btn7.addEventListener("click", () => {
    display.innerHTML += "7";
    typedValue.push(7); 
});

btn8.addEventListener("click", () => {
    display.innerHTML += "8";
    typedValue.push(8); 
});

btn9.addEventListener("click", () => {
    display.innerHTML += "9";
    typedValue.push(9); 
});
//
btnAdd.addEventListener("click", () => {
    operator = "+";
    performOperation();
});

btnSubtract.addEventListener("click", () => {
    operator = "-";
    performOperation();
});

btnMultiply.addEventListener("click", () => {
    operator = "*";
    performOperation();
});

btnDivide.addEventListener("click", () => {
    operator = "/";
    performOperation();
});
//
btnEqual.addEventListener("click", () => {
    console.log(`typerValue: ${typedValue.length} inside the performOperation`);
    console.log(`numberA: ${numberA} inside the performOperation`);
    console.log("------------------------------------------------");

    if (typedValue.length > 0) {
        numberB = typedValue.join("");
        display.innerHTML = "";
        
        if (operator == "") {
            operator = "+";
            console.log(operator);
        }

        let result = operate(+numberA, operator, +numberB);
        result = roundToThreeDecimals(result);
        display.innerHTML += result;

        if (operator == "/" && numberB == 0) {
            display.innerHTML = "";
            display.innerHTML = "CAN'T DO IT MATE";
        }

        numberA = result;
        numberB = 0;
        typedValue = [];
    } else {
        numberA = typedValue.join("");
        display.innerHTML = numberA;
        typedValue = [];
    }

    console.log(`numberA: ${numberA} inside the equal`);
    console.log(`numberB: ${numberB} inside the equal`);
    console.log(`result: ${result} inside the equal`);
    console.log("------------------------------------------------");
});

btnC.addEventListener("click", () => {
    numberA = 0;
    numberB = 0;
    operator = "";
    typedValue = [];
    display.innerHTML = "";
});

//checkpoint: (0-5+) returns (5+)
