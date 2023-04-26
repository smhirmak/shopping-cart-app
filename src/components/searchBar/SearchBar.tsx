import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextField, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const themePage = useTheme();
  const isMobile = useMediaQuery(themePage.breakpoints.down('md'));

  const router = useRouter();

  const changeHandle = (event: any) => {
    setSearchText(event.target.value);
  };

  const submitHandle = (event: any) => {
    event.preventDefault();
    router.push(`/search?q=${searchText}`);
    setSearchText('');
  };

  return (
    <form>
      <TextField
        variant="outlined"
        label="Search"
        onChange={changeHandle}
        value={searchText}
        color="success"
        size={isMobile ? 'small' : 'medium'}
        sx={{ width: isMobile ? '300px' : '400px' }}
        InputProps={{
          startAdornment: <SearchIcon />,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                type="submit"
                edge="end"
                sx={{
                  height: 56,
                  borderBottomLeftRadius: 5,
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10
                }}
                color="success"
                onClick={submitHandle}>
                <Typography>SEARCH</Typography>
              </IconButton>
            </InputAdornment>
          )
        }}></TextField>
    </form>
  );
};

export default SearchBar;
