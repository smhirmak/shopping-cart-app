import { IProduct } from '@/types/IProduct';
import { Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Basket from '../basket/Basket';
import BasketButton from '../buttons/BasketButton';
import Category from '../category/Category';
import SearchBar from '../searchBar/SearchBar';

const Header: React.FC<{ categories: string[]; products: IProduct[] }> = ({
  categories,
  products
}) => {
  return (
    <Container maxWidth={'xl'}>
      <Grid
        container
        xs={12}
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
            <Link href="/" style={{ textDecoration: 'none', color: 'ButtonText' }}>
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
      <Grid xs={12}>
        <Category res={products} products={products} categories={categories} />
      </Grid>
    </Container>
  );
};

export default Header;
