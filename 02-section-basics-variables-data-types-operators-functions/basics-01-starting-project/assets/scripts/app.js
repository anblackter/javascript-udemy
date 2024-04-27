// alert('This works!');

const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
  return parseFloat(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteLog('+', initialResult, enteredNumber)
}

function substract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteLog('-', initialResult, enteredNumber)
}

addBtn.addEventListener('click', add);
