import { ReactNode } from "react";

import styles from "./checkbox.module.css";

type TCheckboxProps = {
  value: string | number;
  label: string | ReactNode;
};

const Checkbox = ({ value, label }: TCheckboxProps) => {
  return (
    <label className={styles["container"]}>
      {label}
      <input type="checkbox" value={value} />
      <span className={styles["checkmark"]}></span>
    </label>
  );
};

export default Checkbox;
