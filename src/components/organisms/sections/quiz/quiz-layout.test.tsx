import { render, screen } from "@testing-library/react";

import QuizLayout from "./quiz-layout";

const categories = ["Category 1", "Category 2", "Category 3"];

const data = {
  title: "We will select the perfect product for you",
  subtitle: "Answer three questions and we will send you a catalog with the most suitable products for you.",
  bodyTitle: "What type of product are you considering?",
  actionsButtonsData: [
    {
      type: "submit" as const,
      form: "quiz-form",
      title: "Next step",
      onClick: () => {
        // Go to next page
      },
      disabled: false,
    },
  ],
  paginationData: { currentPage: 1, totalPages: 2 },
};

describe("QuizLayout tests", () => {
  test("QuizLayout snapshots", () => {
    render(
      <QuizLayout {...data}>
        {categories.map((category) => (
          <div key={category}>{category}</div>
        ))}
      </QuizLayout>
    );

    const quizComponent = screen.queryByTestId("quiz-layout");

    expect(quizComponent).toBeInTheDocument();
    expect(quizComponent).toMatchSnapshot();
  });
});
