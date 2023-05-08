/*
input: word, array of words
output: an array of words or a word

rules:  
  -an anagram is a word that is the same as another word even with arranged letters
  -if no word in the array matches the input word, return an empty array
  -there might be multiple matches
  -an identical word is not an anagram
  -anagrams are case-insensitive

algorithm:
  -declare a class Anagram
  -define a constructor with a parameter for a string
  -declare a match method that takes a parameter
  -declare an empty array
  -convert the constructor parameter to lowercase, split it, sort it, rejoin it
  -loop through the argument passed to the match method
    -for each word, convert it to lower case, splt it, join it
      -check if the newly arranged word matches the rearranged constructor parameter
        -if it does, get the index of that word
          -using the index, find the element at that index in the original method
          argument
    -return the array of anagram(s);
*/

class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(words) {
    let anagrams = [];
    let original  = this.word.toLowerCase().split('').sort().join('');
    words.forEach((word, index) => {
      let match = word.toLowerCase().split('').sort().join('');
      if ((match === original) && (this.word.toLowerCase() !== word.toLowerCase())) {
        anagrams.push(words[index]);
      }
    });

    return anagrams;
  }
}

module.exports = Anagram;