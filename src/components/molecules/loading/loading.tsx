type TLoadingProps = {
  text: string;
};

import { Typography } from "../../atoms";

import styles from "./loading.module.css";

const Loading = ({ text }: TLoadingProps) => {
  return (
    <div className={styles["contetnt-container"]}>
      <Typography>{text}</Typography>
    </div>
  );
};

export default Loading;
