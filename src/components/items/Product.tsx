import { ProductTypes } from '@/types/ProductTypes';
import { Card, CardContent } from '@mui/material';
import React from 'react';

const Product: React.FC<{ item: ProductTypes }> = ({ item }) => {
  return (
    <Card>
      <CardContent>
        <img width={'200px'} height={'300px'} src={item.image} alt="" />
        <li style={{ listStyle: 'none' }}>
          <b>Item:</b> {item.title} <br /> <b>Price:</b> {item.price} <br /> <b>Rate:</b>{' '}
          {item.rating.rate}
        </li>
      </CardContent>
    </Card>
  );
};

export default Product;
