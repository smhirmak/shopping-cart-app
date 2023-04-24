import { IProduct } from '@/types/IProduct';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Box, Button, CardActions, Container, Grid, Modal, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cart-context';
import BasketButton from './BasketButton';

const AddToCartButton: React.FC<{
  item: IProduct;
}> = ({ item }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { dispatch, setIsHover } = useContext(CartContext);

  const handleOpen = () => {
    dispatch({ type: 'ADD', payload: item });
    setIsOpen(() => true);
    console.log('Clicked');
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
      <Button
        onMouseOver={() => setIsHover(false)}
        onMouseOut={() => setIsHover(true)}
        fullWidth
        variant="contained"
        color="success"
        onClick={handleOpen}>
        Add to Cart
      </Button>
      <Modal open={isOpen} onClose={handleClose}>
        <Container sx={style}>
          <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'} mb={5}>
            <Grid item xs={12} mb={'2rem'}>
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
                Product Successfully Added to Cart
              </Typography>
              <Typography sx={{ mb: 1 }} color={'#7F7F7F'}>
                {item.title}
              </Typography>
              <Typography
                color={'#7F7F7F'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}>
                Seller: {item.brand} <LocalShippingIcon sx={{ ml: 1 }} />
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Button onClick={handleClose} sx={{ mb: 0.5 }}>
                  <BasketButton text="Go to Cart" badge={false} />
                </Button>
                <Button variant="contained" color="success" onClick={handleClose} sx={{ mt: 0.5 }}>
                  Continue Shopping
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Modal>
    </CardActions>
  );
};

export default AddToCartButton;
