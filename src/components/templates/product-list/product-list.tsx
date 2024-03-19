import { ProductList, TProductListProps } from "../../organisms";
import BaseLayout from "../base-template/base-template";

type TProductListTemplateProps = {
  productListData: TProductListProps;
  isLoading?: boolean;
};

const ProductListTemplate = ({ isLoading = false, productListData }: TProductListTemplateProps) => {
  const content = isLoading ? "Loading..." : <ProductList {...productListData} />;

  return (
    <BaseLayout>
      <section>{content}</section>
    </BaseLayout>
  );
};

export default ProductListTemplate;
