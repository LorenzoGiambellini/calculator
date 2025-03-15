function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator){
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            console.log("ERROR");
            return null;
    }
}

const container = document.querySelector(".container");
const symbols = ['AC', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const classMap = {
    "/": "divide",
    "*": "multiply",
    "-": "subtract",
    "+": "add",
    "=": "equals",
    ".": "dot",
    "%": "percent",
    "+/-": "plus-minus",
    "AC": "clear"
};
symbols.map(item => {
    const btn = document.createElement("button");
    const className = 'btn-' + (classMap[item] || item);    
    btn.className = className;
    btn.textContent = item;
    container.appendChild(btn);
});

const display = document.querySelector(".display");
let a = '';
let b = '';
let operator = '';
const button = document.querySelectorAll("button");
button.forEach(button => {
    button.addEventListener("click", () => {
    
        switch(button.className) {
            case "btn-0":
                a += '0';
                break;
            case "btn-1":
                a += '1';
                break;
            case "btn-2":
                a += '2';
                break;
            case "btn-3":
                a += '3';
                break;
            case "btn-4":
                a += '4';
                break;
            case "btn-5":
                a += '5';
                break;
            case "btn-6":
                a += '6';
                break;
            case "btn-7":
                a += '7';
                break;
            case "btn-8":
                a += '8';
                break;
            case "btn-9":
                a += '9';
                break;
            case "btn-dot":
                a += '.';
                break;
            case "btn-clear":
                a = '';
                b = '';
                break;
            case "btn-add":
                operator = '+';
                b = a;
                a = '';
                break;
            case "btn-subtract":
                operator = '-';
                b = a;
                a = '';
                break;
            case "btn-multiply":
                operator = '*';
                b = a;
                a = '';
                break;
            case "btn-divide":
                operator = '/';
                b = a;
                a = '';
                break;
            case "btn-equals":
                result = operate(Number(b), Number(a), operator);
                display.textContent = result;
                console.log(result);
                a = result.toString();
                break;
            case "btn-plus-minus":
                a = (Number(a)*(-1)).toString();
        }
    });   
})