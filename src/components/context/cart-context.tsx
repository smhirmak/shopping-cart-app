import React, { useReducer } from 'react';

interface IAction {
  type: string;
  payload: any;
}

export interface IContextType {
  state: any[];
  dispatch: React.Dispatch<IAction>;
}

interface IChildrenType {
  children: React.ReactNode;
}

export const CartContext = React.createContext<IContextType>({ dispatch: (each) => {}, state: [] });

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

  const info = { state, dispatch };

  return <CartContext.Provider value={info}>{children}</CartContext.Provider>;
};
