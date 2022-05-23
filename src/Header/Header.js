

import { useState } from 'react';
import {  Modal,   } from 'react-bootstrap';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth';
import { Link } from 'react-router-dom';
import './Header.css'
import initializeAuthentication from '../Pages/firebase/firebaseinitilize';
import UseFirebase from '../Pages/firebase/Hooks/UseFirebase';




initializeAuthentication();

const provider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

const Header = () => {
    const {user, logOut} = UseFirebase();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  




    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
           
          
    
        })
    
    } 
    const handleFacebookSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, FacebookProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
    
        })
    
    } 

  

    return (
        
        <div>

<section class="full-container">
      <nav 
        class="navbar navbar-light bg-primary d-flex justify-content-between p-2 flex-lg-row flex-md-row flex-sm-row ">

<h6><PhoneIcon color="primary" />+8801722007005</h6>

        <div class="text-light col-lg-9 ">
          <marquee behavior="" direction="">
          
            <h5>আইটি ট্রেনিং এ সফলতার ৮ বছর
অফলাইন ও অনলাইনে ট্রেনিং চলছে</h5>
          </marquee>


        </div>
        <LinkedInIcon color="primary"/>
        <YouTubeIcon color="secondary" />
        <FacebookIcon color="primary"/>
        
     
        <div class="d-flex align-items-center me-5 ">
       
          {
          user.email ?
          <button className='log-but' onClick={logOut}>Log Out</button>
          :
          <button className='log-butt' onClick={handleShow}>Sign In</button>
          
      }
     
         

          </div>
          
      </nav>

    </section>





 

                    <Modal   show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Your Account</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-bg'   >
            
           
           <div className='form-full'>
          
                <form >
                    
                    <input className='input' type="email" name="" id="" placeholder="Your Email" />
                    
                    <input className='input' type="password" name="" id="" placeholder='Your Password' />
                    <br />
                    <input className='submit' type="submit" value="LOGIN" />
                </form>
                <p>Forgot Password</p>
               <div>
               <button className='g-bgbutton'  onClick={handleGoogleSignIn} ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQVCvwLClys3Jnzm_KA1AZLdeU8ikVqmlLHBqEqMk2a72vyXEuqKuGlfralOOsu_oM8Q&usqp=CAU'/> </button>
   
   <button  className='g-button'    onClick={handleFacebookSignIn} ><img src='https://180dc.org/wp-content/uploads/2017/04/facebook-icon-512x512-1.png'/></button>
   
               </div>
                
            </div></Modal.Body>
            <Modal.Footer>
            <p>New Unique It ? <Link style={{color: "blue"}} to='/register'>Sign Up</Link></p>
        </Modal.Footer>
      </Modal>
            

    </div>
    
    );
};
export default Header;