const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersGreaterThanFive = arrayOfNumbers.filter(number=> number > 5);
console.log(numbersGreaterThanFive);

const numbersObject = arrayOfNumbers.map(number => ({number: number}));
console.log(numbersObject);

const sumOfNumbers = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumOfNumbers);

const finMax = (arrayOfNumbers) => {
  let max = 0;
  for (const number of arrayOfNumbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

console.log(finMax(arrayOfNumbers));

const finMiAndMax = (arrayOfNumbers) => {
  let min = arrayOfNumbers[0];
  let max = arrayOfNumbers[0];
  for (const number of arrayOfNumbers) {
    if (number > max) {
      max = number;
    }
    if (number < min) {
      min = number;
    }
  }
  return [min, max];
}

const [min, max] = finMiAndMax(arrayOfNumbers);
console.log(`min:${min}`, `max:${max}`);

const noDuplicates = new Set();
noDuplicates.add(1);
noDuplicates.add(1);
noDuplicates.add(1);
noDuplicates.add(1);

console.log(noDuplicates);