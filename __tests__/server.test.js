"user strict";

const { server } = require("../src/server");
const supertest = require("supertest");
const request = supertest(server);

describe("basic auth", () => {
  it("should check 500 errors", async () => {
    // arrange
    let param = "/bad";
    let status = 500;
    // act
    const response = await request.get(param);
    // assert
    expect(response.status).toBe(status);
  });

  it("shoud check 404 not found errors", async () => {
    // arrange
    let param = "/notfound";
    let status = 404;
    // act
    const response = await request.get(param);
    // assert
    expect(response.status).toBe(status);
  });

  it("shoud check /signin", async () => {
    // arrange
    let param = "/signin";
    let status = 200;
    // act
    const response = await request
      .post(param)
      .auth({ username: "any", password: "any" });
    // assert
    expect(response.status).toBe(status);
  });

  it("shoud check /signup", async () => {
    // arrange
    let param = "/signup";
    let status = 401;
    // act
    const response = await request
      .post(param)
      .auth({ username: "any", password: "any" });
    // assert
    expect(response.status).toBe(status);
  });
});
