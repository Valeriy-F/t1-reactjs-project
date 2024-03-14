import Typography, { ETypographyVariant } from "../../atoms/typography/typography";

import styles from "./category-filter.module.css";

type TCategoryFilterProps = {
  filters?: { label: string; value: string | number }[];
};

const CategoryFilter = ({ filters = [] }: TCategoryFilterProps) => {
  return (
    <div className={styles.container}>
      {filters.map(({ value, label }) => (
        <div key={value} className={styles["filter-item"]}>
          <input type="radio" value={value} id={value as string} />
          <label htmlFor={value as string}>
            <Typography variant={ETypographyVariant.TEXT_BOLD}>{label}</Typography>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
