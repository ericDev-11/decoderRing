const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if(shift === 0 || shift < -25 || shift > 25 || !shift) return false;
    !encode ? (shift = -shift) : null;
    return input.toLowerCase().split("").reduce((acc, char) => {
      let charCode = char.charCodeAt(0);
      if(charCode > 96 && charCode < 123) {
        charCode += shift;
        charCode > 122 ? (charCode = charCode - 122 + 96) : null;
        charCode < 97 ? (charCode = charCode - 97 + 123) : null;
      }
      return (acc += String.fromCharCode(charCode));
    }, "");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
