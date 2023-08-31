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
      key={index}
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
                <LocalShippingOutlinedIcon sx={{ mr: 1 }} />
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
          <Grid item xs={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <img
              width={'150px'}
              height={'150px'}
              src={item.thumbnail}
              style={{ padding: 3 }}
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
            flexDirection={'row'}
            justifyContent={'start'}
            alignItems={'center'}
            pl={5}>
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
                <Typography paddingX={1}>{item.quantity}</Typography>
                <IncreaseButton item={item} />
              </Box>
            </Grid>
            <Grid item>{item.quantity !== 1 && <RemoveButton item={item} />}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasketProductCart;
