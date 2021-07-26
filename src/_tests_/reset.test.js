import Service from "../service/service";

describe("on Reset functon", () => {
  test("it should call reset function when button equals to C", () => {
    expect(Service.reset("")).toEqual("");
  });
});
