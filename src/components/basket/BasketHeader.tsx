import { CartContext } from '@/context/cart-context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Box, Typography } from '@mui/material';
import React, { useContext } from 'react';

const BasketHeader: React.FC = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <Box
      padding={2}
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'center'}>
      <Badge badgeContent={totalQuantity} color="success">
        <ShoppingCartIcon fontSize="large" />
      </Badge>
      <Typography variant="h4" ml={1} padding={2.5}>
        Cart
      </Typography>
    </Box>
  );
};

export default BasketHeader;
