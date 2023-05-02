import { IProduct } from '@/types/IProduct';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Box, Divider, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import DecreaseButton from '../buttons/DecreaseButton';
import IncreaseButton from '../buttons/IncreaseButton';
import RemoveButton from '../buttons/RemoveButton';

const BasketProductCart: React.FC<{ item: IProduct; index: number }> = ({ item, index }) => {
  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 2,
        boxShadow: 5,
        borderColor: '#d1d1d1',
        marginY: 0.5,
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
              paddingX={1}
              marginLeft={1}
              marginY={0.5}>
              <Typography>Seller: {item.brand}</Typography>
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
                paddingRight={1}>
                <LocalShippingOutlinedIcon sx={{ mr: 1 }} /> Free Shipping
                <Typography></Typography>
              </Box>
            )}
          </Grid>
          <Grid item xs={12}>
            <Divider variant="fullWidth" sx={{ margin: 0.5, fontSize: 100 }} />
          </Grid>
        </Grid>
        <Grid
          container
          item
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}>
          <Grid item xs={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <img
              width={'80px'}
              height={'80px'}
              src={item.thumbnail}
              style={{ padding: 1 }}
              alt=""
            />
          </Grid>

          <Grid
            item
            xs={9}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'start'}
            alignItems={'start'}
            pl={2}>
            <Box pb={1}>
              <Typography variant="subtitle1">{item.title}</Typography>
              <Rating name="size-small" value={item.rating} precision={0.5} size="small" readOnly />
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} pb={1}>
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
                <Typography paddingX={0}>{item.quantity}</Typography>
                <IncreaseButton item={item} />
              </Box>
              {item.quantity !== 1 && <RemoveButton item={item} />}
              <Box ml={6}>
                <Typography>{item.quantity * item.price}$</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasketProductCart;
