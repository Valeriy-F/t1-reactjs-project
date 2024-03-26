import { ChangeEventHandler, FormEvent, useState } from "react";

import { useGetProducsCategoriesQuery } from "../../../../store/product";
import { Checkbox } from "../../../atoms";
import { Loading } from "../../../molecules";

import { TQuizPageProps } from "./quiz";
import QuizLayout from "./quiz-layout";

import styles from "./quiz-page-1.module.css";

interface IQuizFormData {
  categories: string[];
}

type TQuizPage1Props = TQuizPageProps & {
  defaultChousenCategories?: string[];
  onNextStepButtonClick?: () => void;
  onFormSubmit: (formData: IQuizFormData) => void;
};

const QuizPage1 = ({
  paginationData,
  onNextStepButtonClick,
  onFormSubmit,
  defaultChousenCategories = [],
}: TQuizPage1Props) => {
  const [chosenCategories, setChosenCategories] = useState<Set<string>>(new Set(defaultChousenCategories));
  const { data, isLoading } = useGetProducsCategoriesQuery(null);

  const categoryOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked && !chosenCategories.has(e.target.value)) {
      setChosenCategories((currentState) => new Set(currentState).add(e.target.value));

      return;
    }

    if (!e.target.checked && chosenCategories.has(e.target.value)) {
      setChosenCategories((currentState) => {
        const newState = new Set(currentState);

        newState.delete(e.target.value);

        return newState;
      });
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onFormSubmit && chosenCategories.size > 0 && onFormSubmit({ categories: Array.from(chosenCategories) });
  };

  return (
    <QuizLayout
      title="We will select the perfect product for you"
      subtitle="Answer three questions and we will send you a catalog with the most suitable products for you."
      bodyTitle="What type of product are you considering?"
      actionsButtonsData={[
        {
          type: "submit",
          form: "quiz-form",
          title: "Next step",
          onClick: onNextStepButtonClick,
          disabled: chosenCategories.size === 0,
        },
      ]}
      paginationData={paginationData}
    >
      <form id="quiz-form" onSubmit={handleFormSubmit}>
        {isLoading ? (
          <Loading text="Categories loading..." />
        ) : (
          <div className={styles["choice-list"]}>
            {data?.map((categery) => (
              <div key={categery}>
                <Checkbox
                  value={categery}
                  label={categery}
                  checked={chosenCategories.has(categery)}
                  onChange={categoryOnChange}
                />
              </div>
            ))}
          </div>
        )}
      </form>
    </QuizLayout>
  );
};

export default QuizPage1;

export { type IQuizFormData };
