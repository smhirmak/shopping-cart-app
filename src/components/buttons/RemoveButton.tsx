import { IProduct } from '@/types/IProduct';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

const RemoveButton: React.FC<{ item: IProduct }> = ({ item }) => {
  const { dispatch, setTotalQuantity } = useContext(CartContext);

  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));

  const reomveHandle = () => {
    dispatch({ type: 'REMOVE', payload: item });
    setTotalQuantity(0);
  };

  return (
    <IconButton onClick={reomveHandle} sx={{ paddingLeft: isMobile ? 0.5 : 1.5 }}>
      <RemoveShoppingCartIcon fontSize="small" color="success" />
    </IconButton>
  );
};

export default RemoveButton;
