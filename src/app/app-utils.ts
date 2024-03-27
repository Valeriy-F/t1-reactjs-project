import { ISorting } from "../models/app";

const debounce = <TI, TO>(func: (...args: TI[]) => TO, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>;

  return function (...args: TI[]) {
    clearTimeout(timeout);

    timeout = setTimeout(() => func(...args), delay);
  };
};

const toKey = (value: string) => value.replaceAll(" ", "_").toLocaleLowerCase();

const intToLeadingZerosString = (value: number, resultStringLength: number) => {
  return value.toString().padStart(resultStringLength, "0");
};

const applyDiscount = (price: number, percentages: number) => {
  return (price * ((100 - percentages) / 100)).toFixed(2);
};

const applySorting = <TData extends object, TSorting extends ISorting<Partial<keyof TData>>>(
  data: TData[],
  { sortingData, limit }: TSorting
) => {
  const sortedResult = data.sort((item1, item2) => {
    let sortingResult = 0;

    for (const sorting of sortingData) {
      const { sortBy: propertyName, sortDirection, sortStrategy } = sorting;

      const compareResult =
        sortDirection === "ASC"
          ? compare(item1[propertyName], item2[propertyName], sortStrategy)
          : compare(item2[propertyName], item1[propertyName], sortStrategy);

      sortingResult += compareResult;

      if (compareResult !== 0) {
        // We've already decided to swap values and don't need to compare other properties any more.
        break;
      }
    }

    return sortingResult;
  });

  return limit > 0 ? sortedResult.slice(0, limit) : sortedResult;
};

const compare = (value1: unknown, value2: unknown, compareStrategy: "number" | "string"): number => {
  let compareResult = 0;

  switch (compareStrategy) {
    case "number":
      compareResult = (value1 as number) - (value2 as number);

      if (compareResult > 0) {
        compareResult = 1;
      } else if (compareResult < 0) {
        compareResult = -1;
      }

      break;

    case "string":
      compareResult = (value1 as string).localeCompare(value2 as string);
  }

  return compareResult;
};

export { applyDiscount, applySorting, debounce, intToLeadingZerosString, toKey };
