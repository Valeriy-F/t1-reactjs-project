import { ButtonLink, Typography, TypographyVariant } from "../../../atoms";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles["content-container"]}>
      <div className={styles.title}>
        <Typography variant={TypographyVariant.H1} color="secondary">
          Any products from famous brands with worldwide delivery
        </Typography>
      </div>
      <div className={styles.subtitle}>
        <Typography variant={TypographyVariant.TEXT_BOLD} color="secondary">
          We sell smartphones, laptops, clothes, shoes and many other products at low prices
        </Typography>
      </div>
      <div className={styles.actions}>
        <ButtonLink href="/products" variant="button" color="secondary" size="lg" aria-label="Go to shopping">
          Go to shopping
        </ButtonLink>
      </div>
    </div>
  );
};

export default Hero;
