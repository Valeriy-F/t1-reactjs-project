import { FormEventHandler, useState } from "react";

import { Button, Typography, TypographyVariant } from "../../atoms";
import { LoadingBlock } from "../../molecules";
import CategoryFilter, { TCategoryFilterProps } from "../../molecules/category-filter/category-filter";

import styles from "./product-filter.module.css";

interface IProductFilterFormData {
  categery: string | null;
}
type ICategoriesFilterData = TCategoryFilterProps["filters"];

type TProductFilter = {
  categoriesFilterData: ICategoriesFilterData;
  currentCategory?: string | null;
  handleFormSubmit?: (formData: IProductFilterFormData) => void;
  handleFormReset?: () => void;
  isLoading?: boolean;
};

const ProductFilter = ({
  handleFormSubmit,
  handleFormReset,
  categoriesFilterData = [],
  currentCategory = null,
  isLoading = false,
}: TProductFilter) => {
  const [checkedCategory, setCheckedCategory] = useState<string | null>(currentCategory);
  const onFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!handleFormSubmit) {
      return;
    }

    const form = e.currentTarget;
    const formData: IProductFilterFormData = {
      categery: checkedCategory && form[checkedCategory] ? form[checkedCategory].value : null,
    };

    handleFormSubmit(formData);
  };

  const onFormReset = () => {
    setCheckedCategory(null);

    handleFormReset && handleFormReset();
  };

  return (
    <div className={styles.container}>
      <div>
        <Typography variant={TypographyVariant.H3}>Selection by parameters</Typography>
      </div>
      {isLoading && <LoadingBlock blockSize="sm">Filters loading...</LoadingBlock>}
      {!isLoading && categoriesFilterData.length && (
        <form action="" onSubmit={onFormSubmit}>
          <div className={styles["filter-container"]}>
            <Typography variant={TypographyVariant.TEXT_BOLD}>Category</Typography>
            <CategoryFilter
              filters={categoriesFilterData}
              chackedValue={checkedCategory}
              onCheck={setCheckedCategory}
            />
          </div>
          <div className={styles.actions}>
            <Button type="submit" size="lg" disabled={!checkedCategory}>
              Apply
            </Button>
            <Button
              type="reset"
              variant="link"
              color="primary-transparent"
              onClick={onFormReset}
              disabled={!checkedCategory}
            >
              Reset
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProductFilter;

export { type IProductFilterFormData };
