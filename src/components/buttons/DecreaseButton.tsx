import { IProduct } from '@/types/IProduct';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

const DecreaseButton: React.FC<{ item: IProduct }> = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <Button
      size="small"
      sx={{ margin: '2px' }}
      variant="contained"
      color="error"
      onClick={() => {
        if (item?.quantity > 1) {
          dispatch({ type: 'DECREASE', payload: item });
        } else {
          dispatch({ type: 'REMOVE', payload: item });
        }
      }}>
      <RemoveIcon />
    </Button>
  );
};

export default DecreaseButton;
