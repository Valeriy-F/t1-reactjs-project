import { TProductAware } from "../../../models/product";
import { Button } from "../../atoms";
import {
  ProductDetailsActionsButtonsBlock,
  ProductDetailsDiscount,
  ProductDetailsGroup,
  ProductDetailsRating,
} from "../../molecules";
import ProductDetailsItem from "../../molecules/product-details/product-details-item/product-details-item";

import "react-responsive-carousel/lib/styles/carousel.min.css";

type TProductDetailesProps = TProductAware & {
  onEditButtonClick?: () => void;
};

const ProductDetailsInfo = ({ product, onEditButtonClick }: TProductDetailesProps) => {
  return (
    <ProductDetailsGroup>
      <ProductDetailsRating product={product} />
      <ProductDetailsItem name="Base ptice" value={`${product.price}$`} />
      <ProductDetailsItem name="Discount percentage" value={`${product.discountPercentage}%`} />
      <ProductDetailsDiscount price={product.price} discountPercentage={product.discountPercentage} />
      <ProductDetailsItem name="Stock" value={product.stock} />
      <ProductDetailsItem name="Brand" value={product.brand} />
      <ProductDetailsItem name="Category" value={product.category} />
      <ProductDetailsItem name="Description" value={product.description} />
      <ProductDetailsActionsButtonsBlock>
        <Button color="secondary" size="lg" onClick={onEditButtonClick}>
          Edit
        </Button>
      </ProductDetailsActionsButtonsBlock>
    </ProductDetailsGroup>
  );
};

export default ProductDetailsInfo;
