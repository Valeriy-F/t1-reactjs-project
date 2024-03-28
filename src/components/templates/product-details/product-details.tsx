import { TProductAware } from "../../../models/product";
import { ProductDetailsEditForm, ProductDetailsInfo, TProductEditFormData } from "../../organisms";

import ProductDetailsLayout from "./product-details-layout";

type TProductDetailesProps = TProductAware & {
  onFormSubmit: (formData: TProductEditFormData) => void;
  onEditButtonClick: () => void;
  isEditMode?: boolean;
};

const ProductDetails = ({ product, isEditMode = false, onFormSubmit, onEditButtonClick }: TProductDetailesProps) => {
  return (
    <ProductDetailsLayout product={product}>
      {isEditMode ? (
        <ProductDetailsEditForm product={product} onFormSubmit={onFormSubmit} />
      ) : (
        <ProductDetailsInfo product={product} onEditButtonClick={onEditButtonClick} />
      )}
    </ProductDetailsLayout>
  );
};

export default ProductDetails;
