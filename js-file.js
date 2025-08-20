// operator function
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => b !== 0 ? a / b : "ERROR!";

const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
};

const operate = (operator, a, b) => {
    return operations[operator](a, b);
};

let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let displayValue = "";

// displaying digits
const digitButtons = document.querySelectorAll(".digit");
const output = document.querySelector(".output");

    digitButtons.forEach(button => {
        button.addEventListener("click", () => {
            displayValue += button.textContent;
            output.textContent = displayValue;

            if (currentOperator === null) {
                firstNumber = displayValue;
            } else {
                secondNumber = displayValue;
            }
        });
    });

// operating buttons
const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        let symbol = button.textContent;

        if (symbol === "x") symbol = "*";
        if (symbol === "÷") symbol = "/";

        currentOperator = symbol;
        displayValue = "";
        output.textContent = "";
    });
});

// equal button
const equalButton = document.querySelector(".solution");

equalButton.addEventListener("click", () => {
    if (firstNumber !== "" && secondNumber !== "" && currentOperator !== null) {
        const result = operate(currentOperator, Number(firstNumber), Number(secondNumber));
        output.textContent = result;

        firstNumber = result;
        secondNumber = "";
        currentOperator = null;
        displayValue = "";
    };
});

//clear button
const clearAll = document.querySelector(".delete");

    clearAll.addEventListener("click", () => {
        firstNumber = "";
        secondNumber = "";
        currentOperator = null;
        displayValue = "";
        output.textContent = "";
    });
