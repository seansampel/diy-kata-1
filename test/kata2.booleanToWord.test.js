const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("retuns yes when passed as True", () => {
    expect(booleanToWord(true)).toBe("yes");
  });
  it("retuns no when passed as False", () => {
    expect(booleanToWord(false)).toBe("no");
  });
});
