import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextField, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const router = useRouter();

  const changeHandle = (event: any) => {
    setSearchText(event.target.value);
  };

  const submitHandle = (event: any) => {
    event.preventDefault();
    router.push(`/search?q=${searchText}`);
    console.log(searchText);
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
        size="medium"
        sx={{ width: '400px', padding: 0, margin: 0 }}
        InputProps={{
          startAdornment: <SearchIcon />,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                type="submit"
                edge="end"
                sx={{
                  // bgcolor: 'GrayText',
                  height: 56,
                  // width: 100,
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
