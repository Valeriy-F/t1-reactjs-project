import { ReactNode } from "react";

import { Line } from "../../atoms";

import AccordionItem from "./accordion-item";

type TAccordionContentItem = { id: string; title: string; content: ReactNode };

type TAccordionProps = {
  contents: TAccordionContentItem[];
};

const Accordion = ({ contents }: TAccordionProps) => {
  return (
    <div>
      <Line />
      {contents.map(({ id, title, content }) => (
        <AccordionItem key={id} title={title}>
          {content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;

export { type TAccordionContentItem };
