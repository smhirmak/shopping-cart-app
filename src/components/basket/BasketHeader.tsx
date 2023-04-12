import { Badge, Box, Icon, Typography } from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const BasketHeader = () => {
  return (
    <Box padding={2} display={'flex'} alignItems={'row'} justifyContent={'center'} bgcolor={'#ccc'}>
      {' '}
      {/* Sepet Bölümünün Üst Kısmı */}
      <Icon sx={{ margin: 1, padding: 3, color: '#000' }}>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      </Icon>
      <Typography variant="h4" margin={1} padding={2.5}>
        Sepet
      </Typography>
    </Box>
  );
};

export default BasketHeader;
