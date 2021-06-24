// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    // your solution code here

    // this checks that input is a string and is not empty
    if (!input || typeof input !== "string") {
      return false;
    }
    // this checks to make sure that shift is a valid number
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    // checks if we're decoding so we can change shift to it's negative
    if (encode === false) shift *= -1;

    const lowerCaseInput = [...input.toLowerCase()];
    const processedMessage = lowerCaseInput.map((char) => {
      let charIndex = alphabet.findIndex((letter) => letter === char);
      if (char < "a" || char > "z") {
        return char;
      }

      if (shift > 0) {
        if (charIndex + shift < 26) {
          // this will shift without wrapping around to the beginning
          return alphabet[charIndex + shift];
        } else {
          // this is to handle shifts that would cause you to need to wrap
          return alphabet[charIndex + shift - 26];
        }
      }

      if (shift < 0) {
        if (charIndex + shift >= 0) {
          // this will shift without wrapping around to the beginning
          return alphabet[charIndex + shift];
        } else {
          // this is to handle shifts that would cause you to need to wrap
          return alphabet[charIndex + shift + 26];
        }
      }
    });
    return processedMessage.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
