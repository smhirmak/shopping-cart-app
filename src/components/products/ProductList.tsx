import React from 'react';

import { IProduct } from '@/types/IProduct';
import { Box, Grid } from '@mui/material';
import Product from './Product';

const ProductList: React.FC<{ items: IProduct[] }> = ({ items }) => {
  return (
    <Grid
      container
      item
      xs={11}
      sm={10}
      md={9}
      lg={9}
      spacing={3}
      marginBottom={3}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}>
      {items.map((item, i) => {
        return (
          <Grid
            item
            key={i}
            xs={12}
            sm={9}
            md={6}
            lg={3}
            display={'flex'}
            justifyContent={'center'}>
            <Box>
              <Product item={item} />
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductList;
