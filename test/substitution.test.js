// Write your tests here!

const expect = require("chai").expect;
const {substitution} = require("../src/substitution.js");
describe("substitution", () => {
    it("should encode a message by using the given substitution alphabet",() => {
        const expected = 'jrufscpw';
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    it("should have all unique parameters",() => {
        const actual = substitution("You are an excellent spy", "abcabcabcabcabcabcabcabcab");
        expect(actual).to.be.false;
    });
  
  it("should decode the input string if encode = false",() => {
        const expected = "thinkful"
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev",false);
        expect(actual).to.equal(expected);
    });
  
   it("It returns false if the given alphabet isn't exactly 26 characters long.",() => {
        const actual = substitution("thinkful", "short");
        expect(actual).to.be.false;
    });
  
  it("It maintains spaces in the message, and ignores capital letters when encoding.",() => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne"
        expect(actual).to.equal(expected);
    });
  
})