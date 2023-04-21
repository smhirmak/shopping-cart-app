import React from 'react';

import { IProduct } from '@/types/IProduct';
import { Box, Grid } from '@mui/material';
import Product from './Product';

const ProductList: React.FC<{ items: IProduct[] }> = ({ items }) => {
  return (
    <>
      <Grid container item xs={9} spacing={3}>
        {items.map((item, i) => {
          return (
            <Grid item key={i} xs={3} justifyContent="flex-end">
              <Box>
                <Product item={item} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductList;
