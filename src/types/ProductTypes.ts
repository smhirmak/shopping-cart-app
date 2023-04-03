export interface ProductTypes {
  id: number;
  title: string;
  image?: string;
  price: number;
  category: string;
  rating: IItemRating;
}

export interface IItemRating {
  rate: number;
  count: number;
}
