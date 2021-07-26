import Service from "../service/service";

describe("on Backspace functon", () => {
  test("it should call backspace function when button equals to CE", () => {
    expect(Service.backspace("1+3")).toEqual("1+");
  });
});
