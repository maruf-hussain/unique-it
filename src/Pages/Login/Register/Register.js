import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import './Register.css';




const Register = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
// const [name, setName] = useState('');


// const handleNameChange = e => {
//     setName(e.target.value);
// }

const handleEmailChange = e => {
    setEmail(e.target.value);
}

const handlePasswordChange = e => {
    setPassword(e.target.value);
}

    const handleRegistration = e => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,  email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
e.preventDefault();
    }


   

   
   
  


    return (
        <div className="register-form text-center">
            <div>
                <h1>Create New Account</h1>
                <form className="register" onSubmit={handleRegistration}>
                {/* <input onBlur={handleNameChange} className="email" type="name" name="name" id="name" placeholder="Your Full Name" required/> */}
                    <br />
                    <input onBlur={handleEmailChange} className="email" type="email" name="email" id="" placeholder="Your Email" required/>
                    <br />
                    <input onBlur={handlePasswordChange} className="password" type="password" name="password" id="password" placeholder="Your Password" required/>
                    
                    <br />
                    <input className='submit-reg' type="submit" value="Register" />
                </form>
                <p>Already have an account? <Link to="/">Login</Link></p>
                
            </div>
        </div>
    );
};

export default Register;