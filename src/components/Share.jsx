import React from 'react'
import {ShareSocial} from 'react-share-social'


const Share = () => {
  
 const style = {
  root: {
    top:'-40px',
    height: 0,
    background: 'transparent',
    borderRadius: 3,
    border: 0,
    color: 'white',
    


  },
  copyContainer: {
    top:'-20px',
    width:205,
    border: '1px solid gold',
    borderRadius: '120px',
    background: 'rgb(0,0,0,0.2)',
    padding:8,
  },

};



  return (


    <div className='Share'>
    <ShareSocial 
     url ="https://invitation4-mu.vercel.app/" 
     socialTypes={['facebook','telegram','whatsapp','twitter']}
     style={style}
   />


    </div>
  )
}

export default Share