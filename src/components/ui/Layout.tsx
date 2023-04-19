import { theme } from '@/theme/theme';
import { IProduct } from '@/types/IProduct';
import { ThemeProvider } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC<{
  children: React.ReactNode;
  categories: string[] | any;
  products: IProduct[];
}> = ({ children, categories, products }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header categories={categories} products={products} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
