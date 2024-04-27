// alert('This works!');

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseFloat(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
  createAndWriteLog('+', initialResult, enteredNumber)
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
  createAndWriteLog('-', initialResult, enteredNumber)
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
  createAndWriteLog('*', initialResult, enteredNumber)
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
  createAndWriteLog('/', initialResult, enteredNumber)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
