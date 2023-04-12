import { ProductTypes } from '@/types/ProductTypes';
import { Button, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';

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
        <Typography>Sepetiniz Boş</Typography>
      )}
    </>
  );
};

export default BasketCheckout;
