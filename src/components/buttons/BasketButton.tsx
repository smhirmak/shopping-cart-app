import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Box, Button } from '@mui/material';
import React from 'react';

const BasketButton: React.FC<{
  setAnchor: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  badge: boolean;
}> = ({ setAnchor, text, badge }) => {
  return (
    <Box display={'flex'} justifyContent={'flex-end'}>
      <Button
        variant="contained"
        onClick={() => setAnchor(() => true)}
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
