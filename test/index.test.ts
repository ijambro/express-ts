import request from "supertest";
import { expect } from "chai"; // An old version of chai is imported, to use CommonJS require internally
import app from "../src/index";

describe("GET /", () => {
  it("Responds with 200", async () => {
    const response = await request(app).get("/");
    // console.log("response", response);
    expect(response.statusCode).to.equal(200);
  });
});
