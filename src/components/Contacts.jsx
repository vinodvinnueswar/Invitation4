import React from 'react'
import facebook from '../images/Social_network/facebook.png'
import Instagram from '../images/Social_network/Instagram.png'
import whatsapp from '../images/Social_network/Whatsapp1.png'

const Contacts = () => {
  return (
     <div className="social_Share">
                <div className="wish">
                    <h3>Thank You for Visting</h3>
                </div>
                <h3>Social Share</h3>
           <div className="network">
           <div className="facebook">
                <img src={facebook} alt="" />
            </div>
            <div className="instagram">
                <img src={Instagram} alt="" />
            </div>
            <div className="whatsapp">
                <img src={whatsapp} alt="" />
            </div>
           </div>
            <div className="details_1">
                <img src="" alt="" />
                <p className='p1'>InviteDigitly Online</p>
                <p>Do you like to invite people through digital</p>
                <a href="https://web.telegram.org/a/#1251275106">
                click Here
                </a>
            </div>
        </div>
  )
}

export default Contacts