import { Container } from '@mui/material';
import Head from 'next/head';

export default function Custom404() {
  return (
    <Container>
      <Head>
        <title>Shopping Cart App - 404</title>
        <meta name="description" content="Shopping cart app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="shop-ico.png" />
      </Head>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
            <h2>404 - The Page can't be found</h2>
          </div>
          <a href="/">Go To Homepage</a>
        </div>
      </div>
    </Container>
  );
}
