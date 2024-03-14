import { useEffect, useState } from "react";

import Typography, { ETypographyVariant } from "../../atoms/typography/typography";
import { TProductListItemProps } from "../../molecules/product-list-item/product-list-item";
import ProductFilter from "../product-filter/product-filter";
import ProductList from "../product-list/product-list";

import styles from "./catalog.module.css";

const fetchProducts = async (quantity: number) => {
  const products: TProductListItemProps[] = [];

  for (let i = 1; i <= quantity; i++) {
    const title = `Stinky sneakers ${i}`;

    products.push({
      title,
      price: `${i * 10} $`,
      imageData: {
        src: "images/product@4x.jpg",
        alt: title,
        srcSetData: {
          xs: "images/product@1x.jpg",
          sm: "images/product@1.5x.jpg",
          md: "images/product@2x.jpg",
          lg: "images/product@3x.jpg",
        },
      },
    });
  }

  return products;
};

const Catalog = () => {
  const [products, setProducts] = useState<TProductListItemProps[]>([]);

  useEffect(() => {
    fetchProducts(5).then(setProducts).catch(console.log);
  }, []);

  return (
    <div className="container">
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
