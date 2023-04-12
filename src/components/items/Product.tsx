import { ProductTypes } from '@/types/ProductTypes';
import { Box, Card, CardContent, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddToCartButton from '../buttons/AddToCartButton';

const Product: React.FC<{ item: ProductTypes }> = ({ item }) => {
  const [imageChange, setImageChange] = useState(item.thumbnail);

  useEffect(() => {
    setImageChange(item.thumbnail);
  }, [item]);

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
        <Box display={'block'} flexDirection={'column'} alignItems={'center'} textAlign={'center'}>
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
          <AddToCartButton item={item} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Product;
