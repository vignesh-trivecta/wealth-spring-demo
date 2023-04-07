import Link from "next/link";
import Head from "next/head";
import { useContext, useState, } from "react";
import { useRouter } from "next/router";
import { userContext } from "../../contexts/useUserContext";

function LoginAuth() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const [loggedin, setLoggedIn] = useContext(userContext);


    // onsubmit function - default version
    // const submitLogin = async (e) => {
    //     e.preventDefault();
        // const res = await fetch('', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify({ user, password }),
        // });

        // const data = await res.json();


        // handle login response from server
        // if(true){
        //     console.log("User Authorization success!");
        //     setIsLoggedIn(!isLoggedIn);
        //     sessionStorage.setItem('isLoggedIn', true);
        //     router.push('../admin/dashboard');
        // }
        // else {
        //     console.log("User doesn't exist");
        //     alert("User doesn't exist");    
        //     setUser('');
        //     setPassword('');
        // }
    // }

    // onsubmit function - using useContext hook
    const submitLogin = async (e) => {
        e.preventDefault();
        console.log({user, password});
        const res = await fetch("/adminlogin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          });
      
          if (res.status === 200) {
            // authentication successful
            // redirect user to dashboard or home page
            setLoggedIn(!loggedin);
            router.push('../admin/dashboard');
          } 
          else {
            // authentication failed
            // display error message to user
            alert("Invalid credentials");
          }

    };

    

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
                <form onSubmit={submitLogin}>
                    <label>User Name:</label>&nbsp;
                    <input onChange={(e) => setUser(e.target.value)} value={user} type="text" placeholder="Enter your username" name="username" id="username" />
                    <br/>
                    <br/>
                    <label>Password:</label>&nbsp;
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Enter your password" name="password" id="password" />
                    <br/>
                    <br/>
                    <button className="btn btn-primary" type='submit' onClick={submitLogin}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginAuth;