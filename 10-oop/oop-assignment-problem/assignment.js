class Course {
  #price;

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.#price = price;
  }

  set price(value) {
    if (value < 0) {
      throw 'Invalid value';
    }
    this.#price = '$' + value;
  }

  get price() {
    return this.#price;
  }

  calculateValue() {
    return this.length / this.price;
  }

  printSummary() {
    return `${this.title} - ${this.length} - ${this.price}`;
  }
}

const course1 = new Course('JavaScript', 10, 100);
const course2 = new Course('Python', 20, 200);

console.log(course1);
console.log(course2);

console.log(course1.calculateValue());
console.log(course2.calculateValue());

console.log(course1.printSummary());
console.log(course2.printSummary());

class PracticalCourse extends Course {
  constructor(title, length, price, exercisesCount) {
    super(title, length, price);
    this.numOfExercises = exercisesCount;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }

  publish() {
    console.log('Publishing...');
  }
}

const practicalCourse = new PracticalCourse('JavaScript', 10, 100, 20);
const theoreticalCourse = new TheoreticalCourse('Python', 20, 200);

console.log(practicalCourse);
console.log(theoreticalCourse);
theoreticalCourse.publish();
