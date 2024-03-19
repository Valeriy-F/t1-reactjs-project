import { useGetProducsCategoriesQuery, useSearchProductsQuery } from "../../../../store/product";
import { Typography, TypographyVariant } from "../../../atoms";
import ProductFilter, { IProductFilterFormData } from "../../product-filter/product-filter";
import ProductList from "../../product-list/product-list";

import styles from "./catalog.module.css";

const Catalog = () => {
  const { products, isLoading, fetchMoreData, updateSelectFilter, resetSelectQuery, isAllDataFetched } =
    useSearchProductsQuery(3);
  const { data: categories } = useGetProducsCategoriesQuery(null);

  const handleProductFilterFormSubmit = (formData: IProductFilterFormData) => {
    updateSelectFilter({ category: formData.categery });
    resetSelectQuery();
  };

  const handleFormReset = () => {
    updateSelectFilter({ category: null });
    resetSelectQuery();
  };

  const categoriesFilterData = categories ? categories.map((category) => ({ label: category, value: category })) : [];

  return (
    <div>
      <div className={styles.title}>
        <Typography variant={TypographyVariant.H2}>Catalog</Typography>
      </div>
      <div className={styles["content-container"]}>
        <div>
          <ProductFilter
            categoriesFilterData={categoriesFilterData}
            handleFormSubmit={handleProductFilterFormSubmit}
            handleFormReset={handleFormReset}
          />
        </div>
        <div>
          {isLoading ? (
            "Loading..."
          ) : (
            <ProductList products={products} onShowMoreClick={fetchMoreData} isAllDataFetched={isAllDataFetched} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
