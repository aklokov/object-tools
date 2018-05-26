import { expect } from "chai";
import { isNumber } from "../src/isNumber";

describe("isNumber", function (): void {
  it("should return true for number", function (): void {
    // arrange
    const obj = 42;

    // act
    const result = isNumber(obj);

    // assert
    expect(result).to.be.equal(true);
  });

  it("should return false for string", function (): void {
    // arrange
    const obj = "42";

    // act
    const result = isNumber(obj);

    // assert
    expect(result).to.be.equal(false);
  });

  it("should return false for object", function (): void {
    // arrange
    const obj = {};

    // act
    const result = isNumber(obj);

    // assert
    expect(result).to.be.equal(false);
  });
});
