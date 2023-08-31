import { IProduct } from '@/types/IProduct';
import { Box, Divider, Drawer, Grid, Rating, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/cart-context';
import DecreaseButton from '../buttons/DecreaseButton';
import IncreaseButton from '../buttons/IncreaseButton';
import RemoveButton from '../buttons/RemoveButton';
import BasketCheckout from './BasketCheckout';
import BasketHeader from './BasketHeader';
import BasketProductCart from './BasketProductCart';
import MobileBasketProductCart from './MobileBasketProductCart';

const Basket: React.FC<{}> = () => {
  const { anchor, setAnchor, setTotalQuantity } = useContext(CartContext);
  const [basketData, setBasketData] = useState<any[]>([]);
  let total: any = 0;

  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));
  useEffect(() => {
    setBasketData(() => JSON.parse(localStorage.getItem('basket') || ''));
  }, [typeof window !== 'undefined' && localStorage.getItem('basket' || '')]);

  return (
    <Box>
      <Drawer
        PaperProps={{ style: { width: isMobile ? '85%' : '600px', backgroundColor: '#f4f4f4' } }}
        variant="temporary"
        sx={{ display: 'flex', zIndex: 3 }}
        anchor={'right'}
        open={anchor}
        onClose={(prev) => setAnchor(!prev)}>
        <BasketHeader />
        {basketData?.map((item: IProduct, index: any) => {
          total = total + item.quantity;
          setTotalQuantity(total);
          return (
            <>
              {isMobile ? (
                <MobileBasketProductCart key={index} item={item} index={index} />
              ) : (
                <BasketProductCart key={index} item={item} index={index} />
              )}
            </>
          );
        })}
        <BasketCheckout />
      </Drawer>
    </Box>
  );
};

export default Basket;
