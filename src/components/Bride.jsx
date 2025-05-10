import React from 'react'
import bride from '../Images/Bride_Groom/Bride1.png'
import circular from '../Images/Circular_des/Circular_desg1.png'

const Bride = () => {
  return (
    <div className="Bride_Container">
        <div className="Bride_page">
            <h4>Bride</h4>
            <img src={bride} alt="" />
            <img className='C-1' src={circular} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate ratione molestiae repudiandae natus consequatur earum modi quasi unde itaque libero fuga eum ullam dolores, maxime sapiente voluptates. Voluptatum, excepturi?</p>
        </div>
    </div>
  )
}

export default Bride