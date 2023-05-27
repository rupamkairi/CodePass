const solution = require("./main");
const assert = require("assert");

// // jest
// test("case", () => {
//   expect(solution("Rupam")).toBe("Hello Rupam");
// });

// mocha
describe("case", () => {
  it("1", function () {
    assert.equal(solution("Rupam"), "Hello Rupam");
  });
});
