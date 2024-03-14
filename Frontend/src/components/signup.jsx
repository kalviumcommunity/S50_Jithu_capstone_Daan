import React, { useState } from 'react';
import './signup.css';
import logo from "../assets/logo.png";
import image1 from "../assets/image1.png";
import axios from 'axios'; 

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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
            
            // Check if the response contains a token
            if (response.data.token) {
                // Extract token from response and set it as a cookie
                const token = response.data.token;
                document.cookie = `token=${token}; path=/`;
                setSuccessMessage('Form submitted successfully.');
                setErrorMessage('');
            } else {
                console.error('Token not found in response:', response);
                setErrorMessage('Error submitting form. Token not found.');
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
                        <a href="#about">About</a>
                        <a href="#contact">Contact Us</a>
                        <a href="#join">Join Us</a>
                    </nav>
                </div>
                <div className='lbox1'>
                    <div className='lbox2'></div>
                    <div className='lformbox'>
                        <h1 className='createaccount'>Create Account</h1>
                        <form className="form1" onSubmit={handleSubmit}>
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
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                    </div>
                </div>
                <div className='image-container'>
                    <img className='img1 animated-image' src={image1} alt="Image" />
                </div>
            </div>
        </div>
    )
}
