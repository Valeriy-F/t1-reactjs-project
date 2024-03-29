import { useEffect, useState } from "react";

import { Typography, TypographyVariant } from "../../../atoms";
import ImageGallery, { TImageGalleryProps } from "../../image-gallery/image-gallery";

import styles from "./team.module.css";

type TImages = TImageGalleryProps["imagesData"];

const generateImagesData = async (quantity: number) => {
  const imagesData: TImages = [];

  for (let i = 1; i <= quantity; i++) {
    const title = `Person ${i}`;
    const subtitle = `About Person ${i}`;

    imagesData.push({
      title,
      subtitle,
      src: `images/team-members/person_${i}@1x.webp`,
      alt: title,
      loading: "lazy",
      decoding: "async",
      srcSetData: {
        xl: `images/team-members/person_${i}@4x.webp`,
        lg: `images/team-members/person_${i}@3x.webp`,
        md: `images/team-members/person_${i}@2x.webp`,
        sm: `images/team-members/person_${i}@1x.webp`,
      },
    });
  }

  return imagesData;
};

const Team = () => {
  const [imagesData, setImagesData] = useState<TImages>([]);

  useEffect(() => {
    generateImagesData(6).then(setImagesData);
  }, []);

  return (
    <div className={styles["content-container"]}>
      <div className={styles.title}>
        <Typography variant={TypographyVariant.H2} color="secondary">
          Our team
        </Typography>
      </div>
      <div className={styles.gallery}>
        <ImageGallery imagesData={imagesData} />
      </div>
    </div>
  );
};

export default Team;
