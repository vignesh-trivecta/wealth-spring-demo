import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";
import { setLoggedIn } from "@/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Clock from 'react-live-clock';
import { setPassword, setUser } from "@/store/userSlice";
import { useEffect } from "react";
import { setData } from "@/store/dataSlice";

const Dashboard = () => {

  const loggedIn = useSelector((state) => state.auth.loggedIn);
  // const data = useSelector((state) => state.data.data);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(()=> {
    async function getData () {
      const response = await fetch("/api/user");
      const data = await response.json();
      setData(data);
    }
    getData();
  })

  // logout functionality
  const logOut = () => {
    router.push('/auth/login');
    dispatch(setLoggedIn(false));
    dispatch(setUser(''));
    dispatch(setPassword(''));
    localStorage.setItem('loggedIn', false);
  }

  return (
    (loggedIn)  
    ?
    (<div className="container p-5">
      {/* Page Name */}
      <Head>
        <title>Wealth Spring | Admin Dashboard</title>
        <meta property="og:title" content="Wealth Spring | Admin Dashboard" key="title" />
      </Head>

      {/* Dashboard */}
      <div className="">
        <div className="d-flex justify-content-between">
          <h2 className="fw-bold">Dashboard Overview</h2>
          <div className="d-flex justify-content-between">
            <div className="fs-5">
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
        <div className="p-5">
          <table className="table table-bordered border-dark">
            <tbody className="fs-3">
              <tr>
                <td>Total Number of Customer Transaction</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Total Number of Customer Orders Executed</td>
                <td>110</td>
              </tr>
              <tr>
                <td>Total Value of Orders</td>
                <td>200000</td>
              </tr>
            </tbody>
          </table>
          <div className="m-5 d-flex justify-content-center">
            <Link href='./createBasket'>
                <button className="btn btn-success btn-lg m-2">Create a Basket</button>
            </Link>
            &nbsp;
            <Link href='./customerDetails'>
              <button className="btn btn-primary btn-lg m-2">Map Basket to Customer</button>
            </Link>
          </div>
        </div>
      </div>
    </div>)
    : (<div className="d-flex row container m-5">
        <p>No authorized Access</p>
        <p>Please <Link href='../auth/login'>login</Link></p>
      </div>
    )
  );
};

export default Dashboard;
