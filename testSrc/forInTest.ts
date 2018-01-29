import { expect } from "chai";
import { forIn } from "../src";

describe("forIn", function (): void {
  it("should get all own object fields", function (): void {
    // arrange
    const src = {
      a: 1,
      b: 2
    };
    const expected = [{ field: "a", value: 1 }, { field: "b", value: 2 }];

    // act
    const result: { field: string, value: number }[] = [];
    forIn(src, (value, field) => {
      result.push({ value, field });
    });

    // assert
    expect(result).to.be.deep.equal(expected);
  });

  it("should get all fields of null-prototyped object", function (): void {
    // arrange
    const src = Object.create(null);
    src["a"] = 1;
    src["b"] = 2;
    const expected = [{ field: "a", value: 1 }, { field: "b", value: 2 }];

    // act
    const result: { field: string, value: number }[] = [];
    forIn(src, (value, field) => {
      result.push({ value, field });
    });

    // assert
    expect(result).to.be.deep.equal(expected);
  });

});
