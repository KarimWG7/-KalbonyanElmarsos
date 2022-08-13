import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async component", () => {
  test("renders posts if requesr susseeds", async () => {
    // Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "final post" }],
    });
    render(<Async />);
    // Assert
    const listItemELs = await screen.findAllByRole("listitem", {}, {});
    expect(listItemELs).not.toHaveLength(0);
  });
});
