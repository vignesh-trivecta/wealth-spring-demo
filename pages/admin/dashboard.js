import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setData } from "@/store/dataSlice";

const Dashboard = () => {

  const loggedIn = useSelector((state) => state.auth.loggedIn);

  useEffect(()=> {
    async function getData () {
      const response = await fetch("/api/user");
      const data = await response.json();
      setData(data);
    }
    getData();
  })

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
        <h3 className="fw-bold text-center">Dashboard Overview</h3>
        <div className="mt-5">
          <div className="d-flex justify-content-center">
            <table className="table table-bordered table-hover d-flex justify-content-center" style={{width: '50%'}}>
              <tbody className="fs-5 fw-semibold">
                <tr className="bg-secondary bg-gradient">
                  <td>#</td>
                  <td>#</td>
                </tr>
                <tr>
                  <td>Total Number of Customer Transaction</td>
                  <td>115</td>
                </tr>
                <tr>
                  <td>Total Number of Customer Orders Executed</td>
                  <td>36</td>
                </tr>
                <tr>
                  <td>Total Value of Orders</td>
                  <td>5,00,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 d-flex justify-content-center">
            <Link href='./createBasket'>
                <button className="btn btn-success btn-lg m-2">Create a Basket</button>
            </Link>
            &nbsp;
            <Link href='./customerDetails'>
              <button className="btn btn-primary btn-lg m-2">View Customers</button>
            </Link>
          </div>
        </div>
      </div>
    </div>)
    : (<div className="d-flex row container m-5">
        <p>No authorized Access</p>
        <p>Please <Link href='/'>login</Link></p>
      </div>
    )
  );
};

export default Dashboard;
