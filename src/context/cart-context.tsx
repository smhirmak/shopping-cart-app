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
  isHover: boolean;
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
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
  isHover: false,
  setIsHover: () => {}
});

export const CartContextProvider: React.FC<IChildren> = ({ children }) => {
  const reducer = (state: any[], action: IAction) => {
    switch (action.type) {
      case 'ADD':
        const tempState = state.filter((item) => action.payload.id === item.id);
        if (tempState.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }

      case 'INCREASE':
        const tempState1 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return tempState1;

      case 'DECREASE':
        const tempState2 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return tempState2;

      case 'REMOVE':
        const tempState3 = state.filter((item) => item.id !== action.payload.id);
        return tempState3;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const [anchor, setAnchor] = useState<boolean>(false);
  const [items, setItems] = useState<IProduct[]>([]);
  const [isHover, setIsHover] = useState(false);
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
        isHover,
        setIsHover
      }}>
      {children}
    </CartContext.Provider>
  );
};
