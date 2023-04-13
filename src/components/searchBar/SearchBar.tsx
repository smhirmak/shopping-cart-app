import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextField } from '@mui/material';
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
    <TextField
      variant="outlined"
      label="Search"
      onChange={changeHandle}
      value={searchText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" color="primary" onClick={submitHandle}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}></TextField>
  );
};

export default SearchBar;
