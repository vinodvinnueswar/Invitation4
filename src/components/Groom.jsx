import React from 'react'
import groom from '../Images/Bride_Groom/Groom1.png'
import circular from '../Images/Circular_des/Circular_desg1.png'

const Groom = () => {
  return (
    <div className="Bride_Container">
           <div className="Bride_page" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
               <h4>Groom</h4>
               <img src={groom} alt="" />
               <img className='C-1' src={circular} alt="" />
               <p className='FontSize' data-aos="fade-up"
                 data-aos-anchor-placement="bottom-bottom">Mr.Rahul </p>
            <p data-aos="fade-up"
               data-aos-anchor-placement="bottom-bottom">S/O Adhi Reddy & Satyavathi <br />
            Velupalli ,Chithoor Dist. Andhra pradesh.
            </p>
           </div>
       </div>
  )
}

export default Groom