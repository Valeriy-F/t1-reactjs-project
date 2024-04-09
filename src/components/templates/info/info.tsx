import { InfoBlock, ResponseErrorBlock, TInfoBlockProps, TResponseErrorBlockProps } from "../../organisms";
import BaseTemplate from "../base-template/base-template";

import styles from "./info.module.css";

type TInfoTemplateProps = TInfoBlockProps;

type TErrorResponseProps = TResponseErrorBlockProps;

const Info = ({ children, ...otherInfoBlockProps }: TInfoTemplateProps) => {
  return (
    <BaseTemplate>
      <div className={`${styles["content-container"]}`}>
        <InfoBlock {...otherInfoBlockProps}>{children}</InfoBlock>
      </div>
    </BaseTemplate>
  );
};

const ResponseError = (props: TErrorResponseProps) => {
  return (
    <BaseTemplate>
      <div className={`${styles["content-container"]}`}>
        <ResponseErrorBlock {...props} />
      </div>
    </BaseTemplate>
  );
};

export { Info, ResponseError };
