import { IResponseError } from "../../../models/app";
import { Typography, TypographyVariant } from "../../atoms";
import { LoadingBlock, SearchForm, TSearchFormProps } from "../../molecules";
import { ProductList, ResponseErrorBlock, TProductListProps } from "../../organisms";
import BaseTemplate from "../base-template/base-template";

import styles from "./product-list.module.css";

type TProductListTemplateProps = {
  productListData: TProductListProps;
  searchFormData: TSearchFormProps;
  isLoading?: boolean;
  error?: IResponseError;
};

const ProductListTemplate = ({
  error,
  productListData,
  searchFormData,
  isLoading = false,
}: TProductListTemplateProps) => {
  let content = <></>;

  if (error) {
    content = <ResponseErrorBlock response={error} />;
  } else if (productListData.products?.length) {
    content = <ProductList {...productListData} listClassName={styles["product-list-grid"]} />;
  } else if (!isLoading) {
    content = <Typography variant={TypographyVariant.TEXT_LG}>No results found</Typography>;
  } else {
    content = <LoadingBlock blockSize="sm">Product list loading...</LoadingBlock>;
  }

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
