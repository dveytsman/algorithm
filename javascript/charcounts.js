// Write a function that takes in a string and returns an object with the counts of each character
// Sample input "Hello there";
// Smaple output {"h": 2, "e": 3, "l": 2, "o": 1, "t": 1, "h": 1, "e": 2, "r", 1}
// ignore spaces and count uppercase values as lowercase values

const charCounts = (string) => {
  let counts = {};
  for (let char of string) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      counts[char] = (counts[char] || 0) + 1;
    }
  }
  return counts;
};
console.log(charCounts("Hello there"));
