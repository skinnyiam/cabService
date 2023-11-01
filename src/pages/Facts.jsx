import React from 'react'
import odometer from '../assets/odometer.png';
import gps from '../assets/gps.png';
import taxi from '../assets/taxi.png';
import happyFace from '../assets/happyFace.png';

const Facts = () => {
  return (
    <section className="numbers-speak">
    <h6>OUR FUN FACTS</h6>
    <h2>Numbers <span>Speak</span></h2>
    <div class="row">
        <div  className="card">
            <img  className='ml-14'  src={gps} alt="" />
            <h2>15000<sup>+</sup></h2>
            <p>People Dropped</p>
        </div>
        <div className="card">
            <img  className='ml-14' src={odometer} alt="" />
            <h2>60000<sup>+</sup></h2>
            <p>KM Driven</p>
        </div>
        <div className="card">
            <img  className='ml-14' src={taxi} alt="" />
            <h2>1000<sup>+</sup></h2>
            <p>Taxi & Drivers</p>
        </div>
        <div className="card">
            <img  className='ml-14' src={happyFace} alt="" />
            <h2>2500<sup>+</sup></h2>
            <p>Happy Customers</p>
        </div>
    </div>

</section>
   
  )
}

export default Facts
