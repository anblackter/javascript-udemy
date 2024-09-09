const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert('Greater than 0.7');
}

numbersArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

for (let i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}

for (const number of numbersArray) {
  console.log(number);
}

const secondRandomNumber = Math.random();

if (secondRandomNumber > 0.7 && randomNumber > 0.7) {
  alert('Both greater than 0.7');
} else if (secondRandomNumber < 0.2 || randomNumber < 0.2) {
  alert('Both less than 0.2');
}