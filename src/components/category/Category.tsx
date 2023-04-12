import { ProductTypes } from '@/types/ProductTypes';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Category: React.FC<{
  res: ProductTypes[];
  items: any[];
  setItems: React.Dispatch<React.SetStateAction<ProductTypes[]>>;
}> = ({ res, items, setItems }) => {
  const [categorys, setCategorys] = useState<string[]>([]);
  const [rawData, setRawData] = useState<ProductTypes[]>([]);
  const array: string[] = [];

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
    <>
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
    </>
  );
};

export default Category;
