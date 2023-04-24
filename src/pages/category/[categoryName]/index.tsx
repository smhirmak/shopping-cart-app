import ProductList from '@/components/products/ProductList';
import { IProduct } from '@/types/IProduct';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';

const Category: React.FC<{ searchCategoryResponse: IProduct[] }> = ({ searchCategoryResponse }) => {
  return (
    <Container maxWidth={'xl'}>
      <Grid container spacing={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <ProductList items={searchCategoryResponse} />
      </Grid>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params?.categoryName;
  console.log(params);

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
  console.log(searchCategoryResponse);

  return {
    props: {
      searchCategoryResponse
    }
  };
};

export default Category;
