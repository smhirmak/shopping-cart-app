import React, { useEffect, useState } from 'react';

import axios, { AxiosResponse } from 'axios';
import Product from './Product';
import { ProductTypes } from '@/types/ProductTypes';
import { Container, Grid } from '@mui/material';

type GetItemsResponse = {
  data: ProductTypes[];
};

const ProductList: React.FC = () => {
  const [items, setItems] = useState<ProductTypes[]>([]);

  useEffect(() => {
    axios
      .get<GetItemsResponse>('https://fakestoreapi.com/products')
      .then((response: AxiosResponse) => {
        console.log(response.data);
        setItems(response.data);
      });
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {items.map((item, i) => (
          <Grid item xs={4}>
            <Product key={i} item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
