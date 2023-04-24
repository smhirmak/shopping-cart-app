import { IProduct } from '@/types/IProduct';
import AddIcon from '@mui/icons-material/Add';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import IconButton from '@mui/material/IconButton';

const IncreaseButton: React.FC<{ item: IProduct }> = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <IconButton
      sx={{ margin: '2px' }}
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
