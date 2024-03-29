import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import "./hiw.css";
import title1 from "../assets/hiwtitle1.png";
import title2 from "../assets/hiwtitle2.png";
import donation from "../assets/donation.png";
import donateimage from "../assets/donationimage.png";
import phoneImage from '../assets/phone.png';

export default function Hiw() {
    return (
        <div className='hiwbody'>
            <div className='hbody'>
                <div className='lheader'>
                    <div className='llogo'><img src={logo} alt="Logo" /></div>
                    <nav className="nav-links">
                        <Link to="/about" className="login-btn">About</Link>
                        <Link to="/about" className="login-btn">About</Link>
                        <Link to="/about" className="login-btn">About</Link>
                    </nav>
                </div>
                <h1 className='hiwheading'>How <span className='Daan'>DAAN</span> Works</h1>
                <div className='hiwtitle1'><img src={title1} alt="Title1" /></div>
                <div className='hiwtitle2'><img src={title2} alt="Title2" /></div>
            </div>
            <div className='dflex'>
                <div>
                    <div className='ddiv1'>
                        <img src={donation} className="donationsection" alt="Donation" />
                        <h1 className='dtitle'>Support Us Through Monetary Donations</h1>
                        <p className='dpara'>Your financial contributions are a lifeline for those struggling to put food on the table. With each donation, you provide not just nourishment, but also hope and dignity to individuals facing hunger. Your generosity fuels our mission, enabling us to deliver meals to those who need it most. Together, we can make a profound impact on the lives of our neighbors in need. Thank you for your kindness and support.</p>
                        <div className='dbutton'>
                            <button className="relative group overflow-hidden px-6 h-14 rounded-full flex space-x-2 items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:to-purple-600">
                                <span className="relative text-xl text-white">Donate</span>
                                <div className="flex items-center -space-x-3 translate-x-3">
                                    <div className="w-4 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={donateimage} className="dimage" alt="Donate Image" />
                </div>
            </div>
            {/* Footer section */}
            <div className='footer'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className='divlast'>
                    <div className='call'>
                        <div className='contacts'>
                            <img className='phone' src={phoneImage} alt="phone" />
                            <p>+91 8943695384</p>
                        </div>
                        <div className='contacts'>
                            <img className='phone' src={phoneImage} alt="phone" />
                            <p>+91 9072994796</p>
                        </div>
                    </div>
                    <div className='call'>
                        <div className='contacts'>
                            <p>Contact Us</p>
                        </div>
                        <div className='contacts'>
                            <p>About Us</p>
                        </div>
                        <div className='contacts'>
                            <p>Join Us</p>
                        </div>
                    </div>
                    <div className='call'>
                        <div className='contacts'>
                            <p>Log In</p>
                        </div>
                        <div className='contacts'>
                            <p>Sign In</p>
                        </div>
                        <div className='contacts'> 
                            <p>Get Started</p>
                        </div>
                    </div>

                    <div className="email-input">
                        <h1 className='newsletter'>Join Our New's Letter</h1>
                        <input type="email" placeholder="Enter your email address" />
                        <button className='button8'>Submit</button>
                    </div>
                </div>
               
            </div>
            <div className='foot'></div>
        </div>
    );
}
