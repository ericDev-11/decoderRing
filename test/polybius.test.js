const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius module", () => {
  describe("encoding a message", () => {
    it("should translate both 'i' and 'j' to 42", () => {
      const message = "ij";
      const actual = polybius(message);
      const expected = "4242";
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const message = "Abcd";
      const actual = polybius(message);
      const expected = "11213141";
      expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
      const message = "abcd efg";
      const actual = polybius(message);
      const expected = "11213141 511222";
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding a message", () => {
    it("should translate 42 to 'i/j'", () => {
      const message = "4242";
      const actual = polybius(message, false);
      const expected = "i/ji/j";
      expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
      const message = "11213141 51122232";
      const actual = polybius(message, false);
      const expected = "abcd efgh";
      expect(actual).to.equal(expected);
    });
  });
});