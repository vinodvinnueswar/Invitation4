import React from 'react'
import groom from '../Images/Bride_Groom/Groom1.png'
import circular from '../Images/Circular_des/Circular_desg1.png'

const Groom = () => {
  return (
    <div className="Bride_Container">
           <div className="Bride_page">
               <h4>Groom</h4>
               <img src={groom} alt="" />
               <img className='C-1' src={circular} alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti debitis ea magni ullam dolorum! Veniam accusamus sed, excepturi quas dignissimos perspiciatis commodi id corrupti voluptatibus tenetur quasi consequuntur quaerat.</p>
           </div>
       </div>
  )
}

export default Groom