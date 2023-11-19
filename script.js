let firstNumber, operator, secondNumber, displayValue, inputValue;
const resultDisplay = document.querySelector(".result-display");
const inputDisplay = document.querySelector(".input-display");
const digitButtons = document.querySelectorAll(".digits");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");

digitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    inputDisplay.textContent += button.textContent;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Save currently displayed value to firstNumber variable
    firstNumber = inputDisplay.textContent;
    // Save pressed button textContent to operator variable
    operator = button.textContent;
    clearAllDisplay();
    resultDisplay.textContent += `${firstNumber} ${operator} `;
  });
});

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
  console.log(
    `Number1 value: ${number1} type: ${typeof number1}, ${operation} Number2 value: ${number2} type: ${typeof number2}`
  );
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
