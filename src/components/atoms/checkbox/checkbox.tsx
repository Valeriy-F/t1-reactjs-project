import { ReactElement } from "react";

import styles from "./checkbox.module.css";

type TCheckboxProps = {
  value: string | number;
  label: string | ReactElement;
  id?: string;
};

const Checkbox = ({ value, label, id }: TCheckboxProps) => {
  id = id || (value as string);

  //   return (
  //     <>
  //       <input type="checkbox" value={value} id={id} className={styles["native-checkbox"]} />
  //       <label htmlFor={id} className="label">
  //         {label}
  //       </label>
  //     </>
  //   );

  return (
    <label className={styles["container"]}>
      {label}
      <input type="checkbox" />
      <span className={styles["checkmark"]}></span>
    </label>
  );
};

export default Checkbox;
