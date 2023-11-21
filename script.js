let firstNumber = (operator = secondNumber = displayValue = inputValue = null);
let displayLengthLimit = 5;
const resultDisplay = document.querySelector(".result-display");
const inputDisplay = document.querySelector(".input-display");
const digitButtons = document.querySelectorAll(".digits");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");

// DEFAULT STATE
defaultState();

// function for resetting states
function defaultState() {
  firstNumber = secondNumber = operator = null;
  clearAllDisplay();
  applyEventListener(digitButtons, "click", displayDigits);
  // applyEventListener(operatorButtons, "click", displayOperator);
}

function applyEventListener(nodeListObject, event, eventFunction) {
  nodeListObject.forEach((node) => {
    node.addEventListener(event, eventFunction);
  });
}

function deleteEventListener(nodeListObject, event, eventFunction) {
  nodeListObject.forEach((node) => {
    node.removeEventListener(event, eventFunction);
  });
}

// DIGIT INPUT STATE
function displayDigits(event) {
  inputDisplay.textContent += this.textContent;
  if (inputDisplay.textContent.length >= displayLengthLimit) {
    // Disable digit buttons so user cannot exceed the display limit
    deleteEventListener(digitButtons, "click", displayDigits);
  }
  applyEventListener(operatorButtons, "click", displayOperator);
}

// OPERATOR INPUT STATE

function displayOperator(event) {
  // Save currently displayed value to firstNumber variable
  firstNumber = inputDisplay.textContent;
  // Save pressed button textContent to operator variable
  operator = this.textContent;
  clearAllDisplay();
  resultDisplay.textContent += `${firstNumber} ${operator} `;
  deleteEventListener(operatorButtons, "click", displayOperator);
  applyEventListener(digitButtons, "click", displayDigits);
}

// EQUAL INPUT STATE

equalButton.addEventListener("click", () => {
  secondNumber = inputDisplay.textContent;
  clearInputDisplay();
  let result = operate(operator, parseInt(firstNumber), parseInt(secondNumber));
  resultDisplay.textContent += `${secondNumber} = ${result}`;
  inputDisplay.textContent = result;
});

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function operate(operation, number1, number2) {
  switch (operation) {
    case "+":
      return add(number1, number2);
    case "-":
      return subtract(number1, number2);
    case "*":
      return multiply(number1, number2);
    case "/":
      return divide(number1, number2);
  }
}

function clearAllDisplay() {
  resultDisplay.textContent = "";
  inputDisplay.textContent = "";
}

function clearInputDisplay() {
  inputDisplay.textContent = "";
}

// Keyboard Input Support
document.body.addEventListener("keydown", keyboardTest);

function keyboardTest(event){
  let key = event.key;
  inputDisplay.textContent += key;
  if (key == "+"){
    // Save currently displayed value to firstNumber variable
  firstNumber = inputDisplay.textContent;
  // Save pressed button textContent to operator variable
  operator = "+";
  clearAllDisplay();
  resultDisplay.textContent += `${firstNumber} ${operator} `;
  }
}