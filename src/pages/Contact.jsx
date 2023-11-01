import React from 'react'
import SeamlessExp from './SeamlessExp'
import Footer from './Footer'

import phone from '../assets/phone.png';
import email from '../assets/email.png';
import location from '../assets/location.png';

const Contact = () => {
  return (
    <><div className="page-info">
          <div className="row">
              <h1>Contact Us</h1>
              <hr />
          </div>
      </div><div className="contact-form">
              <div className="row">
                  <div className="col-2">
                      <form>
                          <h3>Reach Out Us</h3>
                          <p>Have questions or need assistance? Contact us today for reliable and convenient cab booking services. We're here to help you.</p><br />
                          <input type="text" placeholder="Full Name" required />
                          <input type="email" placeholder="Email ID" required />
                          <input type="tel" placeholder="Phone No." required />
                          <textarea rows="3">Write your message....</textarea>
                          <button type="submit">Send Message</button>
                      </form>
                  </div>
                  <div className="col-2">
                      <div className="contact-card">
                          <img src={phone} alt="" />
                          <div>
                              <h4>Call Us</h4>
                              <p>+91 63989 05830</p>
                          </div>
                      </div>
                      <div className="contact-card">
                          <img src={email}alt="" />
                          <div>
                              <h4>Email Us</h4>
                              <p>info@intrciticabs.com</p>
                          </div>
                      </div>
                      <div className="contact-card">
                          <img src={location} alt="" />
                          <div>
                              <h4>Office Address</h4>
                              <p>NR Rai Singh Chowk, Barola NOIDA Gautam Buddha Nagar</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <SeamlessExp />
          <Footer />
          
          </>
  )
}

export default Contact
