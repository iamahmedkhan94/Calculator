import { render, screen, fireEvent } from "@testing-library/react";

import KeyPadComponent from "../components/keypad-component";
import Service from "../service/service";

describe("onClick functon", () => {
  test("it should call calculate function when button equals to =", () => {
    expect(Service.calculate("1 + 2")).toEqual("3");
    expect(Service.calculate("1 + 3")).not.toEqual("3");
  });
  test("it should have text '='", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<KeyPadComponent onClick={onClick} />);

    fireEvent.click(getByTestId("buttonEquals"));
    expect(screen.getByTestId("buttonEquals")).toHaveTextContent("=");
  });
  test("it should call onClick function", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<KeyPadComponent onClick={onClick} />);

    fireEvent.click(getByTestId("btn-inc"));
    expect(onClick).toHaveBeenCalled();
  });
});
