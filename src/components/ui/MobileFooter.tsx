import CategoryIcon from '@mui/icons-material/Category';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BottomNavigation, Paper } from '@mui/material';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import React from 'react';

const MobileFooter = () => {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%' }} elevation={3}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Category" icon={<CategoryIcon />} />
        <BottomNavigationAction label="Basket" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default MobileFooter;
