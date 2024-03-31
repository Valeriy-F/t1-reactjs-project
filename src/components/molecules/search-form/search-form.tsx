import { useState } from "react";

import { Button, InputText } from "../../atoms";

import styles from "./search-form.module.css";

interface ISearchFormData {
  inputValue: string;
}

type TSearchFormProps = {
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  onFormSubmit?: (formData: ISearchFormData) => void;
  onInputValueChange?: (inputValue: string) => void;
};

const SearchForm = ({ size = "md", onFormSubmit, onInputValueChange }: TSearchFormProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        onFormSubmit && onFormSubmit({ inputValue });
      }}
    >
      <div className={styles["container"]}>
        <div className={styles["input-container"]}>
          <InputText
            placeholder="Search by title"
            value={inputValue}
            size={size}
            onChange={(e) => {
              const value = e.target.value;

              setInputValue(value);

              onInputValueChange && onInputValueChange(value);
            }}
          />
        </div>
        <div className={styles["button-container"]}>
          <Button type="submit" color="secondary" size={size} className={styles["search-button"]}>
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

export { type ISearchFormData, type TSearchFormProps };
