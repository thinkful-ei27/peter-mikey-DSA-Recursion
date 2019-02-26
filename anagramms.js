'use strict';

const getAnagrams = (str, prefix = '', ar = []) => {
  if (!str) return ar;
  const stringArray = str.split('');

  // TODO, filter out spaces
  const getOthers = (arr, i) => arr.filter((letter, j) => i !== j ? letter : undefined);
  let otherLetters;
  stringArray.forEach((char, i) => {
    otherLetters = getOthers(stringArray, i);
    const growths = otherLetters.map(l => prefix + char + l);
    
  
    if (prefix.length === str.length) {
      ar.push(prefix);
    }
    return prefix.length;
  });

  return getAnagrams(otherLetters.join(''), );
};




const mix = getAnagrams('east');

console.log(mix);


// function anagrams(prefix, str) {
//   if (str.length <= 1) {
//     console.log(`The anagram is ${prefix}${str}`);
//   } else {
//     for (let i = 0; i < str.length; i++) {
//       let currentLetter = str.substring(i, i + 1);
//       let previousLetters = str.substring(0, i);
//       let afterLetters = str.substring(i + 1);
//       anagrams(prefix + currentLetter, previousLetters + afterLetters);
//     }
//   }
// }
// function printAnagram(word) {
//   //console.log(`The word for which we will find an anagram is ${word}`);
//   anagrams('', word);

// }

// printAnagram('party');