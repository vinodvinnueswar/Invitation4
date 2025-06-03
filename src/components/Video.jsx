import React from 'react'
import Border4 from '../Images/Border/Border4.png'
import ReactPlayer from 'react-player'

const Video = () => {
  return (
    <div className="videos-Container" >
        <h3>Video</h3>
        <img src={Border4} alt="" />
        <div className="Video" data-aos="fade-up"
     data-aos-duration="3000">
          <ReactPlayer  className='video'
           url='https://youtu.be/esHzbNvsLvI?si=yShRYSp9rmG9CK9z'
            width='320px'
           height='210px'
        
            />
        </div>
        </div>
  )
}

export default Video