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

export { applyDiscount, debounce, intToLeadingZerosString, toKey };
