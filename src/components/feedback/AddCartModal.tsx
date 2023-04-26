import { IProduct } from '@/types/IProduct';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Box, Button, Container, Grid, Modal, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import BasketButton from '../buttons/BasketButton';

const AddCartModal: React.FC<{
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  item: IProduct;
}> = ({ setIsOpen, isOpen, item }) => {
  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '90%' : '800px',
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    p: 2
  };

  const handleClose = () => {
    setIsOpen(() => false);
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Container sx={style}>
        <Grid
          container
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          mb={isMobile ? 2 : 5}>
          <Grid item xs={12} mb={isMobile ? '0.5rem' : '2rem'}>
            <Button
              sx={{ borderRadius: '50%', height: isMobile ? '' : '64px' }}
              onClick={handleClose}>
              <CloseIcon sx={{ color: '#858585' }} fontSize="large" />
            </Button>
          </Grid>
          {isMobile && (
            <Grid xs={12}>
              <Typography
                display={'flex'}
                alignItems={'center'}
                fontSize={'18px'}
                fontWeight={500}
                sx={{ color: '#388e3c', mb: 2 }}>
                <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                Product Successfully Added to Cart
              </Typography>
            </Grid>
          )}
          <Grid item xs={4} lg={3} display={'flex'} justifyContent={'center'}>
            <img
              src={item.thumbnail}
              style={{
                width: isMobile ? '100px' : '120px',
                height: isMobile ? '100px' : '120px'
              }}
            />
          </Grid>
          <Grid
            item
            xs={8}
            lg={6}
            display={'flex'}
            alignItems={'start'}
            flexDirection={'column'}
            paddingLeft={isMobile ? 5 : 0}>
            {!isMobile && (
              <Typography
                display={'flex'}
                alignItems={'center'}
                variant="h6"
                component="h6"
                sx={{ color: '#388e3c', mb: 1 }}>
                <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                Product Successfully Added to Cart
              </Typography>
            )}
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
          {!isMobile && (
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
          )}
        </Grid>
        {isMobile && (
          <Grid item xs={12}>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'center'}>
              <Button onClick={handleClose}>
                <BasketButton text="Go to Cart" />
              </Button>
              <Button variant="contained" color="success" onClick={handleClose}>
                Continue Shopping
              </Button>
            </Box>
          </Grid>
        )}
      </Container>
    </Modal>
  );
};

export default AddCartModal;
