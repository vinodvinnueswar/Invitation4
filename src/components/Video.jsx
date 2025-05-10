import React from 'react'
import Border4 from '../Images/Border/Border4.png'

const Video = () => {
  return (
    <div className="videos-Container">
        <h3>Video</h3>
        <img src={Border4} alt="" />
        <div className="Video">
            <iframe src="https://youtu.be/U2IaUBmm_bg?si=_y5EM_ddHVKef1YU" frameborder="0"></iframe>
        </div>
    </div>
  )
}

export default Video