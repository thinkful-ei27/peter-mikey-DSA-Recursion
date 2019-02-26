'use strict';

// Write a function that creates an anagram (listing all the rearrangements of a word) 
// of a given word. For example, if the user types east, the program should list all 24 permutations, 
// including eats, etas, teas, and non-words like tsae.

// e -- ast, ats, sat, sta, tas, and tsa
// a -- est, ets, tes, tse, set,  and ste 
// s -- eat, eta, tea, tae, ate, and aet
// t -- eas, esa, ase, aes, sae, and sea

const anagram = (str, prefix, results = []) => {
  // base  case
  if (!str) return '';
  for (let i = 0; i < str.length; i++) {
    let newStr = str.slice(0, i) + str.slice(i + 1);
    let newPrefix = prefix + str.charAt(i);
    if (!newStr) results.push(newPrefix);
    anagram(newStr, newPrefix, results);
  }
  return results;
};

console.log(anagram('east', ''));



// Tauhida's solution for reference
/* 
function anagrams(prefix, str){
  if(str.length <= 1){
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for(let i=0; i<str.length; i++){
      let currentLetter = str.substring(i, i+1); 
      let previousLetters = str.substring(0,i);
      let afterLetters = str.substring(i+1);
      anagrams(prefix+currentLetter, previousLetters+afterLetters);
    }
  }
}
function printAnagram(word){
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

}

printAnagram('east'); */
