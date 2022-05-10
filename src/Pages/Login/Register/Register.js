

import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register-form text-center">
        <div>
            <h1>Create New Account</h1>
            <form className="register" >
                <input className="email" type="email" name="" id="" placeholder="Your Email" />
                <br />
                <input className="password" type="password" name="" id="" placeholder="Your Password" />
                <br />
                <input type="password" name="" id="" placeholder="Re-enter Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
            
        </div>
    </div>
    );
};

export default Register;