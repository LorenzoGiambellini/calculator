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
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#ccc"; 
        button.style.fontSize = "27px"; 
    });

    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = ""; // Ripristina il colore originale (definito nel CSS)
        button.style.fontSize = "";        // Ripristina la dimensione originale del font
      });
    
    
    button.addEventListener("click", () => {
        switch(button.className) {
            default:
                if (!isNaN(button.textContent)) {
                    a += button.textContent;
                }                    break;
            case "btn-dot":
                if(!a.includes('.')) a += '.';
                break;
            case "btn-clear":
                a = '';
                b = '';
                break;
            case "btn-percent":
                a = (Number(a)/(100)).toString();
                break;
            case "btn-add":
            case "btn-subtract":
            case "btn-multiply":
            case "btn-divide":
                operator = button.textContent;
                b = a;
                a = '';
                break;
            case "btn-equals":
                a = operate(Number(b), Number(a), operator);
                a = a.toString();
                break;
            case "btn-plus-minus":
                a = (Number(a)*(-1)).toString();
        }
        if(a === ''){
            display.textContent = Number(b);
        } else {
            display.textContent = Number(a);
        }
    });   
})