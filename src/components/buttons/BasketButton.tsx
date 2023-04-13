import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Box, Button } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';

const BasketButton: React.FC<{
  text: string;
  badge: boolean;
}> = ({ text, badge }) => {
  const { setAnchor } = useContext(CartContext);

  return (
    <Box display={'flex'} justifyContent={'flex-end'}>
      <Button
        variant="contained"
        onClick={() => setAnchor(true)}
        startIcon={
          badge && (
            <Badge badgeContent={4} color="success">
              <ShoppingCartIcon sx={{ margin: '3px' }} />
            </Badge>
          )
        }>
        {text}
      </Button>
    </Box>
  );
};

export default BasketButton;
