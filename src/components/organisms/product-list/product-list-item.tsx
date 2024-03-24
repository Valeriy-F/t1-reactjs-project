import { memo } from "react";
import { Link } from "react-router-dom";

import { IProduct } from "../../../models/product";
import { Image, Overlay, Typography, TypographyVariant } from "../../atoms";

import styles from "./product-list-item.module.css";

type TProductListItemProps = {
  product: IProduct;
};

const ProductListItem = ({ product }: TProductListItemProps) => {
  const imageData = {
    src: product.images.length ? product.images[0] : product.thumbnail,
    alt: product.title,
  };

  return (
    <div className={styles.container}>
      <Link to={`/products/${product.id}`}>
        <Overlay className={styles["overlay"]}>
          <Typography variant={TypographyVariant.TEXT_XL_BOLD} color="secondary">
            Show more details
          </Typography>
        </Overlay>
        <div className={styles["image-container"]}>
          <Image className={styles["product-image"]} {...imageData} />
        </div>
        <div className={styles.title}>
          <Typography variant={TypographyVariant.TEXT_BOLD}>{product.title}</Typography>
        </div>
        <div className={styles.price}>
          <Typography variant={TypographyVariant.TEXT_LG}>{product.price}</Typography>
        </div>
      </Link>
    </div>
  );
};

export default memo(ProductListItem, (prev, next) => prev.product.id === next.product.id);

export { type TProductListItemProps };
