import React from 'react';
import logo from "../assets/logo.png";
import dashboard from "../assets/dashboard.png"
import './accont.css';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/homeIcon.png';
import accountIcon from '../assets/accountIcon.png';
import aboutUsIcon from '../assets/aboutUsIcon.png';
import donationIcon from '../assets/donationIcon.png';
import prodemo from '../assets/Profiledemo.png';

export default function Account() {
    return (
        <div>
            <div className='account-bg'>
                <div className="side-window">
                    <div>
                        <img className='account-logo' src={logo} alt="Logo" />
                    </div>
                    <div>

                        <div className='dashboard-flex flex'>
                            <div> <img className='dashboard-image' src={dashboard} /></div>
                            <div> <h1 className='dashboard'>My Dashboard</h1></div>
                        </div>

                        <nav className="accountnav-links">
                            <Link to="/about" className="accountlogin-btn">
                                <div className="nav-item">
                                    <img src={homeIcon} alt="Home" className="nav-icon" />
                                    <span className='dashboard-name'>Home</span>
                                </div>
                            </Link>
                            <Link to="/account" className="accountlogin-btn">
                                <div className="nav-item">
                                    <img src={accountIcon} alt="Account" className="nav-icon" />
                                    <span className='dashboard-name'>Account</span>
                                </div>
                            </Link>
                            <Link to="/aboutus" className="accountlogin-btn">
                                <div className="nav-item">
                                    <img src={aboutUsIcon} alt="About Us" className="nav-icon" />
                                    <span className='dashboard-name'>About Us</span>
                                </div>
                            </Link>
                            <Link to="/donation" className="accountlogin-btn">
                                <div className="nav-item">
                                    <img src={donationIcon} alt="Donation" className="nav-icon" />
                                    <span className='dashboard-name'>Donation</span>
                                </div>
                            </Link>
                        </nav>
                    </div>
                </div>

                <div>
                    <h1 className="profileheading">My Profile</h1>
                    <h1 className='profilewel'>Welcome To Daan</h1>
                </div>

                <div className='smallpicflex'>
                    <img className='profile-smallpic' src={prodemo} alt="Profile" />
                    <h1 className='profile-smallpich'>Hello Sami</h1>
                </div>
            </div>
            <div className='profile-box'>

            </div>
            <div className='profile-data'>
                <div className='profile-photo'>
                    <img className='profile-photo' src={prodemo} />
                </div>
                <div className='profile-form'>
                    <h1 className='myprofile'>My Profile</h1>
                    <form>
                        <input className="form-input text-black" type="text" placeholder="" />

                        <input className="form-input text-black" type="text" placeholder="" />

                        <input className="form-input form-email text-black" type="email" placeholder="" />

                        <button className="accsave-btn" type="on-submit">Save</button>
                    </form>
                </div>
            </div>
            <div className='accpostbox'>
                <h1 className='Post-heading'>My Posts</h1>
                <div className='post-scroll'>
                    <div className='accpost-mainbox'>
                        <div className='accpost-box'> </div>
                        <div className='accmenu-title'>
                            <div className='accform-postflex'>
                         <div> <h1 className='accform-texts'>Title:</h1></div>  
  <div> <input  className="accform-postdetails" type="text" id="title" name="title" /></div> 
  </div>
</div>
<div className='accmenu-address'>
<div className='accform-postflex'>
   <div><h1 className='accform-texts'>Address :</h1></div> 
   <div><input  className="accform-postdetails" type="text" id="address" name="address" /></div> 
   </div>
</div>
<div className='accmenu-location'>
<div className='accform-postflex'>
  <div>  <h1 className='accform-texts'>Location :</h1></div>
  <div><input  className="accform-postdetails" type="text" id="llocation" name="llocation" /></div>  
  </div>
</div>
<div className='accmenu-canDeliver'>
<div className='accform-postflex'>
   <div><h1 className='accform-texts'>Delivery Facility :</h1></div> 
  <div>  <select id="canDeliver" name="canDeliver">
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select></div>
</div>
</div>
                        </div>
                   
                </div>
            </div>
        </div>
    );
}
