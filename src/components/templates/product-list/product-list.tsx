import { Loading, SearchForm, TSearchFormProps } from "../../molecules";
import { ProductList, TProductListProps } from "../../organisms";
import BaseTemplate from "../base-template/base-template";

import styles from "./product-list.module.css";

type TProductListTemplateProps = {
  productListData: TProductListProps;
  searchFormData: TSearchFormProps;
  isLoading?: boolean;
};

const ProductListTemplate = ({ isLoading = false, productListData, searchFormData }: TProductListTemplateProps) => {
  const content = isLoading ? (
    <Loading text="Product list loading..." />
  ) : (
    <ProductList {...productListData} listClassName={styles["product-list-grid"]} />
  );

  return (
    <BaseTemplate title="All Products">
      <div className={styles["search-form-container"]}>
        <SearchForm {...searchFormData} />
      </div>
      <div className={styles["product-list-container"]}>{content}</div>
    </BaseTemplate>
  );
};

export default ProductListTemplate;

export { type TProductListTemplateProps };
