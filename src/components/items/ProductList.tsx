import React, { useState } from 'react';

import { ProductTypes } from '@/types/ProductTypes';
import { Container, Grid } from '@mui/material';
import Basket from '../basket/Basket';
import BasketButton from '../buttons/BasketButton';
import Category from '../category/Category';
import Product from './Product';

const ProductList: React.FC<{ res: ProductTypes[] }> = ({ res }) => {
  const [items, setItems] = useState<ProductTypes[]>([]);
  const [anchor, setAnchor] = useState(false);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BasketButton setAnchor={setAnchor} />
        </Grid>
        <Grid item marginLeft={0} xs={2}>
          <Category res={res} items={items} setItems={setItems} />
        </Grid>
        <Grid container item xs={9} columnSpacing={3} rowSpacing={3}>
          {items.map((item, i) => {
            item.quantity = 1;
            return (
              <Grid key={i} item xs={3} justifyContent="flex-end">
                <Product item={item} />
              </Grid>
            );
          })}
        </Grid>
        <Basket anchor={anchor} setAnchor={setAnchor} />
      </Grid>
    </Container>
  );
};

export default ProductList;
