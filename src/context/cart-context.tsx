import { IProduct } from '@/types/IProduct';
import React, { useReducer, useState } from 'react';

interface IAction {
  type: string;
  payload: any;
}

export interface ICartContext {
  state: any[];
  dispatch: React.Dispatch<IAction>;
  anchor: boolean;
  setAnchor: React.Dispatch<React.SetStateAction<boolean>>;
  items: IProduct[];
  setItems: React.Dispatch<React.SetStateAction<IProduct[]>>;
  totalQuantity: number;
  setTotalQuantity: React.Dispatch<React.SetStateAction<number>>;
  categoryAnchor: boolean;
  setCategoryAnchor: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IChildren {
  children: React.ReactNode;
}

export const CartContext = React.createContext<ICartContext>({
  dispatch: (each) => {},
  state: [],
  anchor: false,
  setAnchor: (each) => {},
  items: [],
  setItems: () => {},
  totalQuantity: 0,
  setTotalQuantity: () => {},
  categoryAnchor: false,
  setCategoryAnchor: () => {}
});

export const CartContextProvider: React.FC<IChildren> = ({ children }) => {
  const reducer = (state: any[], action: IAction) => {
    let basketData = JSON.parse(localStorage.getItem('basket') || '');
    switch (action.type) {
      case 'ADD':
        const tempState = state.filter((item: any) => action.payload.id === item.id);
        if (tempState.length > 0) {
          localStorage.setItem('basket', JSON.stringify(state));
          return state;
        } else {
          localStorage.setItem('basket', JSON.stringify([...state, action.payload]));
          return [...state, action.payload];
        }

      case 'INCREASE':
        const tempState1 = basketData?.map((item: any) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        localStorage.setItem('basket', JSON.stringify(tempState1));
        return tempState1;

      case 'DECREASE':
        const tempState2 = basketData?.map((item: any) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        localStorage.setItem('basket', JSON.stringify(tempState2));
        return tempState2;

      case 'REMOVE':
        const tempState3 = basketData?.filter((item: any) => item.id !== action.payload.id);
        localStorage.setItem('basket', JSON.stringify(tempState3));
        return tempState3;

      default:
        localStorage.setItem('basket', JSON.stringify(state));
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, []);
  const [anchor, setAnchor] = useState<boolean>(false);
  const [categoryAnchor, setCategoryAnchor] = useState<boolean>(false);
  const [items, setItems] = useState<IProduct[]>([]);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        anchor,
        setAnchor,
        items,
        setItems,
        totalQuantity,
        setTotalQuantity,
        categoryAnchor,
        setCategoryAnchor
      }}>
      {children}
    </CartContext.Provider>
  );
};
