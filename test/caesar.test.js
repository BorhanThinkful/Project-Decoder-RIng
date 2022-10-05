
// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js");

describe("caesar", () => {
    it("should encode a basic string using a shift",() => {
        const expected = 'wklqnixo';
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);
      })
});
  describe("caesar", () => {
    it("should leave spaces as is", () => {
        const actual = caesar("t !", 3);
        const expected = " "
        expect(actual.charAt(1)).to.equal(expected);
    })
    });

describe("caesar", () => {
    it("should leave special characters as is", () => {
        const actual = caesar("a !", 3);
        const expected = "!"
        expect(actual.charAt(2)).to.equal(expected);
       })
    });

describe("caesar", () => {
    it("should wrap characters around when going over 'z'", () => {
        const actual = caesar("A zebra", 3);
        const expected = "d cheud"
        expect(actual).to.equal(expected);
        })
    });

describe("caesar", () => {
    it("should switch the direction of the shift if decoding", () => {
        const actual = caesar("dcdg", 3, false);
        const expected = "azad"
        expect(actual).to.equal(expected);
       })
    });

describe("caesar", () => {
    it("should return false if there is no shift value", () => {
        const actual = caesar("software engineer!");
        expect(actual).to.be.false; 
    })
    });

describe("caesar", () => {
    it("should return false if the shift is greater than 25", () => {
        const actual = caesar("software engineer!", 30);
        expect(actual).to.be.false; 
    })
    });

describe("caesar", () => {
    it("should return false if the shift is less than -25", () => {
        const actual = caesar("software engineer!", -40);
        expect(actual).to.be.false; 
    })
    });

describe("caesar", () => {
    it("should return false if the shift is 0", () => {
        const actual = caesar("software engineer!", 0);
        expect(actual).to.be.false; 
    })
    });

describe("caesar", () => {
    it("should ignore capitalization of letters", () => {
        const actual = caesar("ABC", 1, false);
        const expected = "zab"
        expect(actual).to.equal(expected);
    })
    });
