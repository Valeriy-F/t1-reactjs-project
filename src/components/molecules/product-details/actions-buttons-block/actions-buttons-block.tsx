import { PropsWithChildren } from "react";

import styles from "./actions-buttons-block.module.css";

type TActionsButtonsBlockProps = PropsWithChildren;

const ActionsButtonsBlock = ({ children }: TActionsButtonsBlockProps) => {
  return <div className={styles["content-container"]}>{children}</div>;
};

export default ActionsButtonsBlock;
