import {getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth';
import { Link } from 'react-router-dom';

import initializeAuthentication from '../firebase/firebaseinitilize';
import './Login.css';





initializeAuthentication();

const provider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();


const Login = () => {



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
        <div className='login'>
            <img src='https://www.uniqueit.com.bd/wp-content/uploads/2020/04/headerlogo_1550898882.png' alt='nei'/>
           
        <div className='form-full'>
             <h5>Login Your Account</h5>
             <form >
                 <input type="name" name="" id="" placeholder="Your Full Name" />
                 <input className='input' type="email" name="" id="" placeholder="Your Email" />
                 
                 <input className='input' type="password" name="" id="" placeholder='Your Password' />
                 <br />
                 <input className='submit' type="submit" value="LOGIN" />
             </form>
             <h6>Forgot Password</h6>
            
             <button    onClick={handleGoogleSignIn} ><img src='https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg'/> Sign In with Google</button>

             <button    onClick={handleFacebookSignIn} ><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png'/>Sign  with Facebook</button>
             <p>New Unique It ? <Link to='/register'>Sign Up</Link></p>
         </div>
        
     </div>
    );
};

export default Login;