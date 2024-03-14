import Button from "../../atoms/button/button";
import ProductListItem, { TProductListItemProps } from "../../molecules/product-list-item/product-list-item";

import styles from "./product-list.module.css";

type TProductListProps = {
  productData?: TProductListItemProps[];
};

const ProductList = ({ productData = [] }: TProductListProps) => {
  return (
    <div>
      <div className={styles.list}>
        {productData.map((product) => (
          <ProductListItem key={product.title} {...product} />
        ))}
      </div>
      <div className={styles.actions}>
        <Button color="secondary" size="lg">
          Show more
        </Button>
      </div>
    </div>
  );
};

export default ProductList;

export { type TProductListProps };
