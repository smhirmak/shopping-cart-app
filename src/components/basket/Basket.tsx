import { IProduct } from '@/types/IProduct';
import { Box, Drawer, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import DecreaseButton from '../buttons/DecreaseButton';
import IncreaseButton from '../buttons/IncreaseButton';
import RemoveButton from '../buttons/RemoveButton';
import { CartContext } from '../context/cart-context';
import BasketCheckout from './BasketCheckout';
import BasketHeader from './BasketHeader';
import BasketProductImage from './BasketProductImage';

const Basket: React.FC<{}> = () => {
  const { state, anchor, setAnchor } = useContext(CartContext);

  return (
    <Box>
      <Drawer
        PaperProps={{ style: { width: '650px' } }}
        variant="temporary"
        sx={{ display: 'flex' }}
        anchor={'right'}
        open={anchor}
        onClose={(prev) => setAnchor(!prev)}>
        <BasketHeader />
        {state.map((item: IProduct, index) => {
          return (
            <Grid
              container
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center'
              }}>
              <Grid item xs={3} display={'flex'} marginLeft={'0px'}>
                <BasketProductImage item={item} />
              </Grid>
              <Grid item xs={4}>
                <Typography padding={'1rem'} variant="subtitle2">
                  {item.title}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography padding={'1rem'}>{item.quantity * item.price}$</Typography>
              </Grid>
              <Grid
                item
                xs={2}
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
                justifyContent={'center'}>
                <Typography textAlign={'center'}>{item.quantity}</Typography>
                <Box display={'flex'} flexDirection={'column'}>
                  <IncreaseButton item={item} />
                  <DecreaseButton item={item} />
                </Box>
              </Grid>
              <Grid item xs={1} display={'flex'} justifyContent={'center'}>
                <RemoveButton item={item} />
              </Grid>
            </Grid>
          );
        })}
        <BasketCheckout />
      </Drawer>
    </Box>
  );
};

export default Basket;
