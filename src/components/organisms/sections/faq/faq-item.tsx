import { ReactNode } from "react";

import { Typography, TypographyVariant } from "../../../atoms";

type TFAQDataItem = { quastion: string; answer: ReactNode };

const FAQItem = ({ quastion, answer }: TFAQDataItem) => {
  return (
    <div>
      <div>
        <Typography variant={TypographyVariant.TEXT_LG}>{quastion}</Typography>
      </div>
      <div>
        <Typography variant={TypographyVariant.TEXT_BOLD} color="primary-light">
          {answer}
        </Typography>
      </div>
    </div>
  );
};

export default FAQItem;

export { type TFAQDataItem };
