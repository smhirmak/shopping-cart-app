import { IProduct } from '@/types/IProduct';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Container, Divider, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import BasketButton from '../buttons/BasketButton';
import Category from '../category/Category';
import MobileCategory from '../category/MobileCategory';
import SearchBar from '../searchBar/SearchBar';

const Header: React.FC<{ categories: string[]; products: IProduct[] }> = ({
  categories,
  products
}) => {
  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));

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
          marginTop={isMobile ? 1 : 3}
          columnSpacing={0}>
          <Grid
            item
            xs={12}
            lg={4}
            display={'flex'}
            flexDirection={isMobile ? 'column' : 'row'}
            justifyContent={isMobile ? 'center' : ''}
            alignItems={'center'}
            marginBottom={2}>
            <Link href="/">
              <img
                src="/shopping-cart-app-logo.png"
                width={isMobile ? 75 : 125}
                height={isMobile ? 50 : 100}
              />
            </Link>
            <Typography
              variant={isMobile ? 'h5' : 'h4'}
              component={isMobile ? 'h5' : 'h4'}
              sx={{ ml: 3 }}>
              <Link
                href="/"
                style={{
                  textDecoration: 'none',
                  color: 'ButtonText',
                  fontWeight: 500
                }}>
                Shopping Cart App
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} display={'flex'} justifyContent={'center'}>
            <SearchBar />
          </Grid>
          <Grid item xs={12} md={3} display={'flex'} justifyContent={'end'}>
            {!isMobile && <BasketButton badge={true} text={'Cart'} />}
          </Grid>
        </Grid>
        <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'}>
          {!isMobile ? (
            <Category res={products} categories={categories} />
          ) : (
            <MobileCategory res={products} categories={categories} />
          )}
        </Grid>
        <Divider sx={{ mb: 2 }} />
      </Container>
    </>
  );
};

export default Header;
