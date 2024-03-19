import { Radio, Typography, TypographyVariant } from "../../atoms";

import styles from "./category-filter.module.css";

type TCategoryFilterProps = {
  filters?: { label: string; value: string }[];
  chackedValue?: string | null;
  onCheck?: (value: string) => void;
};

const CategoryFilter = ({ filters = [], chackedValue, onCheck }: TCategoryFilterProps) => {
  return (
    <div className={styles.container}>
      {filters.map(({ value, label }) => {
        const isChecked = chackedValue ? chackedValue === value : false;

        return (
          <div key={value} className={`${styles["filter-item"]} ${isChecked && styles["checked"]}`}>
            <Radio
              name={value}
              label={<Typography variant={TypographyVariant.TEXT_BOLD}>{label}</Typography>}
              defaultValue={value}
              checked={isChecked}
              onChange={() => {
                onCheck && onCheck(value);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryFilter;

export { type TCategoryFilterProps };
