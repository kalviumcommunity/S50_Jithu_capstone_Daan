import React, { useState, useEffect } from 'react';
import "./mainpage.css";
import logo from "../assets/logo.png";
import customercare from "../assets/customercare.png";
import chat from "../assets/chat.png";
import { Link } from 'react-router-dom';

export default function Mainpage() {
  const [showMenu, setShowMenu] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the images from the URL
    fetch('http://localhost:4000/contribute')
      .then(response => {
        // Check if response is successful
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        // Convert response to JSON
        return response.json();
      })
      .then(data => {
        // Convert images from buffer format to base64 string
        const imagesWithBase64 = data.map(image => ({
          ...image,
          image: `data:image/png;base64,${image.image.toString('base64')}`
        }));
        // Set images state
        setImages(imagesWithBase64);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []); // Empty dependency array to run effect only once

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="mainpagebg">
      <div>
        <div className="mheader">
          <div className='hambflex'>
            <div>
              <button className='hamburg' onClick={toggleMenu}>
                <div className="grid justify-items-center gap-1.5">
                  <span className={`h-1 w-8 rounded-full bg-white transition ${showMenu ? 'rotate-45 translate-y-2.0' : ''}`}></span>
                  <span className={`h-1 w-8 rounded-full bg-white transition ${showMenu ? 'scale-x-0' : ''}`}></span>
                  <span className={`h-1 w-8 rounded-full bg-white transition ${showMenu ? '-rotate-45 translate-y-2.0' : ''}`}></span>
                </div>
              </button>
            </div>
            <h1 className='menu'>Menu</h1>
          </div>
          <div className="mlogo">
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <button><img className='chatimage' src={chat} alt="Chat Icon" /></button>
          </div>
          <div>
            <button><img className='customercare' src={customercare} alt="Customer Care Icon" /></button>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="menu-page absolute">
          <nav className="mainnav-links">
            <Link to="/about" className="mainlogin-btn">Home</Link>
            <Link to="/account" className="mainlogin-btn"> Account</Link>
            <Link to="/aboutus" className="mainlogin-btn">About Us</Link>
            <Link to="/donation" className="mainlogin-btn">Donation</Link>
          </nav>
        </div>
      )}
      <div className='donate-btn'>
        <button>Donate</button>
      </div>
      <div className="menu-sections">
        {/* Non-veg meals */}
        <div className="menu-section">
          {images && images
            .filter(img => img.foodType === "Non-Veg Meals")
            .slice(0, 4) // Limit to 4 images
            .map((img, index) => (
              <div className="menu-box" key={index}>
                <img src={img.image} alt="Non-Veg Meal" />
                <div className='menu-title'>{img.dishName}</div>
                <div className='menu-address'>{img.address}</div>
                <div className='menu-location'>{img.location}</div>
                <div className='menu-canDeliver'>{img.canDeliver}</div>
              </div>
            ))}
        </div>
        {/* Veg meals */}
        <div className="menu-section">
          {images && images
            .filter(img => img.foodType === "Veg-Meals")
            .slice(0, 4) // Limit to 4 images
            .map((img, index) => (
              <div className="menu-box" key={index}>
                <img src={img.image} alt="Veg Meal" />
                <div className='menu-title'>{img.dishName}</div>
                <div className='menu-address'>{img.address}</div>
                <div className='menu-location'>{img.location}</div>
                <div className='menu-canDeliver'>{img.canDeliver}</div>
              </div>
            ))}
        </div>
        {/* Vegetable dishes */}
        <div className="menu-section">
          {images && images
            .filter(img => img.foodType === "Vegetables")
            .slice(0, 4) // Limit to 4 images
            .map((img, index) => (
              <div className="menu-box" key={index}>
                <img src={img.image} alt="Vegetables" />
                <div className='menu-title'>{img.dishName}</div>
                <div className='menu-address'>{img.address}</div>
                <div className='menu-location'>{img.location}</div>
                <div className='menu-canDeliver'>{img.canDeliver}</div>
              </div>
            ))}
        </div>
        {/* Fruits */}
        <div className="menu-section">
          {images && images
            .filter(img => img.foodType === "Fruits")
            .slice(0, 4) // Limit to 4 images
            .map((img, index) => (
              <div className="menu-box" key={index}>
                <img src={img.image} alt="Fruits" />
                <div className='menu-title'>{img.dishName}</div>
                <div className='menu-address'>{img.address}</div>
                <div className='menu-location'>{img.location}</div>
                <div className='menu-canDeliver'>{img.canDeliver}</div>
              </div>
            ))}
        </div>   
        {/* Others */}
        {/* Add additional sections for other categories as needed */}
      </div>
    </div>
  );
}
