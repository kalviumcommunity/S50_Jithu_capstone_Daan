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
    fetch('http://localhost:4000/contribute')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        return response.json();
      })
      .then(data => {
        setImages(data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
        <div className="menu-page">
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
        <div className="menu-section">
          {images.filter(img => img.foodType === "Non-Veg Meals").map((img, index) => (
            <div className="menu-box" key={index}>
              <img src={`data:image/jpeg;base64,${img.image}`} alt={img.dishName} />
              <div className='menu-title'>{img.dishName}</div>
              <div className='menu-address'>{img.address}</div>
              <div className='menu-location'>{img.location}</div>
              <div className='menu-canDeliver'>{img.canDeliver ? 'Can Deliver' : 'Cannot Deliver'}</div>
            </div>
          ))}
        </div>
        <div className="menu-section">
          {images.filter(img => img.foodType === 'Veg-Meals').map((img, index) => (
            <div className="menu-box" key={index}>
              <img src={`data:image/jpeg;base64,${img.image}`} alt={img.dishName} />
              <div className='menu-title'>{img.dishName}</div>
              <div className='menu-address'>{img.address}</div>
              <div className='menu-location'>{img.location}</div>
              <div className='menu-canDeliver'>{img.canDeliver ? 'Can Deliver' : 'Cannot Deliver'}</div>
            </div>
          ))}
        </div>
        <div className="menu-section">
          {images.filter(img => img.foodType === 'Vegetables').map((img, index) => (
            <div className="menu-box" key={index}>
              <img src={`data:image/jpeg;base64,${img.image}`} alt={img.dishName} />
              <div className='menu-title'>{img.dishName}</div>
              <div className='menu-address'>{img.address}</div>
              <div className='menu-location'>{img.location}</div>
              <div className='menu-canDeliver'>{img.canDeliver ? 'Can Deliver' : 'Cannot Deliver'}</div>
            </div>
          ))}
        </div>
        <div className="menu-section">
          {images.filter(img => img.foodType === 'Fruits').map((img, index) => (
            <div className="menu-box" key={index}>
              <img src={`data:image/jpeg;base64,${img.image}`} alt={img.dishName} />
              <div className='menu-title'>{img.dishName}</div>
              <div className='menu-address'>{img.address}</div>
              <div className='menu-location'>{img.location}</div>
              <div className='menu-canDeliver'>{img.canDeliver ? 'Can Deliver' : 'Cannot Deliver'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

