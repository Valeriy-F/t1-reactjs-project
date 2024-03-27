import { useGetProductsByCategoriesQuery } from "../../../../store/product";
import { Loading } from "../../../molecules";
import ProductList from "../../product-list/product-list";

import { TQuizPageProps } from "./quiz";
import QuizLayout from "./quiz-layout";

import styles from "./quiz-page-2.module.css";

type TQuizPage2Props = TQuizPageProps & {
  categories: string[];
  onChangeSelectionButtonClick: () => void;
};

const QuizPage2 = ({ paginationData, onChangeSelectionButtonClick, categories = [] }: TQuizPage2Props) => {
  const { data: products, isLoading } = useGetProductsByCategoriesQuery({
    categories,
    queryParams: {
      sorting: {
        sortingData: [
          { sortBy: "rating", sortDirection: "DESC", sortStrategy: "number" },
          { sortBy: "title", sortDirection: "ASC", sortStrategy: "string" },
        ],
        limit: 3,
      },
    },
  });

  return (
    <QuizLayout
      title="Your selection is ready!"
      paginationData={paginationData}
      actionsButtonsData={[{ title: "Change selection", onClick: onChangeSelectionButtonClick }]}
    >
      <div className={styles["product-list-container"]}>
        {isLoading ? (
          <Loading text="Products loading..." />
        ) : (
          <ProductList products={products} listClassName={styles["product-list-grid"]} />
        )}
      </div>
    </QuizLayout>
  );
};

export default QuizPage2;
