import { IProduct } from "../../../models/product";
import Button from "../../atoms/button/button";

import ProductListItem from "./product-list-item";

import styles from "./product-list.module.css";

type TProductListProps = {
  products?: IProduct[];
  onShowMoreClick?: () => void;
  isAllDataFetched?: boolean;
  isLoading?: boolean;
};

const ProductList = ({
  products = [],
  onShowMoreClick,
  isAllDataFetched = false,
  isLoading = false,
}: TProductListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {products?.map((product) => <ProductListItem key={product.id} product={product} />)}
      </div>
      <div className={styles.actions}>
        {!isAllDataFetched && (
          <Button
            color="secondary"
            size="lg"
            onClick={() => {
              onShowMoreClick && onShowMoreClick();
            }}
          >
            {isLoading ? "Loding..." : "Show more"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductList;

export { type TProductListProps };
