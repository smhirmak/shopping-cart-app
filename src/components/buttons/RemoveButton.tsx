import { IProduct } from '@/types/IProduct';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';

const RemoveButton: React.FC<{ item: IProduct }> = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <Button onClick={() => dispatch({ type: 'REMOVE', payload: item })}>
      <RemoveShoppingCartIcon />
    </Button>
  );
};

export default RemoveButton;
