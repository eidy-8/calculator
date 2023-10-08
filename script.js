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
let isDeclared = false;
let isDecimal = false;
let isSolved = false;

let operate = (numberA, operator, numberB) => {
    if (operator == "+") {
        return add(numberA, numberB);
    } else if (operator == "-") {
        return subtract(numberA, numberB);
    } else if (operator == "*") {
        return multiply(numberA, numberB);
    } else if (operator == "/") {
        return divide(numberA, numberB);
    } 
}

function performOperation() {
    isDecimal = false; //after setting an operator the "numberB" won't be decimal yet so it is false.
    currentOperator = operator;
    if (typedValue.length > 0 && isDeclared === true) { //if numberA is declared and a value was typed this function will be called.
        if (previousOperator != "") { 
            operator = previousOperator;
        }
        numberB = typedValue.join("");  //"typedValue.join("")" will concatenate the values inside the array and turn it into a string.

        display.innerHTML = "";
        let result = operate(+numberA, operator, +numberB); //it will operate turning the strings into integers.
        result = roundToThreeDecimals(result);
        display.innerHTML += result;

        if (operator == "/" && numberA == 0) { //don't allow the user to divide by 0.
            display.innerHTML = "";
            display.innerHTML = "CAN'T DO IT MATE";
        }
        if (operator == "/" && numberB == 0) {
            display.innerHTML = "";
            display.innerHTML = "CAN'T DO IT MATE";
        }

        numberA = result;
        numberB = 0;
        operator = currentOperator;
        typedValue = [];

    } else {
        if (numberA == 0) {
            numberA = typedValue.join("");
        }     

        display.innerHTML = "";
        display.innerHTML += numberA;
        operator = currentOperator;
        typedValue = [];
        isDeclared = true;
    }
    display.innerHTML += operator;
    previousOperator = operator;
}

function roundToThreeDecimals(result) {
    if (Number.isFinite(result) && !Number.isInteger(result)) {
      return parseFloat(result.toFixed(3));
    } else {
      return result;
    }
}

function showResult() {
    if (typedValue.length > 0) {
        numberB = typedValue.join("");
        display.innerHTML = "";
        
        if (operator == "") {
            operator = "+";
        }

        let result = operate(+numberA, operator, +numberB);
        result = roundToThreeDecimals(result);
        display.innerHTML += result;

        if (operator == "/" && numberA == 0) {
            display.innerHTML = "";
            display.innerHTML = "CAN'T DO IT MATE";
        }
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
    isSolved = true;
}

function clearAll() {
    numberA = 0;
    numberB = 0;
    operator = "";
    previousOperator = "";
    currentOperator = "";
    typedValue = [];
    result = 0;
    isDeclared = false;
    isDecimal = false;
    isSolved = false;
    display.innerHTML = "";
}

function backspace() {
    typedValue.pop();
    let value = "";

    for (let i = 0; i < typedValue.length; i++) {
        value += typedValue[i];
    }

    if (isDeclared === true) { //if numberA is declared then it will display all the operation all over again and the "value" will be numberB now.
        display.innerHTML = "";
        display.innerHTML += numberA;
        display.innerHTML += operator;
        display.innerHTML += value;
    } else if (isDeclared === false) {
        display.innerHTML = value; 
    }
}

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
const btnPoint = document.querySelector("#btnPoint");
const btnDel = document.querySelector("#btnDel");

btn0.addEventListener("click", () => {
    display.innerHTML += "0";
    typedValue.push(0); 
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 48 || event.key === "0") {
        event.preventDefault();
        
        display.innerHTML += "0";
        typedValue.push(0);
    }
});

btn1.addEventListener("click", () => {
    display.innerHTML += "1";
    typedValue.push(1); 
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 49 || event.key === "1") {
        event.preventDefault();
        
        display.innerHTML += "1";
        typedValue.push(1);
    }
});

btn2.addEventListener("click", () => {
    display.innerHTML += "2";
    typedValue.push(2);
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 50 || event.key === "2") {
        event.preventDefault();
        
        display.innerHTML += "2";
        typedValue.push(2);
    }
});

btn3.addEventListener("click", () => {
    display.innerHTML += "3";
    typedValue.push(3); 
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 51 || event.key === "3") {
        event.preventDefault();
        
        display.innerHTML += "3";
        typedValue.push(3);
    }
});

btn4.addEventListener("click", () => {
    display.innerHTML += "4";
    typedValue.push(4); 
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 52 || event.key === "4") {
        event.preventDefault();
        
        display.innerHTML += "4";
        typedValue.push(4);
    }
});

btn5.addEventListener("click", () => {
    display.innerHTML += "5";
    typedValue.push(5); 
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 53 || event.key === "5") {
        event.preventDefault();
        
        display.innerHTML += "5";
        typedValue.push(5);
    }
});

btn6.addEventListener("click", () => {
    display.innerHTML += "6";
    typedValue.push(6); 
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 54 || event.key === "6") {
        event.preventDefault();
        
        display.innerHTML += "6";
        typedValue.push(6);
    }
});

btn7.addEventListener("click", () => {
    display.innerHTML += "7";
    typedValue.push(7); 
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 55 || event.key === "7") {
        event.preventDefault();
        
        display.innerHTML += "7";
        typedValue.push(7);
    }
});

btn8.addEventListener("click", () => {
    display.innerHTML += "8";
    typedValue.push(8); 
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 56 || event.key === "8") {
        event.preventDefault();
        
        display.innerHTML += "8";
        typedValue.push(8);
    }
});

btn9.addEventListener("click", () => {
    display.innerHTML += "9";
    typedValue.push(9); 
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 57 || event.key === "9") {
        event.preventDefault();
        
        display.innerHTML += "9";
        typedValue.push(9);
    }
});

btnAdd.addEventListener("click", () => {
    operator = "+";
    performOperation();
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 107 || event.key === "+") {
        event.preventDefault();
        
        operator = "+";
        performOperation();
    }
});

btnSubtract.addEventListener("click", () => {
    operator = "-";
    performOperation();
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 109 || event.key === "-") {
        event.preventDefault();
        
        operator = "-";
        performOperation();
    }
});

btnMultiply.addEventListener("click", () => {
    operator = "*";
    performOperation();
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 106 || event.key === "*") {
        event.preventDefault();
        
        operator = "*";
        performOperation();
    }
});

btnDivide.addEventListener("click", () => {
    operator = "/";
    performOperation();
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 111 || event.key === "/") {
        event.preventDefault();
        
        operator = "/";
        performOperation();
    }
});

btnEqual.addEventListener("click", () => {
    showResult();
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 || event.key === "Enter") {
        event.preventDefault();
        
        showResult();
    }
});

btnC.addEventListener("click", () => {
    clearAll();
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 46 || event.key === "Delete") {
        event.preventDefault();
        
        clearAll();
    }
});

btnPoint.addEventListener("click", () => {
    if (isDecimal === false) {
        display.innerHTML += ".";
        typedValue.push(".");
        isDecimal = true;
    }
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 110 || event.key === ".") {
        event.preventDefault();
        
        if (isDecimal === false) {
            display.innerHTML += ".";
            typedValue.push(".");
            isDecimal = true;
        }
    }
});

btnDel.addEventListener("click", () => {
    backspace();
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 8 || event.key === "Backspace") {
        event.preventDefault();
        
        backspace();
    }
});
