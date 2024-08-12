import { it, describe, expect } from "vitest";
import { PriceFormat } from ".";

describe("PriceFormat Unit Test Suite", () => {
  it("should return something", () => {
    expect(PriceFormat(6.5, true)).toBeDefined();
  });

  it("should return the good format for UI", () => {
    expect(PriceFormat(6.5, true)).toBe("6.50");
  });
  it("should be render a string", () => {
    expect(typeof PriceFormat(6.5, true)).toBe("string");
  });

  it("should be return the good format for calculation", () => {
    expect(PriceFormat(6.5, false)).toBe(6.5);
  });
  it("should be render a number", () => {
    expect(typeof PriceFormat(6.5, false)).toBe("number");
  });
});
