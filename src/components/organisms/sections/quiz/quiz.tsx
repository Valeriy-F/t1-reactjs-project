import { useState } from "react";

import { TQuizLayoutProps } from "./quiz-layout";
import QuizPage1, { IQuizFormData } from "./quiz-page-1";
import QuizPage2 from "./quiz-page-2";

type TQuizPageProps = Pick<TQuizLayoutProps, "paginationData">;

const Quiz = () => {
  const [chosenCategories, setChosenCategories] = useState<string[]>([]);
  const [quizStep, setQuizStep] = useState(1);

  const handleFormSubmit = (formData: IQuizFormData) => {
    setChosenCategories(formData.categories);
    setQuizStep(2);
  };

  if (quizStep === 2 && chosenCategories.length > 0) {
    return (
      <QuizPage2
        categories={chosenCategories}
        paginationData={{ currentPage: 2, totalPages: 2 }}
        onChangeSelectionButtonClick={() => {
          setQuizStep(1);
        }}
      />
    );
  }

  return (
    <QuizPage1
      defaultChousenCategories={chosenCategories}
      paginationData={{ currentPage: 1, totalPages: 2 }}
      onFormSubmit={handleFormSubmit}
    />
  );
};

export default Quiz;

export { type TQuizPageProps };
