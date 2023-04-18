import { theme } from '@/theme/theme';
import { ThemeProvider } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode; categories: string[] | any }> = ({
  children,
  categories
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Header categories={categories} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
