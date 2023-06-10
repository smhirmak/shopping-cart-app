import { IProduct } from '@/types/IProduct';
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Router } from 'next/router';

const ProductList: React.FC<{ items: IProduct[] }> = ({ items }) => {
  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false);
  });

  useEffect(() => {
    if (localStorage.getItem('basket') == null) {
      localStorage.setItem('basket', JSON.stringify([]));
    }
  }, []);

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
      {items.length != 0 || !loading ? (
        items.map((item, i) => {
          return (
            <Grid
              item
              key={i}
              xs={6}
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
        })
      ) : (
        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
          <img src="no-data.jpg" height={isMobile ? '370px' : '404px'} />
        </Grid>
      )}
    </Grid>
  );
};

export default ProductList;
