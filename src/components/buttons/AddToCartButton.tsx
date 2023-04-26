import { IProduct } from '@/types/IProduct';
import { Button, CardActions } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cart-context';
import AddCartModal from '../feedback/AddCartModal';

const AddToCartButton: React.FC<{
  item: IProduct;
}> = ({ item }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { dispatch } = useContext(CartContext);

  const handleOpen = () => {
    dispatch({ type: 'ADD', payload: item });
    setIsOpen(() => true);
  };

  return (
    <CardActions>
      <Button fullWidth variant="contained" color="success" onClick={handleOpen}>
        Add to Cart
      </Button>
      <AddCartModal item={item} isOpen={isOpen} setIsOpen={setIsOpen} />
    </CardActions>
  );
};

export default AddToCartButton;
