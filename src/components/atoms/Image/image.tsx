import { ImgHTMLAttributes } from "react";

type TImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  srcSetData?: Partial<{
    xs: string;
    sm: string;
    md: string;
    lg: string;
  }>;
};

const sizeToMediaQueryMapping = {
  xs: "(max-width: 575px)",
  sm: "(max-width: 767px)",
  md: "(max-width: 991px)",
  lg: "(max-width: 1199px)",
};

const Image = ({ srcSetData = {}, ...imagProps }: TImageProps) => {
  return (
    <picture>
      {Object.entries(srcSetData).map(([size, srcSet]) => (
        <source
          key={size}
          media={sizeToMediaQueryMapping[size as keyof typeof sizeToMediaQueryMapping]}
          srcSet={srcSet}
        />
      ))}
      <img {...imagProps} />
    </picture>
  );
};

export default Image;

export { type TImageProps };
