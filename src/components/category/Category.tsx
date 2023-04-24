import { CartContext } from '@/context/cart-context';
import { IProduct } from '@/types/IProduct';
import { Box, Button, ButtonGroup, Divider } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

const Category: React.FC<{
  res: IProduct[];
  categories: string[];
}> = ({ res, categories }) => {
  const [rawData, setRawData] = useState<IProduct[]>([]);
  const { setItems } = useContext(CartContext);

  useEffect(() => {
    setItems(res);
    setRawData(res);
  }, []);

  const selectFilterHandle = () => {
    setItems(rawData);
  };

  const route = useRouter();
  const { query } = route;
  let currentCategoryName = query.categoryName;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', pt: 1, pb: 1 }}>
      <ButtonGroup variant="text" sx={{ margin: '2px' }}>
        {categories.map((category: any, i: number) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Link href={`/category/${category}`}>
              <Button
                color={currentCategoryName !== category ? 'success' : 'error'}
                sx={{ textDecoration: 'none' }}>
                {category}
              </Button>
            </Link>

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

        {currentCategoryName !== undefined && (
          <>
            <Divider
              variant="fullWidth"
              orientation="vertical"
              sx={{
                flexGrow: 1
              }}
            />
            <Link href={'/'}>
              <Button
                color="error"
                variant="text"
                sx={{ margin: '2px' }}
                onClick={selectFilterHandle}>
                No Filter
              </Button>
            </Link>
          </>
        )}
      </ButtonGroup>
    </Box>
  );
};

export default Category;
