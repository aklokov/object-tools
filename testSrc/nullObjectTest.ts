import { expect } from "chai";
import { nullObject } from "../src";

describe("nullObject", function (): void {
  it("should not have 'constructor' field", function (): void {
    // arrange

    // act
    const result = nullObject();

    // assert
    expect(result.constructor === undefined).to.be.equal(true);
  });
});
