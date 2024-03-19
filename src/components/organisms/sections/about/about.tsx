import { LogoCite, Typography, TypographyVariant } from "../../../atoms";

import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles["content-container"]}>
      <div className={styles.title}>
        <Typography variant={TypographyVariant.H2} color="secondary">
          About us
        </Typography>
      </div>
      <blockquote className={styles.subtitle}>
        <Typography variant={TypographyVariant.TEXT_BOLD} color="secondary">
          Every day a person has a choice what to spend his money on. Stores and websites offer an endless list of
          products.
        </Typography>
        <Typography variant={TypographyVariant.TEXT_BOLD} color="secondary">
          But we will help you make the right choice!
        </Typography>
      </blockquote>
      <cite className={styles.logo}>
        <LogoCite />
      </cite>
    </div>
  );
};

export default About;
