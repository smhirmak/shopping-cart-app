import { CartContext } from '@/context/cart-context';
import { IProduct } from '@/types/IProduct';
import { Box, Button, Divider } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';

const Category: React.FC<{
  res: IProduct[];
  categories: string[];
  products: IProduct[];
}> = ({ res, categories, products }) => {
  const [rawData, setRawData] = useState<IProduct[]>([]);
  const [isSelecet, setIsSelecet] = useState(true);
  const { items, setItems } = useContext(CartContext);

  useEffect(() => {
    setItems(res);
    setRawData(res);
  }, []);

  const filteredCategory = (category: string) => {
    const filteredList = products.slice().filter((each) => each.category === category);
    setItems(filteredList);
    setIsSelecet(true);
  };

  const selectFilterHandle = () => {
    setItems(rawData);
    setIsSelecet(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', pt: 1, pb: 1 }}>
      {categories.map((category: any, i: number) => (
        <Box
          key={i}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Button
            variant="text"
            color={isSelecet ? 'inherit' : 'error'}
            sx={{ margin: '2px' }}
            onClick={() => {
              filteredCategory(category);
              setIsSelecet(false);
            }}>
            {category}
          </Button>
          {i != categories.length - 1 && (
            <Divider
              variant="fullWidth"
              orientation="vertical"
              sx={{
                flexGrow: 1
              }}
            />
          )}
        </Box>
      ))}

      {rawData !== items && (
        <Button color="error" variant="text" sx={{ margin: '2px' }} onClick={selectFilterHandle}>
          No Filter
        </Button>
      )}
    </Box>
  );
};

export default Category;
