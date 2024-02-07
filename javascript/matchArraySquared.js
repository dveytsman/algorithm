// Write a function that takes in 2 arrays and returns true if each value in the first array is equivalent to itself squared in the second array
// Examples
// input: [1, 2, 3], [1, 9, 4]
// output: true

//input: [1, 2, 3], [1, 2, 4]
//output: false

const matchArraySquared = (array1, array2) => {
  if (array1.length != array2.length) {
    return false;
  }
  let counter1 = {};
  for (var element of array2) {
    counter1[element] = (counter1[element] || 0) + 1;
  }
  for (let element of array1) {
    let squared = element * element;
    if (!counter1[squared]) {
      return false;
    } else {
      counter1[squared]--;
    }
  }
  return true;
};
let inputa = [1, 2, 3];
let inputb = [1, 9, 4];
let inputc = [1, 2, 4];
let inputd = [1, 1, 4];
let inpute = [1, 1, 2];

console.log(matchArraySquared(inputa, inputb));
console.log(matchArraySquared(inputa, inputc));
console.log(matchArraySquared(inputa, inputd));
console.log(matchArraySquared(inputd, inputb));
