import React from 'react'


import costumer from '../assets/customer-care.png';
import desination from '../assets/destination.png';
import calendar from '../assets/calendar.png';


const Advantage = () => {
  return (
    <div className="advantages">                      
            <h6>ALL INDIA CAB SERVICES</h6>
            <h2>Intrciticabs <span>Advantages</span></h2>
            <div className="row">
                <div className="card">
                    < img className='ml-16' src={costumer} alt="" />
                    <h4>24/7 Customer <br />Online Support</h4>
                    <p>Call us Anywhere Anytime</p>
                </div>
                <div class="card">
                    < img className='ml-16' src={calendar}alt="" />
                    <h4>Reservation Anytime <br />You Wants</h4>
                    <p>24/7 Online Reservation</p>
                </div>
                <div class="card">
                    < img className='ml-16' src={desination} alt="" />
                    <h4>Lots of Picking <br />Locations</h4>
                    <p>100+ Locations</p>
                </div>
            </div>
        </div>
      
  )
}

export default Advantage
