import React from 'react'
import {FaLinkedin , FaTwitter, FaInstagram ,FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="footer">
    <div className="row">
        <div className="col-1">
            <h3>Subscribe Our Newsletter</h3><br />
            <p>Subscribe to our weekly Newsletter & <br />receive updates via email.</p>
            <br />
            <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
            </form>
        </div>
        <div className="col-2">
            <h4>Quick Links</h4><br />
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="contact">Contact Us</a></li>
                <li><a href="/joinus">Partner</a></li>
            </ul>
        </div>
        <div className="col-2">
            <h4>Services</h4><br />
            <ul>
                <li><a href="/">Outstation</a></li>
                <li><a href="/">Local</a></li>
                <li><a href="/">From Airport</a></li>
                <li><a href="/">To Airport</a></li>
            </ul>
        </div>
        <div className="col-2">
            <h4>Policies Pages</h4><br />
            <ul>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms & Conditions</a></li>
                <li><a href="">Disclaimer</a></li>
                <li><a href="">Refund & Cancellation</a></li>
            </ul>
        </div>
    </div>
    <div className="row2">
        
        <div className="col-2 social-icon">
            <a href=""><i className='bx bxl-facebook'><FaFacebook /></i></a> <a href=""><i className='bx bxl-instagram' ><FaInstagram /></i></a> <a href=""><i className='bx bxl-linkedin' ><FaLinkedin /></i></a> <a href=""><i className='bx bxl-twitter' ><FaTwitter /></i></a>
        </div>
    </div>
</section>
  )
}

export default Footer
