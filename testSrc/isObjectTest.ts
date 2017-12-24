import { expect } from 'chai';
import { isObject } from '../src';

describe('isObject', function (): void {
  it('should return false for function', function (): void {
    // arrange

    // act
    const result = isObject(() => null);

    // assert
    expect(result).to.be.equal(false);
  });

  it('should return false for null', function (): void {
    // arrange

    // act
    const result = isObject(null);

    // assert
    expect(result).to.be.equal(false);
  });

  it('should return true for object', function (): void {
    // arrange

    // act
    const result = isObject({});

    // assert
    expect(result).to.be.equal(true);
  });

  it('should return true for null-prototype object', function (): void {
    // arrange

    // act
    const result = isObject(Object.create(null));

    // assert
    expect(result).to.be.equal(true);
  });

  it('should return true for class instance', function (): void {
    // arrange

    // act
    const result = isObject(new Date());

    // assert
    expect(result).to.be.equal(true);
  });
});
