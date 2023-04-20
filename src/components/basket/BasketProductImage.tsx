import { IProduct } from '@/types/IProduct';

import React from 'react';

const BasketProductImage: React.FC<{ item: IProduct }> = ({ item }) => {
  return (
    <img width={'150px'} height={'150px'} src={item.thumbnail} style={{ padding: 3 }} alt="" />
  );
};

export default BasketProductImage;
