import { IProduct } from '@/types/IProduct';
import { Box, Divider, Drawer, Grid, Rating, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import DecreaseButton from '../buttons/DecreaseButton';
import IncreaseButton from '../buttons/IncreaseButton';
import RemoveButton from '../buttons/RemoveButton';
import BasketCheckout from './BasketCheckout';
import BasketHeader from './BasketHeader';

const Basket: React.FC<{}> = () => {
  const { state, anchor, setAnchor, setTotalQuantity } = useContext(CartContext);
  let total: any = 0;

  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));

  return (
    <Box>
      <Drawer
        PaperProps={{ style: { width: isMobile ? '85%' : '45%', backgroundColor: '#f4f4f4' } }}
        variant="temporary"
        sx={{ display: 'flex', zIndex: 1 }}
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
                marginY: isMobile ? 0.5 : 0.75,
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
                  <Grid item xs={6} lg={6}>
                    <Box
                      display={'flex'}
                      flexDirection={'column'}
                      alignItems={'start'}
                      justifyContent={'start'}
                      paddingX={isMobile ? 1 : 3}
                      marginLeft={isMobile ? 1 : 0}
                      marginY={0.5}>
                      <Typography>Seller: {item.brand}</Typography>
                      <Rating
                        sx={{ paddingLeft: isMobile ? 0 : 3 }}
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
                    <Divider
                      variant="fullWidth"
                      sx={{ margin: isMobile ? 0.5 : 1, fontSize: 100 }}
                    />
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
                    <img
                      width={isMobile ? '100px' : '150px'}
                      height={isMobile ? '100px' : '150px'}
                      src={item.thumbnail}
                      style={{ padding: isMobile ? 1 : 3 }}
                      alt=""
                    />
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
                    xs={2}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    paddingX={3}>
                    <Typography>{item.quantity * item.price}$</Typography>
                  </Grid>
                  <Divider orientation="vertical" flexItem={true} />

                  <Grid
                    container
                    item
                    xs={'auto'}
                    lg={3.9}
                    display={'flex'}
                    flexDirection={isMobile ? 'column' : 'row'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    pl={isMobile ? 0 : 5}>
                    <Grid item>
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
                        <Typography paddingX={isMobile ? 0 : 1}>{item.quantity}</Typography>
                        <IncreaseButton item={item} />
                      </Box>
                    </Grid>
                    <Grid item>{item.quantity !== 1 && <RemoveButton item={item} />}</Grid>
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
