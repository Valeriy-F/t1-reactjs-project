import { Typography, TypographyVariant } from "../../atoms";
import { SearchForm, TSearchFormProps } from "../../molecules";
import { ProductList, TProductListProps } from "../../organisms";
import BaseLayout from "../base-template/base-template";

import styles from "./product-list.module.css";

type TProductListTemplateProps = {
  productListData: TProductListProps;
  searchFormData: TSearchFormProps;
  isLoading?: boolean;
};

const ProductListTemplate = ({ isLoading = false, productListData, searchFormData }: TProductListTemplateProps) => {
  const content = isLoading ? "Loading..." : <ProductList {...productListData} />;

  return (
    <BaseLayout>
      <section>
        <div className={styles["content-container"]}>
          <div className={styles["title"]}>
            <Typography variant={TypographyVariant.H2}>All products</Typography>
          </div>
          <div className={styles["search-form-container"]}>
            <SearchForm {...searchFormData} />
          </div>
          <div className={styles["product-list-container"]}>{content}</div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default ProductListTemplate;

export { type TProductListTemplateProps };
