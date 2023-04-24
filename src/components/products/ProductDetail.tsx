import { IProduct } from '@/types/IProduct';
import { Box, Container, Grid, Rating, Typography, Button, ButtonGroup } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import AddToCartButton from '../buttons/AddToCartButton';
import { Divider, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductDetail: React.FC<{ productDetail: IProduct }> = ({ productDetail }) => {
  const descriptionScroll = () => {
    // window.scrollTo({ top: 740 });
    document.getElementById(productDetail.images[0])?.scrollIntoView();
  };
  const reviewsScroll = () => {
    document.getElementById(productDetail.images[1])?.scrollIntoView();
  };
  const specificationsScroll = () => {
    document.getElementById(productDetail.images[2])?.scrollIntoView();
  };

  return (
    <Container>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
        <Link href={'/'} style={{ textDecoration: 'none', color: 'gray' }}>
          Home Page
        </Link>
        <Link
          href={`/category/${productDetail.category}`}
          style={{ textDecoration: 'none', color: 'gray' }}>
          {`${productDetail.category.charAt(0).toUpperCase() + productDetail.category.slice(1)}`}
        </Link>
        <Link
          href={`/search?q=${productDetail.brand}`}
          style={{ textDecoration: 'none', color: 'gray' }}>
          {productDetail.brand}
        </Link>
        <Link href={''} style={{ textDecoration: 'none', color: 'gray', pointerEvents: 'none' }}>
          {productDetail.title}
        </Link>
      </Breadcrumbs>
      <Box bgcolor={'#f7f7f7'} boxShadow={1} borderRadius={2} mt={3} mb={3} padding={4}>
        <Grid container>
          <Grid item xs={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Carousel
              fullHeightHover={false}
              animation="slide"
              duration={350}
              autoPlay={false}
              sx={{ width: '450px', height: '300px' }}>
              {productDetail.images.map((image, i) => (
                <img height={'250px'} width={'450px'} key={i} src={image} />
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography variant="h5" fontWeight={400} color={'GrayText'}>
                  {productDetail.title}
                </Typography>
                <Link href={`/search?q=${productDetail.brand}`} legacyBehavior>
                  <a
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      textDecoration: 'none',
                      color: 'black'
                    }}>
                    {productDetail.brand}
                  </a>
                </Link>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Typography id="desc" variant="subtitle1" my={1}>
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
              <Button startIcon={<FavoriteBorderIcon />} color="error">
                Favorite
              </Button>
              <AddToCartButton item={productDetail} />
              <Link href={`/category/${productDetail.category}`} style={{ textDecoration: 'none' }}>
                <Typography marginTop={1} color={'gray'}>
                  {productDetail.category}
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        bgcolor={'#f7f7f7'}
        boxShadow={1}
        borderRadius={2}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        marginBottom={5}>
        <Box>
          <ButtonGroup variant="text" color="inherit" size="large">
            <Button onClick={descriptionScroll}>Description</Button>
            <Button onClick={reviewsScroll}>Customer Reviews</Button>
            <Button onClick={specificationsScroll}>Specifications</Button>
          </ButtonGroup>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          paddingY={3}
          marginBottom={5}>
          {productDetail.images.map((image, i) => (
            <>
              <img id={image} key={i} src={image} style={{ marginBottom: 10 }} />
              <Typography marginBottom={4}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, veritatis?
              </Typography>
            </>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetail;
