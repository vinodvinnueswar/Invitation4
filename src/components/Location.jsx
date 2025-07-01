import React from 'react'
import Border4 from "../Images/Border/Border4.png"

const Location = () => {
  return (
    <div className="Location_Container" >
        <h3 data-aos="fade-up">Venue Location</h3>
        <img src={Border4} alt="" data-aos="fade-up" />
        <div className="Add-Location" data-aos="fade-up"
     data-aos-duration="3000">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.834889439881!2d82.22869667493642!3d16.98267001433846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a382839555bb587%3A0xd097557ca4e75416!2sVenkanna%20Babu%20Function%20Hall!5e0!3m2!1sen!2sin!4v1738651874364!5m2!1sen!2sin" width="480" height="460" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="Button">
          <a href="https://maps.app.goo.gl/zGouKcZ7UEWyTofd8">View Map</a>
        </div>
    </div>
  )
}

export default Location