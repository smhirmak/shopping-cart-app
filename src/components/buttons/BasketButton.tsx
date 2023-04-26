import { CartContext } from '@/context/cart-context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Box, Button, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext } from 'react';

const BasketButton: React.FC<{
  text?: string | undefined;
  badge?: boolean;
}> = ({ text, badge }) => {
  const { setAnchor, totalQuantity } = useContext(CartContext);
  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => setAnchor(true)}
        color="success"
        startIcon={
          badge && (
            <Badge badgeContent={totalQuantity} color="success">
              <ShoppingCartIcon sx={{ margin: '3px' }} fontSize={isMobile ? 'small' : 'medium'} />
            </Badge>
          )
        }>
        {badge === !isMobile && (
          <Divider sx={{ height: 28, bgcolor: '#fff', m: 1 }} orientation="vertical" />
        )}
        {text}
      </Button>
    </Box>
  );
};

export default BasketButton;
