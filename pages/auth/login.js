import Link from "next/link";
import Head from "next/head";
import { useState, } from "react";
import { useRouter } from "next/router";

function Login() {

    const [user, setUser] = useState('');
    const router = useRouter();

    function submitLogin() {
        router.push('../admin/dashboard');
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
                    <label>User Name:</label>&nbsp;
                    <input onChange={(e) => setUser(e.target.value)} type="text" placeholder="Enter your username" name="username" id="username" />
                    <br/>
                    <br/>
                    <label>Password:</label>&nbsp;
                    <input type="password" placeholder="Enter your password" name="password" id="password" />
                    <br/>
                    <br/>
                    <button className="btn btn-primary" type='button' onClick={submitLogin}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;