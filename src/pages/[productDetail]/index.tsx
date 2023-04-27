import ProductDetail from '@/components/products/ProductDetail';
import { IProduct } from '@/types/IProduct';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';
import Head from 'next/head';

const DetailPage: React.FC<{ productDetail: IProduct }> = ({ productDetail }) => {
  return (
    <>
      <Head>
        <title>{productDetail.title}</title>
        <meta name="description" content="Shopping cart app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="shop-ico.png" />
      </Head>
      <ProductDetail productDetail={productDetail} />
    </>
  );
};

export default DetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params?.productDetail;

  const prodDetailResponse = await axios
    .get(`https://dummyjson.com/products/${params}`)
    .then((res) => res.data);

  const productDetail = { ...prodDetailResponse, quantity: 1 };

  return {
    props: {
      productDetail
    }
  };
};
