'use strict';

// Write a function that reverses a string. Take a string as input, 
// reverse the string, and return the new string.

// Input - string
// Output - string-reversed

// Sample I/O
// reversString('hello') => olleh

const reverseString = (str) => {
  // base case 
  if (str === '') return '';

  return str[str.length - 1] + reverseString(str.slice(0, -1));
};

const result = reverseString('hello');

console.log(result); // Output => olleh

const reverseStringTwo = (str) => {
  // base case 
  if (str === '') return '';

  return reverseStringTwo(str.slice(1)) + str[0];
};

const resultTwo = reverseStringTwo('hello');
console.log(resultTwo);