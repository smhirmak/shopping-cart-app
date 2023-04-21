import { IProduct } from '@/types/IProduct';
import { Box, Button, Card, CardContent, Rating, Typography } from '@mui/material';
import React, { useEffect, useState, useContext } from 'react';
import AddToCartButton from '../buttons/AddToCartButton';
import { useRouter } from 'next/router';
import { CartContext } from '@/context/cart-context';

const Product: React.FC<{
  item: IProduct;
}> = ({ item }) => {
  const [imageChange, setImageChange] = useState(item.thumbnail);
  const { isHover } = useContext(CartContext);

  const router = useRouter();

  useEffect(() => {
    setImageChange(item.thumbnail);
  }, [item]);

  const productCardClickHandle = () => {
    {
      isHover && router.push(`/${item.id}`);
    }
  };

  return (
    <Card
      sx={{ height: 400, boxShadow: 5, cursor: 'pointer' }}
      onClick={productCardClickHandle}
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
      <img
        style={{
          width: '260px',
          height: '200px'
        }}
        src={imageChange}
      />
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
