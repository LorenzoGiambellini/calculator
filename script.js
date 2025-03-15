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
const symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '=', '+', '*', '/', 'AC'];
symbols.map(item => {
    let btn = document.createElement("button");
    btn.className = item;
    btn.textContent = item;
    container.appendChild(btn);
});