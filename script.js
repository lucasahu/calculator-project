// Calculator functionality
let displayNum1;
let displayNum2;
let operator;

function add(num1, num2) {
    return num1 + num2
}

function subtract (num1, num2) {
    return num1 - num2
}

function multiply (num1, num2) {
    return num1 * num2
}

function divide (num1, num2) {
    return num1 / num2
}

function operate (displayNum1, operator, displayNum2) {
    Number(displayNum1);
    Number(displayNum2);

    if (operator == '+') {
        return add(displayNum1, displayNum2)
    } else if (operator == '-') {
        return subtract(displayNum1, displayNum2)
    } else if (operator == '*') {
        return multiply(displayNum1, displayNum2)
    } else if (operator == '/') {
        return divide(displayNum1, displayNum2)
    }
}

function updateDisplay(string) {
    displayedContent.textContent += `${string}`;
}

function resetDisplay() {
    displayedContent.textContent = '';
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
buttonDivide.addEventListener('click', () => updateDisplay(' / '));
buttonMultiply.addEventListener('click', () => updateDisplay(' * '));
buttonSubtract.addEventListener('click', () => updateDisplay(' - '));
buttonAdd.addEventListener('click', () => updateDisplay(' + '));
buttonEqual.addEventListener('click', () => {
    console.log('BOOOM')
})
buttonReset.addEventListener('click', () => resetDisplay());