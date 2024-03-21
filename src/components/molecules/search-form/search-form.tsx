import { useState } from "react";

import { Button, Text } from "../../atoms";

import styles from "./search-form.module.css";

interface ISearchFormData {
  inputValue: string;
}

type TSearchFormProps = {
  size?: "sm" | "md" | "lg";
  onFormSubmit?: (formData: ISearchFormData) => void;
  onInputValueChange?: (inputValue: string) => void;
};

const SearchForm = ({ size = "md", onFormSubmit, onInputValueChange }: TSearchFormProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (inputValue === "") {
          return;
        }

        onFormSubmit && onFormSubmit({ inputValue });
      }}
    >
      <div className={styles["container"]}>
        <div>
          <Text
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
        <div>
          <Button type="submit" color="secondary" size={size}>
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

export { type ISearchFormData, type TSearchFormProps };
