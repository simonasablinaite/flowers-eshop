
import searchIcon from '../../../img/search-icon.png'

const Search = ({ searchField, searchFieldHandler }) => {

   return (
      <div className='search-wrapper'>
         <div className='form-control'>
            <label htmlFor="find-flower">Find flowers bouquet:</label>
            <input type="text"
               value={searchField}
               onChange={searchFieldHandler}
            />
            {/* <img className='search-icon' style={{ width: '15px', heigth: '15px' }} src={searchIcon} alt="icon" /> */}
         </div>
         <button type='submit'>Search</button>
      </div>
   )
}

export default Search
