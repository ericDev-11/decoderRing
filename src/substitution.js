const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    const stanAlpha = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
      "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ]
    if(!alphabet || alphabet.length !== 26) return false;
    const setAlpha = new Set(alphabet.split(""));
    if(setAlpha.size !== 26) return false;
    const subAlpha = alphabet.split("");
    input = input.toLowerCase();
    const encoder = stanAlpha.reduce((obj, letter, index) => {
      obj[letter] = subAlpha[index];
      return obj;
    }, {});
    const decoder = subAlpha.reduce((obj, letter, index) => {
      obj[letter] = stanAlpha[index];
      return obj;
    }, {});
    return input.split("").map(char => {
      if(encode) {
        if (encoder[char]) {
          return encoder[char];
        } else {
          return char;
        }
      } else if(!encode) {
        if(decoder[char]) {
          return decoder[char];
        } else {
          return char
        }
      }
    }).join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
