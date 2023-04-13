import React from 'react';

import { ProductTypes } from '@/types/ProductTypes';
import { Grid } from '@mui/material';
import Product from './Product';

const ProductList: React.FC<{
  items: ProductTypes[];
}> = ({ items }) => {
  return (
    <>
      {items.map((item, i) => {
        item.quantity = 1;
        return (
          <Grid item key={i} xs={3} justifyContent="flex-end">
            <Product item={item} />
          </Grid>
        );
      })}
    </>
  );
};

export default ProductList;
