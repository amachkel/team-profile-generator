const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  test("should create an object with 'github' string", () => {
    const engineer = new Engineer("Alex", 23, "alex@alexmail.com", "amachkel");

    expect(engineer.github).toEqual("amachkel");
  });
});
