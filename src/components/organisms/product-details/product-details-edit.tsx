import { ChangeEventHandler, FormEventHandler, useState } from "react";

import { IProduct, TProductAware } from "../../../models/product";
import { Button, InputMoney, InputNumber, InputPercentages, InputText, TextArea } from "../../atoms";
import {
  ProductDetailsActionsButtonsBlock,
  ProductDetailsDiscount,
  ProductDetailsGroup,
  ProductDetailsItem,
  ProductDetailsRating,
} from "../../molecules";

type TProductEditFormData = Pick<
  IProduct,
  "price" | "discountPercentage" | "stock" | "brand" | "category" | "description"
>;

type TProductEditFormProps = TProductAware & {
  onFormSubmit: (formData: TProductEditFormData) => void;
};

const ProductDetailsEditForm = ({ product, onFormSubmit }: TProductEditFormProps) => {
  const [formData, setFormData] = useState<TProductEditFormData>({
    price: product.price,
    discountPercentage: product.discountPercentage,
    stock: product.stock,
    brand: product.brand,
    category: product.category,
    description: product.description,
  });

  const setFormElementData = (name: keyof TProductEditFormData, value: string | number) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onFormElementChaange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target;

    setFormElementData(name as keyof TProductEditFormData, value);
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <ProductDetailsGroup>
        <ProductDetailsRating product={product} />
        <ProductDetailsItem
          name="Base ptice ($)"
          value={
            <InputMoney
              name="price"
              value={formData.price}
              onChangeHandler={(value) => {
                setFormElementData("price", value);
              }}
            />
          }
          justifyItems="space-between"
        />
        <ProductDetailsItem
          name="Discount percentage (%)"
          value={
            <InputPercentages
              name="discountPercentage"
              value={formData.discountPercentage}
              onChangeHandler={(value) => {
                setFormElementData("discountPercentage", value);
              }}
            />
          }
          justifyItems="space-between"
        />
        <ProductDetailsDiscount price={formData.price} discountPercentage={formData.discountPercentage} />
        <ProductDetailsItem
          name="Stock"
          value={
            <InputNumber
              name="stock"
              value={formData.stock}
              onChangeHandler={(value) => {
                setFormElementData("stock", value);
              }}
            />
          }
          justifyItems="space-between"
        />
        <ProductDetailsItem
          name="Brand"
          value={<InputText name="brand" value={formData.brand} onChange={onFormElementChaange} />}
          justifyItems="space-between"
        />
        <ProductDetailsItem
          name="Category"
          value={<InputText name="category" value={formData.category} onChange={onFormElementChaange} />}
          justifyItems="space-between"
        />
        <ProductDetailsItem
          name="Description"
          value={<TextArea name="description" rows={5} onChange={onFormElementChaange} value={formData.description} />}
          justifyItems="space-between"
        />
        <ProductDetailsActionsButtonsBlock>
          <Button color="secondary" size="lg">
            Save
          </Button>
        </ProductDetailsActionsButtonsBlock>
      </ProductDetailsGroup>
    </form>
  );
};

export default ProductDetailsEditForm;

export { type TProductEditFormData };
