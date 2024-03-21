const debounce = <TI, TO>(func: (...args: TI[]) => TO, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>;

  return function (...args: TI[]) {
    clearTimeout(timeout);

    timeout = setTimeout(() => func(...args), delay);
  };
};

export { debounce };
