import { toKey } from "../../../../app/app-utils";
import { Typography, TypographyVariant } from "../../../atoms";
import Accordion from "../../accordion";

import styles from "./faq.module.css";

interface IFAQDataItem {
  quastion: string;
  answer: string;
}

const faqSectionData = [
  { quastion: "Question 1", answer: "Long answer to the first question." },
  { quastion: "Question 2", answer: "Long answer to the second question." },
];

const dataToAccordionContents = (data: IFAQDataItem[]) => {
  return data.map(({ quastion, answer }) => ({
    id: toKey(quastion),
    title: quastion,
    content: (
      <Typography variant={TypographyVariant.TEXT_BOLD} color="primary-light">
        {answer}
      </Typography>
    ),
  }));
};

const FAQ = () => {
  return (
    <div className={styles["content-container"]}>
      <div className={styles.title}>
        <Typography variant={TypographyVariant.H2}>FAQ</Typography>
      </div>
      <div className={styles.questions}>
        <Accordion contents={dataToAccordionContents(faqSectionData)} />
      </div>
    </div>
  );
};

export default FAQ;
