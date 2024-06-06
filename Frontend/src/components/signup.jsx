import React, { useState } from 'react';
import './signup.css';
import logo from "../assets/logo.png";
import image1 from "../assets/image11.png";
import image2 from "../assets/image2.png";
import axios from 'axios';
import { Link } from 'react-router-dom';
import google from "../assets/google.png";
import Cookies from 'js-cookie';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [about, setAbout] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showImage, setShowImage] = useState(false);
    const [googleBtnClass, setGoogleBtnClass] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleAboutChange = (event) => {
        setAbout(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleGoogleClick = () => {
        window.location.href = "http://localhost:4000/auth/google";
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:4000/users', {
                username: username,
                about: about, // Include the about field here
                email: email,
                password: password
            });
            const { user, token } = response.data;
            console.log(user);
            if (user) {
                Cookies.set('userid', user._id);
                Cookies.set('username', user.username);
                Cookies.set('email', user.email);
                Cookies.set('password', user.password);
                Cookies.set('token', token);
                setSuccessMessage('Form submitted successfully.');
                setErrorMessage('');
                setShowImage(true);
                setTimeout(() => {
                    // Redirect to mainpage.jsx
                    window.location.href = '/mainpage';
                }, 3000);
            } else {
                setErrorMessage('Error submitting form. Please try again later.');
                setSuccessMessage('');
            }

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
                        <div className='googlecontainer'>
                            <button className={`google-signup-btn ${googleBtnClass}`} onClick={handleGoogleClick}>
                                <div className='googleflex'>
                                    <div >
                                        <img src={google} className='googlebtn' alt="Google Logo" />
                                    </div>
                                    <div>
                                        <h1 className="googletxt">Sign Up With Google</h1>
                                    </div>
                                </div>
                            </button>
                        </div>
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
                                    type="text"
                                    value={about}
                                    onChange={handleAboutChange}
                                    required
                                />
                                <label>About</label>
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
                        {showImage && <img className="thumbs" src={image2} alt="Success Image" />}
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
