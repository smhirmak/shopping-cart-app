import { IProduct } from '@/types/IProduct';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

const IncreaseButton: React.FC<{ item: IProduct }> = ({ item }) => {
  const { dispatch } = useContext(CartContext);
  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));

  return (
    <IconButton
      sx={{ margin: isMobile ? 0 : '2px' }}
      color="error"
      onClick={() => {
        if (item.stock > item.quantity) {
          dispatch({ type: 'INCREASE', payload: item });
        } else {
          alert('Daha Fazla Stok Bulunmamaktadir');
        }
      }}>
      <AddIcon fontSize="small" />
    </IconButton>
  );
};

export default IncreaseButton;
