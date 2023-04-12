import { ProductTypes } from '@/types/ProductTypes';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Button, CardActions, Container, Grid, Modal, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/cart-context';
import BasketButton from './BasketButton';

const AddToCartButton: React.FC<{
  item: ProductTypes;
  setAnchor: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ item, setAnchor }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const cartContext = useContext(CartContext);
  const dispatch = cartContext.dispatch;

  const handleOpen = () => {
    dispatch({ type: 'ADD', payload: item });
    setIsOpen(() => true);
  };

  const handleClose = () => {
    setIsOpen(() => false);
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    p: 2
  };

  return (
    <CardActions>
      <Button sx={{ mt: 1 }} fullWidth variant="contained" onClick={handleOpen}>
        Add to Cart
      </Button>
      <Modal open={isOpen} onClose={handleClose}>
        <Container sx={style}>
          <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'} mb={5}>
            <Grid xs={12} mb={'2rem'}>
              <Button sx={{ borderRadius: '50%', height: '64px' }} onClick={handleClose}>
                <CloseIcon sx={{ color: '#858585' }} fontSize="large" />
              </Button>
            </Grid>
            <Grid item xs={3}>
              <img src={item.thumbnail} style={{ width: '120px', height: '120px' }} />
            </Grid>
            <Grid item xs={6} display={'flex'} alignItems={'start'} flexDirection={'column'}>
              <Typography
                display={'flex'}
                alignItems={'center'}
                variant="h6"
                component="h6"
                sx={{ color: '#388e3c', mb: 1 }}>
                <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                Ürün başarıyla sepete eklendi
              </Typography>
              <Typography sx={{ mb: 1 }}>{item.title}</Typography>
              <Typography display={'flex'} justifyContent={'center'} alignItems={'center'}>
                Satıcı: {item.brand} <LocalShippingIcon sx={{ ml: 1 }} />
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'center'}>
              <Button onClick={handleClose}>
                <BasketButton setAnchor={setAnchor} text="Sepete Git" badge={false} />
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Alışverişe Devam Et
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Modal>
    </CardActions>
  );
};

export default AddToCartButton;
