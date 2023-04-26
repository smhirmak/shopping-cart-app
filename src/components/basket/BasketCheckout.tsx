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
    <Box marginBottom={7.5}>
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
          sx={{
            backgroundColor: '#f4f4f4',
            boxShadow: 5,
            border: 1,
            borderColor: '#d1d1d1',
            borderRadius: 2
          }}
          zIndex={2}
          padding={2}
          mt={state.length > 0 ? '0px' : '140px'}>
          <Grid item padding={'10px'} zIndex={'2'}>
            <Typography color={'#000'}>Total: {total}$</Typography>
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
    </Box>
  );
};

export default BasketCheckout;
