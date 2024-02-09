/* Implement a function that takes in a sorted array and returns a count of
 the unique values in the array.*/

const countUniqueValues = (array) => {
  if (array.length === 0) {
    return 0;
  }
  let lastSeen = "";
  let count = 0;
  array.forEach((el) => {
    if (lastSeen != el) {
      count++;
      lastSeen = el;
    }
  });
  return count;
};

console.log(countUniqueValues([1, 1, 3, 4, 5, 5, 19])); // => 5
console.log(countUniqueValues([1, 1, 1, 1, 1])); // => 1
console.log(countUniqueValues([])); // => 0
