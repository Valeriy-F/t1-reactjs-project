import { useState } from "react";

import { Radio, Typography } from "../../atoms";
import { ETypographyVariant } from "../../atoms/typography/typography";

import styles from "./category-filter.module.css";

type TCategoryFilterProps = {
  filters?: { label: string; value: string }[];
};

const CategoryFilter = ({ filters = [] }: TCategoryFilterProps) => {
  const [checkedCategory, setCheckedCategory] = useState<string>("");

  return (
    <div className={styles.container}>
      {filters.map(({ value, label }) => {
        const isChecked = checkedCategory === value;

        return (
          <div key={value} className={`${styles["filter-item"]} ${isChecked && styles["checked"]}`}>
            <Radio
              label={<Typography variant={ETypographyVariant.TEXT_BOLD}>{label}</Typography>}
              defaultValue={value}
              defaultChecked={isChecked}
              onChange={() => {
                setCheckedCategory(value);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
