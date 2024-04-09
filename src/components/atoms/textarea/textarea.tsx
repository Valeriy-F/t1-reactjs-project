import { TextareaHTMLAttributes } from "react";

import styles from "./textarea.module.css";

type TTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({ className, ...otherProps }: TTextAreaProps) => {
  className = className ? ` ${className}` : "";

  return <textarea className={`${styles["textara-field"]}${className}`} {...otherProps} />;
};

export default TextArea;
