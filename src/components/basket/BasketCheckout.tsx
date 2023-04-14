import { IProduct } from '@/types/IProduct';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

const BasketCheckout = () => {
  const { state } = useContext(CartContext);

  const total = state.reduce((total, item: IProduct) => {
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
          zIndex={1}
          bgcolor={'#2d2d2d'}
          padding={2}
          mt={state.length > 0 ? '0px' : '140px'}>
          <Grid item padding={'10px'} zIndex={'1'}>
            <Typography>Total: {total}$</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="error">
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
            Cart is Empty
          </Typography>
        </Box>
      )}
    </>
  );
};

export default BasketCheckout;
