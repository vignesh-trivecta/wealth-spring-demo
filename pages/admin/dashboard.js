import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";

function Dashboard() {

  const router = useRouter();

  // logout functionality
  const logOut = () => {
    sessionStorage.removeItem('isLoggedIn');
    router.push('/auth/login');
  }



  return (
    <div>
      {/* Page Name */}
      <Head>
        <title>Wealth Spring | Admin Dashboard</title>
        <meta property="og:title" content="Wealth Spring | Admin Dashboard" key="title" />
      </Head>

      {/* Dashboard */}
      <div className="text-center">
        <div className="d-flex justify-content-center">
          <h1 className="flex-fill">Dashboard</h1>
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Admin
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" onClick={logOut}>Log out</button></li>
            </ul>
          </div>
        </div>
          <p>Total Number of Customer Transaction: 100</p>
          <p>Total Number of Customer Orders Executed: 110</p>
          <p>Total Value of Orders: 200000</p>
          <Link href='./createBasket'>
              <button className="btn btn-success">Create a Basket</button>
          </Link>
          &nbsp;
          <Link href='./customerDetails'>
            <button className="btn btn-primary">Map Basket to Customer</button>
          </Link>
      </div>
    </div>
  );
}

export default Dashboard;