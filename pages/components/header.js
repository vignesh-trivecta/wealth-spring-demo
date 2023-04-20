import React from "react";
import Clock from 'react-live-clock';
import {useRouter} from "next/router";
import { setLoggedIn } from "@/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { setPassword, setUser } from "@/store/userSlice";

const Header = () => {

    const router = useRouter();
    const dispatch = useDispatch();

    const loggedIn = useSelector((state) => state.auth.loggedIn);

    // logout functionality
    const logOut = () => {
        router.push('/');
        dispatch(setLoggedIn(false));
        dispatch(setUser(''));
        dispatch(setPassword(''));
    }

    return(
        <div className="header d-flex justify-content-between px-2 pt-2">
            <h3>
                Wealth Spring
            </h3>
            <div className="d-flex">
                <div className="fs-6">
                    <p>Date: {new Date().toLocaleDateString()}</p>
                    <p>Time: <Clock format={'h:mm a'} ticking={true} timezone={'Asia/Calcutta'} /></p>
                </div>

                <div className="dropdown ms-4">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Admin
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" onClick={logOut}>Log out</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;