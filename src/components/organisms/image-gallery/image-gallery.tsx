import { ReactElement } from "react";

import ImageGalleryItem, { TImageGalleryItemProps } from "./image-gallery-item";

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
          return (
            <div key={`column-${index}`} className={styles["grid__column"]}>
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
