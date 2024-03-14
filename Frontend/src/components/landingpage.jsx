import React from 'react';
import "./landingpage.css";
import logo from "../assets/logo.png";
import img1 from "../assets/landingimage1.png";
import inspirations from "../assets/inspiredby.png";
import joinSection from "../assets/joinsection.png";
import volunteerImage from "../assets/volunteer.png";
import testimonialImage from "../assets/testimonial.png";
import testimonialImage2 from "../assets/testimonials2.png";
import bigBoxImage from '../assets/bigbox.png';
import phoneImage from '../assets/phone.png';
import { Link } from 'react-router-dom';


function LandingPage() {
    return (
        <div className='body'>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav className="nav-links">
                    <a href="#about">About</a>
                    <a href="#contact">Contact Us</a>
                    <a href="#join">Join Us</a>
                </nav>
            </div>
            <div className='image1'>
                <img src={img1} alt="image" />
            </div>
            <div className="button-container">
                <button className="button1"><Link to="/signup" className="login-btn">Sign Up</Link></button>
                <button className="button2">Login</button>
            </div>
            <h1 className='inspired'>INSPIRED BY:</h1>
            <div className='inspiredby'>
                <img src={inspirations} alt="inspired by" />
            </div>

            {/* Adding two boxes of different colors */}
            <div className="box-container">
                <div className="box1">
                    <div className="button-container2">
                        <div><button className="button3">How It Works?</button></div>
                        <div> <button className="button4">Community Events!!</button></div>
                    </div>
                </div>
                <div className="box2">
                    <div className='joinsection'>
                        <img src={joinSection} alt="join section" />
                    </div>
                    <div><button className='button5'>Join Us</button></div>
                </div>
            </div>
            <div className='volunteer'><img src={volunteerImage} alt="volunteer section" />
                <div><button className='button6'>I want to be a volunteer</button></div>
            </div>
            <div className='testimonials'><img src={testimonialImage} alt="testimonials" /></div>
            <div className='testimonials2'><img src={testimonialImage2} alt="testimonials2" /></div>
            <div className='bluebox'>
                <img className='blueboximage' src={bigBoxImage} alt="bluebox" />
                <button className='button7'>Get Started</button>
            </div>

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

export default LandingPage;
