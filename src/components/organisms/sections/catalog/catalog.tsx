import { IResponseError } from "../../../../models/app";
import { useFilterProductsQuery, useGetProducsCategoriesQuery } from "../../../../store/product";
import { Typography, TypographyVariant } from "../../../atoms";
import { LoadingBlock } from "../../../molecules";
import { ResponseErrorBlock } from "../../info-block/info-block";
import ProductFilter, { IProductFilterFormData } from "../../product-filter/product-filter";
import ProductList from "../../product-list/product-list";

import styles from "./catalog.module.css";

const Catalog = () => {
  const { products, productsFilter, isLoading, error, isAllDataFetched, fetchMoreData, updateProductsQueryData } =
    useFilterProductsQuery();
  const { data: categories, isLoading: filtersLoading, error: filtersError } = useGetProducsCategoriesQuery(null);

  const handleProductFilterFormSubmit = (formData: IProductFilterFormData) => {
    updateProductsQueryData({ category: formData.categery }, null);
  };

  const handleFormReset = () => {
    updateProductsQueryData(null, null);
  };

  const categoriesFilterData = categories ? categories.map((category) => ({ label: category, value: category })) : [];

  return (
    <div>
      <div className={styles.title}>
        <Typography variant={TypographyVariant.H2}>Catalog</Typography>
      </div>
      <div className={styles["content-container"]}>
        <div className={styles["filters-panel"]}>
          {filtersError && <ResponseErrorBlock response={filtersError as IResponseError} />}
          <ProductFilter
            categoriesFilterData={categoriesFilterData}
            currentCategory={productsFilter.category}
            handleFormSubmit={handleProductFilterFormSubmit}
            handleFormReset={handleFormReset}
            isLoading={filtersLoading}
          />
        </div>
        <div className={styles["products-list"]}>
          {error && <ResponseErrorBlock response={error as IResponseError} />}
          {isLoading ? (
            <LoadingBlock blockSize="sm">Product list loading...</LoadingBlock>
          ) : (
            <ProductList
              products={products}
              onShowMoreClick={fetchMoreData}
              isAllDataFetched={isAllDataFetched}
              isLoading={isLoading}
              listClassName={styles["product-list-grid"]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
