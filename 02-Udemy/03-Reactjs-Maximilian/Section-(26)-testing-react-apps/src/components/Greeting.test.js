import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting conponent", () => {
  test("renders hello world as atext ", () => {
    // Arrange
    render(<Greeting />);
    // Act
    /*******/
    // Assert
    const helloWorldEL = screen.getByText("Hello World", { exact: false });
    expect(helloWorldEL).toBeInTheDocument();
  });

  test("renders good to see you if the button wasn't clicked", () => {
    // Arrange
    render(<Greeting />);
    // Assert
    const paragraphEl = screen.getByText("it's good to see you", {
      exact: false,
    });
    expect(paragraphEl).toBeInTheDocument();
  });

  test("doesn't renders good to see you if the button was clicked", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const paragraphEl = screen.queryByText("it's good to see you", {
      exact: false,
    });
    expect(paragraphEl).toBeNull();
  });

  test("renders changed if the button was clicked", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const paragraphEl = screen.getByText("Changed");
    expect(paragraphEl).toBeInTheDocument();
  });
});
