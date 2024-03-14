import Image, { TImageProps } from "../../atoms/Image/image";
import Typography, { ETypographyVariant } from "../../atoms/typography/typography";

import styles from "./product-list-item.module.css";

type TProductListItemProps = {
  title: string;
  price: string;
  imageData: TImageProps;
};

const ProductListItem = ({ title, price, imageData }: TProductListItemProps) => {
  return (
    <div className={styles.base}>
      <div>
        <Image {...imageData} />
      </div>
      <div>
        <Typography variant={ETypographyVariant.TEXT_BOLD}>{title}</Typography>
      </div>
      <div>
        <Typography variant={ETypographyVariant.TEXT_LG}>{price}</Typography>
      </div>
    </div>
  );
};

export default ProductListItem;

export { type TProductListItemProps };
