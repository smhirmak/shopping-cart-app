export interface ProductTypes {
  id: number;
  title: string;
  images: string[];
  price: number;
  category: string;
  rating: number;
  thumbnail: string;
}

export interface IItemRating {
  rate: number;
  count: number;
}
