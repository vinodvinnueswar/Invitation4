import React from 'react'
import bride from '../Images/Bride_Groom/Bride1.png'
import circular from '../Images/Circular_des/Circular_desg1.png'

const Bride = () => {
  return (
    <div className="Bride_Container">
        <div className="Bride_page" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
            <h4>Bride</h4>
            <img src={bride} alt="" />
            <img className='C-1' src={circular} alt="" />
           
           <p className='FontSize' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">Mrs.Saniya </p>
            <p data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"> D/O Sampath Narayana & Rukmini <br />
            Velupalli ,Chithoor Dist. Andhra pradesh.
            </p>
           
        </div>
    </div>
  )
}

export default Bride