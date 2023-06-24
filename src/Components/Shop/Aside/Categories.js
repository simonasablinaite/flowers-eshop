import React from 'react'

const Categories = () => {
   return (
      <div>
         <h3>Choose category</h3>
         <fieldset>
            <div className='form-control'>
               <input type="checkbox" />
               <label htmlFor="gerberas">gerberas</label>
            </div>

            <div className='form-control'>
               <input type="checkbox" />
               <label htmlFor="roses">roses</label>
            </div>

            <div className='form-control'>
               <input type="checkbox" />
               <label htmlFor="orhideas">orhideas</label>
            </div>

            <div className='form-control'>
               <input type="checkbox" />
               <label htmlFor="flowers-mix">flowers mix</label>
            </div>
         </fieldset>


      </div>
   )
}

export default Categories
