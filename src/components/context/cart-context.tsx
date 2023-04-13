import React, { useReducer, useState } from 'react';

interface IAction {
  type: string;
  payload: any;
}

export interface IContextType {
  state: any[];
  dispatch: React.Dispatch<IAction>;
  anchor: boolean;
  setAnchor: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IChildrenType {
  children: React.ReactNode;
}

export const CartContext = React.createContext<IContextType>({
  dispatch: (each) => {},
  state: [],
  anchor: false,
  setAnchor: (each) => {}
});

export const ContextProvider: React.FC<IChildrenType> = ({ children }) => {
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

  // const info = { state, dispatch, anchorDeneme, setAnchorDeneme };

  return (
    <CartContext.Provider value={{ state, dispatch, anchor, setAnchor }}>
      {children}
    </CartContext.Provider>
  );
};
