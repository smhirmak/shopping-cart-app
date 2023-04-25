import React from 'react';
import { Box, BottomNavigation, Paper } from '@mui/material';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MobileFooter = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%', zIndex: 99 }}
      elevation={3}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default MobileFooter;
