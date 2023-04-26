import { IProduct } from '@/types/IProduct';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
  Box,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  Rating,
  Typography
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import AddToCartButton from '../buttons/AddToCartButton';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProductDetail: React.FC<{ productDetail: IProduct }> = ({ productDetail }) => {
  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));

  const descriptionScroll = () => {
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
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        bgcolor={'#f7f7f7'}
        boxShadow={1}
        borderRadius={2}
        mt={isMobile ? 1 : 3}
        mb={isMobile ? 1 : 3}
        padding={isMobile ? 1 : 4}>
        <Grid container>
          <Grid item xs={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Carousel
              fullHeightHover={false}
              animation="slide"
              duration={350}
              autoPlay={false}
              sx={{
                width: isMobile ? '100%' : '450px',
                height: isMobile ? '200px' : '300px',
                mt: isMobile ? 5 : 0
              }}>
              {productDetail.images.map((image, i) => (
                <img
                  width={isMobile ? '100%' : '450px'}
                  height={isMobile ? '125px' : '250px'}
                  key={i}
                  src={image}
                />
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={6} pl={isMobile ? 1 : 0}>
            <Box>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography
                  fontSize={isMobile ? '1.2em' : '2em'}
                  fontWeight={400}
                  color={'GrayText'}>
                  {productDetail.title}
                </Typography>
                <Link href={`/search?q=${productDetail.brand}`} legacyBehavior>
                  <a
                    style={{
                      fontSize: isMobile ? '1em' : '1.4em',
                      fontWeight: 700,
                      textDecoration: 'none',
                      color: 'black'
                    }}>
                    {productDetail.brand}
                  </a>
                </Link>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Typography id="desc" fontSize={isMobile ? '0.9em' : '1.1em'} my={1}>
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
              <Box
                display={'flex'}
                alignItems={isMobile ? 'center' : 'start'}
                justifyContent={'center'}
                flexDirection={isMobile ? 'row' : 'column'}>
                <Typography
                  mt={isMobile ? 0.5 : 1}
                  pr={isMobile ? 1.5 : 0}
                  fontSize={isMobile ? '1.3em' : '1.5em'}
                  fontWeight={500}>
                  {productDetail.price}$
                </Typography>
                <Button size={isMobile ? 'small' : 'large'} color="error">
                  <FavoriteBorderIcon fontSize={isMobile ? 'small' : 'medium'} />
                  <Typography fontSize={'1em'}>Favorite</Typography>
                </Button>
              </Box>
              <AddToCartButton item={productDetail} />
              {!isMobile && (
                <Link
                  href={`/category/${productDetail.category}`}
                  style={{ textDecoration: 'none' }}>
                  <Typography marginTop={1} color={'gray'}>
                    {productDetail.category}
                  </Typography>
                </Link>
              )}
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
          <ButtonGroup variant="text" color="inherit" size={isMobile ? 'small' : 'large'}>
            <Button onClick={descriptionScroll}>Description</Button>
            <Button onClick={reviewsScroll}>Customer Reviews</Button>
            <Button onClick={specificationsScroll}>Specifications</Button>
          </ButtonGroup>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          paddingY={3}
          marginBottom={5}>
          {productDetail.images.map((image, i) => (
            <>
              <img
                id={image}
                key={i}
                src={image}
                width={isMobile ? '80%' : ''}
                style={{ marginBottom: 10 }}
              />
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
