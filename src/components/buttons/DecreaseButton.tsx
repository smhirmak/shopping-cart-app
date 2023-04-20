import { IProduct } from '@/types/IProduct';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import IconButton from '@mui/material/IconButton';

const DecreaseButton: React.FC<{ item: IProduct }> = ({ item }) => {
  const { dispatch, setTotalQuantity } = useContext(CartContext);

  return (
    <IconButton
      sx={{ margin: '2px' }}
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
