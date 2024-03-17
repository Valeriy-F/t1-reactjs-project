import { InsHTMLAttributes, ReactNode } from "react";

import styles from "./radio.module.css";

type TRadioProps = Omit<InsHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string | ReactNode;
};

const Radio = ({ label, defaultValue = "", defaultChecked = false, onChange }: TRadioProps) => {
  return (
    <label className={styles["container"]}>
      {label}
      <input type="radio" value={defaultValue} checked={defaultChecked} onChange={onChange} />
      <span className={styles["checkmark"]}></span>
    </label>
  );
};

export default Radio;
