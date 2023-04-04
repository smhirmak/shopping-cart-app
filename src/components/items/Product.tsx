import React, { useState } from 'react';
import { ProductTypes } from '@/types/ProductTypes';
import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography
} from '@mui/material';

// const Img = styled('img')({
//   margin: 'auto',
//   display: 'block',
//   width: '200px',
//   height: '300px'
// });

const Product: React.FC<{ item: ProductTypes }> = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  const [imageDeneme, setImageDeneme] = useState(item.thumbnail);

  return (
    <Badge
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      badgeContent={'Free Shipment'}
      invisible={item.price < 45} 
      color="primary"> 
      <Card
        // sx={{ width: 350 }}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}>
        <CardMedia
          component="img"
          sx={{ height: '200px' }}
          image={imageDeneme}
          onMouseEnter={() => setImageDeneme(item.images[2])}
          onMouseOut={() => setImageDeneme(item.thumbnail)}
        />
        <CardContent>
          {/* <img width={'200px'} height={'300px'} src={item.image} alt="" /> */}

          {/* <Img alt="complex" src={item.images[0]} /> */}

          <Box style={{ listStyle: 'none' }}>
            <Typography>{item.title}</Typography>
            <Typography>{item.price}$</Typography>
            <Rating name="size-small" value={item.rating} precision={0.5} size="small" readOnly />
            <CardActions>
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
              {/* Button rengi sorulacak iboya tam olarak nereye ne yazılacağı anlaşılmadı */}
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Badge>
  );
};

export default Product;
