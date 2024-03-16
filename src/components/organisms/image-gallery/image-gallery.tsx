import { ReactElement } from "react";

import ImageGalleryItem, { TImageGalleryItemProps } from "../../molecules/image-gallery-item/image-gallery-item";

import styles from "./image-gallery.module.css";

type TImageGalleryProps = {
  imagesData: TImageGalleryItemProps[];
  settings?: { gridCoumnsQuantity?: number };
};

const ImageGallery = ({ imagesData = [], settings = {} }: TImageGalleryProps) => {
  const gridColQty = settings.gridCoumnsQuantity || 3;
  const columns: ReactElement[][] = [];

  let currentColumn = 1;

  imagesData.forEach((imageData, imageIndex) => {
    const columnIndex = currentColumn - 1;

    if (columns[columnIndex] === undefined) {
      columns.push([]);
    }

    columns[columnIndex].push(
      <div key={`row-${imageIndex + 1}`} className={styles["grid__cell"]}>
        <ImageGalleryItem {...imageData} />
      </div>
    );

    currentColumn = currentColumn < gridColQty ? currentColumn + 1 : 1;
  });

  return (
    <div className={styles["content-container"]}>
      <div className={styles["grid"]}>
        {columns.map((column, index) => {
          const coulmnClass = index % 2 === 0 ? styles["grid__column-odd"] : styles["grid__column-even"];

          return (
            <div key={`column-${index}`} className={coulmnClass}>
              {column.map((image) => image)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;

export { type TImageGalleryProps };
