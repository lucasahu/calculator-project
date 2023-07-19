//Calculator functionality code

//Global variable used to keep track
//The total in mixed operations

let result;

//pickOperation() is called inside the operate() function

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

function operate() {

    //The string displayed is processed through a regular expression
    //So it can be handled as an array latter

    let displayedValue = displayedContent.textContent;
    let regex = /[-+*/]|\d+/g;
    let match = displayedValue.match(regex);

    //These variables keep track of the current number and operator being used
    //In the loop that iterates through the match array

    let currentOperator;
    let currentValue;

    //We use the first 3 elements of the match array to solve the first operation of the lot
    //So that later its passed as the result in the loop that iterates through the match array

    let num1 = match[0];
    let operator = match[1];
    let num2 = match[2];

    //The display will throw an error when the second operand is not a number
    //This is to prevent NaN rendering in the display

    if (num2 == '+' || num2 == '-' || num2 == '*' || num2 == '/' ) {
        handleError()
    }

    if (match.length < 3) {
        handleError()
    } 
    
    else if (match.length >= 3) {

        //The first 3 elements in the match array are used to solve the first operation in the calculation
        //This is because the result is later used in the forEach loop to keep track of the total

        pickOperation(num1, operator, num2);

        //When the operation that is being solved is a binary operation the function stops
        //Because the operation was solved in line 60

        if (match.length == 3) {
            return;
        }

        //In the case of a mixed operation the first 3 elements of the array are removed
        //Because the first operation has already been solved

        match.splice(0, 3);

        //In this loop each element is checked, if the element is an operator its assigned to the current operator
        //If not its assigned to the currentValue

        match.forEach(element => {
            if (element == '+' || element == '/' || element == '*' || element == '-') {
                currentOperator = element;
            } else {
                currentValue = element;
            }

            //The next operation in line is solved only when both currentOperator and currentValue have a value
            //Once the operation is solved the result variable is updated with the result of the operation
            //And both currentOperator and currentValue are reset in order to move onto the next operation

            if (typeof currentOperator !== 'undefined' && typeof currentValue !== 'undefined') {
                pickOperation(result, currentOperator, currentValue);
                currentOperator = undefined;
                currentValue = undefined;
            }
        });
    }
}

//Rounded the result with Math.round()
//Because without rounding operations with big numbers and lots of decimal would return faulty values.

function add(num1, num2) {
    result = Number(num1) + Number(num2);
    displayedContent.textContent = Math.round(result * 1000) / 1000;
}

function subtract (num1, num2) {
    result = Number(num1) - Number(num2);
    displayedContent.textContent = Math.round(result * 1000) / 1000;
}

function multiply (num1, num2) {
    result = Number(num1) * Number(num2);
    displayedContent.textContent = Math.round(result * 1000) / 1000;
}

function divide (num1, num2) {
    result = Number(num1) / Number(num2);
    displayedContent.textContent = Math.round(result * 1000) / 1000;
}

//Calculator display code

//Limited the length of the content being displayed for aesthetic reasons

function updateDisplay(string) {
    if (displayedContent.textContent.length >= 26) {
        return;
    }

    displayedContent.textContent += `${string}`;
}

function resetDisplay() {
    displayedContent.textContent = '';
    displayedContent.style.color = 'black'
    display.style.backgroundColor = 'white';
    display.style.border = 'none';
    display.style.borderRadius = '10px';
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


// All query selectors used

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

//Setting the display to nothing when the page loads

displayedContent.textContent = '';

//Calculator event listeners
//Functions called are declared at the start of the file

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