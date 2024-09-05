let currentResult = 0;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function operations(operator, resBefCalc, calcNum) {
  const calcDescription = `${resBefCalc} ${operator} ${calcNum}`;
  output(currentResult, calcDescription);
}
function writeLog(operations, prevResult, number, result) {
  const logEntry = {
    operations,
    prevResult,
    number,
    result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserInput();
  initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  operations("+", initialResult, enteredNumber);
  writeLog("ADD", initialResult, enteredNumber, currentResult);
}
function subtract() {
  const enteredNumber = getUserInput();
  initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  operations("-", initialResult, enteredNumber);
  writeLog("ADD", initialResult, enteredNumber, currentResult);
}
function multiply() {
  const enteredNumber = getUserInput();
  initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  operations("*", initialResult, enteredNumber);
  writeLog("ADD", initialResult, enteredNumber, currentResult);
}
function dicvide() {
  const enteredNumber = getUserInput();
  initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  operations("/", initialResult, enteredNumber);
  writeLog("ADD", initialResult, enteredNumber, currentResult);
}

function reset() {
  userInput.textContent = 0;
  calcDescription.textContent = 0;
  calcOutput.textContent = 0;
  location.reload();
}

addBtn.addEventListener("click", add);
subBtn.addEventListener("click", subtract);
mulBtn.addEventListener("click", multiply);
divBtn.addEventListener("click", dicvide);
resetBtn.addEventListener("click", reset);
