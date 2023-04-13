import ProductList from '@/components/products/ProductList';
import { IProduct } from '@/types/IProduct';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';

const Search: React.FC<{ searchResponse: IProduct[] }> = ({ searchResponse }) => {
  console.log(searchResponse);
  return <ProductList items={searchResponse}></ProductList>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.query.q;
  console.log(params);

  const searchResponse = await axios
    .get(`https://dummyjson.com/products/search?q=${params}`)
    .then((res) => res.data.products)
    .catch((error) => {
      return { error: 'Error' };
    });
  return {
    props: {
      searchResponse
    }
  };
};

export default Search;
