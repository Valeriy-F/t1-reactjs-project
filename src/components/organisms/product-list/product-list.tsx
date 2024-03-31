import { IProduct } from "../../../models/product";
import { Button } from "../../atoms/button/button";
import { Loading } from "../../molecules";

import ProductListItem from "./product-list-item";

import styles from "./product-list.module.css";

type TProductListProps = {
  products?: IProduct[];
  onShowMoreClick?: (productsQuantity: number) => void;
  isAllDataFetched?: boolean;
  isLoading?: boolean;
  listClassName?: string;
};

const ProductList = ({
  products = [],
  onShowMoreClick,
  listClassName,
  isAllDataFetched = false,
  isLoading = false,
}: TProductListProps) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.list}${listClassName ? ` ${listClassName}` : ""}`}>
        {products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
      {!isAllDataFetched && onShowMoreClick && (
        <div className={styles.actions}>
          <Button
            color="secondary"
            size="lg"
            onClick={() => {
              onShowMoreClick(products.length);
            }}
          >
            {isLoading ? (
              <Loading size="xs" contentPlacement="inline" color="tertiary">
                Loading...
              </Loading>
            ) : (
              "Show more"
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductList;

export { type TProductListProps };
