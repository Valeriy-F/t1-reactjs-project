import Button from "../../atoms/button/button";
import Typography, { ETypographyVariant } from "../../atoms/typography/typography";
import CategoryFilter from "../../molecules/category-filter/category-filter";

import styles from "./product-filter.module.css";

const ProductFilter = () => {
  return (
    <div className={styles.container}>
      <div>
        <Typography variant={ETypographyVariant.H3}>Selection</Typography>
        <Typography variant={ETypographyVariant.H3}>by parameters</Typography>
      </div>
      <div className={styles["filter-container"]}>
        <Typography variant={ETypographyVariant.TEXT_BOLD}>Category</Typography>
        <CategoryFilter
          filters={[
            { label: "smartphones", value: "filter_1" },
            { label: "laptops", value: "filter_2" },
            { label: "sneakers", value: "filter_3" },
            { label: "sneakers", value: "filter_4" },
            { label: "sneakers", value: "filter_5" },
            { label: "sneakers", value: "filter_6" },
            { label: "sneakers", value: "filter_7" },
            { label: "sneakers", value: "filter_8" },
          ]}
        />
      </div>
      <div className={styles.actions}>
        <Button size="lg">Apply</Button>
        <Button variant="link" color="primary-transparent">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ProductFilter;
