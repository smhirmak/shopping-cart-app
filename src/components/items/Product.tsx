import React, { useState, useEffect, useContext } from 'react';
import { ProductTypes } from '@/types/ProductTypes';
import { Box, Button, Card, CardActions, CardContent, Drawer, Rating, Typography } from '@mui/material';
import { CartContext } from '../context/cart-context';

const Product: React.FC<{ item: ProductTypes }> = ({ item }) => {
  const [imageChange, setImageChange] = useState(item.thumbnail);
  const cartContext = useContext(CartContext);
  const dispatch = cartContext.dispatch;

  useEffect(() => {
    setImageChange(item.thumbnail);
  }, [item]);

  // const addToCartHandler = ({id, price, stock}:IProdInfo) => {
  //   //Add to Cart butonuna basıldığında aktif olacak ve o an ki ürünün bilgileri alınacak
  //   //Context den gelen set fonku ile bu veriler state de ki ilsteye atanacak
  //   //Ardından bu bilgiler basket componentine gönderilip gerekli işlemleri yapacak

  // }

  return (
    <Card
      sx={{ height: 400 }}
      onMouseOver={() => setImageChange(item.images[2])}
      onMouseOut={() => setImageChange(item.thumbnail)}>
      <Box position={'relative'}>
        {item.price > 45 && (
          <Box
            px={'5px'}
            borderRadius={'10px'}
            position={'absolute'}
            top={'0'}
            right={'0'}
            sx={{ backgroundColor: '#000', color: '#fff' }}>
            Free Shipping
          </Box>
        )}
      </Box>
      <img height="200px" width="221px" src={imageChange} />
      <CardContent>

        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} textAlign={'center'}>
          <Typography noWrap>{item.title}</Typography>
          <Typography marginTop={1.5}>{item.price}$</Typography>
          <Rating
            sx={{ marginTop: 1.5 }}
            name="size-small"
            value={item.rating}
            precision={0.5}
            size="small"
            readOnly
          />
          <CardActions>
            <Button
              sx={{ marginTop: 1 }}
              fullWidth
              variant="contained"
              onClick={() => dispatch({ type: 'ADD', payload: item })}>
              Add to Cart
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Product;
