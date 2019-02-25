'use strict';

// Write a recursive func that find s the factorial of a given number

// Sample I/O
// facotrial(5) => 120 -- just 5 * 4 * 3 * 2 * 1 or 5 * !4 or num * facotrial(num-1)
// factorial(3) => 6

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

const result = factorial(6);
console.log(result);
