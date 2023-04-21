import { IProduct } from '@/types/IProduct';
import { Box } from '@mui/material';
import React from 'react';
import ProductList from './ProductList';
import Product from './Product';

const ProductDetail: React.FC<{ productDetail: IProduct }> = ({ productDetail }) => {
  return (
    <Box>
      <Product item={productDetail} />
    </Box>
  );
};

export default ProductDetail;
