import { Carousel } from "react-responsive-carousel";

import { applyDiscount, intToLeadingZerosString } from "../../../app/app-utils";
import { IProduct } from "../../../models/product";
import { Typography, TypographyVariant } from "../../atoms";
import BaseTemplate from "../base-template/base-template";

import ProductDetailsItem from "./product-details-item";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./product-details.module.css";

type TProductDetailesProps = {
  product?: IProduct;
};

const ProductDetails = ({ product }: TProductDetailesProps) => {
  if (!product) {
    return <BaseTemplate></BaseTemplate>;
  }

  return (
    <BaseTemplate title={product.brand}>
      <div className={styles["product-details-container"]}>
        <div className={styles["product-details__preview"]}>
          <Carousel
            ariaLabel={product.description}
            showIndicators={false}
            showStatus={false}
            className={styles["preview-carousel"]}
          >
            {product.images.map((image) => (
              <div key={image}>
                <img src={image} />
              </div>
            ))}
          </Carousel>
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
          <div className={styles["info__items"]}>
            <ProductDetailsItem name="Raiting" value={<div>{product.rating} of stars</div>} />
            <ProductDetailsItem name="Base ptice" value={`${product.price}$`} />
            <ProductDetailsItem name="Discount percentage" value={`${product.discountPercentage}%`} />
            <ProductDetailsItem
              name="Discount price"
              value={`${applyDiscount(product.price, product.discountPercentage)}$`}
            />
            <ProductDetailsItem name="Stock" value={product.stock} />
            <ProductDetailsItem name="Category" value={product.category} />
            <ProductDetailsItem name="Description" value={product.description} />
          </div>
        </div>
      </div>
    </BaseTemplate>
  );
};

export default ProductDetails;
