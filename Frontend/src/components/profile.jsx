import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import dashboard from "../assets/dashboard.png";
import './accont.css';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/homeIcon.png';
import accountIcon from '../assets/accountIcon.png';
import aboutUsIcon from '../assets/aboutUsIcon.png';
import donationIcon from '../assets/donationIcon.png';
import prodemo from '../assets/Profiledemo.png';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Account() {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        const userId = Cookies.get('userid');

        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/users/${userId}`);
                const { username, email, password } = response.data;
                setUserData({ username, email, password });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (userId) {
            fetchUserData();
        }
    }, []);

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const userId = Cookies.get('userid');
                const response = await axios.get(`http://localhost:4000/contribute/${userId}`);
                const imagesWithBase64 = response.data.map(image => ({
                    ...image,
                    image: `data:image/png;base64,${image.image.toString('base64')}`
                  }));
                setImages(imagesWithBase64);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className=' account-bg overflow-hidden border border-green-800 flex'>
            <div className="side-window">
                <div>
                    <img className='account-logo' src={logo} alt="Logo" />
                </div>
                <div>
                    <div className='dashboard-flex flex'>
                        <div> <img className='dashboard-image' src={dashboard} alt="Dashboard" /></div>
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

            <div className=' '>
                <div className='flex  justify-around  '>
                    <div>
                        <h1 className="profileheading">My Profile</h1>
                        <h1 className='profilewel'>Welcome To Daan</h1>
                    </div>

                    <div className='smallpicflex'>
                        <img className='profile-smallpic' src={prodemo} alt="Profile" />
                        <h1 className='profile-smallpich'>Hello Sami</h1>
                    </div>
                </div>

                <div className='profile-box  flex justif-between pt-10'>
                    <div className='profile-data mr-5'>
                        <div className='profile-photo'>
                            <img className='profile-photo' src={prodemo} alt="Profile" />
                        </div>
                        <div className='profile-form  m-0'>
                            <h1 className='myprofile'>My Profile</h1>
                            <form>
                                <input
                                    className="form-input text-black"
                                    type="text"
                                    placeholder=""
                                    value={userData.username}
                                    onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                                />
                                <input
                                    className="form-input text-black"
                                    type="text"
                                    placeholder=""
                                    value={userData.password}
                                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                                />
                                <input
                                    className="form-input form-email text-black"
                                    type="email"
                                    placeholder=""
                                    value={userData.email}
                                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                />
                                <button className="accsave-btn" type="onsubmit">Save</button>
                            </form>
                        </div>
                    </div>


                    <div className='accpostbox border border-red-800 overflow-hidden flex flex-col justify-center items-center'>
                        <h1 className='Post-heading text-center'>My Posts</h1>
                        <div className='post-scroll '>
                            {images && images
                                .slice(0, 4)
                                .map((image, index) => (
                                    <div key={index}>
                                        <div className='accpost-mainbox'>
                                            <div >
                                                <img className='accpost-box' src={image.image} alt="Post" />
                                            </div>
                                            <div className='accmenu-title'>
                                                <div className='accform-postflex'>
                                                    <div><h1 className='accform-texts'>Title:</h1></div>
                                                    <div><input className="accform-postdetails" type="text" id="title" name="title" value={image.dishName} readOnly /></div>
                                                </div>
                                            </div>
                                            <div className='accmenu-address'>
                                                <div className='accform-postflex'>
                                                    <div><h1 className='accform-texts'>Address:</h1></div>
                                                    <div><input className="accform-postdetails" type="text" id="address" name="address" value={image.address} readOnly /></div>
                                                </div>
                                            </div>
                                            <div className='accmenu-location'>
                                                <div className='accform-postflex'>
                                                    <div><h1 className='accform-texts'>Location:</h1></div>
                                                    <div><input className="accform-postdetails" type="text" id="llocation" name="llocation" value={image.location} readOnly /></div>
                                                </div>
                                            </div>
                                            <div className='accmenu-canDeliver'>
                                                <div className='accform-postflex'>
                                                    <div><h1 className='accform-texts'>Delivery Facility:</h1></div>
                                                    <div>
                                                        <select id="canDeliver" name="canDeliver" defaultValue={image.canDeliver ? "yes" : "no"} disabled>
                                                            <option value="yes">Yes</option>
                                                            <option value="no">No</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
