import ProductList from "../components/items/ProductList";
import type { AppProps } from "next/app";
import Header from '../components/layout/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Header />
      <ProductList />
    </>
  );
}
