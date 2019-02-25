'use strict';

//  given n, print the fibbonaci num at n

const fibFn = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibFn(n - 1) + fibFn(n - 2);
};

const answer = fibFn(7);
console.log(answer);

