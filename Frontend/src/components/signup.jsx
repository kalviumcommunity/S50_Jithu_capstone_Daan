import React, { useState } from 'react';
import './signup.css';
import logo from "../assets/logo.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import axios from 'axios'; 
import { Link } from 'react-router-dom';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showImage, setShowImage] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:4000/users', {
                username: username,
                email: email,
                password: password
            });
            
            if (response.status === 201) {
                setSuccessMessage('Form submitted successfully.');
                setErrorMessage('');
                setShowImage(true);

                // Navigate to mainpage.jsx after 4 seconds
                setTimeout(() => {
                    // Redirect to mainpage.jsx
                    window.location.href = '/mainpage';
                }, 4000);
            } else {
                setErrorMessage('Error submitting form. Please try again later.');
                setSuccessMessage('');
            }

            console.log('Form submitted:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('Error submitting form. Please try again later.');
            setSuccessMessage('');
        }
    };

    return (
        <div>
            <div className='lbody'>
                <div className='lheader'>
                    <div className='llogo'><img src={logo} alt="Logo" /></div>
                    <nav className="nav-links">
      
        <Link to="/about" className="login-btn"> About</Link>
        <Link to="/about" className="login-btn"> About</Link>
        <Link to="/about" className="login-btn"> About</Link>
                   
                </nav>
                </div>
                <div className='llbox1'>
                    <div className='lbox2'></div>
                    <div className='formbox'>
                        <h1 className='lcreateaccount'>Create Account</h1>
                        <form className="lform1" onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    required
                                />
                                <label>Username</label>
                            </div>
                            <div className='form-group'>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                                <label>Email</label>
                            </div>
                            <div className='form-group'>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                                <label>Password</label>
                            </div>
                            <button className="formbutton bg-black" type="submit">Submit</button>
                        </form>
                        {successMessage && <div className="success-message">{successMessage}</div>}
                        {showImage && <img classname="thumbs" src={image2} alt="Success Image" />}
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                    </div>
                </div>
                <div className='image-container'>
                    <img className='limg1 animated-image' src={image1} alt="Image" />
                </div>
            </div>
        </div>
    );
}
