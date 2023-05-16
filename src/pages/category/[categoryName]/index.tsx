import ProductList from '@/components/products/ProductList';
import { IProduct } from '@/types/IProduct';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

const Category: React.FC<{ searchCategoryResponse: IProduct[]; params: string }> = ({
  searchCategoryResponse,
  params
}) => {
  return (
    <Container maxWidth={'xl'}>
      <Head>
        <title>{params.charAt(0).toUpperCase() + params.slice(1)}</title>
        <meta name="description" content="Shopping cart app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="shop-ico.png" />
      </Head>
      <Grid container spacing={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <ProductList items={searchCategoryResponse} />
      </Grid>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params?.categoryName;

  const searchCategoryRawResponse = await axios
    .get(`https://dummyjson.com/products/category/${params}`)
    .then((res) => res.data.products)
    .catch((error) => {
      return { error: 'Error' };
    });

  const searchCategoryResponse = searchCategoryRawResponse.map((item: any) => ({
    ...item,
    quantity: 1
  }));

  return {
    props: {
      searchCategoryResponse,
      params
    }
  };
};

export default Category;
