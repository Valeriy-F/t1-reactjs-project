interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface IProductsFilterRequest {
  filter: IProductsFilter;
  queryParams: IProductsQueryParams;
}

interface IProductsSearchRequest {
  search: IProductsSearch;
  queryParams: IProductsQueryParams;
}

interface IProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

interface IProductsQueryParams {
  limit?: number;
  skip?: number;
  select?: Array<keyof IProduct>;
}

interface IProductsFilter {
  category?: string | null;
}

interface IProductsSearch {
  title?: string;
}

export {
  type IProduct,
  type IProductsFilter,
  type IProductsFilterRequest,
  type IProductsQueryParams,
  type IProductsResponse,
  type IProductsSearch,
  type IProductsSearchRequest,
};
