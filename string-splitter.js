'use strict';

// Split a string based upon a separator (similar to String.prototype.split).

// Sample I/O
// stringSplitter('Hello World', ' ') => 'Hello', 'World' 
// stringSplitter('Hello World', '') => 'H', 'e', ...etc 


const stringSplitter = (str, separator, word = '') => {
  // base case
  if (!str) {
    if (!word) {
      return [];
    }
    return [word];
  }
  if (str[0] !== separator) {
    word += str[0];
    return stringSplitter(str.slice(1), separator, word);
  } else {
    if (!word) {
      return stringSplitter(str.slice(1), separator);
    }
    return [word, ...stringSplitter(str.slice(1), separator)];
  }

};

const result = stringSplitter('-Mikey-is--cool-', '-');
console.log(result);
