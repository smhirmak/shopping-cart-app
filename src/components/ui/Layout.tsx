import { theme } from '@/theme/theme';
import { IProduct } from '@/types/IProduct';
import { ThemeProvider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MobileFooter from './MobileFooter';

const Layout: React.FC<{
  children: React.ReactNode;
  categories: string[] | any;
  products: IProduct[];
}> = ({ children, categories, products }) => {
  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));

  return (
    <ThemeProvider theme={theme}>
      <Header categories={categories} products={products} />
      {children}
      {/* <MobileFooter /> */}
      {isMobile && <MobileFooter />}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
