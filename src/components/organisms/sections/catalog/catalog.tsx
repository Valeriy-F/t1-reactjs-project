import { useFilterProductsQuery, useGetProducsCategoriesQuery } from "../../../../store/product";
import { Typography, TypographyVariant } from "../../../atoms";
import { Loading } from "../../../molecules";
import ProductFilter, { IProductFilterFormData } from "../../product-filter/product-filter";
import ProductList from "../../product-list/product-list";

import styles from "./catalog.module.css";

const Catalog = () => {
  const { products, productsFilter, isLoading, isAllDataFetched, fetchMoreData, updateProductsQueryData } =
    useFilterProductsQuery();
  const { data: categories, isLoading: filtersLoading } = useGetProducsCategoriesQuery(null);

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
          <ProductFilter
            categoriesFilterData={categoriesFilterData}
            currentCategory={productsFilter.category}
            handleFormSubmit={handleProductFilterFormSubmit}
            handleFormReset={handleFormReset}
            isLoading={filtersLoading}
          />
        </div>
        <div className={styles["products-list"]}>
          {isLoading ? (
            <Loading text="Product list loading..." />
          ) : (
            <ProductList
              products={products}
              onShowMoreClick={fetchMoreData}
              isAllDataFetched={isAllDataFetched}
              listClassName={styles["product-list-grid"]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
