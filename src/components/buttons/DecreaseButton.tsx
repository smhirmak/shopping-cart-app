import { IProduct } from '@/types/IProduct';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

const DecreaseButton: React.FC<{ item: IProduct }> = ({ item }) => {
  const { dispatch, setTotalQuantity } = useContext(CartContext);
  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));

  return (
    <IconButton
      sx={{ margin: isMobile ? 0 : '2px' }}
      color="error"
      onClick={() => {
        if (item?.quantity > 1) {
          dispatch({ type: 'DECREASE', payload: item });
          item.quantity === 1 && setTotalQuantity(0);
        } else {
          dispatch({ type: 'REMOVE', payload: item });
          setTotalQuantity(0);
        }
      }}>
      <RemoveIcon fontSize="small" />
    </IconButton>
  );
};

export default DecreaseButton;
