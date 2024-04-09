import { PropsWithChildren, useState } from "react";

import { IconCross, Line, Typography, TypographyVariant } from "../../atoms";

import styles from "./accordion-item.module.css";

type TAccordionItemProps = PropsWithChildren & {
  title: string;
};

const AccordionItem = ({ title, children }: TAccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`${styles["content-container"]}`}>
        <div
          className={`${styles["header"]} ${styles["closed"]}`}
          onClick={() => {
            toggle();
          }}
        >
          <div>
            <Typography variant={TypographyVariant.TEXT_LG}>{title}</Typography>
          </div>
          <div>
            <button
              className={`${styles["toggle-button"]} ${!isOpen && styles["button-open"]}`}
              aria-label={isOpen ? "Close" : "Open"}
            >
              <IconCross />
            </button>
          </div>
        </div>
        <div className={`${styles.content} ${isOpen && styles["content-open"]}`}>{children}</div>
      </div>
      <Line />
    </>
  );
};

export default AccordionItem;
