import { Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import BasketButton from '../buttons/BasketButton';
import SearchBar from '../searchBar/SearchBar';
import Category from '../category/Category';
import { useContext } from 'react';
import { CartContext } from '@/context/cart-context';

const Header: React.FC<{ categories: string[] }> = ({ categories }) => {
  const { items, setItems } = useContext(CartContext);
  console.log(categories);
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
        </Grid>
      </Grid>
      <Grid xs={12}>
        <Typography>Category</Typography>
        <Category res={items} setItems={setItems} items={items} />
      </Grid>
    </Container>
  );
};

export default Header;
