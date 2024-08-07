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

