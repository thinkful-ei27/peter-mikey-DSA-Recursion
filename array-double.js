'use strict';

// input : [1,2,3]
// output: [2,4,6]

// array as input unknown set of numbers

// output is an array with each value doubled

const doubleTheArray = (arr) => {
  // basecase is empty array
  if (!arr.length)
    return [];
  else {
    return [arr[0] * 2, ...doubleTheArray(arr.slice(1))];
  }
};


const result = doubleTheArray([1, 2, 3, 4, 53, 34, 12345]);

console.log(result);