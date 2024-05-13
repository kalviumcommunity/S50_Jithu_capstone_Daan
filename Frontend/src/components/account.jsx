import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/homeIcon.png';
import accountIcon from '../assets/accountIcon.png';
import aboutUsIcon from '../assets/aboutUsIcon.png';
import donationIcon from '../assets/donationIcon.png';
import "./accont.css";

export default function Account() {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        about: ''
    });

    useEffect(() => {
        const userId = Cookies.get('userid');

        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/users/${userId}`);
                const { username, email, about } = response.data;
                setUserData({ username, email, about });
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

    const handleDelete = async (contributionId) => {
        try {
            await axios.delete(`http://localhost:4000/contribute/${contributionId}`);
            setImages(prevImages => prevImages.filter(image => image._id !== contributionId));
        } catch (error) {
            console.error('Error deleting contribution:', error);
        }
    };

    return (
        <div className='accbody'>
            <div></div>
            <div className='sidewindow '>
                <nav className="accountnav-links">
                    <Link to="/about" className="accountlogin-btn">
                        <div className="nav-item ">
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
            <div className='thepost overflow-x-auto'>
                <div className='profile1 flex'>
                    <div className='profile-section flex'>
                        <div>
                            <img className='small-profile mt-15' src="" alt="Profile" />
                        </div>

                        <div className='profile-details mt-10 ml-20'>
                            <h1 className='profile-name mt-3'>
                                {userData.username}
                            </h1>
                            <h1>
                                {userData.about}
                            </h1>
                            <h1>
                                {userData.email}
                            </h1>
                        </div>
                    </div>
                    <div className='profile-buttons mt-12 '>
                        <button className='profile-bottonss'>Edit</button>
                        <button className='profile-bottonss'>Add</button>
                        <button className='profile-bottonss'>logout</button>
                    </div>
                </div  >
                <h1 className='mypost ml-10 mt-10'>My Posts</h1>
                <div className='Allscroll ml-10'>
                    <div className="posts-grid">
                        {images && images
                            .slice(0, 4)
                            .map((image, index) => (
                                <div className='post-section mt-10' key={index}>
                                    <div className='myposts'>
                                        <div className='accpost-mainbox '>
                                            <div className='flex items-center '>
                                                <div>
                                                    <img className='accpost-box' src={image.image} alt="Post" />
                                                </div>
                                                <div className=''>
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
                                                        <div className='accform-post'>
                                                            <div><h1 className='accform-texts'>Location:</h1></div>
                                                            <div><input className="accform-postdetails" type="text" id="llocation" name="llocation" value={image.location} readOnly /></div>
                                                        </div>
                                                    </div>
                                                    <div className='accmenu-canDeliver'>
                                                        <div className='accform-postflex'>
                                                            <div><h1 className='accform-texts'>Delivery Facility:</h1></div>
                                                            <div className='delivery'>
                                                                <select id="canDeliver" name="canDeliver" defaultValue={image.canDeliver ? "yes" : "no"} disabled>
                                                                    <option value="yes">Yes</option>
                                                                    <option value="no">No</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center ml-20'>
                                                        <div><button className='deletebtn ml-5' onClick={() => handleDelete(image._id)}>delete</button></div>
                                                        <div> <button className='editbtn ml-10'>Edit</button>
                                                        </div>
                                                    </div>
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

    );
}
