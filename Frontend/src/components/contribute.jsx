import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./contribute.css";
import logo from "../assets/logo.png";
import deliver from "../assets/deliver.png";
import image1 from "../assets/conimage1.jpg"; // Import images for carousel
import image2 from "../assets/conimage2.jpg";
import image3 from "../assets/conimage3.jpeg";
import image4 from "../assets/conimage4.jpg";
// import leftArrow from "../assets/carousell.png"; // Import left arrow image
// import rightArrow from "../assets/carouselr.png"; // Import right arrow image

export default function Contribute() {
    const [curr, setCurr] = useState(0);

    // Define an array of slides for the carousel
    const carouselSlides = [image1, image2, image3, image4];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurr((prevCurr) => (prevCurr === carouselSlides.length - 1 ? 0 : prevCurr + 1));
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [carouselSlides.length]);

    const prev = () => {
        setCurr(curr === 0 ? carouselSlides.length - 1 : curr - 1);
    };

    const next = () => {
        setCurr(curr === carouselSlides.length - 1 ? 0 : curr + 1);
    };

    return (
        <div className='conbody'>
            <div className='lheader'>
                <div className='llogo'><img src={logo} alt="Logo" /></div>
                <nav className="nav-links">
                    <Link to="/about" className="login-btn">About</Link>
                    <Link to="/about" className="login-btn">About</Link>
                    <Link to="/about" className="login-btn">About</Link>
                </nav>
            </div>
            <div className='contribox'>
                <div className='conflex'>
                    {/* Render the Carousel images with the provided slides */}
                    <div className='conimages'>
                        {/* <img className="carousell" src={leftArrow} alt="Left Arrow" onClick={prev} /> */}
                        <img className='carouselimages' src={carouselSlides[curr]} alt="" />
                        {/* <img className="carouselr" src={rightArrow} alt="Right Arrow" onClick={next} /> */}
                    </div>
                    <div className='arrow-buttons'></div>
                    <div className='contribox1'>
                        <h1 className='conlcreateaccount'>Contribute What You Have</h1>
                        <form className="conform1">
                            <div className="contrflex">
                                <div className='conform-group'>
                                    <input className='input1'
                                        type="text"
                                        required
                                    />
                                    <label>Food Type</label>
                                </div>
                                <div className='conform-group'>
                                    <input className='input1 ml-3'
                                        type="text"
                                        required
                                    />
                                    <label>Location</label>
                                </div>
                            </div>
                            <div className='conform-group'>
                                <input className='input2'
                                    type="text"
                                    required
                                />
                                <label>Dish Name</label>
                            </div>
                            <div className='conform-group'>
                                <textarea
                                    rows="3"
                                    required
                                ></textarea>
                                <label>Dish Description</label>
                            </div>
                            <div className='conform-group'>
                                <input className='input2'
                                    type="text"
                                    required
                                />
                                <label>Address</label>
                            </div>
                            <div className="conalign">
                                <div className="checkbox-group">
                                    <input
                                        type="checkbox" /> </div>
                                <div><h1 className='agree'> can you <img src={deliver} />in your locality </h1></div>
                            </div>
                            <button className="conformbutton bg-black" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
