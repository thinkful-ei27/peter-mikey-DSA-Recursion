'use strict';
// Write out a recursice func that takes in a given number and prints out the 
// binary representation of that number as the output.

// Sample I/O
// binaryRep(3) => 11
// binaryRep(10) => 1010

const binaryRep = (num) => {
  //base case
  if (num === 0) return '';
  const binary = num % 2;
  return binaryRep(Math.floor(num / 2)) + binary;

};

const answer = binaryRep(1346785445564);

console.log(answer);
