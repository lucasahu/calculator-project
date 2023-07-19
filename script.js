// Calculator functionality
let result;
let displayNum1;
let displayNum2;

function pickOperation(num1, operator, num2) {
    if (operator == '+') {
        add(num1, num2);
    } else if (operator == '-') {
        subtract(num1, num2);
    } else if (operator == '*') {
        multiply(num1, num2);
    } else if (operator == '/') {
        divide(num1, num2);
    }
}

function handleError() {
    displayedContent.textContent = 'INVALID INPUT';
    displayedContent.style.color = 'white'
    displayedContent.style.fontWeight = 'bold'
    display.style.backgroundColor = 'red';
    display.style.border = '2px solid red';
    display.style.borderRadius = '7px';
    setTimeout(() => resetDisplay(), "1000");
}

function operate() {
    let displayedValue = displayedContent.textContent;
    let regex = /[-+*/]|\d+/g;
    let currentOperator;
    let currentValue;
    let match = displayedValue.match(regex);
    let num1 = match[0];
    let operator = match[1];
    let num2 = match[2];
    if (num2 == '+' || num2 == '-' || num2 == '*' || num2 == '/' ) {
        handleError()
    }
    if (match.length < 3) {
        handleError()
    } else if (match.length >= 3) {
        pickOperation(num1, operator, num2);
        if (match.length == 3) {
            return;
        }

        match.splice(0, 3);

        match.forEach(element => {
            if (element == '+' || element == '/' || element == '*' || element == '-') {
                currentOperator = element;
            } else {
                currentValue = element;
            }
            if (typeof currentOperator !== 'undefined' && typeof currentValue !== 'undefined') {
                pickOperation(result, currentOperator, currentValue)
                match.splice(0, 1);
            }
        });
    }
}

function add(num1, num2) {
    result = Number(num1) + Number(num2);
    displayedContent.textContent = result;
}

function subtract (num1, num2) {
    result = Number(num1) - Number(num2);
    displayedContent.textContent = result;
}

function multiply (num1, num2) {
    result = Number(num1) * Number(num2);
    displayedContent.textContent = result;
}

function divide (num1, num2) {
    result = Number(num1) / Number(num2);
    displayedContent.textContent = result;
}

function updateDisplay(string) {
    displayedContent.textContent += `${string}`;
}

function resetDisplay() {
    displayedContent.textContent = '';
    displayedContent.style.color = 'black'
    display.style.backgroundColor = 'white';
    display.style.border = 'none';
    display.style.borderRadius = '10px';
} 


// WHOLE LOTTA DOM
    const display = document.querySelector('div.display');
    const displayedContent = document.querySelector('p.displayed-content');
    const buttonSeven = document.querySelector('button.button-7');
    const buttonEight = document.querySelector('button.button-8');
    const buttonNine = document.querySelector('button.button-9');
    const buttonFour = document.querySelector('button.button-4');
    const buttonFive = document.querySelector('button.button-5');
    const buttonSix = document.querySelector('button.button-6');
    const buttonOne = document.querySelector('button.button-1');
    const buttonTwo = document.querySelector('button.button-2');
    const buttonThree = document.querySelector('button.button-3');
    const buttonZero = document.querySelector('button.button-0');
    const buttonDivide = document.querySelector('button.button-divide');
    const buttonMultiply = document.querySelector('button.button-multiply');
    const buttonSubtract = document.querySelector('button.button-subtract');
    const buttonAdd = document.querySelector('button.button-add');
    const buttonEqual = document.querySelector('button.button-equal');
    const buttonReset = document.querySelector('button.button-reset');

// DOM METHODS AND SHIT

displayedContent.textContent = '';

buttonSeven.addEventListener('click', () => updateDisplay('7'));
buttonEight.addEventListener('click', () => updateDisplay('8'));
buttonNine.addEventListener('click', () => updateDisplay('9'));
buttonFour.addEventListener('click', () => updateDisplay('4'));
buttonFive.addEventListener('click', () => updateDisplay('5'));
buttonSix.addEventListener('click', () => updateDisplay('6'));
buttonOne.addEventListener('click', () => updateDisplay('1'));
buttonTwo.addEventListener('click', () => updateDisplay('2'));
buttonThree.addEventListener('click', () => updateDisplay('3'));
buttonZero.addEventListener('click', () => updateDisplay('0'));
buttonDivide.addEventListener('click', () => updateDisplay(' / '));
buttonMultiply.addEventListener('click', () => updateDisplay(' * '));
buttonSubtract.addEventListener('click', () => updateDisplay(' - '));
buttonAdd.addEventListener('click', () => updateDisplay(' + '));
buttonEqual.addEventListener('click', () => operate());
buttonReset.addEventListener('click', () => resetDisplay());