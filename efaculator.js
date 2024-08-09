let currentNumber = '';
let previousNumber = '';
let operation = '';

function appendNumber(number) {
    currentNumber += number;
    updateResult();
}

function setOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}
function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentNumber = result;
    operation = '';
    previousNumber = '';
    updateResult();
}
function clearResult() {
    currentNumber = '';
    previousNumber = '';
    operation = '';
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = currentNumber;
}