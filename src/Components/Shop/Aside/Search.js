import React from 'react'
import searchIcon from '../../../img/search-icon.png'

const Search = () => {
   return (
      <div className='search-wrapper'>
         <input type="text" />
         <img style={{ width: '20px', heigth: '20px' }} src={searchIcon} alt="icon" />
      </div>
   )
}

export default Search
