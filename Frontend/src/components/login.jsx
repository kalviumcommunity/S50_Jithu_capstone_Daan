import React, { useState } from 'react';
import './login.css';
import logo from "../assets/logo.png";
import image1 from "../assets/image4.png";
import axios from 'axios'; 
import google from "../assets/google.png";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:4000/users/login', {
                email: email,
                password: password
            });
            
            // Check if login was successful
            console.log('Login response:', response.data);
            setErrorMessage(''); // Clear any previous error messages

        } catch (error) {
            console.error('Error logging in:', error.response.data.error);
            setErrorMessage(error.response.data.error || 'Error logging in. Please try again later.');
        }
    };

    return (
        <div>
            <div className='llbody'>
                <div className='lheader'>
                    <div className='llogo'><img src={logo} alt="Logo" /></div>
                    <nav className="nav-links">
                        <a href="#about">About</a>
                        <a href="#contact">Contact Us</a>
                        <a href="#join">Join Us</a>
                    </nav>
                </div>
                <div className='lbox1'>
                    <div className='llbox2'></div>
                    <div className='lformbox'>
                        <h1 className='createaccount'>Login</h1>
                        <div className='googleflex'>
  <div >
    <img src={google} className='googlebtn' alt="Google Logo"/>
    </div>
    <div>
    <h1 className="googletxt">Sign Up With Google</h1>
    </div>
    </div>
                        <form className="form1" onSubmit={handleSubmit}>
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
                            <button className="formbutton bg-black" type="submit">Login</button>
                        </form>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                    </div>
                </div>
                <div className='image-container'>
                    <img className='img1 animated-image' src={image1} alt="Image" />
                </div>
            </div>
        </div>
    );
}
