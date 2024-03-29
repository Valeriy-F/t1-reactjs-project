import { TProductAware } from "../../../models/product";
import { ProductDetailsEditForm, TProductEditFormData } from "../../organisms";

import ProductDetailsLayout from "./product-details-layout";

type TProductDetailesProps = TProductAware & {
  onFormSubmit: (formData: TProductEditFormData) => void;
};

const ProductDetailsEdit = ({ product, onFormSubmit }: TProductDetailesProps) => {
  return (
    <ProductDetailsLayout product={product}>
      <ProductDetailsEditForm product={product} onFormSubmit={onFormSubmit} />
    </ProductDetailsLayout>
  );
};

export default ProductDetailsEdit;
