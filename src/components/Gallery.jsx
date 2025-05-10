
import React, { useState } from 'react'
import Img1 from '../Images/Bride_Groom/Bride.jpeg'
import Img2 from '../Images/Bride_Groom/Groom.jpeg'
import Border4 from '../Images/Border/Border4.png'

const Gallery = () => {
    const data = [
            {
              couples_img : Img1
            },
            {
              couples_img : Img1
            },
            {
              couples_img : Img1
            },
            {
              couples_img : Img2
            },
            {
              couples_img : Img2
            },
            {
              couples_img : Img2
            },
            {
                couples_img : Img2
              },
              {
                couples_img : Img2
              },
              {
                couples_img : Img2
              },
          
        ]
        const [active ,setActive] = useState(0);
   const handleClick = (index) => {
    setActive(index);
  };


          
  return (
    <div className="Gallery_Container">  
    <h4>Gallery</h4> 
    <img src={Border4} alt="" />
    <div className="Gallery">
        {
            data.map((item , index)=>{
                return(
                    <div className="images" key={index}>
                        <div className={ index === active ? "active" : ""} onClick={() => handleClick(index)}>
              <img src={item.couples_img} alt="" />
              </div>
                    </div>
                )
            })
        }
    </div>
      
    </div>
  )
}

export default Gallery