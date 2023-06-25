import React, { useState } from 'react'

const Categories = () => {

   const [checkbox, setCheckbox] = useState({ gerberas: false, roses: false, orhideas: false, flowersMix: false })

   const change = (event) => {
      const value = event.target.value;
      setCheckbox(checkbox => ({ ...checkbox, [value]: !checkbox[value] }))
   }

   return (
      <div>
         <h3>Choose category</h3>
         <fieldset>
            <div className='form-control'>
               <input type="checkbox" value='gerberas' id='gerberas_1' checked={checkbox.gerberas} onChange={change} />
               <label htmlFor="gerberas_1">gerberas</label>
            </div>

            <div className='form-control'>
               <input type="checkbox" value='roses' id='roses_2' checked={checkbox.roses} onChange={change} />
               <label htmlFor="roses_2">roses</label>
            </div>

            <div className='form-control'>
               <input type="checkbox" value='orhideas' id='orhideas_3' checked={checkbox.orhideas} onChange={change} />
               <label htmlFor="orhideas_3">orhideas</label>
            </div>

            <div className='form-control'>
               <input type="checkbox" value='flowersMix' id='mix_4' checked={checkbox.flowersMix} onChange={change} />
               <label htmlFor="mix_4">flowers mix</label>
            </div>
         </fieldset>


      </div>
   )
}

export default Categories
