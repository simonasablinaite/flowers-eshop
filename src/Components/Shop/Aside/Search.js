import React, { useState } from 'react'
import searchIcon from '../../../img/search-icon.png'

const Search = () => {

   const [searchField, setSearchField] = useState('');


   const searchFieldHandler = (e) => {
      e.preventDefault();

      setSearchField(e.target.value);
   }
   return (
      <div className='search-wrapper'>
         <input type="search"
            value={searchField}
            onChange={searchFieldHandler}
         />
         <img className='search-icon' style={{ width: '15px', heigth: '15px' }} src={searchIcon} alt="icon" />

         <button type='submit'>Search</button>
      </div>
   )
}

export default Search
