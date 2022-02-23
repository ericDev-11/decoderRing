const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution module", () => {
    describe("error handling", () => {
        it("should return false if the substitution alphabet does not have a length of 26", () => {
            const message = "abcd";
            const alphabet = "efgh";
            actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        });
        it("should return false if there are any duplicate letters in the substitution alphabet", () => {
            const message = "abcd";
            const alphabet = "aacdefghijklmnopqrstuvwxyz";
            actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        });
    });
    describe("encoding", () => {
        it("should properly encode the given message", () => {
            const message = "abcd";
            const alphabet = "zyxwvutsrqponmlkjihgfedcba";
            actual = substitution(message, alphabet);
            expected = "zyxw";
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces before and after encoding", () => {
            const message = "abcd efgh";
            const alphabet = "zyxwvutsrqponmlkjihgfedcba";
            actual = substitution(message, alphabet);
            expected = "zyxw vuts";
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const message = "AbCd";
            const alphabet = "zyxwvutsrqponmlkjihgfedcba";
            actual = substitution(message, alphabet);
            expected = "zyxw";
            expect(actual).to.equal(expected);
        });
    });
    describe("decoding", () => {
        it("should properly decode the given message", () => {
            const message = "zyxw";
            const alphabet = "zyxwvutsrqponmlkjihgfedcba";
            actual = substitution(message, alphabet, false);
            expected = "abcd";
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces before and after decoding", () => {
            const message = "zyxw vuts";
            const alphabet = "zyxwvutsrqponmlkjihgfedcba";
            actual = substitution(message, alphabet);
            expected = "abcd efgh";
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const message = "ZyXw";
            const alphabet = "zyxwvutsrqponmlkjihgfedcba";
            actual = substitution(message, alphabet);
            expected = "abcd";
            expect(actual).to.equal(expected);
        });
    });
});