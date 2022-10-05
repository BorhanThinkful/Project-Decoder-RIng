// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js");

describe("polybius", () => {
    it("should encode a message by translating each letter to number pairs",() => {
        const expected = '23513434112251';
        const actual = polybius("message");
        expect(actual).to.equal(expected);
    });
  
    it("should leave spaces as is when encoding",() => {
        const expected = '11 23513434112251';
        const actual = polybius("a message");
        expect(actual).to.equal(expected);
    });
    it("should translate both 'i' and 'j' to 42", () => {
        const expected = '424233';
        const actual = polybius("jin");
        expect(actual).to.equal(expected);
    })
    it("should decode a message by translating each pair of numbers into a letter", () => {
        const expected = "azad";
        const actual = polybius('11551141', false);
        expect(actual).to.equal(expected);
    })
    it("should leave spaces as is when decoding", () => {
        const expected = "a message";
        const actual = polybius("11 23513434112251", false);
        expect(actual).to.equal(expected);
    })
}); 