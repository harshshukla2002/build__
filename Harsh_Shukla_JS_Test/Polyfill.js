Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }

  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

const numbers = [1, 2, 3, 4];
const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
console.log(sum);

Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

const numbers1 = [1, 2, 3, 4];
const evenNumbers = numbers.myFilter((num) => num % 2 === 0);
console.log(evenNumbers);
