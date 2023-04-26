import { IProduct } from '@/types/IProduct';
import { Box, Card, Rating, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AddToCartButton from '../buttons/AddToCartButton';

const Product: React.FC<{
  item: IProduct;
}> = ({ item }) => {
  const [imageChange, setImageChange] = useState(item.thumbnail);

  useEffect(() => {
    setImageChange(item.thumbnail);
  }, [item]);

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Card
      sx={{ height: 380, boxShadow: 5, cursor: 'pointer' }}
      onMouseOver={() => setImageChange(item.images[2])}
      onMouseOut={() => setImageChange(item.thumbnail)}>
      <Link href={`/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <Box position={'relative'}>
          {item.price > 45 && (
            <Box
              px={'5px'}
              borderRadius={'10px'}
              position={'absolute'}
              top={'0'}
              right={'0'}
              margin={0.6}
              sx={{ backgroundColor: '#000', color: '#fff' }}>
              Free Shipping
            </Box>
          )}
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <img
            style={{
              // width: '160px',
              width: '11.5rem',
              // maxWidth: 'auto',
              // minWidth: '243px',
              height: '150px',
              marginBottom: 10
            }}
            src={imageChange}
          />
        </Box>
        <Box
          display={'block'}
          flexDirection={'column'}
          alignItems={'center'}
          textAlign={'center'}
          paddingX={0.5}>
          <Typography noWrap>{item.title}</Typography>
          <Typography marginTop={1.5}>{item.price}$</Typography>
          <Rating
            sx={{ marginY: 1.5 }}
            name="size-small"
            value={item.rating}
            precision={0.5}
            size="small"
            readOnly
          />
        </Box>
      </Link>
      <AddToCartButton item={item} />
    </Card>
  );
};

export default Product;
