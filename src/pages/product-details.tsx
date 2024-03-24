import { useParams } from "react-router-dom";

import { Loading } from "../components/molecules";
import { ErrorTemplate, ProductDetailsTemplate } from "../components/templates";
import BaseTemplate from "../components/templates/base-template/base-template";
import { IResponseError } from "../models/app";
import { useGetProductQuery } from "../store/product";

const ProductDetails = () => {
  const { id } = useParams();

  const { data: product, isLoading, isError, error } = useGetProductQuery(id as string);

  const responseError = error as IResponseError;

  if (isError) {
    return <ErrorTemplate>{responseError.error}</ErrorTemplate>;
  }

  if (isLoading) {
    return (
      <BaseTemplate>
        <Loading text="Product details loading..." />
      </BaseTemplate>
    );
  }

  return <ProductDetailsTemplate product={product} />;
};

export default ProductDetails;
