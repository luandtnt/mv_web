// export default YourComponent;

import { useState } from 'react';
import SearchCard from './SearchCard';

// eslint-disable-next-line react/prop-types
function SearchMovie({data}) {
  const [filter, setFilter] = useState('');

  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className='search_user'>
      <input
        type='text'
        placeholder='Search...'
        id='search_input'
        className='search_user_input'
        value={filter}
        onChange={handleInputChange}
      />
      <img src='src/img/user.jpg' alt='' className='search_user_img' />
      {filter && <SearchCard filter={filter} data={data}/>}
    </div>
  );
}

export default SearchMovie;