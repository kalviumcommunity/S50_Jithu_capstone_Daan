import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./contribute.css";
import logo from "../assets/logo.png";
import deliver from "../assets/deliver.png";
import image1 from "../assets/conimage1.jpg"; // Import images for carousel
import image2 from "../assets/conimage2.jpg";
import image3 from "../assets/conimage3.jpeg";
import image4 from "../assets/conimage4.jpg";
import Cookies from 'js-cookie';

export default function Contribute() {
    const userId = Cookies.get('userid');

    const [formData, setFormData] = useState({
        foodType: "",
        location: "",
        dishName: "",
        dishDescription: "",
        address: "",
        image: null, 
        canDeliver: false,
        creatorId: userId || '',
    });

    const [curr, setCurr] = useState(0);

    const carouselSlides = [image1, image2, image3, image4];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurr((prevCurr) => (prevCurr === carouselSlides.length - 1 ? 0 : prevCurr + 1));
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [carouselSlides.length]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formDataToSend = new FormData();
            const creatorId = Cookies.get('userid');

            formDataToSend.append('foodType', formData.foodType);
            formDataToSend.append('location', formData.location);
            formDataToSend.append('dishName', formData.dishName);
            formDataToSend.append('dishDescription', formData.dishDescription);
            formDataToSend.append('address', formData.address);
            formDataToSend.append('image', formData.image);
            formDataToSend.append('canDeliver', formData.canDeliver);
            formDataToSend.append('creatorId', creatorId);

            const response = await axios.post('http://localhost:4000/contribute', formDataToSend);

            console.log('Response:', response.data);

            // Clear form after successful submission
            setFormData({
                foodType: "",
                location: "",
                dishName: "",
                dishDescription: "",
                address: "",
                image: null,
                canDeliver: false,
                creatorId: '',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            console.log('Error response:', error.response ? error.response.data : 'No response data available');
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (event) => {
        setFormData({
            ...formData,
            image: event.target.files[0]
        });
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
                    <div className='conimages'>
                        <img className='carouselimages' src={carouselSlides[curr]} alt="" />
                    </div>
                    <div className='contribox1'>
                        <h1 className='conlcreateaccount'>Contribute What You Have</h1>
                        <form className="conform1" onSubmit={handleSubmit}>
                            <div className="contrflex">
                                <div className='conform-group'>
                                    <select className='input1 ml-3' name="foodType" value={formData.foodType} onChange={handleInputChange} required>
                                        <option value="">Select Food Type</option>
                                        <option value="Veg-Meals">Veg-Meals</option>
                                        <option value="Non-Veg Meals">Non-Veg Meals</option>
                                        <option value="Vegetables">Vegetables</option>
                                        <option value="Fruits">Fruits</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div className='conform-group'>
                                    <input className='input1'
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <label>Location</label>
                                </div>
                            </div>
                            <div className='conform-group'>
                                <input className='input2'
                                    type="text"
                                    name="dishName"
                                    value={formData.dishName}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label>Dish Name</label>
                            </div>
                            <div className='conform-group'>
                                <textarea
                                    rows="3"
                                    name="dishDescription"
                                    value={formData.dishDescription}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                                <label>Dish Description</label>
                            </div>
                            <div className='conform-group'>
                                <input className='input2'
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label>Address</label>
                            </div>
                            <div className='conform-group'>
                                <input className='input2'
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    required
                                />
                                <label>Upload Image</label>
                            </div>
                            <div className="conalign">
                                <div className="checkbox-group">
                                    <input
                                        type="checkbox"
                                        name="canDeliver"
                                        checked={formData.canDeliver}
                                        onChange={(e) => setFormData({ ...formData, canDeliver: e.target.checked })}
                                    />
                                </div>
                                <div><h1 className='agree'>Can you <img src={deliver} alt="deliver" /> in your locality?</h1></div>
                            </div>
                            <button className="conformbutton bg-black" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
