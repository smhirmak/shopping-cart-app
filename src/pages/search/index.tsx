import { useRouter } from 'next/router';
import React from 'react';

const Search = () => {
  const router = useRouter();
  const { query } = router;

  console.log(query);
  return <div>index</div>;
};

export default Search;
