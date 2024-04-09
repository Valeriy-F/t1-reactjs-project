import { applyDiscount } from "../../../app/app-utils";

import ProductDetailsItem from "./product-details-item/product-details-item";

type TProductDiscountProps = {
  price: number;
  discountPercentage: number;
};

const ProductDiscount = ({ price, discountPercentage }: TProductDiscountProps) => {
  return <ProductDetailsItem name="Discount price" value={`${applyDiscount(price, discountPercentage)}$`} />;
};

export default ProductDiscount;
