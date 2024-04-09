import { PropsWithChildren } from "react";

import { intToLeadingZerosString } from "../../../app/app-utils";
import { TProductAware } from "../../../models/product";
import { Typography, TypographyVariant } from "../../atoms";
import { ProducPreview, ProductDetailsItem } from "../../molecules";
import BaseTemplate from "../base-template/base-template";

import styles from "./product-details-layout.module.css";

type TProductDetailesProps = PropsWithChildren & TProductAware;

const ProductDetailsLayout = ({ children, product }: TProductDetailesProps) => {
  return (
    <BaseTemplate title={product.title}>
      <div className={styles["product-details-container"]}>
        <div className={styles["product-details__preview"]}>
          <ProducPreview product={product} />
        </div>
        <div className={styles["product-details__info"]}>
          <div className={styles["info__title"]}>
            <div>
              <Typography variant={TypographyVariant.H3}>{product.title}</Typography>
            </div>
            <div>
              <ProductDetailsItem name="SKU ID" value={intToLeadingZerosString(product.id, 4)} />
            </div>
          </div>
          <div className={styles["info__items"]}>{children}</div>
        </div>
      </div>
    </BaseTemplate>
  );
};

export default ProductDetailsLayout;
