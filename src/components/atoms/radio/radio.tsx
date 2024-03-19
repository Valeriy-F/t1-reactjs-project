import { InputHTMLAttributes, ReactNode } from "react";

import styles from "./radio.module.css";

type TRadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string | ReactNode;
};

const Radio = ({ label, defaultValue = "", defaultChecked = false, ...inputProps }: TRadioProps) => {
  return (
    <label className={styles["container"]}>
      {label}
      <input type="radio" value={defaultValue} checked={defaultChecked} {...inputProps} />
      <span className={styles["checkmark"]}></span>
    </label>
  );
};
export default Radio;
