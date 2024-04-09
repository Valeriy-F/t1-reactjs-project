import { Rating } from "react-simple-star-rating";

import { TProductAware } from "../../../../models/product";
import { ProductDetailsItem } from "../..";

import styles from "./product-rating.module.css";

type TProductRatingProps = TProductAware;

const ProductRating = ({ product: { rating } }: TProductRatingProps) => {
  return (
    <ProductDetailsItem
      name="Raiting"
      value={
        <Rating
          initialValue={rating}
          size={25}
          fillClassName={styles["rating-fill-color"]}
          readonly={true}
          allowFraction={true}
          allowTitleTag={false}
        />
      }
    />
  );
};

export default ProductRating;
