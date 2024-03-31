import { render, screen } from "@testing-library/react";

import About from "./about";

describe("About section tests", () => {
  test("About section snapshots", () => {
    render(<About />);

    const quizComponent = screen.queryByTestId("about");

    expect(quizComponent).toBeInTheDocument();
    expect(quizComponent).toMatchSnapshot();
  });
});
