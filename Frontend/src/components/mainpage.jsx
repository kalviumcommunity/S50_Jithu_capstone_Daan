import React from 'react'
import "./mainpage.css"
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";


export default function mainpage() {
  return (
    <div>
         <div className="mheader">
                <div className="mlogo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav className="mnav-links">

                    <Link to="/about" className="mlogin-btn"> About</Link>
                    <Link to="/about" className="mlogin-btn"> About</Link>
                    <Link to="/about" className="mlogin-btn"> About</Link>

                </nav>


                <div classname="searchbox"></div>
            </div>
         
          
    </div>
  )
}
