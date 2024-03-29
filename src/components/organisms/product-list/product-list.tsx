import { IProduct } from "../../../models/product";
import { Button } from "../../atoms/button/button";

import ProductListItem from "./product-list-item";

import styles from "./product-list.module.css";

type TProductListProps = {
  products?: IProduct[];
  onShowMoreClick?: () => void;
  isAllDataFetched?: boolean;
  listClassName?: string;
};

const ProductList = ({
  products = [],
  onShowMoreClick,
  listClassName,
  isAllDataFetched = false,
}: TProductListProps) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.list}${listClassName ? ` ${listClassName}` : ""}`}>
        {products?.map((product) => <ProductListItem key={product.id} product={product} />)}
      </div>
      {!isAllDataFetched && onShowMoreClick && (
        <div className={styles.actions}>
          <Button
            color="secondary"
            size="lg"
            onClick={() => {
              onShowMoreClick();
            }}
          >
            Show more
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductList;

export { type TProductListProps };
