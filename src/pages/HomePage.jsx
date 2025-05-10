import React from 'react'
import Intro from '../components/Intro'
import '../App.css'
import Bride from '../components/Bride'
import Groom from '../components/Groom'
import Video from '../components/Video'
import Location from '../components/Location'
import Gallery from '../components/Gallery'
import Border5 from '../Images/Border/Border5.png'

const HomePage = () => {
  return (
    <div className='Home_Section'>
        <Intro/>
        <Groom/>
        <Bride/>
        <div className="Quation">
          <p>A Happy Marrige is a long conversation with <br />
             always seems to be short.
          </p>

        </div>
        <Gallery/>
        <Video/>
        <Location/>
      
    </div>
  )
}

export default HomePage