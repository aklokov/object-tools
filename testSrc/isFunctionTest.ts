import { expect } from "chai";
import { isFunction } from "../src";

describe("isFunction", function (): void {
  it("should return true for function", function (): void {
    // arrange
    function a(): void { return null; }
    // act
    const result = isFunction(a);

    // assert
    expect(result).to.be.equal(true);
  });

  it("should return true for object method", function (): void {
    // arrange
    const a = {};

    // act
    const result = isFunction(a.hasOwnProperty);

    // assert
    expect(result).to.be.equal(true);
  });

  it("should return true for lambda", function (): void {
    // arrange

    // act
    const result = isFunction(() => null);

    // assert
    expect(result).to.be.equal(true);
  });

  it("should return false for object", function (): void {
    // arrange

    // act
    const result = isFunction({});

    // assert
    expect(result).to.be.equal(false);
  });

  it("should return false for null", function (): void {
    // arrange

    // act
    const result = isFunction(null);

    // assert
    expect(result).to.be.equal(false);
  });
});
