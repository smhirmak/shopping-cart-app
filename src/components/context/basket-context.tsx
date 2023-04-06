import React, { useState } from 'react';
import { BasketContextType, IProdInfo } from '@/types/ProductTypes';

const BasketContext = React.createContext<BasketContextType | null>(null);

const BasketProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [basket, setBasket] = useState<IProdInfo[]>([
    {
      id: 0,
      price: 0,
      stock: 0
    }
  ]);
};

export default BasketProvider;

