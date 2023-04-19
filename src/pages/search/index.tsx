import ProductList from '@/components/products/ProductList';
import { IProduct } from '@/types/IProduct';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';

const Search: React.FC<{ searchResponse: IProduct[] }> = ({ searchResponse }) => {
  return (
    <Container>
      <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} mt={3}>
        <ProductList items={searchResponse}></ProductList>
      </Grid>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.query.q;

  const searchRawResponse = await axios
    .get(`https://dummyjson.com/products/search?q=${params}`)
    .then((res) => res.data.products)
    .catch((error) => {
      return { error: 'Error' };
    });

  const searchResponse = searchRawResponse.map((item: any) => ({ ...item, quantity: 1 }));

  return {
    props: {
      searchResponse
    }
  };
};

export default Search;
