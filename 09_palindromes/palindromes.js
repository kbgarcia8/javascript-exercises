const palindromes = function () {
    let inputWord = arguments[0];
    const regex = /[a-zA-Z0-9]/;
    const regex1 = /[A-Z]/;
    const regex2 = /^\S*$/;
    const hasNoSpace = regex2.test(inputWord);
    if(arguments.length === 1 && hasNoSpace) {
      let wordCharacters = inputWord.split('');
      let capitalLetter = wordCharacters.filter(element => regex1.test(element));
      let letterandnumOnly = wordCharacters.filter(element => regex.test(element));
      let punctuations = wordCharacters.filter(element => !regex.test(element));
      let wordCharactersRev = letterandnumOnly.reverse();
      if (capitalLetter.length !== 0) {
        wordCharactersRev[wordCharactersRev.length-1] = wordCharactersRev[wordCharactersRev.length-1].toLowerCase();
        wordCharactersRev[0] = wordCharactersRev[0].toUpperCase();
      }
      let finalRevCharacters = wordCharactersRev.concat(punctuations);
      let finalPalindrome = finalRevCharacters.join('');
      console.log(capitalLetter);
      console.log(inputWord);
      console.log(wordCharacters);
      console.log(letterandnumOnly);
      console.log(punctuations);
      console.log(wordCharactersRev);
      console.log(finalRevCharacters);
      console.log(finalPalindrome);
      if (inputWord === finalPalindrome) {
        return true;
      } else {
        return false;
      }
    } else {
      let initialInputNoSpace = arguments[0].split(' ').join('').split('');
      let filteredInput = initialInputNoSpace.filter(element => regex.test(element));
      let capitalLetter = filteredInput.filter(element => regex1.test(element));
      let finalInput = filteredInput.join('');
      let palindromeTest = filteredInput.reverse();
      if (capitalLetter.length !== 0) {
        palindromeTest[palindromeTest.length-1] = palindromeTest[palindromeTest.length-1].toLowerCase();
        palindromeTest[0] = palindromeTest[0].toUpperCase();
      }
      let finalPalindrome = palindromeTest.join('');
      if (finalInput === finalPalindrome) {
        return true;
      } else {
        return false;
      }
    }
};

// Do not edit below this line
module.exports = palindromes;
