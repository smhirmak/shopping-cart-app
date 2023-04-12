import { ProductTypes } from '@/types/ProductTypes';
import { Button, CardActions } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';

const AddToCartButton: React.FC<{ item: ProductTypes }> = ({ item }) => {
  const cartContext = useContext(CartContext);
  const dispatch = cartContext.dispatch;
  return (
    <CardActions>
      <Button
        sx={{ marginTop: 1 }}
        fullWidth
        variant="contained"
        onClick={() => dispatch({ type: 'ADD', payload: item })}>
        Add to Cart
      </Button>
    </CardActions>
  );
};

export default AddToCartButton;
