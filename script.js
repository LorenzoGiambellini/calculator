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
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
        default:
            console.log("ERROR");
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
    let btn = document.createElement("button");
    let className = 'btn-' + (classMap[item] || item);    
    btn.className = className;
    btn.textContent = item;
    container.appendChild(btn);
});
