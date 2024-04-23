const task3Element = document.getElementById('task-3');

function noParameter(){
  alert('Function with no parameter');
}

function withParameter(text){
  alert(`Received parameter: ${text}`);
}

noParameter()

withParameter('Hello World!')


task3Element.addEventListener('click', noParameter);

function combination(text1, text2, text3){
  const result = text1 + text2 + text3
  alert(`The combination of the three texts are: ${result}`)
}

combination('hello', 'world', 'JS')