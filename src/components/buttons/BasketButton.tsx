import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Box, Button } from '@mui/material';
import React from 'react';

const BasketButton: React.FC<{ setAnchor: React.Dispatch<React.SetStateAction<boolean>> }> = ({
  setAnchor
}) => {
  return (
    <Box display={'flex'} justifyContent={'flex-end'}>
      <Button
        variant="contained"
        onClick={() => setAnchor(true)}
        startIcon={
          <Badge badgeContent={4} color="success">
            <ShoppingCartIcon sx={{ margin: '3px' }} />
          </Badge>
        }>
        | Sepet
      </Button>
    </Box>
  );
};

export default BasketButton;
