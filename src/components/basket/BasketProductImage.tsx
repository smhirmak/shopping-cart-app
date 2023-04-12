import { ProductTypes } from '@/types/ProductTypes';
import React from 'react';

const BasketProductImage: React.FC<{ item: ProductTypes }> = ({ item }) => {
  return (
    <img width={'120px'} height={'120px'} style={{ padding: '10px' }} src={item.thumbnail} alt="" />
  );
};

export default BasketProductImage;
