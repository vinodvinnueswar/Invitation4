import React from 'react'
import BG from '../Images/Bg/BG3.jpg'
import floral from '../Images/Floral/flower7.png'
import floral8 from '../Images/Floral/flower8.png'
import BRG from '../Images/Bride_Groom/Grm_Br.png'
import floral10 from '../Images/Floral/floral6.png'
import Border from  '../Images/Border/Border.png'

const Intro = () => {
  return (
    <div className="Intro_Container">
       <div className="Intro_Page">
       <img src={BG} alt="" />
       </div>
       <div className="names">
        <h4>The Wedding of</h4>
        <p>Saniya Weds Rahul</p>
       </div>
       <div className="floral">
      <img src={floral} alt="" />
      </div>
      <div className="floral1">
      <img src={floral8} alt="" />
      </div>
      <div className="Br_Gr">
        <img src={BRG} alt="" />
      </div>
      <div className="floral10">
        <img src={floral10} alt="" />
      </div>
      <div className="Border">
        <img src={Border} alt="" />
       </div>

     
    </div>
  )
}

export default Intro