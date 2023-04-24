import { IProduct } from '@/types/IProduct';
import { Button, Container, Divider, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Basket from '../basket/Basket';
import BasketButton from '../buttons/BasketButton';
import Category from '../category/Category';
import SearchBar from '../searchBar/SearchBar';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header: React.FC<{ categories: string[]; products: IProduct[] }> = ({
  categories,
  products
}) => {
  return (
    <>
      <Link
        href={'https://github.com/smhirmak/shopping-cart-app'}
        style={{ textDecoration: 'none', color: 'black' }}>
        <GitHubIcon fontSize="large" />
      </Link>
      <Container maxWidth={'xl'}>
        <Grid
          container
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          marginTop={3}
          columnSpacing={0}>
          <Grid
            item
            xs={4}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={''}
            alignItems={'center'}>
            <Link href="/">
              <img src="/shopping-cart-app-logo.png" width={125} height={100} />
            </Link>
            <Typography variant="h4" component="h4" sx={{ ml: 3 }}>
              <Link
                href="/"
                style={{ textDecoration: 'none', color: 'ButtonText', fontWeight: 500 }}>
                Shopping Cart App
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={5} display={'flex'} justifyContent={'center'}>
            <SearchBar />
          </Grid>
          <Grid item xs={3} display={'flex'} justifyContent={'center'}>
            <BasketButton badge={true} text="Cart" />
            <Basket />
          </Grid>
        </Grid>
        <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Category res={products} products={products} categories={categories} />
        </Grid>
        <Divider sx={{ mb: 2 }} />
      </Container>
    </>
  );
};

export default Header;
