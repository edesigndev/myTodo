import React from 'react';
import '../css/TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchChangeValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className='TodoSearch'
      placeholder='Cebolla'
      value={searchValue}
      onChange={onSearchChangeValue}
    />
  );
}

export { TodoSearch };
