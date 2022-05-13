import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            
        <Navbar  className="nt" sticky='top' collapseOnSelect expand="lg">
<NavLink className="na"  to="/home">Home</NavLink>
<NavLink className="na"   to="/about">About</NavLink>
<NavLink className="na"   to="/Review">Review</NavLink>
<NavLink className="na"    to="/service">Service</NavLink>
<NavLink className="na"    to="/service">Explore</NavLink>
<NavLink className="daa"   to="/dashbord">DASHBOARD</NavLink>
<NavLink className="na"   to="/login">Login</NavLink>
<NavLink className="na"   to="/login">Login</NavLink>


                
                    </Navbar>            



    </div>
    );
};
export default Header;