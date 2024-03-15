import { ImgHTMLAttributes } from "react";

type TImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  srcSetData?: Partial<{
    sm: string;
    md: string;
    lg: string;
    xl: string;
  }>;
};

const sizeToMediaQueryMapping = {
  sm: "(min-width: 575px)",
  md: "(min-width: 767px)",
  lg: "(min-width: 991px)",
  xl: "(min-width: 1199px)",
};

const Image = ({ srcSetData = {}, ...imagProps }: TImageProps) => {
  return (
    <picture>
      {Object.entries(srcSetData).map(([size, srcSet]) => (
        <source
          key={size}
          srcSet={srcSet}
          media={sizeToMediaQueryMapping[size as keyof typeof sizeToMediaQueryMapping]}
        />
      ))}
      <img {...imagProps} />
    </picture>
  );
};

export default Image;

export { type TImageProps };
