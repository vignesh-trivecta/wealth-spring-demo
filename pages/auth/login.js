import Link from "next/link";
import Head from "next/head";
import { useState, } from "react";
import { useRouter } from "next/router";

function Login() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    // onsubmit function
    const submitLogin = async (e) => {
        e.preventDefault();
        // const res = await fetch('', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify({ user, password }),
        // });

        // const data = await res.json();


        // handle login response from server
        if(true){
            console.log("User Authorization success!");
            setIsLoggedIn(!isLoggedIn);
            sessionStorage.setItem('isLoggedIn', true);
            router.push('../admin/dashboard');
        }
        else {
            console.log("User doesn't exist");
            alert("User doesn't exist");    
            setUser('');
            setPassword('');
        }
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

export default Login;