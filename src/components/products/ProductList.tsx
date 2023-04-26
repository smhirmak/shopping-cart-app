import { IProduct } from '@/types/IProduct';
import { Box, Grid } from '@mui/material';
import React from 'react';
import Product from './Product';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProductList: React.FC<{ items: IProduct[] }> = ({ items }) => {
  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));
  return (
    <Grid
      container
      item
      xs={12}
      sm={10}
      md={9}
      lg={9}
      spacing={3}
      marginBottom={3}
      display={'flex'}
      justifyContent={isMobile ? 'center' : 'flex-start'}
      alignItems={'center'}>
      {items.map((item, i) => {
        return (
          <Grid item key={i} xs={6} sm={9} md={6} lg={3} display={'flex'} justifyContent={'center'}>
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
