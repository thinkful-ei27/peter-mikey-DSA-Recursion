'use strict';
// form equalateral triangle, length n sides

//  n = length of side

// triangleNum = total dots

const calculateTriangleNumber = (n) => {
  // base case
  if (n === 0)
    return 0;
  return n + calculateTriangleNumber(n - 1);
};


const triangleNum = calculateTriangleNumber(10);

console.log(triangleNum);
