import Link from "next/link";
import Head from "next/head";
import jwt  from "jsonwebtoken";
// import CryptoJS from "crypto-js";
import React from "react";
import { useContext, useState, } from "react";
import { useRouter } from "next/router";
import { userContext } from "../../contexts/useUserContext";
import ReCAPTCHA from "react-google-recaptcha";

function LoginAuth() {

    // declaring state variables
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useContext(userContext);
    
    const recaptchaRef = React.createRef();
    const router = useRouter();
    // const iv = CryptoJS.enc.Hex.parse("26463b878c7e8239e01aa17b21d8228e");

    // function to encrypt the username and password using CryptoJS
    // function encryptedCredentials(user, password, SECRET_KEY) {
    //     const encryptedUser = CryptoJS.AES.encrypt(user, SECRET_KEY, { iv: iv }).toString();
    //     const encryptedPassword = CryptoJS.AES.encrypt(password, SECRET_KEY, { iv: iv }).toString();    
    //     return {encryptedUser, encryptedPassword};
    // }

    // onsubmit function 
    const submitLogin = (e) => {
        e.preventDefault();
        
        // signing the username, password with secret key
        // using jwt to create a authentication token
        // const { encryptedUser, encryptedPassword } = encryptedCredentials(user, password, process.env.SECRET_KEY);
        const token = jwt.sign({user, password}, process.env.SECRET_KEY);
        setLoggedIn(true);
        // localStorage.setItem('loggedIn', true);
        router.push('../admin/dashboard');
        
        // posting the authorized token to backend,
        // based on the received respone 200 or 404 
        // redirecting user to next page
        fetch("http://localhost:8082/adminlogin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            // body: token,
        })
        .then(response => {
            if (response.status === 200) {
            // authentication successful
            // redirect user to dashboard or home page

            // console.log(response.status);
            setLoggedIn(true);
            router.push('../admin/dashboard');
            } 
            else {
            // authentication failed
            // display error message to user

            // console.log(response.status);
            alert("Invalid credentials");
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    };

    function resetInput(e) {
        e.preventDefault();
        setUser('');
        setPassword('');
    }

    const onReCAPTCHAChange = (captchaCode) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early
        if(!captchaCode) {
          return;
        }
        // Else reCAPTCHA was executed successfully so proceed with the 
        // alert
        alert(`Hey, ${email}`);
        // Reset the reCAPTCHA so that it can be executed again if user 
        // submits another email.
        recaptchaRef.current.reset();
      }

    return(
        <div>
            {/* Page Name */}
            <Head>
                <title>Wealth Spring | Admin Login</title>
                <meta property="og:title" content="Wealth Spring | Admin Login" key="title" />
            </Head>

            {/* Login page */}
            <p><Link href='/'>Home</Link></p>
            <div className="text-center">
                <h1>Admin Login</h1>

                {/* Login Form */}
                <form>
                    <div className="mt-2">
                        <label>User Name:</label>&nbsp;
                        <input onChange={(e) => setUser(e.target.value)} value={user} type="text" placeholder="Enter your username" name="username" id="username" />
                    </div>
                    <div className="my-4">
                        <label>Password:</label>&nbsp;
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Enter your password" name="password" id="password" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            size="visible"
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={onReCAPTCHAChange}
                        />
                    </div>
                    <a href="#">Forgot your password?</a>
                    <div className="d-flex justify-content-center mt-2">
                        <button className="btn btn-outline-danger m-1" type='submit' onClick={resetInput}>Reset</button>
                        <button className="btn btn-primary m-1" type='submit' onClick={submitLogin}>Login</button>
                    </div>  
                </form>
            </div>
        </div>
    )
}

export default LoginAuth;
