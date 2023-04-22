import { IProduct } from '@/types/IProduct';
import { Box, Container, Grid, Rating, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import AddToCartButton from '../buttons/AddToCartButton';
import { Divider } from '@mui/material';

const ProductDetail: React.FC<{ productDetail: IProduct }> = ({ productDetail }) => {
  return (
    <Container>
      <Box boxShadow={2} borderRadius={2} my={7} padding={4}>
        <Grid container>
          <Grid item xs={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Carousel
              fullHeightHover={false}
              animation="slide"
              duration={350}
              autoPlay={false}
              sx={{ width: '500px', height: '300px' }}>
              {productDetail.images.map((image, i) => (
                <img height={'250px'} width={'450px'} key={i} src={image} />
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Box display={'flex'} alignItems={'center'}>
                <Link
                  href={`/search?q=${productDetail.brand}`}
                  style={{
                    marginRight: 10
                  }}
                  legacyBehavior>
                  <a style={{ fontSize: 24, fontWeight: 700 }}>{productDetail.brand}</a>
                </Link>
                <Typography variant="h5" fontWeight={400} color={'GrayText'}>
                  {productDetail.title}
                </Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Typography variant="subtitle1" my={1}>
                {productDetail.description}
              </Typography>
              <Box display={'flex'} alignItems={'center'}>
                <Rating
                  name="size-small"
                  value={productDetail.rating}
                  precision={0.5}
                  size="small"
                  sx={{ mr: 1.5 }}
                  readOnly
                />
                <Typography>{productDetail.rating}</Typography>
              </Box>
              <Typography my={1} fontSize={24} fontWeight={500}>
                {productDetail.price}$
              </Typography>
              <AddToCartButton item={productDetail} />
              <Link
                href={`/search?q=${productDetail.category}`}
                style={{ textDecoration: 'none', color: 'gray' }}>
                {productDetail.category}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductDetail;
