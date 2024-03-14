import Button from "../../atoms/button/button";
import Typography, { ETypographyVariant } from "../../atoms/typography/typography";
import CategoryFilter from "../../molecules/category-filter/category-filter";

import styles from "./product-filter.module.css";

const ProductFilter = () => {
  return (
    <div className={styles.container}>
      <div>
        <Typography variant={ETypographyVariant.H3}>Selection by parameters</Typography>
      </div>
      <div className={styles["filter-container"]}>
        <Typography variant={ETypographyVariant.TEXT_BOLD}>Category</Typography>
        <CategoryFilter
          filters={[
            { label: "Filter 1", value: "filter_1" },
            { label: "Filter 2", value: "filter_2" },
            { label: "Filter 3", value: "filter_3" },
            { label: "Filter 4", value: "filter_4" },
            { label: "Filter 5", value: "filter_5" },
            { label: "Filter 6", value: "filter_6" },
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
