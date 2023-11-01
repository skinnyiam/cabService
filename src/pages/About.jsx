import React from 'react'
import Benefits from './Benefits'
import Facts from './Facts'
import SeamlessExp from './SeamlessExp'
import Footer from './Footer'

import staring from '../assets/staring.jpg';

const About = () => {
  return (
    <><div className="page-info">
          <div className="row">
              <h1 className='text-5xl'>About Us</h1>
              <hr />
          </div>
      </div><div className="about">
              <div className="row">
                  <div className="col-2">
                      <p>Welcome to IntrcitiCabs, your reliable partner in transportation services. We are a premier cab service providing company dedicated to ensuring safe, convenient, and comfortable journeys for our valued customers. With a commitment to excellence and a passion for customer satisfaction, IntrcitiCabs has become a trusted name in the transportation industry.</p><br />
                      <p>Our journey began with a vision to redefine the way people experience taxi services. We set out to create a network of modern, clean, and well-maintained vehicles driven by professional, courteous, and highly skilled drivers. At IntrcitiCabs, we take pride in offering a diverse fleet of vehicles to meet the diverse needs of our clients, whether it's a swift ride to the airport, a special event, or a city tour.</p><br />
                      <p>What sets us apart is our dedication to safety and reliability. We prioritize your well-being, using the latest technology to ensure smooth and secure rides. Our commitment to punctuality, transparency in pricing, and unwavering customer support has made us a preferred choice for individuals and businesses alike.</p><br />
                      <p>IntrcitiCabs is more than just a cab service; we are your partners in exploring the world, one journey at a time. Join us on this incredible ride, and experience the difference with IntrcitiCabs. Your journey, your way!</p>                </div>
                  <div className="col-2">
                      <img src={staring} alt="" />
                  </div>
              </div>
          </div>
          
          <Facts />
          <SeamlessExp />
          <Footer />
          </>
           
       
  )
}

export default About
