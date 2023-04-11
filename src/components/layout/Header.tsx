import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header: React.FC = () => {
  return (
    <Box display={'flex'} justifyContent={'end'} paddingTop={2} paddingRight={2} >
      {/* <Button variant="contained" color="info" startIcon={<ShoppingCartIcon />}>
        Sepet
      </Button> */}
    </Box>
  );
};

export default Header;
