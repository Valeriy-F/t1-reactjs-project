import { useGetProducsCategoriesQuery } from "../../../../store/product";
import { Button, Checkbox, Line, Typography, TypographyVariant } from "../../../atoms";

import styles from "./quiz.module.css";

const Quiz = () => {
  const { data: categories, isLoading } = useGetProducsCategoriesQuery(null);

  return (
    <div className={styles["content-container"]}>
      <div className={styles.header}>
        <div>
          <Typography variant={TypographyVariant.H2}>We will select the perfect product for you</Typography>
        </div>
        <div>
          <Typography variant={TypographyVariant.TEXT_BOLD} color="primary-light">
            Answer three questions and we will send you a catalog with the most suitable products for you.
          </Typography>
          <Line color="primary-light" />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles["body__title"]}>
          <Typography variant={TypographyVariant.H3}>What type of product are you considering?</Typography>
        </div>
        {isLoading ? (
          "Categories loading..."
        ) : (
          <div className={styles["choice-list"]}>
            {categories?.map((categery) => (
              <div key={categery}>
                <Checkbox value={categery} label={categery} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.footer}>
        <div className={styles["footer__border-top"]}>
          <Line color="primary-light" />
        </div>
        <div className={styles["footer__content"]}>
          <div>
            <Typography variant={TypographyVariant.TEXT_BOLD} color="primary-light">
              1 of 2
            </Typography>
          </div>
          <div className={styles["footer__actions"]}>
            <Button color="primary-transparent">Next step</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
