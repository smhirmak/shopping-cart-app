import { IProduct } from '@/types/IProduct';
import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Category: React.FC<{
  res: IProduct[];
  setItems: any;
  items: IProduct[];
}> = ({ res, setItems, items }) => {
  const [categorys, setCategorys] = useState<string[]>([]);
  const [rawData, setRawData] = useState<IProduct[]>([]);
  const categoriesArray: string[] = [];

  useEffect(() => {
    setItems(res);
    setRawData(res);
    res.map((item: IProduct) => {
      if (categoriesArray.includes(item.category)) {
        return;
      } else {
        categoriesArray.push(item.category);
      }
    });
    setCategorys(categoriesArray);
  }, []);

  const filteredCategory = (category: string) => {
    const filteredList = rawData.slice().filter((each) => each.category === category);
    setItems(filteredList);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', pt: 1, pb: 1 }}>
      {/* <Card sx={{ padding: 2, boxShadow: 4 }}> */}
      {/* <Box display={'flex'} justifyContent={'center'} mb={2}>
        <Typography variant="h5">Filter</Typography>
      </Box> */}
      {/* <Typography variant="h6" component={'h6'}>
        Categories:
      </Typography> */}
      {categorys.map((category: any, i: number) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Button
            key={i}
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
