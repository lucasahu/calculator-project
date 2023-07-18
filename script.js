// Calculator functionality
let operator = ''
let displayNum1
let displayNum2

function convertStrings () {
    let display = displayedContent.textContent
    let regex = /(\+|-|\*|\/) (\d+)/;
    let match = display.match(regex);

    operator = match[1]
    displayNum2 = match[2]
}

function add(num1, num2) {

    let result = Number(num1) + Number(num2);
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

function operate (displayNum1, operator, displayNum2) {

    if (operator == '+') {
        add(displayNum1, displayNum2)
    } else if (operator == '-') {
        subtract(displayNum1, displayNum2)
    } else if (operator == '*') {
        multiply(displayNum1, displayNum2)
    } else if (operator == '/') {
        divide(displayNum1, displayNum2)
    }
}

function updateDisplayOperator(string) {
    displayNum1 = displayedContent.textContent;
    displayedContent.textContent += `${string}`;
    operator = string
}
 
function updateDisplayNumbers(string) {
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

buttonSeven.addEventListener('click', () => updateDisplayNumbers('7'));
buttonEight.addEventListener('click', () => updateDisplayNumbers('8'));
buttonNine.addEventListener('click', () => updateDisplayNumbers('9'));
buttonFour.addEventListener('click', () => updateDisplayNumbers('4'));
buttonFive.addEventListener('click', () => updateDisplayNumbers('5'));
buttonSix.addEventListener('click', () => updateDisplayNumbers('6'));
buttonOne.addEventListener('click', () => updateDisplayNumbers('1'));
buttonTwo.addEventListener('click', () => updateDisplayNumbers('2'));
buttonThree.addEventListener('click', () => updateDisplayNumbers('3'));
buttonZero.addEventListener('click', () => updateDisplayNumbers('0'));
buttonDivide.addEventListener('click', () => updateDisplayOperator(' / '));
buttonMultiply.addEventListener('click', () => updateDisplayOperator(' * '));
buttonSubtract.addEventListener('click', () => updateDisplayOperator(' - '));
buttonAdd.addEventListener('click', () => updateDisplayOperator(' + '));
buttonEqual.addEventListener('click', () => convertStrings());
buttonEqual.addEventListener('click', () => operate(displayNum1, operator, displayNum2));
buttonReset.addEventListener('click', () => resetDisplay());