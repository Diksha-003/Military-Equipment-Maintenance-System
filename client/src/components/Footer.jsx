import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneVolume, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3>Tactical Gear Hub</h3>
                            <p>Designed and built with all the love in the world by our team with the help of our contributors..</p>
                            <div className="footer-icons">
                                <a href='https://www.facebook.com/'><i class="fa-brands fa-facebook" ><FaFacebook /></i></a>
                                <a href='https://www.twitter.com/'><i class="fa-brands fa-twitter"><FaTwitter /></i></a>
                                <a href='https://www.instagram.com/'><i class="fa-brands fa-instagram"><FaInstagram /></i></a>
                                <a href='https://www.linkedin.com/'><i class="fa-brands fa-linkedin-in"><FaLinkedinIn /></i></a>
                                
                                
    
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/request-registration">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/aboutus">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/contactus">Contact Us</a>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Contact Information</h5>
                            <p><FaPhoneVolume /> +91 987243501</p>
                            <p><FaEnvelope /> customer.support@gerahub.com</p>
                            <p><FaPaperPlane /> Mumbai, Maharashtra</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Designed By CDAC Mumbai</p>
            </div>
        </>
    )
}

export default Footer