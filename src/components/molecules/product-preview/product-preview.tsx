import { Carousel } from "react-responsive-carousel";

import { TProductAware } from "../../../models/product";

import "react-responsive-carousel/lib/styles/carousel.min.css";

type TProductPreviewProps = TProductAware;

const ProductPreview = ({ product }: TProductPreviewProps) => {
  return (
    <Carousel ariaLabel={product.description} showIndicators={false} showStatus={false}>
      {product.images.map((image) => (
        <div key={image}>
          <img src={image} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductPreview;
