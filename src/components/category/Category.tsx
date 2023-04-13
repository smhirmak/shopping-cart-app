import { IProduct } from '@/types/IProduct';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Category: React.FC<{
  res: IProduct[];
  setItems: any;
  items: IProduct[];
}> = ({ res, setItems, items }) => {
  const [categorys, setCategorys] = useState<string[]>([]);
  const [rawData, setRawData] = useState<IProduct[]>([]);
  const array: string[] = [];

  useEffect(() => {
    setItems(res);
    setRawData(res);
    res.map((item: IProduct) => {
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
