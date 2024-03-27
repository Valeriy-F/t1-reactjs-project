import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { Button, Line, Typography, TypographyVariant } from "../../../atoms";

import styles from "./quiz-layout.module.css";

type TQuizLayoutProps = PropsWithChildren & {
  title?: string;
  subtitle?: string;
  bodyTitle?: string;
  paginationData?: { currentPage: number; totalPages: number };
  actionsButtonsData?: (ButtonHTMLAttributes<HTMLButtonElement> & { title: string; onClick?: () => void })[];
};

const QuizLayout = ({
  children,
  title,
  subtitle,
  bodyTitle,
  paginationData,
  actionsButtonsData = [],
}: TQuizLayoutProps) => {
  const actionsButtons = actionsButtonsData.map(({ title, onClick, type, form, disabled = false }) => {
    return (
      <Button key={title} color="primary-transparent" onClick={onClick} type={type} form={form} disabled={disabled}>
        {title}
      </Button>
    );
  });

  return (
    <div className={styles["content-container"]}>
      <div className={styles.header}>
        {title && (
          <div>
            <Typography variant={TypographyVariant.H2}>{title}</Typography>
          </div>
        )}
        <div className={styles.subtitle}>
          {subtitle && (
            <Typography variant={TypographyVariant.TEXT_BOLD} color="primary-light">
              {subtitle}
            </Typography>
          )}
        </div>
        <Line color="primary-light" />
      </div>
      <div className={styles.body}>
        {bodyTitle && (
          <div className={styles["body__title"]}>
            <Typography variant={TypographyVariant.H3}>{bodyTitle}</Typography>
          </div>
        )}
        {children}
      </div>
      <div className={styles.footer}>
        <div className={styles["footer__border-top"]}>
          <Line color="primary-light" />
        </div>
        <div className={styles["footer__content"]}>
          <div>
            {paginationData && (
              <Typography variant={TypographyVariant.TEXT_BOLD} color="primary-light">
                {`${paginationData.currentPage} of ${paginationData.totalPages}`}
              </Typography>
            )}
          </div>
          <div className={styles["footer__actions"]}>{actionsButtons}</div>
        </div>
      </div>
    </div>
  );
};

export default QuizLayout;

export { type TQuizLayoutProps };
