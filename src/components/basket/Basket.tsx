import { IProduct } from '@/types/IProduct';
import { Box, Drawer, Grid, Typography, Divider, Rating } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import DecreaseButton from '../buttons/DecreaseButton';
import IncreaseButton from '../buttons/IncreaseButton';
import RemoveButton from '../buttons/RemoveButton';
import BasketCheckout from './BasketCheckout';
import BasketHeader from './BasketHeader';
import BasketProductImage from './BasketProductImage';

const Basket: React.FC<{}> = () => {
  const { state, anchor, setAnchor, setTotalQuantity } = useContext(CartContext);
  let total: any = 0;

  return (
    <Box>
      <Drawer
        PaperProps={{ style: { width: '650px', backgroundColor: '#f4f4f4' } }}
        variant="temporary"
        sx={{ display: 'flex' }}
        anchor={'right'}
        open={anchor}
        onClose={(prev) => setAnchor(!prev)}>
        <BasketHeader />
        {state.map((item: IProduct, index) => {
          total = total + item.quantity;
          setTotalQuantity(total);
          return (
            <Box
              sx={{
                border: 1,
                borderRadius: 2,
                boxShadow: 5,
                borderColor: '#d1d1d1',
                marginY: 0.75,
                backgroundColor: '#fff'
              }}>
              <Grid
                container
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                <Grid container item>
                  <Grid item xs={6}>
                    <Box
                      display={'flex'}
                      flexDirection={'row'}
                      alignItems={'center'}
                      paddingX={3}
                      marginY={0.5}>
                      <Typography>Seller: {item.brand}</Typography>
                      <Rating
                        sx={{ paddingLeft: 3 }}
                        name="size-small"
                        value={item.rating}
                        precision={0.5}
                        size="small"
                        readOnly
                      />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'flex-end'}>
                    {item.price > 45 && (
                      <Box
                        display={'flex'}
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'flex-end'}
                        paddingRight={4}
                        marginY={0.5}>
                        <Typography>Free Shipping</Typography>
                      </Box>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Divider variant="fullWidth" sx={{ margin: 1, fontSize: 100 }} />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  display={'flex'}
                  flexDirection={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}>
                  <Grid
                    item
                    xs={3}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <BasketProductImage item={item} />
                  </Grid>
                  <Divider orientation="vertical" flexItem={true} />
                  <Grid item xs={3}>
                    <Typography padding={'1rem'} variant="subtitle2">
                      {item.title}
                    </Typography>
                  </Grid>
                  <Divider orientation="vertical" flexItem={true} />
                  <Grid
                    item
                    xs={1}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    paddingX={3}>
                    <Typography>{item.quantity * item.price}$</Typography>
                  </Grid>
                  <Divider orientation="vertical" flexItem={true} />

                  <Grid
                    item
                    xs={4.9}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Box
                      display={'flex'}
                      flexDirection={'row'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      borderRadius={6}
                      border={1}>
                      {item.quantity === 1 ? (
                        <RemoveButton item={item} />
                      ) : (
                        <DecreaseButton item={item} />
                      )}
                      <Typography paddingX={1}>{item.quantity}</Typography>
                      <IncreaseButton item={item} />
                    </Box>
                    {item.quantity !== 1 && <RemoveButton item={item} />}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          );
        })}
        <BasketCheckout />
      </Drawer>
    </Box>
  );
};

export default Basket;
