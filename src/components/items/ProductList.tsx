import React, { useEffect, useState } from 'react';

import axios, { AxiosResponse } from 'axios';
import Product from './Product';
import { ProductTypes } from '@/types/ProductTypes';
import { Button, Container, Grid } from '@mui/material';

type GetItemsResponse = {
  data: ProductTypes[];
};

const ProductList: React.FC = () => {
  const [items, setItems] = useState<ProductTypes[]>([]);
  const [rawData, setRawData] = useState<ProductTypes[]>([]);
  const [categorys, setCategorys] = useState<string[]>([]);
  const array: string[] = [];

  useEffect(() => {
    axios
      .get<GetItemsResponse>('https://dummyjson.com/products')
      .then((response: AxiosResponse) => {
        setItems(response.data.products);
        setRawData(response.data.products);
        response.data.products.map((item: ProductTypes) => {
          if (array.includes(item.category)) {
            return;
          } else {
            array.push(item.category);
          }
        });
        setCategorys(array);
      });
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item marginLeft={0} xs={2}>
          {categorys.map((category: any, i: number) => (
            <Button
              key={i}
              onClick={() => {
                const filteredList = rawData.slice().filter((each) => each.category === category);
                setItems(filteredList);
              }}>
              {category}
            </Button>
            // <Checkbox
            //   key={i}
            //   icon={
            //     <Typography sx={{ backgroundColor: '#000', color: '#fff' }}>
            //       {category}
            //     </Typography>
            //   }
            //   checkedIcon={<Typography>{category}</Typography>}
            //   defaultChecked
            //   color="primary"
            //   inputProps={{ 'aria-label': 'primary checkbox' }}
            // />
          ))}
        </Grid>
        <Grid container item xs={10} spacing={3}>
          {items.map((item, i) => (
            <Grid key={i} item xs={3} justifyContent="flex-end">
              <Product item={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductList;
