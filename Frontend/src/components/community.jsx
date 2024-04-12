import React from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import contributebg from "../assets/contributebg.png"
import "./community.css"
import carousel1 from "../assets/comcarousel1.jpg"
import carousel2 from "../assets/comcarousel2.webp"
import carousel3 from "../assets/comcarousel3.webp"
import carousel4 from "../assets/comcarousel4.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import phoneImage from '../assets/phone.png';

export default function Community() {
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
        <div className='community-body'>
            <div className='lheader'>
                <div className='llogo'><img src={logo} alt="Logo" /></div>
                <nav className="nav-links">
                    <Link to="/about" className="login-btn"> About</Link>
                    <Link to="/about" className="login-btn"> Contact</Link>
                    <Link to="/about" className="login-btn"> Join Us</Link>
                </nav>
            </div>
            <div className="contribute-bg">
                <img src={contributebg} alt="contributeimage" />
                <div className="text-overlay">
                    “<span className="highlight">Sunday</span> Blessings: A Local Food Giving Event” <br></br>
                    <div className='small-text'>Taking Place on March <span className="highlight">22nd</span> Sunday  </div>
                </div>
            </div>
            <div className='carousel-text'>The Era Of Change</div>
            <div className="community-carousel">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <img className='com-images' src={carousel1} alt="carousel1"></img>
                        </div>
                        <div>
                            <img className='com-images' src={carousel2} alt="carousel2"></img>
                        </div>
                        <div>
                            <img className='com-images' src={carousel3} alt="carousel3"></img>
                        </div>
                        <div>
                            <img className='com-images' src={carousel4} alt="carousel4"></img>
                        </div>

                    </Slider>
                </div>
            </div>
            <div className='carousel-txt'>
                <h1 className='carouseltxt-h1'>
                    "Uniting Hearts, Nourishing Souls: Together, Let's Feed Our Neighbors in Need!"</h1>
                <p className='carouseltxt-p1'>In our caring community, we're coming together to combat hunger and support one another. Join us in this act of solidarity as we share meals and uplift spirits. Together, we're making a meaningful difference, one plate at a time. Let's show that no one is alone in their struggles and that together, we're stronger. Join us in nourishing bodies and hearts alike.





                </p>
            </div>


            <div className='instanews'>
                <h1>Check our Latest News On Instagram</h1>
                <div className="instagram-posts">
                    <div className="insta-post">
                        <img src="https://via.placeholder.com/150" alt="Instagram post 1" />
                    </div>
                    <div className="insta-post">
                        <img src="https://via.placeholder.com/150" alt="Instagram post 2" />
                    </div>
                    <div className="insta-post">
                        <img src="https://via.placeholder.com/150" alt="Instagram post 3" />
                    </div>
                    <div className="insta-post">
                        <img src="https://via.placeholder.com/150" alt="Instagram post 4" />
                    </div>
                </div>
            </div>
            <div className='community-footer'>
                <div className='cfooter'>
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
            </div>
            <div className='cfoot'></div>
        </div>
    );
}
