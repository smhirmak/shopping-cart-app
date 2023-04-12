import { ProductTypes } from '@/types/ProductTypes';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const BasketCheckout = () => {
  const cartContext = useContext(CartContext);
  const state = cartContext.state;

  const total = state.reduce((total, item: ProductTypes) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      {state.length > 0 ? (
        <Grid
          container
          item
          display={'flex'}
          position={'sticky'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
          bottom={'0px'}
          boxSizing={'border-box'}
          zIndex={2}
          bgcolor={'#ccc'}
          padding={2}
          mt={state.length > 0 ? '0px' : '140px'}>
          <Grid item padding={'10px'} bgcolor={'#ccc'} zIndex={'1'}>
            <Typography>Total: {total}$</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              Checkout
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
          mt={10}>
          <ProductionQuantityLimitsIcon fontSize="large" />
          <Typography variant="h4" mt={3}>
            Sepetiniz Boş
          </Typography>
        </Box>
      )}
    </>
  );
};

export default BasketCheckout;
