import { useGetProductsByCategoriesQuery } from "../../../../store/product";
import { Loading } from "../../../molecules";
import ProductList from "../../product-list/product-list";

import { TQuizPageProps } from "./quiz";
import QuizLayout from "./quiz-layout";

type TQuizPage2Props = TQuizPageProps & {
  categories: string[];
  onChangeSelectionButtonClick: () => void;
};

const QuizPage2 = ({ paginationData, onChangeSelectionButtonClick, categories = [] }: TQuizPage2Props) => {
  const { data: products, isLoading } = useGetProductsByCategoriesQuery({ categories });

  return (
    <QuizLayout
      title="Your selection is ready!"
      paginationData={paginationData}
      actionsButtonsData={[{ title: "Change selection", onClick: onChangeSelectionButtonClick }]}
    >
      {isLoading ? <Loading text="Categories loading..." /> : <ProductList products={products} />}
    </QuizLayout>
  );
};

export default QuizPage2;
