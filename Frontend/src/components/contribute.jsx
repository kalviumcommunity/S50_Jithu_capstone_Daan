import React from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import "./contribute.css";
import deliver from "../assets/deliver.png"

export default function Contribute() {
    return (
        <div className='lbody'>
            <div className='lheader'>
                <div className='llogo'><img src={logo} alt="Logo" /></div>
                <nav className="nav-links">
                    <Link to="/about" className="login-btn">About</Link>
                    <Link to="/about" className="login-btn">About</Link>
                    <Link to="/about" className="login-btn">About</Link>
                </nav>
            </div>
            <div className='contribox'>
                <div className='contribox1'>
                    <h1 className='conlcreateaccount'>Contribute What You Have</h1>

                    <form className="conform1" >
                        <div className="contrflex">
                            <div className='conform-group'>
                                <input className='input1'
                                    type="text"
                                    required
                                />
                                <label>Food Type</label>
                            </div>
                            <div className='conform-group'>
                                <input className='input1'
                                    type="text"
                                    required
                                />
                                <label>Location</label>
                            </div>
                        </div>
                        <div className='conform-group'>
                            <input className='input2'
                                type="text"
                                required
                            />
                            <label>Dish Name</label>
                        </div>
                        <div className='conform-group'>
                            <textarea
                                rows="3"
                                required
                            ></textarea>
                            <label>Dish Description</label>
                        </div>
                        <div className='conform-group'>
                            <input className='input2'
                                type="text"
                                required
                            />
                            <label>Address</label>
                        </div>
                        <div className="conalign">
                            <div className="checkbox-group">
                                <input
                                    type="checkbox"/> </div>
                            <div><h1 className='agree'> can you <img src={deliver}/>in your locality </h1></div>
                        </div>
                        <button className="conformbutton bg-black" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
