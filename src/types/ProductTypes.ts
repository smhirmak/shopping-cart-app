export interface ProductTypes {
  id: number;
  title: string;
  images: string[];
  price: number;
  category: string;
  rating: number;
  thumbnail: string;
}

export interface IProdInfo {
  id: number;
  price: number;
  stock: number;
}

export interface BasketContextType {
  product: IProdInfo[];
  addBasket: () => void;
  removeBasket: () => void;
}

// export interface IItemRating {
//   rate: number;
//   count: number;
// }
