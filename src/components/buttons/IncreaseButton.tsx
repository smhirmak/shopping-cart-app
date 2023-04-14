import { IProduct } from '@/types/IProduct';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

const IncreaseButton: React.FC<{ item: IProduct }> = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <>
      <Box>
        <Button
          size="small"
          sx={{ margin: '2px' }}
          variant="contained"
          color="error"
          onClick={() => {
            if (item.stock > item.quantity) {
              dispatch({ type: 'INCREASE', payload: item });
            } else {
              alert('Daha Fazla Stok Bulunmamaktadir');
            }
          }}>
          <AddIcon />
        </Button>
      </Box>
    </>
  );
};

export default IncreaseButton;
