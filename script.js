let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a,b) => a / b;

let numberA = 0;
let numberB = 0;
let operator = "";
let typedValue = []; //array typed values to let the user input sequence of numbers

let operate = (numberA, operator, numberB) => {
    if (operator == "+") {
        add(numberA, numberB);
        return add(numberA, numberB)

    } else if (operator == "-") {
        subtract(numberA, numberB);
        return subtract(numberA, numberB)

    } else if (operator == "*") {
        multiply(numberA, numberB);
        return multiply(numberA, numberB)

    } else if (operator == "/") {
        divide(numberA, numberB)
        return divide(numberA, numberB)
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

btn0.addEventListener("click", () => {
    display.innerHTML += "0";
});

btn1.addEventListener("click", () => {
    //if () {
    //    display.innerHTML = "";
    //}

    display.innerHTML += "1";
    typedValue.push(1); 
});

btn2.addEventListener("click", () => {
    display.innerHTML += "2";
    typedValue.push(2);
});

btn3.addEventListener("click", () => {
    display.innerHTML += "3";
});

btn4.addEventListener("click", () => {
    display.innerHTML += "4";
});

btn5.addEventListener("click", () => {
    display.innerHTML += "5";
});

btn6.addEventListener("click", () => {
    display.innerHTML += "6";
});

btn7.addEventListener("click", () => {
    display.innerHTML += "7";
});

btn8.addEventListener("click", () => {
    display.innerHTML += "8";
});

btn9.addEventListener("click", () => {
    display.innerHTML += "9";
});

//



btnAdd.addEventListener("click", () => {
    operator = "+";
    numberA = typedValue.join(""); //concatenate all the numbers in the array to become the value of numberA
    display.innerHTML = "";
    console.log(numberA);
    typedValue = [];
    display.innerHTML += operate(+numberA, operator, +numberB);
});

btnSubtract.addEventListener("click", () => {
    display.innerHTML += "-";
});

btnMultiply.addEventListener("click", () => {
    display.innerHTML += "*";
});

btnDivide.addEventListener("click", () => {
    display.innerHTML += "/";
});

//

btnEqual.addEventListener("click", () => {
    numberB = typedValue.join("");
    display.innerHTML = "";
    display.innerHTML += operate(+numberA, operator, +numberB);
    typedValue = [];

    console.log(operate(+numberA, operator, +numberB));
});

btnC.addEventListener("click", () => {
    display.innerHTML = "";
});

//checkpoint: I was trying to make the numberA value disappear on the display right after I type another value (numberB in this case)
//checkpoint2: I'll create a second line on the display that will store the previous number's value. I guess...


