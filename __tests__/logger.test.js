const { describe, beforeEach } = require("@jest/globals");
const loggerMiddleware = require("../src/middleware/logger");

describe("logger middleware", () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("should log to the console", () => {
    //act
    loggerMiddleware(req, res, next);
    //assert
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("should move to next middleware", () => {
    //act
    loggerMiddleware(req, res, next);
    //assert
    expect(next).toHaveBeenCalledWith();
  });
});
