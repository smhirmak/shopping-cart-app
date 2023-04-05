import React, { useState, useEffect } from 'react';
import { ProductTypes } from '@/types/ProductTypes';
import { Box, Button, Card, CardActions, CardContent, Rating, Typography } from '@mui/material';

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
        <Box
          px={'5px'}
          borderRadius={'10px'}
          position={'absolute'}
          top={'0'}
          right={'0'}
          sx={{ backgroundColor: '#000', color: '#fff' }}>
          Free Shipping
        </Box>
      </Box>
      <img height="200px" width="200px" src={imageChange} />
      <CardContent>
        <Box>
          <Typography>{item.title}</Typography>
          <Typography>{item.price}$</Typography>
          <Rating name="size-small" value={item.rating} precision={0.5} size="small" readOnly />
          <CardActions>
            <Button variant="contained">Add to Cart</Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Product;
