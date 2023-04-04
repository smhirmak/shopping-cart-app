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

  // useEffect(() => {
  //   axios
  //     .get<GetItemsResponse>('https://fakestoreapi.com/products')
  //     .then((response: AxiosResponse) => {
  //       console.log(response.data);
  //       setItems(response.data);
  //     });
  // }, []);

  useEffect(() => {
    console.log('useEffect');
    axios
      .get<GetItemsResponse>('https://dummyjson.com/products')
      .then((response: AxiosResponse) => {
        setItems(response.data.products);
      });
  }, []);

  return (
    <Container>
      <Grid container spacing={6}>
        {items.map((item, i) => (
          <Grid key={i} item xs={3} justifyContent="flex-end">
            <Product item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
