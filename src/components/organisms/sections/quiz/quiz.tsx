import { ReactElement, useEffect, useState } from "react";

import { TypographyVariant } from "../../../atoms";
import Button from "../../../atoms/button/button";
import Checkbox from "../../../atoms/checkbox/checkbox";
import Line from "../../../atoms/line/line";
import Typography, { ETypographyVariant } from "../../../atoms/typography/typography";

import styles from "./quiz.module.css";

type TQuizChoice = {
  label: string | ReactElement;
  value: string;
};

const fetchQuizChoiceList = async (limit: number) => {
  const choiceList: TQuizChoice[] = [];

  for (let i = 1; i <= limit; i++) {
    choiceList.push({
      label: <Typography variant={ETypographyVariant.TEXT_BOLD}>{`sneakers`}</Typography>,
      value: `sneakers_${i}`,
    });
  }

  return choiceList;
};

const Quiz = () => {
  const [choices, setChoices] = useState<TQuizChoice[]>([]);

  useEffect(() => {
    fetchQuizChoiceList(22).then(setChoices).catch(console.log);
  }, []);

  return (
    <div className={styles["content-container"]}>
      <div className={styles.header}>
        <div>
          <Typography variant={ETypographyVariant.H2}>We will select the perfect product for you</Typography>
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
          <Typography variant={ETypographyVariant.H3}>What type of product are you considering?</Typography>
        </div>
        <div className={styles["choice-list"]}>
          {choices.map(({ label, value }) => (
            <div key={value}>
              <Checkbox value={value} label={label} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles["footer__border-top"]}>
          <Line color="primary-light" />
        </div>
        <div>
          <Typography variant={ETypographyVariant.TEXT_BOLD} color="primary-light">
            1 of 2
          </Typography>
        </div>
        <div className={styles["footer__actions"]}>
          <Button color="primary-transparent">Next step</Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
