import { PropsWithChildren, useRef } from "react";

import { IconCross, Line, Typography, TypographyVariant } from "../../atoms";

import styles from "./accordion-item.module.css";

type TAccordionItemProps = PropsWithChildren & {
  title: string;
};

const AccordionItem = ({ title, children }: TAccordionItemProps) => {
  const contentBlockRef = useRef<HTMLDivElement>(null);

  const isContentBlockOpen = () => {
    return contentBlockRef.current && contentBlockRef.current.classList.contains(styles["open"]);
  };

  const toggleContentBlockClass = () => {
    if (!contentBlockRef.current) {
      return;
    }

    const contentBlockClassList = contentBlockRef.current.classList;

    if (contentBlockClassList.contains(styles["open"])) {
      contentBlockClassList.remove(styles["open"]);
      contentBlockClassList.add(styles["closed"]);
    } else if (contentBlockClassList.contains(styles["closed"])) {
      contentBlockClassList.remove(styles["closed"]);
      contentBlockClassList.add(styles["open"]);
    }
  };

  return (
    <>
      <div className={`${styles["content-container"]}`}>
        <div
          ref={contentBlockRef}
          className={`${styles["header"]} ${styles["closed"]}`}
          onClick={() => {
            toggleContentBlockClass();
          }}
        >
          <div>
            <Typography variant={TypographyVariant.TEXT_LG}>{title}</Typography>
          </div>
          <div>
            <button className={styles["toggle-button"]} aria-label={isContentBlockOpen() ? "Close" : "Open"}>
              <IconCross />
            </button>
          </div>
        </div>
        <div className={`${styles.content}`}>{children}</div>
      </div>
      <Line />
    </>
  );
};

export default AccordionItem;
