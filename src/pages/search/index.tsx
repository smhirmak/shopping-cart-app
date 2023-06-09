import ProductList from '@/components/products/ProductList';
import { IProduct } from '@/types/IProduct';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const SearchPage: React.FC<{ searchResponse: IProduct[] }> = ({ searchResponse }) => {
  const router = useRouter();
  const { query } = router;
  return (
    <Container maxWidth={'xl'}>
      <Head>
        <title>{query.q} - Shopping Cart App</title>
        <meta name="description" content="Shopping cart app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="shop-ico.png" />
      </Head>
      <Grid container spacing={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <ProductList items={searchResponse} />
      </Grid>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query.q as string;

  const searchRawResponse = await axios
    .get(`https://dummyjson.com/products/search?q=${query}`)
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

export default SearchPage;
