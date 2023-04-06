import axios, { AxiosResponse } from 'axios';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import { ProductTypes } from '@/types/ProductTypes';
import ProductList from '@/components/items/ProductList';

type GetItemsResponse = {
  data: ProductTypes[];
};

const Home:React.FC<{response: ProductTypes[]}> = ({ response }) => {
  return (
    <>
      <Head>
        <title>Shopping Cart App</title>
        <meta name="description" content="Shopping cart app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="pngegg.png" />
      </Head>
      <ProductList res={response} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios
    .get('https://dummyjson.com/products')
    .then((res) => res.data.products);

  return {
    props: {
      response: response,
    }
  };
};


export default Home;
