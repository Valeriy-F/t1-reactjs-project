import { ChangeEventHandler, InputHTMLAttributes } from "react";

import { parseNumber } from "../../../app/app-utils";

import styles from "./input.module.css";

type TInputTextProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: "sm" | "md" | "lg";
};

type TInputNumberProps = Omit<TInputTextProps, "type"> & {
  toFixedValue?: number;
  onChangeHandler?: (value: number) => void;
};

type TInputMoneyProps = TInputNumberProps;

type TInputPercentagesProps = Omit<TInputNumberProps, "min">;

const InputText = ({ className, size = "md", ...otherProps }: TInputTextProps) => {
  const styleSize = styles[`size-${size}`];

  className = className ? ` ${className}` : "";

  return <input className={`${styles["text-field"]} ${styleSize}${className}`} {...otherProps} />;
};

const InputNumber = ({
  toFixedValue = 0,
  step = 1,
  min = 0,
  onChange,
  onChangeHandler,
  ...otherProps
}: TInputNumberProps) => {
  const innerOnChange: ChangeEventHandler<HTMLInputElement> | undefined =
    onChange || onChangeHandler
      ? (e) => {
          onChange && onChange(e);
          onChangeHandler && onChangeHandler(parseNumber(e.target.value, toFixedValue));
        }
      : undefined;

  return <InputText type="number" step={step} min={min} onChange={innerOnChange} {...otherProps} />;
};

const InputMoney = ({ step = 0.01, toFixedValue = 2, ...otherProps }: TInputMoneyProps) => {
  return <InputNumber step={step} toFixedValue={toFixedValue} {...otherProps} />;
};

const InputPercentages = ({ step = 0.01, max = 100, toFixedValue = 2, ...otherProps }: TInputPercentagesProps) => {
  return <InputMoney step={step} min={0} max={max} toFixedValue={toFixedValue} {...otherProps} />;
};

export { InputMoney, InputNumber, InputPercentages, InputText };
