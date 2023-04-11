import React, { useEffect, useState, useContext } from 'react';

import Product from './Product';
import { ProductTypes } from '@/types/ProductTypes';
import {
  Button,
  Badge,
  Container,
  Grid,
  Box,
  Typography,
  Drawer,
  Paper,
  Toolbar,
  Icon
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { CartContext } from '../context/cart-context';

const ProductList: React.FC<{ res: ProductTypes[] }> = ({ res }) => {
  const [items, setItems] = useState<ProductTypes[]>([]);
  const [rawData, setRawData] = useState<ProductTypes[]>([]);
  const [categorys, setCategorys] = useState<string[]>([]);
  const [anchor, setAnchor] = useState(false);
  const array: string[] = [];
  const cartContext = useContext(CartContext);
  const state: any[] = cartContext.state;
  const dispatch = cartContext.dispatch;

  const total = state.reduce((total, item: ProductTypes) => {
    return total + item.price * item.quantity;
  }, 0);

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

  return (
    <Container>
      <Button
        variant="contained"
        sx={{ display: 'flex', justifyContent: 'flex-end', ml: '68.5em', mb: '1em' }}
        onClick={() => setAnchor(true)}
        startIcon={
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon sx={{margin: '3px'}}/>
          </Badge>
        }>
        | Sepet
      </Button>
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
        <Grid container item xs={9} spacing={3}>
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
          <Drawer
            PaperProps={{ style: { width: '650px' } }}
            variant="temporary"
            sx={{ display: 'flex' }}
            anchor={'right'}
            open={anchor}
            onClose={(prev) => setAnchor(!prev)}>
            <Box
              padding={2}
              display={'flex'}
              alignItems={'row'}
              justifyContent={'center'}
              bgcolor={'#ccc'}>
              {' '}
              {/* Sepet Bölümünün Üst Kısmı */}
              <Icon sx={{ margin: 1, padding: 3, color: '#000' }}>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartIcon fontSize="large" />
                </Badge>
              </Icon>
              <Typography variant="h4" margin={1} padding={2.5}>
                Sepet
              </Typography>
            </Box>
            {state.map((item: ProductTypes, index) => {
              return (
                <Grid
                  container
                  // width= {window.innerWidth * 0.35}
                >
                  <Grid
                    container
                    item
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}>
                    <Grid xs={3} item display={'flex'} marginLeft={'0px'}>
                      <img
                        width={'120px'}
                        height={'120px'}
                        style={{ padding: '10px' }}
                        src={item.thumbnail}
                        alt=""
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography padding={'1rem'} variant="subtitle2">
                        {item.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography padding={'1rem'}>{item.quantity * item.price}$</Typography>
                    </Grid>

                    <Grid
                      item
                      xs={2}
                      display={'flex'}
                      alignItems={'center'}
                      flexDirection={'column'}
                      justifyContent={'center'}>
                      <Typography textAlign={'center'}>{item.quantity}</Typography>
                      <Box display={'flex'} flexDirection={'column'}>
                        <Button
                          size="small"
                          sx={{ margin: '2px' }}
                          variant="contained"
                          color="secondary"
                          onClick={() => {
                            if (item.stock > item.quantity) {
                              dispatch({ type: 'INCREASE', payload: item });
                            } else {
                              alert('Daha Fazla Stok Bulunmamaktadir');
                            }
                          }}>
                          <AddIcon />
                        </Button>

                        <Button
                          size="small"
                          sx={{ margin: '2px' }}
                          variant="contained"
                          color="secondary"
                          onClick={() => {
                            if (item?.quantity > 1) {
                              dispatch({ type: 'DECREASE', payload: item });
                            } else {
                              dispatch({ type: 'REMOVE', payload: item });
                            }
                          }}>
                          <RemoveIcon />
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item xs={1} display={'flex'} justifyContent={'center'}>
                      <Button onClick={() => dispatch({ type: 'REMOVE', payload: item })}>
                        <RemoveShoppingCartIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
            <Grid
              container
              item
              display={'flex'}
              position={'sticky'}
              alignItems={'center'}
              justifyContent={'center'}
              flexDirection={'column'}
              bottom={'0px'}
              boxSizing={'border-box'}
              zIndex={2}
              bgcolor={'#ccc'}
              padding={2}
              mt={state.length > 0 ? '0px' : '140px'}>
              <Grid item padding={'10px'} bgcolor={'#ccc'} zIndex={'1'}>
                <Typography>Total: {total}$</Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary">
                  Checkout
                </Button>
              </Grid>
            </Grid>
          </Drawer>
        </Box>
      </Grid>
    </Container>
  );
};

export default ProductList;
