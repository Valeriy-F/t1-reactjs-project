import { InputHTMLAttributes, ReactNode } from "react";

import styles from "./radio.module.css";

type TRadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string | ReactNode;
  isRadioVisible?: boolean;
};

const Radio = ({
  label,
  defaultValue = "",
  defaultChecked = false,
  isRadioVisible = true,
  className,
  ...inputProps
}: TRadioProps) => {
  const containerExtraClass = isRadioVisible ? ` ${styles["checkmark_visible"]}` : "";
  className = className ? ` ${className}` : "";

  return (
    <label className={`${styles["container"]}${containerExtraClass}`}>
      {label}
      <input
        type="radio"
        value={defaultValue}
        checked={defaultChecked}
        className={`${styles["input-radio"]}${className}`}
        {...inputProps}
      />
      {isRadioVisible && <span className={styles["checkmark"]}></span>}
    </label>
  );
};
export default Radio;
