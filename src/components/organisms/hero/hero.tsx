import Button from "../../atoms/button/button";
import Typography, { ETypographyVariant } from "../../atoms/typography/typography";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.title}>
          <Typography variant={ETypographyVariant.H1} color="secondary">
            Any products from famous brands with worldwide delivery
          </Typography>
        </div>
        <div className={styles.subtitle}>
          <Typography variant={ETypographyVariant.TEXT_BOLD} color="secondary">
            We sell smartphones, laptops, clothes, shoes and many other products at low prices
          </Typography>
        </div>
        <div className={styles.actions}>
          <Button color="secondary" size="lg" aria-label="Go to shopping">
            Go to shopping
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
