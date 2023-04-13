import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Box, Icon, Typography } from '@mui/material';

const BasketHeader = () => {
  return (
    <Box padding={2} display={'flex'} alignItems={'row'} justifyContent={'center'} bgcolor={'#ccc'}>
      <Icon sx={{ margin: 1, padding: 3, color: '#000' }}>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      </Icon>
      <Typography variant="h4" margin={1} padding={2.5}>
        Cart
      </Typography>
    </Box>
  );
};

export default BasketHeader;
