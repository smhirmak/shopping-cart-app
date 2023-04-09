import React, { useEffect, useState, useContext } from 'react';

import Product from './Product';
import { ProductTypes } from '@/types/ProductTypes';
import { Button, Container, Grid, Box } from '@mui/material';
import { CartContext } from '../context/cart-context';

const ProductList: React.FC<{ res: ProductTypes[] }> = ({ res }) => {
  const [items, setItems] = useState<ProductTypes[]>([]);
  const [rawData, setRawData] = useState<ProductTypes[]>([]);
  const [categorys, setCategorys] = useState<string[]>([]);
  const array: string[] = [];
  const cartContext = useContext(CartContext);
  const state: any[] = cartContext.state;
  const dispatch = cartContext.dispatch;

  useEffect(() => {
    setItems(res);
    setRawData(res);
    res.map((item: ProductTypes) => {
      if (array.includes(item.category)) {
        return;
      } else {
        array.push(item.category);
      }
    });
    setCategorys(array);
  }, []);

  const filteredCategory = (category: string) => {
    const filteredList = rawData.slice().filter((each) => each.category === category);
    setItems(filteredList);
  };

  const total = state.reduce((total, item: ProductTypes) => {
    return (total + item.price * item.quantity)
  }, 0)

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item marginLeft={0} xs={2}>
          {categorys.map((category: any, i: number) => (
            <Button
              key={i}
              variant="contained"
              sx={{ margin: '2px' }}
              onClick={() => filteredCategory(category)}>
              {category}
            </Button>
          ))}
          {rawData !== items && (
            <Button
              color="error"
              variant="outlined"
              sx={{ margin: '2px' }}
              onClick={() => setItems(rawData)}>
              No Filter
            </Button>
          )}
        </Grid>
        <Grid container item xs={10} spacing={3}>
          {items.map((item, i) => {
            item.quantity = 1;
            return (
              <Grid key={i} item xs={3} justifyContent="flex-end">
                <Product item={item} />
              </Grid>
            );
          })}
        </Grid>

        <Box>
          {state.map((item: ProductTypes, index) => {
            return (
              <div key={index}>
                <img src={item.thumbnail} alt="" />
                <p>{item.title}</p>
                <p>{item.quantity * item.price}$</p>

                <div>
                  <button onClick={() => dispatch({ type: 'INCREASE', payload: item })}>+</button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => {
                      if (item?.quantity > 1) {
                        dispatch({ type: 'DECREASE', payload: item });
                      } else {
                        dispatch({ type: 'REMOVE', payload: item })
                      }
                    }}>
                    -
                  </button>
                </div>
                <button onClick={() => dispatch({ type: 'REMOVE', payload: item })}>X</button>
              </div>
            );
          })}
          <div>
            {state.length > 0 && <div><h3>Total: {total}</h3></div>}
          </div>
        </Box>
      </Grid>
    </Container>
  );
};

export default ProductList;
