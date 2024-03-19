import { toKey } from "../../../../utils/string-util";
import { Typography, TypographyVariant } from "../../../atoms";
import Accordion from "../../accordion";

import styles from "./faq.module.css";

interface IFAQDataItem {
  quastion: string;
  answer: string;
}

type TFAQProps = {
  data: IFAQDataItem[];
};

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

const FAQ = ({ data }: TFAQProps) => {
  return (
    <div className={styles["content-container"]}>
      <div className={styles.title}>
        <Typography variant={TypographyVariant.H2}>FAQ</Typography>
      </div>
      <div className={styles.questions}>
        <Accordion contents={dataToAccordionContents(data)} />
      </div>
    </div>
  );
};

export default FAQ;

export { type TFAQProps };
