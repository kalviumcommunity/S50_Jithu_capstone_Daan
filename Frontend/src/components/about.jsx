import React from 'react';
import './about.css';
import about from "../assets/about.png"
import logo from "../assets/logo.png"
import phoneImage from '../assets/phone.png';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className='about-container'>
            <div className='lheader'>
                <div className='llogo'><img src={logo} alt="Logo" /></div>
                <nav className="nav-links">
      
      <Link to="/about" className="login-btn"> About</Link>
      <Link to="/about" className="login-btn"> About</Link>
      <Link to="/about" className="login-btn"> About</Link>
                 
              </nav>

            </div>

            <div className='aboutflex'>
                <div className='violetbg'></div>
            </div>
            <div className='image-overlay'>
                <img src={about} alt='Your Image' />
            </div>
            <div className='break'></div>
            <div className='abflex'>
            <div>
            <div className='aboutus'></div>
            <div className='kalviumimg'></div>
            </div>
            <div className='knowabout'></div>
            </div>
            <div className='professionals'></div>
            <div className='professionalspic'>
                <div className='professional1'></div>
                <div className='professional2'></div>
                <div className='professional3'></div>
            </div>

            <div className='footerl'>
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
