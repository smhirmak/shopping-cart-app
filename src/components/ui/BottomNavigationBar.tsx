import { CartContext } from '@/context/cart-context';
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BottomNavigation, Paper } from '@mui/material';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useRouter } from 'next/router';
import { useContext } from 'react';

const BottomNavigationBar = () => {
  const { pathname } = useRouter();
  const { anchor, setAnchor, categoryAnchor, setCategoryAnchor } = useContext(CartContext);

  const anchorToggleHandler = () => {
    if (anchor) {
      setAnchor(false);
    } else {
      setAnchor(true);
    }
  };
  const categoryAnchorToggleHandler = () => {
    if (categoryAnchor) {
      setCategoryAnchor(false);
    } else {
      setCategoryAnchor(true);
    }
  };

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%', zIndex: 4 }}
      elevation={5}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Home"
          href="/"
          disabled={pathname === `/`}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Category"
          onClick={categoryAnchorToggleHandler}
          icon={<CategoryIcon />}
        />
        <BottomNavigationAction
          label="Basket"
          onClick={anchorToggleHandler}
          icon={<ShoppingCartIcon />}
        />
        <BottomNavigationAction disabled label="Favorites" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationBar;
