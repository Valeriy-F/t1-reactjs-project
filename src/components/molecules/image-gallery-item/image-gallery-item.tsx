import Image, { TImageProps } from "../../atoms/Image/image";
import Overlay from "../../atoms/overlay/overlay";
import Typography, { ETypographyVariant } from "../../atoms/typography/typography";

import styles from "./image-gallery-item.module.css";

type TImageGalleryItemProps = TImageProps & {
  title?: string;
  subtitle?: string;
};

const ImageGalleryItem = ({ title, subtitle, ...imageProps }: TImageGalleryItemProps) => {
  const imageInfo = (title || subtitle) && (
    <Overlay className={styles["image-overlay"]}>
      <div className={styles["image-info"]}>
        {title && (
          <div className={styles["image-title"]}>
            <Typography variant={ETypographyVariant.TEXT_XL_BOLD} color="secondary">
              {title}
            </Typography>
          </div>
        )}
        {subtitle && (
          <div className={styles["image-subtitle"]}>
            <Typography variant={ETypographyVariant.TEXT_BOLD} color="secondary">
              {subtitle}
            </Typography>
          </div>
        )}
      </div>
    </Overlay>
  );

  return (
    <div className={styles["image-container"]}>
      {imageInfo}
      <Image className={styles["image"]} {...imageProps} />
    </div>
  );
};

export default ImageGalleryItem;

export { type TImageGalleryItemProps };
