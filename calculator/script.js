let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));
let operation = '';
let newOperation = true;

buttons.map(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-number') || e.target.getAttribute('data-operator') || e.target.getAttribute('data-decimal');
        if (value) {
            if (newOperation && !isNaN(value)) {
                operation = '';
                newOperation = false;
            }
            operation += value;
            display.value = operation;
        }
    });
});

function clearDisplay() {
    display.value = '';
    operation = '';
    newOperation = true;
}

function calculate() {
    try {
        display.value = eval(operation);
        newOperation = true;
    } catch {
        display.value = "Error";
    }
}
// ... (rest of the script.js code)

function backspace() {
    if (operation.length > 0) {
        operation = operation.slice(0, -1);
        display.value = operation;
    }
}

// ... (rest of the script.js code)
