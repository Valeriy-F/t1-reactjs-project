import styles from "./line.module.css";

type TLineProps = {
  color?: "primary" | "primary-light" | "secondary" | "secondary-alpha50";
  thickness?: 1 | 2 | 3;
};

const Line = ({ color = "primary", thickness = 1 }: TLineProps) => {
  const styleColor = styles[`color-${color}`];
  const styleThickness = styles[`thickness-${thickness}`];

  return <div className={`${styles.border} ${styleColor} ${styleThickness}`}></div>;
};

export default Line;
