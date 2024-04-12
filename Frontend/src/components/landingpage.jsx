import React from 'react';
import "./landingpage.css";
import logo from "../assets/logo.png";
import img1 from "../assets/landingimage1.png";
import inspirations from "../assets/inspiredby.png";
import joinSection from "../assets/joinsection.png";
import volunteerImage from "../assets/volunteer.png";
import testimonialImage from "../assets/testimonial.png";
import tstimonial1 from "../assets/tstimonial1.png";
import tstimonial2 from "../assets/tstimonial2.png";
import tstimonial3 from "../assets/tstimonial3.png";
import tstimonial4 from "../assets/tstimonial4.png";
import tstimonial5 from "../assets/tstimonial5.png";
import tstimonial6 from "../assets/tstimonial6.png";
import bigBoxImage from '../assets/bigbox.png';
import phoneImage from '../assets/phone.png';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LandingPage() {
  var settings = {
   dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div className='body'>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="nav-links">
          <Link to="/about" className="login-btn"> About</Link>
          <Link to="/about" className="login-btn"> Contact</Link>
          <Link to="/about" className="login-btn">Donations</Link>
        </nav>
      </div>
      <div className='image1'>
        <img src={img1} alt="image" />
      </div>
      <div className="button-container">
        <button className="button1"><Link to="/signup" className="login-btn">Sign Up</Link></button>
        <button className="button2"><Link to="/login" className="login-btn">Log In</Link></button>
      </div>
      <h1 className='inspired'>INSPIRED BY:</h1>
      <div className='inspiredby'>
        <img src={inspirations} alt="inspired by" />
      </div>

      {/* Adding two boxes of different colors */}
      <div className="box-container">
        <div className="box1">
          <div className="button-container2">
            <div><button className="button3"><Link to="/hiw">How It Work's</Link></button></div>
            <div> <button className="button4"><Link to="/community">Community Events!!</Link></button></div>
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
      <Slider {...settings}>
        <div>
          <img src={tstimonial1} alt="testimonial" />
        </div>
        <div>
          <img src={tstimonial2} alt="testimonial" />
        </div>
        <div>
          <img src={tstimonial3} alt="testimonial" />
        </div>
        <div>
          <img src={tstimonial4} alt="testimonial" />
        </div>
        <div>
          <img src={tstimonial5} alt="testimonial" />
        </div>
        <div>
          <img src={tstimonial6} alt="testimonial" />
        </div>
      </Slider>
      <div className='bluebox'>
        <img className='blueboximage' src={bigBoxImage} alt="bluebox" />
        <button className="button7"><Link to="/mainpage">Get Started</Link></button>
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
