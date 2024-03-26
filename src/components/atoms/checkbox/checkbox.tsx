import { InputHTMLAttributes, ReactNode } from "react";

import styles from "./checkbox.module.css";

type TCheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  value: string | number;
  label: string | ReactNode;
};

const Checkbox = ({ value, label, ...inputProps }: TCheckboxProps) => {
  return (
    <label className={styles["container"]}>
      {label}
      <input type="checkbox" value={value} {...inputProps} />
      <span className={styles["checkmark"]}></span>
    </label>
  );
};

export default Checkbox;
