import { CartContext } from '@/context/cart-context';
import { IProduct } from '@/types/IProduct';
import { Box, Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';

const Category: React.FC<{
  res: IProduct[];
  categories: string[];
  products: IProduct[];
}> = ({ res, categories, products }) => {
  const [rawData, setRawData] = useState<IProduct[]>([]);
  const { items, setItems } = useContext(CartContext);

  useEffect(() => {
    setItems(res);
    setRawData(res);
  }, []);

  const filteredCategory = (category: string) => {
    const filteredList = products.slice().filter((each) => each.category === category);
    setItems(filteredList);
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
            variant="contained"
            color="success"
            sx={{ margin: '2px' }}
            onClick={() => filteredCategory(category)}>
            {category}
          </Button>
        </Box>
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
    </Box>
  );
};

export default Category;
