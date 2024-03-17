import { useEffect, useState } from "react";

import Typography, { ETypographyVariant } from "../../../atoms/typography/typography";
import { TProductListItemProps } from "../../../molecules/product-list-item/product-list-item";
import ProductFilter from "../../product-filter/product-filter";
import ProductList from "../../product-list/product-list";

import styles from "./catalog.module.css";

const fetchProducts = async (quantity: number) => {
  const products: TProductListItemProps[] = [];

  for (let i = 1; i <= quantity; i++) {
    const title = `Nike Air Force 1 '07 QS`;

    products.push({
      title,
      price: `110 $`,
      imageData: {
        src: "images/products/product@1x.webp",
        alt: title,
        srcSetData: {
          xl: "images/products/product@4x.webp",
          lg: "images/products/product@3x.webp",
          md: "images/products/product@2x.webp",
          sm: "images/products/product@1x.webp",
        },
      },
    });
  }

  return products;
};

const Catalog = () => {
  const [products, setProducts] = useState<TProductListItemProps[]>([]);

  useEffect(() => {
    fetchProducts(9).then(setProducts).catch(console.log);
  }, []);

  return (
    <div>
      <div className={styles.title}>
        <Typography variant={ETypographyVariant.H2}>Catalog</Typography>
      </div>
      <div className={styles["content-container"]}>
        <div>
          <ProductFilter />
        </div>
        <div>
          <ProductList productData={products} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
