import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";
import { setLoggedIn } from "@/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Clock from 'react-live-clock';

function Dashboard() {

  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const router = useRouter();
  const dispatch = useDispatch();

  // logout functionality
  const logOut = () => {
    router.push('/auth/login');
    dispatch(setLoggedIn(false));
    localStorage.setItem('loggedIn', false);
  }

  return (
    (loggedIn)  
    ?
    (<div className="container">
      {/* Page Name */}
      <Head>
        <title>Wealth Spring | Admin Dashboard</title>
        <meta property="og:title" content="Wealth Spring | Admin Dashboard" key="title" />
      </Head>

      {/* Dashboard */}
      <div className="">
        <div className="d-flex justify-content-between">
          <h1 className="">Overview</h1>
          <div className="d-flex justify-content-between">
            <div>
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

          <table className="table-borderless mx-auto">
            <tbody>
              <tr>
                <td>Total Number of Customer Transaction</td>
                <td className="border border-dark p-2">100</td>
              </tr>
              <tr>
                <td className="pe-4">Total Number of Customer Orders Executed</td>
                <td className="border border-dark p-2">110</td>
              </tr>
              <tr>
                <td>Total Value of Orders</td>
                <td className="border border-dark p-2">200000</td>
              </tr>
            </tbody>
          </table>
          <div className="m-5 d-flex justify-content-center">
            <Link href='./createBasket'>
                <button className="btn btn-success">Create a Basket</button>
            </Link>
            &nbsp;
            <Link href='./customerDetails'>
              <button className="btn btn-primary">Map Basket to Customer</button>
            </Link>
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
