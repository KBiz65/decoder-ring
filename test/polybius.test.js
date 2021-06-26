// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("should return false if the input is empty, missing, or not a string", () => {
    // actual results that come back from calling polybius
    const actualEmptyString = polybius("");
    const actualMissingMessage = polybius();
    const actualMessageNotAString = polybius(65);

    // expect(actual).to.be.false;
    expect(actualEmptyString).to.be.false;
    expect(actualMissingMessage).to.be.false;
    expect(actualMessageNotAString).to.be.false;
  });

  it("should return the correct encoded response", () => {
    // actual results from calling polybius()
    const actualNoSpace = polybius("Kevin");
    const actualWithSpace = polybius("Kevin Bisner");

    // setting up the variables with what should be expected from calling polybius
    const expectedNoSpace = "5251154233";
    const expectedWithSpace = "5251154233 214234335124";

    // expect(actual).to.be.equal(expected);
    expect(actualNoSpace).to.be.equal(expectedNoSpace);
    expect(actualWithSpace).to.be.equal(expectedWithSpace);
  });

  it("should return false if decoded input has an odd amount of numbers", () => {
    // actual results from calling polybius()
    const actualNoSpace = polybius("525115423", false);
    const actualWithSpace = polybius("5251154233 21423433512", false);

    // expect(actual).to.be.false;
    expect(actualNoSpace).to.be.false;
    expect(actualWithSpace).to.be.false;
  });

  it("should encode i and j to 42", () => {
    //actual results from calling polybius()
    const actualI = polybius("i");
    const actualJ = polybius("j");

    // setting up expected results
    const expectedIAndJ = "42";

    // expect(actual)to.be.equal(expected);
    expect(actualI).to.be.equal(expectedIAndJ);
    expect(actualJ).to.be.equal(expectedIAndJ);
  });

  it("should decode 42 to be (i/j)", () => {
    //actual results from calling polybius()
    const actual42 = polybius("42", false);

    // setting up expected results
    const expected42 = "(i/j)";

    // expect(actual)to.be.equal(expected);
    expect(actual42).to.be.equal(expected42);
  });

  it("should return the correct decoded response", () => {
    // actual results from calling polybius()
    const actualNoSpace = polybius("5251154233", false);
    const actualWithSpace = polybius("5251154233 214234335124", false);

    // setting up the variables with what should be expected from calling polybius
    const expectedNoSpace = "kev(i/j)n";
    const expectedWithSpace = "kev(i/j)n b(i/j)sner";

    // expect(actual).to.be.equal(expected);
    expect(actualNoSpace).to.be.equal(expectedNoSpace);
    expect(actualWithSpace).to.be.equal(expectedWithSpace);
  });
});
