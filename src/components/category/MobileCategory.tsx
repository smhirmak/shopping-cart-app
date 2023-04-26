import { CartContext } from '@/context/cart-context';
import { IProduct } from '@/types/IProduct';
import { Box, Button, Drawer } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

const MobileCategory: React.FC<{
  res: IProduct[];
  categories: string[];
}> = ({ res, categories }) => {
  const { categoryAnchor, setCategoryAnchor, setItems } = useContext(CartContext);
  const [rawData, setRawData] = useState<IProduct[]>([]);

  useEffect(() => {
    setItems(res);
    setRawData(res);
  }, []);

  const selectFilterHandle = () => {
    setItems(rawData);
    setCategoryAnchor(false);
  };

  const route = useRouter();
  const { query } = route;
  let currentCategoryName = query.categoryName;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', pt: 1, pb: 1 }}>
      <Drawer
        PaperProps={{ style: { width: '50%', backgroundColor: '#f4f4f4' } }}
        variant="temporary"
        sx={{ display: 'flex', zIndex: 1 }}
        anchor={'left'}
        open={categoryAnchor}
        onClose={(prev) => setCategoryAnchor(!prev)}>
        {categories.map((category: any, i: number) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Link href={`/category/${category}`}>
              <Button
                color={currentCategoryName !== category ? 'success' : 'error'}
                sx={{ textDecoration: 'none' }}
                onClick={() => setCategoryAnchor(false)}>
                {category}
              </Button>
            </Link>
          </Box>
        ))}
        {currentCategoryName !== undefined && (
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Link href={'/'}>
              <Button
                color="error"
                variant="contained"
                sx={{ margin: '2px' }}
                onClick={selectFilterHandle}>
                No Filter
              </Button>
            </Link>
          </Box>
        )}
      </Drawer>
    </Box>
  );
};

export default MobileCategory;
