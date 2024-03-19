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

interface IProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

interface IProductsSelectQuery {
  limit?: number;
  skip?: number;
  select?: Array<keyof IProduct>;
}

interface IProductsSelectFilter {
  category?: string | null;
}

export { type IProduct, type IProductsResponse, type IProductsSelectFilter, type IProductsSelectQuery };
