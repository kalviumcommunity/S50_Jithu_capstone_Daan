import React, { useState } from 'react';
import "./mainpage.css";
import logo from "../assets/logo.png";
import customercare from "../assets/customercare.png";
import chat from "../assets/chat.png";
import { Link } from 'react-router-dom';

export default function Mainpage() {
  const [showMenu, setShowMenu] = useState(false);

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
          <div className="menu-box">
            <div className='menu-title'></div>
          </div>
          <div className="menu-box">
          <div className='menu-title'></div>
          </div>
          <div className="menu-box">
          <div className='menu-title'></div>
          </div>
          <div className="menu-box">
          <div className='menu-title'></div>
          </div>
        </div>
        <div className="menu-section">
          <div className="menu-box">
          <div className='menu-title'></div>
          </div>
          <div className="menu-box">
          <div className='menu-title'></div>
          </div>
          <div className="menu-box">
          <div className='menu-title'></div>
          </div>
          <div className="menu-box">
          <div className='menu-title'></div>
          </div>
        </div>
        <div className="menu-section">
          <div className="menu-box">
          <div className='menu-title'></div>
          </div>
          <div className="menu-box">
          <div className='menu-title'></div>
          </div>
          <div className="menu-box">
          <div className='menu-title'></div>
          </div>
          <div className="menu-box">
          <div className='menu-title'></div>
          </div>
        </div>
        <div className="menu-section">
          <div className="menu-box">
          <div className='menu-title'></div>
          </div>
          <div className="menu-box">
          <div className='menu-title'></div>
          </div>
          <div className="menu-box">
          <div className='menu-title'></div>
          </div>
          <div className="menu-box">
          <div className='menu-title'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
