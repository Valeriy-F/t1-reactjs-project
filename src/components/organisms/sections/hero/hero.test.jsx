import { render, screen } from "@testing-library/react";

import Hero from "./hero";

describe("Hero section tests", () => {
  test("Hero section snapshots", () => {
    render(<Hero />);

    const quizComponent = screen.queryByTestId("hero");

    expect(quizComponent).toBeInTheDocument();
    expect(quizComponent).toMatchSnapshot();
  });
});
