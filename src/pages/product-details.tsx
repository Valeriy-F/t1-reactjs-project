import { useState } from "react";
import { useParams } from "react-router-dom";

import { Loading } from "../components/molecules";
import { TProductEditFormData } from "../components/organisms";
import { InfoTemplate, ProductDetailsTemplate, ResponseErrorTemplate } from "../components/templates";
import { IResponseError } from "../models/app";
import { IProduct } from "../models/product";
import { useGetProductQuery, usePutProductMutation } from "../store/product";

const ProductDetails = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const { id } = useParams();

  const { data: product, isLoading, isError, error } = useGetProductQuery(id as string);

  const [
    updateProduct,
    { data: updatedProduct, isLoading: isUpdateLoading, isError: isUpdateError, error: updateError },
  ] = usePutProductMutation();

  const getTemplate = (product: IProduct) => (
    <div>
      <ProductDetailsTemplate
        product={product}
        isEditMode={isEditMode}
        onFormSubmit={(formData: TProductEditFormData) => {
          updateProduct({ ...product, ...formData });
          setIsEditMode(false);
        }}
        onEditButtonClick={() => {
          setIsEditMode(true);
        }}
      />
    </div>
  );

  if (isError) {
    return <ResponseErrorTemplate response={error as IResponseError} />;
  }

  if (isUpdateError) {
    return <ResponseErrorTemplate response={updateError as IResponseError} />;
  }

  if (isLoading || isUpdateLoading) {
    return (
      <InfoTemplate>
        <Loading text="Product details loading..." />
      </InfoTemplate>
    );
  }

  if (updatedProduct) {
    return getTemplate(updatedProduct);
  }

  if (product) {
    return getTemplate(product);
  }

  return <ResponseErrorTemplate response={{ status: 404, error: "Product not found" }} />;
};

export default ProductDetails;
