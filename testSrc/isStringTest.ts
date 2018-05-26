import { expect } from "chai";
import { isString } from "../src/isString";

describe("isString", function (): void {
  it("should return true for string", function (): void {
    // arrange
    const obj = "42";

    // act
    const result = isString(obj);

    // assert
    expect(result).to.be.equal(true);
  });

  it("should return false for number", function (): void {
    // arrange
    const obj = 42;

    // act
    const result = isString(obj);

    // assert
    expect(result).to.be.equal(false);
  });

  it("should return false for object", function (): void {
    // arrange
    const obj = {};

    // act
    const result = isString(obj);

    // assert
    expect(result).to.be.equal(false);
  });
});
