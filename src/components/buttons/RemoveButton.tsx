import { IProduct } from '@/types/IProduct';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import IconButton from '@mui/material/IconButton';

const RemoveButton: React.FC<{ item: IProduct }> = ({ item }) => {
  const { dispatch, setTotalQuantity } = useContext(CartContext);

  const reomveHandle = () => {
    dispatch({ type: 'REMOVE', payload: item });
    setTotalQuantity(0);
  };

  return (
    <IconButton onClick={reomveHandle} sx={{ paddingLeft: 1.5 }}>
      <RemoveShoppingCartIcon fontSize="small" color="success" />
    </IconButton>
  );
};

export default RemoveButton;
