import React from 'react'

import carWash from '../assets/carWash.png';
import bill from '../assets/bill.png';
import chauffer from '../assets/chauffeur.png';
import shield from '../assets/shield.png';
import money from '../assets/money.png';

const Benefits = () => {
  return (
    <div className="why-choose">
            <h6>INTRCITICABS BENEFITS</h6>
            <h2>Why <span>Choose Us</span></h2>
            <div className="row">
            <div className="col-4 ">
                    <img className='ml-14' src={money} alt="" />
                    <h4>Simplify Your Ride</h4><br />
                    <p>Your One-Way Journey, Your One-Way Fare – No Roundtrip Costs!<br /> Travel smart, <br /> save more </p><br />
                    <a href="/about"><h6>READ MORE</h6></a>
                </div>
                <div className="col-4 ">
                    <img className='ml-14' src={carWash} alt="" />
                    <h4>Clean Car</h4><br />
                    <p>Our fleet boasts spotless vehicles, ensuring a hygienic and pleasant travel experience for all passengers.</p><br />
                    <a href="/about"><h6>READ MORE</h6></a>
                </div>
                <div className="col-4">
                    <img  className='ml-14' src={bill} alt="" />
                    <h4>Transparent Billing</h4><br />
                    <p>At Intrciticabs, we offer <nobr>crystal-clear</nobr> pricing with no hidden fees  or unnecessary charge, ensuring peace of mind.</p><br />
                    <a href="/about"><h6>READ MORE</h6></a>
                </div>
                <div className="col-4">
                    <img  className='ml-14' src={shield} alt="" />
                    <h4>Reliable Service</h4><br />
                    <p>Count on us for punctual pickups and drop-offs, making your journeys hassle-free and dependable.</p><br />
                    <a href="/about"><h6>READ MORE</h6></a>
                </div>
                <div className="col-4">
                    <img  className='ml-14' src={chauffer} alt="" />
                    <h4>Professional Drivers</h4><br />
                    <p>Our skilled chauffeurs prioritize safety and courtesy, ensuring a comfortable and secure ride every time.</p><br />
                    <a href="/about"><h6>READ MORE</h6></a>
                </div>
            </div>
        </div>
  )
}

export default Benefits
