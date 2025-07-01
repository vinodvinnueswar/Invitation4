import React from 'react'
import facebook from '../Images/Social_network/Facebook.png'
import Instagram from '../Images/Social_network/Instagram.png'
import whatsapp from '../Images/Social_network/Whatsapp1.png'
import Share from './Share'

const Contacts = () => {
  return (
     <div className="social_Share">
                <div className="wish">
                    <h3>Thank You for Visting</h3>
                </div>
                <h3>Social Share</h3>

              <Share/>

           {/* <div className="network">
           <div className="facebook">
                <img src={facebook} alt="" />
            </div>
            <div className="instagram">
                <img src={Instagram} alt="" />
            </div>
            <div className="whatsapp">
                <img src={whatsapp} alt="" />
            </div>
           </div> */}
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