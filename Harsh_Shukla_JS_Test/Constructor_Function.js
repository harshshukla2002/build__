function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, ${this.name}`);
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.greet();
person2.greet();
