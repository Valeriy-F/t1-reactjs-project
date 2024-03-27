interface IResponseError {
  status: number | null;
  error: string;
}

interface ISorting<T> {
  sortingData: Array<{
    sortBy: T;
    sortDirection: "ASC" | "DESC";
    sortStrategy: "number" | "string";
  }>;
  limit: number;
}

export { type IResponseError, type ISorting };
